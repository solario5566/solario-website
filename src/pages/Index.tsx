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
import { OrganizationSchema, LocalBusinessSchema, WebSiteSchema, FAQSchema } from "@/components/StructuredData";
import { homeFaqs } from "@/components/home/FAQSection";

const Index = () => {
  return (
    <PageLayout>
      <SEO
        title="Solario | Ontario's Trusted Solar Installer - Toronto & GTA"
        description="Solario installs premium solar systems, EV chargers, battery storage, and heat pumps for Ontario homes and businesses."
        path="/"
      />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebSiteSchema />
      <FAQSchema faqs={homeFaqs} />
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