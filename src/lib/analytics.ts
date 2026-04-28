declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (eventName: string, params: Record<string, string | number>) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", eventName, params);
};

export const trackPhoneClick = () => {
  trackEvent("phone_click", {
    event_category: "engagement",
    event_label: "Phone Call Click",
    value: 1,
  });
};

export const trackEmailClick = () => {
  trackEvent("email_click", {
    event_category: "engagement",
    event_label: "Email Link Click",
    value: 1,
  });
};

export const trackFormSubmit = () => {
  trackEvent("form_submit", {
    event_category: "lead",
    event_label: "Contact Form Submission",
    value: 1,
  });
};
