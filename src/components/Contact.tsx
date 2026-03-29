import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";
const EMAIL = "jose@redwoodconstructionpros.com";

const serviceOptions = [
  "Metal Building – Red Iron Structure",
  "Metal Building – Barndominium",
  "Metal Building – Shop / Warehouse / Ag",
  "Metal Roofing – Standing Seam",
  "Roofing – Full Replacement",
  "Roofing – Repair / Storm Damage",
  "Custom Home Build",
  "Structural Framing",
  "Multiple Services",
  "Not Sure – Need Consultation",
];

const contactItems = [
  { icon: Phone, label: "Phone & Text", value: PHONE_DISPLAY, href: `tel:${PHONE}` },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: "Location", value: "Moore, Oklahoma 73160", href: null },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 7:00 AM – 6:00 PM", href: null },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "", last_name: "", phone: "", email: "", service: "", city: "", message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free Estimate Request - ${formData.service || "General Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${formData.first_name} ${formData.last_name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nCity: ${formData.city}\n\nProject Details:\n${formData.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad bg-warm-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
          <div>
            <p className="font-condensed text-[11px] font-semibold tracking-[0.25em] uppercase text-brick flex items-center gap-2.5 mb-4">
              Get In Touch
              <span className="block w-10 h-px bg-brick" />
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.1] text-charcoal">
              We Make It<br /><em className="italic text-brick">Easy to Connect</em>
            </h2>
            <p className="mt-4 text-[0.95rem] font-light text-text-mid leading-relaxed max-w-[380px]">
              Call or text Jose directly, shoot us an email, or fill out the form. We'll get back to you within a few hours — usually faster.
            </p>

            <ul className="flex flex-col gap-6 mt-8 list-none p-0">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-charcoal flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 stroke-gold" />
                  </div>
                  <div>
                    <p className="font-condensed text-[10px] font-semibold tracking-[0.18em] uppercase text-text-light">{item.label}</p>
                    {item.href ? (
                      <p className="text-base font-medium text-charcoal mt-0.5">
                        <a href={item.href} className="text-charcoal no-underline hover:text-brick transition-colors">{item.value}</a>
                      </p>
                    ) : (
                      <p className="text-base font-medium text-charcoal mt-0.5">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-cream p-8 md:p-10 border border-cream-dark">
            <p className="font-serif text-xl font-bold text-charcoal mb-1">Request a Free Estimate</p>
            <p className="text-[0.88rem] font-light text-text-light mb-7">Fill out the form and we'll reach out within a few hours.</p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-condensed text-[11px] font-semibold tracking-[0.14em] uppercase text-text-mid">First Name</label>
                  <input type="text" required placeholder="John" value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} className="bg-primary-foreground border border-cream-dark px-3.5 py-2.5 font-body text-[0.95rem] text-charcoal outline-none focus:border-brick transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-condensed text-[11px] font-semibold tracking-[0.14em] uppercase text-text-mid">Last Name</label>
                  <input type="text" required placeholder="Smith" value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} className="bg-primary-foreground border border-cream-dark px-3.5 py-2.5 font-body text-[0.95rem] text-charcoal outline-none focus:border-brick transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-condensed text-[11px] font-semibold tracking-[0.14em] uppercase text-text-mid">Phone Number</label>
                  <input type="tel" required placeholder="405-555-1234" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-primary-foreground border border-cream-dark px-3.5 py-2.5 font-body text-[0.95rem] text-charcoal outline-none focus:border-brick transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-condensed text-[11px] font-semibold tracking-[0.14em] uppercase text-text-mid">Email Address</label>
                  <input type="email" placeholder="you@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-primary-foreground border border-cream-dark px-3.5 py-2.5 font-body text-[0.95rem] text-charcoal outline-none focus:border-brick transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 mb-4">
                <label className="font-condensed text-[11px] font-semibold tracking-[0.14em] uppercase text-text-mid">Service Needed</label>
                <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="bg-primary-foreground border border-cream-dark px-3.5 py-2.5 font-body text-[0.95rem] text-charcoal outline-none focus:border-brick transition-colors">
                  <option value="" disabled>Select a service…</option>
                  {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5 mb-4">
                <label className="font-condensed text-[11px] font-semibold tracking-[0.14em] uppercase text-text-mid">Your City</label>
                <input type="text" placeholder="Moore, Norman, OKC…" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="bg-primary-foreground border border-cream-dark px-3.5 py-2.5 font-body text-[0.95rem] text-charcoal outline-none focus:border-brick transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5 mb-4">
                <label className="font-condensed text-[11px] font-semibold tracking-[0.14em] uppercase text-text-mid">Project Details</label>
                <textarea placeholder="Tell us a bit about your project — size, timeline, any specific needs…" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-primary-foreground border border-cream-dark px-3.5 py-2.5 font-body text-[0.95rem] text-charcoal outline-none focus:border-brick transition-colors resize-y min-h-[100px]" />
              </div>
              <button type="submit" className="w-full bg-charcoal text-primary-foreground font-condensed text-sm font-bold tracking-[0.1em] uppercase py-3.5 border-none cursor-pointer hover:bg-brick transition-colors mt-2">
                Send My Free Estimate Request →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
