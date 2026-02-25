import { existsSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

const root = process.cwd();
const imagesDir = join(root, 'public', 'images');

const candidates = [
  { input: 'hero-products-16x9.png', output: 'hero-products-16x9.webp' },
  { input: 'hero-contact-16x9.png', output: 'hero-contact-16x9.webp' },
  { input: 'hero-logistics.png', output: 'hero-logistics.webp' },
  { input: 'hero-olive-alt.png', output: 'hero-olive-alt.webp' },
  { input: 'hero-raisins-alt.png', output: 'hero-raisins-alt.webp' },
];

let converted = 0;
let skipped = 0;

for (const file of candidates) {
  const inputPath = join(imagesDir, file.input);
  const outputPath = join(imagesDir, file.output);

  if (!existsSync(inputPath)) {
    skipped++;
    continue;
  }

  await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);
  converted++;
}

console.log(`convert-hero-webp: converted ${converted}, skipped ${skipped}.`);
