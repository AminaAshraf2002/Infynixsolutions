import { kochiPages } from './kochi.js';
import { keralaPages } from './kerala.js';
import { kozhikodePages } from './kozhikode.js';
import { trivandrumPages } from './trivandrum.js';
import { kochiDepth } from './depth/kochi.js';
import { keralaDepth } from './depth/kerala.js';
import { kozhikodeDepth } from './depth/kozhikode.js';
import { trivandrumDepth } from './depth/trivandrum.js';
// Long-tail pages: ERP, CRM and video production per city. Self-contained,
// written with the deep sections inline, so they need no depth entry.
import { indiaErpPages } from './india-erp.js';
import { indiaCrmPages } from './india-crm.js';
import { indiaVideoPages } from './india-video.js';

// The base files carry the page identity and the copy that was written first:
// intro, services, local section and the original FAQs. The depth files carry
// the sections added to compete on content depth (capabilities, specs, use
// cases, engagements, detail blocks and further FAQs). They are merged here so
// each page reads as one document while the source stays reviewable.
const depth = {
  ...kochiDepth,
  ...keralaDepth,
  ...kozhikodeDepth,
  ...trivandrumDepth,
};

const withDepth = (page) => {
  const extra = depth[page.slug];
  if (!extra) return page;
  const { extraFaqs = [], ...rest } = extra;
  return { ...page, ...rest, faqs: [...page.faqs, ...extraFaqs] };
};

export const landingPages = [
  ...kochiPages,
  ...keralaPages,
  ...kozhikodePages,
  ...trivandrumPages,
  ...indiaErpPages,
  ...indiaCrmPages,
  ...indiaVideoPages,
].map(withDepth);

export const landingPageBySlug = Object.fromEntries(
  landingPages.map((page) => [page.slug, page])
);

export const getLandingPage = (slug) => landingPageBySlug[slug] || null;
