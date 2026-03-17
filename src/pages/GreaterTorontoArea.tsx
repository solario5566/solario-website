import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileCheck,
  Home,
  Building2,
  SunMedium,
  BatteryCharging,
  PlugZap,
  Wrench,
  Wallet,
  ArrowRight,
} from "lucide-react";

const GreaterTorontoArea = () => {
  return (
    <PageLayout>
      <SEO
        title="Solar Installation in the Greater Toronto Area"
        description="Premium solar installation for Greater Toronto Area homes and businesses. ESA-licensed design and installation, 25-year panel warranties, financing guidance, and full clean energy services."
        path="/solar-installation-greater-toronto-area"
      />

      {/* Hero */}
      <section className="section-padding bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-6xl mx-auto space-y-10">
            <header className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start animate-fade-in">
              <div>
                <p className="text-primary font-semibold text-xs sm:text-sm mb-3">
                  Greater Toronto Area Solar Installation
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                  Solar and clean energy projects across the Greater Toronto Area
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">
                  Solario designs and installs premium solar systems for homes and businesses across the Greater
                  Toronto Area. From downtown Toronto to surrounding suburbs, we bring ESA-licensed installation,
                  25-year panel warranties, and a guided process from quote to completion.
                </p>
                <div className="flex flex-wrap gap-3 mb-4 text-xs sm:text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1">
                    <Home className="w-3.5 h-3.5 text-primary" />
                    Residential & commercial projects
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    ESA-licensed installation
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1">
                    <FileCheck className="w-3.5 h-3.5 text-primary" />
                    25-year panel warranties
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1">
                    <Wallet className="w-3.5 h-3.5 text-primary" />
                    Financing & incentive guidance
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact" className="inline-flex items-center gap-2">
                      Request a Greater Toronto Area Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/services/solar-installation" className="inline-flex items-center gap-2">
                      View Solar Installation Services
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-card animate-slide-up">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                  What you can expect
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                    <span>Design and installation completed to Ontario electrical code by ESA-licensed electricians.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileCheck className="w-4 h-4 text-primary mt-0.5" />
                    <span>Thoughtful proposals with layouts, production estimates, and long-term performance modelling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Home className="w-4 h-4 text-primary mt-0.5" />
                    <span>Projects sized for condos, detached homes, mid-rise properties, and commercial rooftops.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wallet className="w-4 h-4 text-primary mt-0.5" />
                    <span>
                      Guidance on net metering, incentives, and{" "}
                      <Link to="/finance" className="text-primary hover:underline">
                        financing options
                      </Link>{" "}
                      so you can plan with confidence.
                    </span>
                  </li>
                </ul>
              </div>
            </header>
          </div>
        </div>
      </section>

      {/* Greater Toronto Area overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                The Greater Toronto Area as an energy market
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Greater Toronto Area brings together dense urban cores, established neighbourhoods, and fast-growing
                suburbs. With rising electricity rates, a focus on sustainability, and interest in electrification, many
                homeowners and businesses are looking for a long-term energy plan—solar is often at the centre of that.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  Diverse properties
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  From single-family homes and townhomes to mixed-use rooftops and commercial buildings, the Greater
                  Toronto Area has a wide range of roof types and electrical services. We design systems specifically
                  for each site instead of using a generic template.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  Long-term energy planning
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Many Greater Toronto Area customers care about bill stability and long-term value. Solar, EV charging,
                  battery storage, and efficient heating and cooling can all be part of a broader electrification and
                  resilience plan.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  Sustainability & reputation
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  For businesses, solar in the Greater Toronto Area supports ESG commitments and demonstrates a
                  visible investment in clean energy—while improving operating cost visibility over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where we serve across the Greater Toronto Area */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Where we serve across the Greater Toronto Area
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Solario is based in Guelph and serves the Greater Toronto Area with the same installation standards,
                warranties, and support we bring to every project in Ontario. We work across core Toronto and the
                surrounding communities.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-card border border-border rounded-lg p-4 shadow-card animate-slide-up">
                <h3 className="text-sm font-semibold text-foreground mb-1.5">City of Toronto</h3>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5">
                  <li>
                    <Link to="/solar-installation-toronto" className="text-primary hover:underline">
                      Toronto
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-installation-north-york" className="text-primary hover:underline">
                      North York
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-installation-scarborough" className="text-primary hover:underline">
                      Scarborough
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-installation-etobicoke" className="text-primary hover:underline">
                      Etobicoke
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card animate-slide-up">
                <h3 className="text-sm font-semibold text-foreground mb-1.5">West & southwest Greater Toronto Area</h3>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5">
                  <li>
                    <Link to="/solar-installation-mississauga" className="text-primary hover:underline">
                      Mississauga
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-installation-brampton" className="text-primary hover:underline">
                      Brampton
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-installation-oakville" className="text-primary hover:underline">
                      Oakville
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-installation-burlington" className="text-primary hover:underline">
                      Burlington
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-installation-milton" className="text-primary hover:underline">
                      Milton
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 shadow-card animate-slide-up">
                <h3 className="text-sm font-semibold text-foreground mb-1.5">East & northeast Greater Toronto Area</h3>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5">
                  <li>
                    <Link to="/solar-installation-vaughan" className="text-primary hover:underline">
                      Vaughan
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-installation-markham" className="text-primary hover:underline">
                      Markham
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-installation-richmond-hill" className="text-primary hover:underline">
                      Richmond Hill
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-installation-ajax" className="text-primary hover:underline">
                      Ajax
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-installation-whitby" className="text-primary hover:underline">
                      Whitby
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-installation-oshawa" className="text-primary hover:underline">
                      Oshawa
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential & Commercial opportunity */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-5xl mx-auto space-y-10 animate-fade-in">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Residential and commercial opportunity in the Greater Toronto Area
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Greater Toronto Area includes everything from single-family homes and townhouses to mid-rise
                rooftops, mixed-use spaces, and commercial facilities. Solar plays a different role for each—but
                the common thread is a desire for predictable energy costs and long-term value.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-card animate-slide-up">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Greater Toronto Area homeowners
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  For homeowners across the Greater Toronto Area—whether in Toronto, Mississauga, Brampton, or
                  surrounding communities—solar can offset a significant portion of annual electricity usage while
                  improving long-term cost visibility.
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>Systems tailored to your roof, usage, and utility rates.</li>
                  <li>Premium Tier-1 panels with 25-year performance warranties.</li>
                  <li>ESA-licensed installation that respects your roof and home.</li>
                  <li>Monitoring and support after activation.</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-card animate-slide-up">
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Greater Toronto Area businesses and institutions
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  For commercial, industrial, and institutional properties, solar can reduce demand charges, hedge
                  against future rate increases, and support ESG goals across the Greater Toronto Area.
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>Designs that integrate with your electrical infrastructure and rooftop equipment.</li>
                  <li>Production and cash-flow modelling over 25+ years.</li>
                  <li>Coordination around live operations and facility constraints.</li>
                  <li>Options to pair with EV charging and battery storage.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solario for the Greater Toronto Area */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl md:3xl text-foreground font-semibold">
                Why Solario for the Greater Toronto Area
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Solario is based in Guelph and serves the Greater Toronto Area with the same standards we bring to
                every project: careful design, ESA-licensed installation, clean workmanship, and long-term support.
                We treat Greater Toronto Area projects as long-term partnerships, not one-off jobs.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Certified, safety-first installation
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  ESA-licensed work, TSSA registration where required, and adherence to manufacturer guidelines on
                  every project across the Greater Toronto Area.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                <div className="flex items-center gap-3 mb-2">
                  <FileCheck className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Clear proposals & modelling
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We provide layouts, production estimates, and long-term performance modelling so you understand
                  how solar supports your Greater Toronto Area property or portfolio.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                <div className="flex items-center gap-3 mb-2">
                  <Home className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    In-house installation & support
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Our in-house teams manage installations across the Greater Toronto Area. You have a single point
                  of contact from first conversation through activation and beyond.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                <div className="flex items-center gap-3 mb-2">
                  <SunMedium className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Built for long-term performance
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We specify Tier-1 equipment with 25-year panel warranties and design for reliability, not just
                  short-term output, across diverse Greater Toronto Area buildings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services across the Greater Toronto Area */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Clean energy services across the Greater Toronto Area
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Solar is often the starting point, but many Greater Toronto Area customers look at the full energy
                picture. We support related upgrades across the region.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                to="/services/solar-installation"
                className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
              >
                <SunMedium className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Solar installation
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Premium solar systems for Greater Toronto Area homes, condos, and businesses.
                  </p>
                </div>
              </Link>
              <Link
                to="/services/solar-repair"
                className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
              >
                <Wrench className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Solar repair & upgrades
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Troubleshooting, repairs, and performance improvements for existing Greater Toronto Area systems.
                  </p>
                </div>
              </Link>
              <Link
                to="/services/ev-charging"
                className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
              >
                <PlugZap className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    EV charging
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Level 2 charging for homes, fleets, and workplaces across the Greater Toronto Area.
                  </p>
                </div>
              </Link>
              <Link
                to="/services/battery-storage"
                className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
              >
                <BatteryCharging className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Battery storage
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Backup power, time-of-use optimization, and smarter energy use for Greater Toronto Area properties.
                  </p>
                </div>
              </Link>
              <Link
                to="/services/heat-pumps"
                className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
              >
                <Home className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Heat pumps
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Efficient electric heating and cooling that pairs well with solar in the Greater Toronto Area.
                  </p>
                </div>
              </Link>
              <Link
                to="/finance"
                className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
              >
                <Wallet className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Financing options
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Flexible payment pathways to make Greater Toronto Area projects more accessible.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process for Greater Toronto Area clients */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                How we work with Greater Toronto Area clients
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our process is designed to be clear and organized whether you are a homeowner or managing a
                commercial property. We coordinate the details so you can focus on outcomes.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Consultation",
                  text: "We review your property, bills, and goals and outline whether solar and related upgrades make sense.",
                },
                {
                  step: "2",
                  title: "Design & proposal",
                  text: "We develop a tailored design and proposal, including layout, production estimates, and financial outlook.",
                },
                {
                  step: "3",
                  title: "Permits & coordination",
                  text: "We handle permits, ESA inspections, and utility coordination across the Greater Toronto Area.",
                },
                {
                  step: "4",
                  title: "Installation & support",
                  text: "Our crews complete the installation, and we remain your partner for questions and long-term support.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financing & incentives for the Greater Toronto Area */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Financing and incentives in the Greater Toronto Area
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Even without large provincial rebates, Greater Toronto Area projects can be structured so that solar,
                battery storage, and other upgrades are financially accessible. We help you understand how net
                metering, federal programs, and financing options work together.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  Net metering credits
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Excess solar generation earns bill credits you can apply against usage at night or in winter,
                  improving long-term savings for Greater Toronto Area customers.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  Financing pathways
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Many projects use monthly payment structures instead of large upfront investments. Our team
                  explains options and points you to our{" "}
                  <Link to="/finance" className="text-primary hover:underline">
                    financing page
                  </Link>{" "}
                  so you can plan with clarity.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  Strategic planning
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  For many Greater Toronto Area properties, solar is part of a broader electrification strategy that
                  may include EV charging, heat pumps, and storage—we help you think through the sequence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-4xl mx-auto bg-navy-dark rounded-2xl p-6 sm:p-8 md:p-10 shadow-card animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Plan your Greater Toronto Area solar project with Solario
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you&apos;re planning a rooftop system for a single property or evaluating multiple sites
                across the Greater Toronto Area, Solario provides design, installation, and support you can rely on.
                We&apos;ll walk you through options, numbers, and next steps—without pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Request a Greater Toronto Area Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/projects" className="inline-flex items-center gap-2">
                    Explore Project Examples
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-muted-foreground mt-2">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  ESA-licensed installation
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-primary" />
                  25-year panel warranties
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Home className="w-4 h-4 text-primary" />
                  Residential & commercial projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GreaterTorontoArea;

