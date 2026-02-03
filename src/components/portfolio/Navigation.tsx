import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#", label: "Home", id: "home" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHome: boolean) => {
    e.preventDefault();
    
    // If we're not on home page and not clicking home, navigate to home first
    if (!isHome && location.pathname !== "/") {
      navigate("/");
      // Give it a moment to render, then scroll
      setTimeout(() => {
        if (href !== "#") {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 100);
    } else if (href !== "#") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (isHome) {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="font-display font-bold text-lg text-foreground hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}          >
            Tadros Awad
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id === "home")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => handleNavClick(e, link.href, link.id === "home")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
