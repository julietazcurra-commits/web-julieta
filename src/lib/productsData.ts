import type { ImageId } from "./images";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  specs: ProductSpec[];
  imageId: ImageId;
}

export const productsData: Product[] = [
  {
    name: "Cherries",
    slug: "cerezas",
    category: "Fresh Fruit",
    shortDescription: "Harvested at the ideal point for preservation, with size and firmness selected for fresh export.",
    description: "Harvested at the ideal point for preservation, with size and firmness selected for fresh export.",
    specs: [
      { label: "Origin", value: "Alto Valle de Río Negro and Neuquén" },
      { label: "Season", value: "November – January" },
      { label: "Markets", value: "Europe, Asia" },
      { label: "Packaging", value: "5 kg boxes · 250 g / 500 g clamshells" },
    ],
    imageId: "productCerezas",
  },
  {
    name: "Avocados",
    slug: "paltas",
    category: "Fresh Fruit",
    shortDescription: "Hass variety, harvested and sized to reach optimal ripeness at destination.",
    description: "Hass variety, harvested and sized to reach optimal ripeness at destination.",
    specs: [
      { label: "Origin", value: "Chile" },
      { label: "Season", value: "August – January" },
      { label: "Markets", value: "Europe, Middle East" },
      { label: "Packaging", value: "Depending on destination: 10 kg plastic crate or 4 kg cardboard box" },
    ],
    imageId: "productPaltas",
  },
  {
    name: "Kiwis",
    slug: "kiwis",
    category: "Fresh Fruit",
    shortDescription: "Firm pulp and balanced sweetness, graded by size for the most demanding markets.",
    description: "Firm pulp and balanced sweetness, graded by size for the most demanding markets.",
    specs: [
      { label: "Origin", value: "Chile" },
      { label: "Season", value: "March – October" },
      { label: "Markets", value: "Europe, Asia" },
      { label: "Packaging", value: "10 kg plastic crate" },
    ],
    imageId: "productKiwis",
  },
  {
    name: "Lemons",
    slug: "limones",
    category: "Fresh Fruit",
    shortDescription: "Thin peel and high juice yield, thanks to the NOA climate.",
    description: "Thin peel and high juice yield, thanks to the NOA climate.",
    specs: [
      { label: "Origin", value: "Tucumán (NOA)" },
      { label: "Season", value: "March – September" },
      { label: "Markets", value: "Europe, Middle East, Asia" },
      { label: "Packaging", value: "15 kg boxes · bulk" },
    ],
    imageId: "productLimones",
  },
  {
    name: "Oranges and Grapefruits",
    slug: "naranjas-pomelos",
    category: "Fresh Fruit",
    shortDescription: "Juicy pulp citrus with intense color, selected by size and brix grade.",
    description: "Juicy pulp citrus with intense color, selected by size and brix grade.",
    specs: [
      { label: "Origin", value: "Entre Ríos and Corrientes" },
      { label: "Season", value: "May – October" },
      { label: "Markets", value: "Europe, Middle East" },
      { label: "Packaging", value: "18 kg boxes · bulk" },
    ],
    imageId: "productNaranjasPomelos",
  },
  {
    name: "Apples",
    slug: "manzana",
    category: "Fresh Fruit",
    shortDescription: "Red Delicious, Gala and Granny Smith varieties, cold-stored for year-round supply.",
    description: "Red Delicious, Gala and Granny Smith varieties, cold-stored for year-round supply.",
    specs: [
      { label: "Origin", value: "Alto Valle de Río Negro" },
      { label: "Season", value: "February – July · year-round storage" },
      { label: "Markets", value: "Europe, Asia, Brazil" },
      { label: "Packaging", value: "18 kg boxes · 1 / 2 kg retail bags" },
    ],
    imageId: "productManzana",
  },
  {
    name: "Pears",
    slug: "peras",
    category: "Fresh Fruit",
    shortDescription: "Williams and Packham's varieties, harvested and stored under controlled atmosphere.",
    description: "Williams and Packham's varieties, harvested and stored under controlled atmosphere.",
    specs: [
      { label: "Origin", value: "Alto Valle de Río Negro" },
      { label: "Season", value: "January – May · year-round storage" },
      { label: "Markets", value: "Europe, Asia, Brazil" },
      { label: "Packaging", value: "18 kg boxes · 1 / 2 kg retail bags" },
    ],
    imageId: "productPeras",
  },
  {
    name: "Peaches",
    slug: "durazno",
    category: "Fresh Fruit",
    shortDescription: "Stone fruit with firm texture and natural sweetness, harvested at peak summer season.",
    description: "Stone fruit with firm texture and natural sweetness, harvested at peak summer season.",
    specs: [
      { label: "Origin", value: "Mendoza" },
      { label: "Season", value: "December – March" },
      { label: "Markets", value: "Europe, Asia" },
      { label: "Packaging", value: "5 kg boxes · 500 g clamshell" },
    ],
    imageId: "productDurazno",
  },
  {
    name: "Dried Plums",
    slug: "ciruela-seca",
    category: "Dried Fruit",
    shortDescription: "Unpitted, natural condition, with controlled moisture and consistent sizing.",
    description: "Unpitted, natural condition, with controlled moisture and consistent sizing. We offer a full range of sizes tailored to customer demand, suitable for food processing, baking, and direct consumption.",
    specs: [
      { label: "Origin", value: "Mendoza" },
      { label: "Season", value: "Available year-round" },
      { label: "Markets", value: "Asia, Europe, Middle East and Latin America" },
      { label: "Packaging", value: "Bulk or 25 kg bags" },
    ],
    imageId: "productCiruelaSeca",
  },
  {
    name: "Raisins",
    slug: "pasas-uva",
    category: "Dried Fruit",
    shortDescription: "Dark, golden and pink varieties, sun-dried or mechanically dried and classified by size and grade.",
    description: "Dark, golden and pink varieties, sun-dried or mechanically dried and classified by size and grade.",
    specs: [
      { label: "Origin", value: "San Juan" },
      { label: "Season", value: "Available year-round" },
      { label: "Markets", value: "Asia, Middle East" },
      { label: "Packaging", value: "Bulk and packed in 10 kg boxes" },
    ],
    imageId: "productPasasUva",
  },
  {
    name: "Walnuts",
    slug: "nueces",
    category: "Nuts",
    shortDescription: "Available shelled or in-shell, classified by color, meeting international quality standards.",
    description: "Available shelled or in-shell, classified by color, meeting international quality standards.",
    specs: [
      { label: "Origin", value: "Mendoza" },
      { label: "Season", value: "April – June" },
      { label: "Markets", value: "Europe, Asia" },
      { label: "Packaging", value: "Shelled walnuts: 10 kg box · in-shell walnuts: 25 kg bags or bulk" },
    ],
    imageId: "productNueces",
  },
  {
    name: "Extra Virgin Olive Oil",
    slug: "aceite-oliva",
    category: "Olive Oil",
    shortDescription: "Cold-pressed, acidity below 0.5%, certified extra virgin grade.",
    description: "Cold-pressed, acidity below 0.5%, certified extra virgin grade. Available in bulk or bottled.",
    specs: [
      { label: "Origin", value: "Mendoza" },
      { label: "Season", value: "Available year-round" },
      { label: "Markets", value: "Brazil, Asia" },
      { label: "Packaging", value: "Bulk · bottled in 500 ml and 1 L" },
    ],
    imageId: "productAceiteOliva",
  },
];
