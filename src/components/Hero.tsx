import heroImg from "@/assets/hero-construction.jpg";
import { Mail, Phone } from "lucide-react";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const Hero = () => (
  <section id="hero" className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">
    {/* Left */}
    <div className="relative bg-charcoal flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-28 pb-16 md:pt-32 md:pb-24 z-[2] hero-animate">
      {/* Angled edge - desktop only */}
      <div
        className="hidden md:block absolute right-[-40px] top-0 bottom-0 w-20 bg-charcoal z-[3]"
        style={{ clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)" }}
      />

      <p className="font-condensed text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-6 flex items-center gap-3">
        <span className="block w-8 h-px bg-gold" />
        Moore, Oklahoma's Trusted Builder
      </p>

      <h1 className="font-serif text-[clamp(3rem,5.5vw,5.5rem)] font-black text-cream leading-[1] mb-6">
        Built to<br />Last.<br /><em className="italic text-brick-pale">Guaranteed.</em>
      </h1>

      <p className="text-[clamp(1rem,1.6vw,1.15rem)] font-light text-primary-foreground/[0.65] leading-relaxed max-w-[420px] mb-8">
        Roofing, metal buildings, custom homes, and structural framing — by a local crew that takes pride in every nail, beam, and panel across the OKC metro.
      </p>

      <div className="flex gap-4 flex-wrap mb-8">
        {["Licensed & Insured", "Metal & Red Iron", "Free Estimates"].map((b) => (
          <span
            key={b}
            className="font-condensed text-[11px] font-semibold tracking-[0.14em] uppercase text-gold-light border px-3 py-[5px]"
            style={{ borderColor: "hsla(38, 66%, 47%, 0.35)" }}
          >
            {b}
          </span>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-brick text-primary-foreground font-condensed text-sm font-bold tracking-[0.1em] uppercase px-7 py-3.5 no-underline hover:bg-brick-light hover:-translate-y-px transition-all"
        >
          <Mail className="w-4 h-4" />
          Get a Free Estimate
        </a>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 bg-transparent text-cream font-condensed text-sm font-bold tracking-[0.1em] uppercase px-7 py-3 border border-primary-foreground/30 no-underline hover:border-cream hover:text-primary-foreground hover:-translate-y-px transition-all"
        >
          <Phone className="w-4 h-4" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </div>

    {/* Right - Image */}
    <div className="relative overflow-hidden min-h-[50vh] md:min-h-0">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Custom home construction in Moore Oklahoma by Redwood Construction Pros"
          className="w-full h-full object-cover brightness-[0.55] saturate-[0.85]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" style={{ width: "40%" }} />
      </div>
      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-8 flex gap-8 z-10">
        {[
          { num: "15+", label: "Years Local" },
          { num: "500+", label: "Projects Done" },
          { num: "5★", label: "Google Rating" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="font-serif text-[2.4rem] font-black text-primary-foreground leading-none">{s.num}</span>
            <span className="font-condensed text-[11px] font-medium tracking-[0.14em] uppercase text-primary-foreground/[0.55] mt-1">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
