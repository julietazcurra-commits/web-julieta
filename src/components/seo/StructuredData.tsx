import { Helmet } from "react-helmet-async";

const SITE_URL = "https://fruitcascade.com";

interface OrganizationSchemaProps {
  type: "organization";
}

interface WebSiteSchemaProps {
  type: "website";
}

interface BreadcrumbSchemaProps {
  type: "breadcrumb";
  items: Array<{ name: string; path: string }>;
}

interface ProductSchemaProps {
  type: "product";
  name: string;
  description: string;
  image: string;
  slug: string;
}

type StructuredDataProps =
  | OrganizationSchemaProps
  | WebSiteSchemaProps
  | BreadcrumbSchemaProps
  | ProductSchemaProps;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Fruit Cascade Exports",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon.svg`,
  },
  description:
    "Argentine export company specialized in premium dried fruits and extra virgin olive oil for global markets.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "sales@fruitcascade.com",
    contactType: "sales",
    availableLanguage: ["English", "Spanish"],
  },
  areaServed: ["Asia", "China", "Middle East", "Europe"],
  knowsAbout: [
    "Dried Fruits Export",
    "Raisins",
    "Dried Plums",
    "Walnuts",
    "Extra Virgin Olive Oil",
    "FOB Trade Terms",
    "CIF Trade Terms",
    "Argentine Agricultural Products",
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Fruit Cascade Exports",
  description:
    "Premium Argentine dried fruits and olive oil exporter serving global markets.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: ["en", "es"],
};

function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    ],
  };
}

function buildProductSchema(props: ProductSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: props.name,
    description: props.description,
    image: `${SITE_URL}${props.image}`,
    url: `${SITE_URL}/products/${props.slug}`,
    brand: {
      "@type": "Brand",
      name: "Fruit Cascade Exports",
    },
    countryOfOrigin: {
      "@type": "Country",
      name: "Argentina",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  };
}

export function StructuredData(props: StructuredDataProps) {
  let schema: object;

  switch (props.type) {
    case "organization":
      schema = organizationSchema;
      break;
    case "website":
      schema = webSiteSchema;
      break;
    case "breadcrumb":
      schema = buildBreadcrumbSchema(props.items);
      break;
    case "product":
      schema = buildProductSchema(props);
      break;
    default:
      return null;
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
