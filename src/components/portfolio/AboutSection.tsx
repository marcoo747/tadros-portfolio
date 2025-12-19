import { Code2, Palette, Zap, Users, Award, Coffee } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "100%", label: "Dedication" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
  },
  {
    icon: Palette,
    title: "UI/UX Focused",
    description: "Creating beautiful interfaces with great user experience and accessibility in mind."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency to deliver the best user experience."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams and clients to bring ideas to life."
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Passionate Developer,{" "}
            <span className="text-gradient">Creative Problem Solver</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Turning ideas into reality through code and design
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-semibold">Frontend Developer</span> based in Cairo, Egypt, 
              with a passion for creating digital experiences that are both beautiful and functional. 
              I specialize in building modern web applications using 
              <span className="text-primary font-medium"> React</span>, 
              <span className="text-secondary font-medium"> TypeScript</span>, and 
              <span className="text-accent font-medium"> Tailwind CSS</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in engineering principles and a keen eye for design, I bridge 
              the gap between technical implementation and user-centric design. I believe that great 
              software should not only work flawlessly but also delight its users at every interaction.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="w-4 h-4 text-primary" />
                <span>Self-taught Developer</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Coffee className="w-4 h-4 text-accent" />
                <span>Coffee Enthusiast</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;