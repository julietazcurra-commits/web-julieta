import { useEffect, useRef, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { useHeroTheme } from "../context/HeroThemeContext";
import { images } from "../lib/images";
import { SEO } from "../components/seo/SEO";
import { StructuredData } from "../components/seo/StructuredData";
import "./contact.css";

const MAILTO = "mailto:contact@fruitcascade.com";

export function ContactPage() {
  const { t } = useTranslation();
  const { setTheme } = useHeroTheme();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  const whyItems = ["response", "quotes", "direct"] as const;
  const whyImages = {
    response: images.contactRespuestaAgil,
    quotes: images.contactCotizacionesMedida,
    direct: images.contactAtencionDirecta,
  } as const;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const parts = [
      data.get("name") && `${t("contact.form.body.name")}: ${data.get("name")}`,
      data.get("email") && `${t("contact.form.body.email")}: ${data.get("email")}`,
      data.get("company") && `${t("contact.form.body.company")}: ${data.get("company")}`,
      data.get("message") && `${t("contact.form.body.message")}:\n${data.get("message")}`,
    ].filter(Boolean);
    const body = encodeURIComponent(parts.join("\n\n"));
    const subject = encodeURIComponent(t("contact.form.subject"));
    window.open(`${MAILTO}?subject=${subject}&body=${body}`, "_blank", "noopener");
  }

  return (
    <>
      <SEO
        title={t("seo.contact.title")}
        description={t("seo.contact.description")}
        path="/contact"
      />
      <StructuredData type="breadcrumb" items={[{ name: t("nav.contact"), path: "/contact" }]} />

      <section className="contact-hero">
        <img src={images.contactHeroBanner} alt="" className="contact-hero__media" />
        <div className="contact-hero__content page-container">
          <span className="contact-hero__kicker">{t("contact.banner.kicker")}</span>
          <h1>{t("contact.banner.title")}</h1>
          <p>{t("contact.banner.subtitle")}</p>
        </div>
      </section>

      <section className="contact-why-grid">
        {whyItems.map((id) => (
          <div key={id} className="contact-why-grid__item">
            <img src={whyImages[id]} alt="" className="contact-why-grid__media" />
            <div className="contact-why-grid__content">
              <h3>{t(`contact.why.items.${id}.title`)}</h3>
              <p>{t(`contact.why.items.${id}.text`)}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="contact-form-section">
        <img src={images.contactFormBg} alt="" className="contact-form-section__bg" />
        <div className="contact-form-section__overlay" />
        <div className="page-container contact-form-section__grid">
          <div className="contact-form-section__info">
            <span className="contact-form-section__kicker">{t("contact.direct.kicker")}</span>
            <h2>{t("contact.direct.title")}</h2>
            <p>{t("contact.direct.text")}</p>
            <ul className="contact-info-list">
              <li>
                <span className="contact-info-list__label">{t("contact.direct.info.email.label")}</span>
                contact@fruitcascade.com
              </li>
              <li>
                <span className="contact-info-list__label">{t("contact.direct.info.location.label")}</span>
                {t("contact.direct.info.location.value")}
              </li>
              <li>
                <span className="contact-info-list__label">{t("contact.direct.info.hours.label")}</span>
                {t("contact.direct.info.hours.value")}
              </li>
            </ul>
            <a href="mailto:contact@fruitcascade.com" className="btn contact-form-section__mail-cta">
              {t("contact.direct.cta")}
            </a>
          </div>

          <div className="contact-form-card">
            <h3>{t("contact.form.title")}</h3>
            <p>{t("contact.form.subtitle")}</p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="contact-form-card__row">
                <label htmlFor="contact-name">{t("contact.form.fields.name.label")}</label>
                <input id="contact-name" name="name" type="text" placeholder={t("contact.form.fields.name.placeholder")} />
              </div>
              <div className="contact-form-card__row">
                <label htmlFor="contact-email">{t("contact.form.fields.email.label")}</label>
                <input id="contact-email" name="email" type="email" placeholder={t("contact.form.fields.email.placeholder")} />
              </div>
              <div className="contact-form-card__row">
                <label htmlFor="contact-company">{t("contact.form.fields.company.label")}</label>
                <input id="contact-company" name="company" type="text" placeholder={t("contact.form.fields.company.placeholder")} />
              </div>
              <div className="contact-form-card__row">
                <label htmlFor="contact-message">{t("contact.form.fields.message.label")}</label>
                <textarea id="contact-message" name="message" placeholder={t("contact.form.fields.message.placeholder")} />
              </div>
              <button type="submit" className="btn contact-form-card__submit">
                {t("contact.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
