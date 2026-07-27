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
    homeHeroFruits: "/images/home-hero-fruits.webp",
    homeSelectionFreshFruit: "/images/home-selection-fresh-fruit.webp",
    homeSelectionDriedFruit: "/images/home-selection-dried-fruit.webp",
    homeSelectionOliveOil: "/images/home-selection-olive-oil.webp",
    homeFlexibility: "/images/home-flexibility.webp",
    homeExcellence: "/images/home-excellence.webp",
    homeFinalCta: "/images/home-final-cta.webp",
    productCerezas: "/images/product-cerezas.webp",
    productPaltas: "/images/product-paltas.webp",
    productKiwis: "/images/product-kiwis.webp",
    productLimones: "/images/product-limones.webp",
    productNaranjasPomelos: "/images/product-naranjas-pomelos.webp",
    productManzana: "/images/product-manzana.webp",
    productPeras: "/images/product-peras.webp",
    productDurazno: "/images/product-durazno.webp",
    productCiruelaSeca: "/images/product-ciruela-seca.webp",
    productPasasUva: "/images/product-pasas-uva.webp",
    productNueces: "/images/product-nueces.webp",
    productAceiteOliva: "/images/product-aceite-oliva.webp",
    productsHeroBanner: "/images/products-hero-banner.webp",
    productsFinalCta: "/images/products-final-cta.webp",
    aboutHeroBanner: "/images/about-hero-banner.webp",
    aboutStory: "/images/about-story.webp",
    aboutCosecha: "/images/about-cosecha.webp",
    aboutCraftOrigen: "/images/about-craft-origen.webp",
    aboutCraftProceso: "/images/about-craft-proceso.webp",
    aboutCraftEntrega: "/images/about-craft-entrega.webp",
    aboutFinalCta: "/images/about-final-cta.webp",
    logisticsHeroBanner: "/images/logistics-hero-banner.webp",
    logisticsDiseno: "/images/logistics-diseno.webp",
    logisticsAndes: "/images/logistics-andes.webp",
    logisticsPeras: "/images/logistics-peras.webp",
    logisticsFinalCta: "/images/logistics-final-cta.webp",
} as const;

export type ImageId = keyof typeof images;

/** Alias para compatibilidad con imports que usan IMAGES */
export const IMAGES = images;
