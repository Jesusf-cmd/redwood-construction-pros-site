import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Roofing from "@/components/Roofing";
import CustomHomes from "@/components/CustomHomes";
import MetalBuildings from "@/components/MetalBuildings";
import CTABand from "@/components/CTABand";
import Authority from "@/components/Authority";
import FAQ from "@/components/FAQ";
import ServiceArea from "@/components/ServiceArea";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <Hero />
    <Services />
    <WhyChooseUs />
    <Roofing />
    <CustomHomes />
    <MetalBuildings />
    <CTABand />
    <Authority />
    <FAQ />
    <ServiceArea />
    <Footer />
  </div>
);

export default Index;
