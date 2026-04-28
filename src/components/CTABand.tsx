import { Phone, Mail } from "lucide-react";

const PHONE = "4054069830";
const PHONE_DISPLAY = "405-406-9830";
const EMAIL = "jose@redwoodconstructionpros.com";

const CTABand = () => (
  <section id="contact" className="section-pad bg-primary">
    <div className="max-w-[800px] mx-auto text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6">
        Get a Fast, Free Estimate Today
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-base px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call or Text: {PHONE_DISPLAY}
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground font-bold text-base px-8 py-4 rounded-lg border border-primary-foreground/20 no-underline hover:bg-primary-foreground/20 transition-colors"
        >
          <Mail className="w-5 h-5" />
          {EMAIL}
        </a>
      </div>
      <p className="text-primary-foreground/60 font-medium mt-6">
        Limited scheduling available — we book projects on a first-come basis.
      </p>
    </div>
  </section>
);

export default CTABand;
