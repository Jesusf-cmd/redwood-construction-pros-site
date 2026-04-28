import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentSection from "@/components/ContentSection";
import CTABanner from "@/components/CTABanner";
import TrustSignals from "@/components/TrustSignals";

const PHONE_DISPLAY = "405-406-9830";

const AboutPage = () => (
  <>
    <SEOHead
      title="About Redwood Construction Pros | Oklahoma City Contractor"
      description="Meet Redwood Construction Pros — Oklahoma City's locally owned roofing and construction company. Licensed, insured, community-driven."
      canonical="/about"
    />

    <section className="section-pad bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-6 max-w-[900px] text-4xl font-black leading-tight md:text-5xl lg:text-[58px]">
          About Redwood Construction Pros
        </h1>
        <p className="max-w-[760px] text-lg font-medium leading-8 text-primary-foreground/80 md:text-xl">
          Locally owned roofing, framing, and construction services built for Oklahoma City weather, codes, and property owners.
        </p>
      </div>
    </section>

    <TrustSignals />

    <ContentSection id="construction-partner" heading="Oklahoma City's Full-Service Construction Partner">
      <p>
        Redwood Construction Pros is a locally owned and operated Oklahoma City construction company serving homeowners, builders, and businesses across the OKC metro. We are not a franchise, and we are not a storm-chasing crew from out of state that disappears after hail season. Redwood was founded by [OWNER NAME] with a mission to provide honest, high-quality construction services to Oklahoma property owners who need practical answers, clean work, and reliable follow-through. Our team handles both <Link to="/roofing" className="font-bold text-accent no-underline hover:underline">roofing services in Oklahoma City</Link> and <Link to="/framing" className="font-bold text-accent no-underline hover:underline">framing services in OKC</Link> because we believe one company should be able to build it right from the ground up. When roof damage exposes bad decking, weak framing, or storm-related structural issues, we understand how the whole building works together. That construction-first mindset helps homeowners avoid finger-pointing between trades and gives builders a dependable partner for roofing, framing, custom homes, and repair scopes.
      </p>
    </ContentSection>

    <ContentSection id="values" heading="What We Stand For">
      <p>
        Redwood is built around honest assessments. If a roof repair will solve the problem, we will not push a full replacement. If framing needs engineered attention, we will say so before finishes cover the issue. We use quality materials because Oklahoma hail, heat, wind, and moisture punish cheap products. Our pricing is transparent, with no hidden fees, no bait-and-switch estimates, and no vague scope language designed to create change orders later. Local accountability matters to us because we live and work in the Oklahoma City metro. Our reputation is tied to every roof, framed wall, jobsite cleanup, and final walkthrough. We also believe clean job sites are part of professional construction. Nails, debris, torn-off shingles, and scrap material should not be left behind for the homeowner to handle. Redwood's standard is simple: tell the truth, build it correctly, and leave the property better than we found it.
      </p>
    </ContentSection>

    <ContentSection id="credentials" heading="Licensed, Insured & Oklahoma Certified">
      <p>
        Redwood Construction Pros is a fully licensed contractor in the state of Oklahoma and carries general liability and workers' compensation insurance for professional roofing, framing, and construction work. License Number: [LICENSE NUMBER]. Our crews work in compliance with Oklahoma City requirements, Oklahoma state building codes, local permit rules, inspection standards, wind-bracing expectations, and manufacturer installation specifications. Credentials matter because roofing and framing errors can affect insurance, resale, structural performance, and long-term property value.
      </p>
    </ContentSection>

    <ContentSection id="service-areas" heading="Serving the OKC Metro">
      <p>
        Redwood serves <Link to="/areas/oklahoma-city" className="font-bold text-accent no-underline hover:underline">Oklahoma City</Link>, <Link to="/areas/edmond" className="font-bold text-accent no-underline hover:underline">Edmond</Link>, <Link to="/areas/norman" className="font-bold text-accent no-underline hover:underline">Norman</Link>, <Link to="/areas/moore" className="font-bold text-accent no-underline hover:underline">Moore</Link>, <Link to="/areas/midwest-city" className="font-bold text-accent no-underline hover:underline">Midwest City</Link>, Yukon, Del City, and surrounding communities. From roof inspections after severe weather to residential framing, commercial framing, and custom home construction, our crews understand the local soil, storm patterns, permit processes, and neighborhood expectations across the Oklahoma City metropolitan area.
      </p>
    </ContentSection>

    <ContentSection id="community" heading="Our Commitment to the Oklahoma City Community">
      <p>
        Redwood Construction Pros is committed to investing in the Oklahoma City community that supports our work. [COMMUNITY INVOLVEMENT PLACEHOLDER — add local organizations, sponsorships, volunteer work, or partnerships here.] Our values include fair hiring, respectful jobsite conduct, honest communication, and support for local organizations whenever possible. We want every homeowner, builder, and business owner we serve to feel like they hired a local contractor with a long-term stake in the community — not a temporary crew chasing the next storm.
      </p>
    </ContentSection>

    <CTABanner
      heading="Talk With a Local OKC Contractor"
      subtext="Call Redwood for a free roofing, framing, or construction estimate from a team that understands Oklahoma City homes."
      phoneNumber={PHONE_DISPLAY}
      formLink="/contact"
    />
  </>
);

export default AboutPage;
