import SEOHead from "@/components/SEOHead";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import { createServiceSchema, SchemaMarkup } from "@/components/StructuredData";

interface PlaceholderPageProps {
  title: string;
  description: string;
  canonical: string;
  seoTitle?: string;
  serviceType?: string;
  serviceDescription?: string;
}

const createPlaceholderFaqs = (serviceType: string): FAQItem[] => [
  {
    question: `How much does ${serviceType.toLowerCase()} cost in Oklahoma City?`,
    answer: `${serviceType} pricing depends on the jobsite conditions, material scope, labor requirements, and project timeline. Contact Redwood Construction Pros for a project-specific estimate.`,
  },
  {
    question: `How soon can Redwood Construction Pros start ${serviceType.toLowerCase()}?`,
    answer: `Scheduling depends on current workload, weather, and project size. Most estimates can be discussed quickly after an initial call or site visit.`,
  },
  {
    question: `Do you provide ${serviceType.toLowerCase()} in the Oklahoma City metro?`,
    answer: `Yes. Redwood Construction Pros serves Oklahoma City and nearby communities including Edmond, Norman, Moore, Midwest City, Yukon, and Del City.`,
  },
];

const PlaceholderPage = ({ title, description, canonical, seoTitle, serviceType, serviceDescription }: PlaceholderPageProps) => {
  const isServicePage = Boolean(serviceType && serviceDescription);
  const faqs = serviceType ? createPlaceholderFaqs(serviceType) : [];

  return (
    <>
      <SEOHead title={seoTitle ?? `${title} | Redwood Construction Pros`} description={description} canonical={canonical} />
      {isServicePage && <SchemaMarkup schemas={[createServiceSchema(serviceType!, serviceDescription!)]} />}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">Redwood Construction Pros</p>
          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
        </div>
      </section>
      {isServicePage && <FAQSection faqs={faqs} heading={`${serviceType} FAQ`} />}
    </>
  );
};

export default PlaceholderPage;