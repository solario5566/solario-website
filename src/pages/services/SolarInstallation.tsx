import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import SEO from "@/components/SEO";

const SolarInstallation = () => {
  return (
    <PageLayout>
      <SEO title="Solar Panel Installation" description="Professional solar installation for Ontario homes and businesses. 25-year warranty, ESA licensed, free quotes." path="/services/solar-installation" />
      <div className="pt-[72px]">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-background py-16 md:py-20">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Solar Panel Installation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Professional solar installation for homes and businesses across Ontario. 
              Start generating clean energy and cut your electricity bills by up to 80%.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our certified installers design and install custom solar systems tailored to your 
                property's unique requirements. We handle everything from initial assessment and 
                permitting to installation and grid connection.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Using premium Tier-1 panels and inverters, we ensure maximum energy production 
                and long-term reliability. Every installation includes comprehensive monitoring 
                so you can track your savings in real-time.
              </p>

              {/* What You Get */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">What You Get</h2>
                <ul className="space-y-3">
                  {[
                    "Free site assessment and custom system design",
                    "Premium Tier-1 solar panels with 25-year warranty",
                    "Professional installation by ESA-licensed electricians",
                    "All permits, inspections, and grid connection handled",
                    "Real-time energy monitoring system",
                    "Assistance with rebate applications",
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
                    "Design & Permitting: 2–4 weeks",
                    "Installation: 1–3 days",
                    "Inspection & Activation: 1–2 weeks",
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
                  All installations include a 10-year workmanship warranty, 25-year panel performance 
                  warranty, and lifetime support. Our local team is always available for maintenance 
                  and questions.
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

export default SolarInstallation;
