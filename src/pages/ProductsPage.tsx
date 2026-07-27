import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHeroTheme } from "../context/HeroThemeContext";
import { Button } from "../components/ui/Button";
import { useProducts } from "../hooks/useProducts";
import { images } from "../lib/images";
import { SEO } from "../components/seo/SEO";
import { StructuredData } from "../components/seo/StructuredData";
import "./products.css";

export function ProductsPage() {
  const { t } = useTranslation();
  const { products } = useProducts();
  const { setTheme } = useHeroTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <>
      <SEO
        title={t("seo.products.title")}
        description={t("seo.products.description")}
        path="/products"
      />
      <StructuredData type="breadcrumb" items={[{ name: t("nav.products"), path: "/products" }]} />

      <section className="products-hero">
        <img src={images.productsHeroBanner} alt="" className="products-hero__media" />
        <div className="products-hero__content page-container">
          <h1>{t("products.banner.title")}</h1>
          <p>{t("products.banner.subtitle")}</p>
        </div>
      </section>

      <section className="products-intro" aria-labelledby="products-intro-heading">
        <div className="page-container">
          <p id="products-intro-heading" className="products-intro__text">{t("products.intro.text")}</p>
        </div>
      </section>

      {products.map((product, i) => {
        const reverse = i % 2 === 1;
        return (
          <section key={product.slug} id={product.slug} className="products-feature-section">
            <div className={`page-container products-feature ${reverse ? "products-feature--reverse" : ""}`}>
              <div className="products-feature__media">
                <img src={images[product.imageId]} alt={product.name} loading="lazy" />
              </div>
              <div className="products-feature__content">
                <span className="products-feature__kicker">{product.category}</span>
                <h2>{product.name}</h2>
                <p className="products-feature__desc">{product.description}</p>
                <div className="products-feature__specs">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="products-feature__spec">
                      <span className="products-feature__spec-label">{spec.label}</span>
                      <span className="products-feature__spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <a className="products-feature__cta" href="/contact">{t("products.inquiry")}</a>
              </div>
            </div>
          </section>
        );
      })}

      <section className="products-final-cta" aria-labelledby="products-cta-heading">
        <img src={images.productsFinalCta} alt="" className="products-final-cta__media" />
        <div className="products-final-cta__content page-container">
          <h2 id="products-cta-heading">{t("products.cta.title")}</h2>
          <p>{t("products.cta.text")}</p>
          <Button to="/contact" variant="outline">{t("products.cta.button")}</Button>
        </div>
      </section>
    </>
  );
}
