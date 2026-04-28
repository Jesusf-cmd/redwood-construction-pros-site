import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://redwoodconstructionpros.com";

export type JsonLdSchema = Record<string, unknown>;

const labelMap: Record<string, string> = {
  roofing: "Roofing",
  "roof-repair": "Roof Repair",
  "roof-replacement": "Roof Replacement",
  "metal-roofing": "Metal Roofing",
  "storm-damage": "Storm Damage",
  "hail-damage": "Hail Damage",
  "insurance-claims": "Insurance Claims",
  framing: "Framing",
  residential: "Residential Framing",
  commercial: "Commercial Framing",
  "metal-framing": "Metal Framing",
  "custom-home": "Custom Home Framing",
  areas: "Service Areas",
  "oklahoma-city": "Oklahoma City",
  edmond: "Edmond",
  norman: "Norman",
  moore: "Moore",
  "midwest-city": "Midwest City",
  about: "About",
  contact: "Contact",
  blog: "Blog",
  projects: "Projects",
};

export const localBusinessSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Redwood Construction Pros",
  image: `${SITE_URL}/logo.webp`,
  url: SITE_URL,
  telephone: "+1-405-406-9830",
  email: "jose@redwoodconstructionpros.com",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.4676,
    longitude: -97.5164,
  },
  areaServed: [
    { "@type": "City", name: "Oklahoma City", sameAs: "https://en.wikipedia.org/wiki/Oklahoma_City" },
    { "@type": "City", name: "Edmond" },
    { "@type": "City", name: "Norman" },
    { "@type": "City", name: "Moore" },
    { "@type": "City", name: "Midwest City" },
    { "@type": "City", name: "Yukon" },
    { "@type": "City", name: "Del City" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/redwoodconstructionpros",
    "https://www.instagram.com/redwoodconstructionpros",
  ],
  priceRange: "$$",
};

export const createServiceSchema = (serviceType: string, description: string): JsonLdSchema => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType,
  provider: {
    "@type": "RoofingContractor",
    name: "Redwood Construction Pros",
  },
  areaServed: {
    "@type": "City",
    name: "Oklahoma City",
  },
  description,
});

const getBreadcrumbName = (segment: string) => {
  if (labelMap[segment]) return labelMap[segment];

  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const createBreadcrumbSchema = (pathname: string): JsonLdSchema => {
  const cleanPath = pathname.replace(/\/$/, "");
  const segments = cleanPath.split("/").filter(Boolean);
  const crumbs = [
    { name: "Home", item: SITE_URL },
    ...segments.map((segment, index) => ({
      name: getBreadcrumbName(segment),
      item: `${SITE_URL}/${segments.slice(0, index + 1).join("/")}`,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
};

export const SchemaMarkup = ({ schemas }: { schemas: JsonLdSchema[] }) => (
  <Helmet>
    {schemas.map((schema, index) => (
      <script key={index} type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    ))}
  </Helmet>
);

const StructuredData = () => {
  const { pathname } = useLocation();

  return <SchemaMarkup schemas={[localBusinessSchema, createBreadcrumbSchema(pathname)]} />;
};

export default StructuredData;
