import { Scale, Shield, Users, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Scale,
      title: "Proven Results",
      description:
        "A track record of success in personal injury and family law cases across Louisiana.",
    },
    {
      icon: Shield,
      title: "Client-Focused",
      description:
        "Your needs come first. We provide personalized attention to every case we handle.",
    },
    {
      icon: Users,
      title: "Compassionate Care",
      description:
        "We understand the emotional challenges you face and guide you with empathy.",
    },
    {
      icon: Award,
      title: "Local Expertise",
      description:
        "Deep roots in New Orleans mean we understand local courts and communities.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary text-xl">⚜</span>
              <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                About the Firm
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Dedicated Advocacy When You{" "}
              <span className="text-primary">Need It Most</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Bonita Wilson Law is a trusted legal practice serving families and 
              individuals throughout the Greater New Orleans area. With over two 
              decades of experience, Attorney Bonita Wilson brings a unique combination 
              of aggressive advocacy and genuine compassion to every case.
            </p>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Whether you're facing the aftermath of an accident or navigating complex 
              family matters, we provide the skilled representation and personal attention 
              you deserve. Our firm is committed to achieving the best possible outcomes 
              while treating every client like family.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-navy-light rounded-lg overflow-hidden relative">
              {/* Placeholder for professional photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl text-primary">⚜</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Attorney Photo Placeholder
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-lg -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
