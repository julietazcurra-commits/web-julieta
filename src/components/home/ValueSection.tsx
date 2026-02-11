import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ValueSection.css';

export function ValueSection() {
  const { t } = useTranslation();
  const block1Ref = useRef<HTMLElement>(null);
  const block2Ref = useRef<HTMLElement>(null);
  const block3Ref = useRef<HTMLElement>(null);
  const block4Ref = useRef<HTMLElement>(null);
  const refs = [block1Ref, block2Ref, block3Ref, block4Ref];

  const valueBlocks = [
    { id: 'fob' },
    { id: 'quality' },
    { id: 'global' },
    { id: 'trusted' },
  ];

  useScrollReveal(block1Ref, { y: 30, duration: 0.6, start: 'top 85%' });
  useScrollReveal(block2Ref, { y: 30, duration: 0.6, start: 'top 85%' });
  useScrollReveal(block3Ref, { y: 30, duration: 0.6, start: 'top 85%' });
  useScrollReveal(block4Ref, { y: 30, duration: 0.6, start: 'top 85%' });

  return (
    <section className="value-section" aria-labelledby="value-heading">
      <div className="value-section-inner page-container">
        <h2 id="value-heading" className="value-section-title">
          {t('home.values.title')}
        </h2>
        <p className="value-section-subtitle">
          {t('home.values.subtitle')}
        </p>
        <div className="value-blocks">
          {valueBlocks.map((block, i) => (
            <article
              key={block.id}
              ref={refs[i]}
              className="value-block"
            >
              <h3 className="value-block-title">{t(`home.values.items.${block.id}.title`)}</h3>
              <p className="value-block-content">{t(`home.values.items.${block.id}.content`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
