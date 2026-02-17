import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 pt-[72px]">
        <div className="max-w-2xl py-16 lg:py-24">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span>Trusted by 1,500+ Ontario homeowners</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 animate-slide-up">
            <span className="text-foreground">Stop Paying the Utility.</span>
            <br />
            <span className="text-primary">Start Owning Your Power.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Solario installs premium solar systems for Ontario homes and businesses. 
            We handle everything—from design to permits to installation—so you save money from day one with zero hassle.
          </p>

          {/* Trust Indicators */}
          <div className="space-y-3 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {[
              "Cut electricity bills by up to our 80%",
              "25-year performance warranty",
              "Professional installation in 2-3 Weeks, Not Months!",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="text-foreground/90">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get My Free Solar Quote</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
