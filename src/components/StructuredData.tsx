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
    streetAddress: "136 Winges Rd",
    addressLocality: "Vaughan",
    addressRegion: "ON",
    postalCode: "L4L 6C3",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7935,
    longitude: -79.5428,
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
    { "@type": "City", name: "Hamilton" },
    { "@type": "City", name: "Oakville" },
    { "@type": "City", name: "Burlington" },
    { "@type": "City", name: "Markham" },
    { "@type": "City", name: "Vaughan" },
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
