import { Briefcase, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Lead HVAC Design Engineer",
    company: "Elite Consolidated Engineers (ECE)",
    period: "June 2024 – Present",
    location: "Egypt",
    responsibilities: [
      "Lead the design and development of advanced HVAC systems for industrial, healthcare, and data center projects",
      "Conduct site visits to ensure design accuracy and adherence to quality standards",
      "Develop detailed 3D mechanical models in Revit",
    ],
    achievements: [
      "Delivered comprehensive detailed design, Revit models and HVAC retrofit designs for major industrial and data center projects",
      "Projects include: Almaria Lambo facility (Riyadh), Elsewedy Industrial Factory (Dammam), SCCT Admin Buildings, Tanzanian data center",
      "Implemented system upgrades for leading clients: Coca-Cola, PepsiCo, ChipyCo, Mondelez",
    ],
    current: true,
  },
  {
    title: "HVAC & BIM Engineer",
    company: "GRFN-EG",
    period: "June 2023 – June 2024",
    location: "Egypt",
    responsibilities: [
      "Designed HVAC systems and mechanical layouts using BIM best practices",
      "Maintained and enforced BIM templates and standards",
      "Performed energy audits and recommended efficiency improvements",
      "Coordinated models and documentation for international and high-profile projects",
    ],
    achievements: [
      "Reviewed and improved HVAC/BIM for Avenues Bahrain Mall",
      "Completed energy audit work for Sofitel Cairo Nile El Gezirah",
      "Developed coordinated mechanical BIM model for a DCP plant in NEOM",
    ],
    current: false,
  },
  {
    title: "BIM Mechanical Engineer",
    company: "Rowad Modern Engineering",
    period: "Nov 2022 – May 2023",
    location: "Egypt",
    responsibilities: [
      "Reviewed IFC mechanical models and executed clash coordination across disciplines",
      "Upgraded models to LOD 400 and prepared coordinated mechanical shop drawings",
      "Managed project materials and ensured adherence to delivery timelines",
    ],
    achievements: [
      "Delivered full value-engineering for a project cluster within one month",
      "Produced a coordinated Revit model for an underground piping system",
    ],
    current: false,
  },
  {
    title: "HVAC & BIM Engineer",
    company: "MAAP Electro-Mechanical Engineers",
    period: "Aug 2021 – Oct 2022",
    location: "Egypt",
    responsibilities: [
      "Designed HVAC systems and created 3D Revit models for new construction and renovation projects",
      "Performed clash detection, customized Revit families",
      "Produced LOD 500 documentation for renovation works",
      "Prepared mechanical shop drawings and supported on-site reviews",
    ],
    achievements: [
      "Delivered HVAC designs and BIM for I Park and Jaye Complex",
      "Upgraded models for KFSH renovations",
      "Completed mechanical shop drawings for New Giza University Phase 2",
    ],
    current: false,
  },
  {
    title: "Site Mechanical Engineer",
    company: "Encorp International",
    period: "Jul 2019 – Aug 2020",
    location: "Egypt",
    responsibilities: [
      "Reviewed technical designs and supervised subcontractor execution",
      "Ensured installation quality for chilled water, firefighting and HVAC plant systems",
      "Coordinated with consultant engineers for approvals and final inspections",
    ],
    achievements: [
      "Delivered firefighting network works for the Egyptian Civil Defense",
      "Implemented chilled water systems to meet specified performance criteria",
      "Supervised mechanical execution for the Octagon Project",
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wider uppercase">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 5 years of expertise in HVAC design and BIM engineering
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 ring-4 ring-background shadow-glow z-10" />

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className={`group overflow-hidden border-0 bg-card/80 backdrop-blur-sm shadow-card hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] ${exp.current ? "ring-2 ring-primary/50" : ""}`}>
                    {exp.current && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />
                    )}
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-primary font-medium">{exp.company}</p>
                        </div>
                        {exp.current && (
                          <span className="px-4 py-1.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium rounded-full shadow-lg animate-pulse">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                        <span className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4 text-primary" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full">
                          <MapPin className="w-4 h-4 text-secondary" />
                          {exp.location}
                        </span>
                      </div>

                      <div className="space-y-5">
                        <div className="p-4 rounded-xl bg-muted/30">
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                            <Briefcase className="w-4 h-4 text-primary" />
                            Responsibilities
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {exp.responsibilities.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 rounded-xl bg-secondary/10">
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                            <Award className="w-4 h-4 text-secondary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {exp.achievements.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for timeline alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
