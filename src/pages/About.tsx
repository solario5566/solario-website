import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import {
  Home,
  Users,
  Star,
  Calendar,
  Heart,
  Shield,
  Wrench,
  Target,
  FileCheck,
  MessageSquare,
  LayoutList,
  Zap,
  Headphones,
  Check,
  ArrowRight,
} from "lucide-react";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const stats = [
  { icon: Calendar, value: "15+", label: "Years in Business" },
  { icon: Home, value: "1,500+", label: "Systems Installed" },
  { icon: Users, value: "20+", label: "Team Members" },
  { icon: Star, value: "4.9", label: " Rating" },
];

const differentiators = [
  {
    icon: Shield,
    title: "Quality-first installation standards",
    description:
      "We do not rush jobs. Every installation is completed to code, to manufacturer specs, and to a standard we stand behind. Clean workmanship and reliable execution are non-negotiable.",
  },
  {
    icon: MessageSquare,
    title: "Clear, honest guidance",
    description:
      "We explain your options in plain language. No pressure, no overselling. If a smaller system or a different approach makes more sense for you, we say so. You get recommendations you can trust.",
  },
  {
    icon: LayoutList,
    title: "End-to-end project coordination",
    description:
      "From consultation and design through permits, installation, inspection, and activation—we manage the process. You get a single point of contact and a clear path to completion.",
  },
  {
    icon: Zap,
    title: "Built for long-term performance",
    description:
      "Systems are designed and installed for reliability and warranty validity. We use quality equipment and follow best practices so your investment performs for years.",
  },
  {
    icon: Headphones,
    title: "Professional support from start to finish",
    description:
      "Questions before, during, or after the install are answered by our team. We are here for the life of your system, not just the installation day.",
  },
  {
    icon: Wrench,
    title: "In-house installation teams",
    description:
      "Our own trained and certified technicians handle every installation. No subcontractors. You get consistent quality and direct accountability.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Consultation & assessment",
    description:
      "We review your property, energy use, and goals. You get clear options and honest advice—no obligation.",
  },
  {
    step: "2",
    title: "System design & proposal",
    description:
      "A tailored design and transparent quote. We explain equipment, timeline, incentives, and what to expect.",
  },
  {
    step: "3",
    title: "Installation & approvals",
    description:
      "Our crew handles the install, permits, and inspections. We coordinate with utilities and authorities so the process stays smooth.",
  },
  {
    step: "4",
    title: "Ongoing support",
    description:
      "After activation, we remain your partner. Questions about performance, monitoring, or maintenance—we are here to help.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Honesty over sales",
    description:
      "We tell you what your property actually needs. If that means a smaller system or no solar at all, we say so. No pressure, no inflated recommendations.",
  },
  {
    icon: Shield,
    title: "Quality over speed",
    description:
      "Every connection, every panel, every wire is done right the first time. We do not cut corners to hit a date.",
  },
  {
    icon: Wrench,
    title: "In-house teams only",
    description:
      "No subcontractors. Our trained technicians handle every installation from start to finish. You know who is on your roof.",
  },
  {
    icon: Target,
    title: "Long-term thinking",
    description:
      "We build relationships, not one-off jobs. We are here for the life of your system—25 years and beyond.",
  },
];

const standardsList = [
  "Safety and code compliance on every job",
  "Transparent communication from quote to completion",
  "Accountability for workmanship and outcomes",
  "Customer-first recommendations, not upsells",
  "Documentation and clarity so you know what you are getting",
];

const whyChooseUs = [
  "Clear communication at every stage",
  "Organized execution with minimal hassle",
  "Quality-focused installations you can trust",
  "Support that continues after the install",
  "A team that treats your home like their own",
];

const About = () => {
  return (
    <PageLayout>
      <SEO
        title="About Solario"
        description="Meet the team behind Ontario's trusted solar installations. Quality-first workmanship, clear communication, and support from quote to long-term care."
        path="/about"
      />

      <PageHero
        eyebrow="About Solario"
        title="Trusted solar expertise, built for long-term value"
        subtitle="A better standard for residential and commercial solar in Ontario."
        description="Solario focuses on quality installations, clear guidance, and a professional customer experience. We help homeowners and businesses adopt solar with confidence—backed by licensing, insurance, and a team that stands behind its work."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 text-center"
            >
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
              <div className="text-xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* 2. Company story / mission */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Built around better solar experiences
            </h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Solario exists to make solar adoption straightforward, reliable, and worth the investment. We have completed more than 2,400 installations across Ontario and are trusted by over 1,500 homeowners and businesses. We focus on doing the job properly—quality workmanship, honest recommendations, and a smooth process from first contact to long-term support.
              </p>
              <p>
                We are not here to oversell or rush installations. We are here to design and install systems that perform, to communicate clearly at every step, and to stand behind our work. Our reputation is built on customers who trust us with a major home investment and feel confident in their choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What makes Solario different */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              What makes Solario different
            </h2>
            <p className="text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto">
              We differentiate through clarity, quality, and accountability—not hype.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 card-hover flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process / approach */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              How we work with you
            </h2>
            <p className="text-muted-foreground text-center mb-10 md:mb-12 max-w-xl mx-auto">
              A clear, organized process from first conversation to ongoing support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-card-foreground mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Standards / values / trust */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              Built on trust, safety & accountability
            </h2>
            <p className="text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto">
              The principles behind every project we take on.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 flex gap-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-card-foreground mb-1.5">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Our standards
              </h3>
              <ul className="space-y-3">
                {standardsList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why customers choose us */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              Why customers choose Solario
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
              Homeowners and businesses choose us for a professional, low-friction experience and work they can trust.
            </p>
            <ul className="space-y-3 max-w-md mx-auto">
              {whyChooseUs.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground/90">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Work with a team focused on quality, clarity, and long-term value
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore our <Link to="/services" className="text-primary hover:underline">solar, EV charging, battery, and heat pump services</Link>, or
              get a free, no-obligation quote. We will walk you through your options and next steps.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="inline-flex items-center gap-2">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
};

export default About;
