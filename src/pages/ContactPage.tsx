import { useTranslation } from "react-i18next";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactInfo } from "../components/contact/ContactInfo";
import { PageBanner } from "../components/ui/PageBanner";
import { images } from "../lib/images";
import "../styles/contact.css";
import { Button } from "../components/ui/Button";

export function ContactPage() {
  const { t } = useTranslation();
  return (
    <div className="contact-page">
      <PageBanner
        title={t('contact.banner.title')}
        subtitle={t('contact.banner.subtitle')}
        backgroundImage={images.heroOlive}
        variant="light"
      />

      <section className="page-section section-surface contact-intro" aria-labelledby="contact-intro-heading">
        <div className="page-container container-narrow">
          <p className="kicker contact-intro__kicker">{t('contact.intro.kicker')}</p>
          <h2 id="contact-intro-heading" className="contact-intro__title">
            {t('contact.intro.title')}
          </h2>
          <p className="contact-intro__text">{t('contact.intro.text')}</p>
        </div>
      </section>

      <section className="page-section section-muted contact-card-section">
        <div className="page-container">
          <div className="contact-card">
            <div className="contact-card__content">
              <ContactInfo />
              <div className="contact-card__actions">
                <Button href="mailto:sales@fruitcascade.com" variant="secondary">
                  sales@fruitcascade.com
                </Button>
              </div>
            </div>
            <div className="contact-card__media">
              <img src={images.portSunset} alt="Port operations and global shipping" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-email-band" aria-labelledby="contact-email-heading">
        <div className="contact-email-band__bg" aria-hidden />
        <div className="page-container contact-email-band__inner">
          <h2 id="contact-email-heading" className="contact-email-band__title">
            {t('contact.email.title')}
          </h2>
          <p className="contact-email-band__subtitle">{t('contact.email.subtitle')}</p>
          <ul className="contact-email-band__list">
            {([1, 2, 3, 4] as const).map((n) => (
              <li key={n}>{t(`contact.email.items.${n}`)}</li>
            ))}
          </ul>
          <div className="contact-email-band__form">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="page-section section-surface contact-why" aria-labelledby="contact-why-heading">
        <div className="page-container">
          <h2 id="contact-why-heading" className="contact-why__title">
            {t('contact.why.title')}
          </h2>
          <div className="contact-why__grid">
            {(["multi-market", "regulatory", "flexible"] as const).map((id) => (
              <article key={id} className="soft-card">
                <h3>{t(`markets.advantages.items.${id}.title`)}</h3>
                <p>{t(`markets.advantages.items.${id}.text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
