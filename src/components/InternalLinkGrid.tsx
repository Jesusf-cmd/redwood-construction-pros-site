import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface InternalLinkItem {
  title: string;
  description: string;
  path: string;
  icon?: LucideIcon;
}

interface InternalLinkGridProps {
  links: InternalLinkItem[];
  heading?: string;
}

const InternalLinkGrid = ({ links, heading = "Explore Our Other Services" }: InternalLinkGridProps) => (
  <section className="section-pad bg-secondary">
    <div className="mx-auto max-w-[1200px]">
      <h2 className="mb-8 text-3xl font-extrabold text-primary md:text-4xl">{heading}</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.path}
              to={link.path}
              className="group flex gap-4 rounded-lg border border-border bg-background p-6 no-underline transition-all hover:border-accent/40 hover:shadow-md"
            >
              {Icon && (
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
              )}
              <span className="min-w-0">
                <span className="mb-2 block text-lg font-bold text-primary transition-colors group-hover:text-accent">
                  {link.title}
                </span>
                <span className="mb-4 block text-sm leading-6 text-muted-foreground">{link.description}</span>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-accent">
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default InternalLinkGrid;
