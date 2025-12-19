import { Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    title: "Certified HVAC Designer (CHD)",
    issuer: "ASHRAE",
    year: "2022",
    description: "Professional certification demonstrating expertise in HVAC system design and analysis.",
  },
];

const education = [
  {
    degree: "B.Sc. Mechanical Power Engineering",
    institution: "Cairo University - Faculty of Engineering",
    year: "2017",
    grade: "Good",
    details: "Specialized in thermal systems, fluid mechanics, and HVAC fundamentals.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Certifications */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Certifications
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full" />
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-primary font-medium">
                            {cert.issuer} • {cert.year}
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Education
                </h2>
                <div className="w-16 h-1 bg-primary rounded-full" />
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-primary font-medium">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Graduated: {edu.year} • Grade: {edu.grade}
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            {edu.details}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
