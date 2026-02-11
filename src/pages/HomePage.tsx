import { useTranslation } from "react-i18next";
import { Hero } from "../components/home/Hero";
import { HeroProducts } from "../components/home/HeroProducts";
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

  return (
    <>
      <Hero />

      <section className="page-section section-surface home-trusted" aria-labelledby="trusted-heading">
        <div className="page-container container-narrow">
          <p className="kicker home-trusted__kicker">{t("home.trusted.kicker")}</p>
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

      <HeroProducts />

      <section className="page-section section-muted home-operations" aria-labelledby="operations-heading">
        <div className="page-container split">
          <div>
            <p className="kicker">{t("home.operations.kicker")}</p>
            <h2 id="operations-heading" className="home-operations__title">
              {t("home.operations.title")}
            </h2>
            <p className="home-operations__text">{t("home.operations.text")}</p>
            <ul className="home-operations__bullets">
              {([1, 2, 3] as const).map((n) => (
                <li key={n}>{t(`home.operations.bullets.${n}`)}</li>
              ))}
            </ul>
            <div className="home-operations__actions">
              <Button to="/logistics">{t("home.operations.cta")}</Button>
            </div>
          </div>

          <div className="media-frame home-operations__media">
            <img src={images.portContainers} alt="Argentine export operations and containers" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="page-section section-surface home-markets" aria-labelledby="markets-heading">
        <div className="page-container container-narrow">
          <h2 id="markets-heading" className="home-markets__title">
            {t("home.markets.title")}
          </h2>
          <p className="home-markets__subtitle">{t("home.markets.subtitle")}</p>
          <div className="home-markets__grid">
            {(["asia", "china", "middleEast", "europe"] as const).map((id) => (
              <div key={id} className="home-market-pill">
                <span className="home-market-pill__dot" aria-hidden />
                <span>{t(`home.markets.items.${id}`)}</span>
              </div>
            ))}
          </div>
          <div className="home-markets__actions">
            <Button to="/markets" variant="secondary">
              {t("home.markets.cta")}
            </Button>
          </div>
        </div>
      </section>

      <section className="home-cta" aria-labelledby="cta-heading">
        <div className="home-cta__bg" aria-hidden />
        <div className="home-cta__inner page-container">
          <h2 id="cta-heading" className="home-cta__title">
            {t("home.cta.title")}
          </h2>
          <p className="home-cta__text">{t("home.cta.text")}</p>
          <Button to="/contact" variant="outline" className="home-cta__button">
            {t("home.cta.button")}
          </Button>
        </div>
      </section>
    </>
  );
}
