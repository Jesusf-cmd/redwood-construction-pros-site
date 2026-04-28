import { Link } from "react-router-dom";
import { Building2, CircleDollarSign, CloudLightning, Hammer, Home, ShieldCheck, Wrench } from "lucide-react";
import { RoofingServicePage, type RoofingPageConfig } from "../roofing/RoofingServicePage";

const serviceLinks = [
  { title: "Roof Repair", description: "Leak repair, shingle replacement, flashing fixes, and storm-related repairs.", path: "/roofing/roof-repair", icon: Wrench },
  { title: "Roof Replacement", description: "Full tear-off and new roof installation with materials built for Oklahoma weather.", path: "/roofing/roof-replacement", icon: Home },
  { title: "Storm Damage", description: "Emergency response, tarping, documentation, and restoration after severe weather.", path: "/roofing/storm-damage", icon: CloudLightning },
  { title: "Hail Damage", description: "Hail inspections, impact documentation, and repair or replacement guidance.", path: "/roofing/hail-damage", icon: ShieldCheck },
  { title: "Insurance Claims", description: "Roof claim documentation, adjuster meetings, and supplement support.", path: "/roofing/insurance-claims", icon: CircleDollarSign },
  { title: "Residential Framing", description: "House framing, additions, garages, and structural remodel framing.", path: "/framing/residential", icon: Hammer },
  { title: "Commercial Framing", description: "Office, retail, tenant improvement, and multi-family framing scopes.", path: "/framing/commercial", icon: Building2 },
  { title: "Metal Framing", description: "Steel stud and light-gauge metal framing for durable, code-ready assemblies.", path: "/framing/metal-framing", icon: Wrench },
];

const process = [
  { number: 1, title: "Local Inspection", description: "We inspect the property, roof, structure, or plans and identify city-specific code or weather concerns." },
  { number: 2, title: "Clear Estimate", description: "You receive a written scope with materials, schedule, repair options, and construction details explained." },
  { number: 3, title: "Permit-Ready Work", description: "Our crews complete roofing or framing work with local inspection requirements and Oklahoma conditions in mind." },
  { number: 4, title: "Final Walkthrough", description: "We clean the site, verify the finished scope, document work, and review everything with you." },
];

export type AreaConfig = {
  city: string;
  title: string;
  description: string;
  canonical: string;
  intro: string;
  roofing: string;
  construction: string;
  why: string;
  faqs: { question: string; answer: string }[];
};

const linkedText = (text: string) => (
  <span>
    {text}
  </span>
);

const toConfig = (area: AreaConfig): RoofingPageConfig => ({
  title: area.title,
  description: area.description,
  canonical: area.canonical,
  h1: `Roofing & Construction Services in ${area.city}, OK`,
  subtitle: `Local roofing, framing, storm repair, and construction services for homeowners and property owners in ${area.city}.`,
  imageAlt: `Roofing and construction services in ${area.city} Oklahoma by Redwood Construction Pros`,
  parentLabel: "Service Areas",
  parentPath: "/service-areas",
  currentLabel: area.city,
  relatedHeading: `Core Services for ${area.city} Property Owners`,
  processAfterSections: 4,
  sections: [
    { id: "local-partner", heading: `Your Local Roofing & Construction Partner in ${area.city}`, paragraphs: [area.intro] },
    { id: "roofing", heading: `Roofing Services in ${area.city}`, paragraphs: [{ text: area.roofing, links: [
      { label: "roof repair", path: "/roofing/roof-repair" },
      { label: "roof replacement", path: "/roofing/roof-replacement" },
      { label: "metal roofing", path: "/roofing/metal-roofing" },
      { label: "storm damage repair", path: "/roofing/storm-damage" },
      { label: "hail damage inspections", path: "/roofing/hail-damage" },
      { label: "insurance claim support", path: "/roofing/insurance-claims" },
    ]}] },
    { id: "framing", heading: `Framing & Construction in ${area.city}`, paragraphs: [{ text: area.construction, links: [
      { label: "residential framing", path: "/framing/residential" },
      { label: "commercial framing", path: "/framing/commercial" },
      { label: "metal framing", path: "/framing/metal-framing" },
      { label: "custom home framing", path: "/framing/custom-home" },
    ]}] },
    { id: "why", heading: `Why ${area.city} Homeowners Choose Redwood`, paragraphs: [area.why] },
  ],
  processHeading: `Our ${area.city} Service Process`,
  process,
  cta: { heading: `Need Roofing or Construction Help in ${area.city}?`, subtext: `Call Redwood for a free ${area.city} roofing, framing, or construction estimate.` },
  faqs: area.faqs,
  related: serviceLinks,
});

export const AreaPage = ({ area }: { area: AreaConfig }) => <RoofingServicePage config={toConfig(area)} />;

export { linkedText };
