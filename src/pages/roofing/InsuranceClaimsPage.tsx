import { RoofingServicePage, type RoofingPageConfig, Home, ShieldCheck, Wrench, CloudLightning, CircleDollarSign } from "./RoofingServicePage";

const config: RoofingPageConfig = {
  title: "Roofing Insurance Claims Help OKC | Redwood Construction Pros",
  description: "Need help with a roofing insurance claim in OKC? Redwood handles documentation, adjuster meetings, and claim filing. Free consultation.",
  canonical: "/roofing/insurance-claims",
  h1: "Roofing Insurance Claims Assistance in Oklahoma City",
  subtitle: "Claim documentation, adjuster meetings, supplement support, and honest guidance after hail, wind, and storm damage.",
  imageAlt: "Roofing insurance claims help OKC adjuster documentation on Oklahoma City roof",
  sections: [
    { id: "process", heading: "How the Insurance Claim Process Works in Oklahoma", paragraphs: [
      "A roofing insurance claim usually starts with storm damage, homeowner documentation, and a call to the insurance carrier. The carrier assigns a claim number and sends an adjuster to inspect the property. The adjuster writes an estimate based on covered damage, policy terms, deductible, depreciation, and local repair pricing. If the claim is approved, the homeowner receives paperwork showing scope and payment details. Redwood helps Oklahoma City homeowners understand that paperwork before work begins. We compare the insurance scope against actual roof conditions, code requirements, material needs, and correct installation details. If approved scope is accurate, we schedule repairs or replacement. If important items are missing, we provide supplemental documentation with photos, measurements, and explanations. The process should be organized, documented, and tied to real storm damage — not rushed by someone knocking on your door after hail."
    ]},
    { id: "after-damage", heading: "What to Do Immediately After Storm Damage", paragraphs: [
      { text: "After hail, wind, or tornado-related damage, stay off the roof and start with safety. Photograph visible damage from the ground, including missing shingles, dented gutters, fallen limbs, ceiling stains, and water intrusion. If active leaking is occurring, move valuables, place containers under drips, and call for emergency tarping. Then contact your insurer to understand your reporting requirements and deductible. Call Redwood for a professional inspection before permanent repairs are made. We document roof conditions, identify storm-related damage, and explain whether filing a claim makes financial sense. Do not sign contingency agreements with out-of-town storm chasers before you understand the scope, deductible, and contractor reputation. Oklahoma City homeowners should also keep receipts for emergency mitigation and avoid throwing away damaged materials before the adjuster has a chance to inspect. For immediate stabilization, our storm damage team can help.", links: [{ label: "storm damage", path: "/roofing/storm-damage" }] }
    ]},
    { id: "how-redwood-helps", heading: "How Redwood Helps With Roofing Claims", paragraphs: [
      "Redwood helps by turning roof damage into clear documentation. We inspect each slope, photograph hail hits, wind damage, flashing issues, soft metal dents, vents, ridge caps, gutters, attic moisture, and interior stains. We provide measurements and explain whether the damage appears storm-related or age-related. When requested, we meet with your adjuster so roof conditions can be reviewed on-site. If the initial estimate is missing required items, damaged components, or code-related scope, we can prepare supplement documentation. Supplements are common when adjusters cannot see decking damage until tear-off or when the original scope misses drip edge, flashing, ventilation, steep charges, or labor details. Redwood does not promise claim approval because coverage is determined by your insurer and policy. We do provide the professional documentation homeowners need to avoid underpaid or incomplete repairs."
    ]},
    { id: "mistakes", heading: "Common Insurance Claim Mistakes Homeowners Make", paragraphs: [
      "The biggest mistake is waiting too long after a storm. Damage gets harder to document, deadlines may pass, and additional weather can complicate the claim. Another mistake is assuming no leak means no damage. Hail and wind damage can shorten roof life long before water reaches the ceiling. Homeowners also make problems by hiring uninsured contractors, accepting vague scopes, skipping adjuster meetings, or starting permanent repairs before documentation is complete. Some file claims for normal wear when repair costs are below the deductible, which can create unnecessary claim history. Others accept the first insurance estimate without comparing it to actual repair requirements. Redwood helps you avoid both extremes. We tell you when a claim is warranted, when direct roof repair is smarter, and when a full replacement scope needs better documentation. The goal is not to fight the carrier; it is to make sure the damage is accurately represented."
    ]},
    { id: "deductible", heading: "Understanding Your Oklahoma Homeowner's Deductible", paragraphs: [
      { text: "Your deductible is the portion of the claim you are responsible for paying. In Oklahoma, many policies have separate wind and hail deductibles, and some are percentage-based rather than fixed dollar amounts. A 1% deductible on a $300,000 dwelling limit is $3,000, which changes the repair-versus-claim decision. Homeowners should be cautious of anyone offering to waive or absorb the deductible. Deductible rules exist in insurance contracts, and improper handling can create problems for the homeowner. Redwood provides transparent estimates showing the approved scope, upgrade options, and homeowner responsibility. If damage is minor and the repair cost is close to the deductible, we may recommend paying directly instead of filing. If roof replacement is approved, we explain payment timing, recoverable depreciation, material upgrades, and what must be completed before final insurance payment is released.", links: [{ label: "roof repair", path: "/roofing/roof-repair" }, { label: "roof replacement", path: "/roofing/roof-replacement" }] }
    ]},
    { id: "file-or-not", heading: "When to File vs. When Not to File a Claim", paragraphs: [
      "File a claim when storm damage is functional, documented, and likely to exceed your deductible by enough to justify the process. Widespread hail damage across multiple slopes, wind-torn shingles, storm-created leaks, punctures from debris, and damaged roof components often warrant a claim. Do not file when damage is normal aging, cosmetic only, below your deductible, or unrelated to a covered event. A professional inspection helps make that decision before claim history is created. Redwood gives free consultations because homeowners need an honest answer, not a sales pitch. In neighborhoods from Midtown and Capitol Hill to Edmond and Midwest City, we see both situations: roofs that absolutely need a claim and roofs that only need targeted maintenance. We will explain the difference, show photos, and recommend the path that protects your home and wallet."
    ]},
  ],
  processHeading: "Our Roofing Claim Support Process",
  process: [
    { number: 1, title: "Free Inspection", description: "We inspect roof slopes, attic, soft metals, vents, gutters, and interior water signs." },
    { number: 2, title: "Damage Documentation", description: "Photos, measurements, material notes, and repair observations are organized for review." },
    { number: 3, title: "Claim Guidance", description: "We explain whether filing makes sense based on damage, deductible, and likely scope." },
    { number: 4, title: "Adjuster Meeting", description: "When requested, we meet your adjuster and review the documented damage on-site." },
    { number: 5, title: "Repair Completion", description: "Approved repairs or replacement are completed, documented, cleaned up, and reviewed." },
  ],
  cta: { heading: "Need Help With a Roofing Insurance Claim?", subtext: "Call Redwood for a free consultation before you file or accept a low roof claim estimate." },
  faqs: [
    { question: "Should I call my insurance company or a roofer first?", answer: "If there is active leaking, call for emergency help first. Otherwise, a professional roof inspection before filing helps you understand whether damage warrants a claim." },
    { question: "Can Redwood meet with my insurance adjuster?", answer: "Yes. We can meet the adjuster, provide damage documentation, and explain roof conditions during the inspection." },
    { question: "What if my roof claim is denied?", answer: "We can review the denial, inspect the roof, and provide additional documentation if legitimate storm damage was missed. Coverage decisions remain with the insurer." },
    { question: "How long does a roofing insurance claim take?", answer: "Many claims take a few weeks from filing to approval, but timelines vary by carrier, storm volume, adjuster scheduling, supplements, and repair complexity." },
    { question: "Do I have to pay my deductible?", answer: "Yes. Your deductible is your responsibility under the policy. Be cautious of contractors claiming they can waive it." },
    { question: "Does Redwood charge for insurance claim help?", answer: "Initial roof inspections and consultations are free. If you hire Redwood for approved work, claim support is part of our project process." },
  ],
  related: [
    { title: "Storm Damage", description: "Emergency inspection, tarping, and storm repair after Oklahoma severe weather.", path: "/roofing/storm-damage", icon: CloudLightning },
    { title: "Hail Damage", description: "Hail inspections, photo documentation, and claim guidance for OKC roofs.", path: "/roofing/hail-damage", icon: ShieldCheck },
    { title: "Roof Repair", description: "Direct repair options when damage is isolated or below the deductible.", path: "/roofing/roof-repair", icon: Wrench },
    { title: "Roof Replacement", description: "Full replacement when approved storm damage affects the roofing system.", path: "/roofing/roof-replacement", icon: Home },
    { title: "Metal Roofing", description: "Upgrade options that may reduce future hail and wind risk.", path: "/roofing/metal-roofing", icon: CircleDollarSign },
  ],
};
export default function InsuranceClaimsPage() { return <RoofingServicePage config={config} />; }
