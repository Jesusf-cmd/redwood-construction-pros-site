import { Phone, MessageSquare } from "lucide-react";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const metalTypes = [
  {
    num: "01",
    title: "Red Iron Buildings",
    desc: "Primary structural steel I-beam frames with secondary framing — the gold standard for shops, commercial buildings, and large spans.",
    items: ["Primary & secondary steel framing", "Rigid frame clear-span designs", "Engineered for Oklahoma wind zone", "Stamped structural drawings", "Trim, doors & windows included", "Commercial & industrial grades"],
  },
  {
    num: "02",
    title: "Steel Barndominiums",
    desc: "Live in half, work in the other. Barndominiums combine the durability of a metal building with full residential finishing.",
    items: ["Residential + shop combo layouts", "Spray foam & batt insulation", "Custom interior finishing", "Electrical & plumbing rough-in", "Concrete slab & foundation", "Any size or layout you need"],
  },
  {
    num: "03",
    title: "Shops, Ag & Commercial",
    desc: "Farm shops, equipment storage, hay barns, RV covers, warehouses, and light commercial spaces — we do it all.",
    items: ["Agricultural & farm buildings", "Equipment & hay storage", "RV & boat covers", "Carports & open structures", "Warehouses & storage facilities", "Church & community buildings"],
  },
];

const whyStats = [
  { stat: "40+", label: "Year Lifespan", desc: "Properly erected steel buildings outlast wood frame construction in Oklahoma's severe weather climate" },
  { stat: "30%", label: "Less Insurance", desc: "Steel structures typically carry lower commercial insurance premiums than comparable wood buildings" },
  { stat: "IBC", label: "Code Compliant", desc: "All structures engineered to Oklahoma wind & snow loads — stamped drawings available for permitting" },
  { stat: "Custom", label: "Any Size", desc: "From a 30×40 shop to a 200×400 commercial warehouse — we spec and build to your exact dimensions" },
];

const MetalBuildings = () => (
  <section id="metal-buildings" className="section-pad bg-charcoal relative overflow-hidden">
    {/* Grid pattern */}
    <div className="absolute inset-0" style={{
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, hsla(38,66%,47%,0.04) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, hsla(38,66%,47%,0.04) 40px)"
    }} />

    <div className="max-w-[1200px] mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-12 md:mb-16">
        <div>
          <p className="font-condensed text-[11px] font-semibold tracking-[0.25em] uppercase text-gold/80 flex items-center gap-2.5 mb-4">
            Steel & Red Iron Construction
            <span className="block w-10 h-px bg-gold/50" />
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.1] text-cream">
            Oklahoma's Toughest Structures.<br /><em className="italic text-gold">Built Right Here.</em>
          </h2>
        </div>
        <p className="text-[1.05rem] font-light text-primary-foreground/60 leading-relaxed max-w-[440px]">
          Metal buildings are one of the best investments you can make in Oklahoma — they outlast wood, hold up to tornadoes and hail, and cost less to maintain over time. We design, source, and erect every structure ourselves. No middleman.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 mb-12" style={{ border: "1px solid hsla(38,66%,47%,0.12)" }}>
        {whyStats.map((s, i) => (
          <div key={s.label} className="p-7 text-center" style={{ borderRight: i < 3 ? "1px solid hsla(38,66%,47%,0.12)" : "none" }}>
            <p className="font-serif text-[2.4rem] font-black text-gold leading-none mb-1">{s.stat}</p>
            <p className="font-condensed text-[11px] font-semibold tracking-[0.12em] uppercase text-primary-foreground/50 mb-2">{s.label}</p>
            <p className="text-[0.82rem] font-light text-primary-foreground/[0.35] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Building types */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-charcoal-light mb-12">
        {metalTypes.map((t) => (
          <div key={t.num} className="bg-charcoal-mid p-8 hover:bg-[#323230] transition-colors">
            <div className="font-serif text-[3.5rem] font-black text-gold/[0.07] leading-none -mb-1 select-none">{t.num}</div>
            <div className="w-[42px] h-[42px] flex items-center justify-center mb-5" style={{ background: "hsla(38,66%,47%,0.1)", border: "1px solid hsla(38,66%,47%,0.2)" }}>
              <svg className="w-5 h-5 stroke-gold" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h4 className="font-serif text-xl font-bold text-cream mb-2">{t.title}</h4>
            <p className="text-[0.88rem] font-light text-primary-foreground/50 leading-relaxed mb-4">{t.desc}</p>
            <ul className="flex flex-col gap-1.5">
              {t.items.map((item) => (
                <li key={item} className="text-[0.82rem] text-primary-foreground/[0.45] flex items-center gap-2">
                  <span className="block w-3 h-px bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8" style={{ borderTop: "1px solid hsla(38,66%,47%,0.15)" }}>
        <div>
          <h3 className="font-serif text-2xl font-bold text-cream">Ready to Price Out Your Metal Building?</h3>
          <p className="text-[0.9rem] font-light text-primary-foreground/50 mt-1">We'll come out, measure your site, and give you a detailed quote — all on one line-item estimate.</p>
        </div>
        <div className="flex gap-4 flex-wrap items-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-gold text-charcoal font-condensed text-sm font-bold tracking-[0.1em] uppercase px-7 py-3.5 no-underline hover:bg-gold-light hover:-translate-y-px transition-all whitespace-nowrap">
            <MessageSquare className="w-4 h-4" />
            Get a Metal Building Quote
          </a>
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-transparent text-primary-foreground/70 font-condensed text-sm font-bold tracking-[0.1em] uppercase px-7 py-3 no-underline hover:-translate-y-px transition-all whitespace-nowrap" style={{ border: "1px solid hsla(38,66%,47%,0.35)" }}>
            <Phone className="w-4 h-4" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MetalBuildings;
