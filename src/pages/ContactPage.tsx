import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";
const EMAIL = "jose@redwoodconstructionpros.com";

const ContactPage = () => (
  <>
    <SEOHead
      title="Contact Redwood Construction Pros | Moore OK"
      description="Contact Redwood Construction Pros — roofing, custom homes, metal buildings in Moore OK & OKC. Call 405-760-9706 or email jose@redwoodconstructionpros.com."
      canonical="/contact"
    />

    <section className="section-pad bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-[1.1] max-w-[800px] mb-6">
          Contact Redwood Construction Pros — Moore, OK
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-[700px]">
          Call, text, or email for a same-day estimate on roofing, custom homes, or metal buildings anywhere in the OKC metro. We respond fast — most calls and texts are answered within the hour.
        </p>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <a href={`tel:${PHONE}`} className="p-8 rounded-xl bg-secondary border border-border hover:border-accent/30 transition-all no-underline text-center group">
            <Phone className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-xl font-bold text-primary mb-2">Call or Text</h2>
            <p className="text-lg font-bold text-accent">{PHONE_DISPLAY}</p>
            <p className="text-sm text-muted-foreground mt-2">Available 7 days a week</p>
          </a>
          <a href={`mailto:${EMAIL}`} className="p-8 rounded-xl bg-secondary border border-border hover:border-accent/30 transition-all no-underline text-center group">
            <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-xl font-bold text-primary mb-2">Email</h2>
            <p className="text-base font-bold text-accent break-all">{EMAIL}</p>
            <p className="text-sm text-muted-foreground mt-2">We respond within 24 hours</p>
          </a>
          <div className="p-8 rounded-xl bg-secondary border border-border text-center">
            <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="text-xl font-bold text-primary mb-2">Location</h2>
            <p className="text-base font-bold text-foreground">Moore, Oklahoma</p>
            <p className="text-sm text-muted-foreground mt-2">Serving the OKC Metro</p>
          </div>
        </div>

        <div className="max-w-[700px] mx-auto">
          <h2 className="text-2xl font-extrabold text-primary mb-6">What to Include When You Reach Out</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            To give you an accurate estimate quickly, let us know:
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              "Type of project — roofing, custom home, metal building, barndominium",
              "Property address or general location",
              "Approximate size or scope (sq ft, number of stories, building dimensions)",
              "Timeline — when you need the work done",
              "Insurance claim — if this is storm damage, let us know if you've filed",
              "Best time to reach you for a callback",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Don't have all the details? No problem. Call or text {PHONE_DISPLAY} and we'll figure it out together. We don't need blueprints to give you a ballpark — just tell us what you need done.
          </p>

          <h2 className="text-2xl font-extrabold text-primary mb-6">What Happens After You Contact Us</h2>
          <ol className="flex flex-col gap-4 mb-8">
            {[
              "We call or text you back — usually within the hour",
              "We schedule an on-site visit — most inspections happen within 48 hours",
              "We walk the job, take measurements, and discuss the scope",
              "You get a detailed written estimate with line-item pricing",
              "If you approve, we schedule the work — most projects start within 1–2 weeks",
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-foreground">
                <span className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-extrabold text-primary mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/roofing-moore-ok" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Roofing in Moore OK</h3>
            <p className="text-sm text-muted-foreground mt-1">Replacement, repair, storm damage, insurance claims.</p>
          </Link>
          <Link to="/custom-home-builder-moore-ok" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Custom Home Builder</h3>
            <p className="text-sm text-muted-foreground mt-1">Foundation to finish across the OKC metro.</p>
          </Link>
          <Link to="/metal-buildings-oklahoma-city" className="p-5 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="font-bold text-primary group-hover:text-accent transition-colors">Metal Buildings OKC</h3>
            <p className="text-sm text-muted-foreground mt-1">Shops, barndos, commercial — slab to finish.</p>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
