import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHeroTheme } from "../context/HeroThemeContext";
import { Button } from "../components/ui/Button";
import { images } from "../lib/images";
import { SEO } from "../components/seo/SEO";
import { StructuredData } from "../components/seo/StructuredData";
import "./about.css";

export function AboutPage() {
  const { t } = useTranslation();
  const { setTheme } = useHeroTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  const craftItems = [
    { id: "origin", image: images.aboutCraftOrigen },
    { id: "process", image: images.aboutCraftProceso },
    { id: "delivery", image: images.aboutCraftEntrega },
  ] as const;

  return (
    <>
      <SEO
        title={t("seo.about.title")}
        description={t("seo.about.description")}
        path="/about"
      />
      <StructuredData type="breadcrumb" items={[{ name: t("nav.about"), path: "/about" }]} />

      <section className="about-hero">
        <img src={images.aboutHeroBanner} alt="" className="about-hero__media" />
        <div className="about-hero__content page-container">
          <span className="about-hero__kicker">{t("about.banner.kicker")}</span>
          <h1>{t("about.banner.title")}</h1>
          <p>{t("about.banner.subtitle")}</p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__media">
          <img src={images.aboutStory} alt="" loading="lazy" />
        </div>
        <div className="about-story__content">
          <span className="about-story__kicker">{t("about.story.kicker")}</span>
          <h2>{t("about.story.title")}</h2>
          <p>{t("about.story.text")}</p>
          <a className="btn about-story__cta" href="/contact">{t("about.story.cta")}</a>
        </div>
      </section>

      <section className="about-legacy">
        <div className="about-legacy__content">
          <p>{t("about.legacy.text")}</p>
        </div>
        <div className="about-legacy__media">
          <img src={images.aboutCosecha} alt="" loading="lazy" />
        </div>
      </section>

      <section className="about-craft" aria-labelledby="craft-heading">
        <div className="page-container">
          <h2 id="craft-heading" className="about-craft__title">{t("about.craft.title")}</h2>
          <div className="about-craft__grid">
            {craftItems.map((item) => (
              <div key={item.id} className="about-craft__item">
                <div className="about-craft__media">
                  <img src={item.image} alt="" loading="lazy" />
                  <span className="about-craft__label">{t(`about.craft.items.${item.id}.label`)}</span>
                </div>
                <p>{t(`about.craft.items.${item.id}.text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-final-cta" aria-labelledby="about-cta-heading">
        <img src={images.aboutFinalCta} alt="" className="about-final-cta__media" />
        <div className="about-final-cta__content page-container">
          <h2 id="about-cta-heading">{t("about.cta.title")}</h2>
          <p>{t("about.cta.text")}</p>
          <Button to="/contact" variant="outline">{t("about.cta.button")}</Button>
        </div>
      </section>
    </>
  );
}
