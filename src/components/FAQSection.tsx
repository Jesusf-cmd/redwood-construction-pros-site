import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SchemaMarkup } from "@/components/StructuredData";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
  schemaEnabled?: boolean;
}

const FAQSection = ({ faqs, heading = "Frequently Asked Questions", schemaEnabled = true }: FAQSectionProps) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {schemaEnabled && <SchemaMarkup schemas={[faqSchema]} />}
      <section className="section-pad bg-secondary">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              {heading}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border bg-background px-5 first:rounded-t-lg last:rounded-b-lg">
                <AccordionTrigger className="text-left hover:text-accent hover:no-underline py-5">
                  <h3 className="text-base font-bold text-inherit">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
export { FAQSection };
