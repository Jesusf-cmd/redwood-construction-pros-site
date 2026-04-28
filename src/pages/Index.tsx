import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Hammer,
  HardHat,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ContentSection from "@/components/ContentSection";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import ProcessSteps from "@/components/ProcessSteps";
import TrustSignals from "@/components/TrustSignals";
import heroImg from "@/assets/hero-construction.jpg";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const roofingServices = [
  {
    title: "Roof Repair",
    path: "/roofing/roof-repair",
    description: "Leak repair, missing shingles, flashing fixes, and storm-related roof damage handled fast.",
  },
  {
    title: "Roof Replacement",
    path: "/roofing/roof-replacement",
    description: "Complete tear-off and replacement systems built for Oklahoma wind, hail, and heat.",
  },
  {
    title: "Metal Roofing",
    path: "/roofing/metal-roofing",
    description: "Long-lasting metal roofing options for homes, shops, barns, and commercial properties.",
  },
  {
    title: "Storm Damage",
    path: "/roofing/storm-damage",
    description: "Emergency roof inspections, tarping, repair planning, and post-storm restoration.",
  },
  {
    title: "Hail Damage",
    path: "/roofing/hail-damage",
    description: "Hail impact inspections, shingle damage documentation, and repair recommendations.",
  },
  {
    title: "Insurance Claims",
    path: "/roofing/insurance-claims",
    description: "Claim support with photos, scope review, and communication with your insurance company.",
  },
];

const constructionServices = [
  {
    title: "Residential Framing",
    path: "/framing/residential",
    description: "Wall framing, roof framing, additions, garages, and structural carpentry for homes.",
  },
  {
    title: "Commercial Framing",
    path: "/framing/commercial",
    description: "Framing packages for tenant improvements, retail spaces, offices, and commercial shells.",
  },
  {
    title: "Metal Framing",
    path: "/framing/metal-framing",
    description: "Steel stud framing, partitions, soffits, and durable commercial interior assemblies.",
  },
  {
    title: "Custom Home Framing",
    path: "/framing/custom-home",
    description: "Ground-up custom home framing with careful layout, structural detail, and jobsite control.",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Free Inspection",
    description: "We come to your property, assess the situation, and provide a detailed report at no cost.",
  },
  {
    number: 2,
    title: "Custom Proposal",
    description: "You receive a transparent, itemized estimate with material options and timeline.",
  },
  {
    number: 3,
    title: "Expert Build",
    description: "Our licensed crews handle the work with precision, keeping you updated every step.",
  },
  {
    number: 4,
    title: "Final Walkthrough",
    description: "We don't consider it done until you do. Full walkthrough and cleanup guaranteed.",
  },
];

const areaLinks = [
  { label: "Oklahoma City", path: "/areas/oklahoma-city" },
  { label: "Edmond", path: "/areas/edmond" },
  { label: "Norman", path: "/areas/norman" },
  { label: "Moore", path: "/areas/moore" },
  { label: "Midwest City", path: "/areas/midwest-city" },
];

const faqs = [
  {
    question: "What roofing services does Redwood Construction Pros offer in Oklahoma City?",
    answer: "Redwood Construction Pros handles roof repair, full roof replacement, metal roofing, storm damage repair, hail damage repair, and roof insurance claim support throughout Oklahoma City.",
  },
  {
    question: "Do you offer framing services for new construction?",
    answer: "Yes. We provide residential framing, commercial framing, metal framing, and custom home framing for new builds, additions, remodels, and contractor-led construction projects.",
  },
  {
    question: "How much does a roof replacement cost in Oklahoma City?",
    answer: "Most roof replacements in Oklahoma City cost $8,000–$15,000 depending on roof size, pitch, tear-off needs, decking repairs, and material selection. Redwood provides free inspections and written estimates.",
  },
  {
    question: "Do you help with insurance claims for storm damage?",
    answer: "Yes. We inspect the roof, document visible storm or hail damage, provide photos and repair scope details, and work directly with your insurance company during the claims process.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Oklahoma City, Edmond, Norman, Moore, Midwest City, Yukon, Del City, and surrounding Oklahoma City metro communities.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. Redwood Construction Pros is fully licensed and insured in the state of Oklahoma for roofing, framing, and construction work.",
  },
];

const relatedLinks = [
  {
    title: "Roof Repair in Oklahoma City",
    description: "Fast leak repair, shingle replacement, flashing fixes, and storm damage roof service.",
    path: "/roofing/roof-repair",
    icon: Wrench,
  },
  {
    title: "Roof Replacement in Oklahoma City",
    description: "Complete roofing systems installed with materials selected for Oklahoma conditions.",
    path: "/roofing/roof-replacement",
    icon: Home,
  },
  {
    title: "Storm Damage Roof Repair",
    description: "Inspection, documentation, emergency protection, and repairs after severe weather.",
    path: "/roofing/storm-damage",
    icon: ShieldCheck,
  },
  {
    title: "Residential Framing",
    description: "House framing, additions, garages, and structural carpentry for builders and homeowners.",
    path: "/framing/residential",
    icon: Hammer,
  },
  {
    title: "Commercial Framing",
    description: "Framing support for commercial interiors, tenant build-outs, and structural scopes.",
    path: "/framing/commercial",
    icon: Building2,
  },
  {
    title: "Custom Home Framing",
    description: "Ground-up framing for custom homes with clean layout and reliable jobsite execution.",
    path: "/framing/custom-home",
    icon: HardHat,
  },
];

const ServiceColumn = ({ title, services }: { title: string; services: typeof roofingServices }) => (
  <div className="rounded-lg border border-border bg-background p-6">
    <h3 className="mb-5 text-2xl font-extrabold text-primary">{title}</h3>
    <div className="space-y-4">
      {services.map((service) => (
        <Link
          key={service.path}
          to={service.path}
          className="group block rounded-lg border border-border bg-secondary p-5 no-underline transition-all hover:border-accent/40 hover:bg-background hover:shadow-sm"
        >
          <span className="mb-2 flex items-center justify-between gap-3 text-lg font-bold text-primary transition-colors group-hover:text-accent">
            {service.title}
            <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="block text-sm leading-6 text-muted-foreground">{service.description}</span>
        </Link>
      ))}
    </div>
  </div>
);

const Index = () => (
  <>
    <SEOHead
      title="Roofing & Construction Oklahoma City, OK | Redwood Construction Pros"
      description="Oklahoma City's trusted roofing & construction company. Roof repair, replacement, framing, and custom builds. Free estimates. Call Redwood today."
      canonical="/"
    />

    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Roofing and construction project in Oklahoma City by Redwood Construction Pros"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-primary/88" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-[1200px] flex-col justify-center px-4 py-16 md:px-8 lg:px-16">
        <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent/35 bg-accent/15 px-4 py-2">
          <MapPin className="h-4 w-4 text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent">Oklahoma City Roofing & Construction</span>
        </div>
        <h1 className="max-w-[960px] text-4xl font-black leading-tight text-primary-foreground md:text-5xl lg:text-[60px]">
          Oklahoma City's Trusted Roofing & Construction Experts
        </h1>
        <p className="mt-6 max-w-[760px] text-lg font-medium leading-8 text-primary-foreground/80 md:text-xl">
          From roof repairs and storm damage to custom framing and metal buildings — Redwood Construction Pros is your full-service construction partner in OKC.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-4 font-bold text-accent-foreground no-underline shadow-lg shadow-accent/25 transition-colors hover:bg-orange-hover"
          >
            <ClipboardCheck className="h-5 w-5" />
            Get Your Free Estimate
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-7 py-4 font-bold text-primary-foreground no-underline transition-colors hover:bg-primary-foreground/20"
          >
            <Phone className="h-5 w-5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>

    <TrustSignals />

    <ContentSection id="what-we-do" heading="Full-Service Roofing & Construction in Oklahoma City">
      <p>
        Redwood Construction Pros is a roofing contractor Oklahoma City homeowners can call when a job needs more than a quick patch. We handle roof repair, roof replacement, metal roofing, storm and hail damage restoration, and insurance claim support, but we also bring serious structural construction experience to the same project. That matters when roof damage exposes bad decking, weak framing, or bigger problems behind the surface. As a framing contractor OKC builders and property owners can rely on, Redwood also provides residential framing, commercial framing, metal framing, and custom home construction. Homeowners, investors, and builders do not have to coordinate separate crews for roofing, framing, and structural work. One construction company Oklahoma property owners can call handles inspection, planning, materials, scheduling, build-out, and final cleanup. The result is a cleaner process, stronger workmanship, and fewer delays from contractor handoffs.
      </p>
    </ContentSection>

    <section className="section-pad bg-secondary">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-8 text-3xl font-extrabold text-primary md:text-4xl">Our Services</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ServiceColumn title="Roofing" services={roofingServices} />
          <ServiceColumn title="Construction" services={constructionServices} />
        </div>
      </div>
    </section>

    <ContentSection id="why-redwood" heading="Why Oklahoma City Trusts Redwood">
      <p>
        Redwood Construction Pros is locally owned and operated in OKC, and our work is shaped by the weather, building conditions, and expectations of central Oklahoma. Roofs here face tornado-season wind, large hail, driving rain, and extreme summer heat. Framing and construction projects need the same local knowledge because movement, moisture, and storm exposure can punish shortcuts. Redwood is licensed and insured, uses premium materials, and takes the time to explain the scope before work begins. Our estimates are transparent, itemized, and built around real jobsite conditions — no hidden fees and no vague allowances designed to surprise you later. We offer free inspections and free estimates so homeowners can make a confident decision before committing. Whether you're in Nichols Hills, Midtown, Capitol Hill, or anywhere across the OKC metro, Redwood brings practical contractor judgment, clean communication, and crews that respect your property. We show up, document what we find, and build it right.
      </p>
    </ContentSection>

    <ProcessSteps heading="How It Works" steps={processSteps} />

    <ContentSection id="areas-we-serve" heading="Serving Oklahoma City & Surrounding Areas">
      <p>
        From the heart of downtown OKC to the growing communities of Edmond, Norman, Moore, and Midwest City — Redwood Construction Pros serves the entire Oklahoma City metropolitan area. Our crews handle roof inspections after severe weather, full roof replacements, framing packages, metal roofing, and construction estimates across established neighborhoods and new developments. If you need a dependable contractor close enough to respond quickly and experienced enough to handle Oklahoma building conditions, Redwood is ready to help.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        {areaLinks.map((area) => (
          <Link
            key={area.path}
            to={area.path}
            className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-bold text-primary no-underline transition-colors hover:border-accent/40 hover:text-accent"
          >
            {area.label}
          </Link>
        ))}
      </div>
    </ContentSection>

    <CTABanner
      heading="Ready to Get Started?"
      subtext="Call now for a free roof inspection or construction estimate. Oklahoma City trusts Redwood."
      phoneNumber={PHONE_DISPLAY}
      formLink="/contact"
    />

    <FAQSection faqs={faqs} heading="Roofing & Construction FAQ" />

    <InternalLinkGrid links={relatedLinks} heading="Related Roofing & Construction Services" />
  </>
);

export default Index;
