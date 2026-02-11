export function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info__item">
        <span className="contact-info__label">Location</span>
        <span className="contact-info__value">Argentina — Serving global markets from South America</span>
      </div>
      <div className="contact-info__item">
        <span className="contact-info__label">Email</span>
        <a href="mailto:sales@fruitcascade.com" className="contact-info__value contact-info__link">
          sales@fruitcascade.com
        </a>
      </div>
      <div className="contact-info__item">
        <span className="contact-info__label">Languages</span>
        <span className="contact-info__value">English &amp; Spanish</span>
      </div>
    </div>
  );
}
