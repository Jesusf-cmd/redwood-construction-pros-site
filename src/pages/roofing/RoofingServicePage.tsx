import { Link } from "react-router-dom";
import { Home, ShieldCheck, Wrench, CloudLightning, CircleDollarSign, Warehouse } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ServicePageHero from "@/components/ServicePageHero";
import TrustSignals from "@/components/TrustSignals";
import ContentSection from "@/components/ContentSection";
import ProcessSteps from "@/components/ProcessSteps";
import CTABanner from "@/components/CTABanner";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import heroImg from "@/assets/hero-construction.jpg";

const PHONE = "405-760-9706";

type Paragraph = string | { text: string; links: { label: string; path: string }[] };

type RoofingPageConfig = {
  title: string;
  description: string;
  canonical: string;
  h1: string;
  subtitle: string;
  imageAlt: string;
  sections: { id: string; heading: string; paragraphs: Paragraph[] }[];
  processHeading: string;
  process: { number: number; title: string; description: string }[];
  cta: { heading: string; subtext: string };
  faqs: FAQItem[];
  related: { title: string; description: string; path: string; icon: typeof Home }[];
};

const P = ({ item }: { item: Paragraph }) => {
  if (typeof item === "string") return <p>{item}</p>;
  const segments = item.links.reduce<(string | JSX.Element)[]>((parts, link, index) => {
    const source = parts.flatMap((part) => typeof part === "string" ? part.split(link.label) : [part]);
    const rebuilt: (string | JSX.Element)[] = [];
    source.forEach((part, partIndex) => {
      rebuilt.push(part);
      if (typeof part === "string" && partIndex < source.length - 1) {
        rebuilt.push(<Link key={`${link.path}-${index}-${partIndex}`} to={link.path} className="font-bold text-accent no-underline hover:underline">{link.label}</Link>);
      }
    });
    return rebuilt;
  }, [item.text]);
  return <p>{segments}</p>;
};

const baseCrumbs = (current: string) => [
  { label: "Home", path: "/" },
  { label: "Roofing", path: "/roofing" },
  { label: current, path: "#" },
];

export const RoofingServicePage = ({ config }: { config: RoofingPageConfig }) => (
  <>
    <SEOHead title={config.title} description={config.description} canonical={config.canonical} />
    <ServicePageHero
      title={config.h1}
      subtitle={config.subtitle}
      backgroundImage={heroImg}
      imageAlt={config.imageAlt}
      breadcrumbs={baseCrumbs(config.h1.replace(" in Oklahoma City, OK", "").replace(" in Oklahoma City", ""))}
    />
    <TrustSignals />
    {config.sections.slice(0, 2).map((section) => (
      <ContentSection key={section.id} id={section.id} heading={section.heading}>
        {section.paragraphs.map((paragraph, index) => <P key={index} item={paragraph} />)}
      </ContentSection>
    ))}
    <ProcessSteps heading={config.processHeading} steps={config.process} />
    {config.sections.slice(2).map((section) => (
      <ContentSection key={section.id} id={section.id} heading={section.heading}>
        {section.paragraphs.map((paragraph, index) => <P key={index} item={paragraph} />)}
      </ContentSection>
    ))}
    <CTABanner heading={config.cta.heading} subtext={config.cta.subtext} phoneNumber={PHONE} formLink="/contact" />
    <FAQSection faqs={config.faqs} heading={`${config.h1} FAQ`} />
    <InternalLinkGrid links={config.related} heading="Related Roofing Services" />
  </>
);

export type { RoofingPageConfig };
export { Home, ShieldCheck, Wrench, CloudLightning, CircleDollarSign, Warehouse };
