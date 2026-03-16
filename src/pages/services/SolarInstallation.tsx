import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ShieldCheck, FileCheck, Wrench, Headphones } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const whatYouGet = [
  "Free site assessment and custom system design",
  "Premium Tier-1 solar panels with 25-year warranty",
  "Professional installation by ESA-licensed electricians",
  "All permits, inspections, and grid connection handled",
  "Real-time energy monitoring system",
  "Assistance with rebate applications",
];

const timeline = [
  "Consultation & quote: 1–2 days",
  "Design & permitting: 2–4 weeks",
  "Installation: 1–3 days",
  "Inspection & activation: 1–2 weeks",
];

const whySolario = [
  { icon: ShieldCheck, title: "Licensed & compliant", text: "ESA-licensed work and full permit handling so your system is insurable and code-compliant." },
  { icon: FileCheck, title: "Clear process", text: "From assessment to activation, we manage design, permits, and inspections so you know what to expect." },
  { icon: Wrench, title: "Quality workmanship", text: "In-house installers, no subcontractors. Every installation meets our standards." },
  { icon: Headphones, title: "Support after install", text: "Ongoing support and monitoring guidance so you get the most from your system." },
];

const processSteps = [
  { step: "1", title: "Consultation & assessment", text: "We review your property, energy use, and goals and provide a clear system recommendation and quote." },
  { step: "2", title: "Design & permitting", text: "Custom system design and handling of all permits and utility paperwork." },
  { step: "3", title: "Installation", text: "Our crew installs your system. We coordinate inspections and grid connection." },
  { step: "4", title: "Activation & handoff", text: "Final inspection, utility approval, and handoff with monitoring access and support." },
];

const SolarInstallation = () => {
  return (
    <PageLayout>
      <SEO title="Solar Panel Installation" description="Professional solar installation for Ontario homes and businesses. 25-year warranty, ESA licensed, free quotes." path="/services/solar-installation" />

      <PageHero
        eyebrow="Solar Installation"
        title="Professional solar panel installation for Ontario homes and businesses"
        subtitle="Custom systems designed for your property and energy goals."
        description="From assessment and permitting to installation and grid connection, we handle the full process. Premium panels, professional installation, and long-term support so you can generate clean energy and reduce your electricity bills with confidence."
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> ESA licensed</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Permits handled</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> 25-year warranty</span>
        </div>
      </PageHero>

      {/* Service overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Tailored solar systems for your property
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our team designs and installs custom solar systems to match your roof, energy use, and goals. We use premium Tier-1 panels and inverters for long-term reliability and maximum production. From initial assessment through permitting, installation, and grid connection, we manage the process so you can focus on the result.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every installation includes real-time monitoring so you can track production and savings. We also help with rebate applications where applicable.
            </p>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              Why go solar with Solario
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Clear benefits for your home and your wallet.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Lower electricity bills", desc: "Generate your own power and reduce or eliminate grid dependence." },
                { title: "Increase property value", desc: "Solar installations are valued by homebuyers and appraisers." },
                { title: "Protect against rate hikes", desc: "Lock in lower effective energy costs for decades." },
                { title: "Clean energy", desc: "Reduce your carbon footprint with renewable power." },
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
              Why choose Solario for solar
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Professional execution from quote to completion.
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
              A clear process from first contact to power-on.
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
              All installations include a 10-year workmanship warranty and 25-year panel performance warranty. Our local team is available for questions and support for the life of your system.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready for a custom solar quote?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a free assessment and system design. No obligation.
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

export default SolarInstallation;
