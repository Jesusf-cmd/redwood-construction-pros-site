import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

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
    { label: "Metal Buildings", href: "#metal-buildings" },
    { label: "About", href: "#about" },
    { label: "Service Area", href: "#service-area" },
    { label: "Reviews", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-16 h-[72px] border-b transition-all duration-300 ${
        scrolled ? "bg-charcoal/[0.98]" : "bg-charcoal/[0.96]"
      } backdrop-blur-sm`}
      style={{ borderBottomColor: "hsla(38, 66%, 47%, 0.15)" }}
    >
      <a href="#hero" className="flex items-center gap-3 no-underline">
        <div
          className="w-[38px] h-[38px] bg-brick flex items-center justify-center flex-shrink-0"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        >
          <span className="font-serif text-[16px] font-bold text-primary-foreground tracking-tight">R</span>
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-[15px] font-bold text-primary-foreground tracking-wide leading-tight">
            Redwood Construction
          </span>
          <span className="font-condensed text-[10px] font-medium text-gold tracking-[0.18em] uppercase leading-none">
            Moore, Oklahoma
          </span>
        </div>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-condensed text-[13px] font-semibold tracking-[0.12em] uppercase text-primary-foreground/70 no-underline hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="font-condensed text-[13px] font-semibold tracking-[0.12em] uppercase bg-brick text-primary-foreground px-[18px] py-2 no-underline hover:bg-brick-light transition-colors"
          >
            Free Estimate
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button className="md:hidden p-1" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X className="w-6 h-6 text-cream" /> : <Menu className="w-6 h-6 text-cream" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-[72px] left-0 right-0 bg-charcoal flex flex-col gap-3 p-6 md:hidden"
          style={{ borderBottom: "1px solid hsla(38, 66%, 47%, 0.15)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-condensed text-[13px] font-semibold tracking-[0.12em] uppercase text-primary-foreground/70 no-underline hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-condensed text-[13px] font-semibold tracking-[0.12em] uppercase bg-brick text-primary-foreground px-[18px] py-2 no-underline hover:bg-brick-light transition-colors inline-block text-center"
          >
            Free Estimate
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
