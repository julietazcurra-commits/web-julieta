import { useTranslation } from 'react-i18next';
import { images } from "../lib/images";
import RegionsScrollSection from "../components/markets/RegionsScrollSection";
import { PageBanner } from "../components/ui/PageBanner";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/seo/SEO";
import { StructuredData } from "../components/seo/StructuredData";
import "../styles/markets.css";

export function MarketsPage() {
  const { t } = useTranslation();

  const advantages = [
    { id: "multi-market" },
    { id: "regulatory" },
    { id: "flexible" },
    { id: "logistics" },
    { id: "supply" },
    { id: "support" },
  ];

  const regions = [
    {
      id: "asia",
      imageId: "shipSkyline" as const,
      imageAlt: t("a11y.images.markets.asia"),
    },
    {
      id: "china",
      imageId: "marketChina" as const,
      imageAlt: t("a11y.images.markets.china"),
    },
    {
      id: "middle-east",
      imageId: "portSunset" as const,
      imageAlt: t("a11y.images.markets.middleEast"),
    },
    {
      id: "europe",
      imageId: "europeCanal" as const,
      imageAlt: t("a11y.images.markets.europe"),
    },
  ];

  return (
    <div className="markets-page">
      <SEO
        title={t("seo.markets.title")}
        description={t("seo.markets.description")}
        path="/markets"
        image="https://fruitcascade.com/images/markets.webp"
      />
      <StructuredData type="breadcrumb" items={[{ name: t("nav.markets"), path: "/markets" }]} />

      <PageBanner
        title={t('markets.banner.title')}
        subtitle={t('markets.banner.subtitle')}
        backgroundImage={images.markets}
        heroTheme="dark"
      />

      <section className="page-section section-surface markets-intro" aria-labelledby="markets-intro-heading">
        <div className="page-container container-narrow">
          <SectionTitle
            id="markets-intro-heading"
            title={t('markets.intro.title')}
            subtitle={t('markets.intro.text')}
            decorativeLine
          />
        </div>
      </section>

      <section className="markets-regions-section page-section" aria-labelledby="regions-heading">
        <div className="page-container">
          <h2 id="regions-heading" className="markets-page__section-title">
            {t('markets.regions.title')}
          </h2>
          <RegionsScrollSection regions={regions} />
        </div>
      </section>

      <section className="markets-advantages-section page-section section-muted" aria-labelledby="advantages-heading">
        <div className="page-container">
          <h2 id="advantages-heading" className="markets-page__section-title markets-page__advantages-title">
            {t('markets.advantages.title')}
          </h2>
          <div className="markets-advantages">
            {advantages.map((a) => (
              <article key={a.id} className="markets-advantage">
                <h3 className="markets-advantage__title">{t(`markets.advantages.items.${a.id}.title`)}</h3>
                <p className="markets-advantage__text">{t(`markets.advantages.items.${a.id}.text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-surface markets-expanding" aria-labelledby="expanding-heading">
        <div className="page-container container-narrow markets-expanding__inner">
          <h2 id="expanding-heading" className="markets-expanding__title">{t('markets.expanding.title')}</h2>
          <p className="markets-expanding__text">{t('markets.expanding.text')}</p>
        </div>
      </section>

      <section className="page-section section-muted markets-cta" aria-labelledby="markets-cta-heading">
        <div className="page-container container-narrow page-cta__inner">
          <h2 id="markets-cta-heading" className="page-cta__title">{t('markets.cta.title')}</h2>
          <p className="page-cta__text">{t('markets.cta.text')}</p>
          <Button to="/contact" variant="secondary">{t('markets.cta.button')}</Button>
        </div>
      </section>
    </div>
  );
}
