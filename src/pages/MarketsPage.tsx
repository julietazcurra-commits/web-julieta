import { useTranslation } from 'react-i18next';
import { images } from "../lib/images";
import RegionCard from "../components/markets/RegionCard";
import { PageBanner } from "../components/ui/PageBanner";
import "../styles/markets.css";

export function MarketsPage() {
  const { t } = useTranslation();

  const advantages = [
    { id: "multi-market" },
    { id: "regulatory" },
    { id: "flexible" },
    { id: "logistics" },
    { id: "docs" },
    { id: "private-label" },
  ];

  const regions = [
    {
      id: "asia",
      imageId: "shipSkyline" as const,
      imageAlt: "Ship and skyline – Asian trade routes",
    },
    {
      id: "china",
      imageId: "marketChina" as const,
      imageAlt: "China market – premium products",
    },
    {
      id: "middle-east",
      imageId: "portSunset" as const,
      imageAlt: "Port at sunset – Gulf shipping routes",
    },
    {
      id: "europe",
      imageId: "europeCanal" as const,
      imageAlt: "European canal and port",
    },
  ];

  return (
    <div className="markets-page">
      <PageBanner
        title={t('markets.banner.title')}
        subtitle={t('markets.banner.subtitle')}
        backgroundImage={images.earth2}
        variant="light"
      />

      <section className="page-section section-surface" aria-labelledby="markets-intro-heading">
        <div className="page-container container-narrow">
          <p className="markets-intro__text" id="markets-intro-heading">
            {t('markets.intro')}
          </p>
        </div>
      </section>

      <section className="markets-regions-section page-section" aria-labelledby="regions-heading">
        <div className="page-container">
          <h2 id="regions-heading" className="markets-page__section-title">
            {t('markets.regions.title')}
          </h2>
          <div className="regions-grid">
            {regions.map((r) => (
              <RegionCard
                key={r.id}
                title={t(`markets.regions.items.${r.id}.title`)}
                description={t(`markets.regions.items.${r.id}.desc`)}
                products={t(`markets.regions.items.${r.id}.products`)}
                imageId={r.imageId}
                imageAlt={r.imageAlt}
              />
            ))}
          </div>
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
    </div>
  );
}
