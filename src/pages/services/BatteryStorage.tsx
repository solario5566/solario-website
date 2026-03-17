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
  { step: "1", title: "Consultation & sizing", text: "We review your energy use, solar (if any), and backup needs to recommend the right system size—no oversell." },
  { step: "2", title: "Design & permitting", text: "System design and any required permits and utility notifications. We coordinate so the process stays smooth." },
  { step: "3", title: "Installation", text: "Our crew installs the battery, integrates with solar/inverter, and configures backup loads to code." },
  { step: "4", title: "Commissioning & handoff", text: "Testing, app setup, and a clear explanation of how to use and monitor your system. We’re here for support after install." },
];

const batteryStorageFaqs = [
  {
    question: "How long does battery storage installation take?",
    answer:
      "From consultation to commissioning, most home battery projects take a few weeks to a couple of months. Consultation and quote typically happen within 1–2 days; design and permitting can take 2–4 weeks depending on your utility and municipality; installation is usually one day, with commissioning the same day. We’ll give you a clear timeline during your assessment.",
  },
  {
    question: "Can I add battery storage to my existing solar system?",
    answer:
      "Yes. Solario integrates battery storage with existing solar installations. We assess your current inverter and electrical setup to recommend compatible equipment and any upgrades needed. Many systems can add storage without replacing existing solar.",
  },
  {
    question: "What size battery do I need?",
    answer:
      "It depends on your goals: backup hours, how much solar you have, and whether you want to maximize peak shaving or self-consumption. We review your usage and production and recommend a size that matches your priorities without oversizing. There’s no one-size-fits-all; we design for your situation.",
  },
  {
    question: "What warranty and support come with battery storage?",
    answer:
      "Battery systems include manufacturer warranties of 10+ years. Solario installations are backed by a 10-year workmanship warranty and dedicated support for monitoring and questions. We’re ESA licensed and here for the life of your system.",
  },
  {
    question: "Is financing available for battery storage?",
    answer:
      "Yes. Financing options are available for battery storage, including when combined with solar. We'll outline payment options during your quote. See our financing page for an overview.",
  },
];

const BatteryStorage = () => {
  return (
    <PageLayout>
      <FAQSchema faqs={batteryStorageFaqs} />
      <SEO
        title="Battery Storage | Home & Solar Backup Ontario"
        description="Home battery storage in Ontario: backup power, solar storage, time-of-use optimization. Tesla Powerwall and premium systems. ESA-licensed installation. Free quote."
        path="/services/battery-storage"
      />

      <PageHero
        eyebrow="Battery Storage"
        title="Home battery storage: backup power and smarter energy use"
        subtitle="Store solar for night and peak rates. Keep essential loads on during outages. One system, multiple benefits."
        description="Solario installs premium lithium-ion battery systems—including Tesla Powerwall and other leading options—sized to your consumption, solar production, and backup goals. Store excess solar, reduce demand during peak rates, and keep critical loads running when the grid goes down."
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Backup power</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Solar integration</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Time-of-use optimization</span>
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
              A home battery system stores electricity—from your <Link to="/services/solar-installation" className="text-primary hover:underline">solar panels</Link> or the grid—so you can use it when you need it most: at night, during peak rate periods, or when the grid fails. Solario designs, permits, and installs premium lithium-ion systems (including Tesla Powerwall and other leading options), integrated with your existing or new solar and electrical panel. We size storage to your consumption, solar production, and backup goals so you get the right fit without oversizing.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              This service is for Ontario homeowners and businesses who want backup power, better use of solar production, or protection from peak demand charges. It’s ideal if you already have solar and want to add storage, or if you’re planning a new solar-plus-storage project. We handle energy audits, system design, permitting, installation, and commissioning—and we can integrate with <Link to="/services/ev-charging" className="text-primary hover:underline">EV charging</Link> so you can charge your car from stored or solar energy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Smart energy management (via app and inverter settings) lets you optimize when the battery charges and discharges around time-of-use rates and solar production, so you get more value from every kilowatt-hour.
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

      {/* Decision support: use cases and when it pairs well */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              When battery storage makes sense
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Common situations where adding storage is worth it—and how it pairs with other Solario services.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">You already have solar:</strong> A battery lets you use more of your production at night and during peak rates instead of exporting it. You get better value from your existing system and backup power when the grid fails.</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">You’re planning solar:</strong> Going solar and storage together often simplifies design and permits. We can size both to your goals and install in one coordinated project.</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Outages or unreliable grid:</strong> If you need backup for essentials—lights, fridge, medical equipment—we size the battery and designate backup loads so you’re covered without overspending.</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">EV + solar + storage:</strong> Pair storage with <Link to="/services/ev-charging" className="text-primary hover:underline">EV charging</Link> and solar to charge your car from stored or solar energy and further reduce grid draw.</span>
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
              Why choose Solario for battery storage
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Safe, permitted installation; right-sized design; support from quote to completion.
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
              We are ESA licensed and install to Ontario electrical code. See our <Link to="/certifications" className="text-primary hover:underline">certifications</Link>. <Link to="/finance" className="text-primary hover:underline">Financing</Link> is available for qualified projects.
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
              From assessment to powered-up storage—a clear, guided process.
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
              Common questions about battery storage
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Clear answers so you can decide if storage is right for you.
            </p>
            <Accordion type="single" collapsible className="space-y-3">
              {batteryStorageFaqs.map((faq, index) => (
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
              Battery systems include manufacturer warranties of 10+ years. Our installations are backed by a 10-year workmanship warranty and dedicated local support for monitoring and questions.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pair storage with <Link to="/services/solar-installation" className="text-primary hover:underline">solar</Link> and <Link to="/services/ev-charging" className="text-primary hover:underline">EV charging</Link> for maximum value. We are ESA licensed—see our <Link to="/certifications" className="text-primary hover:underline">certifications</Link>. <Link to="/finance" className="text-primary hover:underline">Financing</Link> and <Link to="/contact" className="text-primary hover:underline">free quotes</Link> available.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Explore battery storage for your home
            </h2>
            <p className="text-muted-foreground mb-6">
              Tell us about your solar (if any), your backup goals, and your usage. We’ll recommend the right size and give you a clear quote—no obligation. <Link to="/services/solar-installation" className="text-primary hover:underline">Solar</Link>, <Link to="/services/ev-charging" className="text-primary hover:underline">EV charging</Link>, and <Link to="/finance" className="text-primary hover:underline">financing</Link> options available.
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
