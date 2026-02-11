import { useRef, FormEvent } from 'react';

const MAILTO = 'mailto:sales@fruitcascade.com';

function buildMailtoBody(form: HTMLFormElement): string {
  const data = new FormData(form);
  const parts = [
    data.get('products') && `Products of interest: ${data.get('products')}`,
    data.get('quantities') && `Estimated quantities: ${data.get('quantities')}`,
    data.get('terms') && `Preferred terms: ${data.get('terms')}`,
    data.get('destination') && `Destination port or country: ${data.get('destination')}`,
    data.get('message') && `Additional message:\n${data.get('message')}`,
  ].filter(Boolean);
  return parts.join('\n\n');
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const body = encodeURIComponent(buildMailtoBody(form));
    const subject = encodeURIComponent('Fruit Cascade Exports — Inquiry');
    window.open(`${MAILTO}?subject=${subject}&body=${body}`, '_blank', 'noopener');
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
      <div className="contact-form__row">
        <label htmlFor="contact-products" className="contact-form__label">
          Products of interest
        </label>
        <input
          id="contact-products"
          name="products"
          type="text"
          className="contact-form__input"
          placeholder="e.g. Raisins, Dried Plums, Walnuts, Olive Oil"
        />
      </div>
      <div className="contact-form__row">
        <label htmlFor="contact-quantities" className="contact-form__label">
          Estimated quantities
        </label>
        <input
          id="contact-quantities"
          name="quantities"
          type="text"
          className="contact-form__input"
          placeholder="e.g. 20ft container, 5 tonnes"
        />
      </div>
      <div className="contact-form__row">
        <label htmlFor="contact-terms" className="contact-form__label">
          Preferred terms (FOB / CIF)
        </label>
        <select id="contact-terms" name="terms" className="contact-form__input contact-form__select">
          <option value="">Select…</option>
          <option value="FOB">FOB</option>
          <option value="CIF">CIF</option>
          <option value="Both">Both / Flexible</option>
        </select>
      </div>
      <div className="contact-form__row">
        <label htmlFor="contact-destination" className="contact-form__label">
          Destination port or country
        </label>
        <input
          id="contact-destination"
          name="destination"
          type="text"
          className="contact-form__input"
          placeholder="e.g. Shanghai, Rotterdam"
        />
      </div>
      <div className="contact-form__row">
        <label htmlFor="contact-message" className="contact-form__label">
          Additional message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="contact-form__input contact-form__textarea"
          placeholder="Tell us about your requirements…"
        />
      </div>
      <button type="submit" className="contact-form__submit">
        Send us an email
      </button>
    </form>
  );
}
