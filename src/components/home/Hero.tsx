import { images } from '../../lib/images';
import { Trans } from 'react-i18next';
import './Hero.css';

export function Hero() {
    return (
        <section className="home-hero">
            <div className="home-hero__bg">
                <div className="home-hero__overlay" aria-hidden />
                <img
                    src={images.plumsCut}
                    alt="Fresh plums close-up"
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
            </div>
        </section>
    );
}
