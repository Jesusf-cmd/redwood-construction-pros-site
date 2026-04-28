import { Link } from "react-router-dom";
import { ChevronRight, ClipboardCheck, Phone } from "lucide-react";
import { SchemaMarkup } from "@/components/StructuredData";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  breadcrumbs: BreadcrumbItem[];
}

const SITE_URL = "https://redwoodconstructionpros.com";
const PHONE_DISPLAY = "405-760-9706";
const PHONE_TEL = "4057609706";

const createBreadcrumbSchema = (breadcrumbs: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: breadcrumb.label,
    item: `${SITE_URL}${breadcrumb.path === "/" ? "" : breadcrumb.path}`,
  })),
});

const ServicePageHero = ({ title, subtitle, backgroundImage, breadcrumbs }: ServicePageHeroProps) => (
  <section className="relative overflow-hidden bg-primary text-primary-foreground">
    <SchemaMarkup schemas={[createBreadcrumbSchema(breadcrumbs)]} />
    {backgroundImage && (
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Redwood Construction Pros roofing and construction crew in Oklahoma City"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
    )}
    {!backgroundImage && <div className="absolute inset-0 bg-primary" />}

    <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-0 pt-20 md:px-8 md:pt-28 lg:px-16">
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-primary-foreground/75">
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={breadcrumb.path} className="inline-flex items-center gap-2">
            {index > 0 && <ChevronRight className="h-4 w-4 text-accent" />}
            <Link to={breadcrumb.path} className="font-semibold text-primary-foreground/85 no-underline hover:text-accent">
              {breadcrumb.label}
            </Link>
          </span>
        ))}
      </nav>

      <div className="max-w-[900px] pb-14 md:pb-20">
        <h1 className="mb-6 text-4xl font-black leading-tight text-primary-foreground md:text-5xl lg:text-[58px]">
          {title}
        </h1>
        <p className="max-w-[760px] text-lg font-medium leading-8 text-primary-foreground/82 md:text-xl">
          {subtitle}
        </p>
      </div>

      <div className="grid gap-3 rounded-t-lg border border-primary-foreground/15 bg-primary-foreground/10 p-4 backdrop-blur-sm sm:grid-cols-2 md:flex md:items-center md:justify-between md:p-5">
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/25 px-5 py-3 font-bold text-primary-foreground no-underline transition-colors hover:bg-primary-foreground/10"
        >
          <Phone className="h-4 w-4" />
          {PHONE_DISPLAY}
        </a>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-bold text-accent-foreground no-underline shadow-lg shadow-accent/25 transition-colors hover:bg-orange-hover"
        >
          <ClipboardCheck className="h-4 w-4" />
          Get Free Estimate
        </Link>
      </div>
    </div>
  </section>
);

export default ServicePageHero;
