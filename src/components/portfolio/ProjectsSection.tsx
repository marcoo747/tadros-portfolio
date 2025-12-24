import { Building, Factory, Server, Globe, Wrench, Hospital, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useScrollReveal from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "NEOM Data Center Complex",
    type: "Data Center",
    location: "NEOM, KSA",
    icon: Server,
    scope: "100MW IT Load Capacity, Tier IV Design",
    description: "Lead HVAC designer for state-of-the-art data center with precision cooling systems, free cooling optimization, and N+1 redundancy architecture meeting Uptime Institute requirements.",
    tools: ["Revit MEP", "Navisworks", "Carrier HAP", "BIM 360"],
    role: "Lead HVAC Design Engineer",
    impact: "Achieved PUE target of 1.3 through innovative cooling strategies",
    featured: true,
  },
  {
    title: "Industrial Manufacturing Complex",
    type: "Industrial",
    location: "6th of October, Egypt",
    icon: Factory,
    scope: "250,000 sqm Production Facility",
    description: "Complete HVAC design for pharmaceutical manufacturing plant including cleanroom HVAC systems, process cooling, central plant design, and air handling unit specifications.",
    tools: ["Revit MEP", "AutoCAD", "HAP", "Duct & Pipe Sizer"],
    role: "MEP BIM Coordinator",
    impact: "Delivered on schedule with zero critical coordination issues",
    featured: true,
  },
  {
    title: "King Fahd Medical City Expansion",
    type: "Healthcare",
    location: "Riyadh, KSA",
    icon: Hospital,
    scope: "500-Bed Hospital Addition",
    description: "HVAC systems for critical care units, operating theaters, and isolation rooms meeting ASHRAE 170 healthcare ventilation standards and Saudi MOH requirements.",
    tools: ["Revit MEP", "Carrier HAP", "Navisworks", "AutoCAD"],
    role: "Senior HVAC Designer",
    impact: "100% compliance with infection control ventilation standards",
    featured: true,
  },
  {
    title: "Bahrain International Airport Terminal",
    type: "Aviation",
    location: "Muharraq, Bahrain",
    icon: Plane,
    scope: "New Terminal Building - 30,000 sqm",
    description: "Airport terminal HVAC design with high-efficiency VAV systems, dedicated outdoor air systems, smoke management, and integration with BMS for optimal energy performance.",
    tools: ["Revit MEP", "HAP", "Navisworks", "CFD Analysis"],
    role: "HVAC Design Engineer",
    impact: "Exceeded energy efficiency targets by 12%",
    featured: false,
  },
  {
    title: "Coca-Cola Bottling Facility",
    type: "Industrial",
    location: "Cairo, Egypt",
    icon: Factory,
    scope: "Production Line HVAC Upgrade",
    description: "HVAC system redesign for beverage production facility focusing on temperature and humidity control for product quality and worker comfort in high-heat areas.",
    tools: ["Revit MEP", "Carrier HAP", "AutoCAD"],
    role: "HVAC Design Engineer",
    impact: "Improved production environment conditions by 40%",
    featured: false,
  },
  {
    title: "Cairo Business District Tower",
    type: "Commercial",
    location: "New Administrative Capital, Egypt",
    icon: Building,
    scope: "45-Story Mixed-Use Tower",
    description: "High-rise HVAC design including central chiller plant, VRF systems for tenant spaces, and building automation system integration for optimal energy management.",
    tools: ["Revit MEP", "Carrier HAP", "Navisworks", "AutoCAD"],
    role: "HVAC Design Engineer",
    impact: "LEED Gold certification achieved",
    featured: false,
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Major Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Flagship engineering projects across data centers, industrial facilities, healthcare, and international developments.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className={`group bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary/90 text-primary-foreground">Featured</Badge>
                  </div>

                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-lg leading-tight mb-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Badge variant="secondary" className="text-xs">
                            {project.type}
                          </Badge>
                          <span className="text-xs">{project.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Scope */}
                    <p className="text-sm text-primary font-medium mb-3">
                      {project.scope}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Role & Impact */}
                    <div className="pt-4 border-t border-border space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Wrench className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-foreground font-medium">{project.role}</span>
                      </div>
                      <p className="text-sm text-accent italic">
                        "{project.impact}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className={`group bg-card/50 border-border hover:border-primary/30 transition-all duration-300 hover:bg-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-muted rounded-lg shrink-0">
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground text-sm leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {project.type} | {project.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
