const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";
const EMAIL = "jose@redwoodconstructionpros.com";

const Footer = () => (
  <footer className="bg-charcoal px-4 md:px-8 lg:px-16 pt-16 pb-8" style={{ borderTop: "1px solid hsla(38,66%,47%,0.15)" }}>
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-12 pb-12" style={{ borderBottom: "1px solid hsla(40,33%,95%,0.08)" }}>
      {/* Brand */}
      <div>
        <a href="#hero" className="flex items-center gap-2.5 no-underline mb-4">
          <div className="w-[38px] h-[38px] bg-brick flex items-center justify-center flex-shrink-0" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
            <span className="font-serif text-[16px] font-bold text-primary-foreground tracking-tight">R</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[15px] font-bold text-primary-foreground tracking-wide leading-tight">Redwood Construction Pros</span>
            <span className="font-condensed text-[10px] font-medium text-gold tracking-[0.18em] uppercase leading-none">Moore, Oklahoma</span>
          </div>
        </a>
        <p className="text-[0.9rem] font-light text-primary-foreground/[0.45] leading-relaxed max-w-[260px]">
          Licensed and insured general contractor serving Moore, Oklahoma City, and the surrounding metro since 2009. Roofing, metal buildings, custom homes, and structural framing done right.
        </p>
      </div>

      {/* Services */}
      <div>
        <p className="font-condensed text-[11px] font-bold tracking-[0.18em] uppercase text-gold mb-4">Services</p>
        <ul className="flex flex-col gap-2.5 list-none p-0">
          {["Roofing & Metal Roofing", "Metal & Red Iron Buildings", "Steel Barndominiums", "Custom Home Builder", "Structural Framing", "Free Estimates"].map((s) => (
            <li key={s}><a href="#services" className="text-[0.9rem] font-light text-primary-foreground/50 no-underline hover:text-cream transition-colors">{s}</a></li>
          ))}
        </ul>
      </div>

      {/* Areas */}
      <div>
        <p className="font-condensed text-[11px] font-bold tracking-[0.18em] uppercase text-gold mb-4">Service Areas</p>
        <ul className="flex flex-col gap-2.5 list-none p-0">
          {["Moore, OK", "Oklahoma City", "Norman", "Edmond", "Yukon & Mustang", "Midwest City"].map((a) => (
            <li key={a}><a href="#service-area" className="text-[0.9rem] font-light text-primary-foreground/50 no-underline hover:text-cream transition-colors">{a}</a></li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <p className="font-condensed text-[11px] font-bold tracking-[0.18em] uppercase text-gold mb-4">Contact</p>
        <ul className="flex flex-col gap-2.5 list-none p-0">
          <li><a href={`tel:${PHONE}`} className="text-[0.9rem] font-light text-primary-foreground/50 no-underline hover:text-cream transition-colors">{PHONE_DISPLAY}</a></li>
          <li><a href={`sms:${PHONE}`} className="text-[0.9rem] font-light text-primary-foreground/50 no-underline hover:text-cream transition-colors">Text Us</a></li>
          <li><a href={`mailto:${EMAIL}`} className="text-[0.9rem] font-light text-primary-foreground/50 no-underline hover:text-cream transition-colors break-all">{EMAIL}</a></li>
          <li><a href="#contact" className="text-[0.9rem] font-light text-primary-foreground/50 no-underline hover:text-cream transition-colors">Request Estimate</a></li>
        </ul>
      </div>
    </div>

    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8">
      <p className="text-[0.8rem] font-light text-primary-foreground/30">© 2025 Redwood Construction Pros LLC — Moore, Oklahoma. All rights reserved.</p>
      <p className="font-condensed text-[11px] font-medium tracking-[0.1em] text-gold/40 uppercase">
        Licensed General Contractor · Oklahoma · Roofing · Metal Buildings · Red Iron · Custom Homes · Framing
      </p>
    </div>
  </footer>
);

export default Footer;
