import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { images } from '../lib/images';
import { ProcessSteps } from '../components/logistics/ProcessSteps';
import { DocList } from '../components/logistics/DocList';
import { SectionTitle } from '../components/ui/SectionTitle';
import { PageBanner } from '../components/ui/PageBanner';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/seo/SEO';
import { StructuredData } from '../components/seo/StructuredData';
import './logistics.css';

function LogisticsPage() {
  const { t } = useTranslation();
  const fobCifRef = useRef<HTMLElement>(null);
  const fobCardRef = useRef<HTMLElement>(null);
  const cifCardRef = useRef<HTMLElement>(null);

  const fobHandles = t('logistics.fobCif.fob.handles', { returnObjects: true }) as unknown;
  const cifHandles = t('logistics.fobCif.cif.handles', { returnObjects: true }) as unknown;

  const fobHandlesList = Array.isArray(fobHandles) ? (fobHandles as string[]) : [];
  const cifHandlesList = Array.isArray(cifHandles) ? (cifHandles as string[]) : [];

  useEffect(() => {
    const fob = fobCardRef.current;
    const cif = cifCardRef.current;
    if (!fob || !cif) return;

    const ctx = gsap.context(() => {
      gsap.from([fob, cif], {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: fobCifRef.current,
          start: 'top 85%',
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="logistics-page">
      <SEO
        title={t("seo.logistics.title")}
        description={t("seo.logistics.description")}
        path="/logistics"
      />
      <StructuredData type="breadcrumb" items={[{ name: t("nav.logistics"), path: "/logistics" }]} />

      <PageBanner
        title={t('logistics.banner.title')}
        subtitle={t('logistics.banner.subtitle')}
        backgroundImage={images.heroLogistics}
        heroTheme="dark"
      />

      <section className="page-section section-surface logistics-intro" aria-labelledby="logistics-intro-heading">
        <div className="page-container container-narrow">
          <SectionTitle
            id="logistics-intro-heading"
            title={t('logistics.intro.title')}
            subtitle={t('logistics.intro.text')}
            decorativeLine
          />
        </div>
      </section>

      <section ref={fobCifRef} className="logistics-fob-cif page-section" aria-labelledby="fob-cif-heading">
        <div className="page-container">
          <SectionTitle
            id="fob-cif-heading"
            title={t('logistics.fobCif.title')}
            subtitle={t('logistics.fobCif.subtitle')}
          />
          <div className="logistics-fob-cif-grid">
            <article ref={fobCardRef} className="logistics-term-card">
              <h3>{t('logistics.fobCif.fob.title')}</h3>
              <p>{t('logistics.fobCif.fob.desc')}</p>
              {fobHandlesList.length > 0 && (
                <>
                  <h4 className="logistics-term-subtitle">{t('logistics.fobCif.fob.handlesTitle')}</h4>
                  <ul className="logistics-term-list">
                    {fobHandlesList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              <p className="logistics-term-buyer">{t('logistics.fobCif.fob.buyer')}</p>
            </article>
            <article ref={cifCardRef} className="logistics-term-card">
              <h3>{t('logistics.fobCif.cif.title')}</h3>
              <p>{t('logistics.fobCif.cif.desc')}</p>
              {cifHandlesList.length > 0 && (
                <>
                  <h4 className="logistics-term-subtitle">{t('logistics.fobCif.cif.handlesTitle')}</h4>
                  <ul className="logistics-term-list">
                    {cifHandlesList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              <p className="logistics-term-buyer">{t('logistics.fobCif.cif.buyer')}</p>
            </article>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <DocList />

      <section className="page-section section-surface logistics-port" aria-labelledby="port-heading">
        <div className="page-container split">
          <div className="media-frame logistics-port__media">
            <img src={images.portContainers} alt={t('a11y.images.logistics.port')} loading="lazy" />
          </div>
          <div>
            <p className="kicker">{t('logistics.port.subtitle')}</p>
            <h2 id="port-heading">{t('logistics.port.title')}</h2>
            {(t('logistics.port.text', { returnObjects: true }) as string[]).map((para, i) => (
              <p key={i} className="logistics-port__text">{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-muted logistics-compliance" aria-labelledby="compliance-heading">
        <div className="page-container">
          <SectionTitle
            id="compliance-heading"
            title={t('logistics.compliance.title')}
            subtitle={t('logistics.compliance.subtitle')}
          />
          <div className="logistics-compliance__grid">
            {(['food', 'import', 'trace'] as const).map((id) => (
              <article key={id} className="soft-card">
                <h3>{t(`logistics.compliance.items.${id}.title`)}</h3>
                <p>{t(`logistics.compliance.items.${id}.text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-surface logistics-cta" aria-labelledby="logistics-cta-heading">
        <div className="page-container container-narrow page-cta__inner">
          <h2 id="logistics-cta-heading" className="page-cta__title">{t('logistics.cta.title')}</h2>
          <p className="page-cta__text">{t('logistics.cta.text')}</p>
          <Button to="/contact" variant="secondary">{t('logistics.cta.button')}</Button>
        </div>
      </section>
    </div>
  );
}

export default LogisticsPage;
