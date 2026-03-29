import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Roofing", href: "#roofing" },
    { label: "Custom Homes", href: "#custom-homes" },
    { label: "Metal Buildings", href: "#metal-buildings" },
    { label: "Service Area", href: "#service-area" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-16 h-[72px] transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-primary/95"
      } backdrop-blur-sm`}
    >
      <a href="#hero" className="flex items-center gap-3 no-underline">
        <span className="text-lg font-extrabold text-primary-foreground tracking-tight">
          Redwood Construction Pros
        </span>
      </a>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-6 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[13px] font-semibold tracking-wide uppercase text-primary-foreground/70 no-underline hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
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
        {open ? <X className="w-6 h-6 text-primary-foreground" /> : <Menu className="w-6 h-6 text-primary-foreground" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[72px] left-0 right-0 bg-primary flex flex-col gap-1 p-4 lg:hidden shadow-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-wide uppercase text-primary-foreground/70 no-underline hover:text-accent transition-colors py-3 px-4 rounded-lg hover:bg-primary-foreground/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE}`}
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground text-sm font-bold px-5 py-3 rounded-lg no-underline hover:bg-orange-hover transition-colors mt-2"
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
