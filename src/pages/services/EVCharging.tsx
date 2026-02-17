import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import SEO from "@/components/SEO";

const EVCharging = () => {
  return (
    <PageLayout>
      <SEO title="EV Charging Stations" description="Level 2 and DC fast EV charger installation for homes and businesses in Ontario. Smart charging with solar integration." path="/services/ev-charging" />
      <div className="pt-[72px]">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-background py-16 md:py-20">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              EV Charging Stations
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Level 2 and DC fast charging solutions for homes and businesses. 
              Charge your electric vehicle conveniently and cost-effectively.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you need a home charging station or a commercial fleet solution, 
                we provide turnkey EV charging installations. Our certified electricians 
                ensure safe, code-compliant installations optimized for your electrical system.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Pair your charger with solar panels to power your vehicle with clean, 
                free energy from the sun—maximizing your savings and reducing your carbon footprint.
              </p>

              {/* What You Get */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">What You Get</h2>
                <ul className="space-y-3">
                  {[
                    "Site assessment and electrical panel evaluation",
                    "Premium Level 2 chargers (up to 19.2 kW)",
                    "Professional installation by licensed electricians",
                    "Smart charging features with app control",
                    "Integration with solar and battery systems",
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
                    "Consultation & Quote: Same day",
                    "Equipment ordering: 3–5 days",
                    "Installation: Half day to 1 day",
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
                  All chargers come with manufacturer warranties (typically 3–5 years) plus our 
                  2-year workmanship warranty. We provide ongoing support and troubleshooting.
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

export default EVCharging;
