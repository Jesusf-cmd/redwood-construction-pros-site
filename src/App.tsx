import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import Layout from "@/components/Layout";
import StructuredData from "@/components/StructuredData";
import Index from "./pages/Index";
import RoofingMooreOK from "./pages/RoofingMooreOK";
import RoofReplacementOKC from "./pages/RoofReplacementOKC";
import HailDamageRepair from "./pages/HailDamageRepair";
import CustomHomeBuilder from "./pages/CustomHomeBuilder";
import MetalBuildingsOKC from "./pages/MetalBuildingsOKC";
import BarndominiumBuilder from "./pages/BarndominiumBuilder";
import ServiceAreasPage from "./pages/ServiceAreasPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const placeholderRoutes = [
  { path: "/roofing", title: "Roofing Services in Oklahoma City", seoTitle: "Roofing Contractor OKC | Redwood Construction Pros", description: "Roof repair, replacement, metal roofing, and storm work in Oklahoma City. Call Redwood Construction Pros for a free inspection." },
  { path: "/roofing/roof-repair", title: "Roof Repair in Oklahoma City", seoTitle: "Roof Repair OKC | Redwood Construction Pros", description: "Roof repair in Oklahoma City for leaks, missing shingles, flashing, and storm damage. Call today for a free roof inspection.", serviceType: "Roof Repair", serviceDescription: "Professional roof repair services in Oklahoma City. Storm damage repair, leak repair, shingle replacement, and emergency roof repairs." },
  { path: "/roofing/roof-replacement", title: "Roof Replacement in Oklahoma City", seoTitle: "Roof Replacement OKC | Redwood Construction Pros", description: "Full roof replacement in Oklahoma City for aging, leaking, or hail-damaged roofs. Call today for a free inspection.", serviceType: "Roof Replacement", serviceDescription: "Professional roof replacement services in Oklahoma City for aging roofs, hail-damaged roofs, tear-offs, and full roofing system installs." },
  { path: "/roofing/metal-roofing", title: "Metal Roofing OKC", seoTitle: "Metal Roofing OKC | Redwood Construction Pros", description: "Metal roofing in OKC for homes, shops, barns, and commercial buildings. Call Redwood Construction Pros for a free estimate.", serviceType: "Metal Roofing", serviceDescription: "Metal roofing services in Oklahoma City for homes, shops, barns, commercial buildings, and long-lasting roofing upgrades." },
  { path: "/roofing/storm-damage", title: "Storm Damage Repair OKC", seoTitle: "Storm Damage Roof Repair OKC | Redwood Pros", description: "Storm damage roof repair in OKC for wind, hail, leaks, lifted shingles, and emergency tarping. Call for a free inspection.", serviceType: "Storm Damage Repair", serviceDescription: "Storm damage roof repair in Oklahoma City for wind damage, lifted shingles, leaks, emergency tarping, and post-storm roof inspections." },
  { path: "/roofing/hail-damage", title: "Hail Damage Roof Repair", seoTitle: "Hail Damage Roof Repair OKC | Redwood Pros", description: "Hail damage roof repair in Oklahoma City with inspection photos and repair planning. Call today for a free roof inspection.", serviceType: "Hail Damage Repair", serviceDescription: "Hail damage roof repair services in Oklahoma City with roof inspections, repair planning, shingle replacement, and storm damage documentation." },
  { path: "/roofing/insurance-claims", title: "Insurance Claims Assistance", seoTitle: "Roof Insurance Claims OKC | Redwood Pros", description: "Roof insurance claim help in OKC for hail, wind, leaks, and damaged shingles. Call Redwood Construction Pros for support.", serviceType: "Insurance Claims Assistance", serviceDescription: "Roof insurance claims assistance in Oklahoma City for hail damage, wind damage, leaks, damaged shingles, and repair documentation." },
  { path: "/framing", title: "Framing Services in Oklahoma City", seoTitle: "Framing Contractor OKC | Redwood Construction Pros", description: "Framing services in OKC for homes, additions, commercial spaces, and metal framing. Call today for a construction estimate." },
  { path: "/framing/residential", title: "Residential House Framing OKC", seoTitle: "Residential House Framing OKC | Redwood Pros", description: "Residential house framing in Oklahoma City for new homes, additions, garages, and roof structures. Call for a free estimate.", serviceType: "Residential Framing", serviceDescription: "Residential framing services in Oklahoma City for new homes, additions, garages, wall framing, roof framing, and structural carpentry." },
  { path: "/framing/commercial", title: "Commercial Framing OKC", seoTitle: "Commercial Framing OKC | Redwood Construction Pros", description: "Commercial framing in OKC for tenant build-outs, offices, retail, and structural scopes. Call today for a project estimate.", serviceType: "Commercial Framing", serviceDescription: "Commercial framing services in Oklahoma City for tenant build-outs, office spaces, retail projects, structural scopes, and jobsite framing packages." },
  { path: "/framing/metal-framing", title: "Metal Framing Oklahoma City", seoTitle: "Metal Framing OKC | Redwood Construction Pros", description: "Metal framing in Oklahoma City for commercial interiors, partitions, and steel stud assemblies. Call for a free estimate.", serviceType: "Metal Framing", serviceDescription: "Metal framing services in Oklahoma City for commercial interiors, steel stud walls, partitions, soffits, and durable framing assemblies." },
  { path: "/framing/custom-home", title: "Custom Home Framing OKC", seoTitle: "Custom Home Framing OKC | Redwood Pros", description: "Custom home framing in OKC for walls, roof systems, additions, and ground-up builds. Call today for a framing estimate.", serviceType: "Custom Home Framing", serviceDescription: "Custom home framing services in Oklahoma City for ground-up builds, additions, wall systems, roof systems, and structural framing scopes." },
  { path: "/areas/oklahoma-city", title: "Oklahoma City Construction Services", seoTitle: "OKC Roofing & Framing | Redwood Construction Pros", description: "Roofing, framing, custom homes, and metal buildings in Oklahoma City. Call Redwood Construction Pros for a free estimate." },
  { path: "/areas/edmond", title: "Edmond Construction Services", seoTitle: "Edmond Roofing & Framing | Redwood Construction Pros", description: "Roofing, framing, custom homes, and metal buildings in Edmond, OK. Call Redwood Construction Pros for a free estimate." },
  { path: "/areas/norman", title: "Norman Construction Services", seoTitle: "Norman Roofing & Framing | Redwood Construction Pros", description: "Roofing, framing, custom homes, and metal buildings in Norman, OK. Call Redwood Construction Pros for a free estimate." },
  { path: "/areas/moore", title: "Moore Construction Services", seoTitle: "Moore Roofing & Framing | Redwood Construction Pros", description: "Roofing, hail damage repair, framing, custom homes, and metal buildings in Moore, OK. Call today for a free estimate." },
  { path: "/areas/midwest-city", title: "Midwest City Construction Services", seoTitle: "Midwest City Roofing & Framing | Redwood Pros", description: "Roofing, framing, storm repair, custom homes, and metal buildings in Midwest City. Call today for a free estimate." },
  { path: "/blog", title: "Construction Blog", seoTitle: "Construction Blog OKC | Redwood Construction Pros", description: "Read roofing, framing, storm damage, and construction planning tips for Oklahoma City. Call today for a free estimate." },
  { path: "/projects", title: "Project Gallery", seoTitle: "Construction Projects OKC | Redwood Construction Pros", description: "View roofing, framing, custom home, and metal building projects in Oklahoma City. Call today for a free construction estimate." },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <StructuredData />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/roofing-moore-ok" element={<RoofingMooreOK />} />
            <Route path="/roof-replacement-oklahoma-city" element={<RoofReplacementOKC />} />
            <Route path="/hail-damage-roof-repair-moore-ok" element={<HailDamageRepair />} />
            <Route path="/custom-home-builder-moore-ok" element={<CustomHomeBuilder />} />
            <Route path="/metal-buildings-oklahoma-city" element={<MetalBuildingsOKC />} />
            <Route path="/barndominium-builder-oklahoma" element={<BarndominiumBuilder />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            {placeholderRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<PlaceholderPage {...route} canonical={route.path} />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
