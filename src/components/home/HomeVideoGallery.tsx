import { useTranslation } from 'react-i18next';
import './HomeVideoGallery.css';

type VideoItem = {
  id: 'walnuts' | 'raisins';
  src: string;
};

export function HomeVideoGallery() {
  const { t } = useTranslation();

  const items: VideoItem[] = [
    { id: 'walnuts', src: '/videos/walnuts.mp4' },
    { id: 'raisins', src: '/videos/raisins.mp4' },
  ];

  return (
    <section className="page-section section-surface home-video-gallery" aria-labelledby="video-gallery-heading">
      <div className="page-container">
        <div className="home-video-gallery__header">
          <h2 id="video-gallery-heading" className="home-video-gallery__title">
            {t('home.videoGallery.title')}
          </h2>
          <p className="home-video-gallery__subtitle">{t('home.videoGallery.subtitle')}</p>
        </div>

        <div className="home-video-gallery__grid">
          {items.map((item) => (
            <article key={item.id} className="home-video-gallery__card">
              <div className="home-video-gallery__media" aria-hidden>
                <video className="home-video-gallery__video" autoPlay muted loop playsInline preload="metadata">
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
              <div className="home-video-gallery__body">
                <h3 className="home-video-gallery__cardTitle">{t(`home.products.items.${item.id}.title`)}</h3>
                <p className="home-video-gallery__cardText">{t(`home.products.items.${item.id}.desc`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

