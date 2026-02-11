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
        backgroundImage={images.oliveGrovePath}
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

      <section className="page-section section-surface contact-form-section" aria-labelledby="contact-form-heading">
        <div className="page-container container-narrow">
          <h2 id="contact-form-heading" className="contact-form-section__title">
            {t("contact.email.title")}
          </h2>
          <p className="contact-form-section__subtitle">{t("contact.email.subtitle")}</p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
