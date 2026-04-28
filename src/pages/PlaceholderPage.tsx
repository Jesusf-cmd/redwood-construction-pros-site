import SEOHead from "@/components/SEOHead";

interface PlaceholderPageProps {
  title: string;
  description: string;
  canonical: string;
}

const PlaceholderPage = ({ title, description, canonical }: PlaceholderPageProps) => (
  <>
    <SEOHead title={`${title} | Redwood Construction Pros`} description={description} canonical={canonical} />
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">Redwood Construction Pros</p>
        <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
      </div>
    </section>
  </>
);

export default PlaceholderPage;