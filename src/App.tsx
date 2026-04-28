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
  { path: "/roofing", title: "Roofing Services in Oklahoma City", description: "Roofing services for Oklahoma City homes and businesses, including repair, replacement, metal roofing, storm damage, hail damage, and insurance claim support." },
  { path: "/roofing/roof-repair", title: "Roof Repair in Oklahoma City", description: "Roof repair in Oklahoma City for leaks, storm damage, missing shingles, roof decking issues, flashing problems, and active water intrusion." },
  { path: "/roofing/roof-replacement", title: "Roof Replacement in Oklahoma City", description: "Roof replacement in Oklahoma City for worn-out roofs, hail-damaged roofs, insurance-approved replacements, and full tear-off roofing projects." },
  { path: "/roofing/metal-roofing", title: "Metal Roofing OKC", description: "Metal roofing in OKC for residential, commercial, shop, barn, and long-span roofing projects across the Oklahoma City metro." },
  { path: "/roofing/storm-damage", title: "Storm Damage Repair OKC", description: "Storm damage repair in OKC for wind damage, hail damage, lifted shingles, exposed decking, leaks, and emergency roof protection." },
  { path: "/roofing/hail-damage", title: "Hail Damage Roof Repair", description: "Hail damage roof repair for Oklahoma City property owners dealing with bruised shingles, granule loss, roof leaks, and insurance inspections." },
  { path: "/roofing/insurance-claims", title: "Insurance Claims Assistance", description: "Insurance claims assistance for roof damage in Oklahoma City, including inspection support, scope review, documentation, and repair planning." },
  { path: "/framing", title: "Framing Services in Oklahoma City", description: "Framing services in Oklahoma City for residential builds, commercial projects, metal framing, additions, and custom home framing." },
  { path: "/framing/residential", title: "Residential House Framing OKC", description: "Residential house framing in OKC for new homes, additions, remodels, garages, roof structures, walls, and structural wood framing." },
  { path: "/framing/commercial", title: "Commercial Framing OKC", description: "Commercial framing in OKC for tenant build-outs, structural framing, office spaces, retail projects, and construction-ready framing scopes." },
  { path: "/framing/metal-framing", title: "Metal Framing Oklahoma City", description: "Metal framing in Oklahoma City for commercial interiors, partition walls, durable framing assemblies, and construction projects requiring steel studs." },
  { path: "/framing/custom-home", title: "Custom Home Framing OKC", description: "Custom home framing in OKC for ground-up houses, roof systems, wall framing, additions, and framing work built from construction plans." },
  { path: "/areas/oklahoma-city", title: "Oklahoma City Construction Services", description: "Construction services in Oklahoma City for roofing, framing, custom homes, metal buildings, storm damage repair, and project planning." },
  { path: "/areas/edmond", title: "Edmond Construction Services", description: "Construction services in Edmond for roofing, framing, custom homes, metal buildings, storm damage repair, and residential project work." },
  { path: "/areas/norman", title: "Norman Construction Services", description: "Construction services in Norman for roofing, framing, custom homes, metal buildings, storm repairs, and property improvement projects." },
  { path: "/areas/moore", title: "Moore Construction Services", description: "Construction services in Moore for roofing, hail damage repair, framing, custom homes, metal buildings, and local project estimates." },
  { path: "/areas/midwest-city", title: "Midwest City Construction Services", description: "Construction services in Midwest City for roofing, framing, storm damage repair, custom homes, metal buildings, and exterior construction work." },
  { path: "/blog", title: "Construction Blog", description: "Construction, roofing, framing, storm damage, and project planning articles from Redwood Construction Pros in Oklahoma City." },
  { path: "/projects", title: "Project Gallery", description: "Project gallery for Redwood Construction Pros featuring roofing, framing, custom home, metal building, and construction work in Oklahoma City." },
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
                element={<PlaceholderPage title={route.title} description={route.description} canonical={route.path} />}
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
