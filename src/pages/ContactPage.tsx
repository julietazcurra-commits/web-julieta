import { useTranslation } from "react-i18next";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactWhySection } from "../components/contact/ContactWhySection";
import { PageBanner } from "../components/ui/PageBanner";
import { images } from "../lib/images";
import "../styles/contact.css";

export function ContactPage() {
  const { t } = useTranslation();
  const kicker = t("contact.intro.kicker");
  const title = t("contact.intro.title");

  return (
    <div className="contact-page">
      <PageBanner
        title={t("contact.banner.title")}
        subtitle={t("contact.banner.subtitle")}
        backgroundImage={images.heroContact}
        heroTheme="dark"
      />

      <ContactWhySection />

      <section className="contact-split" aria-labelledby="contact-split-heading">
        <div className="contact-split__left">
          {kicker && kicker !== title && (
            <p className="kicker contact-split__kicker">{kicker}</p>
          )}
          <h2 id="contact-split-heading" className="contact-split__title">
            {title}
          </h2>
          <p className="contact-split__desc">{t("contact.intro.text")}</p>
          <div className="contact-split__rule" />
          <ContactInfo />
          <a href="mailto:sales@fruitcascade.com" className="contact-split__email-cta">
            sales@fruitcascade.com
          </a>
        </div>

        <div className="contact-split__right">
          <div className="contact-split__form-header">
            <h3 className="contact-split__form-title">{t("contact.email.title")}</h3>
            <p className="contact-split__form-sub">{t("contact.email.subtitle")}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
