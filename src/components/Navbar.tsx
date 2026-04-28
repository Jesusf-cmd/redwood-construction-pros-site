import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

const PHONE = "4054069830";
const PHONE_DISPLAY = "405-406-9830";

const roofingLinks = [
  { label: "Roofing services hub", to: "/roofing" },
  { label: "Roof repair services", to: "/roofing/roof-repair" },
  { label: "Roof replacement OKC", to: "/roofing/roof-replacement" },
  { label: "Metal roofing options", to: "/roofing/metal-roofing" },
  { label: "Storm damage roof repair", to: "/roofing/storm-damage" },
  { label: "Hail damage roof repair", to: "/roofing/hail-damage" },
  { label: "Roof insurance claim help", to: "/roofing/insurance-claims" },
];
const framingLinks = [
  { label: "Framing contractor hub", to: "/framing" },
  { label: "Residential framing services", to: "/framing/residential" },
  { label: "Commercial framing services", to: "/framing/commercial" },
  { label: "Metal framing contractor", to: "/framing/metal-framing" },
  { label: "Custom home framing", to: "/framing/custom-home" },
];
const areaLinks = [
  { label: "Oklahoma City contractor", to: "/areas/oklahoma-city" },
  { label: "Edmond roofing and framing", to: "/areas/edmond" },
  { label: "Norman construction services", to: "/areas/norman" },
  { label: "Moore storm damage contractor", to: "/areas/moore" },
  { label: "Midwest City roofing", to: "/areas/midwest-city" },
];
const topLinks = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" },
  { label: "Projects", to: "/projects" },
];

const Dropdown = ({ label, links, active, open, setOpen }: { label: string; links: typeof roofingLinks; active: boolean; open: boolean; setOpen: () => void }) => {
  const location = useLocation();
  return (
    <li className="relative">
      <button onClick={setOpen} className={`flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wide transition-colors ${active ? "text-accent" : "text-primary-foreground/70 hover:text-accent"}`}>
        {label} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-72 rounded-lg border border-primary-foreground/10 bg-primary py-2 shadow-xl">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className={`block px-4 py-2.5 text-sm font-medium no-underline transition-colors ${location.pathname === link.to ? "bg-primary-foreground/5 text-accent" : "text-primary-foreground/70 hover:bg-primary-foreground/5 hover:text-accent"}`}>{link.label}</Link>
          ))}
        </div>
      )}
    </li>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [location.pathname]);

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 flex h-[72px] items-center justify-between px-4 backdrop-blur-sm transition-all duration-300 md:px-8 lg:px-16 ${scrolled ? "bg-primary shadow-lg" : "bg-primary/95"}`}>
      <Link to="/" className="flex items-center gap-3 no-underline"><span className="text-lg font-extrabold tracking-tight text-primary-foreground">Redwood Construction Pros</span></Link>
      <ul className="hidden list-none items-center gap-5 lg:flex">
        <Dropdown label="Roofing" links={roofingLinks} active={location.pathname.startsWith("/roofing")} open={menu === "roofing"} setOpen={() => setMenu(menu === "roofing" ? null : "roofing")} />
        <Dropdown label="Framing" links={framingLinks} active={location.pathname.startsWith("/framing")} open={menu === "framing"} setOpen={() => setMenu(menu === "framing" ? null : "framing")} />
        <Dropdown label="Areas" links={areaLinks} active={location.pathname.startsWith("/areas")} open={menu === "areas"} setOpen={() => setMenu(menu === "areas" ? null : "areas")} />
        {topLinks.map((link) => <li key={link.to}><Link to={link.to} className={`text-[13px] font-semibold uppercase tracking-wide no-underline transition-colors ${location.pathname === link.to ? "text-accent" : "text-primary-foreground/70 hover:text-accent"}`}>{link.label}</Link></li>)}
        <li><a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground no-underline transition-colors hover:bg-orange-hover"><Phone className="h-4 w-4" />{PHONE_DISPLAY}</a></li>
      </ul>
      <button className="p-1 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X className="h-6 w-6 text-primary-foreground" /> : <Menu className="h-6 w-6 text-primary-foreground" />}</button>
      {open && (
        <div className="absolute left-0 right-0 top-[72px] max-h-[80vh] overflow-y-auto bg-primary p-4 shadow-xl lg:hidden">
          {[{ label: "Roofing", links: roofingLinks }, { label: "Framing", links: framingLinks }, { label: "Areas", links: areaLinks }].map((group) => (
            <div key={group.label} className="border-b border-primary-foreground/10 py-2">
              <p className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground/40">{group.label}</p>
              {group.links.map((link) => <Link key={link.to} to={link.to} className="block rounded-lg px-4 py-2.5 text-sm font-medium text-primary-foreground/70 no-underline transition-colors hover:bg-primary-foreground/5 hover:text-accent">{link.label}</Link>)}
            </div>
          ))}
          {topLinks.map((link) => <Link key={link.to} to={link.to} className="block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground/70 no-underline transition-colors hover:bg-primary-foreground/5 hover:text-accent">{link.label}</Link>)}
          <a href={`tel:${PHONE}`} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-accent-foreground no-underline transition-colors hover:bg-orange-hover"><Phone className="h-4 w-4" />{PHONE_DISPLAY}</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
