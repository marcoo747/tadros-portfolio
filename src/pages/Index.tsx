import { useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import { Toaster } from "sonner";

const Index = () => {
  useEffect(() => {
    document.title = "Tadros Awad | Mechanical & BIM Engineer - HVAC Design Specialist";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Mechanical & BIM Engineer with 6+ years experience in HVAC system design, BIM coordination, and MEP documentation. ASHRAE Certified HVAC Designer specializing in Data Centers and Industrial Facilities.";
    
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = "HVAC engineer, BIM coordinator, mechanical engineer, Revit MEP, data center HVAC, ASHRAE CHD, Cairo, Egypt, MEP design";
    
    if (!metaKeywords) {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = keywords;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
