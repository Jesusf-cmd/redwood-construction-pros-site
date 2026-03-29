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

const queryClient = new QueryClient();

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
