import { Mail, Phone, MapPin, Linkedin, Download, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const handleExportPDF = () => {
    window.print();
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Tadros_Awad_CV.pdf";
    link.download = "Tadros_Awad_CV.pdf";
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden blueprint-grid">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-hero-gradient rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-card-hover">
              <img
                src={profilePhoto}
                alt="Tadros Awad - Mechanical & BIM Engineer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium tracking-wider uppercase mb-2 animate-fade-in">
              Mechanical & BIM Engineer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 animate-slide-up">
              Tadros Awad
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Certified HVAC Designer (CHD) with 6+ years of hands-on experience in HVAC design and BIM across industrial, residential, commercial, and data-center projects.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <a
                href="mailto:tadrwsm@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 text-sm"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-foreground">tadrwsm@gmail.com</span>
              </a>
              <a
                href="tel:+201272599987"
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 text-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-foreground">+20 127 259 9987</span>
              </a>
              <span className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-foreground">Cairo, Egypt</span>
              </span>
              <a
                href="https://www.linkedin.com/in/tadros-makram/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 text-sm"
              >
                <Linkedin className="w-4 h-4 text-primary" />
                <span className="text-foreground">LinkedIn</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-slide-up no-print" style={{ animationDelay: "0.3s" }}>
              <Button
                onClick={handleExportPDF}
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-6 py-3 text-base shadow-card hover:shadow-glow transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                Export to PDF
              </Button>
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground gap-2 px-6 py-3 text-base shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce no-print">
        <ChevronDown className="w-8 h-8 text-primary/70" />
      </div>
    </section>
  );
};

export default HeroSection;
