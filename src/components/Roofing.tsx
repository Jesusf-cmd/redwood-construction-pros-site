import { Phone } from "lucide-react";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const Roofing = () => (
  <section id="roofing" className="section-pad bg-secondary">
    <div className="max-w-[1200px] mx-auto">
      <div className="max-w-[700px]">
        <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Roofing</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
          Roofing Contractor in Oklahoma City
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          If your roof is leaking, damaged by hail, or just worn out — we handle full replacements, repairs, and insurance jobs. We work fast, clean, and install systems that last.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          We help homeowners navigate insurance claims and maximize coverage.
        </p>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-base px-7 py-3.5 rounded-lg no-underline hover:bg-orange-hover transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now: {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  </section>
);

export default Roofing;
