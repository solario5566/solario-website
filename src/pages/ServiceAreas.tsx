import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, SunMedium, PlugZap, BatteryCharging, Wrench, Home, Wallet } from "lucide-react";

type AreaItem = {
  name: string;
  to: string;
  subtitle: string;
};

const guelphRegionAreas: AreaItem[] = [
  {
    name: "Guelph",
    to: "/solar-installation-guelph",
    subtitle: "Premium solar guidance from our home base",
  },
  {
    name: "Kitchener",
    to: "/solar-installation-kitchener",
    subtitle: "Residential & commercial solar solutions",
  },
  {
    name: "Waterloo",
    to: "/solar-installation-waterloo",
    subtitle: "Clean-energy projects for homes and offices",
  },
  {
    name: "Cambridge",
    to: "/solar-installation-cambridge",
    subtitle: "Solar and energy upgrades for local properties",
  },
  {
    name: "Hamilton",
    to: "/solar-installation-hamilton",
    subtitle: "Solar designed for long-term value",
  },
];

const gtaAreas: AreaItem[] = [
  {
    name: "Greater Toronto Area",
    to: "/solar-installation-greater-toronto-area",
    subtitle: "Regional overview for Greater Toronto Area projects",
  },
  {
    name: "Toronto",
    to: "/solar-installation-toronto",
    subtitle: "Solar and energy upgrades city-wide",
  },
  {
    name: "North York",
    to: "/solar-installation-north-york",
    subtitle: "Premium solar guidance for North York properties",
  },
  {
    name: "Scarborough",
    to: "/solar-installation-scarborough",
    subtitle: "Residential & commercial solar opportunities",
  },
  {
    name: "Etobicoke",
    to: "/solar-installation-etobicoke",
    subtitle: "Solar and clean-energy planning",
  },
  {
    name: "Mississauga",
    to: "/solar-installation-mississauga",
    subtitle: "Solar designed for long-term value",
  },
  {
    name: "Brampton",
    to: "/solar-installation-brampton",
    subtitle: "Residential & commercial solar projects",
  },
  {
    name: "Vaughan",
    to: "/solar-installation-vaughan",
    subtitle: "Clean-energy solutions for growing communities",
  },
  {
    name: "Markham",
    to: "/solar-installation-markham",
    subtitle: "Solar and energy upgrades for local properties",
  },
  {
    name: "Richmond Hill",
    to: "/solar-installation-richmond-hill",
    subtitle: "Premium solar support for homes and businesses",
  },
  {
    name: "Oakville",
    to: "/solar-installation-oakville",
    subtitle: "Solar projects with long-term performance in mind",
  },
  {
    name: "Burlington",
    to: "/solar-installation-burlington",
    subtitle: "Clean-energy solutions for Burlington properties",
  },
  {
    name: "Milton",
    to: "/solar-installation-milton",
    subtitle: "Solar and electrification-focused planning",
  },
  {
    name: "Ajax",
    to: "/solar-installation-ajax",
    subtitle: "Residential solar and energy upgrades",
  },
  {
    name: "Whitby",
    to: "/solar-installation-whitby",
    subtitle: "Trusted project support for local homes",
  },
  {
    name: "Oshawa",
    to: "/solar-installation-oshawa",
    subtitle: "Solar designed for diverse property types",
  },
];

const ServiceAreas = () => {
  return (
    <PageLayout>
      <SEO
        title="Service Areas | Solario"
        description="Explore Solario’s service areas across Guelph, nearby regional cities, and the Greater Toronto Area. See where we operate and navigate to your local solar page."
        path="/service-areas"
      />

      {/* Hero / intro */}
      <section className="section-padding bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-3">
              <p className="text-primary font-semibold text-xs sm:text-sm">
                Service Areas
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Service coverage for Guelph and the Greater Toronto Area
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                Solario is based in Guelph and serves select cities across southwestern Ontario and the Greater Toronto
                Area. Choose your area below to see local details or start a quote.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                  Regional focus
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Concentrated in areas where we can deliver consistent, high-quality installations and support.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                  Residential & commercial
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Solar and related clean energy solutions for homeowners, businesses, and institutions.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                  Guided next steps
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Explore your city page or contact our team to confirm project fit in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service area overview */}
      <section className="py-10 sm:py-14 md:py-16 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                A focused, regional service footprint
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We concentrate on Guelph and nearby cities, plus selected Greater Toronto Area markets, so we can
                maintain a premium installation standard and responsive support across every project.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-card border border-border rounded-lg p-4 sm:p-5 shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Guelph & nearby region
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Regional service areas supported directly from our Guelph base—ideal for homeowners and businesses
                  looking for a long-term solar partner.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 sm:p-5 shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Greater Toronto Area
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Broader Greater Toronto Area coverage for residential and commercial solar and related upgrades—
                  from core Toronto neighbourhoods to growing suburbs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area groups */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Guelph & nearby */}
            <div className="space-y-4 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Guelph & Nearby Region
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Regional cities supported by our Guelph-based team for residential and commercial solar projects.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-3 sm:p-4 md:p-5 shadow-card">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {guelphRegionAreas.map((area) => (
                    <div
                      key={area.name}
                      className={
                        area.name === "Guelph"
                          ? "col-span-full flex justify-center"
                          : ""
                      }
                    >
                      <Link
                        to={area.to}
                        className={
                          "group flex flex-col justify-between rounded-lg border border-primary/20 bg-background/60 px-3 py-2.5 text-sm text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-muted hover:border-primary/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card " +
                          (area.name === "Guelph" ? "max-w-sm w-full" : "w-full")
                        }
                      >
                        <span className="font-medium text-foreground group-hover:text-foreground text-center">
                          {area.name}
                        </span>
                        <span className="mt-0.5 text-[11px] sm:text-xs text-muted-foreground/80 text-center">
                          {area.subtitle}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Greater Toronto Area */}
            <div className="space-y-4 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Greater Toronto Area
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cities across the Greater Toronto Area where Solario provides premium solar and clean energy
                  services for homes and businesses.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-3 sm:p-4 md:p-5 shadow-card">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {gtaAreas.map((area) => (
                    <div
                      key={area.name}
                      className={
                        area.name === "Greater Toronto Area"
                          ? "col-span-full flex justify-center"
                          : ""
                      }
                    >
                      <Link
                        to={area.to}
                        className={
                          "group flex flex-col justify-between rounded-lg border border-primary/20 bg-background/60 px-3 py-2.5 text-sm text-muted-foreground cursor-pointer transition-all duration-200 hover:bg-muted hover:border-primary/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card " +
                          (area.name === "Greater Toronto Area" ? "max-w-sm w-full" : "w-full")
                        }
                      >
                        <span className="font-medium text-foreground group-hover:text-foreground text-center">
                          {area.name}
                        </span>
                        <span className="mt-0.5 text-[11px] sm:text-xs text-muted-foreground/80 text-center">
                          {area.subtitle}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services tie-in */}
      <section className="py-10 sm:py-14 md:py-16 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                What we offer in these service areas
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Across these service areas, Solario supports solar installation, repairs and panel upgrades, EV charging,
                battery storage, heat pumps, and financing guidance—always with the same premium process and standards.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                to="/services/solar-installation"
                className="bg-card border border-border rounded-lg p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
              >
                <SunMedium className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Solar installation
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Custom rooftop and ground-mount systems for homes and businesses.
                  </p>
                </div>
              </Link>
              <Link
                to="/services/solar-repair"
                className="bg-card border border-border rounded-lg p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
              >
                <Wrench className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Solar repair & upgrades
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Troubleshooting, repairs, and performance improvements for existing systems.
                  </p>
                </div>
              </Link>
              <Link
                to="/services/ev-charging"
                className="bg-card border border-border rounded-lg p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
              >
                <PlugZap className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    EV charging
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Level 2 charging for homes, fleets, and workplaces.
                  </p>
                </div>
              </Link>
              <Link
                to="/services/battery-storage"
                className="bg-card border border-border rounded-lg p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
              >
                <BatteryCharging className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Battery storage
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Backup power, time-of-use optimization, and smarter energy use.
                  </p>
                </div>
              </Link>
              <Link
                to="/services/heat-pumps"
                className="bg-card border border-border rounded-lg p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
              >
                <Home className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Heat pumps
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Efficient electric heating and cooling that pairs well with solar.
                  </p>
                </div>
              </Link>
              <Link
                to="/finance"
                className="bg-card border border-border rounded-lg p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
              >
                <Wallet className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Financing options
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Flexible payment pathways to make projects more accessible.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / next step */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-4xl mx-auto bg-navy-dark rounded-2xl p-6 sm:p-8 md:p-10 shadow-card animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Ready to talk about a project in your area?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you see your city listed, open the local page for more detail or request a quote. If you&apos;re
                nearby and not sure whether your property is a fit, reach out and our team will gladly confirm.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Request a Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/solar-installation-greater-toronto-area" className="inline-flex items-center gap-2">
                    View Greater Toronto Area Coverage
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServiceAreas;

