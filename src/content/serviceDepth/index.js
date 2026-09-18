import { mediaDepth } from './media.js';
import { agencyDepth } from './agency.js';
import { growthDepth } from './growth.js';

// Depth content for the service pages, keyed by slug and rendered by
// ServiceDepth inside SolutionsPage. Written per market so the .com, .co.uk
// and .ae service pages stop being cross-domain duplicates of each other.
export const serviceDepth = {
  ...mediaDepth,
  ...agencyDepth,
  ...growthDepth,
};
