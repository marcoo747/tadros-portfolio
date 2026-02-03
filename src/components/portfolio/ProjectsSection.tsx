import { ExternalLink, Building2, Factory, Server, Home, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const iconMap = {
  Factory,
  Server,
  Building2,
  Home,
};

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Featured projects showcasing expertise in HVAC design, BIM coordination, and value engineering across diverse industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon];
            return (
              <Card
                key={project.id}
                className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <p className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.location} • {project.year}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors mt-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {project.buildingType}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => navigate(`/projects/${project.slug}`)}
                    variant="ghost"
                    className="w-full text-primary hover:bg-primary/10 flex items-center justify-center gap-2 group/btn"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => navigate("/projects")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 gap-2"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
