import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useProducts } from "../hooks/useProducts";
import { images } from "../lib/images";
import { Button } from "../components/ui/Button";
import { useHeroTheme } from "../context/HeroThemeContext";
import { SEO } from "../components/seo/SEO";
import { StructuredData } from "../components/seo/StructuredData";
import "./ProductDetail.css";

const SLUG_TO_SEO_KEY: Record<string, string> = {
  raisins: "raisins",
  "dried-plums": "driedPlums",
  walnuts: "walnuts",
  "olive-oil": "oliveOil",
};

export function ProductDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const { setTheme } = useHeroTheme();

  useEffect(() => {
    setTheme('light');
  }, [setTheme]);
  const { getProductBySlug } = useProducts();

  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <section className="page-section">
        <div className="page-container">
          <p>{t("productsDetail.notFound")}</p>
          <Button to="/products" variant="secondary">{t("productsDetail.back")}</Button>
        </div>
      </section>
    );
  }

  const mainImage = images[product.imageId];
  const seoKey = SLUG_TO_SEO_KEY[slug ?? ""] ?? "raisins";

  return (
    <section className="page-section">
      <SEO
        title={t(`seo.${seoKey}.title`)}
        description={t(`seo.${seoKey}.description`)}
        path={`/products/${slug}`}
        image={mainImage}
        type="product"
      />
      <StructuredData
        type="product"
        name={product.name}
        description={product.description}
        image={mainImage}
        slug={slug ?? ""}
      />
      <StructuredData
        type="breadcrumb"
        items={[
          { name: t("nav.products"), path: "/products" },
          { name: product.name, path: `/products/${slug}` },
        ]}
      />
      <div className="page-container">
        <Link
          to="/products"
          style={{
            display: "inline-block",
            marginBottom: "var(--space-xl)",
            color: "var(--color-accent)",
            fontSize: "14px",
            fontWeight: 500
          }}
        >
          ← {t('nav.products')}
        </Link>

        <div className="product-detail-grid">
          <div className="product-detail-image-wrap">
            <img
              src={mainImage}
              alt={product.name}
            />
          </div>

          <div>
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-description">
              {product.description}
            </p>

            <div className="product-specs-section">
              <h3 className="product-specs-title">{t('products.specs.title')}</h3>
              <dl>
                {product.specs.map((spec) => (
                  <div key={spec.label} className="product-spec-item">
                    <dt className="product-spec-label">{spec.label}</dt>
                    <dd className="product-spec-value">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {product.galleryIds.length > 0 && (
          <div className="product-gallery-section">
            <h3 className="product-gallery-title">{t("productsDetail.gallery")}</h3>
            <div className="product-gallery-grid">
              {product.galleryIds.map((id, i) => (
                <div key={id} className="product-gallery-item">
                  <img
                    src={images[id]}
                    alt={`${product.name} — ${t("productsDetail.galleryImageAlt", { n: i + 1 })}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
