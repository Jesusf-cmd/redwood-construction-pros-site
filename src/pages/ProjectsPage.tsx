import { useState } from "react";
import SEOHead from "@/components/SEOHead";

const projects = [
  { title: "Residential Roof Replacement — Nichols Hills", category: "Roofing", city: "Nichols Hills", description: "Full asphalt shingle tear-off, deck inspection, new underlayment, flashing, and architectural shingles for a mature OKC property." },
  { title: "Storm Damage Repair — Moore, OK", category: "Roofing", city: "Moore", description: "Emergency storm inspection, shingle repair, flashing correction, and cleanup after high-wind damage in Moore." },
  { title: "New Home Framing — Edmond", category: "Framing", city: "Edmond", description: "Residential wall and roof framing package for a new construction home in one of Edmond's growing neighborhoods." },
  { title: "Metal Framing Commercial Buildout — OKC", category: "Framing", city: "Oklahoma City", description: "Steel stud framing, commercial partitions, backing, and inspection-ready layout for an Oklahoma City tenant improvement." },
  { title: "Custom Home Build — Norman", category: "Custom Homes", city: "Norman", description: "Custom home structural framing with engineered beams, large openings, and coordinated roofline details in Norman." },
  { title: "Standing Seam Metal Roof — Midwest City", category: "Roofing", city: "Midwest City", description: "Standing seam metal roofing upgrade for a Midwest City home needing long-term durability and heat reflection." },
];
const filters = ["All", "Roofing", "Framing", "Custom Homes", "Metal Buildings"];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <SEOHead
        title="Our Work | Redwood Construction Pros | Oklahoma City"
        description="See Redwood Construction Pros' completed roofing and construction projects across Oklahoma City. Before & after photos."
        canonical="/projects"
      />
      <section className="section-pad bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="mb-6 text-4xl font-black md:text-5xl lg:text-[58px]">Our Projects</h1>
          <p className="max-w-[760px] text-lg leading-8 text-primary-foreground/80">Roofing, framing, custom home, and construction project examples across Oklahoma City and the surrounding metro.</p>
        </div>
      </section>
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex flex-wrap gap-3">
            {filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-lg px-4 py-2 text-sm font-bold transition-colors ${filter === item ? "bg-accent text-accent-foreground" : "bg-secondary text-primary hover:text-accent"}`}>{item}</button>)}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-lg border border-border bg-secondary">
                <div className="flex aspect-[4/3] items-center justify-center bg-muted px-6 text-center text-sm font-bold text-muted-foreground" role="img" aria-label={`${project.category} in ${project.city} by Redwood Construction Pros`}>
                  Project photo placeholder
                </div>
                <div className="p-6">
                  <span className="mb-3 inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">{project.category}</span>
                  <h2 className="mb-2 text-xl font-extrabold text-primary">{project.title}</h2>
                  <p className="mb-3 text-sm font-semibold text-muted-foreground">{project.city}</p>
                  <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
