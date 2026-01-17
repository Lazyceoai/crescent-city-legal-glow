import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-navy to-charcoal" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative fleur-de-lis elements */}
      <div className="absolute top-20 left-10 text-primary/10 text-6xl hidden lg:block">⚜</div>
      <div className="absolute bottom-20 right-10 text-primary/10 text-6xl hidden lg:block">⚜</div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-headline */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
              New Orleans Legal Excellence
            </span>
            <div className="h-px w-12 bg-primary/50" />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Fighting for{" "}
            <span className="text-gold-gradient">Justice</span>
            <br />
            You Deserve
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Dedicated personal injury and family law representation in the Greater New Orleans area. 
            We stand with you through life's most challenging moments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="#contact" className="flex items-center gap-2">
                Free Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
            >
              <a href="tel:+15045551234" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                (504) 555-1234
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-1">$50M+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Recovered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
