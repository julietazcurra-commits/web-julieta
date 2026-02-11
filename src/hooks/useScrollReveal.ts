import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface UseScrollRevealOptions {
  y?: number;
  duration?: number;
  start?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  opts: UseScrollRevealOptions = {}
) {
  const { y = 30, duration = 0.6, start = 'top 85%' } = opts;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start,
        },
      });
    });

    return () => ctx.revert();
  }, [ref, y, duration, start]);
}
