import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ShieldCheck, FileCheck, Wrench, Headphones } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const whatYouGet = [
  "Diagnosis of underperforming or faulty systems",
  "Replacement of damaged panels and components",
  "Safety and performance assessments",
  "Work by ESA-licensed technicians",
  "Upgrade paths for older systems",
  "Clear report and recommendations",
];

const whySolario = [
  { icon: ShieldCheck, title: "Licensed & safe", text: "ESA-licensed electricians so repairs and upgrades meet code and keep your warranty valid where possible." },
  { icon: FileCheck, title: "Honest assessment", text: "We tell you what's wrong and what options you have—no unnecessary work, no pressure." },
  { icon: Wrench, title: "Quality repairs", text: "In-house technicians, proper parts, and workmanship we stand behind." },
  { icon: Headphones, title: "Support after repair", text: "We answer questions and help you get the most from your system going forward." },
];

const processSteps = [
  { step: "1", title: "Assessment", text: "We review your system, production data, and any issues you've noticed and give you a clear diagnosis." },
  { step: "2", title: "Recommendation & quote", text: "We explain what's needed—repair, replacement, or upgrade—and provide a transparent quote." },
  { step: "3", title: "Repair or upgrade", text: "Our crew carries out the work. We coordinate with manufacturers or utilities when required." },
  { step: "4", title: "Handoff", text: "We verify performance, walk you through any changes, and leave you with a path for ongoing support." },
];

const SolarRepair = () => {
  return (
    <PageLayout>
      <SEO
        title="Solar Repair & Panel Upgrade"
        description="Solar system repair, troubleshooting, and panel upgrades in Ontario. ESA-licensed technicians. Restore performance and extend the life of your system."
        path="/services/solar-repair"
      />

      <PageHero
        eyebrow="Solar Repair"
        title="Solar system repair and panel upgrades for Ontario homeowners"
        subtitle="Restore performance. Extend the life of your investment."
        description="If your solar system is underperforming, damaged, or simply aging, we diagnose the issue and provide clear repair or upgrade options. Our ESA-licensed technicians work on existing systems to restore output, improve safety, and keep your investment performing."
      >
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> ESA licensed</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> Honest assessment</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary shrink-0" /> No pressure</span>
        </div>
      </PageHero>

      {/* Who it's for */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Who this service is for
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Solar repair and panel upgrades are for homeowners and businesses who already have a system and are experiencing lower production, damage, or want to modernize. We diagnose underperformance, replace damaged or failed components, and offer upgrade paths so you can restore or improve output without replacing the entire system.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you're considering new solar instead, we also design and install full systems—see our <Link to="/services/solar-installation" className="text-primary hover:underline">solar installation</Link> service.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              What you get
            </h2>
            <ul className="space-y-3">
              {whatYouGet.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why choose Solario */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              Why choose Solario for solar repair
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Honest diagnosis and quality work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whySolario.map((item, i) => (
                <div key={i} className="flex gap-4 bg-card border border-border rounded-xl p-6">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-3">
              How it works
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              From assessment to repair or upgrade.
            </p>
            <div className="space-y-6">
              {processSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & support */}
      <section className="py-12 sm:py-16 md:py-20 bg-background overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Trust & support
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our repair and upgrade work is backed by our workmanship warranty. We use quality parts and follow manufacturer and code requirements so your system stays safe and performant.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We are ESA licensed—see our <Link to="/certifications" className="text-primary hover:underline">licenses and certifications</Link>. <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for an assessment or <Link to="/finance" className="text-primary hover:underline">ask about financing</Link> for larger upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-secondary overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-0">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Get a solar repair assessment
            </h2>
            <p className="text-muted-foreground mb-8">
              Tell us what's going on with your system. We'll recommend next steps—no obligation.
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

export default SolarRepair;
