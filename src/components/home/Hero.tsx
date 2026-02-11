import { useRef, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import gsap from 'gsap';
import { images } from '../../lib/images';
import { Button } from '../ui/Button';
import './Hero.css';

export function Hero() {
    const contentRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;

        const tl = gsap.timeline();
        tl.from(content.children, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.2
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section className="home-hero">
            <div className="home-hero__bg">
                <div className="home-hero__overlay"></div>
                <img
                    src={images.heroPlums}
                    alt="Dried plums close-up"
                    className="home-hero__image"
                />
            </div>

            <div className="home-hero__content page-container" ref={contentRef}>
                <h1 className="home-hero__title">
                    <Trans i18nKey="home.hero.title" />
                </h1>
                <p className="home-hero__subtitle">
                    <Trans i18nKey="home.hero.subtitle" />
                </p>
                <div className="home-hero__actions">
                    <Button to="/products" variant="outline">
                        {t('hero.explore')}
                    </Button>
                    <Button to="/contact" variant="outline">
                        {t('hero.contact')}
                    </Button>
                </div>
            </div>
        </section>
    );
}
