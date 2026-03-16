import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ShieldCheck, FileCheck, Wrench, Headphones } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const whatYouGet = [
  "Energy audit and battery sizing consultation",
  "Premium lithium-ion battery systems",
  "Seamless integration with new or existing solar",
  "Automatic backup power during outages",
  "Smart energy management via mobile app",
  "Time-of-use optimization to maximize savings",
];

const timeline = [
  "Consultation & quote: 1–2 days",
  "Permitting & equipment: 2–4 weeks",
  "Installation: 1 day",
  "Commissioning: same day",
];

const whySolario = [
  { icon: ShieldCheck, title: "Safe, permitted installation", text: "Battery systems are installed to code with proper disconnects and safety clearances." },
  { icon: FileCheck, title: "Right-sized for your needs", text: "We size storage to your consumption, solar production, and backup goals—no oversell." },
  { icon: Wrench, title: "Clean integration", text: "We integrate with your existing or new solar and electrical system for a single, coherent setup." },
  { icon: Headphones, title: "Ongoing support", text: "Local team for monitoring, settings, and questions so you get the most from your system." },
];

const processSteps = [
  { step: "1", title: "Consultation & sizing", text: "We review your energy use, solar (if any), and backup needs to recommend the right system size." },
  { step: "2", title: "Design & permitting", text: "System design and any required permits and utility notifications." },
  { step: "3", title: "Installation", text: "Our crew installs the battery, integrates with solar/inverter, and configures backup loads." },
  { step: "4", title: "Commissioning & handoff", text: "Testing, app setup, and a clear explanation of how to use and monitor your system." },
];

const BatteryStorage = () => {
  return (
    <PageLayout>
      <SEO title="Battery Storage Systems" description="Home battery storage with Tesla Powerwall and more. Store solar energy, backup power during outages. Ontario installation." path="/services/battery-storage" />

      <PageHero
        eyebrow="Battery Storage"
        title="Home battery storage for energy resilience and smarter use"
        subtitle="Store solar energy. Power through outages. Optimize when you use the grid."
        description="Battery systems let you store excess solar for use at night or during peak rates, and provide backup power when the grid goes down. We install industry-leading solutions sized to your energy needs and goals."
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Backup power</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Solar integration</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Smart management</span>
        </div>
      </PageHero>

      {/* Service overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Use your energy when it matters most
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Home battery systems store excess solar instead of sending it back to the grid. Use that stored power in the evening, during peak rate periods, or when the grid fails. We install premium lithium-ion systems—including Tesla Powerwall and other leading options—sized to your consumption and backup priorities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Smart energy management lets you optimize charging and discharging around time-of-use rates and solar production, so you get more value from every kilowatt-hour.
            </p>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              Why add battery storage
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              More control, resilience, and value from your energy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Backup during outages", desc: "Keep essential loads running when the grid goes down, without a generator." },
                { title: "Use solar day and night", desc: "Store excess production and use it when the sun isn't shining." },
                { title: "Peak shaving", desc: "Reduce demand during high-rate periods and lower your bills." },
                { title: "Energy independence", desc: "Less reliance on the grid and better preparedness for rate changes." },
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
              Why choose Solario for battery storage
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Sizing, integration, and support done right.
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
              From assessment to powered-up storage.
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
              Battery systems include manufacturer warranties of 10+ years. Our installations are backed by a 10-year workmanship warranty and dedicated local support for monitoring and questions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Explore battery storage for your home
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a sizing consultation and quote. No obligation.
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

export default BatteryStorage;
