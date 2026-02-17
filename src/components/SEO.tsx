import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  noindex?: boolean;
}

const DOMAIN = "https://solario.ca";

const SEO = ({ title, description, path, type = "website", noindex = false }: SEOProps) => {
  const url = `${DOMAIN}${path}`;
  const fullTitle = path === "/" ? title : `${title} | Solario`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`${DOMAIN}/og-image.png`} />
      <meta property="og:site_name" content="Solario" />
      <meta property="og:locale" content="en_CA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${DOMAIN}/og-image.png`} />
    </Helmet>
  );
};

export default SEO;
