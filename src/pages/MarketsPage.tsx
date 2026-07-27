import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHeroTheme } from "../context/HeroThemeContext";
import { Button } from "../components/ui/Button";
import { images } from "../lib/images";
import { SEO } from "../components/seo/SEO";
import { StructuredData } from "../components/seo/StructuredData";
import "./markets.css";

export function MarketsPage() {
  const { t } = useTranslation();
  const { setTheme } = useHeroTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  const adaptationItems = t("markets.adaptation.items", { returnObjects: true }) as unknown;
  const adaptationList = Array.isArray(adaptationItems) ? (adaptationItems as string[]) : [];

  return (
    <>
      <SEO
        title={t("seo.markets.title")}
        description={t("seo.markets.description")}
        path="/markets"
        image={`https://fruitcascade.com${images.marketsHeroBanner}`}
      />
      <StructuredData type="breadcrumb" items={[{ name: t("nav.markets"), path: "/markets" }]} />

      <section className="markets-hero">
        <img src={images.marketsHeroBanner} alt="" className="markets-hero__media" />
        <div className="markets-hero__content page-container">
          <h1>{t("markets.banner.title")}</h1>
          <p>{t("markets.banner.subtitle")}</p>
        </div>
      </section>

      <section className="markets-intro">
        <div className="page-container">
          <p>{t("markets.intro.text")}</p>
        </div>
      </section>

      <section className="markets-region-quad">
        <div className="markets-region-quad__media">
          <img src={images.marketsAsiaChina} alt="" loading="lazy" />
        </div>
        <div className="markets-region-quad__text">
          <h3>{t("markets.regions.asia.title")}</h3>
          <p>{t("markets.regions.asia.text")}</p>
        </div>
        <div className="markets-region-quad__text">
          <h3>{t("markets.regions.middleEast.title")}</h3>
          <p>{t("markets.regions.middleEast.text")}</p>
        </div>
        <div className="markets-region-quad__media">
          <img src={images.marketsMedioOriente} alt="" loading="lazy" />
        </div>
      </section>

      <section className="markets-region-trio">
        <div className="markets-region-trio__text">
          <h3>{t("markets.regions.europe.title")}</h3>
          <p>{t("markets.regions.europe.text")}</p>
        </div>
        <div className="markets-region-trio__media">
          <img src={images.marketsEuropaAmerica} alt="" loading="lazy" />
        </div>
        <div className="markets-region-trio__text">
          <h3>{t("markets.regions.americas.title")}</h3>
          <p>{t("markets.regions.americas.text")}</p>
        </div>
      </section>

      <section className="markets-split">
        <div className="markets-split__media">
          <img src={images.marketsInterno} alt="" loading="lazy" />
        </div>
        <div className="markets-split__content">
          <h2>{t("markets.domestic.title")}</h2>
          <p>{t("markets.domestic.text")}</p>
        </div>
      </section>

      <section className="markets-split markets-split--reverse">
        <div className="markets-split__content">
          <h2>{t("markets.adaptation.title")}</h2>
          <p>{t("markets.adaptation.text")}</p>
          {adaptationList.length > 0 && (
            <ul className="markets-split__list">
              {adaptationList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="markets-split__media">
          <img src={images.marketsAdaptacionNormativas} alt="" loading="lazy" />
        </div>
      </section>

      <section className="markets-final-cta" aria-labelledby="markets-cta-heading">
        <img src={images.marketsFinalCta} alt="" className="markets-final-cta__media" />
        <div className="markets-final-cta__content page-container">
          <h2 id="markets-cta-heading">{t("markets.cta.title")}</h2>
          <p>{t("markets.cta.text")}</p>
          <Button to="/contact" variant="outline">{t("markets.cta.button")}</Button>
        </div>
      </section>
    </>
  );
}
