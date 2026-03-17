import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEO from "@/components/SEO";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you request a quote, contact us for support, or sign up for our newsletter. This may include your name, email address, phone number, property address, and information about your energy needs.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not share, sell, rent, or trade your personal information with third parties for their commercial purposes. We may share your information with service providers who assist us in operating our business.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect the personal information we collect and process. However, no method of transmission over the Internet is 100% secure.",
  },
];

const Privacy = () => {
  return (
    <PageLayout>
      <SEO
        title="Privacy Policy"
        description="How Solario collects, uses, and protects your information when you use our website and request quotes or contact us."
        path="/privacy"
      />
      <PageHero
        title="Privacy Policy"
        subtitle="Last updated: March 2026"
        compact
      />

      <article className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto leading-relaxed">
              We take your privacy seriously. This policy explains how we collect, use, and protect your information when you use our website and services.
            </p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <section key={index} className="border-b border-border pb-12 last:border-b-0 last:pb-0">
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
                If you have any questions about this Privacy Policy, please contact us.
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

export default Privacy;
