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
    // SEO Meta Tags
    document.title = "Tadros Awad | Mechanical & BIM Engineer - HVAC Design Specialist";
    
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement("meta");
        if (isProperty) {
          meta.setAttribute("property", name);
        } else {
          meta.name = name;
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMetaTag("description", "Certified HVAC Designer (CHD) with 6+ years experience in HVAC system design, BIM coordination, and MEP documentation. Specializing in Data Centers, Industrial Facilities, and International Projects across MENA region.");
    updateMetaTag("keywords", "HVAC engineer, BIM coordinator, mechanical engineer, Revit MEP, data center HVAC, ASHRAE CHD, Cairo Egypt, MEP design, Navisworks, HVAC designer, BIM engineer");
    updateMetaTag("author", "Tadros Awad");
    updateMetaTag("robots", "index, follow");

    // Open Graph tags
    updateMetaTag("og:title", "Tadros Awad | Mechanical & BIM Engineer", true);
    updateMetaTag("og:description", "Certified HVAC Designer with 6+ years experience in HVAC system design and BIM coordination for Data Centers and Industrial Facilities.", true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:locale", "en_US", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", "Tadros Awad | Mechanical & BIM Engineer");
    updateMetaTag("twitter:description", "Certified HVAC Designer with 6+ years experience in HVAC system design and BIM coordination.");

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin;

    // Structured Data (JSON-LD)
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Tadros Awad",
      "jobTitle": "Mechanical & BIM Engineer",
      "description": "Certified HVAC Designer (CHD) with 6+ years experience in HVAC system design and BIM coordination",
      "email": "tadrwsm@gmail.com",
      "telephone": "+201272599987",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cairo",
        "addressCountry": "Egypt"
      },
      "sameAs": [
        "https://www.linkedin.com/in/tadros-makram/"
      ],
      "knowsAbout": [
        "HVAC Design",
        "BIM Coordination",
        "Revit MEP",
        "Navisworks",
        "Data Center HVAC",
        "ASHRAE Standards"
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const ldScript = document.querySelector('script[type="application/ld+json"]');
      if (ldScript) {
        ldScript.remove();
      }
    };
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
