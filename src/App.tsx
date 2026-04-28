import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
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
  { path: "/roofing/roof-repair", title: "Roof Repair in Oklahoma City", seoTitle: "Roof Repair OKC | Redwood Construction Pros", description: "Roof repair in Oklahoma City for leaks, missing shingles, flashing, and storm damage. Call today for a free roof inspection." },
  { path: "/roofing/roof-replacement", title: "Roof Replacement in Oklahoma City", seoTitle: "Roof Replacement OKC | Redwood Construction Pros", description: "Full roof replacement in Oklahoma City for aging, leaking, or hail-damaged roofs. Call today for a free inspection." },
  { path: "/roofing/metal-roofing", title: "Metal Roofing OKC", seoTitle: "Metal Roofing OKC | Redwood Construction Pros", description: "Metal roofing in OKC for homes, shops, barns, and commercial buildings. Call Redwood Construction Pros for a free estimate." },
  { path: "/roofing/storm-damage", title: "Storm Damage Repair OKC", seoTitle: "Storm Damage Roof Repair OKC | Redwood Pros", description: "Storm damage roof repair in OKC for wind, hail, leaks, lifted shingles, and emergency tarping. Call for a free inspection." },
  { path: "/roofing/hail-damage", title: "Hail Damage Roof Repair", seoTitle: "Hail Damage Roof Repair OKC | Redwood Pros", description: "Hail damage roof repair in Oklahoma City with inspection photos and repair planning. Call today for a free roof inspection." },
  { path: "/roofing/insurance-claims", title: "Insurance Claims Assistance", seoTitle: "Roof Insurance Claims OKC | Redwood Pros", description: "Roof insurance claim help in OKC for hail, wind, leaks, and damaged shingles. Call Redwood Construction Pros for support." },
  { path: "/framing", title: "Framing Services in Oklahoma City", seoTitle: "Framing Contractor OKC | Redwood Construction Pros", description: "Framing services in OKC for homes, additions, commercial spaces, and metal framing. Call today for a construction estimate." },
  { path: "/framing/residential", title: "Residential House Framing OKC", seoTitle: "Residential House Framing OKC | Redwood Pros", description: "Residential house framing in Oklahoma City for new homes, additions, garages, and roof structures. Call for a free estimate." },
  { path: "/framing/commercial", title: "Commercial Framing OKC", seoTitle: "Commercial Framing OKC | Redwood Construction Pros", description: "Commercial framing in OKC for tenant build-outs, offices, retail, and structural scopes. Call today for a project estimate." },
  { path: "/framing/metal-framing", title: "Metal Framing Oklahoma City", seoTitle: "Metal Framing OKC | Redwood Construction Pros", description: "Metal framing in Oklahoma City for commercial interiors, partitions, and steel stud assemblies. Call for a free estimate." },
  { path: "/framing/custom-home", title: "Custom Home Framing OKC", seoTitle: "Custom Home Framing OKC | Redwood Pros", description: "Custom home framing in OKC for walls, roof systems, additions, and ground-up builds. Call today for a framing estimate." },
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
                element={<PlaceholderPage title={route.title} seoTitle={route.seoTitle} description={route.description} canonical={route.path} />}
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
