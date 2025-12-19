import { useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import { Toaster } from "sonner";

const Index = () => {
  useEffect(() => {
    // Set document title and meta tags
    document.title = "Tadros Makram | Frontend Developer - React, TypeScript, Tailwind CSS";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Frontend Developer specializing in React, TypeScript, and Tailwind CSS. Building exceptional digital experiences with passion and precision.";
    
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = "frontend developer, react developer, typescript, tailwind css, web developer, portfolio, cairo, egypt";
    
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
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;