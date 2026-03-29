import { Star } from "lucide-react";

const reviews = [
  {
    tag: "Metal Building",
    text: "\"Got quotes from two metal building companies before calling Redwood. Jose's price was better and he actually explained the difference between kits — red iron vs tube steel, the insulation options, all of it. Our 60×100 shop turned out perfect.\"",
    author: "Randy & Tina W.",
    location: "Newcastle, OK",
  },
  {
    tag: null,
    text: "\"After the hail storm last spring, I called three roofing companies. Jose was the only one who actually came out same day. New roof was done in two days, clean worksite, and he handled the insurance adjuster himself.\"",
    author: "David & Maria T.",
    location: "Moore, OK",
  },
  {
    tag: "Custom Home",
    text: "\"We built our forever home with Redwood and I genuinely can't believe how smooth it went. Jose kept us in the loop every single week. The framing crew was incredible — fast and clean. We moved in on schedule and under budget.\"",
    author: "The Hernandez Family",
    location: "Mustang, OK",
  },
  {
    tag: "Framing",
    text: "\"I'm a general contractor and I've used a lot of framing crews. Redwood is the only one I call now. They read plans correctly, they're fast, and they don't cut corners on the straightness of walls.\"",
    author: "Craig B., General Contractor",
    location: "Norman, OK",
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
    ))}
  </div>
);

const Testimonials = () => (
  <section id="testimonials" className="section-pad bg-charcoal">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4">
        <div>
          <p className="font-condensed text-[11px] font-semibold tracking-[0.25em] uppercase text-gold/80 mb-4">Customer Reviews</p>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.1] text-cream">
            What Our Neighbors<br /><em className="italic text-brick">Are Saying</em>
          </h2>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 bg-transparent text-cream font-condensed text-sm font-bold tracking-[0.1em] uppercase px-7 py-3 border border-primary-foreground/30 no-underline hover:border-cream transition-colors">
          Leave a Review
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-light">
        {reviews.map((r) => (
          <div key={r.author} className="bg-charcoal-mid p-6 relative">
            {r.tag && (
              <span className="absolute top-5 right-5 font-condensed text-[10px] font-semibold tracking-[0.12em] uppercase text-brick-pale border px-2 py-0.5" style={{ borderColor: "hsla(7,72%,36%,0.3)" }}>
                {r.tag}
              </span>
            )}
            <Stars />
            <p className="font-serif text-base italic text-primary-foreground/75 leading-relaxed mb-6">{r.text}</p>
            <p className="font-condensed text-xs font-semibold tracking-[0.12em] uppercase text-gold">{r.author}</p>
            <p className="text-[11px] text-primary-foreground/[0.35] mt-1 tracking-wide">{r.location}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
