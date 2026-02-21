import { useTranslation } from "react-i18next";

export function ContactInfo() {
  const { t } = useTranslation();
  return (
    <div className="contact-info">
      <div className="contact-info__item">
        <span className="contact-info__label">{t("contactInfo.locationLabel")}</span>
        <span className="contact-info__value">{t("contactInfo.locationValue")}</span>
      </div>
      <div className="contact-info__item">
        <span className="contact-info__label">{t("contactInfo.emailLabel")}</span>
        <a href="mailto:contact@fruitcascade.com" className="contact-info__value contact-info__link">
          contact@fruitcascade.com
        </a>
      </div>
      <div className="contact-info__item">
        <span className="contact-info__label">{t("contactInfo.languagesLabel")}</span>
        <span className="contact-info__value">{t("contactInfo.languagesValue")}</span>
      </div>
    </div>
  );
}
