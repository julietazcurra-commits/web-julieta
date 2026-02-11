import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { images } from '../lib/images';
import { ProcessSteps } from '../components/logistics/ProcessSteps';
import { DocList } from '../components/logistics/DocList';
import { SectionTitle } from '../components/ui/SectionTitle';
import { PageBanner } from '../components/ui/PageBanner';
import './logistics.css';

const GALLERY_IMAGES = [
  { src: images.portAerial, alt: 'Aerial view of Argentine port' },
  { src: images.portContainers, alt: 'Port containers and cranes' },
  { src: images.shipSea, alt: 'Container ship at sea' },
  { src: images.portSunset, alt: 'Port at sunset' },
  { src: images.shipSkyline, alt: 'Ship and port skyline' },
];

function LogisticsPage() {
  const { t } = useTranslation();
  const fobCifRef = useRef<HTMLElement>(null);
  const fobCardRef = useRef<HTMLElement>(null);
  const cifCardRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const galleryImgs = galleryRef.current?.querySelectorAll('.logistics-gallery-item');
    if (!galleryImgs?.length) return;

    const ctx = gsap.context(() => {
      gsap.from(galleryImgs, {
        opacity: 0,
        y: 24,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 85%',
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="logistics-page">
      <PageBanner
        title={t('logistics.banner.title')}
        subtitle={t('logistics.banner.subtitle')}
        backgroundImage={images.portAerial}
        variant="light"
      />

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
              <p>
                {t('logistics.fobCif.fob.desc')}
              </p>
            </article>
            <article ref={cifCardRef} className="logistics-term-card">
              <h3>{t('logistics.fobCif.cif.title')}</h3>
              <p>
                {t('logistics.fobCif.cif.desc')}
              </p>
            </article>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <DocList />

      <section ref={galleryRef} className="logistics-gallery page-section" aria-labelledby="gallery-heading">
        <div className="page-container">
          <SectionTitle
            id="gallery-heading"
            title="Our Logistics in Action"
            subtitle="Argentine ports connecting to global markets"
          />
          <div className="logistics-gallery-grid">
            {GALLERY_IMAGES.map(({ src, alt }) => (
              <div key={src} className="logistics-gallery-item">
                <img src={src} alt={alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LogisticsPage;
