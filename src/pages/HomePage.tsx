import { useTranslation } from "react-i18next";
import { Hero } from "../components/home/Hero";
import { HeroProducts } from "../components/home/HeroProducts";
import { LocationPinIcon } from "../components/common/LocationPinIcon";
import { Button } from "../components/ui/Button";
import { images } from "../lib/images";
import "./home.css";

export function HomePage() {
  const { t } = useTranslation();

  const trustItems = [
    { id: "expertise" },
    { id: "quality" },
    { id: "reach" },
  ] as const;

  const operationsKicker = t("home.operations.kicker");

  return (
    <>
      <Hero />

      <HeroProducts />

      <section className="page-section section-muted home-trusted" aria-labelledby="trusted-heading">
        <div className="page-container container-narrow">
          <h2 id="trusted-heading" className="home-trusted__title">
            {t("home.trusted.title")}
          </h2>
          <p className="home-trusted__text">{t("home.trusted.text")}</p>
        </div>

        <div className="page-container">
          <div className="home-trusted__grid">
            {trustItems.map((item) => (
              <article key={item.id} className="soft-card">
                <h3>{t(`home.trusted.items.${item.id}.title`)}</h3>
                <p>{t(`home.trusted.items.${item.id}.text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-surface home-operations" aria-labelledby="operations-heading">
        <div className="page-container split">
          <div>
            {operationsKicker && <p className="kicker">{operationsKicker}</p>}
            <h2 id="operations-heading" className="home-operations__title">
              {t("home.operations.title")}
            </h2>
            <p className="home-operations__text">{t("home.operations.text")}</p>
            <ul className="home-operations__bullets">
              {([1, 2, 3, 4] as const).map((n) => (
                <li key={n}>{t(`home.operations.bullets.${n}`)}</li>
              ))}
            </ul>
            <div className="home-operations__actions">
              <Button to="/logistics">{t("home.operations.cta")}</Button>
            </div>
          </div>

          <div className="media-frame home-operations__media">
            <img src={images.portContainers} alt={t("a11y.images.home.operations")} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="page-section section-muted home-markets" aria-labelledby="markets-heading">
        <div className="page-container container-narrow">
          <h2 id="markets-heading" className="home-markets__title">
            {t("home.markets.title")}
          </h2>
          <p className="home-markets__subtitle">{t("home.markets.subtitle")}</p>
          <div className="home-markets__grid">
            {(["asia", "china", "middleEast", "europe"] as const).map((id) => (
              <div key={id} className="home-market-icon">
                <div className="home-market-icon__badge" aria-hidden>
                  <LocationPinIcon className="home-market-icon__svg" ariaHidden />
                </div>
                <span className="home-market-icon__label">{t(`home.markets.items.${id}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-surface home-ready" aria-labelledby="ready-heading">
        <div className="page-container container-narrow home-ready__inner">
          <h2 id="ready-heading" className="home-ready__title">
            {t("home.cta.title")}
          </h2>
          <p className="home-ready__text">{t("home.cta.text")}</p>
          <Button href="mailto:sales@fruitcascade.com" variant="secondary" className="home-ready__button">
            sales@fruitcascade.com
          </Button>
        </div>
      </section>
    </>
  );
}
