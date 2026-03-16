import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  noindex?: boolean;
  keywords?: string[] | string;
  robots?: string;
}

const DOMAIN = "https://solario.ca";

const SEO = ({ title, description, path, type = "website", noindex = false, keywords, robots }: SEOProps) => {
  const url = `${DOMAIN}${path}`;
  const fullTitle = path === "/" ? title : `${title} | Solario`;
  const robotsContent = noindex ? "noindex, nofollow" : robots || "index, follow";
  const keywordsContent =
    typeof keywords === "string" ? keywords : keywords?.join(", ");

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={robotsContent} />
      {keywordsContent && <meta name="keywords" content={keywordsContent} />}

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
