import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import Layout from "@/components/Layout";
import StructuredData from "@/components/StructuredData";
import Index from "./pages/Index";

const RoofingMooreOK = lazy(() => import("./pages/RoofingMooreOK"));
const RoofReplacementOKC = lazy(() => import("./pages/RoofReplacementOKC"));
const HailDamageRepair = lazy(() => import("./pages/HailDamageRepair"));
const CustomHomeBuilder = lazy(() => import("./pages/CustomHomeBuilder"));
const MetalBuildingsOKC = lazy(() => import("./pages/MetalBuildingsOKC"));
const BarndominiumBuilder = lazy(() => import("./pages/BarndominiumBuilder"));
const ServiceAreasPage = lazy(() => import("./pages/ServiceAreasPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PlaceholderPage = lazy(() => import("./pages/PlaceholderPage"));
const RoofRepairPage = lazy(() => import("./pages/roofing/RoofRepairPage"));
const RoofReplacementPage = lazy(() => import("./pages/roofing/RoofReplacementPage"));
const MetalRoofingPage = lazy(() => import("./pages/roofing/MetalRoofingPage"));
const StormDamagePage = lazy(() => import("./pages/roofing/StormDamagePage"));
const HailDamagePage = lazy(() => import("./pages/roofing/HailDamagePage"));
const InsuranceClaimsPage = lazy(() => import("./pages/roofing/InsuranceClaimsPage"));
const RoofingHubPage = lazy(() => import("./pages/RoofingHubPage"));
const FramingHubPage = lazy(() => import("./pages/FramingHubPage"));
const ResidentialFramingPage = lazy(() => import("./pages/framing/ResidentialFramingPage"));
const CommercialFramingPage = lazy(() => import("./pages/framing/CommercialFramingPage"));
const MetalFramingPage = lazy(() => import("./pages/framing/MetalFramingPage"));
const CustomHomeFramingPage = lazy(() => import("./pages/framing/CustomHomeFramingPage"));
const OklahomaCityAreaPage = lazy(() => import("./pages/areas/OklahomaCityAreaPage"));
const EdmondAreaPage = lazy(() => import("./pages/areas/EdmondAreaPage"));
const NormanAreaPage = lazy(() => import("./pages/areas/NormanAreaPage"));
const MooreAreaPage = lazy(() => import("./pages/areas/MooreAreaPage"));
const MidwestCityAreaPage = lazy(() => import("./pages/areas/MidwestCityAreaPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-[40vh] bg-background px-6 py-24 text-center text-sm font-semibold text-muted-foreground">
    Loading...
  </div>
);

const placeholderRoutes = [];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <StructuredData />
        <Layout>
          <Suspense fallback={<PageLoader />}>
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
              <Route path="/roofing" element={<RoofingHubPage />} />
              <Route path="/roofing/roof-repair" element={<RoofRepairPage />} />
              <Route path="/roofing/roof-replacement" element={<RoofReplacementPage />} />
              <Route path="/roofing/metal-roofing" element={<MetalRoofingPage />} />
              <Route path="/roofing/storm-damage" element={<StormDamagePage />} />
              <Route path="/roofing/hail-damage" element={<HailDamagePage />} />
              <Route path="/roofing/insurance-claims" element={<InsuranceClaimsPage />} />
              <Route path="/framing" element={<FramingHubPage />} />
              <Route path="/framing/residential" element={<ResidentialFramingPage />} />
              <Route path="/framing/commercial" element={<CommercialFramingPage />} />
              <Route path="/framing/metal-framing" element={<MetalFramingPage />} />
              <Route path="/framing/custom-home" element={<CustomHomeFramingPage />} />
              <Route path="/areas/oklahoma-city" element={<OklahomaCityAreaPage />} />
              <Route path="/areas/edmond" element={<EdmondAreaPage />} />
              <Route path="/areas/norman" element={<NormanAreaPage />} />
              <Route path="/areas/moore" element={<MooreAreaPage />} />
              <Route path="/areas/midwest-city" element={<MidwestCityAreaPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              {placeholderRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<PlaceholderPage {...route} canonical={route.path} />}
                />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
