import { Link } from "react-router-dom";
import { Phone, Mail, AlertTriangle, Home as HomeIcon, Building, Wrench, CheckCircle, ArrowRight, DollarSign, ClipboardCheck, Hammer, HardHat, Eye, Star, CloudRain, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import PageCTA from "@/components/PageCTA";
import InternalLinks from "@/components/InternalLinks";
import heroImg from "@/assets/hero-construction.jpg";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "name": "Redwood Construction Pros",
      "telephone": "+1-405-760-9706",
      "email": "jose@redwoodconstructionpros.com",
      "url": "https://redwoodconstructionpros.com",
      "areaServed": ["Moore", "Oklahoma City", "Edmond", "Norman", "Yukon", "Mustang"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Moore",
        "addressRegion": "OK",
      },
      "serviceType": ["Roofing", "Roof Replacement", "Hail Damage Repair", "Custom Home Building", "Metal Buildings", "Barndominiums"],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How much does a roof replacement cost in Moore OK?", "acceptedAnswer": { "@type": "Answer", "text": "Most residential roof replacements in Moore OK run $6–$10 per square foot. That includes tear-off, new underlayment, and shingle install. Decking repairs, steep pitch, or upgraded materials like impact-resistant shingles push the price higher." } },
        { "@type": "Question", "name": "Will my insurance cover hail damage roof repair in Oklahoma?", "acceptedAnswer": { "@type": "Answer", "text": "In most cases, yes. Oklahoma homeowner policies typically cover hail and wind damage. We inspect your roof, document every hit, and work directly with your adjuster to get the claim filed and approved." } },
        { "@type": "Question", "name": "How long does a roof replacement take?", "acceptedAnswer": { "@type": "Answer", "text": "A standard residential roof replacement takes 1–2 days. Larger homes or jobs requiring full decking replacement may take 3 days." } },
      ],
    },
  ],
};

const problems = [
  { icon: CloudRain, title: "Roof leaks after storms", text: "Water stains on ceilings, wet insulation, rotting decking — if it's not addressed fast, the damage spreads into framing and drywall." },
  { icon: Zap, title: "Hail damage and insurance claims", text: "Dented shingles, granule loss, adjuster disputes. We document every hit and handle your carrier so nothing gets missed on the scope." },
  { icon: AlertTriangle, title: "Aging roof that needs full replacement", text: "Curling shingles, exposed nail heads, failed flashing. Past its lifespan, repairs won't hold — it needs a full tear-off and re-roof." },
  { icon: HomeIcon, title: "Custom home built right from the ground up", text: "Strong slab, proper framing, no callbacks. We control foundation, structure, and finish — not just cosmetics." },
  { icon: Building, title: "Shop, barndominium, or steel building", text: "Concrete pad to final panel install. We pour the slab, erect the steel, and button up the building — one crew, one contractor." },
];

const processSteps = [
  { icon: ClipboardCheck, title: "Inspection & Estimate", text: "We show up, walk the roof or jobsite, and give you a straight answer — what needs done, what it costs, and how long it takes. No sales pitch." },
  { icon: Hammer, title: "Planning & Materials", text: "We spec materials based on what Oklahoma weather demands — impact-resistant shingles, proper underlayment, engineered steel. Everything ordered and staged before we break ground." },
  { icon: HardHat, title: "Build & Install", text: "Our crew handles the work — tear-off, decking, install, slab pour, steel erection, framing. Owner on-site, no subcontracted middlemen." },
  { icon: Eye, title: "Final Walkthrough", text: "We walk every inch with you. Flashings, drip edge, panel seams, finish grade — nothing gets signed off until it's right." },
];

const faqs = [
  { question: "How much does a roof replacement cost in Moore OK?", answer: "Most residential roof replacements in Moore OK run $6–$10 per square foot. That includes tear-off, new underlayment, and shingle install. Decking repairs, steep pitch, or upgraded materials like impact-resistant shingles push the price higher." },
  { question: "Will my insurance cover hail damage roof repair in Oklahoma?", answer: "In most cases, yes. Oklahoma homeowner policies typically cover hail and wind damage. We inspect your roof, document every hit, and work directly with your adjuster to get the claim filed and approved." },
  { question: "How long does a roof replacement take?", answer: "A standard residential roof replacement takes 1–2 days. Larger homes or jobs requiring full decking replacement may take 3 days." },
  { question: "What type of roof is best for Oklahoma weather?", answer: "Impact-resistant (Class 4) shingles handle hail better and often qualify for insurance discounts. Metal roofing is another strong option — it handles wind up to 140 mph and lasts 40–60 years." },
  { question: "How much does a metal building cost in Oklahoma City?", answer: "Metal buildings run $20–$40 per square foot depending on size, wall height, insulation, and interior finish. A basic 30x40 shop starts around $24,000–$48,000 including slab." },
  { question: "How long does it take to build a custom home in Moore OK?", answer: "Typically 4–8 months depending on size, site prep, and complexity. We control foundation, framing, and structure in-house, which keeps timelines tight." },
  { question: "Do you handle insurance claims for storm damage?", answer: "Yes. We inspect, document, and file with your carrier. We deal with adjusters directly and make sure nothing gets missed on the scope." },
  { question: "What areas do you serve?", answer: "Moore, Oklahoma City, Edmond, Norman, Yukon, Mustang, and the surrounding OKC metro. We're based in Moore and run crews across the metro daily." },
  { question: "Are impact-resistant shingles worth it in Oklahoma?", answer: "Yes. Class 4 impact-resistant shingles withstand hail better, reduce future claim frequency, and most Oklahoma insurers offer 15–28% premium discounts for them." },
  { question: "Can you build a barndominium in Oklahoma?", answer: "Absolutely. We handle the full build — concrete slab, red iron or steel frame, exterior panels, insulation, and interior buildout. Most barndos take 8–14 weeks depending on finish level." },
];

const serviceLinks = [
  { label: "Roofing Contractor in Moore OK", to: "/roofing-moore-ok", description: "Roof replacement, storm damage repair, and insurance claim help for Moore and OKC metro homeowners." },
  { label: "Roof Replacement in Oklahoma City", to: "/roof-replacement-oklahoma-city", description: "Full tear-off and re-roof — asphalt shingles, metal roofing, impact-resistant upgrades." },
  { label: "Hail Damage Roof Repair", to: "/hail-damage-roof-repair-moore-ok", description: "Storm hit Moore? We inspect, document, and handle your insurance claim start to finish." },
  { label: "Custom Home Builder in Moore OK", to: "/custom-home-builder-moore-ok", description: "Ground-up custom homes with in-house foundation, structural framing, and turnkey delivery." },
  { label: "Metal Buildings in Oklahoma City", to: "/metal-buildings-oklahoma-city", description: "Steel shops, commercial buildings, and ag structures — slab to final panel install." },
  { label: "Barndominium Builder in Oklahoma", to: "/barndominium-builder-oklahoma", description: "Full barndominium builds — concrete slab, steel frame, panels, insulation, and interior finish." },
];

const projects = [
  { title: "Roof Replacement — Moore, OK", type: "Roofing", desc: "Full tear-off and re-roof after hail damage. Impact-resistant shingles, new underlayment, replaced 12 sheets of decking. Insurance claim handled start to finish." },
  { title: "30x50 Steel Shop — Oklahoma City", type: "Metal Building", desc: "Concrete slab, red iron frame, R-19 insulation, 26-gauge panels. Built for equipment storage with 12-foot sidewalls and a 14-foot roll-up door." },
  { title: "Custom Home Build — Moore, OK", type: "Custom Home", desc: "2,400 sq ft ground-up build. Post-tension slab, 2x6 framing, standing seam metal roof, open floor plan with custom finishes throughout." },
];

const Index = () => (
  <>
    <SEOHead
      title="Roofing & Construction in Moore OK | Redwood Construction Pros"
      description="Roofing contractor in Moore OK — roof replacement, hail damage repair, custom homes, metal buildings. Call 405-760-9706 for a same-day estimate."
      canonical="/"
      jsonLd={jsonLd}
    />

    {/* ── HERO ── */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Roof replacement after hail damage in Moore Oklahoma"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-20 md:pt-36 md:pb-28">
        <h1 className="text-3xl md:text-4xl lg:text-[48px] font-black text-primary-foreground leading-[1.1] max-w-[880px] mb-6">
          Roofing Contractor in Moore, OK — Hail Damage, Roof Replacement, Custom Homes & Metal Buildings
        </h1>

        <p className="text-base md:text-lg text-primary-foreground/80 font-medium max-w-[700px] mb-10 leading-relaxed">
          Local contractor serving Moore and the Oklahoma City metro with roof replacements, storm damage repair, custom homes, steel buildings, and barndominiums. Fast estimates. Call or text 405-760-9706.
        </p>

        <div className="flex gap-4 flex-wrap mb-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-base px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors"
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

        <div className="flex items-center gap-3 flex-wrap text-primary-foreground/60 text-sm font-semibold">
          <span>Licensed</span>
          <span className="text-accent">•</span>
          <span>Insured</span>
          <span className="text-accent">•</span>
          <span>Moore, OK Based</span>
          <span className="text-accent">•</span>
          <span>Same-Day Estimates</span>
        </div>
      </div>
    </section>

    {/* ── PROBLEMS WE SOLVE ── */}
    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          Problems We Solve in Moore OK & Oklahoma City
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-[700px]">
          If you're dealing with any of these — we handle it. No runaround, no waiting weeks for a callback.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="flex flex-col gap-3 p-6 rounded-xl bg-background border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <p.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── SERVICES HUB ── */}
    <InternalLinks heading="Our Services — Moore OK & OKC Metro" links={serviceLinks} />

    {/* ── WHY CHOOSE US ── */}
    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
            Why Contractors in Moore OK and OKC Lose to Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Most roofing companies sub out everything. They don't pour slabs. They don't frame walls. We do. Redwood Construction Pros handles roofing, concrete, structural steel, framing, and full builds — all under one crew, one owner.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That means fewer delays, fewer finger-pointing callbacks, and a final product built the way it should be — not the cheapest way a sub could get away with.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {[
            "We build from foundation to roof — not just roofing",
            "Concrete + structural background — slabs, footings, grade beams",
            "Faster scheduling than large contractors — no 6-week wait",
            "Built for Oklahoma weather — hail, wind, tornado conditions",
            "Owner on every job — no middleman, no excuses",
          ].map((r) => (
            <div key={r} className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-medium">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROCESS ── */}
    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10">
          How We Work — From Estimate to Final Walkthrough
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <div key={step.title} className="p-6 rounded-xl bg-secondary border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <step.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── PRICING ── */}
    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          What Construction Costs in Oklahoma — Real Numbers
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-[700px]">
          These are ranges — not fixed bids. Final price depends on scope, materials, and site conditions. We give exact numbers after inspection.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Roofing", range: "$6–$10 / sq ft", details: ["Includes tear-off and install", "Varies by material and decking condition", "Impact-resistant shingles add $1–$2/sq ft", "Steep pitch or complex cuts cost more"] },
            { title: "Metal Buildings", range: "$20–$40 / sq ft", details: ["Includes slab and steel erection", "Size, finish level, and insulation affect price", "Roll-up doors, windows, and trim extra", "Turnkey interior buildout available"] },
            { title: "Custom Homes", range: "$120–$200 / sq ft", details: ["Foundation, framing, full finish", "Depends on design and site complexity", "In-house slab and structural work", "Turnkey delivery available"] },
          ].map((p) => (
            <div key={p.title} className="p-8 rounded-xl bg-background border border-border">
              <DollarSign className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">{p.title}</h3>
              <p className="text-2xl font-extrabold text-accent mb-4">{p.range}</p>
              <ul className="flex flex-col gap-2 text-muted-foreground text-sm">
                {p.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── RECENT PROJECTS / PROOF ── */}
    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
          Recent Projects — Moore OK & OKC Metro
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-[700px]">
          Here's what we've been building. Real jobs, real scope, real results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((proj) => (
            <div key={proj.title} className="rounded-xl border border-border overflow-hidden bg-secondary">
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-medium">Project Photo Coming Soon</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">{proj.type}</span>
                <h3 className="text-lg font-bold text-primary mt-2 mb-3">{proj.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Mike R., Moore OK", text: "Had hail damage from the May storm. They came out same day, walked the roof, and handled everything with my insurance. New roof was on in two days. No complaints." },
            { name: "Sarah T., Oklahoma City", text: "We hired them for a 30x50 shop. They poured the slab, set the steel, and had panels up in under three weeks. Clean work, showed up when they said they would." },
          ].map((t) => (
            <div key={t.name} className="p-6 rounded-xl bg-secondary border border-border">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
              <p className="text-sm font-bold text-primary">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} heading="Roofing & Construction FAQ — Moore OK & OKC" />
    <PageCTA />
  </>
);

export default Index;
