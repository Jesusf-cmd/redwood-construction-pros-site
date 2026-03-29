import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does a new roof cost in Oklahoma?",
    a: "Most roofs range from $6,000 to $15,000 depending on size, materials, and damage.",
  },
  {
    q: "How long does a custom home take to build?",
    a: "Typically 4–8 months depending on size and complexity.",
  },
  {
    q: "Do you build metal buildings from start to finish?",
    a: "Yes — slab, structure, and full install.",
  },
];

const FAQ = () => (
  <section id="faq" className="section-pad bg-secondary">
    <div className="max-w-[700px] mx-auto">
      <div className="text-center mb-12">
        <p className="text-sm font-bold tracking-widest uppercase text-accent mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
          Frequently Asked Questions
        </h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-accent hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
