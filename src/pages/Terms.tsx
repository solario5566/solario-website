import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";

const sections = [
  {
    title: "Agreement to Terms",
    content:
      "By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.",
  },
  {
    title: "Our Services",
    content:
      "Solario provides solar panel installation, EV charging station installation, battery storage solutions, and heat pump installation services for residential and commercial properties in Ontario, Canada.",
  },
  {
    title: "Quotes and Pricing",
    content:
      "All quotes provided are estimates based on the information available at the time. Final pricing may vary based on site conditions, permit requirements, and other factors discovered during the detailed assessment.",
  },
  {
    title: "Warranties",
    content:
      "We provide warranties on our installations as specified in your service agreement. Manufacturer warranties on equipment are separate and subject to the manufacturer's terms and conditions.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Solario shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.",
  },
];

const Terms = () => {
  return (
    <PageLayout>
      <SEO
        title="Terms of Service"
        description="Terms governing your use of Solario's website and services. Quotes, warranties, and contact information."
        path="/terms"
      />
      <PageHero
        title="Terms of Service"
        subtitle="Last updated: February 2025"
        compact
      />

      <article className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <section
                  key={index}
                  className="border-b border-border pb-12 last:border-b-0 last:pb-0"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-14 pt-10 border-t border-border">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 tracking-tight">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <div className="bg-card border border-border rounded-xl p-6 max-w-md">
                <p className="text-sm text-muted-foreground mb-2">Email</p>
                <a
                  href="mailto:info@solario.ca"
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  info@solario.ca
                </a>
                <p className="text-sm text-muted-foreground mt-4 mb-2">Phone</p>
                <a
                  href="tel:+13823420754"
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  +1 (382) 342-0754
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
};

export default Terms;
