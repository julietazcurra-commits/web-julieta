import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { images, type ImageId } from '../../lib/images';

export interface RegionCardProps {
  title: string;
  description: string;
  expertise?: string[];
  products?: string;
  imageId: ImageId;
  imageAlt: string;
}

export default function RegionCard({ title, description, expertise, products, imageId, imageAlt }: RegionCardProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref, { y: 30, duration: 0.6, start: 'top 85%' });

  const imageSrc = images[imageId];

  return (
    <article ref={ref} className="region-card">
      <div className="region-card__image-wrap">
        <img src={imageSrc} alt={imageAlt} className="region-card__image" />
      </div>
      <div className="region-card__content">
        <h3 className="region-card__title">{title}</h3>
        <p className="region-card__description">{description}</p>
        {expertise && expertise.length > 0 && (
          <div className="region-card__expertise">
            <h4 className="region-card__expertise-title">{t('markets.regions.expertiseLabel')}</h4>
            <ul className="region-card__expertise-list">
              {expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {products && (
          <p className="region-card__products">
            <strong>{t('markets.regions.popularProductsLabel')}</strong> {products}
          </p>
        )}
      </div>
    </article>
  );
}
