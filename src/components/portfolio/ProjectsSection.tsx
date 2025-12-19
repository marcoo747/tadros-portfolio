import { ExternalLink, Building2, Factory, Server, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Industrial HVAC System Design",
    description: "Complete HVAC design for a 50,000 sqm manufacturing facility including chilled water systems, air handling units, and building automation integration.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    tags: ["HVAC Design", "Industrial", "BIM"],
    icon: Factory,
  },
  {
    title: "Data Center Cooling Solution",
    description: "Precision cooling system design for a Tier III data center with redundant cooling infrastructure and energy-efficient free cooling capabilities.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["Data Center", "Precision Cooling", "Energy Efficiency"],
    icon: Server,
  },
  {
    title: "Commercial Tower MEP",
    description: "Full MEP coordination and HVAC design for a 30-story commercial building using Revit MEP with clash detection and resolution.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    tags: ["Commercial", "Revit MEP", "Coordination"],
    icon: Building2,
  },
  {
    title: "Residential Complex HVAC",
    description: "VRF system design and implementation for a luxury residential complex with 200 units, including central ventilation and heat recovery systems.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    tags: ["Residential", "VRF", "Ventilation"],
    icon: Home,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing expertise in HVAC design and BIM coordination
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
