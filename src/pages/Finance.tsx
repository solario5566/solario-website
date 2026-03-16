import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CreditCard,
  Building2,
  BadgePercent,
  Wallet,
  Calendar,
  PiggyBank,
  Target,
  Check,
  ArrowRight,
  FileText,
  Headphones,
} from "lucide-react";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const whyFinancingMatters = [
  {
    icon: Wallet,
    title: "Lower upfront cost",
    description:
      "Financing lets you move forward without a large one-time payment. Spread the investment over time so going solar fits your budget.",
  },
  {
    icon: CreditCard,
    title: "Flexible payment structure",
    description:
      "Structured payment options can align with your cash flow. You get a predictable plan instead of an all-at-once expense.",
  },
  {
    icon: Calendar,
    title: "Start your project sooner",
    description:
      "You do not have to wait years to save the full amount. Financing can help you adopt solar now and start reducing your energy bills sooner.",
  },
  {
    icon: PiggyBank,
    title: "Keep capital for other priorities",
    description:
      "Preserve savings for emergencies or other goals. Solar becomes more accessible when you are not tying up all your liquidity in one project.",
  },
];

const financeOptions = [
  {
    icon: CreditCard,
    title: "Monthly payment plans",
    description:
      "Spread the cost of your system with affordable monthly payments. Many customers find that payments align with or are lower than what they were paying for electricity, so the switch can be cash-flow positive from day one. No large upfront investment required.",
  },
  {
    icon: Building2,
    title: "Flexible loan options",
    description:
      "We work with financing partners to offer loan options with a range of terms. Our team helps you explore what may fit your situation—including term length and payment structure—so you can choose a pathway that works for you.",
  },
  {
    icon: BadgePercent,
    title: "Rebates & incentive guidance",
    description:
      "Federal and provincial programs can reduce the net cost of your project. We help you understand what incentives may apply and how they can be combined with financing so you get the full benefit.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Consultation & project assessment",
    description:
      "We review your property, energy use, and goals. You receive a clear system design and quote. No obligation.",
  },
  {
    step: "2",
    title: "Review financing pathways",
    description:
      "We walk you through payment and financing options that may fit your project. You see what is available and how it could work for you.",
  },
  {
    step: "3",
    title: "Proposal & alignment",
    description:
      "Once you choose a direction, we align on terms and next steps. You know exactly what you are signing up for before we proceed.",
  },
  {
    step: "4",
    title: "Installation & completion",
    description:
      "Our team handles the install. After activation, you enjoy the benefits of solar with a payment plan that fits your budget.",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Avoid delaying your project",
    description:
      "Waiting to save the full amount can mean years of higher bills. Financing lets you act now and start saving sooner.",
  },
  {
    icon: Wallet,
    title: "Protect savings for other priorities",
    description:
      "Keep your cash for emergencies, renovations, or other goals. Solar becomes manageable without draining your reserves.",
  },
  {
    icon: FileText,
    title: "A clearer path to solar",
    description:
      "Structured payments remove guesswork. You know what you pay each month and how it fits with incentives and long-term value.",
  },
  {
    icon: Headphones,
    title: "Support from quote to completion",
    description:
      "Our team guides you through financing options and paperwork. You are not left to figure it out alone.",
  },
];

const faqs = [
  {
    question: "Do I need to pay everything upfront?",
    answer:
      "No. Financing options allow you to spread the cost over time with monthly payments. Many customers choose a payment plan that fits their budget so they can go solar without a large upfront sum.",
  },
  {
    question: "What types of financing options may be available?",
    answer:
      "We offer monthly payment plans and work with lending partners to provide loan options with a range of terms. During your consultation, we outline what may be available for your project and situation so you can make an informed choice.",
  },
  {
    question: "Can financing be combined with rebates or incentives?",
    answer:
      "Yes. Incentives can reduce the net cost of your system, and financing can cover the remaining amount. We help you understand how programs and payment options work together so you get the full benefit.",
  },
  {
    question: "Is financing available for different project sizes?",
    answer:
      "Financing options can apply to both residential and commercial projects. The exact options depend on your project scope and eligibility. We discuss what may fit your situation during the quote process.",
  },
  {
    question: "How do I know which option is right for me?",
    answer:
      "Our team walks you through the options in plain language. We explain payment structures, terms, and how incentives may apply so you can choose what makes the most sense for your budget and goals.",
  },
  {
    question: "What happens after I request a quote?",
    answer:
      "We schedule a consultation to assess your property and energy needs. You receive a tailored system design and quote, plus a clear explanation of financing pathways. From there, you decide whether to proceed—no pressure.",
  },
];

const Finance = () => {
  return (
    <PageLayout>
      <SEO
        title="Solar Financing Options"
        description="Flexible solar financing and payment plans for Ontario. Monthly payments, loan options, and rebate guidance. Make going solar more accessible."
        path="/finance"
      />

      <PageHero
        eyebrow="Financing"
        title="Make the switch to solar without the full upfront cost"
        subtitle="Flexible financing that makes clean energy more accessible."
        description="Explore flexible payment options, financing pathways, and available incentive guidance so you can start your solar project with a plan that fits your budget. We help you understand your options—no pressure, no obligation."
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-primary shrink-0" />
            Monthly payment plans
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-primary shrink-0" />
            Loan options
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-primary shrink-0" />
            Rebate guidance
          </span>
        </div>
      </PageHero>

      {/* 2. Why financing matters */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              Why financing matters
            </h2>
            <p className="text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto">
              Upfront cost is one of the main reasons people delay going solar. Financing removes that barrier.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyFinancingMatters.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 card-hover flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Financing options */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              Financing options
            </h2>
            <p className="text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto">
              We offer structured payment pathways and guidance so you can choose what works for your situation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {financeOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 card-hover flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground/80 text-center mt-8 max-w-xl mx-auto">
              Financing terms and eligibility vary. Final offers are provided after assessment. We will explain your options clearly before you commit.
            </p>
          </div>
        </div>
      </section>

      {/* 4. How the financing process works */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              How it works
            </h2>
            <p className="text-muted-foreground text-center mb-10 md:mb-12 max-w-xl mx-auto">
              From quote to payment plan—a clear, guided process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-card-foreground mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Benefits / why customers choose financing */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              Why customers explore financing
            </h2>
            <p className="text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto">
              A more accessible path to solar—built around real-world decision making.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 flex gap-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-card-foreground mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              Common questions about financing
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Clear answers so you can move forward with confidence.
            </p>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
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

      {/* 7. Closing CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              See what payment options may fit your project
            </h2>
            <p className="text-muted-foreground mb-8">
              Talk to our team about financing pathways that can help make your solar project more accessible. Get a tailored quote and learn what options may work for you.
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

export default Finance;
