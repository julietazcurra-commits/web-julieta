import { useTranslation } from 'react-i18next';
import { PageBanner } from '../components/ui/PageBanner';
import { images } from '../lib/images';
import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import './about.css';

export function AboutPage() {
  const { t } = useTranslation();

  const commitmentItems = [
    { id: 'direct' },
    { id: 'quality' },
    { id: 'expertise' },
  ] as const;

  const whyItems = ['origin', 'track', 'custom', 'halal', 'trace', 'support'] as const;

  return (
    <>
      <PageBanner
        title={t('about.banner.title')}
        subtitle={t('about.banner.subtitle')}
        backgroundImage={images.heroWalnuts}
        variant="light"
      />

      <section className="page-section section-surface about-intro" aria-labelledby="about-intro-heading">
        <div className="page-container split">
          <div>
            <p className="kicker">{t('about.reliable.kicker')}</p>
            <h2 id="about-intro-heading" className="about-intro__title">
              {t('about.reliable.title')}
            </h2>
            <p className="about-intro__text">{t('about.reliable.p1')}</p>
            <p className="about-intro__text">{t('about.reliable.p2')}</p>
            <div className="about-intro__actions">
              <Button to="/contact" variant="secondary">
                {t('about.reliable.cta')}
              </Button>
            </div>
          </div>
          <div className="media-frame about-intro__media">
            <img src={images.walnutsHand} alt="Argentine walnuts and product quality" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="page-section section-muted" aria-labelledby="commitment-heading">
        <div className="page-container">
          <SectionTitle
            id="commitment-heading"
            title={t('about.commitment.title')}
            subtitle={t('about.commitment.subtitle')}
          />
          <div className="about-commitment__grid">
            {commitmentItems.map((item) => (
              <article key={item.id} className="soft-card">
                <h3>{t(`about.commitment.items.${item.id}.title`)}</h3>
                <p>{t(`about.commitment.items.${item.id}.text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-surface" aria-labelledby="why-heading">
        <div className="page-container">
          <SectionTitle
            id="why-heading"
            title={t('about.why.title')}
            subtitle={t('about.why.subtitle')}
          />
          <div className="about-why__grid">
            {whyItems.map((id) => (
              <article key={id} className="about-why__item">
                <h3 className="about-why__item-title">{t(`about.why.items.${id}.title`)}</h3>
                <p className="about-why__item-text">{t(`about.why.items.${id}.text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
