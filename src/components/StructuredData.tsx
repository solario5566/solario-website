import { Helmet } from "react-helmet-async";

const DOMAIN = "https://solario.ca";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Solario Energy Inc.",
  url: DOMAIN,
  logo: `${DOMAIN}/solario-logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-382-342-0754",
    contactType: "sales",
    email: "info@solario.ca",
    areaServed: "CA",
    availableLanguage: "English",
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${DOMAIN}/#localbusiness`,
  name: "Solario Energy Inc.",
  image: `${DOMAIN}/og-image.png`,
  url: DOMAIN,
  telephone: "+1-382-342-0754",
  email: "info@solario.ca",
  address: {
    "@type": "PostalAddress",
    streetAddress: "92 Westra Drive",
    addressLocality: "Guelph",
    addressRegion: "ON",
    postalCode: "N1K 1Z7",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.5448,
    longitude: -80.2482,
  },
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "City", name: "Mississauga" },
    { "@type": "City", name: "Brampton" },
    { "@type": "City", name: "Vaughan" },
    { "@type": "City", name: "Markham" },
    { "@type": "City", name: "Guelph" },
    { "@type": "City", name: "Kitchener" },
    { "@type": "City", name: "Waterloo" },
    { "@type": "City", name: "Cambridge" },
    { "@type": "City", name: "Hamilton" },
    { "@type": "City", name: "Oakville" },
    { "@type": "City", name: "Burlington" },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${DOMAIN}/#website`,
  name: "Solario Energy Inc.",
  url: DOMAIN,
  description: "Professional solar panel installation, EV charging, battery storage, and heat pumps for Ontario homes and businesses.",
  publisher: { "@id": `${DOMAIN}/#localbusiness` },
  inLanguage: "en-CA",
};

export const OrganizationSchema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(organizationSchema)}
    </script>
  </Helmet>
);

export const LocalBusinessSchema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(localBusinessSchema)}
    </script>
  </Helmet>
);

export const WebSiteSchema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(webSiteSchema)}
    </script>
  </Helmet>
);

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSchema = ({ faqs }: { faqs: FAQItem[] }) => {
  if (!faqs?.length) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
