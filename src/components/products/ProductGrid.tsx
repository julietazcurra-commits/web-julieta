import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProductCard } from "./ProductCard";
import type { Product } from "../../lib/productsData";

gsap.registerPlugin(ScrollTrigger);

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          once: true,
          toggleActions: "play none none none",
        },
      });
    }, grid);

    return () => ctx.revert();
  }, [products.length]);

  return (
    <div
      ref={gridRef}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "var(--space-xl)",
      }}
    >
      {products.map((product, i) => (
        <div
          key={product.slug}
          ref={(el) => {
            cardsRef.current[i] = el;
          }}
        >
          <ProductCard product={product} noReveal />
        </div>
      ))}
    </div>
  );
}
