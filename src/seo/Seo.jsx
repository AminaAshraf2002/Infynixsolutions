import { Helmet } from 'react-helmet-async';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
} from './siteConfig';
import { buildGraph } from './schema';

/**
 * Renders head tags through Helmet so they exist in the prerendered HTML.
 *
 * The old SEOManager wrote tags in a useEffect, which meant a crawler reading the
 * raw response saw only the static index.html, every page shared one title and
 * one description, and no canonical or JSON-LD existed until after hydration.
 *
 * @param {string}  title        Full <title>. Keep under ~60 chars.
 * @param {string}  description  Meta description. Keep 140-160 chars.
 * @param {string}  path         Route path, e.g. "/seo-company-in-kochi". Drives canonical + og:url.
 * @param {boolean} noindex      Set for thin/utility pages that should stay out of the index.
 * @param {Array}   schema       Array of schema.org nodes; merged into one @graph.
 */
export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  schema = [],
  children,
}) {
  const resolvedTitle = title || DEFAULT_TITLE;
  const resolvedDescription = description || DEFAULT_DESCRIPTION;
  const canonical = absoluteUrl(path);
  const graph = schema.length ? buildGraph(schema) : null;

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-IN" />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={image} />

      {graph && (
        <script type="application/ld+json">{JSON.stringify(graph)}</script>
      )}
      {children}
    </Helmet>
  );
}

export { SITE_URL };
