import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SEO from "@/components/SEO";

const serviceAreas = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Hamilton",
  "Oakville",
  "Burlington",
  "Markham",
  "Vaughan",
];

const Contact = () => {
  return (
    <PageLayout>
      <SEO
        title="Contact Us"
        description="Request a free solar quote for your Ontario home or business. Our team responds within 24 hours."
        path="/contact"
      />

      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-navy">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Request Your Free Quote
            </h1>
            <p className="text-muted-foreground">
              Get a personalized solar assessment for your home or business. Our
              team will design the perfect system for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                name="quote"
                method="POST"
                data-netlify="true"
                netlify
                data-netlify-honeypot="bot-field"
                action="/thanks"
                encType="application/x-www-form-urlencoded"
                className="space-y-5"
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="quote" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input
                      name="firstName"
                      placeholder="John"
                      required
                      className="h-11 bg-card border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input
                      name="lastName"
                      placeholder="Smith"
                      required
                      className="h-11 bg-card border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="h-11 bg-card border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="(416) 555-0123"
                      required
                      className="h-11 bg-card border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Property Address *
                  </label>
                  <Input
                    name="address"
                    placeholder="123 Main St, Toronto, ON"
                    required
                    className="h-11 bg-card border-border"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      required
                      className="flex h-11 w-full rounded-md border border-border bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="solar">Residential Solar</option>
                      <option value="ev">EV Charging Station</option>
                      <option value="battery">Battery Storage</option>
                      <option value="heatpump">Heat Pump</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Roof Type
                    </label>
                    <select
                      name="roofType"
                      className="flex h-11 w-full rounded-md border border-border bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Details
                  </label>
                  <Textarea
                    name="details"
                    placeholder="Tell us more about your project, monthly electricity bill, or any questions you have..."
                    rows={4}
                    className="resize-none bg-card border-border"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                  Get My Free Quote
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Info Card */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-5">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="tel:+13823420754"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">+1 (382) 342-0754</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@solario.ca"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">info@solario.ca</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">
                      136 Winges Rd, Vaughan, ON L4L 6C3
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm">We respond within 24 hours</span>
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="bg-secondary border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Service Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 bg-card rounded-md text-sm text-muted-foreground"
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
