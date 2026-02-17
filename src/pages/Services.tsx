import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Sun, Zap, Battery, Flame, Check, ArrowRight } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const services = [
  {
    id: "solar",
    icon: Sun,
    title: "Residential Solar",
    description:
      "Transform your home into a power station with our premium solar panel installations. Designed and customized for Ontario homes, our systems maximize energy production and savings.",
    features: [
      "Custom system design tailored to your roof and energy needs",
      "Full installation by licensed professionals",
      "All permits and inspections handled",
      "25-year performance warranty included",
      "Net metering to earn credits from excess energy",
      "Monitoring app to track your production",
    ],
    benefits: [
      "Eliminate 70-100% of your electricity bill",
      "Increase your home value by up to 4%",
      "Protect against rising energy costs",
      "Reduce your carbon footprint significantly",
    ],
  },
  {
    id: "ev",
    icon: Zap,
    title: "EV Charging Stations",
    description:
      "Power your electric vehicle at home with professional Level 2 charger installation. Fast, convenient, and compatible with all major EV brands.",
    features: [
      "Level 2 charger installation (240V)",
      "Fast charging capability - full charge overnight",
      "Professional electrical work and permits",
      "Compatible with Tesla, Ford, Chevy, and all EVs",
      "Smart charging with scheduling options",
      "Indoor or outdoor installation options",
    ],
    benefits: [
      "Charge 5-10x faster than standard outlets",
      "Save money vs. public charging stations",
      "Convenient home charging overnight",
      "Increase your property value",
    ],
  },
  {
    id: "battery",
    icon: Battery,
    title: "Battery Storage",
    description:
      "Store excess solar energy for use when you need it most. Keep your home powered during outages and maximize your solar investment.",
    features: [
      "Premium battery systems (Tesla Powerwall, etc.)",
      "Seamless integration with solar panels",
      "Automatic backup during power outages",
      "Smart energy management system",
      "Expandable capacity for future needs",
      "Professional installation and setup",
    ],
    benefits: [
      "Backup power during grid outages",
      "Use stored solar energy at night",
      "Reduce reliance on the grid",
      "Maximize your energy independence",
    ],
  },
  {
    id: "heatpump",
    icon: Flame,
    title: "Heat Pumps",
    description:
      "Efficient heating and cooling for year-round comfort. Heat pumps use less energy than traditional systems while keeping your home comfortable in any season.",
    features: [
      "High-efficiency heating and cooling",
      "Air source and ground source options",
      "Professional installation by certified technicians",
      "Quiet operation and even temperature distribution",
      "Compatible with existing ductwork",
      "Smart thermostat integration",
    ],
    benefits: [
      "Cut heating costs by 50-70%",
      "Government rebates available (up to $7,100)",
      "Year-round comfort with one system",
      "Environmentally friendly heating",
    ],
  },
];

const Services = () => {
  return (
    <PageLayout>
      <SEO title="Our Services" description="Complete energy solutions: solar panels, EV chargers, battery storage, and heat pumps for Ontario homes and businesses." path="/services" />
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-navy">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-muted-foreground">
              Complete energy solutions for your home or business. From solar panels to EV chargers, we deliver professional installation with industry-leading warranties.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-3">
                      What's Included
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="hero" size="default" asChild>
                    <Link to="/contact" className="inline-flex items-center gap-2">
                      Get a Free Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Benefits Card */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-5">
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </div>
                          <span className="text-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
};

export default Services;
