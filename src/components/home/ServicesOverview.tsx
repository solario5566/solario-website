import { Link } from "react-router-dom";
import { SunDim, PlugZap, BatteryCharging, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: SunDim,
    title: "Residential Solar",
    badge: "Most Popular",
    description: "Power your home with clean, renewable energy and slash your electricity bills.",
    features: [
      "Eliminate 70-100% of electricity bill",
      "Add value to property",
      "Net metering credits",
    ],
  },
  {
    icon: Wrench,
    title: "Solar Repair / Panel Upgrade",
    description: "Repair underperforming systems, replace damaged components, and upgrade older panels.",
    features: [
      "Repair & troubleshooting",
      "Panel and component replacement",
      "Performance assessment",
    ],
  },
  {
    icon: PlugZap,
    title: "EV Charging Stations",
    description: "Charge your electric vehicle at home with professional installation.",
    features: [
      "Charge faster",
      "Smart scheduling",
      "Compatible with all EVs",
    ],
  },
  {
    icon: BatteryCharging,
    title: "Battery Storage",
    description: "Store excess solar energy and maintain power during outages.",
    features: [
      "Backup power",
      "Use solar 24/7",
      "Optimize energy usage",
    ],
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-section-light overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-0">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-primary font-semibold text-sm mb-2">Residential Solar Installation</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-section-light-foreground mb-3 sm:mb-4">
            Residential Solar Installation
          </h2>
          <p className="text-muted-foreground">
            We design and install high-efficiency residential solar panel systems across Ontario so homeowners can reduce electricity bills and take control of their energy.
          </p>
        </div>

        {/* Service Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-section-light border border-gray-200 rounded-lg p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {service.badge}
                </div>
              )}

              <div className="flex gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-section-light-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-section-light-foreground/70 flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-hover font-medium transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;