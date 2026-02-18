import { useTranslation } from 'react-i18next';
import { PageBanner } from "../components/ui/PageBanner";
import { Button } from "../components/ui/Button";
import { useProducts } from "../hooks/useProducts";
import { images } from "../lib/images";
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
              </div>
            </div>
          </section>
        );
      })}

      <section className="page-section section-muted products-cta" aria-labelledby="products-cta-heading">
        <div className="page-container container-narrow products-cta__inner">
          <h2 id="products-cta-heading" className="products-cta__title">{t('products.cta.title')}</h2>
          <p className="products-cta__text">{t('products.cta.text')}</p>
          <Button to="/contact" variant="secondary">{t('products.cta.button')}</Button>
        </div>
      </section>
    </>
  );
}
