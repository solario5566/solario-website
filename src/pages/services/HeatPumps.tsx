import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import SEO from "@/components/SEO";

const HeatPumps = () => {
  return (
    <PageLayout>
      <SEO title="Heat Pump Systems" description="Efficient electric heating and cooling for Ontario homes. TSSA registered, rebates available, professional installation." path="/services/heat-pumps" />
      <div className="pt-[72px]">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-background py-16 md:py-20">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Heat Pump Systems
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Efficient electric heating and cooling for year-round comfort. 
              Reduce your reliance on gas and lower your energy bills.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Heat pumps are one of the most efficient ways to heat and cool your home. 
                They transfer heat rather than generating it, delivering 3–4 times more energy 
                than they consume.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                When paired with solar panels, heat pumps can provide virtually free heating 
                and cooling. Our TSSA-registered technicians install air-source and ground-source 
                systems for optimal performance in Ontario's climate.
              </p>

              {/* What You Get */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">What You Get</h2>
                <ul className="space-y-3">
                  {[
                    "Home energy assessment and load calculation",
                    "Premium cold-climate heat pump systems",
                    "Professional installation by TSSA technicians",
                    "Both heating and cooling in one system",
                    "Integration with solar for maximum savings",
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
                    "Consultation & Quote: 1–3 days",
                    "Equipment ordering: 1–2 weeks",
                    "Installation: 1–2 days",
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
                  Heat pump systems come with manufacturer warranties of 5–10 years on parts 
                  and compressor. Our installations include a 2-year workmanship warranty and 
                  ongoing maintenance support.
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

export default HeatPumps;
