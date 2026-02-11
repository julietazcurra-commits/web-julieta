import type { ImageId } from "./images";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  specs: ProductSpec[];
  imageId: ImageId;
  galleryIds: ImageId[];
}

export const productsData: Product[] = [
  {
    name: "Raisins",
    slug: "raisins",
    shortDescription: "Natural sun-dried or mechanically dried, sorted by size and grade.",
    description:
      "Natural sun-dried or mechanically dried, sorted by size and grade. Ideal for food processing, baking, and direct consumption. Sourced from Argentina's finest producers.",
    specs: [
      { label: "Origin", value: "Argentina" },
      { label: "Export Format", value: "Bulk / Private label" },
      { label: "Quality", value: "Sun-dried, sorted by size and grade" },
    ],
    imageId: "heroRaisins",
    galleryIds: ["raisinsBox1", "raisinsBox2"],
  },
  {
    name: "Dried Plums",
    slug: "dried-plums",
    shortDescription: "Unpitted in natural condition, internationally certified.",
    description:
      "Unpitted in natural condition, internationally certified. Moisture controlled, suitable for bulk and container exports. Premium Argentine dried plums.",
    specs: [
      { label: "Origin", value: "Argentina" },
      { label: "Export Format", value: "Bulk / Containers" },
      { label: "Quality", value: "Unpitted, natural condition, certified" },
    ],
    imageId: "heroPlums",
    galleryIds: ["plumsBox", "plumsFresh", "plumsCut"],
  },
  {
    name: "Walnuts",
    slug: "walnuts",
    shortDescription: "Light or amber kernels, meets international nut quality standards.",
    description:
      "Light or amber kernels, meets international nut quality standards. Available in-shell or shelled, sorted by size. Premium Argentine walnuts.",
    specs: [
      { label: "Origin", value: "Argentina" },
      { label: "Export Format", value: "In-shell or shelled" },
      { label: "Quality", value: "Sorted by size, international standards" },
    ],
    imageId: "heroWalnuts",
    galleryIds: ["walnutsAlt1", "walnutsAlt2", "walnutsHand", "walnutsAlt3"],
  },
  {
    name: "Extra Virgin Olive Oil",
    slug: "olive-oil",
    shortDescription: "Cold-pressed, acidity < 0.5%, certified extra virgin grade.",
    description:
      "Cold-pressed, acidity < 0.5%, certified extra virgin grade. Available in bulk or bottled. Sourced from Argentine olive groves.",
    specs: [
      { label: "Origin", value: "Argentina" },
      { label: "Export Format", value: "Bulk / Bottled" },
      { label: "Quality", value: "Cold-pressed, acidity < 0.5%, extra virgin" },
    ],
    imageId: "heroOlive",
    galleryIds: ["oliveBottle", "oliveDrops", "oliveQuality"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}
