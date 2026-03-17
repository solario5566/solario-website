import { Helmet } from "react-helmet-async";

export interface SEOProps {
  /** Primary page title; brand suffix added automatically for non-home pages */
  title: string;
  /** Meta description (155–160 chars ideal for search, longer ok for social) */
  description: string;
  /** Canonical path (e.g. "/about"). Must start with /. */
  path: string;
  /** Open Graph type (default: website) */
  type?: string;
  /** Noindex this page (e.g. thank-you, utility pages) */
  noindex?: boolean;
  /** Optional keywords meta (use sparingly) */
  keywords?: string[] | string;
  /** Override robots content (default: index, follow or noindex,nofollow if noindex) */
  robots?: string;
  /** Optional OG/Twitter image URL (default: site og-image) */
  ogImage?: string;
  /** Optional alt text for OG/Twitter image */
  ogImageAlt?: string;
}

const DOMAIN = "https://solario.ca";
const DEFAULT_OG_IMAGE = `${DOMAIN}/og-image.png`;

const SEO = ({
  title,
  description,
  path,
  type = "website",
  noindex = false,
  keywords,
  robots,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = "Solario – Ontario solar installation and clean energy solutions",
}: SEOProps) => {
  const url = `${DOMAIN}${path}`;
  const fullTitle = path === "/" ? title : `${title} | Solario`;
  const robotsContent = noindex ? "noindex, nofollow" : robots ?? "index, follow";
  const keywordsContent =
    typeof keywords === "string" ? keywords : keywords?.join(", ");
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${DOMAIN}${ogImage}`;

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
      <meta property="og:image" content={imageUrl} />
      {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
      <meta property="og:site_name" content="Solario" />
      <meta property="og:locale" content="en_CA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {ogImageAlt && <meta name="twitter:image:alt" content={ogImageAlt} />}
    </Helmet>
  );
};

export default SEO;
