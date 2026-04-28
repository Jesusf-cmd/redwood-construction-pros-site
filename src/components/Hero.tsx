import { Phone, Mail } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Redwood Construction Pros - Oklahoma roofing and construction"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-primary/80" />
    </div>

    <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-20 md:pt-40 md:pb-28">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-[1.1] max-w-[800px] mb-6">
        Oklahoma's Trusted Roofing, Custom Home & Metal Building Contractor
      </h1>

      <p className="text-lg md:text-xl text-primary-foreground/80 font-medium max-w-[600px] mb-10">
        Built Right. Priced Fair. Done Fast. Serving OKC Metro & Surrounding Areas.
      </p>

      <div className="flex gap-4 flex-wrap mb-12">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-base px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors"
        >
          <Mail className="w-5 h-5" />
          Get Free Estimate
        </a>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground font-bold text-base px-8 py-4 rounded-lg border border-primary-foreground/20 no-underline hover:bg-primary-foreground/20 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now: {PHONE_DISPLAY}
        </a>
      </div>

      <div className="flex items-center gap-3 flex-wrap text-primary-foreground/60 text-sm font-semibold">
        <span>Licensed</span>
        <span className="text-accent">•</span>
        <span>Insured</span>
        <span className="text-accent">•</span>
        <span>Local Contractor</span>
        <span className="text-accent">•</span>
        <span>Fast Turnaround</span>
      </div>
    </div>
  </section>
);

export default Hero;
