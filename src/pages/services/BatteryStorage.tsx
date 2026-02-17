import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import SEO from "@/components/SEO";

const BatteryStorage = () => {
  return (
    <PageLayout>
      <SEO title="Battery Storage Systems" description="Home battery storage with Tesla Powerwall and more. Store solar energy, backup power during outages. Ontario installation." path="/services/battery-storage" />
      <div className="pt-[72px]">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-background py-16 md:py-20">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Battery Storage Systems
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Store solar energy for use anytime—day or night. Gain energy independence 
              and backup power during outages.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Home battery systems let you store excess solar energy instead of sending it 
                back to the grid. Use your stored power in the evening, during peak rate hours, 
                or when the grid goes down.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We install industry-leading battery solutions including Tesla Powerwall and 
                other premium systems, sized to match your energy needs and goals.
              </p>

              {/* What You Get */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">What You Get</h2>
                <ul className="space-y-3">
                  {[
                    "Energy audit and battery sizing consultation",
                    "Premium lithium-ion battery systems",
                    "Seamless integration with new or existing solar",
                    "Automatic backup power during outages",
                    "Smart energy management via mobile app",
                    "Time-of-use optimization to maximize savings",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Typical Timeline</h2>
                <ul className="space-y-3">
                  {[
                    "Consultation & Quote: 1–2 days",
                    "Permitting & Equipment: 2–4 weeks",
                    "Installation: 1 day",
                    "Commissioning: Same day",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warranty */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Warranty & Support</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Battery systems include manufacturer warranties of 10+ years. Our installations 
                  are backed by a 10-year workmanship warranty and dedicated local support.
                </p>
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default BatteryStorage;
