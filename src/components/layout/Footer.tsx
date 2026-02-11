import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './footer.css';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__inner page-container">
        <nav className="footer__nav">
          <Link to="/about">{t('nav.about')}</Link>
          <Link to="/products">{t('nav.products')}</Link>
          <Link to="/logistics">{t('nav.logistics')}</Link>
          <Link to="/markets">{t('nav.markets')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
        </nav>
        <a href="mailto:sales@fruitcascade.com" className="footer__email">
          sales@fruitcascade.com
        </a>
        <p className="footer__copy">© 2026 Fruit Cascade Exports</p>
      </div>
    </footer>
  );
}
