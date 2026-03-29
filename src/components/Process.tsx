const steps = [
  { num: "01", title: "Free Estimate", desc: "We come to you, assess the scope, and provide a detailed written estimate — no pressure, no obligation." },
  { num: "02", title: "Plan & Schedule", desc: "We nail down materials, timelines, and milestones. You'll know exactly what's happening before we swing a hammer." },
  { num: "03", title: "We Build", desc: "Our crew shows up on time, works clean, and keeps you updated. Quality checks happen daily on every job site." },
  { num: "04", title: "Final Walkthrough", desc: "You inspect the work with us. We don't consider a job done until you're fully satisfied and sign off." },
];

const Process = () => (
  <section id="process" className="section-pad bg-cream">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center max-w-[620px] mx-auto mb-12 md:mb-16">
        <p className="font-condensed text-[11px] font-semibold tracking-[0.25em] uppercase text-brick flex items-center justify-center gap-2.5 mb-4">
          <span className="block w-10 h-px bg-brick" />
          How It Works
        </p>
        <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.1] text-charcoal">
          Simple Process,<br /><em className="italic text-brick">Zero Surprises</em>
        </h2>
        <p className="mt-4 text-[0.95rem] text-text-mid font-light leading-relaxed">
          From the first phone call to the final walkthrough, we keep you in the loop every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Dashed connector line - desktop */}
        <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ background: "repeating-linear-gradient(90deg, hsl(var(--brick)) 0, hsl(var(--brick)) 8px, transparent 8px, transparent 14px)" }} />

        {steps.map((s) => (
          <div key={s.num} className="text-center relative group">
            <div className="w-16 h-16 rounded-full bg-warm-white border border-cream-dark flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:bg-brick group-hover:border-brick transition-colors">
              <span className="font-serif text-xl font-bold text-brick group-hover:text-primary-foreground transition-colors">{s.num}</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-charcoal mb-2">{s.title}</h4>
            <p className="text-[0.88rem] font-light text-text-mid leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
