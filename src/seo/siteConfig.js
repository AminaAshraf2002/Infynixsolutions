// Single source of truth for every absolute URL, canonical tag, sitemap entry and
// schema @id on the site. Nothing else should hardcode the domain.
//
// NOTE: the previous robots.txt and sitemap.xml declared https://infynix.com , 
// a domain Infynix does not own (it resolves to a domain-sale listing). Do not
// reintroduce it.

export const SITE_URL = 'https://www.infynix-solutions.com';

export const SITE_NAME = 'Infynix Solutions';

export const DEFAULT_TITLE =
  'Infynix Solutions | The Growth Engineering Company';

export const DEFAULT_DESCRIPTION =
  'Infynix Solutions is a Growth Engineering company in Kochi, Kerala. We engineer custom web software, real-time edge AI surveillance, and retail growth systems across Kerala, the GCC, and the United Kingdom.';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

// Canonical business details. Must stay byte-identical to the Google Business
// Profile and every external citation, inconsistent NAP suppresses local ranking.
export const BUSINESS = {
  legalName: 'Infynix Solutions',
  email: 'info@infynixsolutions.ae',
  telephone: '+91-99959-11173',
  address: {
    street: '3rd Floor, Oberon Mall, Padivattom, Edappally',
    locality: 'Kochi',
    region: 'Kerala',
    postalCode: '682024',
    country: 'IN',
  },
  // Oberon Mall, Padivattom, Edappally. Approximate to the building.
  // Verify against the pin on the Google Business Profile before relying on it
  // for anything beyond schema.
  geo: { latitude: 10.0159, longitude: 76.3089 },
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

// Add real profile URLs as they go live, sameAs is a meaningful entity signal and
// an empty/wrong list is worse than a short accurate one.
// The Google Business Profile. Exported separately because it is also used as
// the LocalBusiness hasMap value and linked from the site, not just listed in
// sameAs. Reviews left here are the strongest local ranking signal available.
export const GOOGLE_BUSINESS_PROFILE = 'https://share.google/ey1Jfvouw3GLkRGzF';

export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/infynix-solutions',
  'https://www.instagram.com/infynixsolutions',
  // Listing the GBP in sameAs is how the site and the profile get resolved as
  // the same entity rather than two similar businesses.
  GOOGLE_BUSINESS_PROFILE,
];

export const absoluteUrl = (path = '/') => {
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};
