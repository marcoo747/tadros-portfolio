import { CheckCircle, Award, Building2, Globe, Cpu } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const highlights = [
  "HVAC system design for mission-critical facilities including Data Centers, Hospitals, and Industrial Plants",
  "BIM coordination and clash detection using Revit MEP and Navisworks Manage",
  "High-LOD documentation (LOD 400-500) and shop drawing preparation",
  "Energy audits, load calculations, and value engineering for cost optimization",
  "ASHRAE standards compliance and international code expertise",
  "International project experience spanning Egypt, KSA, Bahrain, NEOM, and Tanzania",
];

const stats = [
  { value: "6+", label: "Years Experience", icon: Award },
  { value: "50+", label: "Projects Delivered", icon: Building2 },
  { value: "5", label: "Countries", icon: Globe },
  { value: "CHD", label: "ASHRAE Certified", icon: Cpu },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">About</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Summary
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Engineering excellence through precision, innovation, and international expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Summary */}
            <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Certified HVAC Designer with over 6 years of experience delivering comprehensive 
                HVAC design and BIM coordination solutions across industrial, residential, commercial, 
                and data-center projects. Expert in developing high-LOD Revit models (LOD 400-500) 
                that ensure constructability and minimize field conflicts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Proficient in BIM coordination workflows, energy audits, and value engineering 
                to optimize system performance while reducing costs. Strong track record of 
                successful project delivery for multinational clients including Coca-Cola, 
                PepsiCo, Mondelez, and Almarai.
              </p>
              
              {/* Key Highlights */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  Core Competencies
                </h3>
                <ul className="space-y-4">
                  {highlights.map((item, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Client logos placeholder */}
              <div className="mt-8 p-6 rounded-xl bg-muted/50 border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  Key Clients
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Coca-Cola', 'PepsiCo', 'Mondelez', 'Almarai'].map((client, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-background rounded-md text-sm text-muted-foreground border border-border"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
