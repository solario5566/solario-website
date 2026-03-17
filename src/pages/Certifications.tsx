import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  BadgeCheck,
  Car,
  GraduationCap,
  HardHat,
  Umbrella,
  Sun,
  Wrench,
  Headphones,
  FileCheck,
  Shield,
  Users,
  BookOpen,
  Check,
  ArrowRight,
} from "lucide-react";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const certifications = [
  {
    icon: ShieldCheck,
    title: "ESA Licensed",
    description:
      "Licensed by the Electrical Safety Authority of Ontario. All electrical work is performed to provincial safety standards, so your installation is compliant and insurable.",
  },
  {
    icon: BadgeCheck,
    title: "TSSA Registered",
    description:
      "Registered with the Technical Standards and Safety Authority for gas and propane work. We meet regulatory requirements for any combined or related installations.",
  },
  {
    icon: Car,
    title: "Tesla Certified Installer",
    description:
      "Authorized Tesla Powerwall and solar installer. Our technicians are trained by Tesla on current products and installation procedures.",
  },
  {
    icon: GraduationCap,
    title: "NABCEP Certified",
    description:
      "Team members hold North American Board of Certified Energy Practitioners certification—the leading industry standard for solar installation competency.",
  },
  {
    icon: HardHat,
    title: "WSIB Covered",
    description:
      "Full Workplace Safety and Insurance Board coverage in place. You and our workers are protected throughout every job.",
  },
  {
    icon: Umbrella,
    title: "$2M Liability Insurance",
    description:
      "$2M liability insurance coverage for your peace of mind. You are protected in the unlikely event of property damage or third-party claims.",
  },
  {
    icon: Sun,
    title: "SolarEdge Certified Installer",
    description:
      "Certified to install and service SolarEdge systems to manufacturer standards. Ensures correct setup, warranty validity, and long-term performance.",
  },
  {
    icon: Wrench,
    title: "Manufacturer Trained Installers",
    description:
      "Installers are trained on manufacturer specifications and industry best practices. Systems are installed for safety, reliability, and full warranty support.",
  },
  {
    icon: Headphones,
    title: "Ongoing System Support",
    description:
      "Continued support for system questions, performance concerns, and post-installation guidance after your project is complete.",
  },
];

const whyItMatters = [
  {
    icon: FileCheck,
    title: "Code-compliant work",
    description:
      "Our licensing and certifications mean your project is designed and installed to current electrical and building codes. Inspections and sign-offs are handled properly.",
  },
  {
    icon: Shield,
    title: "Insurance and worker protection",
    description:
      "WSIB and $2M liability coverage protect you and our team. You are not exposed to unnecessary risk, and workers are covered on your property.",
  },
  {
    icon: Users,
    title: "Trained installation teams",
    description:
      "In-house technicians are trained on manufacturer systems and safety practices. You get consistent quality and accountability from start to finish.",
  },
  {
    icon: BookOpen,
    title: "Manufacturer-aligned standards",
    description:
      "Following manufacturer guidelines keeps warranties valid and systems performing as designed. We do not cut corners that could void your coverage.",
  },
];

const standardsList = [
  "Permits and inspections managed for every project",
  "Installation practices aligned with manufacturer requirements",
  "Safety-focused workmanship and job-site practices",
  "Documentation and records for your peace of mind",
  "Clear accountability from design through completion",
];

const Certifications = () => {
  return (
    <PageLayout>
      <SEO
        title="Licenses & Certifications"
        description="ESA licensed, TSSA registered, Tesla and SolarEdge certified, NABCEP certified. Solario's credentials for safe, compliant Ontario installations."
        path="/certifications"
      />

      <PageHero
        eyebrow="Licenses & credentials"
        title="Certifications & Credentials"
        subtitle="Fully licensed, insured, and trained to deliver safe, compliant, high-quality installations."
        description="The credentials below reflect real standards in safety, workmanship, regulatory compliance, and manufacturer alignment. We maintain them so you can trust that your project is in qualified hands from design through completion."
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-primary shrink-0" />
            9 credentials maintained
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-primary shrink-0" />
            Ontario licensed
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-primary shrink-0" />
            Fully insured
          </span>
        </div>
      </PageHero>

      {/* 2. Main certifications grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              Our credentials
            </h2>
            <p className="text-muted-foreground text-center mb-10 md:mb-12 max-w-xl mx-auto">
              Each credential is maintained in good standing and directly supports the quality and compliance of your installation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 card-hover flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                    <cert.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why this matters */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              Why this matters to you
            </h2>
            <p className="text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto">
              Credentials are not just paperwork. They translate into lower risk, proper protection, and work you can rely on.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyItMatters.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 flex gap-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
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

      {/* 4. Trust / standards */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
              Built on safety, compliance & accountability
            </h2>
            <p className="text-muted-foreground text-center mb-8 md:mb-10">
              Beyond formal credentials, we operate to clear standards so every project is handled professionally from start to finish.
            </p>
            <ul className="space-y-3">
              {standardsList.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to work with a fully licensed and insured installer?
            </h2>
            <p className="text-muted-foreground mb-6">
              See our <Link to="/services" className="text-primary hover:underline">solar installation, EV charging, battery storage, and heat pump services</Link>, or
              get a free quote. Our team will walk you through options and next steps.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="inline-flex items-center gap-2">
                Get Free Quote
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

export default Certifications;
