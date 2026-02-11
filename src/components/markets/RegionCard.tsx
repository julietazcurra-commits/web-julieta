import { useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { images, type ImageId } from '../../lib/images';

export interface RegionCardProps {
  title: string;
  description: string;
  products?: string;
  imageId: ImageId;
  imageAlt: string;
}

export default function RegionCard({ title, description, products, imageId, imageAlt }: RegionCardProps) {
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
        {products && (
          <p className="region-card__products">
            <strong>Products:</strong> {products}
          </p>
        )}
      </div>
    </article>
  );
}
