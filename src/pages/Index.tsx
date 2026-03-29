import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import MetalBuildings from "@/components/MetalBuildings";
import About from "@/components/About";
import Process from "@/components/Process";
import ServiceArea from "@/components/ServiceArea";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <MetalBuildings />
      <About />
      <Process />
      <ServiceArea />
      <Testimonials />
      <CTABand />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
