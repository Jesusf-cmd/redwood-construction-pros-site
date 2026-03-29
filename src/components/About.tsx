import aboutImg from "@/assets/about-crew.jpg";
import { Phone } from "lucide-react";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const pillars = [
  { title: "Accountability", desc: "Written estimates, transparent pricing, and a direct line to Jose throughout your project." },
  { title: "Craftsmanship", desc: "We use premium materials and take the time to do it right — every seam, every joint, every corner." },
  { title: "Local Roots", desc: "We're your neighbors. We know Oklahoma weather, Oklahoma soil, and Oklahoma code." },
  { title: "Workmanship Warranty", desc: "Our labor is backed by a written warranty because we stand behind what we build." },
];

const About = () => (
  <section id="about" className="section-pad bg-charcoal relative overflow-hidden">
    <div className="absolute top-[-2px] left-0 right-0 h-1" style={{ background: "repeating-linear-gradient(90deg, hsl(var(--brick)) 0, hsl(var(--brick)) 40px, transparent 40px, transparent 50px)" }} />

    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <div className="relative order-first">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Redwood Construction Pros crew working in Oklahoma"
              className="w-full object-cover brightness-75 saturate-[0.8]"
              style={{ aspectRatio: "4/5" }}
              loading="lazy"
              width={800}
              height={1000}
            />
            <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-brick -z-10" />
            <div className="hidden md:block absolute bottom-8 -left-8 bg-charcoal-mid p-5 max-w-[260px]" style={{ borderLeft: "3px solid hsl(var(--gold))" }}>
              <p className="font-serif text-base italic text-cream leading-snug">"We build what we'd want for our own family."</p>
              <cite className="block mt-2 font-condensed text-[11px] font-semibold tracking-[0.12em] uppercase text-gold not-italic">— Jose, Founder & Lead Builder</cite>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="font-condensed text-[11px] font-semibold tracking-[0.25em] uppercase text-gold/80 mb-4">Our Story</p>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.1] text-cream">
            Moore-Built.<br /><em className="italic text-brick-pale">Oklahoma Proud.</em>
          </h2>
          <p className="text-[1.05rem] font-light text-primary-foreground/[0.65] leading-relaxed mt-6 mb-4">
            Redwood Construction Pros was founded right here in Moore, Oklahoma — not by a franchise or a corporation, but by a builder who knows what it means to live through an Oklahoma storm and need someone you can actually trust to show up. We've been serving this community for over 15 years.
          </p>
          <p className="text-[1.05rem] font-light text-primary-foreground/[0.65] leading-relaxed mb-8">
            We don't subcontract your job to the lowest bidder. The crew you meet on day one is the crew that finishes your project.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {pillars.map((p) => (
              <div key={p.title} className="pt-4" style={{ borderTop: "1px solid hsla(38,66%,47%,0.25)" }}>
                <p className="font-condensed text-[13px] font-bold tracking-[0.1em] uppercase text-gold mb-1">{p.title}</p>
                <p className="text-[0.88rem] font-light text-primary-foreground/[0.55] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-brick text-primary-foreground font-condensed text-sm font-bold tracking-[0.1em] uppercase px-7 py-3.5 no-underline hover:bg-brick-light transition-colors">
            <Phone className="w-4 h-4" />
            Call Jose Directly: {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
