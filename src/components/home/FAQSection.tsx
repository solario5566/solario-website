import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const homeFaqs = [
  {
    question: "How much can I save with solar panels?",
    answer: "Most Ontario homeowners save 50-70% on their electricity bills. The exact savings depend on your energy usage, roof size, and sun exposure. During your free consultation, we'll provide a personalized savings estimate based on your specific situation.",
  },
  {
    question: "Does solar work in Canadian winters?",
    answer: "Yes! Solar panels actually work more efficiently in cold temperatures. While winter days are shorter, modern panels still generate significant power. Plus, snow reflects light and increases generation. Our systems are designed specifically for Ontario's climate.",
  },
  {
    question: "How long does installation take?",
    answer: "Most residential installations are completed in 2-4 Weeks. The entire process from consultation to power-on typically takes 4-8 weeks, with most of that time spent on permits and utility approvals, which we handle for you.",
  },
  {
    question: "What warranties do you offer?",
    answer: "We offer a comprehensive 25-year performance warranty covering your panels, inverter, and workmanship. This means you're protected for decades, with guaranteed power production levels and free repairs if anything goes wrong.",
  },
  {
    question: "What financing options are available?",
    answer: "We offer multiple financing options including $0-down loans, lease options, and cash purchases. Many customers qualify for payments lower than their current electricity bill, making solar immediately affordable.",
  },
  {
    question: "What happens during a power outage?",
    answer: "Standard grid-tied systems will shut off during outages for safety. However, if you add battery storage, you can maintain power during outages. We offer Tesla Powerwall and other battery solutions for complete energy independence.",
  },
  {
    question: "Do I need a new roof before installing solar?",
    answer: "If your roof is older than 15 years, we recommend having it inspected first. Solar panels last 25+ years, so you want your roof in good condition. We can coordinate with roofing contractors if needed.",
  },
  {
    question: "How do I know if my home is suitable?",
    answer: "Most homes with a south, east, or west-facing roof with minimal shading are suitable for solar. During your free consultation, we'll assess your roof's orientation, angle, and condition to determine the optimal system for your home.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-section-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left - Header */}
          <div className="lg:col-span-2">
            <p className="text-primary font-semibold text-sm mb-2">Frequently Asked Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-section-light-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-6">
              Everything you need to know about going solar with Solario.
            </p>
            <Button variant="default" size="default" asChild>
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>

          {/* Right - Accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-3">
              {homeFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-section-gray border border-gray-200 rounded-lg px-5 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-section-light-foreground hover:text-primary hover:no-underline py-4 min-h-[48px] flex items-center touch-manipulation">
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
      </div>
    </section>
  );
};

export default FAQSection;
