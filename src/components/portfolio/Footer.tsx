import { Mail, Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/tadrosmakram" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/tadros-makram/" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/tadrosmakram" },
  { name: "Email", icon: Mail, url: "mailto:tadrwsm@gmail.com" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-card border-t border-border relative no-print">
      <div className="container mx-auto px-4">
        {/* Back to top button */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full border-border hover:border-primary hover:text-primary"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>

        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-primary-foreground text-xl font-bold">
              T
            </div>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Building exceptional digital experiences with passion and precision.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-muted/80 rounded-full text-muted-foreground hover:text-foreground transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © {currentYear} Tadros Makram. Built with{" "}
              <Heart className="w-4 h-4 text-accent fill-accent" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;