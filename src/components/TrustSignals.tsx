import { BadgeCheck, CheckCircle, MapPin, Shield, Users } from "lucide-react";

const signals = [
  { label: "Licensed & Insured", icon: Shield },
  { label: "Locally Owned & Operated", icon: Users },
  { label: "Free Estimates", icon: CheckCircle },
  { label: "Oklahoma City Based", icon: MapPin },
  { label: "Serving OKC Since 2018", icon: BadgeCheck },
];

const TrustSignals = () => (
  <section className="border-y border-border bg-background px-4 py-6 md:px-8 lg:px-16">
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {signals.map((signal) => {
        const Icon = signal.icon;
        return (
          <div key={signal.label} className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-3">
            <Icon className="h-5 w-5 flex-shrink-0 text-accent" />
            <span className="text-sm font-bold text-primary">{signal.label}</span>
          </div>
        );
      })}
    </div>
  </section>
);

export default TrustSignals;
