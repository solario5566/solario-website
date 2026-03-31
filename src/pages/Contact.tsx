import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import SEO from "@/components/SEO";
import { getAttributionFieldsForLeadSubmit } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";

/** Netlify Forms: POST root path so the submission is accepted for the SPA shell (`index.html` registers the form). */
const NETLIFY_FORM_ACTION = "/";

const serviceAreas = [
  "Greater Toronto Area",
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
  "Whitby",
  "Oshawa",
  "Guelph",
  "Kitchener",
  "Waterloo",
  "Cambridge",
  "Hamilton",
];

const serviceAreaRoutes: Record<string, string> = {
  "Greater Toronto Area": "/solar-installation-greater-toronto-area",
  Toronto: "/solar-installation-toronto",
  "North York": "/solar-installation-north-york",
  Scarborough: "/solar-installation-scarborough",
  Etobicoke: "/solar-installation-etobicoke",
  Mississauga: "/solar-installation-mississauga",
  Brampton: "/solar-installation-brampton",
  Vaughan: "/solar-installation-vaughan",
  Markham: "/solar-installation-markham",
  "Richmond Hill": "/solar-installation-richmond-hill",
  Oakville: "/solar-installation-oakville",
  Burlington: "/solar-installation-burlington",
  Milton: "/solar-installation-milton",
  Ajax: "/solar-installation-ajax",
  Whitby: "/solar-installation-whitby",
  Oshawa: "/solar-installation-oshawa",
  Guelph: "/solar-installation-guelph",
  Kitchener: "/solar-installation-kitchener",
  Waterloo: "/solar-installation-waterloo",
  Cambridge: "/solar-installation-cambridge",
  Hamilton: "/solar-installation-hamilton",
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    const form = e.currentTarget;
    const pagePathAtSubmit =
      typeof window !== "undefined"
        ? `${window.location.pathname}${window.location.search}`
        : "/contact";

    const formData = new FormData(form);
    const attribution = getAttributionFieldsForLeadSubmit(pagePathAtSubmit);
    Object.entries(attribution).forEach(([key, value]) => {
      formData.set(key, value);
    });

    const urlParams = new URLSearchParams();
    formData.forEach((value, key) => {
      urlParams.append(key, value instanceof File ? "" : String(value));
    });
    const body = urlParams.toString();

    setIsSubmitting(true);
    let willNavigate = false;
    try {
      const res = await fetch(NETLIFY_FORM_ACTION, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) {
        setSubmitError(
          "We couldn't send your message right now. Please try again in a moment or call us directly."
        );
        return;
      }
      willNavigate = true;
      trackEvent("generate_lead", { form_name: "quote", method: "contact_form" });
      window.setTimeout(() => {
        window.location.assign("/thanks");
      }, 120);
    } catch {
      setSubmitError(
        "We couldn't send your message right now. Please try again in a moment or call us directly."
      );
    } finally {
      if (!willNavigate) {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <PageLayout>
      <SEO
        title="Contact Us"
        description="Get a free solar or energy quote. Solario serves the GTA and Ontario—request a callback or quote online. We respond within 24 hours."
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
                  Complete the form below and we'll get back to you within 24 hours. No obligation. Not sure which service you need? See our <Link to="/services" className="text-primary hover:underline">services overview</Link> or <Link to="/finance" className="text-primary hover:underline">financing options</Link>.
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
                  Proudly serving the Greater Toronto Area and surrounding regions.
                </p>
                <div className="flex flex-col items-center gap-3">
                  {serviceAreaRoutes[serviceAreas[0]] ? (
                    <Link
                      to={serviceAreaRoutes[serviceAreas[0]]}
                      className="px-4 py-2 bg-background border border-primary/30 rounded-lg text-sm text-muted-foreground cursor-pointer transition-colors duration-200 hover:bg-muted hover:border-primary/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                    >
                      {serviceAreas[0]}
                    </Link>
                  ) : (
                    <span className="px-4 py-2 bg-background border border-primary/30 rounded-lg text-sm text-muted-foreground">
                      {serviceAreas[0]}
                    </span>
                  )}
                  <div className="flex flex-wrap justify-center gap-2.5">
                    {serviceAreas.slice(1).map((area) => {
                      const route = serviceAreaRoutes[area];
                      if (!route) {
                        return (
                          <span
                            key={area}
                            className="px-3 py-2 bg-background border border-primary/30 rounded-lg text-sm text-muted-foreground"
                          >
                            {area}
                          </span>
                        );
                      }
                      return (
                        <Link
                          key={area}
                          to={route}
                          className="px-3 py-2 bg-background border border-primary/30 rounded-lg text-sm text-muted-foreground cursor-pointer transition-colors duration-200 hover:bg-muted hover:border-primary/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                        >
                          {area}
                        </Link>
                      );
                    })}
                  </div>
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
