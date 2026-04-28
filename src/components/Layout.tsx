import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-3 focus:font-bold focus:text-accent-foreground focus:no-underline"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="pt-[72px]" tabIndex={-1}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
