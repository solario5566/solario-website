import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const Thanks = () => {
  return (
    <PageLayout>
      <SEO
        title="Thank You"
        description="Your request has been received. Our team will review your submission and get back to you soon."
        path="/thanks"
        noindex
      />

      <section className="pt-24 sm:pt-28 pb-20 sm:pb-24 md:pb-28 bg-navy min-h-[70vh] flex items-center overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-xl mx-auto text-center">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 sm:mb-8"
              aria-hidden
            >
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
              Thank You
            </h1>

            <p className="text-muted-foreground mb-2 leading-relaxed text-base sm:text-lg">
              Your request has been received. Our team will review your submission and get back to you soon.
            </p>
            <p className="text-muted-foreground mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
              We appreciate your interest in Solario.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="w-full sm:w-auto min-h-[48px] touch-manipulation" asChild>
                <Link to="/" className="inline-flex items-center gap-2">
                  Return Home
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto min-h-[48px] touch-manipulation" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Thanks;
