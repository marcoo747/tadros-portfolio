import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Wrench, Monitor, Cpu, Settings } from "lucide-react";

const AboutSection = () => {
  const specialties = [
    "HVAC System Design (Concept to LOD 500)",
    "BIM Coordination & MEP Integration",
    "Energy Audits & Value Engineering",
    "Clash Detection & Resolution (Navisworks)",
    "Shop Drawing Development",
    "Building Performance Optimization"
  ];

  const industries = [
    "Industrial Manufacturing",
    "Data Centers & IT Facilities",
    "Healthcare & Hospitals",
    "Commercial Office Towers",
    "Luxury Residential",
    "Hospitality & Hotels"
  ];

  const strengths = [
    "Expert coordination between mechanical, electrical, and plumbing systems",
    "Code compliance mastery (ASHRAE, SMACNA, Egypt Building Code)",
    "Detailed technical documentation and presentations",
    "Advanced shop drawing development (LOD 400-500)",
    "Energy efficiency optimization and sustainability focus",
    "Data center precision cooling expertise (Tier III+ redundancy)"
  ];

  const coreTools = [
    { name: "Revit MEP", category: "BIM" },
    { name: "Navisworks", category: "Coordination" },
    { name: "Dynamo BIM", category: "Automation" },
    { name: "AutoCAD", category: "Design" },
    { name: "HAP (ASHRAE)", category: "HVAC Design" },
    { name: "Ductpipe Sizer", category: "Sizing" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About My Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Specialties */}
          <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
            <div className="h-1 bg-gradient-to-r from-primary to-primary/50" />
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Specializations</h3>
              </div>
              <ul className="space-y-3">
                {specialties.map((spec, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{spec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Industries */}
          <Card className="group overflow-hidden border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/5">
            <div className="h-1 bg-gradient-to-r from-secondary to-secondary/50" />
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Cpu className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Industries</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, i) => (
                  <Badge key={i} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                    {industry}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Strengths */}
          <Card className="group overflow-hidden border-border/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5">
            <div className="h-1 bg-gradient-to-r from-amber-500 to-amber-500/50" />
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Wrench className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Strengths</h3>
              </div>
              <ul className="space-y-3">
                {strengths.slice(0, 3).map((strength, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{strength}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border">
                <ul className="space-y-3">
                  {strengths.slice(3).map((strength, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Core Tools & Software
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreTools.map((tool, i) => (
              <Card key={i} className="text-center hover:border-primary/50 hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="p-2 bg-primary/10 rounded-lg mb-2 inline-block">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm text-foreground mb-1">{tool.name}</p>
                  <p className="text-xs text-muted-foreground">{tool.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Summary */}
        <Card className="bg-muted/50 border-border/50">
          <CardContent className="p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              With 6+ years of dedicated experience in HVAC design and BIM coordination, I bring a comprehensive approach to mechanical systems engineering. My expertise spans from initial concept and load calculations through detailed design at LOD 500, with a strong focus on energy efficiency, code compliance, and seamless inter-disciplinary coordination. I specialize in complex projects including industrial facilities, data centers with precision cooling requirements, and high-rise commercial buildings where MEP coordination is critical. My value-engineering approach consistently delivers cost-optimized solutions without compromising performance or quality.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
