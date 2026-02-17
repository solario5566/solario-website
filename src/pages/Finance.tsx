import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CreditCard, Building2, BadgePercent } from "lucide-react";
import SEO from "@/components/SEO";

const financeOptions = [
  {
    icon: CreditCard,
    title: "Pay Monthly",
    description:
      "Spread the cost with affordable monthly payments. Start saving on energy bills from day one while paying off your system over time. No large upfront investment required.",
  },
  {
    icon: Building2,
    title: "Loan Options",
    description:
      "Competitive financing through our lending partners with flexible terms from 5 to 15 years. Low interest rates and quick approvals make going solar easier than ever.",
  },
  {
    icon: BadgePercent,
    title: "Rebates & Incentives",
    description:
      "Take advantage of federal and provincial incentives to reduce your total cost. We help you navigate available programs including the Canada Greener Homes Grant.",
  },
];

const Finance = () => {
  return (
    <PageLayout>
      <SEO title="Financing Options" description="Affordable solar financing with monthly payments, competitive loans, and rebate assistance. Make the switch to solar easy." path="/finance" />
      <div className="pt-[72px]">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-background py-16 md:py-20">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Financing Options
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Make the switch to solar affordable with flexible payment plans, 
              competitive loans, and help accessing available rebates.
            </p>
          </div>
        </section>

        {/* Finance Cards */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {financeOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-secondary/50 border border-border rounded-lg p-8"
                >
                  <option.icon className="w-10 h-10 text-primary mb-4" />
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    {option.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground/70 text-center mt-8 max-w-xl mx-auto">
              Financing terms vary based on eligibility. Final offers provided after assessment.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Finance;
