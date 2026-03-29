import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: object;
}

const SEOHead = ({ title, description, canonical, jsonLd }: SEOHeadProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`https://redwoodconstructionpros.com${canonical}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`https://redwoodconstructionpros.com${canonical}`} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    {jsonLd && (
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    )}
  </Helmet>
);

export default SEOHead;
