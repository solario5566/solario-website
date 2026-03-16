import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ShieldCheck, FileCheck, Wrench, Headphones } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const whatYouGet = [
  "Home energy assessment and load calculation",
  "Premium cold-climate heat pump systems",
  "Professional installation by TSSA technicians",
  "Both heating and cooling in one system",
  "Integration with solar for maximum savings",
];

const timeline = [
  "Consultation & quote: 1–3 days",
  "Equipment ordering: 1–2 weeks",
  "Installation: 1–2 days",
];

const whySolario = [
  { icon: ShieldCheck, title: "TSSA-registered technicians", text: "Heat pump installations are carried out by qualified, registered technicians." },
  { icon: FileCheck, title: "Right system for your home", text: "We size and select equipment for Ontario's climate and your comfort goals." },
  { icon: Wrench, title: "Quality installation", text: "Proper placement, refrigerant charge, and electrical work for long-term performance." },
  { icon: Headphones, title: "Support after install", text: "Maintenance guidance and support so your system runs efficiently for years." },
];

const processSteps = [
  { step: "1", title: "Assessment & quote", text: "We evaluate your home's heating and cooling needs and recommend a suitable system size and type." },
  { step: "2", title: "Equipment & scheduling", text: "We order the equipment and schedule installation around your timeline." },
  { step: "3", title: "Installation", text: "Our technicians install the heat pump, test the system, and ensure heating and cooling performance." },
  { step: "4", title: "Handoff", text: "We walk you through operation, thermostat settings, and maintenance so you're set for the season." },
];

const HeatPumps = () => {
  return (
    <PageLayout>
      <SEO title="Heat Pump Systems" description="Efficient electric heating and cooling for Ontario homes. TSSA registered, rebates available, professional installation." path="/services/heat-pumps" />

      <PageHero
        eyebrow="Heat Pumps"
        title="Efficient electric heating and cooling for Ontario homes"
        subtitle="Year-round comfort with one system. Lower emissions, lower bills."
        description="Heat pumps move heat instead of creating it, delivering several times more energy than they consume. We install air-source and ground-source systems suited to Ontario's climate—and when paired with solar, you can heat and cool with clean, low-cost electricity."
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> TSSA registered</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Heating & cooling</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Solar compatible</span>
        </div>
      </PageHero>

      {/* Service overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              One system for heating and cooling
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Heat pumps are among the most efficient ways to heat and cool a home. They transfer heat between indoors and outdoors, delivering several times more heating or cooling energy than the electricity they use. Our TSSA-registered technicians install cold-climate air-source and ground-source systems designed for Ontario's winters and summers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When combined with solar, heat pumps can run largely on your own generation—reducing reliance on gas and grid power and cutting long-term energy costs.
            </p>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              Why choose a heat pump
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Efficiency, comfort, and electrification.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "High efficiency", desc: "Heat pumps deliver multiple units of heat or cooling per unit of electricity used." },
                { title: "Heating and cooling", desc: "One system for both seasons—no separate furnace and AC." },
                { title: "Lower emissions", desc: "Electric heating with a clean grid or solar reduces carbon footprint." },
                { title: "Long-term savings", desc: "Lower operating costs over time, especially with solar or favourable electricity rates." },
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
              Why choose Solario for heat pumps
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Qualified installers and a clear process.
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
              From assessment to comfort.
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
              Heat pump systems come with manufacturer warranties of 5–10 years on parts and compressor. Our installations include a 2-year workmanship warranty and ongoing maintenance support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Get a heat pump quote
            </h2>
            <p className="text-muted-foreground mb-8">
              We'll assess your home and recommend the right system.
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

export default HeatPumps;
