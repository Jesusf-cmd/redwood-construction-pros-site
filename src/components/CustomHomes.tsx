import { Phone } from "lucide-react";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const CustomHomes = () => (
  <section id="custom-homes" className="section-pad bg-background">
    <div className="max-w-[1200px] mx-auto">
      <div className="max-w-[700px]">
        <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Custom Homes</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
          Custom Home Builder in Oklahoma
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          We specialize in building durable, efficient homes with strong foundations, proper structural work, and clean finishes. Whether you're building your first home or an investment property — we deliver.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Unlike typical builders, we come from a concrete and structural background — meaning your foundation, slab, and framing are done right from day one.
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

export default CustomHomes;
