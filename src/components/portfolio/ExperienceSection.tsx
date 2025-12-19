import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "HVAC Design Engineer",
    company: "Dar Al-Handasah Consultants (Shair and Partners)",
    location: "Cairo, Egypt",
    period: "2021 - Present",
    responsibilities: [
      "Lead HVAC design for large-scale data center projects with redundant cooling systems",
      "Coordinate with architectural and structural teams using BIM 360 platform",
      "Perform detailed load calculations using Carrier HAP for mission-critical facilities",
      "Develop LOD 400-500 Revit models for shop drawing production",
      "Conduct value engineering studies resulting in 15-20% cost savings",
    ],
    achievements: ["Delivered 3 Tier III data center projects", "Reduced clash issues by 40% through BIM coordination"],
  },
  {
    title: "MEP BIM Coordinator",
    company: "Hassan Allam Holding",
    location: "Cairo, Egypt",
    period: "2019 - 2021",
    responsibilities: [
      "Managed MEP coordination for multi-building industrial complexes",
      "Created and maintained federated BIM models in Navisworks",
      "Led clash detection meetings and resolution workflows",
      "Produced as-built documentation and O&M manuals",
      "Trained junior engineers on Revit MEP and BIM workflows",
    ],
    achievements: ["Coordinated MEP for 500,000+ sqm industrial facility", "Established BIM standards adopted company-wide"],
  },
  {
    title: "Mechanical Design Engineer",
    company: "ECG Engineering Consultants",
    location: "Cairo, Egypt",
    period: "2017 - 2019",
    responsibilities: [
      "Designed HVAC systems for commercial and residential projects",
      "Performed cooling load calculations and equipment selection",
      "Prepared technical specifications and bill of quantities",
      "Coordinated with contractors during construction phase",
      "Conducted site inspections and quality assurance reviews",
    ],
    achievements: ["Designed HVAC for 10+ commercial buildings", "Zero major design revisions during construction"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Professional Experience
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                
                <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>

                  {/* Achievements */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Key Achievements</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
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
    </section>
  );
};

export default ExperienceSection;
