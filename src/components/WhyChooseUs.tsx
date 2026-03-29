import { UserCheck, Hammer, Clock, DollarSign, Shield } from "lucide-react";

const reasons = [
  { icon: UserCheck, text: "Direct Owner Oversight (no middleman crews)" },
  { icon: Hammer, text: "Concrete + Structural Expertise (huge advantage vs roof-only guys)" },
  { icon: Clock, text: "Faster Scheduling than big companies" },
  { icon: DollarSign, text: "Transparent Pricing (no hidden change orders)" },
  { icon: Shield, text: "Built for longevity, not shortcuts" },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-pad bg-background">
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
            Most contractors sell — we build like it's ours.
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {reasons.map((r) => (
            <div key={r.text} className="flex items-start gap-4 p-4 rounded-xl bg-secondary">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <r.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground font-medium leading-relaxed">{r.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
