import { Link } from "react-router-dom";
import { Phone, CheckCircle, AlertTriangle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import PageCTA from "@/components/PageCTA";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const faqs = [
  { question: "Will insurance cover hail damage roof repair in Moore OK?", answer: "In most cases, yes. Oklahoma homeowner policies cover wind and hail damage. Your deductible applies, and insurance pays the rest. We inspect, document everything, and coordinate with your adjuster to get the claim approved." },
  { question: "How do I know if my roof has hail damage?", answer: "Look for dented gutters, dings on AC units, and dark spots on shingles where granules are missing. From inside, check the attic for new water stains or daylight. We offer free hail damage inspections in Moore OK — we climb on the roof and check every slope." },
  { question: "How soon should I file a claim after a hailstorm in Moore?", answer: "File within 12 months, but the sooner the better. Evidence degrades — granule loss worsens, damaged shingles crack further, and leaks cause interior damage. We recommend getting an inspection within 2 weeks of a major storm." },
  { question: "What size hail damages a roof?", answer: "Hail 1 inch and larger typically damages asphalt shingles. At 1.5 inches, most roofs sustain enough damage for a full replacement. Moore OK regularly sees 1–3 inch hail during spring and summer storm season." },
  { question: "Can hail damage a roof without visible leaks?", answer: "Absolutely. Hail knocks granules off shingles, exposing the asphalt mat underneath. That accelerates UV degradation and shortens the roof's lifespan by years — even without an immediate leak. The damage is there, you just can't see it from the ground." },
  { question: "What does a hail damage roof inspection include?", answer: "We check all slopes for impact marks on shingles, inspect flashings and ridge caps, look for dented vents and pipe boots, examine gutters and downspouts for dings, and check the attic for water intrusion. Everything gets photographed and documented." },
  { question: "Do I have to use the insurance company's preferred roofer?", answer: "No. In Oklahoma, you have the right to choose your own contractor. Insurance companies suggest preferred vendors, but you are not required to use them. We work with all carriers and handle the same process." },
  { question: "How long does a hail damage roof replacement take?", answer: "1–2 days from tear-off to final cleanup. The insurance claim process takes 2–4 weeks on average — from filing to approval to scheduled install." },
  { question: "What if my insurance adjuster says there's no damage?", answer: "It happens. Some adjusters miss damage or underscope the job. We can request a re-inspection, provide supplemental documentation, or escalate the claim. We know what to look for and how to document it so nothing gets left off." },
  { question: "Do you offer emergency tarping after storm damage in Moore OK?", answer: "Yes. If your roof is actively leaking after a storm, we can tarp it to prevent further water intrusion while the claim is processed. Call 405-760-9706 as soon as the storm passes." },
  { question: "What are Class 4 impact-resistant shingles?", answer: "They're shingles rated to withstand 2-inch steel ball impact tests. They significantly reduce hail damage and most Oklahoma insurance carriers give 15–28% premium discounts when you install them. Long-term, they pay for themselves." },
];

const HailDamageRepair = () => (
  <>
    <SEOHead
      title="Hail Damage Roof Repair Moore OK | Redwood Construction"
      description="Hail damage roof repair in Moore OK — free inspections, insurance claim help, full replacement. Call 405-760-9706 after any storm."
      canonical="/hail-damage-roof-repair-moore-ok"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Hail Damage Roof Repair Moore OK",
        "provider": { "@type": "GeneralContractor", "name": "Redwood Construction Pros", "telephone": "+1-405-760-9706" },
        "areaServed": { "@type": "City", "name": "Moore" },
        "serviceType": "Hail Damage Roof Repair",
      }}
    />

    <section className="section-pad bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-[1.1] max-w-[800px] mb-6">
          Hail Damage Roof Repair in Moore, OK — Inspection, Claims & Replacement
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-[700px] mb-8">
          Moore OK sits in the direct path of Oklahoma's worst hailstorms. When 1–3 inch hail rolls through, it destroys shingles, dents metal flashings, and cracks ridge caps. We inspect, document, and handle the full repair or replacement — including your insurance claim. Free inspections after every major storm.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors">
            <Phone className="w-5 h-5" /> Call Now: {PHONE_DISPLAY}
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground font-bold px-8 py-4 rounded-lg border border-primary-foreground/20 no-underline hover:bg-primary-foreground/20 transition-colors">
            Schedule Free Hail Inspection
          </Link>
        </div>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">What Hail Does to Roofs in Moore Oklahoma</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Oklahoma hailstorms hit hard and fast. In Moore, we see severe hail events multiple times per year — sometimes with stones exceeding 2 inches. Here's what that does to a typical asphalt shingle roof:
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Knocks granules off shingles — exposes the asphalt mat to UV damage",
                "Cracks or fractures shingles — creates entry points for water",
                "Dents metal flashings around vents, chimneys, and walls",
                "Damages ridge caps and hip shingles",
                "Cracks or breaks pipe boots and vent flanges",
                "Dents gutters and downspouts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Even when the roof doesn't leak immediately, the damage shortens its lifespan by years. Granule loss accelerates aging. Cracked shingles curl and blow off in the next windstorm. Small fractures become big leaks.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">How We Handle Hail Damage Claims</h3>
            <ol className="flex flex-col gap-4">
              {[
                "We inspect your roof — climb every slope, check every penetration, photograph all damage",
                "We give you a damage report with photos showing impact marks, granule loss, and component damage",
                "You call your insurance carrier and file the claim — we tell you exactly what to say",
                "Your adjuster schedules an inspection — we meet them at your house and walk the roof together",
                "If the adjuster misses anything, we supplement the claim with additional documentation",
                "Once approved, we schedule tear-off and replacement — typically within 1–2 weeks",
                "We handle the full roof replacement — tear-off, decking, underlayment, shingles, flashings, cleanup",
                "You pay your deductible — insurance covers the rest",
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
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Signs Your Roof Has Hail Damage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "From the Ground", items: ["Dented gutters or downspouts", "Dings on outdoor AC units or window frames", "Granule buildup in gutters or at downspout exits", "Dented mailbox, fence caps, or car hoods"] },
            { title: "On the Roof", items: ["Dark spots on shingles (exposed mat)", "Soft spots when you press on shingles", "Cracked or fractured shingles", "Dented metal flashings or vents"] },
            { title: "In the Attic", items: ["New water stains on rafters or sheathing", "Daylight visible through roof decking", "Wet or compressed insulation", "Musty or mold smell"] },
          ].map((section) => (
            <div key={section.title} className="p-6 rounded-xl bg-background border border-border">
              <h3 className="text-lg font-bold text-primary mb-4">{section.title}</h3>
              <ul className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Impact-Resistant Roofing for Oklahoma Hail</h2>
        <div className="max-w-[800px]">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            After a hail damage claim, upgrading to Class 4 impact-resistant shingles is a smart move. They're tested to withstand 2-inch steel ball drops repeated on the same spot. In real-world Oklahoma conditions, that means your roof survives most hailstorms without needing replacement.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            The cost difference is roughly $1–$2 per square foot over standard architectural shingles. But most Oklahoma insurance carriers give 15–28% premium discounts for Class 4 roofs — which usually pays back the upgrade cost within 3–5 years.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We install Malarkey Vista AR, GAF Armor Shield II, and Owens Corning Duration FLEX — all Class 4 rated and built for Oklahoma conditions.
          </p>
        </div>
      </div>
    </section>

    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-extrabold text-primary mb-6">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/roofing-moore-ok" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Roofing Contractor in Moore OK</h3>
            <p className="text-sm text-muted-foreground mt-1">Full roofing services — replacement, repair, metal.</p>
          </Link>
          <Link to="/roof-replacement-oklahoma-city" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Roof Replacement OKC</h3>
            <p className="text-sm text-muted-foreground mt-1">Full tear-off and re-roof across Oklahoma City.</p>
          </Link>
          <Link to="/contact" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Contact Us</h3>
            <p className="text-sm text-muted-foreground mt-1">Schedule a free storm damage inspection.</p>
          </Link>
        </div>
      </div>
    </section>

    <FAQSection faqs={faqs} heading="Hail Damage Roof Repair FAQ — Moore OK" />
    <PageCTA heading="Storm Damage Your Roof in Moore OK?" />
  </>
);

export default HailDamageRepair;
