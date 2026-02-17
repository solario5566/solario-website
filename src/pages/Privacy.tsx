import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <PageLayout>
      <SEO title="Privacy Policy" description="Solario's privacy policy. Learn how we collect, use, and protect your personal information." path="/privacy" />
      <section className="pt-32 pb-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-foreground mb-6">
              Privacy Policy
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
              Information We Collect
            </h2>
            <p className="text-muted-foreground mb-6">
              We collect information you provide directly to us, such as when you request a quote, contact us for support, or sign up for our newsletter. This may include your name, email address, phone number, property address, and information about your energy needs.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-6">
              We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Information Sharing
            </h2>
            <p className="text-muted-foreground mb-6">
              We do not share, sell, rent, or trade your personal information with third parties for their commercial purposes. We may share your information with service providers who assist us in operating our business.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Data Security
            </h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational measures to protect the personal information we collect and process. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at info@solario.ca or call +1 (382) 342-0754.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
