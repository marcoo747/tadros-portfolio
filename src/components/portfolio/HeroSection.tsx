import { Download, Linkedin, Mail, Phone, MapPin, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "./AnimatedBackground";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-lg border border-border/50 animate-fade-in-up">
                <img
                  src={profilePhoto}
                  alt="Tadros Awad - Mechanical & BIM Engineer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg animate-fade-in-up delay-300">
                <span className="text-sm font-semibold">ASHRAE CHD</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 text-center lg:text-left order-2 lg:order-2">
            {/* Title badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-down">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for Projects</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in-up delay-100">
              Tadros Awad
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl text-primary font-semibold mb-6 animate-fade-in-up delay-200">
              Mechanical & BIM Engineer
              <span className="text-muted-foreground font-normal"> | </span>
              <span className="text-accent">Certified HVAC Designer</span>
            </p>
            
            {/* Value statement */}
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-300">
              6+ years engineering excellence in HVAC system design and BIM coordination for 
              <span className="text-foreground font-medium"> Data Centers</span>, 
              <span className="text-foreground font-medium"> Industrial Facilities</span>, and 
              <span className="text-foreground font-medium"> International Mega Projects </span>
              across the MENA region.
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Cairo, Egypt</span>
              </div>
              <a 
                href="mailto:tadrwsm@gmail.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>tadrwsm@gmail.com</span>
              </a>
              <a 
                href="tel:+201272599987" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>+20 127 259 9987</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up delay-500">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4" />
                View Projects
              </Button>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="gap-2 px-8 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="gap-2 px-6"
              >
                <a href="/Tadros_Awad_CV.pdf" download>
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="w-12 h-12"
              >
                <a 
                  href="https://www.linkedin.com/in/tadros-makram/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer animate-fade-in-up delay-700"
          aria-label="Scroll to next section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
