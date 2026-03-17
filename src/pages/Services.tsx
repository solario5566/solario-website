import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Sun, Zap, Battery, Flame, Wrench, Check, ArrowRight, ShieldCheck, Users, FileCheck, Headphones } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const services = [
  {
    id: "solar",
    icon: Sun,
    title: "Residential Solar",
    detailPath: "/services/solar-installation",
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
    id: "repair",
    icon: Wrench,
    title: "Solar Repair / Panel Upgrade",
    detailPath: "/services/solar-repair",
    description:
      "Diagnose issues, replace damaged components, and upgrade older solar panel systems for better safety, reliability, and performance.",
    features: [
      "Diagnosis of underperforming or faulty systems",
      "Replacement of damaged panels and components",
      "Upgrade paths for older systems",
      "Safety and performance assessments",
      "Work performed by licensed technicians",
    ],
    benefits: [
      "Restore system output and reliability",
      "Extend the life of your investment",
      "Improve safety and code compliance",
      "Professional assessment with no obligation",
    ],
  },
  {
    id: "ev",
    icon: Zap,
    title: "EV Charging Stations",
    detailPath: "/services/ev-charging",
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
    detailPath: "/services/battery-storage",
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
    detailPath: "/services/heat-pumps",
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
      <SEO
        title="Solar, EV Charging, Batteries & Heat Pumps"
        description="Full-service energy solutions for Ontario: solar installation, solar repair, EV charging, battery storage, and heat pumps. One team from quote to completion."
        path="/services"
      />
      <PageHero
        eyebrow="Our Services"
        title="Complete energy solutions for your home or business"
        subtitle="Solar, EV charging, battery storage, heat pumps, and solar repair."
        description="Professional installation with industry-leading warranties and full support from design through completion. We help Ontario homeowners and businesses choose the right system and get it installed correctly."
        compact
      />

      {/* Why choose Solario */}
      <section className="py-10 sm:py-14 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">
              Why choose Solario for your project
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: "Licensed & insured", text: "ESA licensed, TSSA registered, and fully insured for your peace of mind." },
                { icon: Users, title: "In-house teams", text: "Our own technicians handle every install—no subcontractors." },
                { icon: FileCheck, title: "Permits handled", text: "We manage design, permits, and inspections from start to finish." },
                { icon: Headphones, title: "Support after install", text: "Ongoing support for questions and performance." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              What we offer
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              From new solar installations to repairs, EV charging, battery storage, and heat pumps—we deliver the same standard of quality and support across every service.
            </p>
          </div>
          <div className="space-y-16 sm:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Service {index + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      What's included
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="hero" size="default" asChild>
                      <Link to="/contact" className="inline-flex items-center gap-2">
                        Get a Free Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    {service.detailPath && (
                      <Link to={service.detailPath} className="text-sm font-medium text-primary hover:underline">
                        Learn more
                      </Link>
                    )}
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-card border border-border rounded-xl p-6 sm:p-7">
                    <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4">
                      Key benefits
                    </h3>
                    <ul className="space-y-3.5">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </div>
                          <span className="text-foreground text-sm sm:text-base leading-relaxed">
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

      {/* Our approach */}
      <section className="py-12 sm:py-16 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              How we work with you
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              A clear process from first contact to completion.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { step: "1", title: "Consultation & assessment", text: "We review your property and goals and provide clear options." },
                { step: "2", title: "Design & proposal", text: "Tailored system design and transparent quote." },
                { step: "3", title: "Installation", text: "Our crew handles the install, permits, and inspections." },
                { step: "4", title: "Support", text: "Ongoing support and monitoring after activation." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
};

export default Services;
