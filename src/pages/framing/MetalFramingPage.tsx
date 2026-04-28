import { RoofingServicePage, type RoofingPageConfig, Home, Warehouse, Wrench } from "../roofing/RoofingServicePage";

const config: RoofingPageConfig = {
  title: "Metal Framing Oklahoma City | Redwood Construction Pros",
  description: "Metal stud framing in Oklahoma City for commercial and residential projects. Light-gauge steel, code-compliant, durable. Free estimates.",
  canonical: "/framing/metal-framing",
  h1: "Metal Framing in Oklahoma City, OK",
  subtitle: "Light-gauge steel studs, tracks, channels, deflection headers, and fire-rated wall framing for commercial and residential projects.",
  imageAlt: "Metal framing Oklahoma City light gauge steel stud wall installation",
  parentLabel: "Framing", parentPath: "/framing", relatedHeading: "Related Framing Services",
  sections: [
    { id: "what-is-metal", heading: "What Metal Framing Is and When It's Used", paragraphs: [
      "Metal framing uses light-gauge steel studs, tracks, channels, clips, and specialty connectors instead of dimensional lumber. In Oklahoma City, it is most common in commercial interiors, office tenant improvements, retail build-outs, restaurants, medical suites, multi-family corridors, fire-rated assemblies, soffits, and straight partition layouts. It can also be used in residential additions, basements, garage conversions, and modern custom homes where dimensional stability, fire resistance, or termite resistance is a priority. Metal framing is not just a commercial substitute for wood. It is a different system with its own layout, fastening, bracing, and insulation requirements. Redwood Construction Pros installs metal framing for projects that need straight walls, consistent material, fast production, and inspection-ready details. We work from plan wall types, gauge requirements, height limits, fire ratings, door schedules, and MEP conflicts so the frame supports the entire build, not just the drywall."
    ]},
    { id: "materials", heading: "Metal Framing Materials and Components", paragraphs: [
      "A metal framing package usually includes light-gauge steel studs, top and bottom track, runner track, furring channels, cold-rolled channels, backing plates, clips, screws, and sometimes deflection headers. Stud gauge and depth matter. A short non-load-bearing office partition may use lighter studs, while tall walls, rated assemblies, or areas with cabinets and fixtures may require heavier gauge material or additional backing. Track anchors the studs at floor and ceiling. Deflection headers allow movement at the structure above so drywall does not crack when roof or floor systems move. Channels and bracing keep tall walls straight. Backing supports cabinets, handrails, grab bars, signage, TVs, shelving, and equipment. Redwood reviews plans for these details before installation. Missing backing or wrong gauge studs can delay inspections and force walls to be opened later. Correct material selection is what separates durable metal stud framing from a wall that looks straight on day one but fails under use."
    ]},
    { id: "advantages", heading: "Advantages of Metal Framing Over Wood", paragraphs: [
      "Metal framing has major advantages when the project calls for durability, fire resistance, and straight finished walls. Steel does not rot, warp, twist, split, or attract termites. It is non-combustible, which makes it valuable for commercial fire-rated assemblies and multi-family construction. Metal studs are dimensionally stable, so long wall runs stay straighter than wood in many interior applications. They are lightweight, easy to cut, recyclable, and fast to install when crews understand layout and sequencing. In Oklahoma, termite resistance is a real advantage, especially in commercial and mixed-use buildings where long-term maintenance matters. Metal also performs well in humid or moisture-prone interior spaces when paired with the correct sheathing and finish system. The tradeoff is that steel conducts heat and sound more readily than wood, so insulation, resilient channels, thermal breaks, and acoustic detailing must be planned. Redwood explains those tradeoffs instead of pretending one material is best for every job."
    ]},
    { id: "oklahoma", heading: "Metal Framing in Oklahoma Specifically", paragraphs: [
      "Oklahoma projects often use metal framing because of fire code requirements, commercial occupancy rules, termite exposure, and the need for straight, durable interior walls. Office suites, restaurants, retail centers, and medical spaces in Oklahoma City frequently need rated partitions, demising walls, chase walls, and soffits that work with fire suppression, HVAC, electrical, and plumbing layouts. Metal framing also supports wind-load design when engineered correctly, especially in non-load-bearing partitions that still need bracing and deflection details. It is not a shortcut around code. It has to be installed according to approved plans, manufacturer limits, stud gauge requirements, fastening schedules, and inspection standards. Redwood understands Oklahoma City permitting expectations and the practical issues that show up in existing buildings: uneven slabs, out-of-square walls, roof deck conflicts, and MEP systems that force field adjustments. Good metal framing solves those issues cleanly without compromising fire ratings or layout."
    ]},
    { id: "cost", heading: "Metal Framing Cost Compared With Wood", paragraphs: [
      { text: "Metal framing can cost more or less than wood depending on the scope. For commercial interiors, metal is often the expected and efficient choice because studs are consistent, fast to install, and compatible with rated assemblies. For residential exterior walls, wood may be cheaper upfront and easier to insulate thermally. Steel stud pricing depends on gauge, stud depth, wall height, fire rating, backing, openings, deflection track, access, and schedule. Wood pricing depends heavily on lumber markets and engineered components. A simple interior metal partition is usually cost-effective. A tall, rated, heavily backed wall costs more because material and inspection requirements increase. Redwood provides estimates that separate material, labor, backing, specialty details, and schedule constraints. We also compare metal framing against residential framing when homeowners or builders are unsure which approach fits the project.", links: [{ label: "residential framing", path: "/framing/residential" }] }
    ]},
    { id: "poor-framing", heading: "Signs of Poorly Constructed Metal Framing", paragraphs: [
      "Poor metal framing usually shows up before drywall is even finished if you know what to look for. Walls may be wavy, out of plumb, or misaligned with the floor layout. Stud spacing may be inconsistent or too wide for the wall height and finish material. Tracks may be poorly fastened to concrete, creating movement at the base. Door openings may be weak, out of square, or missing the correct jamb reinforcement. Tall walls may lack bracing or cold-rolled channel, causing flex and drywall cracks. Fire-rated walls may have the wrong stud gauge, missing sealant, unapproved penetrations, or head-of-wall details that do not match the rated assembly. Backing may be missing behind cabinets, handrails, grab bars, and equipment. Screws may be overdriven or placed incorrectly. Deflection track may be skipped where the structure above requires movement. These mistakes create failed inspections, cracked finishes, noisy walls, poor door operation, and expensive rework. Redwood checks layout, fastening, bracing, backing, and rated details before covering the framing."
    ]},
  ],
  processHeading: "Our Metal Framing Process",
  process: [
    { number: 1, title: "Plan & Wall Type Review", description: "We review gauges, heights, ratings, backing, openings, and deflection requirements." },
    { number: 2, title: "Layout", description: "Wall lines, doors, corners, soffits, and control points are marked before material is installed." },
    { number: 3, title: "Track & Stud Installation", description: "Track is fastened, studs are set, openings are framed, and bracing is installed as required." },
    { number: 4, title: "Backing & Detail Work", description: "Blocking, channels, clips, head-of-wall, and fire-rated details are completed before inspection." },
  ],
  cta: { heading: "Need Metal Stud Framing in Oklahoma City?", subtext: "Call Redwood for a free estimate on commercial interiors, rated walls, tenant build-outs, or residential metal framing." },
  faqs: [
    { question: "How much does metal framing cost?", answer: "Cost depends on stud gauge, wall height, fire ratings, backing, openings, access, and schedule. We provide a detailed estimate after reviewing plans or inspecting the site." },
    { question: "Is metal framing noisy?", answer: "A finished metal-framed wall is not noisy when installed correctly with proper drywall, insulation, and fastening. Acoustic details can be added where sound control matters." },
    { question: "Can metal framing be insulated?", answer: "Yes. Metal framed walls can use batt, mineral wool, rigid insulation, thermal breaks, and acoustic systems depending on the assembly." },
    { question: "Can I use metal framing in a house?", answer: "Yes. Metal framing can be used in residential additions, basements, interior walls, garages, and custom homes when designed correctly." },
    { question: "How long does metal framing take?", answer: "Small tenant improvements may frame in days. Larger commercial projects depend on wall length, height, ratings, and coordination with other trades." },
    { question: "Is metal framing code compliant in Oklahoma City?", answer: "Yes, when installed to approved plans, stud gauge requirements, fire-rated assemblies, and local inspection standards." },
  ],
  related: [
    { title: "Commercial Framing", description: "Office, retail, restaurant, warehouse, and multi-family framing services.", path: "/framing/commercial", icon: Warehouse },
    { title: "Residential Framing", description: "Wood and structural framing for homes, additions, and remodels.", path: "/framing/residential", icon: Home },
    { title: "Custom Home Framing", description: "Complex framing for premium residential designs and engineered plans.", path: "/framing/custom-home", icon: Wrench },
  ],
};
export default function MetalFramingPage() { return <RoofingServicePage config={config} />; }
