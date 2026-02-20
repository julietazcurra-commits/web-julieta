import { images } from '../../lib/images';
import { Trans, useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import './Hero.css';

export function Hero() {
    const { t } = useTranslation();
    return (
        <section className="home-hero">
            <div className="home-hero__bg">
                <div className="home-hero__overlay" aria-hidden />
                <img
                    src={images.plumsCut}
                    alt={t('a11y.images.home.hero')}
                    className="home-hero__image"
                />
            </div>

            <div className="home-hero__content page-container">
                <h1 className="home-hero__title">
                    <Trans i18nKey="home.hero.title" />
                </h1>
                <p className="home-hero__subtitle">
                    <Trans i18nKey="home.hero.subtitle" />
                </p>
                <div className="home-hero__actions">
                    <Button to="/products" variant="secondary">
                        {t('home.products.cta')}
                    </Button>
                </div>
            </div>
        </section>
    );
}
