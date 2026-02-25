import { cpSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const sourceDir = join(root, 'images');
const destinationDir = join(root, 'public', 'images');

// Keep the script build-safe: if there is no source folder, just continue.
if (!existsSync(sourceDir)) {
  console.log('copy-images: no ./images directory found, skipping.');
  process.exit(0);
}

mkdirSync(destinationDir, { recursive: true });
cpSync(sourceDir, destinationDir, { recursive: true, force: true });

console.log('copy-images: images copied to public/images.');
