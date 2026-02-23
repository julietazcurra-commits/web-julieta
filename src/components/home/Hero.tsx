import { useEffect, useRef, useState } from 'react';
import { images } from '../../lib/images';
import { Trans, useTranslation } from 'react-i18next';
import { useHeroTheme } from '../../context/HeroThemeContext';
import { Button } from '../ui/Button';
import './Hero.css';

export function Hero() {
    const { t } = useTranslation();
    const { setTheme } = useHeroTheme();

    useEffect(() => {
        setTheme('dark');
    }, [setTheme]);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [useVideo, setUseVideo] = useState(false);

    useEffect(() => {
        setUseVideo(false); // Siempre usar imagen hero minimalista
    }, []);

    useEffect(() => {
        if (useVideo && videoRef.current) {
            videoRef.current.play().catch(() => {});
        }
    }, [useVideo]);

    return (
        <section className="home-hero">
            <div className="home-hero__bg">
                <div className="home-hero__overlay" aria-hidden />
                {!useVideo ? (
                    <img
                        src={images.heroHome}
                        alt={t('a11y.images.home.hero')}
                        className="home-hero__media"
                    />
                ) : (
                    <video
                        ref={videoRef}
                        className="home-hero__media"
                        src="/videos/raisins.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-hidden
                    />
                )}
            </div>

            <div className="home-hero__content page-container">
                <h1 className="home-hero__title">
                    <Trans i18nKey="home.hero.title" />
                </h1>
                <p className="home-hero__subtitle">
                    <Trans i18nKey="home.hero.subtitle" />
                </p>
                <div className="home-hero__actions">
                    <Button to="/products" variant="white">
                        {t('home.products.cta')}
                    </Button>
                </div>
            </div>
        </section>
    );
}
