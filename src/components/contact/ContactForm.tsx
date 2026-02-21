import { useRef, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

const MAILTO = 'mailto:contact@fruitcascade.com';

type MailtoBodyLabels = {
  products: string;
  quantities: string;
  terms: string;
  destination: string;
  requirements: string;
};

function buildMailtoBody(form: HTMLFormElement, labels: MailtoBodyLabels): string {
  const data = new FormData(form);
  const parts = [
    data.get('products') && `${labels.products}: ${data.get('products')}`,
    data.get('quantities') && `${labels.quantities}: ${data.get('quantities')}`,
    data.get('terms') && `${labels.terms}: ${data.get('terms')}`,
    data.get('destination') && `${labels.destination}: ${data.get('destination')}`,
    data.get('requirements') && `${labels.requirements}:\n${data.get('requirements')}`,
  ].filter(Boolean);
  return parts.join('\n\n');
}

export function ContactForm() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const labels: MailtoBodyLabels = {
      products: t('contactForm.body.products'),
      quantities: t('contactForm.body.quantities'),
      terms: t('contactForm.body.terms'),
      destination: t('contactForm.body.destination'),
      requirements: t('contactForm.body.requirements'),
    };

    const body = encodeURIComponent(buildMailtoBody(form, labels));
    const subject = encodeURIComponent(t('contactForm.subject'));
    window.open(`${MAILTO}?subject=${subject}&body=${body}`, '_blank', 'noopener');
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
      <div className="contact-form__row">
        <label htmlFor="contact-products" className="contact-form__label">
          {t('contactForm.productsLabel')}
        </label>
        <input
          id="contact-products"
          name="products"
          type="text"
          className="contact-form__input"
          placeholder={t('contactForm.productsPlaceholder')}
        />
      </div>
      <div className="contact-form__row">
        <label htmlFor="contact-quantities" className="contact-form__label">
          {t('contactForm.quantitiesLabel')}
        </label>
        <input
          id="contact-quantities"
          name="quantities"
          type="text"
          className="contact-form__input"
          placeholder={t('contactForm.quantitiesPlaceholder')}
        />
      </div>
      <div className="contact-form__row">
        <label htmlFor="contact-terms" className="contact-form__label">
          {t('contactForm.termsLabel')}
        </label>
        <select id="contact-terms" name="terms" className="contact-form__input contact-form__select">
          <option value="">{t('contactForm.termsPlaceholder')}</option>
          <option value="FOB">FOB</option>
          <option value="CIF">CIF</option>
          <option value={t('contactForm.termsFlexible')}>{t('contactForm.termsFlexible')}</option>
        </select>
      </div>
      <div className="contact-form__row">
        <label htmlFor="contact-destination" className="contact-form__label">
          {t('contactForm.destinationLabel')}
        </label>
        <input
          id="contact-destination"
          name="destination"
          type="text"
          className="contact-form__input"
          placeholder={t('contactForm.destinationPlaceholder')}
        />
      </div>
      <div className="contact-form__row">
        <label htmlFor="contact-requirements" className="contact-form__label">
          {t('contactForm.requirementsLabel')}
        </label>
        <textarea
          id="contact-requirements"
          name="requirements"
          rows={4}
          className="contact-form__input contact-form__textarea"
          placeholder={t('contactForm.requirementsPlaceholder')}
        />
      </div>
      <button type="submit" className="contact-form__submit">
        {t('contactForm.submit')}
      </button>
    </form>
  );
}
