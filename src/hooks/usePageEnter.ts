import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';

export interface UsePageEnterOptions {
  stagger?: number;
  delay?: number;
  y?: number;
}

export function usePageEnter(
  refs: RefObject<HTMLElement | null>[],
  opts: UsePageEnterOptions = {}
) {
  const { stagger = 0.1, delay = 0, y = 24 } = opts;
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const elements = refs
      .map((r) => r.current)
      .filter((el): el is HTMLElement => el != null);

    if (elements.length === 0) return;

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    if (elements.length === 1) {
      tl.from(elements[0], { opacity: 0, y, duration: 0.6 }, delay);
    } else {
      tl.from(elements, { opacity: 0, y, duration: 0.6, stagger }, delay);
    }

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [refs, stagger, delay, y]);

  return timelineRef;
}
