// Single source of truth for every absolute URL, canonical tag, sitemap entry and
// schema @id on the site. Nothing else should hardcode the domain.
//
// NOTE: the previous robots.txt and sitemap.xml declared https://infynix.com —
// a domain Infynix does not own (it resolves to a domain-sale listing). Do not
// reintroduce it.

export const SITE_URL = 'https://www.infynix-solutions.com';

export const SITE_NAME = 'Infynix Solutions';

export const DEFAULT_TITLE =
  'Infynix Solutions — Digital Marketing & Software Development Company in Kochi, Kerala';

export const DEFAULT_DESCRIPTION =
  'Infynix Solutions is a growth engineering company in Kochi, Kerala building websites, mobile apps, AI automation and performance marketing systems for businesses across Kerala, India and the GCC.';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

// Canonical business details. Must stay byte-identical to the Google Business
// Profile and every external citation — inconsistent NAP suppresses local ranking.
export const BUSINESS = {
  legalName: 'Infynix Solutions',
  email: 'info@infynixsolutions.ae',
  telephone: '+91-99959-11140',
  address: {
    street: '7th Floor, National Pearl Star Building, Devankulangara, Mamangalam, Edappally',
    locality: 'Kochi',
    region: 'Kerala',
    postalCode: '682024',
    country: 'IN',
  },
  // Edappally / Changampuzha Metro, Kochi.
  geo: { latitude: 10.0261, longitude: 76.3125 },
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:30',
    closes: '18:30',
  },
  areaServed: [
    'Kochi',
    'Ernakulam',
    'Kozhikode',
    'Calicut',
    'Thrissur',
    'Thiruvananthapuram',
    'Kerala',
    'India',
    'United Arab Emirates',
    'United Kingdom',
  ],
};

// Add real profile URLs as they go live — sameAs is a meaningful entity signal and
// an empty/wrong list is worse than a short accurate one.
export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/infynix-solutions',
  'https://www.instagram.com/infynixsolutions',
];

export const absoluteUrl = (path = '/') => {
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};
