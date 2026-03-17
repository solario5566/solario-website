import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileCheck,
  Home,
  Building2,
  SunMedium,
  Wallet,
  ArrowRight,
  BatteryCharging,
  Wrench,
} from "lucide-react";

type CityKey =
  | "toronto"
  | "north-york"
  | "mississauga"
  | "scarborough"
  | "etobicoke"
  | "vaughan"
  | "markham"
  | "richmond-hill"
  | "brampton"
  | "oakville"
  | "burlington"
  | "milton"
  | "ajax"
  | "whitby"
  | "oshawa"
  | "hamilton"
  | "waterloo"
  | "kitchener"
  | "guelph"
  | "cambridge";

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
  "north-york": {
    cityKey: "north-york",
    cityName: "North York",
    path: "/solar-installation-north-york",
    metroDescription:
      "North York combines established residential neighbourhoods with dense commercial corridors and high-rise buildings, creating a wide range of rooftop and site conditions for solar projects.",
    nearby: ["toronto", "vaughan", "markham"],
  },
  scarborough: {
    cityKey: "scarborough",
    cityName: "Scarborough",
    path: "/solar-installation-scarborough",
    metroDescription:
      "Scarborough's broad base of single-family homes, townhomes, and commercial properties makes it a strong candidate for residential and light commercial solar installations.",
    nearby: ["toronto", "pickering" as never],
  },
  etobicoke: {
    cityKey: "etobicoke",
    cityName: "Etobicoke",
    path: "/solar-installation-etobicoke",
    metroDescription:
      "Etobicoke offers a mix of larger residential lots and commercial buildings, providing many well-situated roofs and sites for solar and clean energy upgrades.",
    nearby: ["toronto", "mississauga", "oakville"],
  },
  burlington: {
    cityKey: "burlington",
    cityName: "Burlington",
    path: "/solar-installation-burlington",
    metroDescription:
      "Burlington's residential neighbourhoods and commercial corridors are well suited to solar, with many properties focused on long-term energy savings and sustainability.",
    nearby: ["oakville", "hamilton", "milton"],
  },
  milton: {
    cityKey: "milton",
    cityName: "Milton",
    path: "/solar-installation-milton",
    metroDescription:
      "Milton is a fast-growing community with many newer homes and businesses, making it an excellent place for future-focused solar and clean energy upgrades.",
    nearby: ["burlington", "oakville", "mississauga"],
  },
  ajax: {
    cityKey: "ajax",
    cityName: "Ajax",
    path: "/solar-installation-ajax",
    metroDescription:
      "Ajax features primarily suburban housing and local businesses, where solar can help homeowners and property owners manage long-term electricity costs.",
    nearby: ["whitby", "oshawa", "toronto"],
  },
  whitby: {
    cityKey: "whitby",
    cityName: "Whitby",
    path: "/solar-installation-whitby",
    metroDescription:
      "Whitby's family neighbourhoods and local business areas provide strong opportunities for solar, especially for customers focused on stability and long-term value.",
    nearby: ["ajax", "oshawa", "toronto"],
  },
  oshawa: {
    cityKey: "oshawa",
    cityName: "Oshawa",
    path: "/solar-installation-oshawa",
    metroDescription:
      "Oshawa's mix of residential properties, commercial space, and light industry creates a wide range of use cases for solar and related clean energy upgrades.",
    nearby: ["whitby", "ajax", "toronto"],
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
    nearby: ["waterloo", "guelph", "cambridge"],
  },
  guelph: {
    cityKey: "guelph",
    cityName: "Guelph",
    path: "/solar-installation-guelph",
    metroDescription:
      "Guelph's mix of residential neighbourhoods, farms, and commercial properties makes it well suited for rooftop and ground-mount solar. Homeowners and businesses in Guelph are adopting solar to reduce electricity costs and support local sustainability goals.",
    nearby: ["kitchener", "waterloo", "cambridge", "brampton"],
  },
  cambridge: {
    cityKey: "cambridge",
    cityName: "Cambridge",
    path: "/solar-installation-cambridge",
    metroDescription:
      "Cambridge residents and businesses are turning to solar to lock in energy costs and reduce reliance on the grid. The region's mix of housing and light industry offers strong opportunities for both residential and commercial solar.",
    nearby: ["kitchener", "waterloo", "guelph", "hamilton"],
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

  const title = `Solar Installation ${cityName}`;
  const description = `Professional solar panel installation in ${cityName}, Ontario. Design, permits, installation, and 25-year warranty. Free quote from Solario.`;

  const cityIsCore =
    cityKey === "guelph" ||
    cityKey === "kitchener" ||
    cityKey === "waterloo" ||
    cityKey === "cambridge" ||
    cityKey === "hamilton";

  return (
    <PageLayout>
      <SEO
        title={title}
        description={description}
        path={path}
        type="website"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="pt-[72px]">
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              {/* Hero */}
              <header className="animate-fade-in">
                <p className="text-primary font-semibold text-xs sm:text-sm mb-2">
                  Solar Installers in {cityName}, Ontario
                </p>
                <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                      Solar Panel Installation in {cityName}
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      {cityKey === "guelph" ? (
                        <>
                          Solario is based in Guelph and serves the city and the wider region. With 15+
                          years in business and 1,500+ installations across Ontario, we design
                          and install premium solar panel systems for homeowners and commercial properties.
                        </>
                      ) : cityIsCore ? (
                        <>
                          Solario is based in Guelph and serves {cityName} and the surrounding region with the
                          same ESA-licensed installation, 25-year panel warranties, and support we offer across
                          Ontario.
                        </>
                      ) : (
                        <>
                          Solario Energy Inc. designs and installs premium solar panel systems for {cityName}{" "}
                          homeowners and commercial properties, focused on long-term performance, safety, and
                          return on investment.
                        </>
                      )}
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 sm:p-5 shadow-card animate-slide-up">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Why homeowners choose Solario
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="w-4 h-4 text-primary mt-0.5" />
                        <p className="text-muted-foreground">
                          ESA-licensed installation and projects designed for Ontario&apos;s climate.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileCheck className="w-4 h-4 text-primary mt-0.5" />
                        <p className="text-muted-foreground">
                          25-year panel performance warranties and transparent proposals.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Home className="w-4 h-4 text-primary mt-0.5" />
                        <p className="text-muted-foreground">
                          Residential and commercial systems tailored to your roof and usage.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Wallet className="w-4 h-4 text-primary mt-0.5" />
                        <p className="text-muted-foreground">
                          Guidance on incentives and{" "}
                          <Link to="/finance" className="text-primary hover:underline">
                            financing options
                          </Link>{" "}
                          to make solar more accessible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              {/* About Solar in City */}
              <section className="space-y-6 mb-4 animate-fade-in">
                <div className="space-y-3 max-w-3xl">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                    About Solar in {cityName}
                  </h2>
                  {cityIsCore && (
                    <p className="text-muted-foreground leading-relaxed">
                      {cityKey === "guelph" &&
                        "As a Guelph-based company, we know the local roof types, utility setup, and permitting landscape—and we serve the city and the wider region with the same standards."}
                      {cityKey === "kitchener" &&
                        "Kitchener's mix of established neighbourhoods and growing development makes it well suited for rooftop solar; we serve the area from our Guelph base with consistent design and installation standards."}
                      {cityKey === "waterloo" &&
                        "Waterloo's focus on innovation and sustainability aligns naturally with solar adoption; we support homes and businesses from our Guelph office with ESA-licensed installation and ongoing care."}
                      {cityKey === "cambridge" &&
                        "Cambridge's blend of residential streets and light industrial space offers strong opportunities for solar; we bring a turnkey process and long-term support to every project."}
                      {cityKey === "hamilton" &&
                        "Hamilton's diverse housing stock and commercial facilities are a strong fit for solar; we coordinate design, permitting, and installation from our Guelph base."}
                    </p>
                  )}
                  <p className="text-muted-foreground leading-relaxed">
                    {metroDescription} Solar panel installation in {cityName} gives you predictable, long-term
                    savings by converting the sun&apos;s energy into clean electricity for your home or business.
                    With Ontario&apos;s net metering program, excess power generated during sunny hours can earn
                    bill credits you use at night or in winter.
                  </p>
                </div>

                <div className="grid gap-4 md:gap-6 md:grid-cols-3">
                  <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">
                      Why {cityName} is a good fit
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      A mix of detached homes, small businesses, and open roof space makes solar a strong option
                      for many properties in {cityName}. We design around your roof, shading, and energy use
                      instead of taking a one-size-fits-all approach.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">
                      Residential considerations
                    </h3>
                    <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5">
                      <li>Roof condition, orientation, and shading are reviewed before we recommend a system.</li>
                      <li>
                        We size systems to your usage and utility rates to balance upfront cost and long-term
                        savings.
                      </li>
                      <li>
                        All work is completed to Ontario electrical code by ESA-licensed electricians and
                        experienced crews.
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">
                      Commercial considerations
                    </h3>
                    <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5">
                      <li>We evaluate roof structure, available space, and existing rooftop equipment.</li>
                      <li>
                        Systems are designed around demand charges and operating hours to maximize value over
                        25+ years.
                      </li>
                      <li>
                        Our team coordinates with facility managers to minimize disruption during installation.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Residential & Commercial */}
              <section className="space-y-10 animate-fade-in">
                <div className="grid gap-8 md:grid-cols-2 items-start">
                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                      Residential Solar Installation in {cityName}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Most {cityName} homeowners install solar to reduce monthly electricity bills and gain
                      more control over future rate increases. A properly designed rooftop system can offset
                      a significant portion of your annual usage, depending on roof size and consumption.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <SunMedium className="w-4 h-4 text-primary mt-0.5" />
                        <span>
                          High-efficiency Tier-1 panels with a{" "}
                          <strong>25-year performance warranty</strong>, paired with premium inverters and
                          racking for Ontario&apos;s climate.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Home className="w-4 h-4 text-primary mt-0.5" />
                        <span>
                          Careful roof integration that respects shingles, flashing, and manufacturer
                          guidelines so your warranty remains valid.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FileCheck className="w-4 h-4 text-primary mt-0.5" />
                        <span>
                          A complete experience—from on-site assessment and design through permits, ESA
                          inspections, installation, and monitoring setup.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6 shadow-card animate-slide-up">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      What to expect as a homeowner
                    </h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>Property and bill review to understand your goals and usage.</li>
                      <li>Custom layout and production estimate tailored to your roof.</li>
                      <li>Clear explanation of net metering and expected bill impact.</li>
                      <li>Organized installation day with a respectful, in-house crew.</li>
                      <li>Monitoring access and support if questions come up later.</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-start">
                  <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6 shadow-card animate-slide-up order-2 md:order-1">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      Commercial and institutional solar in {cityName}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      For commercial buildings, warehouses, plazas, and institutional facilities in {cityName},
                      solar offers a predictable hedge against rising utility costs while supporting ESG and
                      sustainability goals.
                    </p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>
                        Design that integrates with existing rooftop equipment and structural capacity.
                      </li>
                      <li>
                        Detailed production and cash-flow modelling over 25+ years to evaluate payback.
                      </li>
                      <li>
                        Experienced crews used to working around live operations and coordinating access.
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3 order-1 md:order-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                      Commercial Solar Systems in {cityName}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We design commercial systems around your building, utility tariff, and operating profile.
                      The goal is long-term, reliable production—not short-term shortcuts.
                    </p>
                  </div>
                </div>
              </section>

              {/* Solar Incentives and Financing */}
              <section className="space-y-6 animate-fade-in">
                <div className="space-y-3 max-w-3xl">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                    Solar Incentives and Financing in Ontario
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Even without large provincial rebates, solar panel installation in {cityName} can be
                    surprisingly accessible. Net metering allows you to earn bill credits for excess production,
                    and financing can spread the remaining cost over predictable monthly payments.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">
                      Net metering credits
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Extra energy generated during sunny hours is sent back to the grid for bill credits you can
                      use at night or in winter, improving long-term savings.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">
                      Financing options
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Many customers choose low-monthly-payment plans so they can move forward without paying
                      the full cost upfront.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">
                      Guided, not pressured
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      We explain incentives and payment options clearly and point you to our{" "}
                      <Link to="/finance" className="text-primary hover:underline">
                        financing page
                      </Link>{" "}
                      so you can decide what fits best.
                    </p>
                  </div>
                </div>
              </section>

              {/* Why Choose Solario */}
              <section className="space-y-6 animate-fade-in">
                <div className="space-y-3 max-w-3xl">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                    Why Choose Solario for Solar in {cityName}
                  </h2>
                  {cityIsCore && (
                    <p className="text-muted-foreground leading-relaxed">
                      Solario is based in Guelph and serves {cityName} and the surrounding region. We bring the
                      same installation standards, warranties, and support to every project across Ontario.
                    </p>
                  )}
                  <p className="text-muted-foreground leading-relaxed">
                    Our focus is on quality workmanship, clear communication, and long-term performance—not
                    quick wins. When you choose Solario, you partner with a team that plans to support your
                    system for decades.
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
                      ESA-licensed, TSSA-registered, Tesla Certified, and NABCEP Certified. Systems are designed
                      and installed to code and manufacturer specifications.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card animate-slide-up">
                    <div className="flex items-center gap-3 mb-2">
                      <FileCheck className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-semibold text-foreground">
                        Transparent proposals & modelling
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      We provide clear layouts, production estimates, and long-term performance modelling so you
                      can make informed decisions.
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
                      Our in-house teams handle installation and support. You have a single point of contact from
                      quote through activation and beyond.
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
                      We specify premium Tier-1 equipment with 25-year warranties and design for reliability, not
                      just nameplate output.
                    </p>
                  </div>
                </div>
              </section>

              {/* Bottom CTA */}
              <section className="bg-navy-dark rounded-xl p-6 md:p-8 shadow-card animate-fade-in">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-2 max-w-xl">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                      Ready to explore solar in {cityName}?
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      Share a few details about your property and goals. We&apos;ll design a tailored system,
                      walk you through expected savings, and answer your questions—no pressure, no obligation.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span>ESA-licensed installation</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <FileCheck className="w-4 h-4 text-primary" />
                        <span>25-year panel warranties</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start">
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact" className="inline-flex items-center gap-2">
                        Request Your Free Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <div className="flex flex-col gap-1 text-sm">
                      <span className="text-muted-foreground">
                        Prefer to speak with someone now?
                      </span>
                      <a
                        href="tel:+13823420754"
                        className="text-primary hover:text-primary-hover font-semibold"
                      >
                        Call +1 (382) 342-0754
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Explore services & nearby cities */}
              <section className="space-y-6 mb-4 animate-fade-in">
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                    Explore Solario services
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl">
                    In addition to solar panel installation in {cityName}, we offer a full suite of clean energy
                    services across Ontario.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
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
                        Premium rooftop and ground-mount systems for homes and businesses.
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
                        Troubleshooting, repairs, and performance improvements for existing systems.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/services/ev-charging"
                    className="bg-card border border-border rounded-lg p-4 md:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex items-start gap-3"
                  >
                    <Building2 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">EV charging</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Home and commercial Level 2 charging, integrated with your electrical service.
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
                        Backup power, time-of-use optimization, and better use of your solar production.
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="space-y-3 mt-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Nearby areas we also serve
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {nearby.map((key) => {
                      const nearbyConfig = LOCATION_CONFIG[key];
                      const anchorCityName = nearbyConfig.cityName;
                      const anchorText =
                        key === "toronto"
                          ? `Solar installers in ${anchorCityName}`
                          : `Solar company ${anchorCityName}`;
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
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-16 animate-fade-in">
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

