import { Download, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg border-4 border-card">
                <img
                  src={profilePhoto}
                  alt="Tadros Awad - Mechanical & BIM Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Tadros Awad
            </h1>
            <p className="text-lg md:text-xl text-primary font-semibold mb-4">
              Mechanical & BIM Engineer | Certified HVAC Designer (ASHRAE)
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              6+ years of experience delivering HVAC system design, BIM coordination, and MEP documentation 
              for Data Centers, Industrial Facilities, and International Projects across MENA region.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Cairo, Egypt</span>
              </div>
              <a href="mailto:tadrwsm@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>tadrwsm@gmail.com</span>
              </a>
              <a href="tel:+201272599987" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>+20 127 259 9987</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-8"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="/Tadros_Awad_CV.pdf" download>
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 px-8"
              >
                <a href="https://www.linkedin.com/in/tadros-makram/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
