import { Car, Users, HeartHandshake, Gavel, Baby, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      category: "Personal Injury",
      icon: Car,
      description:
        "We fight for maximum compensation when you've been injured due to someone else's negligence.",
      services: [
        { icon: Car, name: "Car Accidents" },
        { icon: HeartHandshake, name: "Slip & Fall" },
        { icon: Gavel, name: "Wrongful Death" },
        { icon: FileText, name: "Workplace Injuries" },
      ],
    },
    {
      category: "Family Law",
      icon: Users,
      description:
        "Compassionate guidance through family legal matters with your best interests at heart.",
      services: [
        { icon: FileText, name: "Divorce" },
        { icon: Baby, name: "Child Custody" },
        { icon: HeartHandshake, name: "Adoption" },
        { icon: Gavel, name: "Child Support" },
      ],
    },
  ];

  return (
    <section id="practice-areas" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
              How We Help
            </span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Practice <span className="text-primary">Areas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our firm focuses on two key areas of law, allowing us to provide 
            specialized expertise and exceptional results for our clients.
          </p>
        </div>

        {/* Practice Area Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {practiceAreas.map((area) => (
            <div
              key={area.category}
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors"
            >
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {area.category}
                  </h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {area.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <service.icon className="h-5 w-5 text-primary/70" />
                    <span className="text-sm font-medium text-foreground">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="outline"
                className="w-full border-primary/30 hover:bg-primary/10 group/btn"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Not sure if we can help with your case?
          </p>
          <Button asChild size="lg">
            <a href="#contact">Get a Free Case Evaluation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
