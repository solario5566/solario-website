import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import SEO from "@/components/SEO";

const serviceAreas = [
  "All of GTA",
  "Toronto",
  "North York",
  "Scarborough",
  "Etobicoke",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Oakville",
  "Burlington",
  "Milton",
  "Ajax",
  "Pickering",
  "Whitby",
  "Oshawa",
  "Guelph",
  "Kitchener",
  "Waterloo",
  "Cambridge",
  "Hamilton",
  "Georgetown",
  "Fergus",
  "Elora",
  "Rockwood",
  "Acton",
  "Erin",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isDev = import.meta.env.DEV;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const params: Record<string, string> = {};
    formData.forEach((value, key) => {
      params[key] = value instanceof File ? "" : String(value);
    });
    const body = new URLSearchParams(params).toString();

    setIsSubmitting(true);
    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (res.ok || res.status === 302) {
        window.location.href = "/thanks";
        return;
      }
      if (isDev) {
        window.location.href = "/thanks";
        return;
      }
      setSubmitError("We couldn't send your message right now. Please try again in a moment or call us directly.");
    } catch {
      if (isDev) {
        window.location.href = "/thanks";
        return;
      }
      setSubmitError("We couldn't send your message right now. Please try again in a moment or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <SEO
        title="Contact Us"
        description="Request a free solar quote for your Ontario home or business. Our team responds within 24 hours."
        path="/contact"
      />

      <PageHero
        title="Request Your Free Quote"
        subtitle="Get a personalized solar assessment for your home or business."
        description="Our team will design the right system for your needs and respond within 24 hours."
        compact
      />

      {/* Contact Form Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Form */}
            <div className="lg:col-span-2 min-w-0">
              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 md:p-8">
                <p className="text-sm text-muted-foreground mb-5 sm:mb-6">
                  Complete the form below and we'll get back to you within 24 hours. No obligation.
                </p>
                <form
                  name="quote"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  action="/thanks"
                  encType="application/x-www-form-urlencoded"
                  className="space-y-5 sm:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="quote" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        First Name *
                      </label>
                      <Input
                        name="firstName"
                        placeholder="John"
                        required
                        className="h-11 min-h-[44px] bg-background border-border touch-manipulation"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Last Name *
                      </label>
                      <Input
                        name="lastName"
                        placeholder="Smith"
                        required
                        className="h-11 min-h-[44px] bg-background border-border touch-manipulation"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="h-11 min-h-[44px] bg-background border-border touch-manipulation"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Phone *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="(416) 555-0123"
                        required
                        className="h-11 min-h-[44px] bg-background border-border touch-manipulation"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Property Address *
                    </label>
                    <Input
                      name="address"
                      placeholder="123 Main St, Toronto, ON"
                      required
                      className="h-11 min-h-[44px] bg-background border-border touch-manipulation"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        required
                        className="flex h-11 min-h-[44px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 touch-manipulation"
                      >
                        <option value="">Select a service</option>
                        <option value="solar">Residential Solar</option>
                        <option value="repair">Solar Repair / Panel Upgrade</option>
                        <option value="ev">EV Charging Station</option>
                        <option value="battery">Battery Storage</option>
                        <option value="heatpump">Heat Pump</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Roof Type
                      </label>
                      <select
                        name="roofType"
                        className="flex h-11 min-h-[44px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 touch-manipulation"
                      >
                        <option value="">Select roof type</option>
                        <option value="shingle">Asphalt Shingle</option>
                        <option value="metal">Metal</option>
                        <option value="tile">Tile</option>
                        <option value="flat">Flat Roof</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Additional Details
                    </label>
                    <Textarea
                      name="details"
                      placeholder="Tell us about your project, monthly electricity usage, or any questions..."
                      rows={4}
                      className="resize-none bg-background border-border min-h-[120px] touch-manipulation text-base"
                    />
                  </div>

                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground mb-4">
                      We typically respond within 24 hours. Your information is never shared.
                    </p>
                    {submitError && (
                      <p className="text-sm text-destructive mb-3" role="alert">
                        {submitError}
                      </p>
                    )}
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-w-[200px] min-h-[48px] touch-manipulation"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Get My Free Quote"
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 md:p-7">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Contact Information
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Prefer to call or email? We're here to help.
                </p>
                <ul className="space-y-5">
                  <li>
                    <a
                      href="tel:+13823420754"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm">+1 (382) 342-0754</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@solario.ca"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm">info@solario.ca</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed">
                      92 Westra Drive, Guelph, ON N1K 1Z7
                    </span>
                  </li>
                  <li className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">We respond within 24 hours</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 md:p-7">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Service Areas
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Proudly serving the GTA and surrounding regions.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-2 bg-background border border-border rounded-lg text-sm text-muted-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
