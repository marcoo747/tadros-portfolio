import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { projects } from "@/data/projects";
import { Building2, Factory, Server, Home } from "lucide-react";

const iconMap = {
  Factory,
  Server,
  Building2,
  Home,
};

const ProjectsListingPage = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    document.title = "Projects & Case Studies - Tadros Awad | HVAC & BIM Engineer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Browse HVAC design and BIM coordination case studies across industrial, data center, commercial, and residential projects."
      );
    }
  }, []);

  useEffect(() => {
    if (selectedFilter) {
      setFilteredProjects(
        projects.filter((p) =>
          p.buildingType.toLowerCase().includes(selectedFilter.toLowerCase())
        )
      );
    } else {
      setFilteredProjects(projects);
    }
  }, [selectedFilter]);

  // Extract unique building types for filters
  const buildingTypes = Array.from(
    new Set(projects.map((p) => p.buildingType))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Page Header */}
        <div className="bg-muted/30 py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projects & Case Studies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive case studies showcasing HVAC design expertise, BIM
              coordination, and value engineering across diverse project types and industries.
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-card py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Filter by Type:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setSelectedFilter(null)}
                variant={selectedFilter === null ? "default" : "outline"}
                size="sm"
              >
                All Projects
              </Button>
              {buildingTypes.map((type) => (
                <Button
                  key={type}
                  onClick={() => setSelectedFilter(type)}
                  variant={selectedFilter === type ? "default" : "outline"}
                  size="sm"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => {
                  const IconComponent = iconMap[project.icon];
                  return (
                    <Card
                      key={project.id}
                      className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col"
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

                      <CardContent className="p-6 flex-1 flex flex-col">
                        <div className="mb-3 flex-1">
                          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                            {project.location} • {project.year}
                          </p>
                          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs text-muted-foreground font-medium mb-3">
                            {project.buildingType}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {project.shortDescription}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4 mt-4">
                          {project.tags.slice(0, 2).map((tag, tagIndex) => (
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
                          className="w-full text-primary hover:bg-primary/10 flex items-center justify-center gap-2 group/btn mt-auto"
                        >
                          View Case Study
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No projects found matching your filter.
                </p>
                <Button
                  onClick={() => setSelectedFilter(null)}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsListingPage;
