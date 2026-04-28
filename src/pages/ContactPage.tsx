import { FormEvent, useState } from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import { trackFormSubmit } from "@/lib/analytics";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";
const EMAIL = "jose@redwoodconstructionpros.com";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100, "Name must be under 100 characters"),
  phone: z.string().trim().min(7, "Phone number is required").max(30, "Phone number must be under 30 characters"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email must be under 255 characters"),
  service: z.string().trim().min(1, "Select a service"),
  address: z.string().trim().max(200, "Address must be under 200 characters").optional(),
  message: z.string().trim().max(1000, "Message must be under 1000 characters").optional(),
});

const services = ["Roof Repair", "Roof Replacement", "Metal Roofing", "Storm/Hail Damage", "Insurance Claim", "Residential Framing", "Commercial Framing", "Metal Framing", "Custom Home", "Other"];
const areas = [
  { label: "Oklahoma City", path: "/areas/oklahoma-city" },
  { label: "Edmond", path: "/areas/edmond" },
  { label: "Norman", path: "/areas/norman" },
  { label: "Moore", path: "/areas/moore" },
  { label: "Midwest City", path: "/areas/midwest-city" },
];
const faqs = [
  { question: "How fast does Redwood respond?", answer: "Most calls, texts, and form submissions receive a response the same business day, often within a few hours during normal business hours." },
  { question: "Are estimates really free?", answer: "Yes. Roofing inspections, framing consultations, and construction estimates are free before any work is approved." },
  { question: "Do you handle emergency roof leaks?", answer: "Yes. If storm damage or an active leak is causing water intrusion, call immediately so we can discuss tarping or emergency sealing options." },
  { question: "How far outside Oklahoma City do you work?", answer: "We serve Oklahoma City, Edmond, Norman, Moore, Midwest City, Yukon, Del City, and surrounding OKC metro communities." },
];

const ContactPage = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = contactSchema.safeParse({
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      service: form.get("service"),
      address: form.get("address") || undefined,
      message: form.get("message") || undefined,
    });

    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        nextErrors[key] = issue.message;
      });
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    trackFormSubmit();
    event.currentTarget.reset();
  };

  return (
    <>
      <SEOHead
        title="Contact Redwood Construction Pros | Oklahoma City, OK"
        description="Get a free estimate from Redwood Construction Pros in Oklahoma City. Call, email, or submit our online form. Fast response guaranteed."
        canonical="/contact"
      />

      <section className="section-pad bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="mb-6 max-w-[900px] text-4xl font-black leading-tight md:text-5xl lg:text-[58px]">Contact Redwood Construction Pros</h1>
          <p className="max-w-[760px] text-lg font-medium leading-8 text-primary-foreground/80 md:text-xl">Request a free estimate for roofing, framing, storm damage repair, or construction work in Oklahoma City.</p>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-border bg-secondary p-6 md:p-8">
            <h2 className="mb-6 text-3xl font-extrabold text-primary">Request Free Estimate</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-bold text-primary">Full Name *<input name="name" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground" maxLength={100} /></label>
              <label className="space-y-2 text-sm font-bold text-primary">Phone Number *<input name="phone" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground" maxLength={30} /></label>
              <label className="space-y-2 text-sm font-bold text-primary">Email *<input name="email" type="email" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground" maxLength={255} /></label>
              <label className="space-y-2 text-sm font-bold text-primary">Service Needed *<select name="service" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground"><option value="">Select a service</option>{services.map((service) => <option key={service} value={service}>{service}</option>)}</select></label>
              <label className="space-y-2 text-sm font-bold text-primary sm:col-span-2">Property Address<input name="address" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground" maxLength={200} /></label>
              <label className="space-y-2 text-sm font-bold text-primary sm:col-span-2">Message<textarea name="message" rows={5} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground" maxLength={1000} /></label>
            </div>
            {Object.values(errors).length > 0 && <div className="mt-5 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm font-semibold text-destructive">{Object.values(errors)[0]}</div>}
            {submitted && <div className="mt-5 rounded-lg border border-accent/30 bg-accent/10 p-4 text-sm font-semibold text-primary">Request received. Call {PHONE_DISPLAY} if this is urgent.</div>}
            <button type="submit" className="mt-6 w-full rounded-lg bg-accent px-6 py-4 font-bold text-accent-foreground transition-colors hover:bg-orange-hover">Request Free Estimate</button>
          </form>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-secondary p-6">
              <h2 className="mb-5 text-3xl font-extrabold text-primary">Contact Details</h2>
              <div className="space-y-4 text-sm font-semibold text-foreground">
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-primary no-underline hover:text-accent"><Phone className="h-5 w-5 text-accent" />{PHONE_DISPLAY}</a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all text-primary no-underline hover:text-accent"><Mail className="h-5 w-5 text-accent" />{EMAIL}</a>
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent" />[OFFICE ADDRESS], Oklahoma City, OK</p>
                <p>Business Hours: Mon–Sat 7:00 AM – 6:00 PM</p>
              </div>
            </div>
            <iframe
              title="Oklahoma City service area map for Redwood Construction Pros"
              src="https://www.google.com/maps?q=35.4676,-97.5164&z=10&output=embed"
              className="h-[320px] w-full rounded-lg border border-border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </aside>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-6 text-3xl font-extrabold text-primary">Service Areas</h2>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => <Link key={area.path} to={area.path} className="rounded-lg border border-border bg-background px-4 py-3 font-bold text-primary no-underline hover:border-accent/40 hover:text-accent">{area.label} roofing and construction</Link>)}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Quick Answers" />
    </>
  );
};

export default ContactPage;
