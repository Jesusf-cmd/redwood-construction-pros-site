import { ReactNode } from "react";

interface ContentSectionProps {
  heading: string;
  children: ReactNode;
  id: string;
}

const ContentSection = ({ heading, children, id }: ContentSectionProps) => (
  <section id={id} className="section-pad bg-background scroll-mt-28">
    <div className="mx-auto max-w-[720px]">
      <h2 className="mb-6 text-3xl font-extrabold text-primary md:text-4xl">
        {heading}
      </h2>
      <div className="space-y-5 text-base leading-8 text-foreground md:text-lg">
        {children}
      </div>
    </div>
  </section>
);

export default ContentSection;
