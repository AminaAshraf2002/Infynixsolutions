export const CURRENT_SITE = 'in'; // India website

export const BRAND_CONTACTS = {
  agency: {
    key: 'agency',
    badge: 'Marketing & Growth Division',
    title: 'Infynix Agency',
    desc: 'Performance marketing, brand architecture, and multi-channel revenue acquisition.',
    phone: '+91 99959 11173',
    phoneFormatted: '+91 99959 11173',
    email: 'agency@infynixsolutions.com',
    instagram: 'infynix_agency',
    instagramUrl: 'https://instagram.com/infynix_agency',
    serviceSlug: 'infynix-agency',
  },
  media: {
    key: 'media',
    badge: 'Content & Production Division',
    title: 'Infynix Media House',
    desc: 'Commercial film production, studio storytelling, and high-impact digital media.',
    phone: '+91 99959 11196',
    phoneFormatted: '+91 99959 11196',
    email: 'media@infynixsolutions.com',
    instagram: 'infynixmediahouse',
    instagramUrl: 'https://instagram.com/infynixmediahouse',
    serviceSlug: 'infynix-media',
  },
};

// Also expose as array and by slug for easy lookup
BRAND_CONTACTS['infynix-agency'] = BRAND_CONTACTS.agency;
BRAND_CONTACTS['infynix-media'] = BRAND_CONTACTS.media;

export const SISTER_WEBSITES = [
  {
    domain: 'infynixsolutions.com',
    url: 'https://infynixsolutions.com',
    label: 'Global (UK)',
    region: 'United Kingdom & International',
    siteCode: 'uk',
    flag: '🇬🇧',
    color: '#3b82f6',
  },
  {
    domain: 'infynixsolutions.ae',
    url: 'https://www.infynixsolutions.ae',
    label: 'UAE & Middle East',
    region: 'Dubai, UAE',
    siteCode: 'ae',
    flag: '🇦🇪',
    color: '#007A5E',
  },
  {
    domain: 'infynix.in',
    url: 'https://infynix.in',
    label: 'India',
    region: 'India Operations',
    siteCode: 'in',
    flag: '🇮🇳',
    color: '#f97316',
  },
];

export function getSisterWebsites() {
  return SISTER_WEBSITES.filter(site => site.siteCode !== CURRENT_SITE);
}
