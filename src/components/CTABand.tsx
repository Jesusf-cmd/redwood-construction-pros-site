import { MessageSquare, Phone } from "lucide-react";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const CTABand = () => (
  <section id="cta" className="bg-brick py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
    <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary-foreground/[0.04]" />
    <div className="absolute left-[30%] -bottom-20 w-60 h-60 rounded-full bg-charcoal/[0.06]" />

    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center relative z-10">
      <div>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold text-primary-foreground leading-tight">
          Ready to Get Started?<br />Let's Talk About Your Project.
        </h2>
        <p className="text-base font-light text-primary-foreground/75 mt-3">Free estimates, no pressure. Call, text, or email — Jose picks up.</p>
      </div>
      <div className="flex flex-col gap-4 min-w-[240px]">
        <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-brick font-condensed text-sm font-bold tracking-[0.1em] uppercase px-7 py-3.5 no-underline hover:bg-cream hover:-translate-y-px transition-all whitespace-nowrap">
          <MessageSquare className="w-4 h-4" />
          Request Free Estimate
        </a>
        <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center gap-2.5 text-primary-foreground/80 no-underline font-condensed text-base font-semibold tracking-wide hover:text-primary-foreground transition-colors">
          <Phone className="w-[18px] h-[18px]" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  </section>
);

export default CTABand;
