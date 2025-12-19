import { Building, Factory, Server, Globe, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "NEOM Data Center Complex",
    type: "Data Center",
    location: "NEOM, KSA",
    icon: Server,
    scope: "100MW IT Load Capacity, Tier IV Design",
    description: "Lead HVAC designer for state-of-the-art data center with precision cooling systems, free cooling optimization, and N+1 redundancy architecture.",
    tools: ["Revit MEP", "Navisworks", "Carrier HAP", "BIM 360"],
    role: "Lead HVAC Design Engineer",
    impact: "Achieved PUE target of 1.3 through innovative cooling strategies",
  },
  {
    title: "Industrial Manufacturing Complex",
    type: "Industrial",
    location: "6th of October, Egypt",
    icon: Factory,
    scope: "250,000 sqm Production Facility",
    description: "Complete HVAC design for pharmaceutical manufacturing plant including cleanroom HVAC, process cooling, and central plant systems.",
    tools: ["Revit MEP", "AutoCAD", "HAP", "Ductpipe Sizer"],
    role: "MEP BIM Coordinator",
    impact: "Delivered on schedule with zero critical coordination issues",
  },
  {
    title: "King Fahd Medical City Expansion",
    type: "Healthcare",
    location: "Riyadh, KSA",
    icon: Building,
    scope: "500-Bed Hospital Addition",
    description: "HVAC systems for critical care units, operating theaters, and isolation rooms meeting ASHRAE 170 and local MOH requirements.",
    tools: ["Revit MEP", "Carrier HAP", "Navisworks", "AutoCAD"],
    role: "Senior HVAC Designer",
    impact: "100% compliance with infection control ventilation standards",
  },
  {
    title: "Bahrain International Airport",
    type: "Aviation",
    location: "Muharraq, Bahrain",
    icon: Globe,
    scope: "New Terminal Building - 30,000 sqm",
    description: "Airport terminal HVAC design with high-efficiency VAV systems, dedicated outdoor air systems, and smoke management.",
    tools: ["Revit MEP", "HAP", "Navisworks", "CFD Analysis"],
    role: "HVAC Design Engineer",
    impact: "Exceeded energy efficiency targets by 12%",
  },
  {
    title: "Cairo Business District Tower",
    type: "Commercial",
    location: "New Administrative Capital, Egypt",
    icon: Building,
    scope: "45-Story Mixed-Use Tower",
    description: "High-rise HVAC design including central chiller plant, VRF systems, and building automation integration.",
    tools: ["Revit MEP", "Carrier HAP", "Navisworks", "AutoCAD"],
    role: "HVAC Design Engineer",
    impact: "LEED Gold certification achieved",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Major Projects
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-4" />
            <p className="text-muted-foreground">
              Flagship engineering projects across data centers, industrial facilities, and international developments.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover overflow-hidden"
                >
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-lg leading-tight">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <Badge variant="secondary" className="text-xs">
                            {project.type}
                          </Badge>
                          <span>•</span>
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Scope */}
                    <p className="text-sm text-primary font-medium mb-3">
                      {project.scope}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 mb-4">
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
                    <div className="pt-4 border-t border-border space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Wrench className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Role:</span>
                        <span className="text-foreground font-medium">{project.role}</span>
                      </div>
                      <p className="text-sm text-primary/80 italic">
                        "{project.impact}"
                      </p>
                    </div>
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
