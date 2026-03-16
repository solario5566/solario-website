import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ShieldCheck, FileCheck, Wrench, Headphones } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const whatYouGet = [
  "Site assessment and electrical panel evaluation",
  "Premium Level 2 chargers (up to 19.2 kW)",
  "Professional installation by licensed electricians",
  "Smart charging features with app control",
  "Integration with solar and battery systems",
];

const timeline = [
  "Consultation & quote: same day",
  "Equipment ordering: 3–5 days",
  "Installation: half day to 1 day",
];

const whySolario = [
  { icon: ShieldCheck, title: "Code-compliant installation", text: "Licensed electricians ensure safe, permitted installations that meet local codes and utility requirements." },
  { icon: FileCheck, title: "Right-sized solution", text: "We match charger capacity and location to your panel, usage, and future plans." },
  { icon: Wrench, title: "Clean installation", text: "Neat wiring, proper mounting, and clear labeling so your setup looks and performs professionally." },
  { icon: Headphones, title: "Support when you need it", text: "Troubleshooting and guidance so your charging experience stays reliable." },
];

const processSteps = [
  { step: "1", title: "Assessment & quote", text: "We review your panel capacity, parking setup, and charging needs and provide a clear quote." },
  { step: "2", title: "Equipment & permits", text: "We order the right charger and handle any permits or utility notifications required." },
  { step: "3", title: "Installation", text: "Our crew installs the charger, tests it, and walks you through app and usage." },
  { step: "4", title: "Handoff", text: "You get full access to your charger and our contact for any questions." },
];

const EVCharging = () => {
  return (
    <PageLayout>
      <SEO title="EV Charging Stations" description="Level 2 and DC fast EV charger installation for homes and businesses in Ontario. Smart charging with solar integration." path="/services/ev-charging" />

      <PageHero
        eyebrow="EV Charging"
        title="Home and business EV charger installation"
        subtitle="Convenient, code-compliant charging where you need it."
        description="Level 2 and DC fast charging solutions for homes and businesses. Our licensed electricians install chargers that fit your electrical system and your lifestyle—with optional solar integration so you can charge on clean energy."
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Licensed electricians</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Smart charging</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Solar-ready</span>
        </div>
      </PageHero>

      {/* Service overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Turnkey EV charging for home and business
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you need a single home charger or a commercial fleet solution, we handle site assessment, equipment selection, and installation. Our electricians ensure safe, code-compliant setups that work with your panel and your usage patterns.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Pair your charger with solar to power your vehicle with clean energy and reduce charging costs. We can integrate with new or existing solar and battery systems.
            </p>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              Why install a dedicated EV charger
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Convenience, speed, and control.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Faster charging at home", desc: "Level 2 chargers refill your battery in hours instead of overnight on a standard outlet." },
                { title: "Convenience", desc: "Wake up to a full charge every morning without relying on public stations." },
                { title: "Lower cost per mile", desc: "Home charging is typically cheaper than public rates, especially with time-of-use or solar." },
                { title: "Future-ready", desc: "A proper installation supports today's and tomorrow's EVs without rework." },
              ].map((b, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you get + Timeline */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                What you get
              </h2>
              <ul className="space-y-3">
                {whatYouGet.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Typical timeline
              </h2>
              <ul className="space-y-3">
                {timeline.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose Solario */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              Why choose Solario for EV charging
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Safe, permitted, and built to last.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whySolario.map((item, i) => (
                <div key={i} className="flex gap-4 bg-card border border-border rounded-xl p-6">
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

      {/* How it works */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              How it works
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              From quote to first charge.
            </p>
            <div className="space-y-6">
              {processSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
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

      {/* Warranty & support */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Warranty & support
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Chargers come with manufacturer warranties (typically 3–5 years). Our work is backed by a 2-year workmanship warranty and ongoing support for troubleshooting and questions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Get a quote for your EV charger
            </h2>
            <p className="text-muted-foreground mb-8">
              We'll assess your setup and recommend the right solution.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="inline-flex items-center gap-2">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
};

export default EVCharging;
