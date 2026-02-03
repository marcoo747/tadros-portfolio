import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const availability = "Open to roles in Egypt, KSA, and Remote positions";
  const contactEmail = "tadrwsm@gmail.com";
  const contactPhone = "+20 127 259 9987";
  const linkedinUrl = "https://www.linkedin.com/in/tadros-makram/";

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Interested in discussing your HVAC design or BIM coordination needs? I'm ready to help bring your project to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {/* Contact Methods */}
          <div className="space-y-6">
            {/* Email */}
            <Card className="group hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary to-primary/50" />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-3 break-all">{contactEmail}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => (window.location.href = `mailto:${contactEmail}`)}
                        className="bg-primary hover:bg-primary/90"
                      >
                        Send Email
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(contactEmail, "email")}
                      >
                        {copied === "email" ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="group hover:border-secondary/50 transition-all hover:shadow-lg overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-secondary to-secondary/50" />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-sm text-muted-foreground mb-3">{contactPhone}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => (window.location.href = `tel:${contactPhone}`)}
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      >
                        Call Now
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(contactPhone, "phone")}
                      >
                        {copied === "phone" ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card className="group hover:border-blue-500/50 transition-all hover:shadow-lg overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-500/50" />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground mb-3">Connect with me on LinkedIn</p>
                    <Button
                      size="sm"
                      asChild
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Profile
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="group hover:border-amber-500/50 transition-all hover:shadow-lg overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-amber-500 to-amber-500/50" />
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-sm text-muted-foreground mb-2">Cairo, Egypt</p>
                    <Badge className="bg-amber-500/20 text-amber-600">
                      {availability}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info / CTA */}
          <div className="space-y-6">
            {/* Why Hire */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Why Hire Me?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Proven Track Record:</strong> 6+ years delivering successful HVAC designs and BIM coordination on complex projects
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Energy Efficiency:</strong> Consistently deliver 20-28% energy savings through optimized system design and value engineering
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Seamless Coordination:</strong> Expert at resolving M/E/P clashes early, reducing construction delays and costs
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Certified Professional:</strong> CHD (ASHRAE) Certified with mastery of ASHRAE, SMACNA, and local building codes
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Detail-Oriented Documentation:</strong> LOD 400-500 shop drawings and specifications ready for construction
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Response time:</strong> I aim to respond to all inquiries within 24 hours. For urgent requests, calling is recommended.
                </p>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <Button
              onClick={() => (window.location.href = `mailto:${contactEmail}`)}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch Today
            </Button>
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            What I Can Help With
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "HVAC System Design & Specifications",
              "BIM Modeling (Revit MEP)",
              "MEP Coordination & Clash Detection",
              "Energy Audits & Performance Optimization",
              "Value Engineering & Cost Reduction",
              "Detailed Shop Drawing Development",
              "High-LOD (400-500) Documentation",
              "Data Center Cooling Systems",
              "Industrial HVAC Design",
              "Commercial & Residential HVAC",
              "Healthcare Facility Design",
              "Code Compliance Review & Support"
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
