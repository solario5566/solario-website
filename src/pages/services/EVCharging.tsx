import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ShieldCheck, FileCheck, Wrench, Headphones } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";
import { FAQSchema } from "@/components/StructuredData";

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
  { step: "1", title: "Assessment & quote", text: "We review your electrical panel capacity, parking setup, and charging needs and provide a clear quote with no obligation." },
  { step: "2", title: "Equipment & permits", text: "We order the right charger and handle any permits or utility notifications required so the install is fully compliant." },
  { step: "3", title: "Installation", text: "Our ESA-licensed crew installs the charger, tests it, and walks you through app and usage." },
  { step: "4", title: "Handoff", text: "You get full access to your charger and our contact for any questions. Our workmanship warranty and support continue after install." },
];

const evChargingFaqs = [
  {
    question: "How long does EV charger installation take?",
    answer:
      "From quote to first charge, most home installations are completed within a few weeks. Consultation and quote can happen quickly; equipment ordering typically takes 3–5 days; installation is usually a half day to one day. Permits or panel upgrades can add time—we’ll give you a clear timeline during your assessment.",
  },
  {
    question: "Can I use my EV charger with solar or battery storage?",
    answer:
      "Yes. Solario can integrate your EV charger with new or existing solar and battery storage. You can charge from solar production, from stored battery power, or from the grid on a schedule that suits time-of-use rates. We design the system so everything works together safely and efficiently.",
  },
  {
    question: "Do I need a panel upgrade for a Level 2 charger?",
    answer:
      "It depends on your panel capacity and existing loads. During the assessment we review your electrical service and recommend the right charger size and any upgrades needed. Many homes can add a Level 2 charger without a panel upgrade; we’ll tell you upfront if one is required.",
  },
  {
    question: "What warranty and support do I get?",
    answer:
      "Chargers come with manufacturer warranties (typically 3–5 years). Solario backs our installation with a 2-year workmanship warranty and ongoing support for troubleshooting and questions. We’re ESA licensed and here for the life of your system.",
  },
  {
    question: "Is financing available for EV charger installation?",
    answer:
      "Yes. Financing options are available for EV charging projects, including when combined with solar or battery storage. Contact us for a free quote and we’ll outline payment options that may fit your project.",
  },
];

const EVCharging = () => {
  return (
    <PageLayout>
      <FAQSchema faqs={evChargingFaqs} />
      <SEO
        title="EV Charger Installation | Home & Business Ontario"
        description="Professional EV charger installation in Ontario: Level 2 and smart chargers, ESA-licensed installs, solar and battery integration. Free quote."
        path="/services/ev-charging"
      />

      <PageHero
        eyebrow="EV Charging"
        title="Professional EV charger installation for home and business"
        subtitle="Faster charging at home or at work—installed to code, with optional solar and battery integration."
        description="Solario’s licensed electricians design and install Level 2 and smart EV chargers that match your panel, your driving habits, and your property. We handle assessment, permits, and installation so you get reliable, code-compliant charging—and when you pair with solar or battery storage, you can power your EV with clean energy."
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> ESA-licensed installers</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Smart charging & app control</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Solar- and battery-ready</span>
        </div>
      </PageHero>

      {/* Service overview: what it is, who it's for, what Solario handles */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              What we offer and who it's for
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              A dedicated Level 2 EV charger delivers far more power than a standard outlet—refilling your battery in a few hours instead of overnight. Solario provides turnkey EV charging: we assess your electrical panel and parking setup, recommend the right charger and location, pull any required permits, and install the unit to Ontario electrical code. Our crews are ESA-licensed; we don’t subcontract the electrical work.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              This service is for Ontario homeowners who want fast, reliable charging at home, and for businesses that need workplace or fleet charging. We size the solution to your panel capacity and usage so you get the right fit—no oversell. If you have or are planning <Link to="/services/solar-installation" className="text-primary hover:underline">solar</Link> or <Link to="/services/battery-storage" className="text-primary hover:underline">battery storage</Link>, we can integrate your charger so you can charge on clean energy and, where applicable, use stored solar or time-of-use rates to your advantage.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From quote to first charge, we handle assessment, equipment, permits, and installation. You get a clean, code-compliant setup and support if you have questions later.
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

      {/* Decision support: use cases and when it pairs well */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              When an EV charger makes sense
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Common situations where a dedicated charger is worth it—and when it pairs well with other Solario services.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">New or current EV owner:</strong> You want to charge at home without waiting all night. A Level 2 charger is the standard for residential EV ownership and adds value to your property.</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Going solar or already have solar:</strong> Pair your charger with <Link to="/services/solar-installation" className="text-primary hover:underline">solar</Link> to fuel your car with clean energy and reduce grid draw. We can design both in one project or add a charger to an existing system.</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Adding battery storage:</strong> With <Link to="/services/battery-storage" className="text-primary hover:underline">battery storage</Link>, you can charge from stored solar or off-peak grid power. We size and integrate EV charging with your battery and solar setup.</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Workplace or fleet:</strong> Businesses need reliable charging for employees or fleet vehicles. We handle multi-unit installations, panel upgrades when needed, and coordination with your facility.</span>
              </li>
            </ul>
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
              ESA-licensed installation, permitting handled, and support from quote to completion.
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
            <p className="text-sm text-muted-foreground text-center mt-6 max-w-xl mx-auto">
              We are ESA licensed and follow Ontario electrical code on every install. See our <Link to="/certifications" className="text-primary hover:underline">licenses and certifications</Link>. <Link to="/finance" className="text-primary hover:underline">Financing</Link> is available for qualified projects.
            </p>
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

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
              Common questions about EV charger installation
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Clear answers so you can move forward with confidence.
            </p>
            <Accordion type="single" collapsible className="space-y-3">
              {evChargingFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-5 data-[state=open]:shadow-card-hover transition-all"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Warranty & support */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Warranty & support
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Chargers come with manufacturer warranties (typically 3–5 years). Our work is backed by a 2-year workmanship warranty and ongoing support for troubleshooting and questions.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We are ESA licensed—see our <Link to="/certifications" className="text-primary hover:underline">licenses and certifications</Link>. <Link to="/finance" className="text-primary hover:underline">Financing</Link> is available; <Link to="/contact" className="text-primary hover:underline">contact us</Link> for a free quote.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Get a quote for your EV charger
            </h2>
            <p className="text-muted-foreground mb-6">
              Tell us about your home or business, your EV, and whether you have or want solar or battery storage. We’ll recommend the right charger and give you a clear quote—no obligation. <Link to="/services/solar-installation" className="text-primary hover:underline">Solar</Link>, <Link to="/services/battery-storage" className="text-primary hover:underline">battery</Link>, and <Link to="/finance" className="text-primary hover:underline">financing</Link> options available.
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
