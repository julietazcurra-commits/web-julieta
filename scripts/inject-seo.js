import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';

const SITE_URL = 'https://fruitcascade.com';
const DIST = 'dist';

const pages = [
  {
    path: '/about',
    title: 'About Us – Fruit Cascade Exports',
    description: 'Argentine export company specialized in premium dried fruits and extra virgin olive oil. Direct sourcing, full traceability, and expert logistics for global buyers.',
    image: '/images/walnuts-alt1.webp',
  },
  {
    path: '/products',
    title: 'Our Products – Fruit Cascade Exports',
    description: 'Premium Argentine raisins, dried plums, walnuts, and extra virgin olive oil for bulk export. Flexible packaging, international certifications, FOB & CIF available.',
    image: '/images/hero-products-16x9.webp',
  },
  {
    path: '/logistics',
    title: 'Logistics & Trade Terms – Fruit Cascade Exports',
    description: 'FOB and CIF export operations from Argentine ports. Complete documentation: certificate of origin, phytosanitary, bill of lading. Reliable shipping to Asia, Middle East, Europe.',
    image: '/images/hero-logistics.webp',
  },
  {
    path: '/markets',
    title: 'Global Markets – Fruit Cascade Exports',
    description: 'Serving importers and distributors in Asia, China, Middle East, and Europe with premium Argentine dried fruits and olive oil. Regulatory compliance for every destination.',
    image: '/images/markets.webp',
  },
  {
    path: '/contact',
    title: 'Contact Us – Fruit Cascade Exports',
    description: 'Contact our export team for product specifications, pricing, minimum order quantities, and shipping terms. Email: contact@fruitcascade.com',
    image: '/images/hero-contact-16x9.webp',
  },
];

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function injectSeo(html, page) {
  const title = escapeHtml(page.title);
  const desc = escapeHtml(page.description);
  const url = `${SITE_URL}${page.path}`;
  const image = `${SITE_URL}${page.image}`;
  const ogType = page.type === 'product' ? 'product' : 'website';

  let result = html;

  // Title
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${title}</title>`
  );

  // Meta description
  result = result.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${desc}" />`
  );

  // Canonical
  result = result.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`
  );

  // OG tags
  result = result.replace(
    /<meta property="og:type" content="[^"]*" \/>/,
    `<meta property="og:type" content="${ogType}" />`
  );
  result = result.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${title}" />`
  );
  result = result.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${desc}" />`
  );
  result = result.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />`
  );
  result = result.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${image}" />`
  );

  // Twitter tags
  result = result.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  result = result.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${desc}" />`
  );
  result = result.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${image}" />`
  );

  return result;
}

let count = 0;
for (const page of pages) {
  const html = injectSeo(template, page);
  const dir = join(DIST, page.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  count++;
}

console.log(`SEO: injected meta tags into ${count} pages.`);
