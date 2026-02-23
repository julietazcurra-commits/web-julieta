/**
 * Mapeo de ids de imagen a rutas en public/images.
 * Origen: 32_files (Fruit Cascade.pdf-image-XXX).
 */
export const images = {
  heroHome: "/images/hero-home.webp",
  heroOlive: "/images/hero-olive-alt.webp",
  heroRaisins: "/images/hero-raisins-alt.webp",
  heroWalnuts: "/images/hero-walnuts-alt.webp",
  heroMarkets: "/images/hero-markets.webp",
  heroLogistics: "/images/hero-logistics.webp",
  heroProducts: "/images/hero-products-16x9.webp",
  heroContact: "/images/hero-contact-16x9.webp",
  plumsFresh: "/images/plums-fresh.webp",
  decorativeLine: "/images/decorative-line.webp",
  plumsCut: "/images/plums-cut.webp",
  portAerial: "/images/port-aerial.webp",
  walnutsAlt1: "/images/walnuts-alt1.webp",
  walnutsAlt2: "/images/walnuts-alt2.webp",
  walnutsHand: "/images/walnuts-hand.webp",
  oliveBottle: "/images/olive-bottle.webp",
  raisinsBox1: "/images/raisins-box1.webp",
  plumsBox: "/images/plums-box-replacement.png",
  walnutsAlt3: "/images/walnuts-alt3.webp",
  oliveQuality: "/images/olive-quality.webp",
  oliveDrops: "/images/olive-drops.webp",
  waves1: "/images/waves1.webp",
  waves2: "/images/waves2.webp",
  portContainers: "/images/port-containers.webp",
  shipSea: "/images/ship-sea.webp",
  waves3: "/images/waves3.webp",
  earth1: "/images/earth1.webp",
  earth2: "/images/earth2.webp",
  portSunset: "/images/port-sunset.webp",
  europeCanal: "/images/europe-canal.webp",
  shipSkyline: "/images/ship-skyline.webp",
  marketChina: "/images/market-china.webp",
  oliveGrovePath: "/images/olive-grove-path.webp",
  raisinsBox2: "/images/raisins-box2.webp",
  oliveGrove1: "/images/olive-grove1.webp",
  oliveGrove2: "/images/olive-grove2.webp",
} as const;

export type ImageId = keyof typeof images;

/** Alias para compatibilidad con imports que usan IMAGES */
export const IMAGES = images;
