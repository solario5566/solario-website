import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <PageLayout>
      <SEO title="Terms of Service" description="Terms of service for Solario Energy Inc. solar installation and energy services in Ontario." path="/terms" />
      <section className="pt-32 pb-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-navy-foreground/80">
              Last updated: February 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Agreement to Terms
            </h2>
            <p className="text-muted-foreground mb-6">
              By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground mb-6">
              Solario provides solar panel installation, EV charging station installation, battery storage solutions, and heat pump installation services for residential and commercial properties in Ontario, Canada.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Quotes and Pricing
            </h2>
            <p className="text-muted-foreground mb-6">
              All quotes provided are estimates based on the information available at the time. Final pricing may vary based on site conditions, permit requirements, and other factors discovered during the detailed assessment.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Warranties
            </h2>
            <p className="text-muted-foreground mb-6">
              We provide warranties on our installations as specified in your service agreement. Manufacturer warranties on equipment are separate and subject to the manufacturer's terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-6">
              To the maximum extent permitted by law, Solario shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at info@solario.ca or call +1 (382) 342-0754.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;
