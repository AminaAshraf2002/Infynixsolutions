/**
 * Produces the WebP imagery used by the location landing pages.
 *
 * The source files are 1.2 MB to 2.0 MB PNGs and JPEGs sized far beyond what any
 * layout needs. Dropping those onto 25 pages would have undone the payload work,
 * so each is resized to the width it is actually displayed at and encoded as
 * WebP. Run with `npm run images` after adding or replacing a source file.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'src', 'assets');
const outDir = path.join(root, 'src', 'assets', 'lp');

fs.mkdirSync(outDir, { recursive: true });

// Two widths each: the 1x for the card slot, and a 2x for retina.
const WIDTHS = [640, 1120];

const JOBS = [
  { src: 'marketing.png', name: 'lp-marketing' },
  { src: 'media.png', name: 'lp-media' },
  { src: 'web.png', name: 'lp-technology' },
  { src: 'ai.png', name: 'lp-regions' },
  { src: 'kochi-office.jpg', name: 'lp-kochi' },
];

const kb = (n) => (n / 1024).toFixed(0) + ' KB';

let before = 0;
let after = 0;

for (const job of JOBS) {
  const input = path.join(srcDir, job.src);
  if (!fs.existsSync(input)) {
    console.warn(`skip ${job.src} (missing)`);
    continue;
  }

  const originalSize = fs.statSync(input).size;
  before += originalSize;

  for (const width of WIDTHS) {
    const suffix = width === WIDTHS[0] ? '' : `@${Math.round(width / WIDTHS[0])}x`;
    const outFile = path.join(outDir, `${job.name}${suffix}.webp`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 74, effort: 6 })
      .toFile(outFile);
    after += fs.statSync(outFile).size;
  }

  const oneX = fs.statSync(path.join(outDir, `${job.name}.webp`)).size;
  console.log(`${job.src.padEnd(20)} ${kb(originalSize).padStart(9)}  ->  ${kb(oneX).padStart(8)} (1x webp)`);
}

console.log('');
console.log(`sources: ${kb(before)}   generated (all widths): ${kb(after)}`);
