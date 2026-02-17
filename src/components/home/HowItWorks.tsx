import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneCall, ClipboardList, HardHat, Power } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Free Consultation",
    description: "We assess your energy needs and provide a custom quote.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Custom Design & Permits",
    description: "Our engineers design your system and handle all permits.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "Professional Installation",
    description: "Our certified team installs your system in just 3 Weeks or less.",
  },
  {
    icon: Power,
    step: "04",
    title: "Power On & Monitor",
    description: "Your system goes live and you start saving immediately.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-section-gray">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm mb-2">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-section-light-foreground mb-4">
            From Quote to Power in 4 Simple Steps
          </h2>
          <p className="text-muted-foreground">
            We make going solar easy. Our streamlined process gets you saving faster.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-section-light border border-gray-200 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Step Number & Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
                <step.icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-section-light-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">Start Your Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
