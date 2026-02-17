import PageLayout from "@/components/layout/PageLayout";
import { ShieldCheck, BadgeCheck, Car, GraduationCap, HardHat, Umbrella } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const certifications = [
  {
    icon: ShieldCheck,
    title: "ESA Licensed",
    description:
      "Fully licensed by the Electrical Safety Authority of Ontario. All our electrical work meets or exceeds provincial safety standards.",
  },
  {
    icon: BadgeCheck,
    title: "TSSA Registered",
    description:
      "Registered with the Technical Standards and Safety Authority for gas and propane installations, ensuring complete compliance.",
  },
  {
    icon: Car,
    title: "Tesla Certified Installer",
    description:
      "Authorized Tesla Powerwall and Solar installer. Our technicians are trained directly by Tesla on their latest products.",
  },
  {
    icon: GraduationCap,
    title: "NABCEP Certified",
    description:
      "Our team holds North American Board of Certified Energy Practitioners certification—the gold standard in solar installation.",
  },
  {
    icon: HardHat,
    title: "WSIB Covered",
    description:
      "Full Workplace Safety and Insurance Board coverage protects you and our workers during every installation.",
  },
  {
    icon: Umbrella,
    title: "$5M Liability Insurance",
    description:
      "Comprehensive liability insurance coverage gives you peace of mind knowing you're fully protected.",
  },
];

const Certifications = () => {
  return (
    <PageLayout>
      <SEO title="Certifications" description="ESA Licensed, TSSA Registered, Tesla Certified, and NABCEP Certified. Solario maintains the highest industry standards." path="/certifications" />
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-navy">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Licensed, Certified, and Fully Insured
            </h1>
            <p className="text-muted-foreground">
              Your safety and satisfaction are our top priorities. We maintain the highest industry certifications and comprehensive insurance coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 card-hover"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Solario, we don't cut corners. Every installation is completed by our in-house team of licensed professionals who take pride in their work. We carry all necessary certifications, maintain comprehensive insurance, and stand behind our work with industry-leading warranties. When you choose Solario, you're choosing a partner committed to excellence.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
};

export default Certifications;
