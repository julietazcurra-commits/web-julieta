import { useTranslation } from "react-i18next";
import { Hero } from "../components/home/Hero";
import { LocationPinIcon } from "../components/common/LocationPinIcon";
import { Button } from "../components/ui/Button";
import { images } from "../lib/images";
import { SEO } from "../components/seo/SEO";
import { StructuredData } from "../components/seo/StructuredData";
import "./home.css";

export function HomePage() {
  const { t } = useTranslation();

  const selectionItems = [
    { id: "freshFruit", image: images.homeSelectionFreshFruit },
    { id: "driedFruit", image: images.homeSelectionDriedFruit },
    { id: "oliveOil", image: images.homeSelectionOliveOil },
  ] as const;

  return (
    <>
      <SEO
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        path="/"
      />
      <StructuredData type="organization" />
      <StructuredData type="website" />

      <Hero />

      <section className="page-section section-surface home-selection" aria-labelledby="selection-heading">
        <div className="page-container">
          <h2 id="selection-heading" className="home-selection__title">
            {t("home.products.title")}
          </h2>
          <p className="home-selection__subtitle">{t("home.products.subtitle")}</p>
          <div className="card-grid home-selection__grid">
            {selectionItems.map((item) => (
              <article key={item.id} className="soft-card home-selection__card">
                <div className="media-frame home-selection__media">
                  <img src={item.image} alt={t(`home.products.items.${item.id}.title`)} loading="lazy" />
                </div>
                <h3>{t(`home.products.items.${item.id}.title`)}</h3>
                <p>{t(`home.products.items.${item.id}.desc`)}</p>
              </article>
            ))}
          </div>
          <div className="home-selection__actions">
            <Button to="/products">{t("home.products.cta")}</Button>
          </div>
        </div>
      </section>

      <section className="home-flexibility" aria-labelledby="flexibility-heading">
        <img src={images.homeFlexibility} alt={t("home.flexibility.title")} className="home-flexibility__media" />
        <div className="home-flexibility__overlay" aria-hidden />
        <div className="home-flexibility__content page-container">
          <h2 id="flexibility-heading">{t("home.flexibility.title")}</h2>
          <p>{t("home.flexibility.text")}</p>
        </div>
      </section>

      <section className="page-section section-surface home-excellence" aria-labelledby="excellence-heading">
        <div className="page-container split split--reverse">
          <div className="media-frame home-excellence__media">
            <img src={images.homeExcellence} alt={t("home.excellence.title")} loading="lazy" />
          </div>
          <div>
            <h2 id="excellence-heading" className="home-excellence__title">
              {t("home.excellence.title")}
            </h2>
            <p className="home-excellence__text">{t("home.excellence.text")}</p>
          </div>
        </div>
      </section>

      <section className="page-section section-muted home-presence" aria-labelledby="presence-heading">
        <div className="page-container container-narrow">
          <h2 id="presence-heading" className="home-presence__title">
            {t("home.markets.title")}
          </h2>
          <p className="home-presence__subtitle">{t("home.markets.subtitle")}</p>
          <div className="home-presence__grid">
            {(["asia", "china", "middleEast", "europe"] as const).map((id) => (
              <div key={id} className="home-market-icon">
                <div className="home-market-icon__badge" aria-hidden>
                  <LocationPinIcon className="home-market-icon__svg" ariaHidden />
                </div>
                <span className="home-market-icon__label">{t(`home.markets.items.${id}`)}</span>
              </div>
            ))}
          </div>
          <div className="home-presence__actions">
            <Button to="/markets" variant="outline">{t("home.markets.cta")}</Button>
          </div>
        </div>
      </section>

      <section className="home-final-cta" aria-labelledby="final-cta-heading">
        <img src={images.homeFinalCta} alt={t("home.cta.title")} className="home-final-cta__media" />
        <div className="home-final-cta__overlay" aria-hidden />
        <div className="home-final-cta__content page-container">
          <h2 id="final-cta-heading">{t("home.cta.title")}</h2>
          <p>{t("home.cta.text")}</p>
          <Button to="/contact" variant="white">{t("home.cta.button")}</Button>
        </div>
      </section>
    </>
  );
}
