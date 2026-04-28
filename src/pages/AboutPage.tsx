import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageCTA from "@/components/PageCTA";

const PHONE = "4057609706";
const PHONE_DISPLAY = "405-760-9706";

const AboutPage = () => (
  <>
    <SEOHead
      title="About Redwood Construction Pros | Moore OK Contractor"
      description="Learn about Redwood Construction Pros in Moore OK for roofing, custom homes, and metal buildings. Call today for a free estimate."
      canonical="/about"
    />

    <section className="section-pad bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-[1.1] max-w-[800px] mb-6">
          About Redwood Construction Pros — Moore, OK Contractor
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-[700px]">
          Locally owned. Oklahoma-based crews. We build roofs, custom homes, and metal buildings across Moore and the OKC metro — and we do it differently than most contractors in this area.
        </p>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">How We're Different</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Most roofing companies in Oklahoma City don't pour concrete. Most home builders don't touch steel. Most metal building contractors don't know how to frame a house. We do all of it — with our own crew, under direct owner supervision.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Redwood Construction Pros started from a concrete and structural background. That means we understand foundations, load paths, and how buildings actually hold together — not just how they look on the surface. When we put a roof on a house, we know the framing underneath because we built it. When we erect a steel building, we know the slab is right because we poured it.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We don't run sales teams. There's no "project manager" between you and the crew. The owner is on-site, answers the phone, and makes decisions. That keeps jobs on schedule, on budget, and built right.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're based in Moore, Oklahoma and run crews across the OKC metro every day. Moore, Oklahoma City, Edmond, Norman, Yukon, Mustang — we know these cities, we know the soil conditions, we know what Oklahoma weather does to buildings, and we build accordingly.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">What Sets Us Apart</h3>
            <ul className="flex flex-col gap-4">
              {[
                "Concrete and structural background — we pour slabs, set steel, and frame walls",
                "Owner on every job — no middleman, no miscommunication",
                "Local Oklahoma crews — no imported labor from out of state",
                "We handle roofing, homes, AND metal buildings — not just one thing",
                "Transparent pricing — line-item estimates, no hidden change orders",
                "We build for Oklahoma weather — hail, wind, tornado conditions, expansive soil",
                "Faster scheduling than large contractors — we run lean and move quick",
                "Insurance claim expertise — we've worked with every major carrier in Oklahoma",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">What We Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/roofing-moore-ok" className="p-6 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2">Roofing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full roof replacement, hail damage repair, insurance claims, metal roofing. We tear off, inspect decking, and install systems built for Oklahoma storms.
            </p>
          </Link>
          <Link to="/custom-home-builder-moore-ok" className="p-6 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2">Custom Homes</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ground-up custom homes — foundation, framing, roofing, finish. We control the slab and structure in-house. Turnkey delivery across Moore and OKC.
            </p>
          </Link>
          <Link to="/metal-buildings-oklahoma-city" className="p-6 rounded-xl bg-background border border-border hover:border-accent/30 transition-all no-underline group">
            <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2">Metal Buildings & Barndominiums</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Steel shops, commercial buildings, and barndominiums. Concrete slab, steel frame, panels, insulation, and optional interior buildout.
            </p>
          </Link>
        </div>
      </div>
    </section>

    <section className="section-pad bg-background">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Based in Moore, OK — Serving the OKC Metro</h2>
        <p className="text-lg text-muted-foreground max-w-[600px] mx-auto mb-8">
          Moore, Oklahoma City, Edmond, Norman, Yukon, Mustang, and surrounding areas. We run crews across the metro daily and respond to calls fast.
        </p>
        <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg no-underline hover:bg-orange-hover transition-colors">
          <Phone className="w-5 h-5" /> Call: {PHONE_DISPLAY}
        </a>
      </div>
    </section>

    <PageCTA />
  </>
);

export default AboutPage;
