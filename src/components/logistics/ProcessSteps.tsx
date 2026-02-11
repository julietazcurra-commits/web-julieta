import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionTitle } from '../ui/SectionTitle';
import './ProcessSteps.css';

export function ProcessSteps() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const steps = stepsRef.current?.querySelectorAll('.process-step');
    if (!steps?.length) return;

    const ctx = gsap.context(() => {
      gsap.from(steps, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="process-steps" aria-labelledby="process-heading">
      <div className="process-steps-inner page-container">
        <SectionTitle
          id="process-heading"
          title={t('logistics.process.title')}
          subtitle={t('logistics.process.subtitle')}
        />
        <div ref={stepsRef} className="process-steps-grid">
          {steps.map((num) => (
            <article key={num} className="process-step">
              <span className="process-step-number" aria-hidden>
                {num}
              </span>
              <h3 className="process-step-title">{t(`logistics.process.steps.${num}.title`)}</h3>
              <p className="process-step-desc">{t(`logistics.process.steps.${num}.desc`)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
