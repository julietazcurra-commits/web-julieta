import { useTranslation } from 'react-i18next';
import { PageBanner } from "../components/ui/PageBanner";
import { useProducts } from "../hooks/useProducts";
import { images } from "../lib/images";
import { Button } from "../components/ui/Button";
import "./products.css";

export function ProductsPage() {
  const { t } = useTranslation();
  const { products } = useProducts();

  return (
    <>
      <PageBanner
        title={t('products.banner.title')}
        subtitle={t('products.banner.subtitle')}
        backgroundImage={images.oliveDrops}
        variant="light"
      />

      <section className="page-section section-surface products-intro">
        <div className="page-container container-narrow">
          <p className="products-intro__text">{t('products.intro')}</p>
        </div>
      </section>

      {products.map((product, i) => {
        const reverse = i % 2 === 1;
        return (
          <section
            key={product.slug}
            id={product.slug}
            className={`page-section ${reverse ? "section-muted" : "section-surface"}`}
          >
            <div className={`page-container split ${reverse ? "split--reverse products-feature--reverse" : ""}`}>
              <div className="media-frame products-feature__media">
                <img src={images[product.imageId]} alt={product.name} loading="lazy" />
              </div>
              <div className="products-feature__content">
                <h2 className="products-feature__title">{product.name}</h2>
                <p className="products-feature__desc">{product.description}</p>
                <dl className="products-feature__specs" aria-label={t('products.specs.title')}>
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="products-feature__spec">
                      <dt className="products-feature__spec-label">{spec.label}</dt>
                      <dd className="products-feature__spec-value">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="products-feature__actions">
                  <Button to={`/products/${product.slug}`} variant="secondary">
                    {t('products.viewDetails')}
                  </Button>
                  <Button to="/contact">{t('products.requestInfo')}</Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
