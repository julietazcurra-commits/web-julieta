import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const sourceDir = path.join(root, '32_files');
const targetDir = path.join(root, 'public', 'images');

const mapping = {
  'hero-plums.jpg': 'Fruit Cascade.pdf-image-003.jpg',
  'hero-olive.jpg': 'Fruit Cascade.pdf-image-004.jpg',
  'hero-raisins.jpg': 'Fruit Cascade.pdf-image-005.jpg',
  'hero-walnuts.png': 'Fruit Cascade.pdf-image-006.png',
  'plums-fresh.png': 'Fruit Cascade.pdf-image-000.png',
  'decorative-line.png': 'Fruit Cascade.pdf-image-001.png',
  'plums-cut.png': 'Fruit Cascade.pdf-image-007.png',
  'port-aerial.png': 'Fruit Cascade.pdf-image-008.png',
  'walnuts-alt1.png': 'Fruit Cascade.pdf-image-009.png',
  'walnuts-alt2.png': 'Fruit Cascade.pdf-image-010.png',
  'walnuts-hand.jpg': 'Fruit Cascade.pdf-image-011.jpg',
  'olive-bottle.png': 'Fruit Cascade.pdf-image-012.png',
  'raisins-box1.jpg': 'Fruit Cascade.pdf-image-013.jpg',
  'plums-box.jpg': 'Fruit Cascade.pdf-image-014.jpg',
  'walnuts-alt3.png': 'Fruit Cascade.pdf-image-015.png',
  'olive-quality.jpg': 'Fruit Cascade.pdf-image-016.jpg',
  'olive-drops.png': 'Fruit Cascade.pdf-image-017.png',
  'waves1.png': 'Fruit Cascade.pdf-image-018.png',
  'waves2.png': 'Fruit Cascade.pdf-image-019.png',
  'port-containers.png': 'Fruit Cascade.pdf-image-020.png',
  'ship-sea.png': 'Fruit Cascade.pdf-image-021.png',
  'waves3.png': 'Fruit Cascade.pdf-image-022.png',
  'earth1.png': 'Fruit Cascade.pdf-image-023.png',
  'earth2.png': 'Fruit Cascade.pdf-image-024.png',
  'port-sunset.png': 'Fruit Cascade.pdf-image-025.png',
  'europe-canal.png': 'Fruit Cascade.pdf-image-026.png',
  'ship-skyline.png': 'Fruit Cascade.pdf-image-027.png',
  'market-china.png': 'Fruit Cascade.pdf-image-028.png',
  'olive-grove-path.png': 'Fruit Cascade.pdf-image-029.png',
  'raisins-box2.jpg': 'Fruit Cascade.pdf-image-030.jpg',
  'olive-grove1.png': 'Fruit Cascade.pdf-image-031.png',
  'olive-grove2.png': 'Fruit Cascade.pdf-image-032.png',
};

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

for (const [targetName, sourceName] of Object.entries(mapping)) {
  const src = path.join(sourceDir, sourceName);
  const dest = path.join(targetDir, targetName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${sourceName} -> ${targetName}`);
  } else {
    console.warn(`Missing: ${sourceName}`);
  }
}

console.log('Done.');
