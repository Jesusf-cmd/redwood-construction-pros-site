import { RoofingServicePage, type RoofingPageConfig, Home, Warehouse, Wrench, CircleDollarSign } from "../roofing/RoofingServicePage";

const config: RoofingPageConfig = {
  title: "Commercial Framing Oklahoma City | Redwood Construction Pros",
  description: "Commercial framing services in Oklahoma City. Office buildouts, retail, industrial. Licensed, code-compliant. Free estimates.",
  canonical: "/framing/commercial",
  h1: "Commercial Framing Services in Oklahoma City, OK",
  subtitle: "Office build-outs, retail framing, restaurant construction, warehouse walls, and multi-family framing scopes built to schedule.",
  imageAlt: "Commercial framing Oklahoma City steel stud wall installation",
  parentLabel: "Framing", parentPath: "/framing", relatedHeading: "Related Framing Services",
  sections: [
    { id: "project-types", heading: "Commercial Framing Projects We Build", paragraphs: [
      "Redwood Construction Pros provides commercial framing Oklahoma City contractors, owners, and property managers need for office tenant improvements, retail build-outs, restaurant construction, warehouse separation walls, multi-family residential projects, medical suites, light industrial spaces, and remodels inside existing buildings. Commercial framing is different from residential work because schedules are tighter, code requirements are more specific, and coordination with mechanical, electrical, plumbing, fire suppression, and inspection teams matters every day. A tenant improvement in Midtown may require fast steel stud partitions and soffits. A restaurant build-out in Edmond may need fire-rated walls, chase framing, blocking, and ceiling details that support equipment and finishes. A warehouse project in southwest OKC may need durable framed openings and long straight runs that keep drywall and door hardware clean. Redwood builds from drawings, coordinates field conflicts, and keeps framing aligned with the general contractor's schedule."
    ]},
    { id: "materials", heading: "Commercial Framing Materials", paragraphs: [
      { text: "Commercial framing often uses metal studs, light-gauge steel, tracks, channels, backing, and deflection details because steel is straight, fire resistant, pest proof, and predictable. Metal framing is common for office interiors, retail demising walls, corridors, soffits, and fire-rated assemblies. Wood framing can still make sense in certain mixed-use, small commercial, or multi-family projects where plans allow it and cost is a priority. Light-gauge steel is ideal when the project needs consistent wall lines, high production speed, and compatibility with commercial drywall systems. Redwood helps identify when metal framing is required by code, when it is simply the smarter material, and when wood framing is acceptable. We also coordinate blocking for cabinets, grab bars, equipment, signage, door hardware, and wall-mounted fixtures because missing backing slows every trade after framing.", links: [{ label: "Metal framing", path: "/framing/metal-framing" }] }
    ]},
    { id: "code", heading: "Commercial Building Code Requirements in Oklahoma City", paragraphs: [
      "Commercial framing has to satisfy more than layout dimensions. Oklahoma City projects may require fire-rated assemblies, specific stud gauges, rated shaft walls, smoke partitions, egress corridor requirements, accessibility blocking, deflection at deck connections, and approved fastener schedules. Walls that reach the deck need the right bracing and head-of-wall treatment. Fire-rated walls need correct materials, spacing, penetrations, and inspection-ready documentation. Restaurant, medical, and multi-family projects may have additional requirements tied to occupancy type. Redwood frames with code and inspection in mind from day one. We read plan notes, wall type schedules, structural drawings, and finish details instead of relying on assumptions from residential work. That reduces rework and keeps the project moving when city inspectors, architects, or general contractors review the framing."
    ]},
    { id: "gc-timelines", heading: "Working With General Contractors and Project Timelines", paragraphs: [
      "Commercial projects succeed when framing is sequenced correctly. Redwood works with general contractors to confirm access, material staging, start dates, wall layout, inspection milestones, and turnover deadlines. We understand that framing delays affect electrical rough-in, plumbing, HVAC, fire systems, drywall, ceiling grid, flooring, and final inspections. Our crews communicate field conflicts early: slab irregularities, plan dimensions that do not match existing conditions, structural obstructions, roof deck changes, and MEP conflicts. Commercial versus residential framing also demands more documentation. There are more wall types, rated assemblies, backing requirements, and coordination points. Redwood keeps crews focused on straight lines, correct layout, and inspection-ready details so the GC is not chasing avoidable framing corrections. Whether the project is an office suite in downtown OKC or a retail build-out in Norman, we frame for speed without sacrificing code compliance."
    ]},
  ],
  processHeading: "Our Commercial Framing Process",
  process: [
    { number: 1, title: "Plan Review", description: "We review wall types, ratings, layout, backing, openings, and schedule requirements." },
    { number: 2, title: "Layout & Materials", description: "Studs, track, hardware, backing, and specialty materials are staged for efficient installation." },
    { number: 3, title: "Framing Installation", description: "Walls, soffits, openings, bracing, and backing are installed to plan and code." },
    { number: 4, title: "Inspection Coordination", description: "We address inspector or GC notes quickly so rough-in trades can keep moving." },
  ],
  cta: { heading: "Need Commercial Framing in OKC?", subtext: "Call Redwood for a free estimate on office, retail, restaurant, industrial, or multi-family framing." },
  faqs: [
    { question: "Do you work with general contractors?", answer: "Yes. We regularly work under general contractors and coordinate with project schedules, inspections, and other trades." },
    { question: "What commercial projects do you frame?", answer: "We frame offices, retail spaces, restaurants, warehouses, tenant improvements, multi-family projects, and remodels." },
    { question: "Do commercial interiors require metal studs?", answer: "Many do because of fire ratings, durability, and code requirements, but material choice depends on the plans and occupancy." },
    { question: "Can you frame fire-rated walls?", answer: "Yes. We frame rated assemblies according to approved wall types and coordinate inspection requirements." },
    { question: "How do you price commercial framing?", answer: "Pricing depends on wall length, height, gauge, ratings, backing, openings, schedule, access, and project complexity." },
    { question: "Do you provide materials and labor?", answer: "Yes. We can provide full material and labor pricing or coordinate specific scopes depending on the project." },
  ],
  related: [
    { title: "Metal Framing", description: "Light-gauge steel framing for commercial interiors and rated assemblies.", path: "/framing/metal-framing", icon: Wrench },
    { title: "Residential Framing", description: "House framing, additions, garages, and remodel framing in OKC.", path: "/framing/residential", icon: Home },
    { title: "Custom Home Framing", description: "High-detail framing for complex residential plans and premium builds.", path: "/framing/custom-home", icon: Warehouse },
    { title: "Roofing Services", description: "Roofing support for commercial and residential construction projects.", path: "/roofing", icon: CircleDollarSign },
  ],
};
export default function CommercialFramingPage() { return <RoofingServicePage config={config} />; }
