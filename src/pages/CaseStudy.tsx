import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { getProjectBySlug } from "@/data/projects";

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : null;

  useEffect(() => {
    if (slug && project) {
      document.title = `${project.title} | Tadros Awad - HVAC & BIM Engineer`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      const fullDescription = `${project.title} - Case Study. ${project.shortDescription} Role: ${project.role}`;
      if (metaDescription) {
        metaDescription.setAttribute("content", fullDescription);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = fullDescription;
        document.head.appendChild(meta);
      }

      // Update OG tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", `${project.title} | Tadros Awad`);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute("content", project.shortDescription);
      }

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute("content", project.image);
      }

      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [slug, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/projects")}>Back to Projects</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleContactClick = () => {
    window.location.href = "mailto:tadrwsm@gmail.com";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <button
                onClick={() => navigate("/")}
                className="hover:text-foreground transition-colors"
              >
                Home
              </button>
              <span>/</span>
              <button
                onClick={() => navigate("/projects")}
                className="hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <span>/</span>
              <span className="text-foreground font-medium">{project.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 bg-muted overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.year}</span>
                <span>•</span>
                <span>{project.buildingType}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Snapshot Grid */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Project Snapshot</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
                        Area
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {project.area}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
                        Client
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {project.client}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="col-span-2 md:col-span-2">
                    <CardContent className="p-4">
                      <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
                        Role
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        {project.role}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Tools & Standards */}
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
                        Tools & Software
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, i) => (
                          <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
                        Standards & Codes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.standards.map((std, i) => (
                          <Badge key={i} variant="secondary" className="bg-secondary/10 text-secondary">
                            {std}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* The Problem */}
              <section className="mb-16 pb-16 border-b border-border">
                <h2 className="text-2xl font-bold mb-6">The Problem</h2>
                <ul className="space-y-4">
                  {project.problem.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* The Solution */}
              <section className="mb-16 pb-16 border-b border-border">
                <h2 className="text-2xl font-bold mb-6">The Solution</h2>
                <ul className="space-y-4">
                  {project.solution.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Engineering Decisions */}
              <section className="mb-16 pb-16 border-b border-border">
                <h2 className="text-2xl font-bold mb-6">Engineering Decisions</h2>
                <ul className="space-y-4">
                  {project.engineeringDecisions.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-secondary font-bold flex-shrink-0">→</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Impact */}
              <section className="mb-16 pb-16 border-b border-border">
                <h2 className="text-2xl font-bold mb-6">Impact & Results</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.impact.map((item, i) => (
                    <Card key={i} className="bg-primary/5 border-primary/20">
                      <CardContent className="p-4">
                        <p className="text-foreground font-semibold">{item}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Gallery */}
              {project.gallery.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.gallery.map((image, i) => (
                      <figure key={i} className="group">
                        <div className="relative h-64 bg-muted overflow-hidden rounded-lg mb-3">
                          <img
                            src={image.src}
                            alt={image.caption}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <figcaption className="text-sm text-muted-foreground">
                          {image.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Tags */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <p className="text-xs font-medium text-primary uppercase tracking-widest mb-4">
                      Project Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} className="bg-primary/10 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Interested in discussing this project?</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Let's talk about how I can help with your HVAC and BIM coordination needs.
                    </p>
                    <div className="space-y-3">
                      <Button
                        onClick={handleContactClick}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Send Email
                      </Button>
                      <a href="tel:+201272599987" className="block">
                        <Button
                          variant="outline"
                          className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground gap-2"
                        >
                          <Phone className="w-4 h-4" />
                          Call Now
                        </Button>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/tadros-makram/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          variant="outline"
                          className="w-full gap-2"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Back Button */}
                <Button
                  onClick={() => navigate("/projects")}
                  variant="ghost"
                  className="w-full mt-4 gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyPage;
