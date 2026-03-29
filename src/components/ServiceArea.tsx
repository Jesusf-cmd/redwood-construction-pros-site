import { MapPin } from "lucide-react";

const areas = [
  "Oklahoma City",
  "Yukon",
  "Edmond",
  "Norman",
  "Moore",
  "Surrounding OKC Metro",
];

const ServiceArea = () => (
  <section id="service-area" className="section-pad bg-background">
    <div className="max-w-[1200px] mx-auto text-center">
      <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Coverage</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12">
        Areas We Serve
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[600px] mx-auto">
        {areas.map((area) => (
          <div key={area} className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border">
            <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="font-semibold text-foreground text-sm">{area}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceArea;
