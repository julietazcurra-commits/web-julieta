import { useTranslation } from 'react-i18next';
import { PageBanner } from "../components/ui/PageBanner";
import { Button } from "../components/ui/Button";
import { SectionTitle } from "../components/ui/SectionTitle";
import { LocationPinIcon } from "../components/common/LocationPinIcon";
import { useProducts } from "../hooks/useProducts";
import { images } from "../lib/images";
import "./products.css";

export function ProductsPage() {
  const { t } = useTranslation();
  const { products } = useProducts();
  const originLabel = t('products.specs.origin');

  return (
    <>
      <PageBanner
        title={t('products.banner.title')}
        subtitle={t('products.banner.subtitle')}
        backgroundImage={images.heroProducts}
        heroTheme="light"
      />

      <section className="page-section section-surface products-intro" aria-labelledby="products-intro-heading">
        <div className="page-container container-narrow">
          <SectionTitle
            id="products-intro-heading"
            title={t('products.intro.title')}
            subtitle={t('products.intro.text')}
            decorativeLine
          />
        </div>
      </section>

      {products.map((product, i) => {
        const reverse = i % 2 === 1;
        const originSpec = product.specs.find((spec) => spec.label === originLabel) ?? null;
        const visibleSpecs = product.specs.filter((spec) => spec.label !== originLabel);

        return (
          <section
            key={product.slug}
            id={product.slug}
            className={`page-section ${reverse ? "section-muted" : "section-surface"}`}
          >
            <div className={`page-container split products-feature ${reverse ? "split--reverse products-feature--reverse" : ""}`}>
              <div className="media-frame products-feature__media">
                <img src={images[product.imageId]} alt={product.name} loading="lazy" />
                {originSpec && (
                  <div className="products-feature__origin-badge" aria-label={`${originLabel}: ${originSpec.value}`}>
                    <LocationPinIcon className="products-feature__origin-icon" ariaHidden />
                    <strong className="products-feature__origin-value">{originSpec.value}</strong>
                  </div>
                )}
              </div>
              <div className="products-feature__content">
                <h2 className="products-feature__title">{product.name}</h2>
                <p className="products-feature__desc">{product.description}</p>
                {visibleSpecs.length > 0 && (
                  <dl className="products-feature__specs" aria-label={t('products.specs.title')}>
                    {visibleSpecs.map((spec) => (
                      <div key={spec.label} className="products-feature__spec">
                        <dt className="products-feature__spec-label">{spec.label}</dt>
                        <dd className="products-feature__spec-value">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
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
