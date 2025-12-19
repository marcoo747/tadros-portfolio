import { CheckCircle } from "lucide-react";

const highlights = [
  "HVAC system design for mission-critical facilities (Data Centers, Hospitals, Industrial)",
  "BIM coordination and clash detection using Revit & Navisworks",
  "LOD 400-500 documentation and shop drawing preparation",
  "Energy audits and value engineering optimization",
  "ASHRAE standards compliance and load calculations",
  "International project experience (KSA, Bahrain, NEOM)",
];

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "CHD", label: "ASHRAE Certified" },
  { value: "5", label: "Countries" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Professional Summary
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Summary */}
            <div className="lg:col-span-2 space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Mechanical Engineer with over 6 years of specialized experience in HVAC system design 
                and BIM coordination. Proven track record of delivering complex MEP projects including 
                data centers, healthcare facilities, and large-scale industrial installations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Expert in utilizing Carrier HAP for load calculations, Autodesk Revit for 3D modeling, 
                and Navisworks for coordination. Certified HVAC Designer (CHD) by ASHRAE with deep 
                knowledge of international standards and best practices.
              </p>
              
              {/* Key Highlights */}
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">Core Competencies</h3>
                <ul className="space-y-3">
                  {highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-background p-5 rounded-lg border border-border text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
