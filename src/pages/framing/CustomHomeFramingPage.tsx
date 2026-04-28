import { RoofingServicePage, type RoofingPageConfig, Home, Warehouse, Wrench, CloudLightning } from "../roofing/RoofingServicePage";

const config: RoofingPageConfig = {
  title: "Custom Home Framing OKC | Redwood Construction Pros",
  description: "Custom home framing in Oklahoma City. Complex designs, premium materials, precision craftsmanship. Build your dream home with Redwood.",
  canonical: "/framing/custom-home",
  h1: "Custom Home Framing in Oklahoma City, OK",
  subtitle: "Precision framing for complex rooflines, open floor plans, engineered beams, cathedral ceilings, and architect-designed homes.",
  imageAlt: "Custom home framing OKC crew installing engineered lumber in Oklahoma City",
  parentLabel: "Framing", parentPath: "/framing", relatedHeading: "Related Framing Services",
  sections: [
    { id: "different", heading: "What Makes Custom Home Framing Different", paragraphs: [
      "Custom home framing is not the same as production framing. The plans are more detailed, the spans are larger, the rooflines are more complex, and the finished design usually depends on framing accuracy that cannot be fixed later with trim. Redwood Construction Pros frames custom homes in Oklahoma City with attention to open floor plans, engineered beams, mixed materials, cathedral ceilings, vaulted rooms, custom archways, large window openings, covered outdoor spaces, and multi-slope roof systems. A production home may repeat the same plan dozens of times. A custom home requires plan interpretation, field judgment, communication with the builder or architect, and careful sequencing from the foundation up. If a beam pocket is wrong, a wall is out of square, or roof framing misses an elevation detail, it affects drywall, windows, roofing, cabinets, flooring, and exterior finishes. Redwood treats custom framing as precision structural work, not just lumber assembly."
    ]},
    { id: "plans", heading: "Working From Architect Plans", paragraphs: [
      "Architectural plans show the vision, but framing crews have to translate that vision into structure. Redwood reviews floor plans, elevations, roof plans, sections, engineered notes, beam schedules, window and door schedules, and connection details before framing begins. We identify conflicts early: roof planes that do not resolve cleanly, wall heights that affect stair or window layout, beams that require bearing changes, and openings that need engineered headers. Custom homes often involve owner changes, field adjustments, and coordination with foundation, HVAC, plumbing, electrical, and roofing trades. We communicate those issues before they become expensive rework. The goal is to frame the home so the architect's design, engineer's requirements, and builder's schedule all line up. In neighborhoods from Nichols Hills to Edmond and Deer Creek, high-end homes demand straight lines, clean openings, and framing that supports premium finishes. Redwood builds for that level of finish."
    ]},
    { id: "engineering", heading: "Engineering Requirements for Custom Builds in Oklahoma", paragraphs: [
      "Oklahoma custom homes need framing that accounts for wind loads, roof loads, snow and ice events, expansive soils, and local code requirements. Tornado Alley construction places extra importance on bracing, anchor bolts, hold-downs, hurricane ties, shear walls, roof-to-wall connections, and continuous load paths. Snow load is usually not the dominant design factor in OKC, but ice events and heavy roof assemblies still matter. Some engineered designs also include seismic considerations, especially in connection detailing and lateral resistance. Redwood follows engineered drawings instead of guessing at large spans or open-concept layouts. We pay attention to load-bearing walls, point loads, beam pockets, post locations, and how forces move to the foundation. Custom framing also affects roofing performance because complex valleys, ridges, dormers, and overhangs need correct structure before the roof system can shed water properly."
    ]},
    { id: "materials", heading: "Materials for Custom Homes", paragraphs: [
      { text: "Custom homes often use more than standard dimensional lumber. Engineered lumber such as LVLs, glulam beams, I-joists, laminated columns, floor trusses, and roof trusses can carry long spans and open floor plans that regular lumber cannot. Steel moment frames or steel beams may be required for large glass openings, expansive great rooms, or modern designs with fewer interior walls. Premium sheathing, structural hardware, Simpson Strong-Tie connectors, hold-downs, and specialty fasteners are common in high-performance frames. Redwood sources the correct material package and verifies that engineered components are installed according to plan. We also coordinate with residential framing and metal framing methods when a custom home includes mixed assemblies such as steel stud interiors, wood exterior walls, or structural steel details. The material choice should support the design, not limit it.", links: [{ label: "residential framing", path: "/framing/residential" }, { label: "metal framing", path: "/framing/metal-framing" }] }
    ]},
    { id: "cost", heading: "Cost Ranges for Custom Framing in OKC", paragraphs: [
      "Custom home framing in Oklahoma City costs more than standard production framing because the work is slower, more detailed, and often includes engineered material. Basic residential framing labor may fall in the $7–$16 per square foot range, but custom framing can exceed that when the plan includes tall walls, complex rooflines, cathedral ceilings, large spans, curved or arched openings, steel beams, premium hardware, or difficult site access. A custom 3,000 square foot home may have framing costs that vary widely depending on engineering, lumber package, truss design, and schedule expectations. Redwood provides detailed estimates that separate labor, lumber, engineered beams, hardware, specialty details, and potential allowances. We also explain where cost can be controlled without weakening the structure. Cheap framing on a custom home is expensive later because every finish depends on the frame being correct."
    ]},
  ],
  processHeading: "Our Custom Home Framing Process",
  process: [
    { number: 1, title: "Plan & Engineering Review", description: "We study architectural plans, engineered drawings, beam schedules, roof plans, and connection details." },
    { number: 2, title: "Layout & Material Planning", description: "We coordinate lumber, LVLs, glulams, trusses, steel, hardware, and site delivery sequencing." },
    { number: 3, title: "Precision Framing", description: "Walls, beams, openings, rooflines, and custom details are framed square, plumb, and to plan." },
    { number: 4, title: "Inspection & Trade Coordination", description: "We prepare for inspection and coordinate with roofing, mechanical, electrical, plumbing, and finish trades." },
  ],
  cta: { heading: "Building a Custom Home in OKC?", subtext: "Call Redwood for custom home framing that matches the plans, engineering, and finish quality your project deserves." },
  faqs: [
    { question: "What makes custom home framing more expensive?", answer: "Complex rooflines, tall walls, engineered beams, large openings, cathedral ceilings, premium hardware, and slower detail work increase cost." },
    { question: "Can you work directly with my architect or builder?", answer: "Yes. We can coordinate with architects, engineers, builders, owners, and general contractors throughout the framing process." },
    { question: "Do custom homes require engineered lumber?", answer: "Many do. LVLs, glulams, trusses, I-joists, and steel may be required for open spans, large openings, and complex roof systems." },
    { question: "How long does custom home framing take?", answer: "Timeline depends on square footage and complexity. Many custom homes take several weeks to frame, with larger or more complex homes taking longer." },
    { question: "Do you frame cathedral ceilings and open floor plans?", answer: "Yes. We frame vaulted ceilings, cathedral ceilings, open great rooms, large window walls, and engineered beam layouts." },
    { question: "Can Redwood also handle roofing after framing?", answer: "Yes. Redwood provides roofing services, which helps coordinate roof decking, ventilation, valleys, flashing, and final roof installation." },
  ],
  related: [
    { title: "Residential Framing", description: "New home framing, additions, garages, and remodel structural framing.", path: "/framing/residential", icon: Home },
    { title: "Commercial Framing", description: "Framing for office, retail, restaurant, warehouse, and multi-family projects.", path: "/framing/commercial", icon: Warehouse },
    { title: "Metal Framing", description: "Steel stud framing for modern interiors and mixed-material custom builds.", path: "/framing/metal-framing", icon: Wrench },
    { title: "Roofing Services", description: "Roof replacement, metal roofing, storm damage repair, and roof system coordination.", path: "/roofing", icon: CloudLightning },
  ],
};
export default function CustomHomeFramingPage() { return <RoofingServicePage config={config} />; }
