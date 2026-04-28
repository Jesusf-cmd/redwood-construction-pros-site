import { Link } from "react-router-dom";
import {
  Phone, Mail, ArrowRight, DollarSign, Star,
  CloudRain, Zap, AlertTriangle, Home as HomeIcon, Building,
  ClipboardCheck, Hammer, HardHat, Eye, CheckCircle,
  Shield, Ruler, Clock, MapPin,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import heroImg from "@/assets/hero-construction.jpg";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";
const EMAIL = "jose@redwoodconstructionpros.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      name: "Redwood Construction Pros",
      telephone: "+1-405-760-9706",
      email: EMAIL,
      url: "https://redwoodconstructionpros.com",
      areaServed: ["Moore", "Oklahoma City", "Edmond", "Norman", "Yukon", "Mustang"],
      address: { "@type": "PostalAddress", addressLocality: "Moore", addressRegion: "OK" },
      serviceType: ["Roofing", "Roof Replacement", "Hail Damage Repair", "Custom Home Building", "Metal Buildings", "Barndominiums"],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much does a roof replacement cost in Moore OK?", acceptedAnswer: { "@type": "Answer", text: "Most residential roof replacements in Moore OK run $6–$10 per square foot. That includes tear-off, new underlayment, and shingle install." } },
        { "@type": "Question", name: "Will my insurance cover hail damage roof repair in Oklahoma?", acceptedAnswer: { "@type": "Answer", text: "In most cases, yes. Oklahoma homeowner policies typically cover hail and wind damage. We inspect your roof, document every hit, and work directly with your adjuster." } },
        { "@type": "Question", name: "How long does a roof replacement take?", acceptedAnswer: { "@type": "Answer", text: "A standard residential roof replacement takes 1–2 days. Larger homes or jobs requiring full decking replacement may take 3 days." } },
      ],
    },
  ],
};

/* ── DATA ── */

const problems = [
  { icon: CloudRain, title: "Roof leaks after storms", text: "Water stains on ceilings, wet insulation, rotting decking — if it's not addressed fast, the damage spreads into framing and drywall.", link: "/roofing-moore-ok" },
  { icon: Zap, title: "Hail damage & insurance claims", text: "Dented shingles, granule loss, adjuster disputes. We document every hit and handle your carrier so nothing gets missed on the scope.", link: "/hail-damage-roof-repair-moore-ok" },
  { icon: AlertTriangle, title: "Aging roof needs full replacement", text: "Curling shingles, exposed nail heads, failed flashing. Past its lifespan, repairs won't hold — it needs a full tear-off and re-roof.", link: "/roof-replacement-oklahoma-city" },
  { icon: HomeIcon, title: "Custom home built right", text: "Strong slab, proper framing, no callbacks. We control foundation, structure, and finish — not just cosmetics.", link: "/custom-home-builder-moore-ok" },
  { icon: Building, title: "Shop, barndo, or steel building", text: "Concrete pad to final panel install. We pour the slab, erect the steel, and button up the building — one crew, one contractor.", link: "/metal-buildings-oklahoma-city" },
];

const services = [
  {
    title: "Roofing Contractor in Moore OK",
    to: "/roofing-moore-ok",
    scope: ["Full tear-off & re-roof", "Storm damage repair", "Insurance claim documentation", "Impact-resistant shingle installs"],
    desc: "Residential roofing across Moore and OKC metro — from hail damage claims to full replacements.",
  },
  {
    title: "Roof Replacement in Oklahoma City",
    to: "/roof-replacement-oklahoma-city",
    scope: ["Complete tear-off to decking", "Underlayment & shingle install", "Decking replacement if needed", "Metal roofing options"],
    desc: "Full roof replacement — we strip it down to decking, fix what's rotted, and install a system built for Oklahoma weather.",
  },
  {
    title: "Hail Damage Roof Repair",
    to: "/hail-damage-roof-repair-moore-ok",
    scope: ["Free hail damage inspection", "Full damage documentation", "Insurance adjuster coordination", "Same-day emergency tarps"],
    desc: "Storm hit Moore? We walk the roof, photograph every hit, and handle your insurance claim start to finish.",
  },
  {
    title: "Custom Home Builder in Moore OK",
    to: "/custom-home-builder-moore-ok",
    scope: ["Post-tension & monolithic slabs", "Structural framing", "Full buildout to finish", "Turnkey delivery"],
    desc: "Ground-up custom homes with in-house foundation, structural framing, and full interior finish.",
  },
  {
    title: "Metal Buildings in Oklahoma City",
    to: "/metal-buildings-oklahoma-city",
    scope: ["Concrete slab pour", "Red iron & steel frame erection", "26-gauge panel install", "Insulation & interior buildout"],
    desc: "Steel shops, commercial buildings, and ag structures — from slab to final panel install.",
  },
  {
    title: "Barndominium Builder in Oklahoma",
    to: "/barndominium-builder-oklahoma",
    scope: ["Engineered steel frame", "Concrete foundation", "Exterior panels & insulation", "Full interior finish"],
    desc: "Full barndominium builds — slab, steel frame, panels, insulation, and interior buildout under one crew.",
  },
];

const processSteps = [
  { icon: ClipboardCheck, num: "01", title: "Inspection & Estimate", text: "We show up, walk the roof or jobsite, and give you a straight answer — what needs done, what it costs, and how long it takes. No sales pitch." },
  { icon: Hammer, num: "02", title: "Planning & Materials", text: "We spec materials based on what Oklahoma weather demands — impact-resistant shingles, proper underlayment, engineered steel. Everything staged before we start." },
  { icon: HardHat, num: "03", title: "Build & Install", text: "Our crew handles the work — tear-off, decking, install, slab pour, steel erection, framing. Owner on-site, no subcontracted middlemen." },
  { icon: Eye, num: "04", title: "Final Walkthrough", text: "We walk every inch with you. Flashings, drip edge, panel seams, finish grade — nothing gets signed off until it's right." },
];

const pricing = [
  { title: "Roofing", range: "$6–$10", unit: "per sq ft", factors: ["Tear-off & haul-off included", "Material: 3-tab, architectural, or Class 4 IR", "Decking repairs priced per sheet", "Steep pitch or complex roof adds cost"], popular: false },
  { title: "Metal Buildings", range: "$20–$40", unit: "per sq ft", factors: ["Includes slab & steel erection", "Wall height, insulation, finish level", "Roll-up doors, windows, trim extra", "Turnkey interior buildout available"], popular: true },
  { title: "Custom Homes", range: "$120–$200", unit: "per sq ft", factors: ["Foundation through final finish", "Design complexity & site conditions", "In-house slab & structural framing", "Turnkey delivery available"], popular: false },
];

const projects = [
  { title: "Hail Damage Re-Roof", location: "Moore, OK", type: "Roofing", details: "32-square tear-off. Replaced 14 sheets OSB decking, installed GAF HDZ IR shingles. Insurance claim — $18,200 approved.", timeline: "2 days" },
  { title: "30×50 Steel Shop", location: "Oklahoma City", type: "Metal Building", details: "6\" slab with rebar, red iron frame, 26-gauge panels, R-19 insulation. 12' sidewalls, 14' roll-up door. Turnkey.", timeline: "3 weeks" },
  { title: "2,400 SF Custom Home", location: "Moore, OK", type: "Custom Home", details: "Post-tension slab, 2×6 exterior walls, standing seam metal roof, open plan, custom tile and cabinetry.", timeline: "5 months" },
];

const testimonials = [
  { name: "Mike R.", location: "Moore, OK", text: "Had hail damage from the May storm. They came out same day, walked the roof, and handled everything with my insurance. New roof was on in two days. No complaints." },
  { name: "Sarah T.", location: "Oklahoma City", text: "We hired them for a 30×50 shop build. They poured the slab, set the steel, and had panels up in under three weeks. Clean work, showed up when they said they would." },
  { name: "David L.", location: "Norman, OK", text: "Built our custom home from the ground up. These guys actually understand structure — the slab, the framing, all of it. Not just a finish crew pretending to be builders." },
];

const faqs = [
  { question: "How much does a roof replacement cost in Moore OK?", answer: "Most residential roof replacements in Moore OK run $6–$10 per square foot. That includes tear-off, new underlayment, and shingle install. Decking repairs, steep pitch, or upgraded materials like impact-resistant shingles push the price higher." },
  { question: "Will my insurance cover hail damage roof repair in Oklahoma?", answer: "In most cases, yes. Oklahoma homeowner policies typically cover hail and wind damage. We inspect your roof, document every hit, and work directly with your adjuster to get the claim filed and approved." },
  { question: "How long does a roof replacement take?", answer: "A standard residential roof replacement takes 1–2 days. Larger homes or jobs requiring full decking replacement may take 3 days." },
  { question: "What type of roof is best for Oklahoma weather?", answer: "Impact-resistant (Class 4) shingles handle hail better and often qualify for insurance discounts. Metal roofing is another strong option — it handles wind up to 140 mph and lasts 40–60 years." },
  { question: "How much does a metal building cost in Oklahoma City?", answer: "Metal buildings run $20–$40 per square foot depending on size, wall height, insulation, and interior finish. A basic 30×40 shop starts around $24,000–$48,000 including slab." },
  { question: "How long does it take to build a custom home in Moore OK?", answer: "Typically 4–8 months depending on size, site prep, and complexity. We control foundation, framing, and structure in-house, which keeps timelines tight." },
  { question: "Do you handle insurance claims for storm damage?", answer: "Yes. We inspect, document, and file with your carrier. We deal with adjusters directly and make sure nothing gets missed on the scope." },
  { question: "Are impact-resistant shingles worth it in Oklahoma?", answer: "Yes. Class 4 impact-resistant shingles withstand hail better, reduce future claim frequency, and most Oklahoma insurers offer 15–28% premium discounts for them." },
  { question: "Do you pour your own concrete slabs?", answer: "Yes. We control the slab pour in-house — proper grade, rebar, thickness, and cure time. That's a major advantage over contractors who sub out foundation work." },
  { question: "Can you build a barndominium in Oklahoma?", answer: "Absolutely. We handle the full build — concrete slab, red iron or steel frame, exterior panels, insulation, and interior buildout. Most barndos take 8–14 weeks depending on finish level." },
  { question: "What areas do you serve?", answer: "Moore, Oklahoma City, Edmond, Norman, Yukon, Mustang, and the surrounding OKC metro. We're based in Moore and run crews across the metro daily." },
];

/* ── COMPONENT ── */

const Index = () => (
  <>
    <SEOHead
      title="Roofing & Framing Contractor OKC | Redwood Pros"
      description="Roofing, framing, custom homes, and metal buildings in Oklahoma City. Call 405-760-9706 for a free estimate today."
      canonical="/"
      jsonLd={jsonLd}
    />

    {/* ═══════════ HERO ═══════════ */}
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Roof replacement after hail damage in Moore Oklahoma" className="w-full h-full object-cover" width={1920} height={1080} loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent">Moore, OK & OKC Metro</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-[50px] font-black text-primary-foreground leading-[1.08] max-w-[900px] mb-6">
          Roofing Contractor in Moore, OK — Hail Damage, Roof Replacement, Custom Homes & Metal Buildings
        </h1>

        <p className="text-base md:text-lg text-primary-foreground/75 font-medium max-w-[680px] mb-10 leading-relaxed">
          Local contractor serving Moore and the Oklahoma City metro with roof replacements, storm damage repair, custom homes, steel buildings, and barndominiums. Fast estimates. Call or text {PHONE_DISPLAY}.
        </p>

        <div className="flex gap-4 flex-wrap mb-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-base px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors shadow-lg shadow-accent/25"
          >
            <Mail className="w-5 h-5" />
            Get Same-Day Estimate
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground font-bold text-base px-8 py-4 rounded-lg border border-primary-foreground/20 no-underline hover:bg-primary-foreground/20 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call or Text: {PHONE_DISPLAY}
          </a>
        </div>

        {/* Trust stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[700px]">
          {[
            { val: "Licensed", sub: "& Insured" },
            { val: "Same-Day", sub: "Estimates" },
            { val: "Moore, OK", sub: "Based" },
            { val: "OKC Metro", sub: "Service Area" },
          ].map((s) => (
            <div key={s.val} className="border-l-2 border-accent/40 pl-3">
              <p className="text-primary-foreground font-extrabold text-sm">{s.val}</p>
              <p className="text-primary-foreground/50 text-xs font-medium">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ PROBLEMS WE SOLVE ═══════════ */}
    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Common Issues We Fix</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          Problems We Solve in Moore OK & Oklahoma City
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-[680px]">
          If you're dealing with any of these — we handle it. No runaround, no waiting weeks for a callback.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p) => (
            <Link
              key={p.title}
              to={p.link}
              className="group flex flex-col gap-3 p-6 rounded-xl bg-background border border-border hover:border-accent/40 transition-all no-underline"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <p.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
              <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-auto pt-2">
                See how we fix this <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ SERVICES HUB ═══════════ */}
    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">What We Do</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10">
          Our Services — Moore OK & OKC Metro
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.to} className="flex flex-col p-6 rounded-xl bg-secondary border border-border">
              <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
              <ul className="flex flex-col gap-2 mb-6">
                {s.scope.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to={s.to}
                className="mt-auto inline-flex items-center gap-2 text-accent font-bold text-sm no-underline hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ WHY CHOOSE US ═══════════ */}
    <section className="section-pad bg-primary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">The Difference</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">
            Why Contractors in Moore & OKC Lose to Us
          </h2>
          <p className="text-base text-primary-foreground/70 leading-relaxed mb-4">
            Most roofing companies sub out everything. They don't pour slabs. They don't frame walls. We do. Redwood Construction Pros handles roofing, concrete, structural steel, framing, and full builds — all under one crew, one owner.
          </p>
          <p className="text-base text-primary-foreground/70 leading-relaxed mb-8">
            That means fewer delays, fewer finger-pointing callbacks, and a final product built the way it should be — not the cheapest way a sub could get away with.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm px-6 py-3 rounded-lg no-underline hover:bg-orange-hover transition-colors"
          >
            More About Our Crew <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {[
            { icon: Ruler, text: "We build from foundation to roof — not just roofing" },
            { icon: Shield, text: "Concrete + structural background — slabs, footings, grade beams" },
            { icon: Clock, text: "Faster scheduling than large contractors — no 6-week wait" },
            { icon: Zap, text: "Built for Oklahoma weather — hail, wind, tornado conditions" },
            { icon: HardHat, text: "Owner on every job — no middleman, no excuses" },
          ].map((r) => (
            <div key={r.text} className="flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="w-9 h-9 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <r.icon className="w-4 h-4 text-accent" />
              </div>
              <span className="text-primary-foreground font-medium text-sm leading-relaxed">{r.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ PROCESS ═══════════ */}
    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          From Estimate to Final Walkthrough
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-[600px]">
          Four steps. No surprises. Every job follows this process — roofing, metal buildings, and custom homes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div key={step.title} className="relative p-6 rounded-xl bg-secondary border border-border">
              <span className="text-[40px] font-black text-accent/15 leading-none block mb-2">{step.num}</span>
              <div className="flex items-center gap-2 mb-3">
                <step.icon className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-primary">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ PRICING ═══════════ */}
    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Real Numbers</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          What Construction Costs in Oklahoma
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-[680px]">
          These are ranges — not fixed bids. Final price depends on scope, materials, and site conditions. We give exact numbers after inspection.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div
              key={p.title}
              className={`relative p-8 rounded-xl bg-background border-2 ${
                p.popular ? "border-accent shadow-lg shadow-accent/10" : "border-border"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Requested
                </span>
              )}
              <DollarSign className="w-7 h-7 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-1">{p.title}</h3>
              <p className="text-3xl font-black text-accent mb-1">{p.range}</p>
              <p className="text-sm text-muted-foreground mb-5">{p.unit}</p>
              <ul className="flex flex-col gap-2.5">
                {p.factors.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-[7px] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Need exact numbers?{" "}
          <Link to="/contact" className="text-accent font-semibold no-underline hover:underline">
            Request a free estimate →
          </Link>
        </p>
      </div>
    </section>

    {/* ═══════════ PROOF / PROJECTS ═══════════ */}
    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Recent Work</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          Recent Projects — Moore OK & OKC Metro
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-[680px]">
          Real jobs, real scope, real numbers. Here's what we've been building.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {projects.map((proj) => (
            <div key={proj.title} className="rounded-xl border border-border overflow-hidden bg-secondary group">
              <div className="h-44 bg-muted flex items-center justify-center relative overflow-hidden">
                <span className="text-muted-foreground text-sm font-medium">Project Photo Coming Soon</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">{proj.type}</span>
                  <span className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {proj.location}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{proj.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{proj.details}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-accent">
                  <Clock className="w-3 h-3" /> Completed in {proj.timeline}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl font-extrabold text-primary mb-6">What Homeowners & Property Owners Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-xl bg-secondary border border-border">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="text-sm font-bold text-primary">— {t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════ FAQ ═══════════ */}
    <FAQSection faqs={faqs} heading="Roofing & Construction FAQ — Moore OK & OKC" />

    {/* ═══════════ FINAL CTA ═══════════ */}
    <section className="section-pad bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--accent)/0.15),_transparent_60%)]" />
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Ready to Start?</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-4">
          Get a Fast, No-Pressure Estimate
        </h2>
        <p className="text-primary-foreground/60 text-lg font-medium mb-8 max-w-[560px] mx-auto">
          Limited scheduling available — we book projects on a first-come basis. Call, text, or send us a message to get on the schedule.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-base px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors shadow-lg shadow-accent/25"
          >
            <Phone className="w-5 h-5" />
            Call or Text: {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground font-bold text-base px-8 py-4 rounded-lg border border-primary-foreground/20 no-underline hover:bg-primary-foreground/20 transition-colors"
          >
            <Mail className="w-5 h-5" />
            {EMAIL}
          </a>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-accent font-bold text-sm no-underline hover:underline"
        >
          Or fill out our contact form <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </>
);

export default Index;
