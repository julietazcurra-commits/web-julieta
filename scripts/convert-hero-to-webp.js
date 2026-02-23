/**
 * Convierte las imágenes hero de las subpáginas a WebP con 90% de calidad.
 * Fuente: public/images (jpg/png) → public/images (webp)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const imagesDir = path.join(root, 'public', 'images');

const WEBP_QUALITY = 90;

/** Imágenes hero usadas en heros de subpáginas y home (sin extensión) */
const HERO_IMAGES = [
  'hero-olive-alt',
  'hero-raisins-alt',
  'hero-walnuts-alt',
  'hero-markets',
  'hero-products-16x9',
  'hero-contact-16x9',
  'waves1',       // hero logistics
  'plums-fresh',  // hero home principal
  'walnuts-alt1', // hero about
];

const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function convertToWebp() {
  let converted = 0;
  let skipped = 0;

  for (const baseName of HERO_IMAGES) {
    const webpPath = path.join(imagesDir, `${baseName}.webp`);
    let sourcePath = null;

    for (const ext of EXTENSIONS) {
      const candidate = path.join(imagesDir, `${baseName}${ext}`);
      if (fs.existsSync(candidate)) {
        sourcePath = candidate;
        break;
      }
    }

    if (!sourcePath) {
      if (fs.existsSync(webpPath)) {
        console.log(`  Skip ${baseName}.webp (ya existe, sin fuente jpg/png)`);
        skipped++;
      } else {
        console.warn(`  Missing: ${baseName} (no hay .jpg/.png ni .webp)`);
      }
      continue;
    }

    try {
      await sharp(sourcePath)
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpPath);
      console.log(`  OK ${path.basename(sourcePath)} → ${baseName}.webp (${WEBP_QUALITY}%)`);
      converted++;
    } catch (err) {
      console.error(`  Error ${baseName}:`, err.message);
    }
  }

  console.log(`\nConvertidas: ${converted}, omitidas: ${skipped}`);
}

convertToWebp().catch(console.error);
