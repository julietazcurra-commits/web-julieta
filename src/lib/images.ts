/**
 * Mapeo de ids de imagen a rutas en public/images.
 * Origen: 32_files (Fruit Cascade.pdf-image-XXX).
 */
export const images = {
  heroPlums: "/images/hero-plums.jpg",
  heroOlive: "/images/hero-olive.jpg",
  heroRaisins: "/images/hero-raisins.jpg",
  heroWalnuts: "/images/hero-walnuts.png",
  plumsFresh: "/images/plums-fresh.png",
  decorativeLine: "/images/decorative-line.png",
  plumsCut: "/images/plums-cut.png",
  portAerial: "/images/port-aerial.png",
  walnutsAlt1: "/images/walnuts-alt1.png",
  walnutsAlt2: "/images/walnuts-alt2.png",
  walnutsHand: "/images/walnuts-hand.jpg",
  oliveBottle: "/images/olive-bottle.png",
  raisinsBox1: "/images/raisins-box1.jpg",
  plumsBox: "/images/plums-box.jpg",
  walnutsAlt3: "/images/walnuts-alt3.png",
  oliveQuality: "/images/olive-quality.jpg",
  oliveDrops: "/images/olive-drops.png",
  waves1: "/images/waves1.png",
  waves2: "/images/waves2.png",
  portContainers: "/images/port-containers.png",
  shipSea: "/images/ship-sea.png",
  waves3: "/images/waves3.png",
  earth1: "/images/earth1.png",
  earth2: "/images/earth2.png",
  portSunset: "/images/port-sunset.png",
  europeCanal: "/images/europe-canal.png",
  shipSkyline: "/images/ship-skyline.png",
  marketChina: "/images/market-china.png",
  oliveGrovePath: "/images/olive-grove-path.png",
  raisinsBox2: "/images/raisins-box2.jpg",
  oliveGrove1: "/images/olive-grove1.png",
  oliveGrove2: "/images/olive-grove2.png",
} as const;

export type ImageId = keyof typeof images;

/** Alias para compatibilidad con imports que usan IMAGES */
export const IMAGES = images;
