import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface InternalLink {
  label: string;
  to: string;
  description: string;
}

interface InternalLinksProps {
  links: InternalLink[];
  heading?: string;
}

const InternalLinks = ({ links, heading }: InternalLinksProps) => (
  <section className="section-pad bg-background">
    <div className="max-w-[1200px] mx-auto">
      {heading && (
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-8">
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="group p-6 rounded-xl bg-secondary border border-border hover:border-accent/30 hover:shadow-md transition-all no-underline"
          >
            <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2">
              {link.label}
            </h3>
            <p className="text-muted-foreground text-sm mb-3">{link.description}</p>
            <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold">
              Learn More <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default InternalLinks;
