import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { SectionTitle } from '../ui/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    title: 'Argentine Origin',
    description: 'Direct sourcing from Argentina\'s finest producers. Our products come from the heart of Argentine agriculture, known for exceptional quality and terroir.',
  },
  {
    title: 'Proven Track Record',
    description: 'Years of successful exports to Asia, China, Middle East, and Europe. We understand international trade and deliver reliably.',
  },
  {
    title: 'Full Traceability',
    description: 'Complete traceability from producer to final destination. Quality assurance at every step with HACCP, GMP, and international certifications.',
  },
];

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const items = itemsRef.current.filter(Boolean) as HTMLElement[];
    if (!section || items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(section.querySelector('h2'), {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: { trigger: section, start: 'top 85%' },
      });
      gsap.from(items, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 85%' },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="page-container">
        <SectionTitle title="Why Choose Us" />
        <ul
          style={{
            listStyle: 'none',
            display: 'grid',
            gap: 'var(--space-xl)',
            gridTemplateColumns: '1fr',
          }}
          className="why-us-grid"
        >
          {ITEMS.map((item, i) => (
            <li
              key={item.title}
              ref={(el) => { itemsRef.current[i] = el; }}
              style={{
                padding: 'var(--space-lg)',
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-card)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <h3 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
