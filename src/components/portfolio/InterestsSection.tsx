import { Waves, Crown, Trophy, Mountain } from "lucide-react";

const interests = [
  { name: "Swimming", icon: Waves, color: "text-primary" },
  { name: "Chess", icon: Crown, color: "text-secondary" },
  { name: "Fantasy Premier League", icon: Trophy, color: "text-accent" },
  { name: "Hiking", icon: Mountain, color: "text-primary" },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-2">Beyond Work</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Interests & Hobbies
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group min-w-[140px]"
              >
                <div className="p-4 rounded-full bg-muted group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className={`w-8 h-8 ${interest.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <span className="text-foreground font-medium">{interest.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
