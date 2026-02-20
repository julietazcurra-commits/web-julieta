import { useTranslation } from "react-i18next";

const whyItems = ["multi-market", "regulatory", "flexible"] as const;

export function ContactWhySection() {
  const { t } = useTranslation();

  return (
    <section className="contact-why" aria-labelledby="contact-why-heading">
      <div className="contact-why__inner">
        <h2 id="contact-why-heading" className="contact-why__heading">
          {t("contact.why.title")}
        </h2>
        <div className="contact-why__grid">
          {whyItems.map((id, i) => (
            <article key={id} className="contact-why__item">
              <span className="contact-why__num">0{i + 1}</span>
              <h3 className="contact-why__item-title">
                {t(`markets.advantages.items.${id}.title`)}
              </h3>
              <p className="contact-why__item-text">
                {t(`markets.advantages.items.${id}.text`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
