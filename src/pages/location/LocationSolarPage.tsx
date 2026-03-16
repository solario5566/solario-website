import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

type CityKey =
  | "toronto"
  | "mississauga"
  | "vaughan"
  | "markham"
  | "richmond-hill"
  | "brampton"
  | "oakville"
  | "hamilton"
  | "waterloo"
  | "kitchener";

interface LocationConfig {
  cityKey: CityKey;
  cityName: string;
  path: string;
  metroDescription: string;
  nearby: CityKey[];
}

const LOCATION_CONFIG: Record<CityKey, LocationConfig> = {
  toronto: {
    cityKey: "toronto",
    cityName: "Toronto",
    path: "/solar-installation-toronto",
    metroDescription:
      "Toronto is one of Ontario's fastest-growing solar markets, with thousands of homes and commercial buildings switching to clean energy to offset rising electricity rates.",
    nearby: ["mississauga", "vaughan", "markham", "richmond-hill"],
  },
  mississauga: {
    cityKey: "mississauga",
    cityName: "Mississauga",
    path: "/solar-installation-mississauga",
    metroDescription:
      "Mississauga homeowners and businesses are adopting solar to lock in predictable energy costs and reduce their environmental impact across the Peel Region.",
    nearby: ["toronto", "brampton", "oakville"],
  },
  vaughan: {
    cityKey: "vaughan",
    cityName: "Vaughan",
    path: "/solar-installation-vaughan",
    metroDescription:
      "Vaughan's mix of residential neighbourhoods and light industrial space makes it ideal for both rooftop and commercial solar projects.",
    nearby: ["toronto", "richmond-hill", "markham"],
  },
  markham: {
    cityKey: "markham",
    cityName: "Markham",
    path: "/solar-installation-markham",
    metroDescription:
      "Markham is a leader in sustainability, with many homeowners and businesses investing in solar panel installation to lower their carbon footprint and utility costs.",
    nearby: ["toronto", "richmond-hill", "vaughan"],
  },
  "richmond-hill": {
    cityKey: "richmond-hill",
    cityName: "Richmond Hill",
    path: "/solar-installation-richmond-hill",
    metroDescription:
      "Richmond Hill properties benefit from open roof space and strong year-round sun exposure, making solar a smart investment for long-term energy savings.",
    nearby: ["vaughan", "markham", "toronto"],
  },
  brampton: {
    cityKey: "brampton",
    cityName: "Brampton",
    path: "/solar-installation-brampton",
    metroDescription:
      "Brampton families and business owners are turning to solar to protect against rising electricity prices while taking advantage of Ontario's net metering program.",
    nearby: ["mississauga", "toronto", "oakville"],
  },
  oakville: {
    cityKey: "oakville",
    cityName: "Oakville",
    path: "/solar-installation-oakville",
    metroDescription:
      "Oakville's detached homes and commercial plazas are ideal candidates for premium solar panel installation with high-efficiency equipment.",
    nearby: ["mississauga", "hamilton", "toronto"],
  },
  hamilton: {
    cityKey: "hamilton",
    cityName: "Hamilton",
    path: "/solar-installation-hamilton",
    metroDescription:
      "Hamilton's mix of historic homes, new builds, and industrial facilities provides excellent opportunities for both residential and commercial solar projects.",
    nearby: ["oakville", "waterloo", "kitchener"],
  },
  waterloo: {
    cityKey: "waterloo",
    cityName: "Waterloo",
    path: "/solar-installation-waterloo",
    metroDescription:
      "Waterloo's innovation-focused community is embracing solar technology to power homes, tech offices, and institutional buildings with clean energy.",
    nearby: ["kitchener", "hamilton"],
  },
  kitchener: {
    cityKey: "kitchener",
    cityName: "Kitchener",
    path: "/solar-installation-kitchener",
    metroDescription:
      "Kitchener homeowners and business owners are installing solar to stabilize long-term energy costs and support the region's sustainability goals.",
    nearby: ["waterloo", "hamilton"],
  },
};

const faqItems = [
  {
    question: "How much does solar panel installation cost in Ontario?",
    answer:
      "Solar pricing in Ontario depends on your roof size, system capacity, and whether the project is residential or commercial. Most residential solar panel installation projects range from $12,000 to $30,000 before incentives. After factoring in long-term bill savings and available financing, many homeowners see a positive cash flow from day one. During your consultation, we design a custom system for your property and provide transparent pricing for equipment, labour, permitting, and optional battery storage.",
  },
  {
    question: "How long does solar installation take from start to finish?",
    answer:
      "Most Solario solar projects in Ontario are installed in 1–3 days once all permits and utility approvals are secured. The full process, from initial consultation to system activation, typically takes 4–8 weeks. Our team handles engineering, ESA inspections, paperwork, and coordination with your local utility so the process is smooth and predictable.",
  },
  {
    question: "Are there solar incentives available in Ontario?",
    answer:
      "While Ontario no longer offers the same provincial rebates it once did, homeowners and businesses still benefit from net metering, federal programs, and financing options. Net metering allows you to earn bill credits for excess solar energy sent back to the grid. Our team stays up to date on current incentives and will walk you through every option available for your specific city and utility.",
  },
  {
    question: "How long do solar panels last in Ontario's climate?",
    answer:
      "Modern solar panels are engineered to last 25–30 years or more, even in Ontario's cold winters and hot summers. Solario specifies Tier-1 modules backed by a 25-year performance warranty, ensuring your panels continue to deliver at least 80–85% of their original output after 25 years. Our racking and wiring methods are designed to handle snow loads, wind, and freeze–thaw cycles.",
  },
  {
    question: "Is financing available for solar panel installation?",
    answer:
      "Yes. Solario partners with Financeit to offer flexible solar financing options for qualified homeowners and businesses. Many customers choose low-monthly-payment plans that are similar to or lower than their current electricity costs. This makes going solar more accessible without large upfront expenses, while still letting you benefit from long-term bill reductions.",
  },
];

interface LocationSolarPageProps {
  cityKey: CityKey;
}

const LocationSolarPage = ({ cityKey }: LocationSolarPageProps) => {
  const config = LOCATION_CONFIG[cityKey];
  const { cityName, path, metroDescription, nearby } = config;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const title = `Solar Panel Installation ${cityName} Ontario | Solario Energy`;
  const description = `Solario Energy provides professional solar panel installation in ${cityName}, Ontario for residential homes and commercial buildings. 15+ years of experience, 25-year panel warranty, ESA licensed, Tesla Certified, and financing through Financeit.`;

  return (
    <PageLayout>
      <SEO
        title={title}
        description={description}
        path={path}
        type="article"
        keywords={[
          "solar panel installation ontario",
          `solar panel installation ${cityName.toLowerCase()}`,
          `solar installers ${cityName.toLowerCase()}`,
          `solar company ${cityName.toLowerCase()}`,
          "commercial solar installation",
          "residential solar installation",
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="pt-[72px]">
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <header className="mb-10">
                <p className="text-primary font-semibold text-sm mb-2">
                  Solar Installers in {cityName}, Ontario
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Solar Panel Installation in {cityName}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Solario Energy Inc. designs and installs premium solar panel systems for {cityName} homeowners
                  and commercial properties. With over 15 years of experience and more than 2,400 systems installed
                  across Ontario, we are a trusted solar company focused on long-term performance, safety, and
                  return on investment.
                </p>
              </header>

              {/* About Solar in City */}
              <section className="space-y-4 mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  About Solar in {cityName}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {metroDescription} Solar panel installation in {cityName} gives you predictable, long-term savings
                  by converting the sun&apos;s energy into clean electricity for your home or business. With Ontario&apos;s
                  net metering program, excess power generated during sunny hours is sent back to the grid in exchange
                  for bill credits you can use at night or during the winter.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team analyzes your roof or site conditions, shading, and electricity usage to engineer a
                  solar system that maximizes production throughout the year. Every design is stamped by qualified
                  engineers and installed by ESA-licensed electricians to meet or exceed Ontario electrical code.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you are a residential homeowner looking to offset rising utility rates or a commercial
                  property manager seeking lower operating costs, Solario provides turnkey solar solutions in{" "}
                  {cityName} tailored to your energy goals, budget, and timeline.
                </p>
              </section>

              {/* Residential Solar Installation */}
              <section className="space-y-4 mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Residential Solar Installation in {cityName}
                </h2>
                <h3 className="text-xl font-semibold text-foreground">
                  Smart solar solutions for {cityName} homeowners
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most {cityName} homeowners install solar panels to reduce their monthly electricity bills and
                  protect themselves from future rate increases. A properly designed rooftop solar system can offset
                  60–100% of your annual electricity consumption, depending on your roof size and usage patterns.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Solario specifies high-efficiency Tier-1 panels backed by a{" "}
                  <strong>25-year performance warranty</strong>, paired with premium inverters and racking
                  designed for Ontario&apos;s climate. Our crews take care to preserve your roof integrity and follow
                  manufacturer installation guidelines so your warranty remains fully valid.
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  A complete, hassle-free solar experience
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  From your first consultation through to system monitoring, Solario handles every step of your
                  residential solar project in {cityName}. We take care of:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>On-site assessment, roof evaluation, and shade analysis</li>
                  <li>Custom system engineering and layout to match your goals</li>
                  <li>All permits, ESA inspections, and utility interconnection paperwork</li>
                  <li>Professional installation by ESA Licensed electricians and experienced solar crews</li>
                  <li>System activation, monitoring setup, and homeowner training</li>
                </ul>
              </section>

              {/* Commercial Solar Systems */}
              <section className="space-y-4 mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Commercial Solar Systems in {cityName}
                </h2>
                <h3 className="text-xl font-semibold text-foreground">
                  Lower operating costs for {cityName} businesses
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  For commercial buildings, warehouses, plazas, and institutional facilities in {cityName}, solar
                  offers a predictable hedge against rising utility costs. Commercial solar installation on flat or
                  pitched roofs can dramatically reduce your electrical demand charges while enhancing your ESG
                  and sustainability profile.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Solario&apos;s engineering team designs commercial solar systems that integrate with your existing
                  electrical infrastructure, rooftop equipment, and structural capacity. We model your expected
                  energy production and cash flow over 25+ years so you can clearly evaluate the business case.
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  Certified, safety-first commercial solar installers
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  As an <strong>ESA Licensed</strong>, <strong>TSSA Registered</strong>,{" "}
                  <strong>Tesla Certified</strong>, and <strong>NABCEP Certified</strong> solar company, Solario
                  follows rigorous safety, design, and installation standards on every project. Our commercial
                  crews are experienced working around live operations, coordinating with facility managers, and
                  minimizing disruption during installation.
                </p>
              </section>

              {/* Solar Incentives and Financing */}
              <section className="space-y-4 mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Solar Incentives and Financing in Ontario
                </h2>
                <h3 className="text-xl font-semibold text-foreground">
                  Make solar more affordable with Financeit
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Even without large provincial rebates, solar panel installation in {cityName} can be surprisingly
                  affordable. Through Ontario&apos;s net metering program, your solar system earns bill credits for
                  excess production, and our financing partner <strong>Financeit</strong> helps spread the remaining
                  cost over predictable monthly payments.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Many customers choose $0-down or low-down-payment solar loans where the monthly payment is
                  similar to, or less than, their pre-solar electricity bill. This structure allows you to upgrade
                  your home or building, reduce carbon emissions, and build long-term equity in a clean energy asset.
                </p>
              </section>

              {/* Why Choose Solario */}
              <section className="space-y-4 mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Why Choose Solario for Solar in {cityName}
                </h2>
                <h3 className="text-xl font-semibold text-foreground">
                  15+ years of Ontario solar experience
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Solario Energy Inc. has been focused exclusively on solar and clean energy solutions in Ontario
                  for more than 15 years. Our portfolio includes over 2,400 residential and commercial installations
                  across the Greater Toronto Area and beyond, giving us deep experience with local utilities,
                  permitting authorities, and building conditions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every system we install is backed by a <strong>25-year panel performance warranty</strong> and
                  supported by our in-house service team. When you choose Solario, you are partnering with a local,
                  fully certified solar installer that will be there to support your system for decades.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>15+ years of hands-on solar installation experience in Ontario</li>
                  <li>ESA Licensed, TSSA Registered, Tesla Certified, and NABCEP Certified</li>
                  <li>Premium Tier-1 equipment with 25-year warranties</li>
                  <li>In-house engineering, installation, and support teams</li>
                  <li>Transparent proposals with long-term performance modelling</li>
                </ul>
              </section>

              {/* CTA Section */}
              <section className="bg-navy-dark rounded-xl p-6 md:p-8 mb-10 shadow-card">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  Get a Free Solar Consultation in {cityName}
                </h2>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  Ready to explore solar panel installation in {cityName}? Our team will review your property,
                  design a custom system, and show you exactly how much you can save over the next 25 years.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Book a Solar Consultation</Link>
                  </Button>
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="text-muted-foreground">Prefer to speak with someone now?</span>
                    <a
                      href="tel:+13823420754"
                      className="text-primary hover:text-primary-hover font-semibold"
                    >
                      Call +1 (382) 342-0754
                    </a>
                  </div>
                </div>
              </section>

              {/* Internal links to services and nearby cities */}
              <section className="mb-10 space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Explore Solar Services Across Ontario
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In addition to dedicated solar panel installation in {cityName}, Solario designs and installs
                  systems throughout the Greater Toronto Area and Southern Ontario. Learn more about our{" "}
                  <Link
                    to="/services/solar-installation"
                    className="text-primary hover:text-primary-hover font-semibold"
                  >
                    Ontario-wide solar panel installation services
                  </Link>{" "}
                  or explore nearby service areas below.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {nearby.map((key) => {
                    const nearbyConfig = LOCATION_CONFIG[key];
                    const anchorCityName = nearbyConfig.cityName;
                    const anchorText =
                      key === "toronto"
                        ? `solar installers in ${anchorCityName}`
                        : `solar company ${anchorCityName}`;
                    return (
                      <Link
                        key={key}
                        to={nearbyConfig.path}
                        className="text-primary hover:text-primary-hover text-sm font-semibold"
                      >
                        {anchorText}
                      </Link>
                    );
                  })}
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Frequently Asked Questions About Solar in {cityName}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqItems.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`faq-${index}`}
                      className="bg-section-gray border border-gray-200 rounded-lg px-5 data-[state=open]:shadow-md transition-all"
                    >
                      <AccordionTrigger className="text-left text-sm font-semibold text-section-light-foreground hover:text-primary hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default LocationSolarPage;

