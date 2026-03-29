import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import PageCTA from "@/components/PageCTA";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const faqs = [
  { question: "How much does a metal building cost in Oklahoma City?", answer: "Metal buildings in OKC run $20–$40 per square foot depending on size, wall height, insulation, and finish level. A basic 30x40 shop runs $24,000–$48,000 including slab. A 40x60 commercial building runs $48,000–$96,000." },
  { question: "How long does it take to build a metal building?", answer: "2–6 weeks depending on size and complexity. A basic shop takes 2–3 weeks from slab pour to final panel. Larger commercial buildings or buildings with interior buildout take 4–6 weeks." },
  { question: "Do you pour the concrete slab for metal buildings?", answer: "Yes. We pour our own slabs — proper grade, rebar, thickness, and anchor bolt placement. This is critical for metal buildings because the steel frame bolts directly to the slab. If the slab is wrong, the building doesn't go up straight." },
  { question: "What size metal buildings do you build?", answer: "We build from 20x20 personal shops up to 80x150 commercial buildings. Standard wall heights range from 10–18 feet. Custom sizes and configurations are available." },
  { question: "Can you insulate a metal building?", answer: "Yes. We offer spray foam, rigid board, and fiberglass batt insulation. For climate-controlled shops and commercial buildings in Oklahoma, spray foam provides the best R-value and moisture barrier." },
  { question: "Are metal buildings strong enough for Oklahoma tornadoes?", answer: "Properly engineered metal buildings handle high winds well. We use engineered steel frames rated for Oklahoma wind loads. While no above-ground structure is tornado-proof, metal buildings withstand straight-line winds and severe storms better than most wood-frame structures." },
  { question: "Do you build metal buildings with living space?", answer: "Yes — those are barndominiums. We build the steel structure, insulate it, and finish the interior with drywall, plumbing, electrical, and HVAC. Full living quarters inside a metal building shell." },
  { question: "What's the difference between a metal building and a barndominium?", answer: "A metal building is a steel-framed structure — shop, storage, commercial space. A barndominium is a metal building with a finished interior designed for living. Same steel frame, but with insulation, drywall, plumbing, HVAC, and residential finish." },
  { question: "Do I need a permit for a metal building in Oklahoma City?", answer: "Yes. Oklahoma City and surrounding municipalities require building permits for metal structures. We handle all permit applications, inspections, and code compliance." },
  { question: "Can you add a metal building to my existing property?", answer: "Yes. We build detached metal shops, equipment storage buildings, and commercial structures on existing residential and commercial properties across the OKC metro." },
];

const MetalBuildingsOKC = () => (
  <>
    <SEOHead
      title="Metal Buildings Oklahoma City | Redwood Construction"
      description="Metal building contractor in Oklahoma City — shops, commercial buildings, steel structures. Slab to final install. Call 405-760-9706."
      canonical="/metal-buildings-oklahoma-city"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Metal Buildings Oklahoma City",
        "provider": { "@type": "GeneralContractor", "name": "Redwood Construction Pros", "telephone": "+1-405-760-9706" },
        "areaServed": { "@type": "City", "name": "Oklahoma City" },
        "serviceType": "Metal Building Construction",
      }}
    />

    <section className="section-pad bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-[1.1] max-w-[800px] mb-6">
          Metal Building Contractor in Oklahoma City — Shops, Commercial & Steel Structures
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-[700px] mb-8">
          Redwood Construction Pros builds metal buildings across Oklahoma City and the OKC metro. We handle every step — concrete slab, steel frame erection, panel install, and insulation. No subcontracted foundation crews, no imported labor. Our guys pour the slab, erect the steel, and hang the panels.
        </p>
        <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors">
          <Phone className="w-5 h-5" /> Call Now: {PHONE_DISPLAY}
        </a>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Types of Metal Buildings We Build in Oklahoma City</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Personal Shops & Garages", desc: "20x20 to 40x60 shops for vehicle storage, woodworking, welding, and hobby space. Concrete slab, steel frame, roll-up doors, walk doors, and optional insulation." },
            { title: "Commercial Buildings", desc: "Warehouse space, retail buildings, auto shops, and offices. 40x60 to 80x150 with customizable wall heights, loading docks, and climate control." },
            { title: "Equipment & Hay Storage", desc: "Open-front or fully enclosed storage for farm equipment, hay, and livestock. Built for Oklahoma wind and weather." },
            { title: "Workshops & Studios", desc: "Insulated and finished interior for workshops, art studios, home offices, and business operations." },
            { title: "Agricultural Buildings", desc: "Barns, equipment shelters, grain storage, and livestock facilities. Heavy-duty construction for daily use." },
            { title: "Multi-Use Buildings", desc: "Half shop, half living space. Half warehouse, half office. We configure layouts to fit your operation." },
          ].map((b) => (
            <div key={b.title} className="p-6 rounded-xl bg-secondary border border-border">
              <h3 className="text-lg font-bold text-primary mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">How We Build Metal Buildings — Step by Step</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Every metal building starts with the slab. If the slab is off — wrong grade, wrong bolt placement, wrong thickness — the entire building suffers. That's why we pour our own slabs with our own crew. We don't hand that off.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              After the slab cures, we erect the steel frame. Red iron columns, rafters, purlins, girts, and bracing — all bolted up per the engineered drawings. Then wall panels and roof panels go on, followed by trim, doors, and any interior work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most metal buildings in Oklahoma City are up and enclosed within 2–4 weeks after the slab is poured. Interior finish — insulation, drywall, electrical, plumbing — adds time depending on the scope.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Build Sequence</h3>
            <ol className="flex flex-col gap-3">
              {[
                "Site prep — clear, grade, compact soil",
                "Set forms and place rebar / anchor bolts",
                "Pour concrete slab — minimum 4\" thick, 3,000 PSI",
                "Cure slab — 7 days minimum before steel goes up",
                "Erect steel frame — columns, rafters, purlins",
                "Install wall and roof panels",
                "Install trim, gutters, doors, windows",
                "Insulation (if specified) — spray foam, batt, or rigid board",
                "Interior buildout (if specified) — electrical, plumbing, drywall",
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

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Metal Building Costs in Oklahoma City</h2>
        <div className="max-w-[800px]">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Metal buildings in Oklahoma City typically cost $20–$40 per square foot. Here's what affects the price:
          </p>
          <ul className="flex flex-col gap-2 mb-6">
            {[
              "Building size — larger footprints cost less per sq ft",
              "Wall height — standard 12' vs 16' or 18' walls",
              "Insulation — none, batt, rigid board, or spray foam",
              "Doors — walk doors, roll-up doors, overhead doors",
              "Interior finish — bare slab vs. finished office/living space",
              "Site conditions — flat cleared lot vs. grading and tree removal",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Example: A 30x40 (1,200 sq ft) shop with concrete slab, steel frame, panels, one roll-up door, and one walk door runs approximately $24,000–$36,000. Insulation and interior finish add $10–$20/sq ft.
          </p>
        </div>
      </div>
    </section>

    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-extrabold text-primary mb-6">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/barndominium-builder-oklahoma" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Barndominium Builder</h3>
            <p className="text-sm text-muted-foreground mt-1">Full barndominium builds — slab to interior finish.</p>
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

    <FAQSection faqs={faqs} heading="Metal Building FAQ — Oklahoma City" />
    <PageCTA heading="Need a Metal Building in Oklahoma City?" />
  </>
);

export default MetalBuildingsOKC;
