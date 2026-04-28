import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEmailClick, trackEvent, trackFormSubmit, trackPhoneClick } from "@/lib/analytics";

const SCROLL_THRESHOLDS = [25, 50, 75, 90];

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackEvent("page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname,
    });
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const firedThresholds = new Set<number>();

    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollableHeight <= 0 ? 100 : Math.round((window.scrollY / scrollableHeight) * 100);

      SCROLL_THRESHOLDS.forEach((threshold) => {
        if (scrollPercent >= threshold && !firedThresholds.has(threshold)) {
          firedThresholds.add(threshold);
          trackEvent("scroll_depth", {
            event_category: "engagement",
            event_label: `${threshold}%`,
            value: threshold,
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      const href = link?.getAttribute("href") ?? "";

      if (href.startsWith("tel:")) trackPhoneClick();
      if (href.startsWith("mailto:")) trackEmailClick();
    };

    const handleSubmit = () => {
      trackFormSubmit();
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
};

export default AnalyticsTracker;
