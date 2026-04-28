import { Link } from "react-router-dom";
import { Building2, Hammer, HardHat, Home } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ServicePageHero from "@/components/ServicePageHero";
import TrustSignals from "@/components/TrustSignals";
import ContentSection from "@/components/ContentSection";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import heroImg from "@/assets/hero-construction.jpg";

const links = [
  { title: "Residential Framing", path: "/framing/residential", description: "Stick-built framing for new homes, additions, and renovations.", icon: Home },
  { title: "Commercial Framing", path: "/framing/commercial", description: "Structural framing for commercial buildings and tenant improvements.", icon: Building2 },
  { title: "Metal Framing", path: "/framing/metal-framing", description: "Steel stud and light-gauge metal framing for modern builds.", icon: Hammer },
  { title: "Custom Home Framing", path: "/framing/custom-home", description: "Complex, custom-designed framing for dream homes.", icon: HardHat },
];

const faqs = [
  { question: "What framing services does Redwood provide?", answer: "We provide residential framing, commercial framing, metal stud framing, and custom home framing across the Oklahoma City metro." },
  { question: "Do you frame additions and remodels?", answer: "Yes. We frame additions, garages, second-story additions, interior reconfigurations, and structural remodel scopes." },
  { question: "Do you work from architectural plans?", answer: "Yes. We review architectural drawings, engineered plans, connection details, and code requirements before framing begins." },
  { question: "Can Redwood handle roofing and framing together?", answer: "Yes. Our construction background lets us coordinate structural framing and roofing work without splitting the scope between unrelated contractors." },
];

const FramingHubPage = () => (
  <>
    <SEOHead
      title="Framing Contractor Oklahoma City | Redwood Construction Pros"
      description="Professional framing services in Oklahoma City — residential, commercial, metal framing, and custom homes. Licensed, insured. Free estimates."
      canonical="/framing"
    />
    <ServicePageHero
      title="Framing Contractor in Oklahoma City, OK"
      subtitle="Residential, commercial, metal, and custom home framing built square, braced correctly, and ready for Oklahoma inspections."
      backgroundImage={heroImg}
      imageAlt="Framing contractor Oklahoma City building structural wall framing"
      breadcrumbs={[{ label: "Home", path: "/" }, { label: "Framing", path: "/framing" }]}
    />
    <TrustSignals />
    <ContentSection id="professional-framing" heading="Professional Framing Services for Oklahoma City Construction">
      <p>
        Framing is the structural skeleton of every building, and it has to be right before roofing, mechanicals, drywall, and finishes ever start. Redwood Construction Pros is a framing contractor Oklahoma City homeowners, builders, and property owners can call for residential framing, commercial framing, metal framing, and custom home framing across the OKC metro. Our crews understand that house framing OKC projects must account for local code requirements, wind loads, bracing, connection hardware, and the structural demands of Tornado Alley construction. We frame new homes, additions, garages, commercial interiors, tenant improvements, and complex custom builds using practical jobsite sequencing and clean layout. Framing services Oklahoma property owners can trust require more than speed. Walls must be plumb, headers sized correctly, openings framed cleanly, load paths continuous, and hardware installed where engineered plans require it. Redwood brings roofing and construction experience together, which means the frame is built with the roof system, sheathing, weather exposure, and final inspection in mind.
      </p>
    </ContentSection>
    <InternalLinkGrid links={links} heading="Explore Framing Services" />
    <ContentSection id="quality-matters" heading="Why Framing Quality Matters in Oklahoma">
      <p>
        Oklahoma weather makes framing quality critical. High winds, tornado-season pressure, rapid temperature swings, heavy roof loads during ice events, and soil movement can expose weak framing decisions quickly. Poor framing leads to drywall cracking, uneven floors, roof failures, stuck doors, bowed walls, and structural vulnerabilities that are expensive to correct after finishes are installed. Oklahoma building codes require proper bracing, fastening, load path connections, anchor points, and approved hardware in wind-exposed construction. Redwood knows these requirements and frames with inspection in mind from the first layout line. Correct framing also affects energy performance and moisture control because crooked walls and bad openings create gaps that insulation, windows, and flashing cannot fully hide. Whether the project is a new home in Edmond, an addition in Nichols Hills, a tenant build-out in Midtown, or a shop in Moore, the frame determines how well the rest of the build performs. Good framing is not visible forever, but bad framing shows up for decades.
      </p>
    </ContentSection>
    <ContentSection id="wood-vs-metal" heading="Wood vs. Metal Framing — Which Is Right for Your Project?">
      <p>
        Wood framing is usually cheaper upfront and remains the standard for most residential framing because it is flexible, familiar, easy to modify, and has natural R-value compared with steel. It works well for homes, additions, garages, and custom roof structures when protected from moisture and termites. Metal framing is stronger per weight, dimensionally stable, fire resistant, pest proof, and fast for commercial interiors and straight partition layouts. Steel studs do not rot or twist like lumber, but metal conducts heat and often requires thermal breaks or careful insulation detailing in exterior assemblies. For restaurants, offices, retail build-outs, multi-family corridors, and fire-rated walls, <Link to="/framing/metal-framing" className="font-bold text-accent no-underline hover:underline">metal framing</Link> is often the better choice. For traditional homes and additions, <Link to="/framing/residential" className="font-bold text-accent no-underline hover:underline">residential wood framing</Link> may be more cost-effective. The right answer depends on code, budget, fire rating, span, finish requirements, and how the building will be used.
      </p>
    </ContentSection>
    <CTABanner heading="Need a Framing Contractor in Oklahoma City?" subtext="Call Redwood for a free framing estimate, plan review, or construction scope consultation." phoneNumber="405-760-9706" formLink="/contact" />
    <FAQSection faqs={faqs} heading="Framing Services FAQ" />
  </>
);

export default FramingHubPage;
