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
        title="Solar Panel Installation Ontario | Solario Energy"
        description="Solario Energy provides professional solar panel installation across Ontario including Toronto, Mississauga, Vaughan, and surrounding cities. 25-year panel warranty and financing available."
        keywords={[
          "solar panel installation ontario",
          "solar panel installation",
          "commercial solar installation",
          "solar maintenance",
          "solar installers",
          "solar companies",
          "solar installers toronto",
          "solar company mississauga",
        ]}
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