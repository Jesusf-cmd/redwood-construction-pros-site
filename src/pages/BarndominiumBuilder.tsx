import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import PageCTA from "@/components/PageCTA";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const faqs = [
  { question: "How much does a barndominium cost in Oklahoma?", answer: "Barndominiums in Oklahoma run $40–$80 per square foot for the shell (slab, steel frame, exterior panels) and $80–$150 per square foot for a fully finished turnkey build with interior living space, plumbing, electrical, and HVAC." },
  { question: "How long does it take to build a barndominium?", answer: "A basic shell takes 4–6 weeks. A fully finished barndominium with interior buildout takes 8–14 weeks depending on size, finish level, and complexity." },
  { question: "Can a barndominium be used as a primary residence?", answer: "Yes. We build barndominiums designed and permitted as primary residences — full plumbing, electrical, HVAC, insulation, and finished interior. They meet the same building codes as traditional homes." },
  { question: "What is a barndominium?", answer: "A barndominium (barndo) is a metal building with a finished interior designed for living. Steel frame exterior, metal panels, with residential-quality interior — drywall, flooring, cabinets, bathrooms, kitchen, and HVAC. Many include attached shop or storage space." },
  { question: "Do you build barndominiums with attached shops?", answer: "Yes. That's one of the most popular configurations — half living space, half shop. The steel frame spans the full building, with a partition wall between the living area and the shop. Separate HVAC zones, shared slab." },
  { question: "Can I finance a barndominium in Oklahoma?", answer: "Yes, though financing can be different than a traditional home. Some lenders offer construction-to-permanent loans for barndominiums. We can connect you with lenders in the OKC area who finance barndo builds." },
  { question: "Are barndominiums energy efficient?", answer: "They can be. With closed-cell spray foam insulation, a properly designed HVAC system, and energy-efficient windows, a barndominium can match or beat a traditional home's energy performance. The metal exterior also reflects more heat than wood siding." },
  { question: "What foundation do you use for barndominiums?", answer: "Concrete slab-on-grade with rebar and anchor bolts. The slab is poured to spec for the steel frame — bolt patterns must be exact for the columns to line up. We pour our own slabs and don't sub out this step." },
  { question: "Can I customize the floor plan of a barndominium?", answer: "Absolutely. We work from your plans or help you design a layout that fits your needs. Open concept, multiple bedrooms, attached shop, loft space, covered porches — the steel frame allows wide open spans that wood framing can't match." },
  { question: "Do barndominiums hold their value in Oklahoma?", answer: "Yes, increasingly so. As building costs for traditional homes rise, barndominiums are becoming a popular and accepted housing option. They appraise well when built to residential standards with proper permits and inspections." },
];

const BarndominiumBuilder = () => (
  <>
    <SEOHead
      title="Barndominium Builder Oklahoma | Redwood Construction"
      description="Barndominium builder in Oklahoma — slab, steel frame, interior finish. Shell or turnkey. 8–14 weeks. Call 405-760-9706."
      canonical="/barndominium-builder-oklahoma"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Barndominium Builder Oklahoma",
        "provider": { "@type": "GeneralContractor", "name": "Redwood Construction Pros", "telephone": "+1-405-760-9706" },
        "areaServed": { "@type": "State", "name": "Oklahoma" },
        "serviceType": "Barndominium Construction",
      }}
    />

    <section className="section-pad bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-[1.1] max-w-[800px] mb-6">
          Barndominium Builder in Oklahoma — Slab, Steel Frame & Full Interior Finish
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-[700px] mb-8">
          We build barndominiums across Oklahoma — Moore, Oklahoma City, Edmond, Norman, Yukon, and the surrounding metro. From concrete slab to finished interior, we handle every phase. Steel frame, exterior panels, insulation, drywall, plumbing, electrical, HVAC, and final finish. Shell builds and turnkey builds available.
        </p>
        <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors">
          <Phone className="w-5 h-5" /> Call Now: {PHONE_DISPLAY}
        </a>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">What Goes Into a Barndominium Build in Oklahoma</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A barndominium starts with the same foundation as any metal building — a concrete slab poured to spec with anchor bolts for the steel frame. The difference is what happens on the inside. Instead of bare walls and a concrete floor, a barndo gets full residential treatment — insulation, drywall, flooring, plumbing, electrical, HVAC, kitchen, bathrooms, and living space.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The steel frame gives you wide open spans that wood framing can't match. A 40-foot clear span interior with no load-bearing walls in the middle — that's standard in a barndominium and impossible with stick framing. That open layout is one of the biggest reasons people choose barndos over traditional homes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many of our Oklahoma barndominium builds include attached shop space — half living, half shop, under one roof. The steel frame spans the full building with a partition wall between zones. You get a fully finished home and a functional shop without building two separate structures.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Barndominium Build Phases</h3>
            <ol className="flex flex-col gap-3">
              {[
                "Site prep — clear, grade, compact",
                "Pour concrete slab with anchor bolts",
                "Erect steel frame — columns, rafters, purlins",
                "Install exterior wall and roof panels",
                "Install doors, windows, trim",
                "Insulate — spray foam or batt",
                "Frame interior partition walls",
                "Rough-in plumbing, electrical, HVAC",
                "Drywall, tape, texture, paint",
                "Flooring, cabinets, fixtures, trim",
                "Final inspection and walkthrough",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-foreground">
                  <span className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                  <span className="text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Barndominium vs. Traditional Home in Oklahoma</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-background border border-border">
            <h3 className="text-xl font-bold text-primary mb-4">Barndominium Advantages</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Faster build time — 8–14 weeks vs. 5–8 months",
                "Lower cost per sq ft — $80–$150 turnkey vs. $120–$200 traditional",
                "Wide open floor plans — 40'+ clear spans, no interior load walls",
                "Attached shop/garage under the same roof",
                "Steel frame handles Oklahoma wind better than wood",
                "Lower maintenance — metal exterior doesn't rot, warp, or need paint",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground text-sm">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border">
            <h3 className="text-xl font-bold text-primary mb-4">Things to Consider</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Financing can be harder — not all lenders do barndo loans",
                "Some HOAs don't allow metal building exteriors",
                "Resale depends on area — rural OK appraises well, urban less predictable",
                "Interior soundproofing needs attention — metal transmits noise",
                "Condensation management important — proper insulation and vapor barriers",
                "Permitting varies by municipality — we handle all paperwork",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground text-sm">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Barndominium Costs in Oklahoma</h2>
        <div className="max-w-[800px]">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">Barndominium pricing in Oklahoma breaks down into two categories:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <h3 className="text-lg font-bold text-primary mb-2">Shell Only</h3>
              <p className="text-2xl font-extrabold text-accent mb-2">$40–$80 / sq ft</p>
              <p className="text-muted-foreground text-sm">Slab, steel frame, exterior panels, doors, windows. No interior finish. You finish it yourself or hire trades separately.</p>
            </div>
            <div className="p-6 rounded-xl bg-secondary border border-border">
              <h3 className="text-lg font-bold text-primary mb-2">Turnkey Finished</h3>
              <p className="text-2xl font-extrabold text-accent mb-2">$80–$150 / sq ft</p>
              <p className="text-muted-foreground text-sm">Complete build — insulation, drywall, flooring, plumbing, electrical, HVAC, kitchen, bathrooms, and finish work.</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A 2,000 sq ft barndominium in Oklahoma ranges from $80,000 (shell only) to $300,000 (full turnkey with high-end finishes). Attached shop space adds $25–$40 per sq ft for the shop portion.
          </p>
        </div>
      </div>
    </section>

    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-extrabold text-primary mb-6">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/metal-buildings-oklahoma-city" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Metal Buildings OKC</h3>
            <p className="text-sm text-muted-foreground mt-1">Steel shops, commercial buildings, storage.</p>
          </Link>
          <Link to="/custom-home-builder-moore-ok" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Custom Home Builder</h3>
            <p className="text-sm text-muted-foreground mt-1">Ground-up custom homes in Moore & OKC.</p>
          </Link>
          <Link to="/roofing-moore-ok" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Roofing in Moore OK</h3>
            <p className="text-sm text-muted-foreground mt-1">Roof replacement and storm damage repair.</p>
          </Link>
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} heading="Barndominium FAQ — Oklahoma" />
    <PageCTA heading="Ready to Build a Barndominium in Oklahoma?" />
  </>
);

export default BarndominiumBuilder;
