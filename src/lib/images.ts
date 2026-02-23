/**
 * Mapeo de ids de imagen a rutas en public/images.
 * Origen: 32_files (Fruit Cascade.pdf-image-XXX).
 */
export const images = {
  heroOlive: "/images/hero-olive-alt.webp",
  heroRaisins: "/images/hero-raisins-alt.webp",
  markets: "/images/markets.webp",
  heroLogistics: "/images/hero-logistics.webp",
  heroProducts: "/images/hero-products-16x9.webp",
  heroContact: "/images/hero-contact-16x9.webp",
  plumsFresh: "/images/plums-fresh.webp",
  walnutsAlt1: "/images/walnuts-alt1.webp",
  plumsBox: "/images/plums-box-replacement.png",
  portContainers: "/images/port-containers.webp",
  portSunset: "/images/port-sunset.webp",
  europeCanal: "/images/europe-canal.webp",
  shipSkyline: "/images/ship-skyline.webp",
  marketChina: "/images/market-china.webp",
} as const;

export type ImageId = keyof typeof images;

/** Alias para compatibilidad con imports que usan IMAGES */
export const IMAGES = images;
