import { Mail, Phone, Linkedin, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-background no-print">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Tadros Awad</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              HVAC & BIM Engineer specializing in industrial, data center, and commercial projects.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2 text-sm text-background/70">
              <Link to="/" className="hover:text-background transition-colors">Home</Link>
              <Link to="/projects" className="hover:text-background transition-colors">Projects</Link>
              <a href="/#about" className="hover:text-background transition-colors">About</a>
              <a href="/#contact" className="hover:text-background transition-colors">Contact</a>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <nav className="flex flex-col gap-2 text-sm text-background/70">
              <a href="/#skills" className="hover:text-background transition-colors">Skills</a>
              <a href="/#education" className="hover:text-background transition-colors">Education</a>
              <a href="/Tadros_Awad_CV.pdf" className="hover:text-background transition-colors">Download CV</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <a href="mailto:tadrwsm@gmail.com" className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                tadrwsm@gmail.com
              </a>
              <a href="tel:+201272599987" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                +20 127 259 9987
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Cairo, Egypt
              </span>
              <a
                href="https://www.linkedin.com/in/tadros-makram/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-background transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Tadros Awad. Built with <span className="text-red-500"><a target="blank" href="https://marco-portfolio-8b699.web.app/">Marco Makram</a></span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
