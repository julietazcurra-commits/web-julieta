import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./footer.css";

export function Footer() {
  const { t } = useTranslation();

  function handleNewsletterSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <footer className="footer">
      <div className="footer__inner page-container">
        <div className="footer__grid">
          <div className="footer__col footer__col--newsletter">
            <img src="/images/logo.webp" alt="Fruit Cascade Exports" className="footer__logo" />
            <p>{t("footer.newsletter.text")}</p>
            <form onSubmit={handleNewsletterSubmit} className="footer__newsletter-form">
              <input type="email" placeholder={t("footer.newsletter.placeholder")} aria-label={t("footer.newsletter.placeholder")} />
              <button type="submit">{t("footer.newsletter.button")}</button>
            </form>
          </div>

          <div className="footer__col">
            <h5>{t("footer.columns.products.title")}</h5>
            <Link to="/products#ciruela-seca">{t("footer.columns.products.items.driedPlums")}</Link>
            <Link to="/products#aceite-oliva">{t("footer.columns.products.items.oliveOil")}</Link>
            <Link to="/products#pasas-uva">{t("footer.columns.products.items.raisins")}</Link>
            <Link to="/products#nueces">{t("footer.columns.products.items.walnuts")}</Link>
          </div>

          <div className="footer__col">
            <h5>{t("footer.columns.company.title")}</h5>
            <Link to="/about">{t("footer.columns.company.items.about")}</Link>
            <Link to="/logistics">{t("footer.columns.company.items.logistics")}</Link>
            <Link to="/markets">{t("footer.columns.company.items.markets")}</Link>
            <Link to="/contact">{t("footer.columns.company.items.contact")}</Link>
          </div>

          <div className="footer__col">
            <h5>{t("footer.columns.contact.title")}</h5>
            <a href="mailto:contact@fruitcascade.com">contact@fruitcascade.com</a>
            <a href="#">{t("footer.columns.contact.instagram")}</a>
            <a href="#">{t("footer.columns.contact.linkedin")}</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>{t("footer.copyright")}</span>
          <span>{t("footer.location")}</span>
        </div>
      </div>
    </footer>
  );
}
