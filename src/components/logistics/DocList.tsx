import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionTitle } from '../ui/SectionTitle';
import './DocList.css';

export function DocList() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Cast to string[] safely or use a default empty array just in case
  const docs = (t('logistics.docs.list', { returnObjects: true }) as string[]) || [];
  const note = t('logistics.docs.note');

  useEffect(() => {
    const items = listRef.current?.querySelectorAll('.doc-list-item');
    if (!items?.length) return;

    const ctx = gsap.context(() => {
      gsap.from(items, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
    });

    return () => ctx.revert();
  }, [docs]); // Re-run anim if docs change (language switch)? Maybe overkill but safe

  return (
    <section ref={sectionRef} className="doc-list-section" aria-labelledby="docs-heading">
      <div className="doc-list-inner page-container">
        <SectionTitle
          id="docs-heading"
          title={t('logistics.docs.title')}
          subtitle={t('logistics.docs.subtitle')}
        />
        <ul ref={listRef} className="doc-list">
          {docs.map((doc, i) => (
            <li key={i} className="doc-list-item">
              <span className="doc-list-icon" aria-hidden>
                ✓
              </span>
              {doc}
            </li>
          ))}
        </ul>
        {note && <p className="doc-list-note">{note}</p>}
      </div>
    </section>
  );
}
