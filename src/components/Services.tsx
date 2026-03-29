import { Home, Building, HardHat, Frame } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Roofing",
    desc: "Full roof replacements, storm damage repairs, metal roofing systems, and insurance work done by certified installers.",
    items: ["Asphalt shingle replacement", "Standing seam metal roofing", "Storm & hail damage repair", "Insurance claim assistance", "Corrugated metal panels", "Gutters & ventilation"],
    link: { text: "Request Roof Inspection →", href: "#contact" },
    featured: false,
  },
  {
    num: "02",
    title: "Metal Buildings",
    desc: "Red iron structures, steel barndominiums, commercial shops, ag buildings, and more — engineered to last 40+ years in Oklahoma weather.",
    items: ["Red iron / I-beam structures", "Steel barndominiums", "Commercial shops & warehouses", "Agricultural & equestrian buildings", "Garages, RV covers & carports", "Full erection & finishing"],
    link: { text: "See Metal Building Options →", href: "#metal-buildings" },
    featured: true,
  },
  {
    num: "03",
    title: "Custom Home Builder",
    desc: "We build custom homes from the ground up — your vision, your floor plan, your timeline. No cookie-cutter builds, no surprises on the bill.",
    items: ["New construction from scratch", "Floor plan & design consultation", "Full project management", "Energy-efficient builds", "Slab, pier & beam foundations", "Finish carpentry & trim"],
    link: { text: "Start Your Home Plan →", href: "#contact" },
    featured: false,
  },
  {
    num: "04",
    title: "Structural Framing",
    desc: "The bones of every great structure. Our framing crew brings precision and speed to residential and light commercial projects across the metro.",
    items: ["Residential wood framing", "Room additions & expansions", "Steel stud & metal framing", "Load-bearing wall work", "Subfloor & deck systems", "Commercial light framing"],
    link: { text: "Get a Framing Quote →", href: "#contact" },
    featured: false,
  },
];

const Services = () => (
  <section id="services" className="section-pad bg-warm-white">
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end mb-12 md:mb-16">
        <div>
          <p className="font-condensed text-[11px] font-semibold tracking-[0.25em] uppercase text-brick flex items-center gap-2.5 mb-4">
            What We Do
            <span className="block w-10 h-px bg-brick" />
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.1] text-charcoal">
            Four Trades.<br /><em className="italic text-brick">One Crew.</em>
          </h2>
        </div>
        <p className="text-[1.05rem] font-light text-text-mid leading-relaxed max-w-[440px]">
          Whether you're dealing with storm damage, need a metal building or red iron structure, dreaming up a custom home, or need a framing crew you can count on — Redwood Construction Pros brings the same standard of craftsmanship to every job site in Moore and the OKC metro.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-cream-dark">
        {services.map((s) => (
          <div
            key={s.num}
            className={`relative p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-cream-dark last:border-r-0 last:border-b-0 overflow-hidden group transition-colors ${
              s.featured ? "bg-charcoal" : "hover:bg-cream"
            }`}
          >
            {/* Top line on hover */}
            <div className={`absolute top-0 left-0 right-0 h-[3px] ${s.featured ? "bg-gold" : "bg-brick"} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400`} />

            {s.featured && (
              <span className="absolute top-4 right-4 font-condensed text-[9px] font-bold tracking-[0.18em] text-gold border px-2 py-0.5" style={{ borderColor: "hsla(38,66%,47%,0.4)" }}>
                FEATURED
              </span>
            )}

            <div className={`font-serif text-[5rem] font-black leading-none -mb-2 select-none ${s.featured ? "text-gold/[0.08]" : "text-brick/[0.06]"}`}>
              {s.num}
            </div>

            <div className={`w-12 h-12 flex items-center justify-center mb-6 ${s.featured ? "bg-gold/[0.12] border border-gold/20" : "bg-charcoal"}`}>
              <svg className={`w-6 h-6 ${s.featured ? "stroke-gold" : "stroke-gold"}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" />
                <line x1="9" y1="21" x2="9" y2="14" />
                <line x1="15" y1="21" x2="15" y2="14" />
                <line x1="9" y1="14" x2="15" y2="14" />
              </svg>
            </div>

            <h3 className={`font-serif text-2xl font-bold mb-3 ${s.featured ? "text-cream" : "text-charcoal"}`}>
              {s.title}
            </h3>
            <p className={`text-[0.95rem] font-light leading-relaxed mb-6 ${s.featured ? "text-primary-foreground/60" : "text-text-mid"}`}>
              {s.desc}
            </p>
            <ul className="flex flex-col gap-1.5 mb-4">
              {s.items.map((item) => (
                <li key={item} className={`text-[0.88rem] flex items-center gap-2 ${s.featured ? "text-primary-foreground/[0.55]" : "text-text-mid"}`}>
                  <span className={`block w-3.5 h-px flex-shrink-0 ${s.featured ? "bg-gold" : "bg-brick"}`} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={s.link.href}
              className={`inline-flex items-center gap-1.5 mt-4 font-condensed text-xs font-bold tracking-[0.12em] uppercase no-underline hover:gap-2.5 transition-all ${
                s.featured ? "text-gold" : "text-brick"
              }`}
            >
              {s.link.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
