import { Shield, Check, Clock, Users, Home } from "lucide-react";

const items = [
  { icon: Shield, text: "Licensed & Fully Insured" },
  { icon: Check, text: "No-Cost Written Estimates" },
  { icon: Clock, text: "On-Time Project Delivery" },
  { icon: Users, text: "Local Family-Owned Business" },
  { icon: Home, text: "Serving OKC Metro Since 2009" },
];

const TrustBar = () => (
  <div className="bg-charcoal-mid py-4 px-4 md:px-8 lg:px-16" style={{ borderTop: "1px solid hsla(38,66%,47%,0.2)", borderBottom: "1px solid hsla(38,66%,47%,0.2)" }}>
    <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4 flex-wrap">
      {items.map((item, i) => (
        <div key={item.text} className="flex items-center gap-2.5">
          {i > 0 && <div className="hidden lg:block w-px h-6 mr-4" style={{ background: "hsla(38,66%,47%,0.2)" }} />}
          <item.icon className="w-[22px] h-[22px] text-gold flex-shrink-0" />
          <span className="font-condensed text-[13px] font-medium tracking-[0.08em] uppercase text-primary-foreground/60">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TrustBar;
