import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { images } from '../../lib/images';
import { Button } from '../ui/Button';
import './HeroProducts.css';

export function HeroProducts() {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

	  const heroProducts = [
	    {
	      id: 'plums',
	      slug: 'dried-plums',
	      image: images.plumsBox,
	    },
	    {
	      id: 'oliveOil',
	      slug: 'olive-oil',
	      image: images.heroOlive,
	    },
	    {
	      id: 'raisins',
	      slug: 'raisins',
	      image: images.heroRaisins,
	    },
	    {
	      id: 'walnuts',
	      slug: 'walnuts',
	      image: images.walnutsAlt1,
	    },
	  ];

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
    const cta = ctaRef.current;
    if (!title || !subtitle || cards.length === 0) return;

    gsap.set([title, subtitle, ...cards], { opacity: 0, y: 24 });
    if (cta) gsap.set(cta, { opacity: 0, y: 40 });

    const tl = gsap.timeline();
    tl.to(title, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to(subtitle, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .to(cards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' }, '-=0.2');
    if (cta) {
      tl.to(cta, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.15');
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="hero-products">
      <div className="hero-products-inner page-container">
        <h2 ref={titleRef} className="hero-products-title">
          {t('home.products.title')}
        </h2>
        <p ref={subtitleRef} className="hero-products-subtitle">
          {t('home.products.subtitle')}
        </p>
        <div className="hero-products-grid" role="list" aria-label={t('home.products.title')}>
          {heroProducts.map((product, i) => (
            <Link
              key={product.id}
              to={`/products#${product.slug}`}
              className="hero-product-card"
              role="listitem"
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
            >
              <div className="hero-product-card-media">
                <img src={product.image} alt={t(`home.products.items.${product.id}.title`)} loading="eager" />
                <div className="hero-product-card-overlay" aria-hidden />
              </div>
              <div className="hero-product-card-content">
                <h3 className="hero-product-card-title">{t(`home.products.items.${product.id}.title`)}</h3>
                <p className="hero-product-card-desc">{t(`home.products.items.${product.id}.desc`)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div ref={ctaRef} className="hero-products-cta">
          <Button to="/products">{t('home.products.cta')}</Button>
        </div>
      </div>
    </section>
  );
}
