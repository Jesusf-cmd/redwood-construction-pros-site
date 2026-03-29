import { MapPin, Users, Building, Hammer } from "lucide-react";

const items = [
  { icon: MapPin, text: "Locally owned & operated" },
  { icon: Users, text: "Oklahoma-based crews" },
  { icon: Building, text: "Residential + commercial experience" },
  { icon: Hammer, text: "Concrete + structural specialists" },
];

const Authority = () => (
  <section id="authority" className="section-pad bg-background">
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-4 p-6 rounded-xl bg-secondary border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <item.icon className="w-6 h-6 text-accent" />
            </div>
            <span className="font-semibold text-foreground">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Authority;
