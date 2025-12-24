import { Monitor, Thermometer, Wrench, BookOpen, Layers, Cog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useScrollReveal from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    title: "BIM & Modeling",
    icon: Layers,
    color: "primary",
    skills: [
      { name: "Autodesk Revit MEP", level: 95 },
      { name: "Revit Family Creation", level: 90 },
      { name: "Navisworks Manage", level: 90 },
      { name: "BIM 360 Coordination", level: 85 },
      { name: "Dynamo BIM", level: 75 },
      { name: "AutoCAD", level: 95 },
    ],
  },
  {
    title: "HVAC Design & Analysis",
    icon: Thermometer,
    color: "accent",
    skills: [
      { name: "Carrier HAP", level: 95 },
      { name: "Duct & Pipe Sizer", level: 90 },
      { name: "Load Calculations", level: 95 },
      { name: "System Selection", level: 90 },
      { name: "Energy Modeling", level: 80 },
      { name: "Psychrometric Analysis", level: 85 },
    ],
  },
  {
    title: "Coordination & Documentation",
    icon: Monitor,
    color: "primary",
    skills: [
      { name: "Clash Detection", level: 95 },
      { name: "Shop Drawings (LOD 400-500)", level: 95 },
      { name: "Quantity Takeoff", level: 85 },
      { name: "Technical Specifications", level: 90 },
      { name: "As-Built Documentation", level: 90 },
      { name: "Project Coordination", level: 90 },
    ],
  },
  {
    title: "Standards & Codes",
    icon: BookOpen,
    color: "accent",
    skills: [
      { name: "ASHRAE Standards", level: 95 },
      { name: "ASHRAE 90.1 / 62.1 / 170", level: 90 },
      { name: "SMACNA Guidelines", level: 85 },
      { name: "NFPA Codes", level: 80 },
      { name: "Saudi Building Code", level: 85 },
      { name: "LEED Requirements", level: 80 },
    ],
  },
];

const softwareTools = [
  "Revit MEP", "Navisworks", "AutoCAD", "Carrier HAP", 
  "Duct & Pipe Sizer", "SolidWorks", "BIM 360", "Bluebeam Revu",
  "Dynamo", "Microsoft Office", "Primavera P6"
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 blueprint-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Comprehensive expertise across BIM, HVAC design, and engineering standards.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className={`bg-background border-border hover:border-primary/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2.5 rounded-xl ${category.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'}`}>
                        <Icon className={`w-5 h-5 ${category.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="space-y-1.5">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{skill.name}</span>
                            <span className={`font-medium ${category.color === 'accent' ? 'text-accent' : 'text-primary'}`}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-1000 ease-out ${category.color === 'accent' ? 'bg-accent' : 'bg-primary'}`}
                              style={{ 
                                width: isVisible ? `${skill.level}%` : '0%',
                                transitionDelay: `${400 + i * 100}ms`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Software Tools */}
          <div className={`bg-background rounded-xl border border-border p-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-muted rounded-lg">
                <Cog className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Software & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softwareTools.map((tool, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-muted/50 text-foreground rounded-lg text-sm font-medium border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
