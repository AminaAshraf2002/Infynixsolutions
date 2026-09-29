// Blogger Service for Infynix Solutions
// Fetches live posts from Google Blogger via JSONP (bypasses browser CORS completely)

export const BLOGGER_URL = 'https://infynixsolutionsindia.blogspot.com';

const FALLBACK_CATEGORY_IMAGES = {
  Agency: '/agency_marketing.jpg',
  Media: '/media_production.jpg',
  Development: '/dev_engineering.jpg',
  Default: '/unified_growth_model.jpg',
};

// Formats date into readable string
export const formatBloggerDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Strips HTML and creates clean plain-text snippet
export const createSnippet = (htmlContent, maxLength = 180) => {
  if (!htmlContent) return '';
  const text = htmlContent
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Extracts first <img> src from HTML content, or matches topic, or falls back to category
export const extractThumbnail = (htmlContent, categories = [], title = '') => {
  if (htmlContent) {
    const imgMatch = htmlContent.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }
  }

  // Title-based distinct image matching (ensures distinct high-res imagery for core topics)
  const t = (title || '').toLowerCase();

  // 1. High-Ticket Lead Generation & Inbound Pipeline
  if (t.includes('lead generation') || t.includes('high-ticket') || t.includes('pipeline') || t.includes('inbound')) {
    return '/lead_generation.jpg';
  }

  // 2. Performance Marketing & SEO (Agency)
  if (t.includes('performance marketing') || t.includes('vanity metrics') || t.includes('seo') || t.includes('marketing')) {
    return '/agency_marketing.jpg';
  }

  // 3. Commercial Video Production (Media)
  if (t.includes('video production') || t.includes('cinematic') || t.includes('commercial video') || t.includes('cuts cac') || t.includes('media')) {
    return '/media_production.jpg';
  }

  // 4. Custom Web Development & Engineering (Development)
  if (t.includes('engineering') || t.includes('custom web') || t.includes('templates') || t.includes('platforms') || t.includes('software')) {
    return '/dev_engineering.jpg';
  }

  // 5. AI Automation & Intelligent CRMs
  if (/\bai\b/i.test(title) || t.includes('automation') || t.includes('crm') || t.includes('manual work') || t.includes('intelligence')) {
    return '/ai_automation.jpg';
  }

  // 6. Unified Growth Model
  if (t.includes('unified growth') || t.includes('growth model') || t.includes('under one roof') || t.includes('three pillars')) {
    return '/unified_growth_model.jpg';
  }

  for (const cat of categories) {
    if (FALLBACK_CATEGORY_IMAGES[cat]) {
      return FALLBACK_CATEGORY_IMAGES[cat];
    }
  }
  return FALLBACK_CATEGORY_IMAGES.Default;
};

export const extractPostId = (idString) => {
  if (!idString) return '';
  const parts = idString.split('.post-');
  return parts.length > 1 ? parts[1] : idString;
};

export const generateSlug = (title, id) => {
  if (!title) return id;
  const clean = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .substring(0, 50);
  return `${clean}-${id}`;
};

export const parseIdFromSlug = (slugOrId) => {
  if (!slugOrId) return '';
  const match = slugOrId.match(/(\d{15,25})$/);
  return match ? match[1] : slugOrId;
};

// Fallback initial posts so UI is NEVER empty even before network returns or if Blogger is being configured
export const INITIAL_POSTS = [
  {
    id: '3672986851097605036',
    slug: 'the-unified-growth-model-why-modern-businesses-need-agency-media-dev-3672986851097605036',
    title: 'The Unified Growth Model: Why Modern Businesses Need Agency, Media, and Development Under One Roof',
    content: `<p>In modern high-velocity markets, most growing enterprises manage their digital footprint across fragmented vendors: an ad agency running paid campaigns, an independent production team handling photography and video, and a freelance web developer maintaining their code.</p>
<p>The result? <strong>Broken tracking loops, mismatched brand positioning, and immense budget waste.</strong></p>
<p>At <strong>Infynix Solutions</strong>, we operate under a unified growth model bridging three critical disciplines: <strong>Agency, Media, and Development</strong>. Here is why this integrated methodology delivers disproportionate commercial returns.</p>
<hr/>
<h2>1. Infynix Agency: Revenue-Driven Acquisition & Performance</h2>
<p>An agency shouldn't merely buy impressions; it should engineer reliable client acquisition pipelines:</p>
<ul>
  <li><strong>Technical SEO:</strong> Capturing high-intent commercial searches across target geographies with localized search optimization.</li>
  <li><strong>Server-Side Attribution:</strong> Full-funnel conversion tracking (GA4, Meta CAPI, Google Ads) attributing every inquiry back to specific ads and keywords.</li>
  <li><strong>Rapid Lead Triage:</strong> Automated workflow hooks ensuring customer inquiries receive responses within seconds.</li>
</ul>
<h2>2. Infynix Media: High-Impact Video & Narrative Production</h2>
<p>Generic stock footage and templated graphics erode brand authority. <strong>Infynix Media</strong> builds dedicated creative assets with cinematic equipment and conversion-focused directors:</p>
<ul>
  <li><strong>Corporate & Product Films:</strong> High-fidelity narrative films that build immediate institutional trust for B2B, retail, and real estate brands.</li>
  <li><strong>Performance Video Ads:</strong> Platform-native vertical videos tailored for high retention and conversion on Meta, YouTube, and LinkedIn.</li>
  <li><strong>Founder & Leadership Positioning:</strong> In-depth podcast interviews and case-study documentaries elevating founders into category authorities.</li>
</ul>
<h2>3. Infynix Development: Bespoke Web & Software Engineering</h2>
<p>Marketing and creative can only convert if the underlying software architecture is flawless:</p>
<ul>
  <li><strong>Custom Web Platforms:</strong> Sub-second, modern web applications built on React and Vite that outperform bloated CMS templates.</li>
  <li><strong>Edge AI & Workflow Automation:</strong> Custom middle-tier microservices syncing CRMs, ERPs, inventory, and messaging channels.</li>
  <li><strong>Enterprise Security & Scalability:</strong> Hardened cloud deployment pipelines guaranteeing 99.99% availability during demand spikes.</li>
</ul>
<hr/>
<h2>The Compounding Advantage of Integrated Teams</h2>
<p>When engineering, creative, and performance marketing work under a single strategic roadmap, iteration cycles drop from weeks to hours. You eliminate vendor finger-pointing and focus entirely on measurable business scale.</p>`,
    summary: 'Discover how unifying Agency performance marketing, Media video production, and custom Software Development eliminates vendor friction and accelerates scalable enterprise growth.',
    published: '2026-09-21T03:00:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T03:00:00.000-07:00',
    categories: ['Agency', 'Media', 'Development', 'Growth Strategy'],
    author: 'Infynix Solutions',
    thumbnail: '/unified_growth_model.jpg',
    bloggerUrl: 'https://infynixsolutionsindia.blogspot.com',
  },
  {
    id: '6820194820193850202',
    slug: 'commercial-video-production-how-cinematic-media-cuts-cac-6820194820193850202',
    title: 'Commercial Video Production: How Cinematic Media Cuts Customer Acquisition Costs',
    content: `<p>Consumer and B2B attention has shifted entirely to short-form and high-fidelity video. Whether on LinkedIn, Instagram, or YouTube, static banner ads and stock images are increasingly ignored by discerning buyers and executives.</p>
<p>Yet many companies treat video production as a decorative afterthought—hiring one-off videographers with zero grounding in customer psychology or revenue generation.</p>
<hr/>
<h2>Why Generic Stock Imagery Destroys Brand Equity</h2>
<p>Modern buyers can spot generic stock footage instantly. Using generic stock videos signals that an organization lacks authentic operational infrastructure. Real, high-production media builds instantaneous trust and credibility.</p>
<h2>1. Hook-Driven Vertical Video for Paid Social</h2>
<p>Producing cinematic vertical video optimized for modern social algorithms yields up to 3x higher viewer retention. The secret lies in a hook-driven opening within the first 3 seconds, paired with authentic value demonstration.</p>
<h2>2. Executive & Founder Thought Leadership</h2>
<p>People buy from founders and leadership teams they trust. Studio-quality founder spotlights, case studies, and customer documentary films elevate your team into industry-recognized leaders.</p>
<h2>3. The Content Repurposing Engine</h2>
<p>A single dedicated production day with Infynix Media yields 1 master brand film, 6 to 8 targeted short-form social cuts, and dozens of high-resolution stills—maximizing your ROI across all marketing channels.</p>`,
    summary: 'Explore why stock videos fail to convert modern consumers and how cinema-grade commercial video production paired with paid distribution drastically reduces Customer Acquisition Cost (CAC).',
    published: '2026-09-21T03:30:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T03:30:00.000-07:00',
    categories: ['Media', 'Video Production', 'Branding'],
    author: 'Infynix Solutions',
    thumbnail: '/media_production.jpg',
    bloggerUrl: 'https://infynixsolutionsindia.blogspot.com',
  },
  {
    id: '7193029482910394850',
    slug: 'custom-web-engineering-vs-generic-templates-platforms-high-conversion-7193029482910394850',
    title: 'Custom Web Engineering vs Generic Templates: Engineering Platforms for High Conversion',
    content: `<p>A website is no longer a static online brochure—it is your central sales representative, tracking engine, and product showcase running 24 hours a day, 7 days a week.</p>
<p>Too many growing businesses deploy bloated pre-made templates loaded with dozens of unnecessary third-party plugins. The outcome is predictable: 5-second load delays, broken mobile layouts, and Google Core Web Vitals penalties.</p>
<hr/>
<h2>The Cost of Slow Load Times</h2>
<p>Every additional second of page load time reduces conversion rates by up to 20%. When mobile buyers on cellular connections experience friction, they bounce to a competitor before reading your headline.</p>
<h2>1. Bespoke Lightweight Code Architecture</h2>
<p>By engineering custom web platforms using modern web frameworks (React, Vite, SSR), Infynix delivers sub-second initial paint times and 95+ Google PageSpeed scores that search engines prioritize in organic rankings.</p>
<h2>2. Frictionless Lead Funnels</h2>
<p>Our custom platforms integrate direct API hooks to WhatsApp, CRM systems, and custom calculation tools, eliminating drop-off and maximizing conversion rates on every marketing click.</p>
<h2>3. Scalable Foundation Built for Expansion</h2>
<p>A custom codebase scales effortlessly as your product catalogue or service regions expand, without fragile plugin updates that break your live storefront.</p>`,
    summary: 'Learn why bloated website templates hurt conversion rates and organic search rankings, and why custom web engineering and sub-second performance are vital for growth.',
    published: '2026-09-21T04:00:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T04:00:00.000-07:00',
    categories: ['Development', 'Web Engineering', 'Performance'],
    author: 'Infynix Solutions',
    thumbnail: '/dev_engineering.jpg',
    bloggerUrl: 'https://infynixsolutionsindia.blogspot.com',
  },
  {
    id: '8192039481920394850',
    slug: 'ai-automation-intelligent-crms-eliminate-manual-work-8192039481920394850',
    title: 'AI Automation & Intelligent CRMs: How Modern Enterprises Eliminate Manual Work in 2026',
    content: `<p>Across fast-expanding commercial centers, operations teams are spending dozens of weekly hours on repetitive manual data entry, customer follow-up tracking, and scheduling.</p>
<p>In 2026, manual business operations are a dangerous bottleneck. <strong>Forward-thinking companies are deploying autonomous AI middleware and CRM automation to scale without ballooning headcount.</strong></p>
<hr/>
<h2>The Cost of Fragmented Business Tools</h2>
<p>A typical enterprise operates between 4 to 8 disconnected software platforms: a website form, WhatsApp Business, an accounting suite, email clients, and an off-the-shelf CRM. When data fails to sync automatically between these channels, deals stall and customer inquiries go cold.</p>
<h2>1. Sub-Minute Automated Inbound Response</h2>
<p>Studies consistently reveal that leads contacted within 5 minutes are 21 times more likely to enter the sales pipeline. Infynix builds automated webhooks routing incoming inquiries instantly into CRM pipelines with automated WhatsApp and email confirmations.</p>
<h2>2. Intelligent Edge AI & Document Processing</h2>
<p>Whether automating invoice verification, lead qualification, or document classification, custom AI pipelines extract structured insights instantly, freeing your top talent to focus on revenue-generating negotiations.</p>
<h2>3. Centralized Executive Dashboards</h2>
<p>Consolidate leads, cash flows, campaign performance, and team KPIs into a clean, real-time executive cockpit for total operational visibility.</p>`,
    summary: 'Discover how enterprise AI automation, intelligent CRM pipelines, and automated WhatsApp integrations eliminate operational bottlenecks and accelerate sales velocity.',
    published: '2026-09-21T04:15:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T04:15:00.000-07:00',
    categories: ['Development', 'AI & Automation', 'Enterprise Software'],
    author: 'Infynix Solutions',
    thumbnail: '/ai_automation.jpg',
    bloggerUrl: 'https://infynixsolutionsindia.blogspot.com',
  },
  {
    id: '9182736451029384756',
    slug: 'high-ticket-lead-generation-engineering-predictable-pipelines-9182736451029384756',
    title: 'High-Ticket Lead Generation: Engineering Predictable Inbound Pipelines in Competitive Markets',
    content: `<p>Generating inquiries for low-ticket consumer products is simple. Driving consistent, qualified inbound inquiries for premium real estate, B2B enterprise software, industrial manufacturing, or high-value professional services requires an entirely different playbook.</p>
<p>High-net-worth buyers and enterprise procurement heads do not make buying decisions based on discount coupons. They require institutional trust, airtight positioning, and frictionless qualification.</p>
<hr/>
<h2>The Anatomy of a High-Ticket Funnel</h2>
<p>Traditional marketing pushes traffic to a generic homepage, expecting visitors to hunt for a contact button. High-ticket growth engineering creates structured customer qualification journeys:</p>
<ul>
  <li><strong>Intent-Based Paid Search:</strong> Capturing high-intent executive searches with tailored landing pages and immediate social proof.</li>
  <li><strong>Interactive Qualification:</strong> Custom multi-step qualification forms filtering out unvetted inquiries while collecting exact project scopes.</li>
  <li><strong>Nurture Automation:</strong> Automated multi-touch email sequences and case study distribution establishing authority before the first discovery call.</li>
</ul>
<hr/>
<h2>From Unpredictable Referrals to Scalable Growth</h2>
<p>Relying solely on word-of-mouth creates volatile revenue cycles. By engineering a validated inbound client acquisition engine, leadership gains predictable pipeline visibility quarter after quarter.</p>`,
    summary: 'A blueprint for engineering predictable high-ticket inbound client acquisition pipelines, and how combining cinematic brand trust with hyper-targeted paid media captures high-value clients.',
    published: '2026-09-21T04:30:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T04:30:00.000-07:00',
    categories: ['Agency', 'Lead Generation', 'Growth Strategy'],
    author: 'Infynix Solutions',
    thumbnail: '/lead_generation.jpg',
    bloggerUrl: 'https://infynixsolutionsindia.blogspot.com',
  },
  {
    id: '5019283746510293847',
    slug: 'performance-marketing-technical-seo-driving-pipeline-beyond-vanity-metrics-5019283746510293847',
    title: 'Performance Marketing & Technical SEO: Driving Qualified Pipeline Beyond Vanity Metrics',
    content: `<p>Most marketing reports are packed with vanity metrics: impressions, clicks, pageviews, and social reach. Yet when executive leadership reviews revenue at the end of the quarter, the needle has barely moved.</p>
<p>At <strong>Infynix Solutions</strong>, we align performance marketing and technical SEO directly with business metrics: qualified opportunities, pipeline revenue, and Customer Acquisition Cost (CAC).</p>
<hr/>
<h2>Why Technical SEO Still Dominates High-Intent Acquisition</h2>
<p>While social ads are essential for demand generation, search remains the undisputed leader in commercial capture. When an enterprise decision-maker searches for an engineering company, digital marketing agency, or automation consultant, they have active purchasing intent.</p>
<ul>
  <li><strong>Programmatic & Local Optimization:</strong> Structuring location and service landing pages that index cleanly and rank for high-intent search queries.</li>
  <li><strong>Core Web Vitals & Semantic Schema:</strong> Implementing comprehensive JSON-LD structured data and lightning-fast asset loading that search engines reward.</li>
  <li><strong>Closed-Loop Analytics:</strong> Connecting Google Ads and Meta campaigns directly to CRM deals to optimize ad spend toward highest-margin clients.</li>
</ul>`,
    summary: 'Learn why vanity metrics hurt marketing budgets, and how connecting Technical SEO and Performance Marketing directly to CRM revenue builds predictable client acquisition.',
    published: '2026-09-21T04:45:00.000-07:00',
    formattedDate: 'Sep 21, 2026',
    updated: '2026-09-21T04:45:00.000-07:00',
    categories: ['Agency', 'SEO', 'Performance Marketing'],
    author: 'Infynix Solutions',
    thumbnail: '/agency_marketing.jpg',
    bloggerUrl: 'https://infynixsolutionsindia.blogspot.com',
  },
];

let cachedPosts = null;

// Parse standard Blogger feed entry
const parseEntries = (entries) => {
  return entries.map((entry) => {
    const fullId = entry.id?.$t || '';
    const id = extractPostId(fullId);
    const title = entry.title?.$t || 'Untitled Post';
    const content = entry.content?.$t || '';
    const published = entry.published?.$t || '';
    const updated = entry.updated?.$t || published;

    const categories = (entry.category || [])
      .map((cat) => {
        if (typeof cat === 'string') return cat;
        return cat.term || '';
      })
      .filter(Boolean);

    const alternateLink = (entry.link || []).find(
      (l) => l.rel === 'alternate' && l.type === 'text/html'
    )?.href || '';

    const authorName = entry.author?.[0]?.name?.$t || 'Infynix';
    const thumbnail = extractThumbnail(content, categories, title);
    const summary = createSnippet(content, 180);
    const slug = generateSlug(title, id);

    return {
      id,
      slug,
      title,
      content,
      summary,
      published,
      formattedDate: formatBloggerDate(published),
      updated,
      categories,
      author: authorName,
      thumbnail,
      bloggerUrl: alternateLink,
    };
  });
};

export const fetchBloggerPosts = async (forceRefresh = false) => {
  if (!forceRefresh && cachedPosts && cachedPosts.length > 0) {
    return cachedPosts;
  }

  // If running in SSR / Node environment where window is undefined
  if (typeof window === 'undefined') {
    return INITIAL_POSTS;
  }

  return new Promise((resolve) => {
    const callbackName = `bloggerCallback_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const timer = setTimeout(() => {
      cleanup();
      cachedPosts = cachedPosts || INITIAL_POSTS;
      resolve(cachedPosts);
    }, 4000);

    const cleanup = () => {
      clearTimeout(timer);
      try {
        delete window[callbackName];
        const script = document.getElementById(callbackName);
        if (script) script.remove();
      } catch {
        // ignore cleanup errors
      }
    };

    window[callbackName] = (data) => {
      cleanup();
      try {
        const entries = data?.feed?.entry || [];
        if (entries.length > 0) {
          const parsed = parseEntries(entries);
          // Combine live Blogger posts with initial posts so categories are never empty
          const parsedTitles = new Set(parsed.map((p) => p.title.toLowerCase().trim()));
          const remainingInitial = INITIAL_POSTS.filter(
            (p) => !parsedTitles.has(p.title.toLowerCase().trim())
          );
          const combined = [...parsed, ...remainingInitial];
          cachedPosts = combined;
          resolve(combined);
          return;
        }
      } catch (err) {
        console.warn('Error parsing Blogger JSONP feed:', err);
      }
      cachedPosts = cachedPosts || INITIAL_POSTS;
      resolve(cachedPosts);
    };

    try {
      const script = document.createElement('script');
      script.id = callbackName;
      script.src = `${BLOGGER_URL}/feeds/posts/default?alt=json-in-script&callback=${callbackName}`;
      script.onerror = () => {
        cleanup();
        cachedPosts = cachedPosts || INITIAL_POSTS;
        resolve(cachedPosts);
      };
      document.head.appendChild(script);
    } catch {
      cleanup();
      cachedPosts = cachedPosts || INITIAL_POSTS;
      resolve(cachedPosts);
    }
  });
};
