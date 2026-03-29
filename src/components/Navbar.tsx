import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const serviceLinks = [
    { label: "Roofing in Moore OK", to: "/roofing-moore-ok" },
    { label: "Roof Replacement OKC", to: "/roof-replacement-oklahoma-city" },
    { label: "Hail Damage Repair", to: "/hail-damage-roof-repair-moore-ok" },
    { label: "Custom Home Builder", to: "/custom-home-builder-moore-ok" },
    { label: "Metal Buildings", to: "/metal-buildings-oklahoma-city" },
    { label: "Barndominiums", to: "/barndominium-builder-oklahoma" },
  ];

  const mainLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Service Areas", to: "/service-areas" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-16 h-[72px] transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-primary/95"
      } backdrop-blur-sm`}
    >
      <Link to="/" className="flex items-center gap-3 no-underline">
        <span className="text-lg font-extrabold text-primary-foreground tracking-tight">
          Redwood Construction Pros
        </span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-5 list-none">
        {mainLinks.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className={`text-[13px] font-semibold tracking-wide uppercase no-underline transition-colors ${
                location.pathname === l.to
                  ? "text-accent"
                  : "text-primary-foreground/70 hover:text-accent"
              }`}
            >
              {l.label}
            </Link>
          </li>
        ))}
        {/* Services dropdown */}
        <li className="relative">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-1 text-[13px] font-semibold tracking-wide uppercase text-primary-foreground/70 hover:text-accent transition-colors"
          >
            Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-primary rounded-lg shadow-xl border border-primary-foreground/10 py-2">
              {serviceLinks.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className={`block px-4 py-2.5 text-sm font-medium no-underline transition-colors ${
                    location.pathname === s.to
                      ? "text-accent bg-primary-foreground/5"
                      : "text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/5"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}
        </li>
        <li>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-bold px-5 py-2.5 rounded-lg no-underline hover:bg-orange-hover transition-colors"
          >
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button className="lg:hidden p-1" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-primary-foreground" />
        )}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[72px] left-0 right-0 bg-primary flex flex-col gap-1 p-4 lg:hidden shadow-xl max-h-[80vh] overflow-y-auto">
          {mainLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold tracking-wide uppercase text-primary-foreground/70 no-underline hover:text-accent transition-colors py-3 px-4 rounded-lg hover:bg-primary-foreground/5"
            >
              {l.label}
            </Link>
          ))}
          <div className="border-t border-primary-foreground/10 mt-2 pt-2">
            <p className="text-xs font-bold tracking-widest uppercase text-primary-foreground/40 px-4 py-2">
              Services
            </p>
            {serviceLinks.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="text-sm font-medium text-primary-foreground/70 no-underline hover:text-accent transition-colors py-2.5 px-4 rounded-lg hover:bg-primary-foreground/5 block"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground text-sm font-bold px-5 py-3 rounded-lg no-underline hover:bg-orange-hover transition-colors mt-3"
          >
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
