import { Link } from "react-router-dom";
import { ArrowRight, CircleDollarSign, CloudLightning, Home, ShieldCheck, Warehouse, Wrench } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ServicePageHero from "@/components/ServicePageHero";
import TrustSignals from "@/components/TrustSignals";
import ContentSection from "@/components/ContentSection";
import ProcessSteps from "@/components/ProcessSteps";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import heroImg from "@/assets/hero-construction.jpg";

const services = [
  { title: "Roof Repair", path: "/roofing/roof-repair", description: "Fix leaks, replace shingles, and restore your roof's integrity.", icon: Wrench },
  { title: "Roof Replacement", path: "/roofing/roof-replacement", description: "Full tear-off and installation with premium materials.", icon: Home },
  { title: "Metal Roofing", path: "/roofing/metal-roofing", description: "Durable, energy-efficient metal roofing built for Oklahoma.", icon: Warehouse },
  { title: "Storm Damage", path: "/roofing/storm-damage", description: "Emergency storm damage repair and restoration.", icon: CloudLightning },
  { title: "Hail Damage", path: "/roofing/hail-damage", description: "Expert hail damage assessment and insurance-backed repair.", icon: ShieldCheck },
  { title: "Insurance Claims", path: "/roofing/insurance-claims", description: "We handle your claim from inspection to completion.", icon: CircleDollarSign },
];

const process = [
  { number: 1, title: "Inspect", description: "We inspect roof slopes, attic conditions, flashing, vents, gutters, and storm-related damage." },
  { number: 2, title: "Document", description: "You receive clear photos, repair notes, and a practical explanation of what needs attention." },
  { number: 3, title: "Estimate", description: "We provide a transparent written estimate with repair, replacement, or material upgrade options." },
  { number: 4, title: "Build", description: "Our licensed crew completes the roofing work, cleans the property, and reviews the finished scope." },
];

const faqs = [
  { question: "What roofing services does Redwood offer in Oklahoma City?", answer: "We provide roof repair, roof replacement, metal roofing, storm damage repair, hail damage inspections, and roofing insurance claim support." },
  { question: "Do you work on residential and commercial roofs?", answer: "Yes. Redwood handles residential homes, shops, small commercial buildings, and roofing scopes tied to broader construction projects." },
  { question: "How fast can you inspect storm damage?", answer: "We offer fast inspections after Oklahoma storms and emergency tarping when active leaking or open roof damage needs immediate protection." },
  { question: "Do you provide free roofing estimates?", answer: "Yes. Inspections and estimates are free, and we explain repair versus replacement options before any work begins." },
];

const RoofingHubPage = () => (
  <>
    <SEOHead
      title="Roofing Services Oklahoma City | Redwood Construction Pros"
      description="Complete roofing services in Oklahoma City — repair, replacement, metal, storm & hail damage, insurance claims. Free estimates from Redwood."
      canonical="/roofing"
    />
    <ServicePageHero
      title="Roofing Services in Oklahoma City, OK"
      subtitle="Roof repair, replacement, metal roofing, storm restoration, hail inspections, and insurance claim support from one local contractor."
      backgroundImage={heroImg}
      imageAlt="Roofing services Oklahoma City crew working on residential roof"
      breadcrumbs={[{ label: "Home", path: "/" }, { label: "Roofing", path: "/roofing" }]}
    />
    <TrustSignals />
    <ContentSection id="complete-roofing" heading="Complete Roofing Solutions for Oklahoma City Homes & Businesses">
      <p>
        Redwood Construction Pros provides roofing services Oklahoma City homeowners, property managers, and small business owners can rely on when the roof has to stand up to hail, wind, heat, and fast-moving spring storms. As a roofing contractor OKC residents call for both repairs and full replacements, we handle <Link to="/roofing/roof-repair" className="font-bold text-accent no-underline hover:underline">roof repair</Link>, <Link to="/roofing/roof-replacement" className="font-bold text-accent no-underline hover:underline">roof replacement</Link>, <Link to="/roofing/metal-roofing" className="font-bold text-accent no-underline hover:underline">metal roofing</Link>, <Link to="/roofing/storm-damage" className="font-bold text-accent no-underline hover:underline">storm damage repair</Link>, <Link to="/roofing/hail-damage" className="font-bold text-accent no-underline hover:underline">hail damage inspections</Link>, and <Link to="/roofing/insurance-claims" className="font-bold text-accent no-underline hover:underline">insurance claim support</Link>. We work on residential roofs, shops, additions, detached garages, and commercial roof scopes tied to construction projects. Oklahoma roofing requires more than basic shingle installation. Hail bruises shingles, wind lifts edges, heat dries sealants, and driven rain exposes weak flashing. Redwood inspects the whole roof system — decking, ventilation, underlayment, flashing, penetrations, gutters, and attic signs — so recommendations are based on actual conditions, not a sales script.
      </p>
    </ContentSection>
    <InternalLinkGrid links={services} heading="Explore Roofing Services" />
    <ContentSection id="specialized-care" heading="Why Oklahoma Roofs Need Specialized Care">
      <p>
        Oklahoma City roofs live in one of the toughest weather markets in the country. Hail season typically peaks from April through June, but wind and storm damage can happen almost any month. Summer roof surface temperatures can climb high enough to accelerate asphalt aging, crack sealant, and expose weak ventilation. Tornado-season winds test shingle seals, ridge lines, edge metal, and fastening patterns. Ice storms create weight and water problems along eaves, especially on older homes with poor attic insulation. That is why Oklahoma roofs often need inspection and repair sooner than roofs in milder climates. Redwood looks for storm damage, heat aging, flashing failure, deck movement, and ventilation problems together. A roof that survives in Oklahoma is a system, not just shingles nailed to plywood.
      </p>
    </ContentSection>
    <ProcessSteps heading="Our Roofing Process" steps={process} />
    <CTABanner heading="Need Roofing Help in Oklahoma City?" subtext="Call Redwood for a free roof inspection, repair estimate, or replacement consultation." phoneNumber="405-760-9706" formLink="/contact" />
    <FAQSection faqs={faqs} heading="Roofing Services FAQ" />
  </>
);

export default RoofingHubPage;
