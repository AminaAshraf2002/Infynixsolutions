/**
 * Adversarial audit: what a third party running Screaming Frog, Ahrefs or
 * Semrush over this site would see, including the findings that do not
 * flatter us.
 *
 * Deliberately reports problems we cannot fix in code (no backlinks, no
 * reviews, unverified Google Business Profile) alongside the ones we can,
 * because a competitor's report will not omit them out of politeness.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const { SITE_URL } = await import(
  pathToFileURL(path.join(root, 'src', 'seo', 'siteConfig.js')).href
);

const pages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) { walk(full); continue; }
    if (!e.name.endsWith('.html') || /^google[0-9a-f]+\.html$/.test(e.name)) continue;
    const rel = path.relative(distDir, full).split(path.sep).join('/');
    const urlPath = rel === 'index.html' ? '/' : '/' + rel.replace(/\/index\.html$/, '').replace(/\.html$/, '');
    pages.push({ urlPath, html: fs.readFileSync(full, 'utf8') });
  }
})(distDir);

const bodyText = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const first = (html, re) => (html.match(re) || [])[1] || '';
const isLanding = (p) => /-in-(kochi|kerala|kozhikode|trivandrum)$/.test(p.urlPath);

const line = (s = '') => console.log(s);
const head = (s) => { line(); line('='.repeat(72)); line(s); line('='.repeat(72)); };

// ------------------------------------------------------- 1. entity graph
head('1. WHAT A MACHINE EXTRACTS AS THE ENTITY');

const homeHtml = pages.find((p) => p.urlPath === '/').html;
const ld = [...homeHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map((m) => { try { return JSON.parse(m[1]); } catch { return null; } })
  .filter(Boolean);

const graph = ld.flatMap((d) => d['@graph'] || [d]);
const org = graph.find((n) => n['@type'] === 'Organization');
const local = graph.find((n) => n['@type'] === 'ProfessionalService');

line(`Declared types on homepage: ${graph.map((n) => n['@type']).join(', ')}`);
if (org) {
  line(`  name        ${org.name}`);
  line(`  url         ${org.url}`);
  line(`  telephone   ${org.telephone}`);
  line(`  address     ${org.address?.streetAddress}, ${org.address?.addressLocality}`);
  line(`  sameAs      ${(org.sameAs || []).length} profile(s): ${(org.sameAs || []).join(', ') || 'NONE'}`);
  line(`  logo        ${org.logo?.url || 'none'}`);
}
if (local) {
  line(`  geo         ${local.geo?.latitude}, ${local.geo?.longitude}`);
  line(`  areaServed  ${(local.areaServed || []).length} places`);
  line(`  priceRange  ${local.priceRange || 'not declared'}`);
}

const typeCount = {};
for (const p of pages) {
  const m = p.html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!m) continue;
  try {
    for (const n of (JSON.parse(m[1])['@graph'] || [])) {
      typeCount[n['@type']] = (typeCount[n['@type']] || 0) + 1;
    }
  } catch { /* counted as missing below */ }
}
line();
line('Schema coverage across all pages:');
Object.entries(typeCount).sort((a, b) => b[1] - a[1])
  .forEach(([t, c]) => line(`  ${String(c).padStart(3)}  ${t}`));
const noSchema = pages.filter((p) => !/application\/ld\+json/.test(p.html));
line(`  ${String(noSchema.length).padStart(3)}  pages with NO structured data`);
if (noSchema.length) line(`       e.g. ${noSchema.slice(0, 4).map((p) => p.urlPath).join(', ')}`);

// ------------------------------------------------------- 2. SERP appearance
head('2. HOW LISTINGS RENDER IN SERPS');

const tooLong = [];
const tooShort = [];
for (const p of pages) {
  const t = first(p.html, /<title[^>]*>([^<]*)/).replace(/&amp;/g, '&');
  const d = first(p.html, /<meta name="description" content="([^"]*)"/).replace(/&amp;/g, '&');
  // Google truncates around 580px of title and 920px of description; character
  // counts are the standard proxy the audit tools use.
  if (t.length > 60) tooLong.push([p.urlPath, t.length, 'title']);
  if (d.length > 160) tooLong.push([p.urlPath, d.length, 'description']);
  if (d && d.length < 110) tooShort.push([p.urlPath, d.length, 'description']);
}
line(`Titles over 60 chars (risk truncation):        ${tooLong.filter((x) => x[2] === 'title').length} / ${pages.length}`);
line(`Descriptions over 160 chars (risk truncation): ${tooLong.filter((x) => x[2] === 'description').length} / ${pages.length}`);
line(`Descriptions under 110 chars (wasted space):   ${tooShort.length} / ${pages.length}`);
line();
tooLong.slice(0, 6).forEach(([u, n, k]) => line(`  ${k.padEnd(12)} ${String(n).padStart(3)} chars  ${u}`));

// ------------------------------------------------------- 3. duplication
head('3. NEAR-DUPLICATE CONTENT ACROSS THE LOCATION PAGES');
line('This is the single thing a competitor audit will attack hardest.');
line('Templated city pages are how doorway-page penalties happen.');
line();

const landing = pages.filter(isLanding);
const shingles = new Map();
for (const p of landing) {
  const words = bodyText(p.html).toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ').filter(Boolean);
  const set = new Set();
  for (let i = 0; i < words.length - 4; i += 1) set.add(words.slice(i, i + 5).join(' '));
  shingles.set(p.urlPath, set);
}

const jaccard = (a, b) => {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter += 1;
  return inter / (a.size + b.size - inter);
};

const pairs = [];
const keys = [...shingles.keys()];
for (let i = 0; i < keys.length; i += 1) {
  for (let j = i + 1; j < keys.length; j += 1) {
    pairs.push([keys[i], keys[j], jaccard(shingles.get(keys[i]), shingles.get(keys[j]))]);
  }
}
pairs.sort((a, b) => b[2] - a[2]);
const pct = (n) => (n * 100).toFixed(1) + '%';
const median = pairs[Math.floor(pairs.length / 2)][2];

line(`Pairs compared: ${pairs.length}   median similarity: ${pct(median)}`);
line(`Highest similarity pairs (5-word shingle overlap):`);
pairs.slice(0, 5).forEach(([a, b, s]) => line(`  ${pct(s).padStart(6)}  ${a}\n          vs ${b}`));
line();
line(pairs[0][2] > 0.5
  ? '  VERDICT: too similar. A reviewer would call these doorway pages.'
  : pairs[0][2] > 0.3
    ? '  VERDICT: acceptable. Shared template, genuinely different copy.'
    : '  VERDICT: strong. Pages are substantively distinct.');

// ------------------------------------------------------- 4. on-page hygiene
head('4. ON-PAGE HYGIENE');

let noAlt = 0, imgs = 0, skipped = 0;
const headingIssues = [];
for (const p of pages) {
  for (const tag of p.html.match(/<img[^>]*>/g) || []) {
    imgs += 1;
    // alt="" is the correct value for decorative and tracking images, so it
    // counts as handled rather than missing.
    if (!/\salt="[^"]*"/.test(tag)) noAlt += 1;
  }
  const levels = [...p.html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  for (let i = 1; i < levels.length; i += 1) {
    if (levels[i] - levels[i - 1] > 1) { skipped += 1; headingIssues.push(p.urlPath); break; }
  }
}
line(`Images with alt text:        ${imgs - noAlt}/${imgs}`);
line(`Pages skipping heading level: ${skipped}/${pages.length}` + (headingIssues.length ? `  e.g. ${headingIssues.slice(0, 3).join(', ')}` : ''));

const wordCounts = pages.map((p) => bodyText(p.html).split(' ').length).sort((a, b) => a - b);
line(`Word count  min ${wordCounts[0]}  median ${wordCounts[Math.floor(wordCounts.length / 2)]}  max ${wordCounts[wordCounts.length - 1]}`);
line(`Pages under 300 words:       ${wordCounts.filter((w) => w < 300).length}/${pages.length}`);

const langOk = pages.filter((p) => /<html[^>]+lang="/.test(p.html)).length;
const ogOk = pages.filter((p) => /property="og:title"/.test(p.html)).length;
const twOk = pages.filter((p) => /name="twitter:card"/.test(p.html)).length;
line(`Pages declaring <html lang>: ${langOk}/${pages.length}`);
line(`Pages with Open Graph tags:  ${ogOk}/${pages.length}`);
line(`Pages with Twitter card:     ${twOk}/${pages.length}`);

// ------------------------------------------------------- 5. off-page
head('5. WHAT WE CANNOT FIX IN CODE (a competitor will lead with these)');
line('  Backlinks           unknown, almost certainly near zero. New pages,');
line('                      no acquisition work done yet. This is the single');
line('                      largest gap against SpiderWorks and Blusteak, who');
line('                      have years of Kerala press and directory links.');
line('  Domain history      www.infynix-solutions.com has no ranking history');
line('                      for these terms. Expect 4 to 9 months.');
line('  Google Business     unverified. Without it the Kochi pages cannot');
line('                      enter the map pack at all.');
line('  Reviews             none surfaced on site, no AggregateRating schema.');
line('                      Competitors show review counts in the local pack.');
line('  Content depth       2 blog posts. Tomatotree runs a full case-study');
line('                      library; that is topical authority we do not have.');
line('  Case studies        2 published. Thin for an agency pitching enterprise.');

line();
line('='.repeat(72));
