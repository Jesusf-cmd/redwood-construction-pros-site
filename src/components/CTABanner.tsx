import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

interface CTABannerProps {
  heading: string;
  subtext: string;
  phoneNumber: string;
  formLink: string;
}

const toTel = (phoneNumber: string) => phoneNumber.replace(/[^+\d]/g, "");

const CTABanner = ({ heading, subtext, phoneNumber, formLink }: CTABannerProps) => (
  <section className="section-pad bg-redwood text-redwood-foreground">
    <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div className="max-w-[720px]">
        <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">{heading}</h2>
        <p className="text-base leading-7 text-redwood-foreground/85 md:text-lg">{subtext}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center md:flex-shrink-0">
        <a
          href={`tel:${toTel(phoneNumber)}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-redwood-foreground/25 px-5 py-3 font-bold text-redwood-foreground no-underline transition-colors hover:bg-redwood-foreground/10"
        >
          <Phone className="h-4 w-4" />
          {phoneNumber}
        </a>
        <Link
          to={formLink}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-bold text-accent-foreground no-underline shadow-lg shadow-accent/20 transition-colors hover:bg-orange-hover"
        >
          Get Free Estimate
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default CTABanner;
