import { Helmet } from "react-helmet-async";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Solario Energy Inc.",
  url: "https://solario.ca",
  logo: "https://solario.ca/solario-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-382-342-0754",
    contactType: "sales",
    areaServed: "CA",
    availableLanguage: "English",
  },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://solario.ca/#localbusiness",
  name: "Solario Energy Inc.",
  image: "https://solario.ca/og-image.png",
  url: "https://solario.ca",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
  },
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
