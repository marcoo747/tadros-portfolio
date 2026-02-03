import { useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    // Set document title and meta tags
    document.title = "Tadros Awad | HVAC & BIM Engineer - Industrial & Data Center Specialist";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "HVAC & BIM Engineer with 6+ years of expertise in industrial, data center, and commercial HVAC design. CHD Certified. Specialist in high-performance systems, energy efficiency, and BIM coordination.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "HVAC & BIM Engineer with 6+ years of expertise in industrial, data center, and commercial HVAC design. CHD Certified. Specialist in high-performance systems, energy efficiency, and BIM coordination.";
      document.head.appendChild(meta);
    }

    // Add OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Tadros Awad | HVAC & BIM Engineer");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.content = "Tadros Awad | HVAC & BIM Engineer";
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "HVAC & BIM Engineer with 6+ years of expertise in industrial, data center, and commercial projects.");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      meta.content = "HVAC & BIM Engineer with 6+ years of expertise in industrial, data center, and commercial projects.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
