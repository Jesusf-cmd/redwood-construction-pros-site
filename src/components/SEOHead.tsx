import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  canonicalUrl?: string;
  ogImage?: string;
  jsonLd?: object;
}

const SITE_URL = "https://redwoodconstructionpros.com";
const DEFAULT_TITLE = "Construction Contractor OKC | Redwood Construction Pros";
const DEFAULT_DESCRIPTION = "Redwood Construction Pros offers expert roofing, framing, and custom home construction in Oklahoma City, OK. Free estimates. Call today.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-redwood-construction-pros.jpg`;

const toAbsoluteUrl = (url = "/") => url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;

const SEOHead = ({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION, canonical = "/", canonicalUrl, ogImage = DEFAULT_OG_IMAGE, jsonLd }: SEOHeadProps) => {
  const absoluteCanonical = canonicalUrl ?? toAbsoluteUrl(canonical);
  const absoluteOgImage = toAbsoluteUrl(ogImage);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={absoluteCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:url" content={absoluteCanonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
