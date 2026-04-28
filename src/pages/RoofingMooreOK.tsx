import { Link } from "react-router-dom";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import PageCTA from "@/components/PageCTA";

const PHONE = "4054069830";
const PHONE_DISPLAY = "405-406-9830";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Roofing Contractor Moore OK",
      "provider": { "@type": "GeneralContractor", "name": "Redwood Construction Pros", "telephone": "+1-405-406-9830" },
      "areaServed": { "@type": "City", "name": "Moore", "containedInPlace": { "@type": "State", "name": "Oklahoma" } },
      "serviceType": "Roofing",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How much does a new roof cost in Moore OK?", "acceptedAnswer": { "@type": "Answer", "text": "A full roof replacement in Moore OK runs $6–$10 per square foot. A typical 2,000 sq ft roof costs $12,000–$20,000 depending on tear-off, decking condition, and material choice." } },
        { "@type": "Question", "name": "Does insurance cover roof replacement in Moore Oklahoma?", "acceptedAnswer": { "@type": "Answer", "text": "Most Oklahoma homeowner policies cover wind and hail damage. We handle the inspection, documentation, and adjuster coordination to get your claim approved." } },
      ],
    },
  ],
};

const faqs = [
  { question: "How much does a new roof cost in Moore OK?", answer: "A full roof replacement in Moore OK runs $6–$10 per square foot. A typical 2,000 sq ft roof costs $12,000–$20,000 depending on tear-off, decking condition, and material choice. Impact-resistant shingles add $1–$2 per square foot but often qualify for insurance discounts." },
  { question: "Does insurance cover roof replacement in Moore Oklahoma?", answer: "Most Oklahoma homeowner policies cover wind and hail damage. We handle the inspection, documentation, and adjuster coordination to get your claim approved. We've worked hundreds of insurance claims in Moore and the OKC metro." },
  { question: "How long does a roof replacement take in Moore?", answer: "Most residential roofs take 1–2 days from tear-off to final cleanup. Larger homes with extensive decking damage may take 3 days. We don't drag jobs out — we show up, tear off, install, and clean up." },
  { question: "What roofing materials work best in Oklahoma?", answer: "Impact-resistant (Class 4) asphalt shingles are the best value for Oklahoma. They handle hail up to 2 inches and qualify for insurance premium discounts. Metal roofing is another strong option — handles 140+ mph winds and lasts 40–60 years." },
  { question: "Do you handle storm damage roof repair in Moore OK?", answer: "Yes. After every major storm we run inspections across Moore and surrounding cities. We document damage, file the claim, and handle the full repair or replacement." },
  { question: "What's the difference between a roof repair and replacement?", answer: "Repair fixes isolated damage — a few missing shingles, a small leak, flashing issues. Replacement means tearing off the existing roof down to the decking and installing a completely new system. If more than 30% of the roof is damaged, replacement is usually the better investment." },
  { question: "Do you offer metal roofing in Moore OK?", answer: "Yes. We install standing seam and exposed fastener metal roofing. Metal roofs last 40–60 years, handle Oklahoma wind and hail, and reduce cooling costs in summer." },
  { question: "Can you repair a roof leak without replacing the whole roof?", answer: "Sometimes. If the leak is isolated to a small area — a failed pipe boot, damaged flashing, or a few blown-off shingles — we can patch it. But if the underlayment is compromised or the shingles are past their lifespan, a full replacement prevents recurring leaks." },
  { question: "What does a roof inspection include?", answer: "We check shingles for hail hits, cracks, and granule loss. We inspect flashings around vents, chimneys, and walls. We check the drip edge, gutters, and look in the attic for water stains, daylight, and insulation damage." },
  { question: "Do you work with all insurance companies in Oklahoma?", answer: "We've worked with State Farm, Farmers, USAA, Allstate, Oklahoma Farm Bureau, and most regional carriers. We know what adjusters look for and how to document damage so nothing gets missed on the scope." },
  { question: "How do I know if my roof has hail damage?", answer: "Look for dented gutters and downspouts, dings on AC units or window frames, and dark spots on shingles where granules are missing. On the ground, check for granule buildup in gutters. We offer free hail damage inspections across Moore OK." },
];

const RoofingMooreOK = () => (
  <>
    <SEOHead
      title="Roofing Contractor in Moore OK | Redwood Construction"
      description="Roofing in Moore OK — roof replacement, hail damage repair, insurance claims. Asphalt, metal, impact-resistant shingles. Call 405-406-9830."
      canonical="/roofing-moore-ok"
      jsonLd={jsonLd}
    />

    {/* HERO */}
    <section className="section-pad bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-[1.1] max-w-[800px] mb-6">
          Roofing Contractor in Moore, OK — Replacement, Repair & Storm Damage
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-[700px] mb-8">
          Redwood Construction Pros handles roofing in Moore OK and the OKC metro. We tear off damaged roofs, replace decking, and install shingle and metal roofing systems built for Oklahoma hail, wind, and storms. No subcontracted crews — the owner runs every job.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors">
            <Phone className="w-5 h-5" /> Call Now: {PHONE_DISPLAY}
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground font-bold px-8 py-4 rounded-lg border border-primary-foreground/20 no-underline hover:bg-primary-foreground/20 transition-colors">
            Get Free Roof Inspection
          </Link>
        </div>
      </div>
    </section>

    {/* WHAT WE DO */}
    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Roofing Services We Handle in Moore OK</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              If your roof is leaking, missing shingles, or took a hit from the last hailstorm — we handle the full job. Tear-off, decking inspection, underlayment, shingle or metal install, flashings, drip edge, and cleanup. We don't leave debris in your yard or nails in your driveway.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Moore OK sits right in the heart of tornado alley. Hailstorms roll through every spring and summer, and roofs in this area take a beating. We've replaced hundreds of roofs across Moore, south OKC, and Norman — and we know exactly what Oklahoma weather does to asphalt shingles, ridge caps, and pipe boots.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We also help homeowners navigate insurance claims. After a storm, we inspect your roof, document the damage with photos and measurements, and work directly with your insurance adjuster. We've dealt with State Farm, Farmers, Allstate, USAA, Oklahoma Farm Bureau, and most regional carriers. We know what they look for and how to make sure nothing gets left off the scope.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">What We Install</h3>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "3-tab asphalt shingles (budget-friendly)",
                "Architectural / dimensional shingles (most popular)",
                "Impact-resistant Class 4 shingles (best for Oklahoma hail)",
                "Standing seam metal roofing (40–60 year lifespan)",
                "Exposed fastener metal roofing (shops, barns, outbuildings)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-bold text-primary mb-4">Services</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Full roof replacement (tear-off to install)",
                "Roof repair — leaks, missing shingles, flashing failure",
                "Storm and hail damage inspection",
                "Insurance claim documentation and adjuster coordination",
                "Metal roof installation",
                "Roof ventilation and ridge vent install",
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

    {/* HAIL DAMAGE */}
    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Hail Damage Roofing in Moore Oklahoma</h2>
        <div className="max-w-[800px]">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Moore OK gets hit by severe hail almost every year. When 1–2 inch hail comes down, it knocks granules off shingles, dents flashing, cracks ridge caps, and damages pipe boots. Even if your roof looks fine from the ground, the damage is there — and it shortens the lifespan of your roof by years.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            We run free hail damage inspections after every major storm. We climb on the roof, check every slope, photograph impact marks, and give you an honest assessment — no pressure to replace if it doesn't need it. If the damage is there, we handle the insurance claim from start to finish.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Most hail damage claims in Moore OK result in a full roof replacement covered by insurance. You pay your deductible — we handle the rest. We've worked with every major carrier in Oklahoma and know exactly how to document damage so your claim gets approved.
          </p>
          <Link to="/hail-damage-roof-repair-moore-ok" className="inline-flex items-center gap-2 text-accent font-bold hover:underline">
            Learn more about hail damage roof repair in Moore OK <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* TEAR OFF vs OVERLAY */}
    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Tear-Off vs. Overlay — Which Is Right for Your Roof?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-secondary border border-border">
            <h3 className="text-xl font-bold text-primary mb-3">Full Tear-Off (What We Recommend)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We strip everything down to the decking. That lets us inspect the wood for rot, replace damaged sheets, install new underlayment (synthetic or ice & water shield), and start fresh. This is the only way to guarantee the new roof performs properly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every roof we install in Moore OK is a full tear-off. We don't cut corners by layering new shingles over old ones.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-secondary border border-border">
            <h3 className="text-xl font-bold text-primary mb-3">Overlay (Why We Don't Do It)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              An overlay puts new shingles on top of old ones. It's cheaper upfront but traps moisture, hides deck rot, voids most manufacturer warranties, and adds weight to your trusses. Oklahoma building code allows one overlay — but that doesn't mean it's smart.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If a roofer in Moore is quoting you an overlay, ask why they don't want to see the decking. That's usually the answer.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* TIMELINE */}
    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Roof Replacement Timeline in Moore OK</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-[800px] mb-6">
          A standard residential roof replacement takes 1–2 days. That's tear-off, decking inspection, underlayment, shingle install, flashings, ridge cap, drip edge, and full cleanup. We magnetically sweep the yard and driveway for nails.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-[800px]">
          Larger homes (3,000+ sq ft), steep-pitch roofs, or jobs requiring full decking replacement may take an extra day. We schedule tight and don't leave your house exposed overnight unless weather forces a delay.
        </p>
      </div>
    </section>

    {/* PRICING */}
    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Roofing Costs in Moore OK — What to Expect</h2>
        <div className="max-w-[800px]">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Roof replacement in Moore OK typically runs $6–$10 per square foot. For a 2,000 sq ft roof, that's $12,000–$20,000 depending on:
          </p>
          <ul className="flex flex-col gap-2 mb-6">
            {[
              "Tear-off layers (single layer vs. double layer adds labor)",
              "Decking condition — rotted OSB or plywood must be replaced",
              "Material choice — 3-tab, architectural, Class 4 impact-resistant, or metal",
              "Roof pitch — steeper roofs require more safety equipment and labor",
              "Ventilation upgrades — ridge vents, box vents, or powered attic fans",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We give line-item estimates — not vague "package prices." You see exactly what you're paying for before we start.
          </p>
        </div>
      </div>
    </section>

    {/* INTERNAL LINKS */}
    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-extrabold text-primary mb-6">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/roof-replacement-oklahoma-city" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Roof Replacement in Oklahoma City</h3>
            <p className="text-sm text-muted-foreground mt-1">Full tear-off and re-roof across OKC metro.</p>
          </Link>
          <Link to="/hail-damage-roof-repair-moore-ok" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Hail Damage Repair in Moore OK</h3>
            <p className="text-sm text-muted-foreground mt-1">Storm damage inspection and insurance claim help.</p>
          </Link>
          <Link to="/metal-buildings-oklahoma-city" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Metal Buildings in Oklahoma City</h3>
            <p className="text-sm text-muted-foreground mt-1">Steel shops, commercial buildings, and barndos.</p>
          </Link>
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} heading="Roofing FAQ — Moore OK" />
    <PageCTA heading="Need a Roofer in Moore OK?" />
  </>
);

export default RoofingMooreOK;
