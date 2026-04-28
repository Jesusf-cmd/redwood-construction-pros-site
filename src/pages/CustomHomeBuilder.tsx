import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import PageCTA from "@/components/PageCTA";

const PHONE = "4054069830";
const PHONE_DISPLAY = "405-406-9830";

const faqs = [
  { question: "How much does a custom home cost in Moore OK?", answer: "Custom homes in the Moore and OKC area run $120–$200 per square foot depending on site prep, foundation complexity, finish level, and material choices. A 2,000 sq ft home typically runs $240,000–$400,000." },
  { question: "How long does it take to build a custom home in Oklahoma?", answer: "4–8 months depending on size, complexity, and weather. We control foundation, framing, and structure in-house which keeps the timeline tight. A 2,000 sq ft home is typically 5–6 months." },
  { question: "Do you pour your own foundations?", answer: "Yes. We pour our own slabs and foundations — proper grade, rebar spacing, thickness, and cure time. This is a huge advantage over builders who sub out the most critical part of the build to the lowest bidder." },
  { question: "What's included in a turnkey custom home build?", answer: "Everything from site prep to final walkthrough — excavation, slab pour, framing, roofing, electrical, plumbing, HVAC, insulation, drywall, paint, flooring, cabinets, fixtures, and final landscaping grade." },
  { question: "Can I build on my own land in Moore OK?", answer: "Absolutely. If you own a lot in Moore or the OKC metro, we handle the full build from permits and site prep to finished home. If you need help finding land, we can point you to areas we know." },
  { question: "Do you build investment properties?", answer: "Yes. We build single-family rental properties and spec homes in the Moore and OKC area. Our structural background means lower maintenance costs long-term — better foundations, proper drainage, and durable materials." },
  { question: "What type of foundation do you use?", answer: "Mostly post-tension slab-on-grade for the Moore/OKC area. Oklahoma's expansive clay soil requires specific slab design to prevent cracking and settling. We also do pier-and-beam when the site or plan calls for it." },
  { question: "Do you handle permits and inspections?", answer: "Yes. We pull all permits, schedule inspections, and handle the paperwork. You get updates at every stage — foundation, framing, mechanical rough-in, and final." },
  { question: "What areas do you build custom homes in?", answer: "Moore, Norman, south Oklahoma City, Edmond, Yukon, Mustang, and the surrounding OKC metro. We're based in Moore and run jobs across the metro." },
  { question: "How is Redwood Construction different from other home builders?", answer: "Most builders sub out the foundation and framing — the two most critical parts of the house. We handle both in-house with our own crew. That means your slab is poured right, your framing is plumb, and the structural integrity of your home isn't left to the cheapest sub." },
];

const CustomHomeBuilder = () => (
  <>
    <SEOHead
      title="Custom Home Builder Moore OK | Redwood Construction"
      description="Custom home builder in Moore OK — foundation to finish. Concrete, framing, turnkey builds. $120–$200/sq ft. Call 405-406-9830."
      canonical="/custom-home-builder-moore-ok"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Home Builder Moore OK",
        "provider": { "@type": "GeneralContractor", "name": "Redwood Construction Pros", "telephone": "+1-405-406-9830" },
        "areaServed": [{ "@type": "City", "name": "Moore" }, { "@type": "City", "name": "Oklahoma City" }],
        "serviceType": "Custom Home Building",
      }}
    />

    <section className="section-pad bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-[1.1] max-w-[800px] mb-6">
          Custom Home Builder in Moore, OK — Foundation, Framing & Turnkey Builds
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-[700px] mb-8">
          Redwood Construction Pros builds custom homes across Moore OK and the Oklahoma City metro. We don't just hang drywall and lay flooring — we pour the slab, frame the walls, and build the structure from the ground up. That's the difference between a house that settles and cracks in 5 years and one that lasts decades.
        </p>
        <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors">
          <Phone className="w-5 h-5" /> Call Now: {PHONE_DISPLAY}
        </a>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Why Foundation and Structural Work Matter in Oklahoma</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Oklahoma sits on expansive clay soil. When it rains, the clay swells. When it dries, it shrinks. That constant movement is what causes foundation cracks, door frames that don't close, and drywall cracks that keep coming back. Most home builders in the OKC metro sub out the foundation to the lowest bidder and hope for the best.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We come from a concrete and structural background. We pour our own slabs — proper grade, rebar spacing, post-tension cables, and cure time. We understand how Oklahoma soil moves and we build foundations that handle it. That's not something you can fix after the fact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When we frame walls, they're plumb. When we set trusses, they're straight. When we tie the structure together, it's engineered to handle Oklahoma wind loads — not just to pass minimum code. That's the foundation (literally) of every custom home we build in Moore OK.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">What We Handle In-House</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Site prep — excavation, grading, compaction",
                "Foundation design — slab-on-grade, post-tension, pier-and-beam",
                "Concrete pour — proper mix, rebar, cure time",
                "Structural framing — walls, headers, trusses, sheathing",
                "Roofing — tied into structure, not just nailed on",
                "Exterior finish — siding, stone, brick",
                "Interior rough-in coordination — electrical, plumbing, HVAC",
                "Drywall, paint, trim, flooring, cabinets",
                "Final grade and site cleanup",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Custom Home Build Process in Moore OK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Design & Planning", desc: "We review your plans, walk the lot, discuss the build, and set a realistic budget and timeline. If you need plan modifications, we help with that." },
            { step: "2", title: "Foundation & Slab", desc: "We prep the site, set forms, place rebar and post-tension cables, pour the slab, and let it cure properly. This is the most important step and we don't rush it." },
            { step: "3", title: "Framing & Structure", desc: "Walls go up plumb and square. Trusses set level. Sheathing, house wrap, and roof system installed. The house takes shape." },
            { step: "4", title: "Finish & Walkthrough", desc: "Mechanical rough-in, insulation, drywall, paint, flooring, cabinets, fixtures. Final inspection, walkthrough, and handoff. You get a punch list — we knock it out." },
          ].map((s) => (
            <div key={s.title} className="p-6 rounded-xl bg-background border border-border">
              <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm mb-4">{s.step}</span>
              <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Custom Home Costs in Moore OK & OKC Metro</h2>
        <div className="max-w-[800px]">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Custom homes in the Moore and Oklahoma City area run $120–$200 per square foot. That range covers:
          </p>
          <ul className="flex flex-col gap-2 mb-6">
            {[
              "Site prep and foundation — $15–$25/sq ft",
              "Framing and structure — $20–$35/sq ft",
              "Mechanical rough-in (electrical, plumbing, HVAC) — $15–$25/sq ft",
              "Interior finish (drywall, flooring, cabinets, fixtures) — $40–$70/sq ft",
              "Roofing and exterior — $15–$25/sq ft",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A 2,000 sq ft custom home in Moore typically runs $240,000–$400,000 depending on finishes, lot conditions, and design complexity. We give you a detailed line-item estimate before breaking ground — no surprises.
          </p>
        </div>
      </div>
    </section>

    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-extrabold text-primary mb-6">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/roofing-moore-ok" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Roofing in Moore OK</h3>
            <p className="text-sm text-muted-foreground mt-1">Roof replacement and storm damage repair.</p>
          </Link>
          <Link to="/metal-buildings-oklahoma-city" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Metal Buildings OKC</h3>
            <p className="text-sm text-muted-foreground mt-1">Steel shops, commercial buildings, barndominiums.</p>
          </Link>
          <Link to="/barndominium-builder-oklahoma" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Barndominium Builder</h3>
            <p className="text-sm text-muted-foreground mt-1">Full barndo builds — slab to interior finish.</p>
          </Link>
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} heading="Custom Home Building FAQ — Moore OK" />
    <PageCTA heading="Ready to Build Your Custom Home in Moore OK?" />
  </>
);

export default CustomHomeBuilder;
