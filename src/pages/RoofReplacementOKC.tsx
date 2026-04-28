import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import PageCTA from "@/components/PageCTA";

const PHONE = "4054069830";
const PHONE_DISPLAY = "405-406-9830";

const faqs = [
  { question: "How much does a roof replacement cost in Oklahoma City?", answer: "A full tear-off and re-roof in Oklahoma City runs $6–$10 per square foot. For a standard 2,000 sq ft home, expect $12,000–$20,000. Steep roofs, multiple layers, and upgraded materials push the cost higher." },
  { question: "How long does a roof replacement take in OKC?", answer: "1–2 days for most residential homes. We tear off in the morning, inspect decking, install underlayment and shingles, and clean up before we leave. Larger or complex roofs may take a third day." },
  { question: "Should I repair or replace my roof?", answer: "If damage is isolated — a few missing shingles, one leaking pipe boot — repair makes sense. If there's widespread hail damage, multiple leaks, or the shingles are 15+ years old, replacement is the better long-term investment." },
  { question: "What type of shingles do you install?", answer: "We install 3-tab asphalt, architectural (dimensional), Class 4 impact-resistant, and standing seam metal. For Oklahoma City, we recommend architectural or Class 4 — they handle hail better and last longer." },
  { question: "Do you offer free roof inspections in Oklahoma City?", answer: "Yes. We climb on the roof, check every slope, photograph damage, and give you an honest assessment. No charge, no obligation. If there's no damage, we'll tell you." },
  { question: "What is a Class 4 impact-resistant shingle?", answer: "Class 4 is the highest impact rating for shingles. They're tested to withstand 2-inch steel ball drops and significantly reduce hail damage. Most Oklahoma insurance carriers offer 15–28% premium discounts for Class 4 roofs." },
  { question: "Will you work with my insurance company?", answer: "Yes. We handle the documentation, meet with your adjuster on-site, and make sure every damaged component gets included in the scope. We've worked with State Farm, Farmers, USAA, Allstate, and most Oklahoma carriers." },
  { question: "What warranty do you offer on roof replacements?", answer: "You get the manufacturer's warranty on materials (typically 25–50 years depending on the shingle) plus our workmanship warranty. We stand behind our installs — if something fails because of how we put it on, we fix it." },
  { question: "Do you install metal roofing in Oklahoma City?", answer: "Yes. We install standing seam and exposed fastener metal roofs. Metal roofing handles wind up to 140+ mph, lasts 40–60 years, and reflects heat — which cuts cooling costs in Oklahoma summers." },
  { question: "How do I get started with a roof replacement?", answer: "Call or text 405-406-9830. We'll schedule an inspection, usually within 24–48 hours. After the inspection, you get a detailed estimate with line-item pricing. No pressure, no sales pitch." },
];

const RoofReplacementOKC = () => (
  <>
    <SEOHead
      title="Roof Replacement Oklahoma City | Redwood Construction"
      description="Roof replacement in Oklahoma City — full tear-off, asphalt & metal roofing, insurance claims. $6–$10/sq ft. Call 405-406-9830."
      canonical="/roof-replacement-oklahoma-city"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Roof Replacement Oklahoma City",
        "provider": { "@type": "GeneralContractor", "name": "Redwood Construction Pros", "telephone": "+1-405-406-9830" },
        "areaServed": { "@type": "City", "name": "Oklahoma City" },
        "serviceType": "Roof Replacement",
      }}
    />

    <section className="section-pad bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-[1.1] max-w-[800px] mb-6">
          Roof Replacement in Oklahoma City — Full Tear-Off & Install
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-[700px] mb-8">
          When your roof in Oklahoma City is past repair — hail-beaten, leaking, or at end of life — we handle the full replacement. Tear-off old shingles, inspect and replace damaged decking, install synthetic underlayment, and put on a new roof system built to handle OKC weather. No middlemen, no subcontracted labor.
        </p>
        <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors">
          <Phone className="w-5 h-5" /> Call Now: {PHONE_DISPLAY}
        </a>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">What a Roof Replacement in Oklahoma City Looks Like</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We don't do overlays. Every roof replacement starts with a full tear-off — we strip the existing shingles, underlayment, and damaged components down to the decking. That's the only way to see what's underneath and build a roof that actually lasts.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Once the deck is exposed, we check every sheet of OSB or plywood for soft spots, water damage, and rot. Damaged decking gets replaced before anything else goes on. Then we install synthetic underlayment (or ice & water shield in valleys and eaves), drip edge, starter strip, field shingles, hip and ridge caps, and all flashings.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The result is a complete roofing system — not just shingles nailed on top of whatever was there before. In Oklahoma City, where hail and straight-line winds hit hard, that matters.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We magnetically sweep your yard and driveway for nails, haul off all debris, and leave your property clean. You shouldn't have to pick up after your roofer.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Our Roof Replacement Process</h3>
            <ol className="flex flex-col gap-4">
              {[
                "Strip existing shingles and underlayment to bare decking",
                "Inspect decking — replace rotted or soft OSB/plywood",
                "Install synthetic underlayment or ice & water shield",
                "Install drip edge on eaves and rakes",
                "Install starter strip along eaves",
                "Lay field shingles per manufacturer spec",
                "Flash all penetrations — vents, pipes, chimneys, walls",
                "Install hip and ridge cap shingles",
                "Install ridge vent or other ventilation",
                "Full cleanup — magnetic sweep, debris haul-off",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-foreground">
                  <span className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Roofing Materials We Install in Oklahoma City</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "3-Tab Asphalt", desc: "Budget-friendly option. Flat profile, 20–25 year manufacturer warranty. Best for rental properties and outbuildings." },
            { title: "Architectural Shingles", desc: "Most popular choice. Dimensional look, 30-year warranty, better wind resistance than 3-tab. GAF Timberline or Owens Corning Duration." },
            { title: "Class 4 Impact-Resistant", desc: "Highest hail rating available. Withstands 2-inch hailstones. Insurance discounts of 15–28% in Oklahoma. Best ROI for OKC metro homes." },
            { title: "Standing Seam Metal", desc: "40–60 year lifespan. Handles 140+ mph winds. Reflects heat, reduces cooling costs. Premium option for long-term homeowners." },
          ].map((m) => (
            <div key={m.title} className="p-6 rounded-xl bg-background border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">{m.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Insurance Claims for Roof Replacement in OKC</h2>
        <div className="max-w-[800px]">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            If your roof was damaged by hail or wind in Oklahoma City, your homeowner's insurance likely covers a full replacement. Here's how we handle it:
          </p>
          <ul className="flex flex-col gap-3 mb-6">
            {[
              "We inspect your roof and document all damage with photos and measurements",
              "You file a claim with your carrier — we help you with exactly what to say",
              "Your adjuster schedules an inspection — we meet them on-site",
              "We review the adjuster's scope line by line — if anything's missing, we supplement",
              "Once approved, we schedule the replacement and handle the build",
              "You pay your deductible — insurance covers the rest",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We don't pressure you into filing a claim. If there's no damage, we'll tell you. But if your roof is compromised, waiting costs more — leaks cause interior damage, mold, and structural issues that insurance won't cover later.
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
            <p className="text-sm text-muted-foreground mt-1">Full roofing services for Moore and south OKC.</p>
          </Link>
          <Link to="/hail-damage-roof-repair-moore-ok" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Hail Damage Repair Moore OK</h3>
            <p className="text-sm text-muted-foreground mt-1">Storm damage inspection and insurance claims.</p>
          </Link>
          <Link to="/custom-home-builder-moore-ok" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Custom Home Builder</h3>
            <p className="text-sm text-muted-foreground mt-1">Ground-up custom homes in the OKC metro.</p>
          </Link>
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} heading="Roof Replacement FAQ — Oklahoma City" />
    <PageCTA heading="Ready for a New Roof in Oklahoma City?" />
  </>
);

export default RoofReplacementOKC;
