import { Monitor, Thermometer, Wrench, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "BIM & Modeling",
    icon: Monitor,
    skills: [
      "Autodesk Revit MEP",
      "Revit Family Creation",
      "Navisworks Manage",
      "BIM 360 Coordination",
      "AutoCAD",
      "Dynamo BIM",
    ],
  },
  {
    title: "HVAC Design",
    icon: Thermometer,
    skills: [
      "Carrier HAP",
      "Ductpipe Sizer",
      "Psychrometric Analysis",
      "Load Calculations",
      "System Selection",
      "Energy Modeling",
    ],
  },
  {
    title: "Engineering Tools",
    icon: Wrench,
    skills: [
      "SolidWorks",
      "Microsoft Office Suite",
      "Bluebeam Revu",
      "Shop Drawings",
      "Clash Detection",
      "Quantity Takeoff",
    ],
  },
  {
    title: "Standards & Codes",
    icon: BookOpen,
    skills: [
      "ASHRAE Standards",
      "ASHRAE 90.1 / 62.1",
      "SMACNA Guidelines",
      "NFPA Codes",
      "Local Building Codes",
      "LEED Requirements",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Technical Skills
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="bg-background border-border hover:border-primary/30 transition-colors"
                >
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full" />
                          {skill}
                        </li>
                      ))}
                    </ul>
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

export default SkillsSection;
