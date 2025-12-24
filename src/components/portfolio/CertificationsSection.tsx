import { Award, GraduationCap, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useScrollReveal from "@/hooks/useScrollReveal";

const certifications = [
  {
    title: "Certified HVAC Designer (CHD)",
    issuer: "ASHRAE",
    year: "May 2025",
    description: "Professional certification demonstrating comprehensive expertise in HVAC system design, load calculations, equipment selection, and energy-efficient solutions according to ASHRAE standards.",
    highlights: [
      "Advanced HVAC system design",
      "Energy efficiency optimization",
      "ASHRAE standards compliance",
      "Professional recognition"
    ]
  },
];

const education = [
  {
    degree: "B.Sc. Mechanical Power Engineering",
    institution: "Faculty of Engineering, Shoubra - Benha University",
    year: "2014 - 2019",
    details: "Specialized in thermal systems, fluid mechanics, thermodynamics, and HVAC fundamentals. Developed strong foundation in mechanical engineering principles.",
  },
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Credentials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications & Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Professional credentials and academic foundation supporting engineering excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Professional Certification
              </h3>

              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card border-border overflow-hidden">
                  {/* Premium badge header */}
                  <div className="bg-gradient-to-r from-primary to-accent p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <Award className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg">
                            {cert.title}
                          </h4>
                          <p className="text-white/80 text-sm">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-white/80 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {cert.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Education */}
            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>

              {education.map((edu, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-medium mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {edu.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Additional info card */}
              <Card className="mt-4 bg-muted/30 border-border">
                <CardContent className="p-6">
                  <h4 className="font-medium text-foreground mb-3">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Committed to staying current with industry advancements through ongoing professional development and training.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['ASHRAE Webinars', 'BIM Training', 'Revit Updates', 'Industry Conferences'].map((item, i) => (
                      <span key={i} className="text-xs bg-background px-3 py-1.5 rounded-full border border-border text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
