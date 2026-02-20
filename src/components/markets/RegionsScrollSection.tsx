import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { images, type ImageId } from '../../lib/images';

export interface RegionData {
  id: string;
  imageId: ImageId;
  imageAlt: string;
}

interface RegionsScrollSectionProps {
  regions: RegionData[];
}

export default function RegionsScrollSection({ regions }: RegionsScrollSectionProps) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const regionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const index = regionRefs.current.findIndex((r) => r === entry.target);
        if (index >= 0) {
          setActiveIndex(index);
          break;
        }
      }
    }, options);

    const refs = regionRefs.current.filter(Boolean);
    refs.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [regions.length]);

  return (
    <div ref={sectionRef} className="regions-scroll-section">
      <div className="regions-scroll-section__content">
        <div className="regions-scroll-section__text-column">
          {regions.map((r, i) => {
            const expertise = t(`markets.regions.items.${r.id}.expertise`, {
              returnObjects: true,
            }) as unknown;
            const expertiseList = Array.isArray(expertise) ? (expertise as string[]) : [];
            return (
              <div
                key={r.id}
                ref={(el) => {
                  regionRefs.current[i] = el;
                }}
                className={`regions-scroll-section__block ${i === activeIndex ? 'is-active' : ''}`}
                data-region={r.id}
              >
                <div className="regions-scroll-section__block-image-mobile">
                  <img
                    src={images[r.imageId]}
                    alt={r.imageAlt}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="regions-scroll-section__block-text">
                  <h3 className="regions-scroll-section__block-title">
                    {t(`markets.regions.items.${r.id}.title`)}
                  </h3>
                  <p className="regions-scroll-section__block-desc">
                    {t(`markets.regions.items.${r.id}.desc`)}
                  </p>
                  {expertiseList.length > 0 && (
                    <div className="regions-scroll-section__expertise">
                      <h4 className="regions-scroll-section__expertise-title">
                        {t('markets.regions.expertiseLabel')}
                      </h4>
                      <ul className="regions-scroll-section__expertise-list">
                        {expertiseList.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="regions-scroll-section__products">
                    <strong>{t('markets.regions.popularProductsLabel')}</strong>{' '}
                    {t(`markets.regions.items.${r.id}.products`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="regions-scroll-section__image-column">
          <div className="regions-scroll-section__image-sticky">
            <div className="regions-scroll-section__image-placeholder">
              {regions.map((r, i) => (
                <img
                  key={r.id}
                  src={images[r.imageId]}
                  alt={r.imageAlt}
                  className={`regions-scroll-section__image ${
                    i === activeIndex ? 'is-visible' : ''
                  }`}
                  loading="eager"
                  style={{ zIndex: i === activeIndex ? 1 : 0 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
