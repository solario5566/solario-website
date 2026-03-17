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
  { step: "1", title: "Assessment & quote", text: "We evaluate your home's heating and cooling needs, load calculation, and goals and recommend a suitable system size and type. No obligation." },
  { step: "2", title: "Equipment & scheduling", text: "We order the equipment and schedule installation around your timeline. Permits or utility notifications are handled as required." },
  { step: "3", title: "Installation", text: "Our TSSA-registered technicians install the heat pump, set refrigerant charge, and test heating and cooling performance to spec." },
  { step: "4", title: "Handoff", text: "We walk you through operation, thermostat settings, and maintenance so you're set for the season. Support continues after install." },
];

const heatPumpFaqs = [
  {
    question: "How long does heat pump installation take?",
    answer:
      "From quote to handoff, most residential heat pump projects take a few weeks. Consultation and quote typically within 1–3 days; equipment ordering 1–2 weeks; installation 1–2 days depending on system type and complexity. We’ll give you a clear timeline during your assessment.",
  },
  {
    question: "Do heat pumps work in Ontario winters?",
    answer:
      "Yes. Cold-climate air-source heat pumps are designed to operate in Ontario’s winter temperatures. We specify equipment rated for our climate and size it so you have reliable heating when it’s coldest. Ground-source (geothermal) systems are also an option where site conditions allow.",
  },
  {
    question: "Can I pair a heat pump with solar?",
    answer:
      "Yes. Heat pumps run on electricity, so pairing with solar lets you heat and cool with clean, low-cost energy from your own panels. Many homeowners combine solar and a heat pump to maximize savings and reduce reliance on the grid and fossil fuels.",
  },
  {
    question: "What warranty and support do I get?",
    answer:
      "Heat pump systems come with manufacturer warranties of 5–10 years on parts and compressor. Our installations include a 2-year workmanship warranty and ongoing maintenance support. We’re TSSA registered and ESA licensed—see our certifications page.",
  },
  {
    question: "Is financing available for heat pump installation?",
    answer:
      "Yes. Financing options are available for heat pump projects, and rebates can reduce the net cost. We’ll outline payment options and incentive guidance during your quote. See our financing page for an overview.",
  },
];

const HeatPumps = () => {
  return (
    <PageLayout>
      <FAQSchema faqs={heatPumpFaqs} />
      <SEO
        title="Heat Pump Installation | Cold-Climate Ontario"
        description="Cold-climate heat pump installation in Ontario: TSSA-registered installers, heating and cooling in one system, solar-compatible. Free quote."
        path="/services/heat-pumps"
      />

      <PageHero
        eyebrow="Heat Pumps"
        title="Cold-climate heat pumps for Ontario homes"
        subtitle="One system for heating and cooling. Lower emissions, lower bills—and optional solar to power it."
        description="Solario’s TSSA-registered technicians install air-source and ground-source heat pumps built for Ontario winters and summers. Heat pumps move heat instead of creating it, delivering several times more heating or cooling than the electricity they use. Pair with solar and you can heat and cool with clean, low-cost electricity."
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> TSSA-registered installers</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Heating & cooling in one</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Solar compatible</span>
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
              A heat pump moves heat between indoors and outdoors instead of burning fuel—delivering several times more heating or cooling energy than the electricity it uses. Solario installs cold-climate air-source and ground-source heat pumps suited to Ontario’s winters and summers. We handle the home energy assessment, load calculation, equipment selection, and installation; our technicians are TSSA registered and ESA licensed so the work is done to code and to manufacturer specs.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              This service is for Ontario homeowners who want efficient electric heating and cooling, lower emissions, and the option to pair with <Link to="/services/solar-installation" className="text-primary hover:underline">solar</Link> for maximum savings. We serve both new builds and retrofits—whether you’re replacing an aging furnace and AC or adding a heat pump alongside existing equipment. When combined with solar, heat pumps can run largely on your own generation, reducing reliance on gas and grid power and cutting long-term energy costs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From quote to handoff, we take care of sizing, equipment ordering, installation, and testing. You get one system for heating and cooling, plus support and maintenance guidance so your system runs efficiently for years.
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

      {/* Decision support: use cases and when it pairs well */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              When a heat pump makes sense
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Common situations where a heat pump is worth considering—and how it pairs with solar and other upgrades.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Replacing furnace and AC:</strong> One heat pump can handle both heating and cooling, often with better efficiency than a separate furnace and air conditioner. We size for Ontario’s cold climate so you stay comfortable in winter.</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Going electric / reducing gas:</strong> If you want to move off fossil-fuel heating, a cold-climate heat pump is a leading option. Pair with <Link to="/services/solar-installation" className="text-primary hover:underline">solar</Link> to power heating and cooling with clean energy and lower bills.</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">New build or major renovation:</strong> Heat pumps are well suited to well-insulated new construction. We integrate with your design and ductwork or recommend ductless options where appropriate.</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Rebates and financing:</strong> Federal and provincial incentives can reduce the net cost. We help you understand what applies and work with <Link to="/finance" className="text-primary hover:underline">financing</Link> options so the project fits your budget.</span>
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
              Why choose Solario for heat pumps
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              TSSA-registered technicians, right-sized systems, and support from quote to completion.
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
              We are TSSA registered and ESA licensed. See our <Link to="/certifications" className="text-primary hover:underline">certifications</Link>. <Link to="/finance" className="text-primary hover:underline">Financing</Link> and rebate guidance available; <Link to="/contact" className="text-primary hover:underline">contact us</Link> for a free quote.
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
              From assessment to comfort—a clear, guided process.
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
              Common questions about heat pump installation
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Clear answers so you can decide if a heat pump is right for your home.
            </p>
            <Accordion type="single" collapsible className="space-y-3">
              {heatPumpFaqs.map((faq, index) => (
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
              Heat pump systems come with manufacturer warranties of 5–10 years on parts and compressor. Our installations include a 2-year workmanship warranty and ongoing maintenance support.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We are TSSA registered and ESA licensed—see our <Link to="/certifications" className="text-primary hover:underline">certifications</Link>. <Link to="/finance" className="text-primary hover:underline">Financing</Link> and rebate guidance available; <Link to="/contact" className="text-primary hover:underline">contact us</Link> for a free quote.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Get a heat pump quote
            </h2>
            <p className="text-muted-foreground mb-6">
              Tell us about your home, your current heating and cooling, and whether you’re considering solar. We’ll recommend the right system and give you a clear quote—no obligation. <Link to="/services/solar-installation" className="text-primary hover:underline">Solar</Link> and <Link to="/finance" className="text-primary hover:underline">financing</Link> options available.
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
