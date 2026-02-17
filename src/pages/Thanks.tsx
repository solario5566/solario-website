import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const Thanks = () => {
  return (
    <PageLayout>
      <SEO title="Thank You" description="Your quote request has been received. We'll be in touch within 24 hours." path="/thanks" noindex />
      <section className="pt-28 pb-20 bg-navy min-h-[70vh] flex items-center">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thank You for Your Request!
            </h1>

            {/* Message */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We've received your quote request and our solar experts will get back to you within 24 hours. 
              In the meantime, feel free to give us a call if you have any urgent questions.
            </p>

            {/* Contact Info */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-3">Need immediate assistance?</p>
              <a
                href="tel:+13823420754"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                +1 (382) 342-0754
              </a>
            </div>

            {/* CTA */}
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Thanks;
