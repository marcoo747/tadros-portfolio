import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Monitor, Cpu, Settings, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "BIM Software",
    icon: Monitor,
    skills: ["Revit", "Revit Family Creation", "Navisworks", "Dynamo BIM", "AutoCAD"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "HVAC Design",
    icon: Settings,
    skills: ["HAP", "Ductpipe Sizer", "ASHRAE Standards", "Energy Audits", "Load Calculations"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Engineering Tools",
    icon: Wrench,
    skills: ["Solid Works", "Microsoft Office", "Shop Drawings", "Clash Detection"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Specializations",
    icon: Cpu,
    skills: [
      "Data Center HVAC",
      "Industrial Systems",
      "Healthcare Facilities",
      "Value Engineering",
      "LOD 400-500 Documentation",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wider uppercase">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in HVAC design and BIM technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 b backdrop-blur-sm hover:bg-card transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-[1px] bg-card rounded-lg" />
                
                <CardContent className="relative p-6 z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium bg-muted/100  text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default border border-transparent hover:border-primary/20 hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
