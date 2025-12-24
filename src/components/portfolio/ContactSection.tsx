import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, Loader2, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import useScrollReveal from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS integration - replace with your actual service details
      await emailjs.sendForm(
        'service_portfolio', // Replace with your EmailJS service ID
        'template_contact',  // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY'    // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
      toast.success("Message sent successfully. I'll respond within 24 hours.");

      setTimeout(() => {
        setFormData({ name: "", email: "", company: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      // Fallback - open mailto link
      const mailtoLink = `mailto:tadrwsm@gmail.com?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      toast.info("Opening your email client...");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Contact</span>
              <div className="w-12 h-[2px] bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Available for consulting opportunities, project collaborations, and full-time positions.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:tadrwsm@gmail.com"
                      className="group flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                        <p className="text-foreground font-medium">tadrwsm@gmail.com</p>
                      </div>
                    </a>

                    <a
                      href="tel:+201272599987"
                      className="group flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Phone</p>
                        <p className="text-foreground font-medium">+20 127 259 9987</p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/tadros-makram/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">LinkedIn</p>
                        <p className="text-foreground font-medium">tadros-makram</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Location</p>
                        <p className="text-foreground font-medium">Cairo, Egypt</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability note */}
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Currently Available</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Open to consulting, contract work, and permanent positions in HVAC design and BIM coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Send a Message
                </h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company / Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company or organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Project Details <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project requirements, timeline, and how I can help..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-md hover:shadow-lg transition-all duration-300"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Message Sent Successfully
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    I typically respond within 24 hours during business days.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
