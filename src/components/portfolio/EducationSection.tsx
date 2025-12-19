import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Education & Certification
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education Card */}
          <Card className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
            <div className="h-2 bg-hero-gradient" />
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    Bachelor's Degree in Mechanical Power Engineering
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    Faculty of Engineering, Shoubra
                  </p>
                  <p className="text-muted-foreground mb-3">
                    Benha University, Egypt
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2014 - 2019</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certification Card */}
          <Card className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
            <div className="h-2 bg-gradient-to-r from-secondary to-secondary/70" />
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    Certified HVAC Designer (CHD)
                  </h3>
                  <p className="text-secondary font-medium mb-2">
                    ASHRAE
                  </p>
                  <p className="text-muted-foreground mb-3">
                    American Society of Heating, Refrigerating and Air-Conditioning Engineers
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>May 2023</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
