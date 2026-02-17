import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import HowItWorks from "@/components/home/HowItWorks";
import RecentProjects from "@/components/home/RecentProjects";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/StructuredData";

const Index = () => {
  return (
    <PageLayout>
      <SEO
        title="Solario | Ontario's Trusted Solar Installer - Toronto & GTA"
        description="Solario installs premium solar systems, EV chargers, battery storage, and heat pumps for Ontario homes and businesses. 25-year warranty. Free quotes."
        path="/"
      />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <RecentProjects />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;