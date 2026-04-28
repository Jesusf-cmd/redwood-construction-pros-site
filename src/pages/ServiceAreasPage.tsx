import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageCTA from "@/components/PageCTA";

const PHONE = "4054069830";
const PHONE_DISPLAY = "405-406-9830";

const areas = [
  { name: "Moore, OK", desc: "Our home base. We handle more roofing, custom home, and metal building projects in Moore than any other city. If you're in Moore, we're probably already working on your street.", primary: true },
  { name: "Oklahoma City", desc: "Full roofing, custom home, and metal building services across OKC — south side, west side, northwest, and midtown. Roof replacement, hail damage claims, and new construction.", primary: true },
  { name: "Norman, OK", desc: "Roofing and construction services in Norman and south Cleveland County. Storm damage repair, new builds, and metal structures.", primary: true },
  { name: "Edmond, OK", desc: "Roof replacement, custom homes, and metal buildings in Edmond. We serve both established neighborhoods and new developments.", primary: true },
  { name: "Yukon, OK", desc: "Roofing contractor and metal building services in Yukon. Quick response times — we're just down the turnpike.", primary: true },
  { name: "Mustang, OK", desc: "Full construction services in Mustang — roofing, custom homes, metal shops, and barndominiums.", primary: true },
  { name: "Del City, OK", desc: "Roofing and storm damage repair in Del City.", primary: false },
  { name: "Midwest City, OK", desc: "Roof replacement and repair services for Midwest City homeowners.", primary: false },
  { name: "Newcastle, OK", desc: "Custom homes, metal buildings, and roofing in Newcastle.", primary: false },
  { name: "Blanchard, OK", desc: "Metal building and barndominium construction in Blanchard.", primary: false },
  { name: "Tuttle, OK", desc: "Roofing and metal building services in Tuttle.", primary: false },
  { name: "Purcell, OK", desc: "Custom home building and roofing services in Purcell.", primary: false },
];

const ServiceAreasPage = () => (
  <>
    <SEOHead
      title="Service Areas | Redwood Construction Pros Oklahoma"
      description="Roofing, custom homes, and metal buildings in Moore OK, Oklahoma City, Edmond, Norman, Yukon, Mustang. Call 405-406-9830."
      canonical="/service-areas"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        "name": "Redwood Construction Pros",
        "telephone": "+1-405-406-9830",
        "areaServed": areas.map((a) => ({ "@type": "City", "name": a.name.replace(", OK", "") })),
      }}
    />

    <section className="section-pad bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-[1.1] max-w-[800px] mb-6">
          Service Areas — Roofing & Construction Across the OKC Metro
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-[700px] mb-8">
          Redwood Construction Pros is based in Moore, OK and runs crews across the Oklahoma City metro daily. We handle roofing, custom home builds, metal buildings, and barndominiums in Moore, OKC, Edmond, Norman, Yukon, Mustang, and surrounding areas.
        </p>
        <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors">
          <Phone className="w-5 h-5" /> Call: {PHONE_DISPLAY}
        </a>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-10">Primary Service Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {areas.filter((a) => a.primary).map((area) => (
            <div key={area.name} className="p-6 rounded-xl bg-secondary border border-border">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <h3 className="text-lg font-bold text-primary">{area.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-extrabold text-primary mb-6">Additional Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.filter((a) => !a.primary).map((area) => (
            <div key={area.name} className="flex items-start gap-3 p-4 rounded-xl bg-secondary border border-border">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground text-sm">{area.name}</p>
                <p className="text-muted-foreground text-xs">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-extrabold text-primary mb-6">Services Available in All Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/roofing-moore-ok" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Roofing</h3>
            <p className="text-sm text-muted-foreground mt-1">Replacement, repair, hail damage, insurance claims.</p>
          </Link>
          <Link to="/custom-home-builder-moore-ok" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Custom Homes</h3>
            <p className="text-sm text-muted-foreground mt-1">Ground-up builds with in-house foundation work.</p>
          </Link>
          <Link to="/metal-buildings-oklahoma-city" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Metal Buildings</h3>
            <p className="text-sm text-muted-foreground mt-1">Shops, barndominiums, commercial structures.</p>
          </Link>
        </div>
      </div>
    </section>

    <PageCTA />
  </>
);

export default ServiceAreasPage;
