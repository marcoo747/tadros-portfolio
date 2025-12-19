import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative group order-1 lg:order-2">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
            
            {/* Image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-card shadow-2xl">
              <img
                src={profilePhoto}
                alt="Tadros Makram - Frontend Developer"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2 bg-card glass-border px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Available for work</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Frontend Developer</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 animate-slide-up">
              Hi, I'm{" "}
              <span className="text-gradient">Tadros Makram</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              I build{" "}
              <span className="text-foreground font-semibold">exceptional</span> digital experiences
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 animate-slide-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Specializing in <span className="text-primary font-medium">React</span>,{" "}
              <span className="text-secondary font-medium">TypeScript</span>, and{" "}
              <span className="text-accent font-medium">Tailwind CSS</span> to create 
              beautiful, responsive, and user-friendly web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8 py-6 text-base shadow-glow hover:shadow-glow transition-all duration-300 group"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={scrollToProjects}
                variant="outline"
                size="lg"
                className="border-2 border-border hover:border-primary text-foreground hover:text-primary gap-2 px-8 py-6 text-base transition-all duration-300"
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="https://github.com/tadrosmakram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-muted rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/tadros-makram/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-muted rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="mailto:tadrwsm@gmail.com"
                className="p-3 bg-card hover:bg-muted rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 no-print">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-6 h-6 text-primary animate-bounce-slow" />
      </div>
    </section>
  );
};

export default HeroSection;