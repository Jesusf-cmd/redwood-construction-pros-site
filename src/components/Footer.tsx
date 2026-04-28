import { Link } from "react-router-dom";

const PHONE = "4054069830";
const PHONE_DISPLAY = "405-406-9830";
const EMAIL = "jose@redwoodconstructionpros.com";
const ADDRESS = "[OFFICE ADDRESS], Oklahoma City, OK";

const groups = [
  { title: "Roofing", links: [
    ["Roofing services", "/roofing"], ["Roof repair", "/roofing/roof-repair"], ["Roof replacement", "/roofing/roof-replacement"], ["Metal roofing", "/roofing/metal-roofing"], ["Storm damage", "/roofing/storm-damage"], ["Hail damage", "/roofing/hail-damage"], ["Insurance claims", "/roofing/insurance-claims"],
  ] },
  { title: "Framing", links: [
    ["Framing services", "/framing"], ["Residential framing", "/framing/residential"], ["Commercial framing", "/framing/commercial"], ["Metal framing", "/framing/metal-framing"], ["Custom home framing", "/framing/custom-home"],
  ] },
  { title: "Areas", links: [
    ["Oklahoma City", "/areas/oklahoma-city"], ["Edmond", "/areas/edmond"], ["Norman", "/areas/norman"], ["Moore", "/areas/moore"], ["Midwest City", "/areas/midwest-city"],
  ] },
  { title: "Company", links: [
    ["About", "/about"], ["Contact", "/contact"], ["Blog", "/blog"], ["Projects", "/projects"],
  ] },
];

const Footer = () => (
  <footer className="bg-primary px-4 py-16 md:px-8 lg:px-16">
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
      <div>
        <p className="mb-3 text-lg font-extrabold text-primary-foreground">Redwood Construction Pros</p>
        <p className="mb-5 text-sm leading-6 text-primary-foreground/60">Oklahoma City's locally owned roofing, framing, and construction contractor. Serving Oklahoma City, Edmond, Norman, Moore, Midwest City & surrounding areas.</p>
        <div className="flex flex-col gap-2 text-sm font-medium">
          <a href={`tel:${PHONE}`} className="text-primary-foreground/70 no-underline transition-colors hover:text-accent">{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`} className="text-primary-foreground/70 no-underline transition-colors hover:text-accent">{EMAIL}</a>
          <span className="text-primary-foreground/70">{ADDRESS}</span>
        </div>
      </div>
      {groups.map((group) => (
        <div key={group.title}>
          <p className="mb-4 text-sm font-bold text-primary-foreground">{group.title}</p>
          <div className="flex flex-col gap-2">
            {group.links.map(([label, to]) => <Link key={to} to={to} className="text-sm text-primary-foreground/55 no-underline transition-colors hover:text-accent">{label}</Link>)}
          </div>
        </div>
      ))}
    </div>
    <div className="mx-auto mt-10 max-w-[1200px] border-t border-primary-foreground/10 pt-6">
      <p className="text-xs text-primary-foreground/35">© 2026 Redwood Construction Pros LLC. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
