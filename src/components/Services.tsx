import { Home, Building, HardHat, Warehouse } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Roofing Services in Oklahoma City",
    items: [
      "Residential Roofing",
      "Roof Replacement",
      "Storm Damage & Insurance Claims",
      "Metal Roofing Systems",
    ],
  },
  {
    icon: HardHat,
    title: "Custom Home Builder (OKC Area)",
    items: [
      "Ground-Up Custom Homes",
      "Concrete + Structural Builds",
      "Turnkey Construction",
    ],
  },
  {
    icon: Building,
    title: "Metal Buildings & Shops",
    items: [
      "Barndominiums",
      "Steel Shops",
      "Commercial Buildings",
      "Equipment Storage Buildings",
    ],
  },
];

const Services = () => (
  <section id="services" className="section-pad bg-secondary">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">What We Do</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">
          Our Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-background rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <s.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-5">{s.title}</h3>
            <ul className="flex flex-col gap-3">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
