import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const experiences = [
  {
    title: "Lead HVAC Design Engineer",
    company: "Elite Consolidated Engineers",
    location: "Cairo, Egypt",
    period: "2024 - Present",
    responsibilities: [
      "Lead HVAC design for large-scale data center and industrial projects",
      "Develop comprehensive MEP coordination strategies using BIM 360",
      "Perform detailed load calculations and system optimization using Carrier HAP",
      "Create LOD 400-500 Revit models for shop drawing production",
      "Conduct value engineering studies achieving 15-20% cost reduction",
    ],
    achievements: ["Leading multiple Tier III data center projects", "Implemented standardized BIM workflows"],
    current: true,
  },
  {
    title: "HVAC & BIM Engineer",
    company: "GRFN-EG",
    location: "Cairo, Egypt",
    period: "2023 - 2024",
    responsibilities: [
      "Designed HVAC systems for commercial and industrial facilities",
      "Coordinated MEP systems in federated BIM environment",
      "Led clash detection and resolution workflows in Navisworks",
      "Prepared technical specifications and construction documents",
      "Mentored junior engineers on BIM standards and workflows",
    ],
    achievements: ["Delivered projects for major FMCG clients", "Reduced coordination issues by 35%"],
    current: false,
  },
  {
    title: "BIM Mechanical Engineer",
    company: "Rowad Modern Engineering",
    location: "Cairo, Egypt",
    period: "2022 - 2023",
    responsibilities: [
      "Managed MEP coordination for multi-building complexes",
      "Created and maintained Revit family libraries for HVAC equipment",
      "Produced clash-free construction documents using Navisworks",
      "Developed Dynamo scripts for automated modeling tasks",
      "Coordinated with international design teams on Gulf projects",
    ],
    achievements: ["Established company BIM standards", "Completed projects in KSA and Bahrain"],
    current: false,
  },
  {
    title: "HVAC & BIM Engineer",
    company: "MAAP Electro-Mechanical Engineers",
    location: "Cairo, Egypt",
    period: "2021 - 2022",
    responsibilities: [
      "Designed HVAC systems for healthcare and commercial projects",
      "Developed BIM models from concept through construction documentation",
      "Performed energy modeling and ASHRAE compliance verification",
      "Coordinated with contractors for shop drawing approval",
      "Conducted site visits for quality assurance and technical support",
    ],
    achievements: ["Successfully delivered hospital HVAC systems", "Zero major design revisions"],
    current: false,
  },
  {
    title: "Site Mechanical Engineer",
    company: "Encorp International",
    location: "Tanzania / Egypt",
    period: "2019 - 2020",
    responsibilities: [
      "Supervised mechanical installations for industrial facilities",
      "Coordinated equipment procurement and logistics",
      "Ensured compliance with design specifications and safety standards",
      "Managed subcontractor relationships and work schedules",
      "Prepared progress reports and as-built documentation",
    ],
    achievements: ["International project experience", "On-time project delivery"],
    current: false,
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Career</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A progressive career in mechanical engineering, from site supervision to leading complex HVAC design projects.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-8 md:pl-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background ${exp.current ? 'bg-primary ring-4 ring-primary/20' : 'bg-muted-foreground/30'}`} />
                  
                  {/* Current indicator */}
                  {exp.current && (
                    <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                  
                  <div className="group bg-card rounded-xl border border-border p-6 md:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {exp.current && (
                            <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-3 mb-6">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Achievements */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Key Achievements</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="text-sm bg-primary/5 text-primary px-3 py-1.5 rounded-full border border-primary/10"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default ExperienceSection;
