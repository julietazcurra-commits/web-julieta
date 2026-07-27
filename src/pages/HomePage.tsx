import { useTranslation } from "react-i18next";
import { Hero } from "../components/home/Hero";
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

  const mapLabels = [
    { id: "argentina", left: "10%", top: "85%" },
    { id: "chile", left: "3%", top: "75%" },
    { id: "europe", left: "46%", top: "20%" },
    { id: "china", left: "75%", top: "12%" },
    { id: "asia", left: "90%", top: "28%" },
    { id: "middleEast", left: "64%", top: "52%" },
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

      <section className="home-selection" aria-labelledby="selection-heading">
        <div className="page-container">
          <div className="home-selection__head">
            <h2 id="selection-heading">{t("home.products.title")}</h2>
            <p>{t("home.products.subtitle")}</p>
          </div>
          <div className="home-selection__grid">
            {selectionItems.map((item) => (
              <article key={item.id} className="home-selection__card">
                <div className="home-selection__media">
                  <span className="home-selection__save" aria-hidden>♡</span>
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
        <div className="home-flexibility__box">
          <h2 id="flexibility-heading">{t("home.flexibility.title")}</h2>
          <p>{t("home.flexibility.text")}</p>
        </div>
      </section>

      <section className="home-excellence" aria-labelledby="excellence-heading">
        <div className="home-excellence__media">
          <img src={images.homeExcellence} alt={t("home.excellence.title")} loading="lazy" />
        </div>
        <div className="home-excellence__content">
          <h2 id="excellence-heading">{t("home.excellence.title")}</h2>
          <p>{t("home.excellence.text")}</p>
        </div>
      </section>

      <section className="home-presence" aria-labelledby="presence-heading">
        <div className="page-container">
          <div className="home-presence__head">
            <h2 id="presence-heading">{t("home.markets.title")}</h2>
            <p>{t("home.markets.subtitle")}</p>
          </div>
          <div className="home-presence__diagram">
            <svg
              className="home-presence__svg"
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M100,510 Q280,250 460,120" />
              <path d="M100,510 Q400,200 750,72" />
              <path d="M100,510 Q500,250 900,168" />
              <path d="M100,510 Q380,420 640,312" />
              <path d="M30,450 Q60,480 100,510" />
              <circle cx="100" cy="510" r="5" />
              <circle cx="30" cy="450" r="5" />
              <circle cx="460" cy="120" r="5" />
              <circle cx="750" cy="72" r="5" />
              <circle cx="900" cy="168" r="5" />
              <circle cx="640" cy="312" r="5" />
            </svg>
            {mapLabels.map((label) => (
              <span
                key={label.id}
                className="home-presence__label"
                style={{ left: label.left, top: label.top }}
              >
                {t(`home.markets.items.${label.id}`)}
              </span>
            ))}
          </div>
          <div className="home-presence__actions">
            <Button to="/markets" variant="outline">{t("home.markets.cta")}</Button>
          </div>
        </div>
      </section>

      <section className="home-final-cta" aria-labelledby="final-cta-heading">
        <img src={images.homeFinalCta} alt={t("home.cta.title")} className="home-final-cta__media" />
        <div className="home-final-cta__content page-container">
          <h2 id="final-cta-heading">{t("home.cta.title")}</h2>
          <p>{t("home.cta.text")}</p>
          <Button to="/contact" variant="outline">{t("home.cta.button")}</Button>
        </div>
      </section>
    </>
  );
}
