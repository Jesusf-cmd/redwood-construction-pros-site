import { RoofingServicePage, type RoofingPageConfig, Home, Warehouse, Wrench, CircleDollarSign } from "../roofing/RoofingServicePage";

const config: RoofingPageConfig = {
  title: "Residential Framing Oklahoma City | Redwood Construction Pros",
  description: "Expert residential house framing in Oklahoma City. New builds, additions, remodels. Oklahoma code compliant. Free estimate from Redwood.",
  canonical: "/framing/residential",
  h1: "Residential House Framing in Oklahoma City, OK",
  subtitle: "New home framing, additions, garages, second-story builds, and structural remodel framing built to Oklahoma code.",
  imageAlt: "Residential framing Oklahoma City crew building house wall framing",
  parentLabel: "Framing",
  parentPath: "/framing",
  relatedHeading: "Related Framing & Construction Services",
  sections: [
    { id: "new-home-framing", heading: "New Home Framing Built for Oklahoma", paragraphs: [
      "Residential framing Oklahoma City homeowners can trust starts with layout, structural understanding, and weather-aware construction. Redwood Construction Pros frames new homes, room additions, garage builds, second-story additions, basement framing, and major remodels across the OKC metro. Every home starts with the frame. If walls are out of plumb, headers are undersized, openings are wrong, or roof loads are not carried correctly, every trade after framing fights the mistake. Our house framing OKC crews build plumb, square, and aligned with engineered plans so the home is ready for mechanical rough-ins, sheathing, roofing, drywall, and final finishes. Oklahoma's wind loads matter. We pay attention to bracing, anchor points, connector hardware, load paths, and inspection details that help a structure perform during high winds and severe weather. From Edmond custom homes to Moore additions and Oklahoma City garage conversions, Redwood frames with the next 30 years in mind, not just the next inspection."
    ]},
    { id: "includes", heading: "What Residential Framing Includes", paragraphs: [
      "Residential framing starts at the floor system. Sill plates anchor the frame to the foundation, floor joists carry live and dead loads, and subfloor gives the structure a flat working surface. Wall framing includes studs, top and bottom plates, headers over openings, corner bracing, and load-bearing walls that transfer weight down to the foundation. Roof framing may use rafters, trusses, ridge boards, collar ties, or engineered components depending on the plan. Window and door rough openings must be framed correctly so units fit, flash, and operate without binding. Structural sheathing and bracing tie the building together and help resist racking during high wind events.",
      { text: "Oklahoma-specific framing details matter. Hurricane ties, Simpson Strong-Tie connectors, anchor bolts, hold-downs, and continuous load path connections are not decorative hardware. They help connect roof, wall, floor, and foundation components so wind forces move through the structure instead of tearing it apart. Redwood reviews plans, code notes, and engineered details before building. We also coordinate framing with roofing services because roof structure, decking, ventilation, and load transfer have to work together.", links: [{ label: "roofing services", path: "/roofing" }] }
    ]},
    { id: "costs", heading: "Framing Costs in Oklahoma City", paragraphs: [
      "Residential framing labor in Oklahoma City often ranges from $7–$16 per square foot for a new home, depending on plan complexity, roof design, story count, ceiling height, access, and schedule requirements. A 2,000 square foot home might run $15,000–$35,000 for framing depending on whether it is a simple single-story rectangle or a two-story plan with cathedral ceilings, large spans, dormers, multiple rooflines, and engineered beams. Material costs fluctuate with lumber markets, and engineered wood products such as LVLs, I-joists, and trusses can shift pricing quickly. Additions often cost more per square foot than new construction because the work must tie into existing framing, protect occupied areas, and solve surprises hidden inside walls or rooflines. Redwood provides detailed estimates with labor and material broken out so homeowners and builders understand what drives cost. We would rather explain the budget early than surprise you after the lumber package is ordered."
    ]},
    { id: "mistakes", heading: "Common Residential Framing Mistakes We See in OKC", paragraphs: [
      { text: "When Redwood is called to fix another contractor's framing, the same problems show up repeatedly. Undersized headers cause sagging above windows, doors, and large openings. Missing hurricane ties and connector hardware weaken the continuous load path that Oklahoma wind conditions demand. Improper joist spacing creates bouncy floors and inspection failures. Incorrect load-bearing wall identification can shift roof or second-story loads onto framing that was never designed to carry them. We also see crooked walls, poor corner bracing, unblocked panel edges, stair openings framed wrong, and roof framing that does not match the plan. These mistakes cost more to fix after plumbing, electrical, HVAC, and drywall begin. Redwood frames to pass inspection the first time and communicates plan conflicts before they become jobsite problems. If a project includes complex spans or custom layouts, we coordinate with engineered drawings instead of guessing. That is the difference between cheap framing and construction-grade framing.", links: [{ label: "custom layouts", path: "/framing/custom-home" }] }
    ]},
  ],
  processHeading: "Our Residential Framing Process",
  process: [
    { number: 1, title: "Blueprint Review", description: "We review architectural plans and engineered drawings to understand every structural requirement." },
    { number: 2, title: "Material Procurement", description: "We source quality lumber, hardware, and engineered wood products. We don't use budget materials." },
    { number: 3, title: "Foundation-Up Framing", description: "Floor system, walls, and roof structure are built to Oklahoma code with proper bracing and connections." },
    { number: 4, title: "Inspection Ready", description: "We frame to pass inspection the first time and coordinate with your city inspector." },
  ],
  cta: { heading: "Need Residential Framing in Oklahoma City?", subtext: "Call Redwood for a free estimate on new home framing, additions, garages, or remodel framing." },
  faqs: [
    { question: "How long does residential framing take?", answer: "A straightforward new home may frame in 1–3 weeks, while additions or complex custom layouts can take longer depending on size, weather, and inspections." },
    { question: "Do I need a permit for framing work?", answer: "Most structural framing, additions, and new construction require permits. Redwood can coordinate with your builder, designer, or local city process." },
    { question: "What lumber do you use for house framing?", answer: "We use quality dimensional lumber, engineered wood products, LVLs, trusses, and approved connector hardware based on the plans and structural needs." },
    { question: "Is your framing Oklahoma code compliant?", answer: "Yes. We frame with local code, wind bracing, load path, and inspection requirements in mind." },
    { question: "Can you work with my general contractor?", answer: "Yes. We can work as the framing contractor under an owner, builder, architect, or general contractor." },
    { question: "What affects residential framing cost?", answer: "Square footage, story count, roof complexity, ceiling height, engineered beams, material pricing, access, and remodel tie-ins all affect cost." },
  ],
  related: [
    { title: "Commercial Framing", description: "Framing for offices, retail spaces, tenant build-outs, and commercial shells.", path: "/framing/commercial", icon: Warehouse },
    { title: "Metal Framing", description: "Steel stud and light-gauge framing for fire-rated and commercial assemblies.", path: "/framing/metal-framing", icon: Wrench },
    { title: "Custom Home Framing", description: "Complex rooflines, engineered beams, and premium custom home framing.", path: "/framing/custom-home", icon: Home },
    { title: "Roofing Services", description: "Roof repair, replacement, metal roofing, storm repair, and claim support.", path: "/roofing", icon: CircleDollarSign },
  ],
};
export default function ResidentialFramingPage() { return <RoofingServicePage config={config} />; }
