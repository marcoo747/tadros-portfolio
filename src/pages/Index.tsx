import { useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import InterestsSection from "@/components/portfolio/InterestsSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    // Set document title and meta tags
    document.title = "Tadros Awad | Mechanical & BIM Engineer - HVAC Design Expert";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Certified HVAC Designer (CHD) with 6+ years of experience in HVAC design and BIM across industrial, residential, commercial, and data-center projects.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Certified HVAC Designer (CHD) with 6+ years of experience in HVAC design and BIM across industrial, residential, commercial, and data-center projects.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <InterestsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
