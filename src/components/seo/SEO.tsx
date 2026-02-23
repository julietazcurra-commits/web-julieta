import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SITE_URL = "https://fruitcascade.com";
const SITE_NAME = "Fruit Cascade Exports";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/plums-fresh.webp`;

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "product";
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
}: SEOProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("es") ? "es" : "en";
  const locale = lang === "es" ? "es_AR" : "en_US";
  const canonicalUrl = `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
