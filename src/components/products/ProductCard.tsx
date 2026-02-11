import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import type { Product } from "../../lib/productsData";
import { images } from "../../lib/images";

interface ProductCardProps {
  product: Product;
  index?: number;
  /** Si está dentro de un grid con ScrollTrigger único, no aplicar useScrollReveal aquí */
  noReveal?: boolean;
}

export function ProductCard({ product, noReveal }: ProductCardProps) {
  const cardRef = useRef<article>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onEnter = () => {
      gsap.to(el, { scale: 1.02, boxShadow: "0 12px 40px rgba(0,0,0,0.12)", duration: 0.25, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(el, { scale: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.06)", duration: 0.25, ease: "power2.out" });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const src = images[product.imageId];

  return (
    <article
      ref={cardRef}
      style={{
        borderRadius: 12,
        overflow: "hidden",
        background: "var(--color-surface)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      <Link to={`/products/${product.slug}`} style={{ color: "inherit", textDecoration: "none", display: "block" }}>
        <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--color-bg-alt)" }}>
          <img
            src={src}
            alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
        </div>
        <div style={{ padding: "var(--space-lg)" }}>
          <h3 style={{ marginBottom: "var(--space-sm)", fontSize: "1.5rem" }}>{product.name}</h3>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>
            {product.shortDescription}
          </p>
        </div>
      </Link>
    </article>
  );
}
