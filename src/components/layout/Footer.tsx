import { useTranslation } from 'react-i18next';
import './footer.css';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer__inner page-container">
        <a href="mailto:sales@fruitcascade.com" className="footer__email">
          sales@fruitcascade.com
        </a>
        <p className="footer__tagline">{t('footer.tagline')}</p>
        <p className="footer__copy">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
