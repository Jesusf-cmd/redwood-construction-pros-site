import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const posts = [
  { title: "How Much Does Roof Repair Cost in Oklahoma City? (2026 Guide)", slug: "roof-repair-cost-oklahoma-city-2026", date: "April 28, 2026", category: "Roofing", excerpt: "A practical cost guide for Oklahoma City homeowners comparing leak repair, shingle replacement, flashing repair, storm damage repairs, and full roof replacement." },
  { title: "Wood vs. Metal Framing in Oklahoma: Complete Comparison", slug: "wood-vs-metal-framing-oklahoma", date: "April 28, 2026", category: "Framing", excerpt: "Compare wood framing and metal framing for Oklahoma homes and commercial projects, including cost, fire resistance, insulation, pests, and code considerations." },
  { title: "Oklahoma Hail Season 2026: Protect Your Roof Before the Storms Hit", slug: "oklahoma-hail-season-2026-roof-protection", date: "April 28, 2026", category: "Storm Prep", excerpt: "What Oklahoma City homeowners should inspect before hail season, including shingles, gutters, flashing, attic leaks, insurance documentation, and impact-rated upgrades." },
  { title: "What to Expect During the Framing Phase of Your Custom Home Build", slug: "custom-home-framing-phase-okc", date: "April 28, 2026", category: "Construction", excerpt: "A homeowner-friendly walkthrough of custom home framing, from blueprint review and lumber delivery to walls, roof systems, inspections, and trade coordination." },
];

const BlogPage = () => (
  <>
    <SEOHead
      title="Roofing & Construction Blog | Redwood Construction Pros"
      description="Expert roofing and construction tips for Oklahoma City homeowners. Storm prep, cost guides, material comparisons, and more from Redwood."
      canonical="/blog"
    />
    <section className="section-pad bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-6 text-4xl font-black md:text-5xl lg:text-[58px]">Roofing & Construction Blog</h1>
        <p className="max-w-[760px] text-lg leading-8 text-primary-foreground/80">Expert insights, tips, and guides for Oklahoma City homeowners. Whether you're dealing with storm damage, planning a new build, or maintaining your home's roof — our blog has you covered.</p>
      </div>
    </section>
    <section className="section-pad bg-background">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-lg border border-border bg-secondary p-6">
            <span className="mb-4 inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">{post.category}</span>
            <p className="mb-3 text-sm font-semibold text-muted-foreground">{post.date}</p>
            <h2 className="mb-3 text-2xl font-extrabold text-primary">{post.title}</h2>
            <p className="mb-5 text-sm leading-6 text-muted-foreground">{post.excerpt.slice(0, 150)}</p>
            <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-bold text-accent no-underline hover:underline">Read {post.category} guide <ArrowRight className="h-4 w-4" /></Link>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default BlogPage;
