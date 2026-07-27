import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHeroTheme } from "../context/HeroThemeContext";
import { Button } from "../components/ui/Button";
import { images } from "../lib/images";
import { SEO } from "../components/seo/SEO";
import { StructuredData } from "../components/seo/StructuredData";
import "./logistics.css";

function LogisticsPage() {
  const { t } = useTranslation();
  const { setTheme } = useHeroTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  const incotermItems = ["terms", "docs", "formats"] as const;

  return (
    <>
      <SEO
        title={t("seo.logistics.title")}
        description={t("seo.logistics.description")}
        path="/logistics"
      />
      <StructuredData type="breadcrumb" items={[{ name: t("nav.logistics"), path: "/logistics" }]} />

      <section className="logistics-hero">
        <img src={images.logisticsHeroBanner} alt="" className="logistics-hero__media" />
        <div className="logistics-hero__content page-container">
          <h1>{t("logistics.banner.title")}</h1>
          <p>{t("logistics.banner.subtitle")}</p>
        </div>
      </section>

      <section className="logistics-plain-split">
        <div className="logistics-plain-split__content">
          <p>{t("logistics.intro.text")}</p>
        </div>
        <div className="logistics-plain-split__media">
          <img src={images.logisticsDiseno} alt="" loading="lazy" />
        </div>
      </section>

      <section className="logistics-split">
        <div className="logistics-split__media">
          <img src={images.logisticsAndes} alt="" loading="lazy" />
        </div>
        <div className="logistics-split__content">
          <h2>{t("logistics.hub.title")}</h2>
          <p>{t("logistics.hub.text1")}</p>
          <p>{t("logistics.hub.text2")}</p>
        </div>
      </section>

      <section className="logistics-incoterms" aria-labelledby="incoterms-heading">
        <div className="page-container">
          <h2 id="incoterms-heading" className="logistics-incoterms__title">{t("logistics.incoterms.title")}</h2>
          <p className="logistics-incoterms__subtitle">{t("logistics.incoterms.subtitle")}</p>
          <div className="logistics-incoterms__grid">
            {incotermItems.map((id) => (
              <div key={id} className="logistics-incoterms__card">
                <h3>{t(`logistics.incoterms.items.${id}.title`)}</h3>
                <p>{t(`logistics.incoterms.items.${id}.text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="logistics-split logistics-split--reverse">
        <div className="logistics-split__content">
          <h2>{t("logistics.global.title")}</h2>
          <p>{t("logistics.global.text1")}</p>
          <p>{t("logistics.global.text2")}</p>
        </div>
        <div className="logistics-split__media">
          <img src={images.logisticsPeras} alt="" loading="lazy" />
        </div>
      </section>

      <section className="logistics-coordination">
        <div className="page-container logistics-coordination__inner">
          <h2>{t("logistics.coordination.title")}</h2>
          <p>{t("logistics.coordination.text1")}</p>
          <p>{t("logistics.coordination.text2")}</p>
        </div>
      </section>

      <section className="logistics-final-cta" aria-labelledby="logistics-cta-heading">
        <img src={images.logisticsFinalCta} alt="" className="logistics-final-cta__media" />
        <div className="logistics-final-cta__content page-container">
          <h2 id="logistics-cta-heading">{t("logistics.cta.title")}</h2>
          <p>{t("logistics.cta.text")}</p>
          <Button to="/contact" variant="outline">{t("logistics.cta.button")}</Button>
        </div>
      </section>
    </>
  );
}

export default LogisticsPage;
