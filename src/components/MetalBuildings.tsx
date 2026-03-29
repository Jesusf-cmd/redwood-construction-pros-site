import { CheckCircle, Phone } from "lucide-react";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const features = [
  "Concrete slab (we control this)",
  "Steel structure install",
  "Insulated panels (optional)",
  "Turnkey builds available",
];

const MetalBuildings = () => (
  <section id="metal-buildings" className="section-pad bg-secondary">
    <div className="max-w-[1200px] mx-auto">
      <div className="max-w-[700px]">
        <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Metal Buildings</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
          Metal Buildings & Barndominiums
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Need a shop, barndo, or commercial building? We design and build complete metal structures — from slab to final install.
        </p>
        <ul className="flex flex-col gap-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-foreground font-medium">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
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

export default MetalBuildings;
