// Depth sections for the Kochi landing pages, keyed by slug and merged in
// index.js. Three pages are taken to the ceiling of the plan (software
// development, digital marketing, IT company) with GST, e-invoicing, DPDP and
// Kerala market hooks; the rest sit at the floor. Kochi is the office city, so
// the local detail here is first-hand: Infopark, Kakkanad, MG Road, Edappally.

export const kochiDepth = {
  'digital-marketing-agency-in-kochi': {
    capabilitiesHeading: 'What you get each month',
    capabilities: [
      { name: 'Attribution you can audit', desc: 'Every enquiry carries source, campaign and landing page into the CRM, so revenue by channel is a query, not a debate.' },
      { name: 'Malayalam and English by design', desc: 'Campaigns split by language, with Malayalam creative written by native speakers rather than translated from English.' },
      { name: 'WhatsApp as a tracked channel', desc: 'Click-to-WhatsApp ads and site buttons measured as conversions and routed into the CRM, because that is where Kochi enquiries happen.' },
      { name: 'Area and intent pages', desc: 'Landing pages for Kakkanad, Edappally, Vyttila, Fort Kochi and the intents that matter, built to rank and convert, never templated.' },
      { name: 'Creative on a testing cadence', desc: 'New hooks, formats and offers tested against the control on a schedule, with losers cut before they burn budget.' },
      { name: 'Weekly working notes', desc: 'A short written update every week on what changed, why, and what it produced.' },
      { name: 'Full account ownership', desc: 'Ad accounts, GA4, Tag Manager and Business Profile in your name from day one.' },
      { name: 'Seasonal planning', desc: 'Onam, Vishu, wedding season, school admissions and the December tourist peak planned into budgets and creative in advance.' },
    ],
    specsHeading: 'Channels, timelines and what we measure',
    specsColumns: ['Channel', 'Time to first signal', 'Primary measure'],
    specs: [
      ['Google Search', '1 to 2 weeks', 'Cost per qualified enquiry'],
      ['Performance Max and Shopping', '3 to 4 weeks', 'Return on ad spend, new customer rate'],
      ['Meta and Instagram', '2 to 3 weeks', 'Cost per lead, lead quality from CRM'],
      ['YouTube', '3 to 4 weeks', 'View-through enquiries, brand search lift'],
      ['LinkedIn (B2B)', '4 to 6 weeks', 'Meetings booked, pipeline created'],
      ['Local SEO and Business Profile', '8 to 12 weeks', 'Map pack visibility, calls and directions'],
      ['Organic search', '4 to 9 months', 'Organic enquiries by page'],
    ],
    useCasesHeading: 'Who this is built for',
    useCases: [
      { name: 'Clinics and hospitals', desc: 'Specialist practices and hospital groups in Kaloor, Kakkanad and Edappally competing for patients, within NMC and ASCI advertising rules.' },
      { name: 'Real estate developers', desc: 'Apartment and villa projects generating site visits from Kochi and the Gulf diaspora, with K-RERA details on every ad and enquiry routing that does not lose leads.' },
      { name: 'Retail and D2C brands', desc: 'Jewellery, fashion, furniture and consumer brands running Shopping, Meta and Instagram with margin-aware bidding.' },
      { name: 'Education and training', desc: 'Schools, colleges and institutes with admissions cycles that need campaigns timed to them.' },
      { name: 'Infopark and SaaS companies', desc: 'B2B firms in Kakkanad selling to India and abroad, with LinkedIn and search programmes measured on pipeline.' },
      { name: 'Hospitality and tourism', desc: 'Resorts, homestays and experiences in Fort Kochi, Kumbalangi and the backwaters, where Maps, Instagram and OTA-independent bookings are the goal.' },
    ],
    engagementsHeading: 'How we work together',
    engagements: [
      { name: 'Growth retainer', desc: 'Strategy, channels, creative, automation and reporting on a monthly retainer, with budgets moved to whatever is producing. Most Kochi clients settle here.' },
      { name: 'Foundations project', desc: 'Tracking, CRM, Business Profile and landing pages built before any spend, for businesses that want the plumbing right first.' },
      { name: 'Channel management', desc: 'One or two channels run inside a wider in-house team, reporting into your existing stack.' },
      { name: 'Audit and rescue', desc: 'A paid audit of accounts that spend without producing, with a written plan. We say plainly if the problem is not the marketing.' },
    ],
    detail: [
      {
        heading: 'Why measurement comes before spend',
        body: [
          'Kochi click costs are rising fast in the categories that matter: healthcare, real estate, education, jewellery and premium services. Agencies compete for the same auctions and some will spend a client budget just to hold a position. In that market, a campaign that cannot separate a qualified enquiry from a junk form fill is not marketing. It is a donation to Google.',
          'So before a rupee goes to a platform, we install the layer that lets spend be judged: conversion events that mean something, call and WhatsApp tracking, CRM fields for source and campaign, and an agreed definition of a qualified lead. The first month of spend is then a measurement exercise as much as a growth one, and every month after is decided on the numbers.',
        ],
        points: [
          { name: 'Offline conversion import', desc: 'Qualified leads and closed sales sent back to Google and Meta so the platforms optimise for revenue, not form fills.' },
          { name: 'Lead quality scoring', desc: 'A simple score applied in the CRM within a day of each enquiry, fed back into bidding and creative.' },
          { name: 'DPDP-aware tracking', desc: 'Consent and data handling aligned with the Digital Personal Data Protection Act, so the data you build on is data you may hold.' },
          { name: 'One dashboard', desc: 'Spend, leads, qualified leads and revenue by channel in one view, refreshed daily.' },
        ],
      },
      {
        heading: 'Kochi searches in two languages and on a phone',
        body: [
          'A large share of Kochi consumer search happens in Malayalam or in Manglish, on a phone, often mid-conversation on WhatsApp with someone who recommended you. English-only campaigns designed for a desktop form-filler miss most of that. The Gulf diaspora adds a second layer: a family in Dubai researching a Kochi hospital, a school or an apartment, searching in English at odd hours and converting on WhatsApp.',
          'We structure campaigns by language and intent, write Malayalam ads and pages with native speakers, run diaspora campaigns where the business sells to NRIs, and make WhatsApp the primary conversion path where the audience expects it. Google Business Profile is treated as a channel with its own content plan, because for local searches it does most of the work.',
        ],
        points: [
          { name: 'Malayalam campaigns', desc: 'Separate campaigns with Malayalam keywords, ads and pages, reported on their own economics.' },
          { name: 'NRI and Gulf targeting', desc: 'Campaigns for the diaspora audience, timed to Gulf hours and routed to WhatsApp.' },
          { name: 'Business Profile management', desc: 'Weekly posts, services, Q and A seeding and review responses in both languages.' },
          { name: 'Mobile-first pages', desc: 'Pages that load fast on a mid-range Android on a Jio connection, because that is where the click happens.' },
        ],
      },
      {
        heading: 'Advertising rules that apply in Kerala',
        body: [
          'Indian advertising has rules that matter for campaign design. Doctors and hospitals are bound by National Medical Commission and state medical council restrictions on how they may advertise. Real estate projects must carry the K-RERA registration number. The ASCI code applies across categories, with specific chapters for education, healthcare and financial products. Google and Meta add their own restricted-category policies on top.',
          'None of this is a reason to avoid advertising. It is a reason to work with a team that builds compliance into the creative process rather than discovering it when an ad is disapproved or a complaint lands. We keep a checklist per sector and run creative through it before launch.',
        ],
        points: [
          { name: 'Healthcare creative review', desc: 'Claims, imagery and language checked against NMC and ASCI guidance before launch.' },
          { name: 'Real estate compliance', desc: 'K-RERA numbers and disclaimers carried on every project ad and landing page.' },
          { name: 'Education claims', desc: 'Placement, ranking and outcome claims substantiated or removed, per the ASCI education chapter.' },
          { name: 'Platform policy', desc: 'Restricted-category requirements on Google and Meta handled before an account is suspended mid-campaign.' },
        ],
      },
      {
        heading: 'The Kerala calendar shapes the plan',
        body: [
          'The Kochi commercial year has a shape that flat monthly budgets ignore. Onam drives the largest retail window of the year, with jewellery, fashion, furniture and consumer durables planning months ahead. Vishu, the wedding season and school admissions each open their own windows. The monsoon changes footfall and moves demand online. December brings the tourist peak and the Biennale years bring a different audience to Fort Kochi entirely.',
          'We plan budgets, creative and offers around that calendar. Onam creative is in production by July. Admissions campaigns are live when parents start searching, not when the school notices. Peak season volume is matched to what sales and operations can handle, because a campaign that fills the diary beyond capacity produces bad reviews rather than growth.',
        ],
        points: [
          { name: 'Onam and Vishu planning', desc: 'Creative, offers and budgets prepared well ahead of the season.' },
          { name: 'Admissions cycles', desc: 'Education campaigns timed to when parents actually start searching.' },
          { name: 'Monsoon shifts', desc: 'Spend moved toward online and delivery-led offers when footfall drops.' },
          { name: 'Capacity matching', desc: 'Campaign volume agreed against what the business can serve.' },
        ],
      },
      {
        heading: 'SEO and paid as one system',
        body: [
          'Agencies often sell SEO and paid search as separate products run by separate teams, producing two keyword lists, two sets of landing pages and two reports that disagree. We run them as one system. Paid data tells us which terms convert before organic rankings exist. Organic rankings reduce the paid budget needed on brand and high-intent terms. Landing pages are shared, so conversion improvements from paid testing lift organic results too.',
          'For most Kochi businesses the practical result is that paid produces enquiries in the first quarter, local SEO starts carrying the map pack in the second, and by the end of the first year organic search produces a meaningful share of enquiries at a cost paid cannot match.',
        ],
        points: [
          { name: 'Shared keyword model', desc: 'One intent model across paid and organic, with paid data feeding organic priorities.' },
          { name: 'Shared landing pages', desc: 'Conversion wins from paid tests applied to the pages that rank.' },
          { name: 'Brand term strategy', desc: 'Brand bidding decided on the numbers as organic brand rankings strengthen.' },
          { name: 'Content that closes', desc: 'Service and guide content planned from demand and written to convert.' },
        ],
      },
      {
        heading: 'Questions to ask any Kochi agency before you sign',
        body: [
          'The Kochi agency market is crowded and the pitches sound alike. A few questions separate the teams that will produce revenue from those that will produce reports. Ask who owns the ad accounts and the analytics property, and what happens if you leave. Ask how a qualified lead is defined and where that definition lives. Ask to see a real weekly update sent to another client, numbers redacted. Ask what they would stop doing in month three if it was not working.',
          'Ask how Malayalam creative is produced and by whom, how WhatsApp enquiries are tracked, and whether they have run campaigns in your category under its advertising rules. Any agency that hesitates has not built a measured system for a Kerala business before. We are happy to answer every one of these on the first call.',
        ],
        points: [
          { name: 'Account ownership', desc: 'Everything in your name from day one, with admin access documented.' },
          { name: 'Lead definition', desc: 'Agreed in the first workshop and applied in the CRM, not in a slide.' },
          { name: 'Proof of process', desc: 'Real weekly notes and a live dashboard, shown before you sign.' },
          { name: 'Exit terms', desc: 'A notice period in weeks and a clean handover of every asset.' },
        ],
      },
      {
        heading: 'What we will not do',
        body: [
          'We will not buy followers, reviews or links. We will not launch spend without conversion tracking because a client wants to move faster. We will not report clicks and impressions as if they were results. We will not hold your accounts, and we will not promise a ranking, a cost per lead or a revenue number before we have seen your data.',
          'That list loses us some pitches in a market where confident guarantees are common. It is also why the clients who stay with us stay for years: the numbers we report are the numbers their accountant sees.',
        ],
      },
      {
        heading: 'Marketing for Infopark and B2B companies',
        body: [
          'Kochi has a second economy that the consumer playbook ignores: SaaS and services companies in Infopark and SmartCity selling to buyers in Bengaluru, the US, the Gulf and Europe. For them, marketing is LinkedIn, search for the terms buyers use, content that demonstrates capability, and a CRM that can follow a deal for six months. Reels do not close enterprise contracts.',
          'We build B2B programmes measured on meetings and pipeline: account-based LinkedIn campaigns, search coverage for the problem and comparison terms buyers actually type, capability content a prospect can forward internally, and nurture sequences that keep a relationship warm without becoming noise. Reporting shows opportunities and pipeline by source, not leads.',
        ],
        points: [
          { name: 'Account-based campaigns', desc: 'LinkedIn and search targeting for the companies you actually want to sell to.' },
          { name: 'Comparison and problem content', desc: 'Pages for the terms buyers search when they are choosing, not just when they are browsing.' },
          { name: 'Long-cycle nurture', desc: 'CRM sequences that keep a contact engaged over months.' },
          { name: 'Pipeline reporting', desc: 'Opportunities and pipeline value by source, through to the closed deal.' },
        ],
      },
      {
        heading: 'The first ninety days',
        body: [
          'The first month is foundations: access, tracking, CRM fields, Business Profile cleanup, the lead definition and the first landing pages, with a small amount of search spend to start collecting data. The second month is the first real campaigns across the channels that fit, with creative testing under way and the weekly notes showing what is moving. The third month is the first honest review: what produced qualified enquiries at what cost, what to cut, where to move the budget.',
          'By day ninety you have a measured system, three months of real numbers and a plan for the next quarter built on them rather than on a proposal. That is the point at which most clients decide to scale, and the point at which the ones who should not are told so.',
        ],
        points: [
          { name: 'Month one', desc: 'Foundations, tracking, lead definition, first pages and a data-gathering budget.' },
          { name: 'Month two', desc: 'Campaigns live across the fitting channels, creative testing under way.' },
          { name: 'Month three', desc: 'The first quarterly review on real numbers, with cuts and reallocations.' },
          { name: 'Quarter two onwards', desc: 'Scaling what works, with SEO starting to carry weight.' },
        ],
      },
      {
        heading: 'Creative that is made in Kochi, for Kochi',
        body: [
          'Most agency creative for Kerala brands is stock footage with a Malayalam caption. It reads as borrowed because it is. The Infynix Media team shoots in Kochi: your premises, your people, your products, the streets and the customers that make the brand recognisable to the people you are selling to. That footage feeds the paid campaigns, the organic calendar and the website, so the brand looks like one brand everywhere.',
          'Creative is planned on a testing cadence rather than produced once. New hooks, formats and offers go live every few weeks, the numbers decide what survives, and the next shoot day is planned from what the last month taught us.',
        ],
        points: [
          { name: 'Shot in Kochi', desc: 'Real premises, people and products, not stock.' },
          { name: 'One brand system', desc: 'The same creative feeding paid, organic and the site.' },
          { name: 'Testing cadence', desc: 'New hooks and formats on a schedule, with the numbers deciding.' },
          { name: 'Malayalam and English', desc: 'Scripts and captions written natively in both.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Do you run campaigns for the Gulf diaspora?', answer: 'Yes. For hospitals, schools, real estate and premium services that sell to NRI families, we run campaigns targeted to the UAE, Saudi Arabia, Qatar and Oman, timed to Gulf hours and routed to WhatsApp. Our UAE office gives us a working view of that audience.' },
      { question: 'How do you report?', answer: 'A short written note every week on what changed and what it did, a monthly review with spend, enquiries, qualified enquiries and revenue by channel, and a live dashboard you can open any time. Reports use the definitions your accountant uses, not platform vanity metrics.' },
      { question: 'Can you work alongside our in-house marketing team?', answer: 'Yes, and many engagements work that way. We take one or more channels, or the measurement and automation layer, and report into your existing meetings and tools. Account ownership stays with you.' },
      { question: 'Do you guarantee results?', answer: 'No, and we would be cautious of any agency that does. We commit to a measured system, transparent methodology, honest weekly reporting and the willingness to say when something is not working. Results follow from that discipline and show up in your own CRM.' },
      { question: 'What do you need from us to start?', answer: 'Access to your ad accounts, analytics, website and CRM, a clear picture of margins and the sales process, and someone who can make decisions weekly. The first two to three weeks go on measurement and foundations, and spend begins once the numbers can be trusted.' },
      { question: 'Do you work with businesses outside Kochi?', answer: 'Yes. We run campaigns for businesses across Kerala, including Kozhikode, Thrissur and Trivandrum, and for Kerala companies selling nationally and to the Gulf. Kochi is where the office is and where in-person sessions happen most.' },
      { question: 'Do you handle Onam and seasonal campaigns?', answer: 'Yes. The Kerala calendar drives our planning. Onam, Vishu, wedding season, admissions and the December peak are planned into budgets and creative in advance, with adjusted schedules and offers ready before the season rather than during it.' },
      { question: 'Do you work with B2B and SaaS companies in Infopark?', answer: 'Yes. B2B programmes run on LinkedIn and search with capability content and CRM nurture, measured on meetings and pipeline rather than leads. Several of our engagements are with companies selling from Kakkanad to buyers abroad.' },
      { question: 'Which CRM do you recommend for a Kochi business?', answer: 'It depends on the sales process. Zoho fits most Indian SMEs on cost and localisation, HubSpot fits marketing-led teams, and WhatsApp-first sales teams sometimes need a lighter tool with the Business API integrated. We recommend after seeing how your team actually sells.' },
      { question: 'Can you help with our Google Business Profile if it has been suspended?', answer: 'Yes. Suspensions usually come from address, category or name inconsistencies. We audit the profile and citations, correct the cause, prepare the reinstatement request and manage the profile properly afterwards so it does not recur.' },
    ],
  },

  'seo-company-in-kochi': {
    capabilitiesHeading: 'What the programme delivers',
    capabilities: [
      { name: 'A prioritised technical backlog', desc: 'Every issue found, ranked by impact and effort, fixed by us or handed to your developers with clear tickets.' },
      { name: 'Malayalam search coverage', desc: 'Malayalam and Manglish keyword research, content and on-page work as a separate track, reported separately.' },
      { name: 'Area and service pages', desc: 'Pages for Kakkanad, Edappally, Vyttila, Aluva and the intents that exist, without doorway duplication.' },
      { name: 'Business Profile as a channel', desc: 'Weekly posts, services, Q and A and review responses in both languages.' },
      { name: 'Content that answers', desc: 'Guides and service pages structured so search engines and AI assistants can quote them.' },
      { name: 'Monthly authority work', desc: 'A steady, defensible link and mention programme rather than a burst that triggers a review.' },
    ],
    specsHeading: 'What to expect and when',
    specsColumns: ['Workstream', 'Typical timeline', 'Evidence it is working'],
    specs: [
      ['Technical remediation', 'Weeks 1 to 6', 'Indexed pages up, errors down in Search Console'],
      ['Local SEO and Business Profile', 'Weeks 4 to 12', 'Map pack visibility, calls and direction requests'],
      ['Content programme', 'Month 2 onwards', 'Impressions and clicks on new pages'],
      ['Authority building', 'Month 3 onwards', 'Referring domains and page-level rankings'],
      ['Competitive city terms', 'Months 6 to 12', 'Page one positions and enquiries by query'],
    ],
    useCasesHeading: 'Who we run SEO for in Kochi',
    useCases: [
      { name: 'Hospitals and clinics', desc: 'Treatment, condition and doctor pages that rank for high-value terms within NMC advertising limits.' },
      { name: 'Real estate', desc: 'Locality guides, project pages and buyer-intent content that compete with the portals rather than depend on them.' },
      { name: 'E-commerce and retail', desc: 'Category and product SEO at scale with technical control over facets and duplication.' },
      { name: 'Education', desc: 'Course, admission and campus content aligned to what parents and students search and when.' },
      { name: 'Infopark and B2B', desc: 'Capability and comparison content for SaaS and services firms selling from Kochi to India and abroad.' },
    ],
    engagementsHeading: 'How we engage',
    engagements: [
      { name: 'SEO retainer', desc: 'The full programme monthly, with the balance between technical, content and authority work adjusted as the data dictates.' },
      { name: 'Technical audit and fix', desc: 'A fixed-scope audit with remediation for sites where the foundation is the problem.' },
      { name: 'Content programme', desc: 'Bilingual content production on a set cadence for businesses with the technical basics in place.' },
    ],
    detail: [
      {
        heading: 'Why technical work comes first',
        body: [
          'Most Kochi business websites we audit have problems that no content or links will overcome: pages Google cannot render, duplicate URLs, slow mobile load on Indian networks, broken structured data and architecture that hides the pages that matter. Fixing those first is not glamorous, but it is what lets everything else work.',
          'We audit against what Google actually sees, using Search Console, crawl tools and rendered page checks, then fix in order of impact. Where your developers own the site, we hand over precise tickets and verify the fixes ourselves.',
        ],
        points: [
          { name: 'Rendering and indexation', desc: 'JavaScript sites checked for what Googlebot receives, with prerendering or fixes where content is invisible.' },
          { name: 'Core Web Vitals', desc: 'Load, interactivity and stability improved on the templates that carry traffic, measured on real Indian mobile connections.' },
          { name: 'Structured data', desc: 'Organization, LocalBusiness, Service, FAQ and Product schema applied where it is true and useful.' },
          { name: 'Architecture', desc: 'Sitemaps, navigation and internal links reworked so authority flows to the pages that need to rank.' },
        ],
      },
      {
        heading: 'Local search across Ernakulam',
        body: [
          'Kochi searches are local in a way that matters. People search for a dentist in Kakkanad, a CA in Panampilly Nagar, a gym in Edappally. The map pack takes a large share of those clicks, driven by Business Profile signals, proximity, reviews and how consistently your details appear across the web.',
          'We treat Business Profile as a channel with its own content calendar, clean up citations across Indian directories so details match everywhere, and build area content only where the intent exists. We do not claim addresses a business does not hold, because that is how profiles get suspended.',
        ],
        points: [
          { name: 'Profile optimisation', desc: 'Categories, services, products, photos and posts kept current in Malayalam and English.' },
          { name: 'Citation consistency', desc: 'Name, address and phone matched across Justdial, Sulekha, IndiaMART and the rest.' },
          { name: 'Review workflow', desc: 'A steady process for asking, responding and learning from reviews, never purchased.' },
          { name: 'Area content', desc: 'Pages for the localities you serve, with real local detail rather than a swapped name.' },
        ],
      },
      {
        heading: 'Malayalam search is its own discipline',
        body: [
          'Malayalam and Manglish queries behave differently from English ones. Spelling varies, transliteration varies, and people phrase a need differently in their own language. Translating English pages produces content that Malayalam readers recognise as translated and that rarely ranks. The gap between Malayalam demand and quality Malayalam content is also the widest opportunity in Kerala search.',
          'Our Malayalam work is planned from Malayalam keyword research and written by native speakers, running as a separate track with its own reporting so you can see what each language produces.',
        ],
        points: [
          { name: 'Malayalam keyword research', desc: 'Demand mapped from Malayalam and Manglish search data, including spelling variants.' },
          { name: 'Native writing', desc: 'Content written in Malayalam, not translated.' },
          { name: 'Language markup', desc: 'Versions marked up correctly so Google serves the right page to the right searcher.' },
          { name: 'Separate reporting', desc: 'Traffic, rankings and enquiries by language.' },
        ],
      },
      {
        heading: 'Competing with portals and national brands',
        body: [
          'For many Kochi searches the first page is held by Justdial, Practo, Sulekha, national brands and aggregators, not by the local businesses that actually do the work. They hold those positions with scale and authority, and they charge the businesses listed on them for the leads. The way past them is not to outspend them. It is to give Google what they cannot: specific, local, first-hand content about your services, your locality and your customers, a Business Profile that outperforms a listing, and reviews that read as real.',
          'We map which portals hold which terms, find the queries where a local page can win, and build the content and authority that displaces them one term at a time.',
        ],
        points: [
          { name: 'Portal mapping', desc: 'Which aggregators hold which terms, and where the gaps are.' },
          { name: 'First-hand content', desc: 'Pages that say what only the business that does the work can say.' },
          { name: 'Business Profile strength', desc: 'A profile that beats a listing for a local search.' },
          { name: 'Term by term', desc: 'Displacing portals on the queries that convert, in priority order.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Do you buy links?', answer: 'No. Authority is earned through useful content, publisher outreach, partnerships and digital PR. Bought links are a liability that surfaces at the next link spam update.' },
      { question: 'Do you work with our developers or your own?', answer: 'Either. Where your team owns the site we hand over precise tickets and verify the fixes. Where you would rather we made the changes, our engineering team does, which is often faster for JavaScript and platform issues.' },
      { question: 'How do you report?', answer: 'Monthly with Search Console, GA4 and CRM data connected, so you see organic enquiries and revenue by page and query, plus rankings, indexation and authority as leading indicators. A short weekly note covers what changed.' },
      { question: 'Can you fix a Google penalty or a traffic drop?', answer: 'Yes. We diagnose manual actions and algorithmic drops from Search Console and crawl data, clean up toxic links where that is the cause, fix content and technical issues where they are, and document the recovery. We will also say if the drop is seasonal or a tracking problem rather than a penalty.' },
      { question: 'Can a local business outrank Justdial or Practo?', answer: 'For specific local and service terms, yes. Portals win on scale and authority, but a local business can win with first-hand content, a strong Business Profile and genuine reviews on the queries that actually convert. We map the terms where that is realistic and work through them in order.' },
      { question: 'Do you handle e-commerce SEO?', answer: 'Yes. Category architecture, product page optimisation, faceted navigation control, product schema and internal linking for stores on Shopify, WooCommerce and custom platforms.' },
    ],
  },

  'software-development-company-in-kochi': {
    capabilitiesHeading: 'What a Kochi build includes by default',
    capabilities: [
      { name: 'GST-compliant invoicing', desc: 'Tax invoices, credit notes, HSN and SAC codes, CGST, SGST and IGST handled correctly, with GSTR-ready data.' },
      { name: 'E-invoicing and e-way bills', desc: 'IRN generation through the Invoice Registration Portal for businesses above the turnover threshold, and e-way bill data for goods movement.' },
      { name: 'Tally and accounting integration', desc: 'Tally Prime, Zoho Books, QuickBooks or Busy fed from the operational system so the accountant keeps working in the tool they trust.' },
      { name: 'UPI and Indian payments', desc: 'Razorpay, PayU, Cashfree, PhonePe and Paytm integration, UPI intent flows, and cash on delivery reconciled properly.' },
      { name: 'DPDP-aware data handling', desc: 'Consent, purpose, access and deletion handled in line with the Digital Personal Data Protection Act.' },
      { name: 'Malayalam interfaces', desc: 'Bilingual screens where staff or customers need them, with Malayalam typography that renders properly on cheap Android phones.' },
      { name: 'WhatsApp Business API', desc: 'Notifications, order updates and sales conversations through the channel Kerala customers actually use.' },
      { name: 'Full handover', desc: 'Source code, infrastructure, documentation and credentials in your name. You are never locked to us.' },
    ],
    specsHeading: 'Typical scope, timeline and investment',
    specsColumns: ['Engagement', 'Typical timeline', 'Indicative investment'],
    specs: [
      ['Discovery and technical specification', '2 to 3 weeks', '₹1,50,000 to ₹4,00,000'],
      ['MVP web or mobile application', '8 to 12 weeks', '₹6,00,000 to ₹18,00,000'],
      ['ERP implementation (Odoo or bespoke)', '10 to 20 weeks', '₹8,00,000 to ₹35,00,000'],
      ['CRM implementation and integration', '4 to 10 weeks', '₹3,00,000 to ₹12,00,000'],
      ['E-commerce platform', '8 to 16 weeks', '₹5,00,000 to ₹25,00,000'],
      ['Enterprise platform', '4 to 8 months', '₹35,00,000 and above'],
      ['Support and maintenance', 'Monthly', 'From ₹40,000 per month'],
    ],
    useCasesHeading: 'Systems we build most often in Kochi',
    useCases: [
      { name: 'Hospitals and clinic groups', desc: 'Patient management, appointments, billing with GST where applicable, insurance and reporting across branches.' },
      { name: 'Trading and distribution', desc: 'Inventory, purchasing, multi-godown stock, sales orders and GST invoicing in one system, with Tally fed automatically.' },
      { name: 'Real estate developers', desc: 'Unit inventory, booking, payment schedule tracking, K-RERA reporting and CRM integration from lead to handover.' },
      { name: 'Education', desc: 'Admissions, student records, fees with online payment, parent apps and reporting for schools and colleges.' },
      { name: 'Logistics and fleet', desc: 'Dispatch, tracking, proof of delivery, driver apps and customer portals connected to billing.' },
      { name: 'Startups and SaaS', desc: 'Product builds for Infopark and KSUM-backed companies that need a senior team without hiring one.' },
    ],
    engagementsHeading: 'How we engage',
    engagements: [
      { name: 'Fixed-scope project', desc: 'Discovery produces a specification and a fixed price. Best when the problem is understood and the scope can be agreed before code is written.' },
      { name: 'Dedicated team', desc: 'A named team working on your roadmap month to month, with sprint planning and demos. Best for products that keep evolving.' },
      { name: 'Discovery first', desc: 'A paid two to three week engagement that produces the specification, architecture and estimate, whether or not we build it.' },
      { name: 'Support and evolution', desc: 'SLA-backed maintenance, monitoring and continuous improvement for systems we built or inherited.' },
    ],
    detail: [
      {
        heading: 'Building for GST and e-invoicing from day one',
        body: [
          'Every system that touches money in India sits inside the GST regime, and the rules are specific: tax invoice formats, HSN and SAC codes, place of supply logic that decides between CGST plus SGST and IGST, reverse charge in some cases, and returns that need the data organised by rate and counterparty. Businesses above the turnover threshold, currently ₹5 crore, must generate e-invoices through the Invoice Registration Portal, and goods movement above the value threshold needs an e-way bill.',
          'A system designed without those requirements will need them retrofitted, and retrofitting tax logic into a live database is slow, risky and expensive. We design the data model, the documents and the integration points for all of it from the first sprint, so the accountant gets GSTR-ready data without exports and manual reconciliation.',
        ],
        points: [
          { name: 'GST-compliant documents', desc: 'Tax invoices, bills of supply, credit and debit notes with the required fields and numbering.' },
          { name: 'Place of supply logic', desc: 'CGST, SGST and IGST decided correctly for intra-state, inter-state and export transactions.' },
          { name: 'E-invoice and e-way bill', desc: 'IRN generation and e-way bill data through a GSP integration where the business needs it.' },
          { name: 'Return-ready data', desc: 'GSTR-1 and GSTR-3B data organised by rate and counterparty, with Tally or Zoho Books fed automatically.' },
        ],
      },
      {
        heading: 'Data protection under the DPDP Act',
        body: [
          'The Digital Personal Data Protection Act 2023 sets out obligations on consent, purpose limitation, data principal rights and breach notification for any business processing personal data in India. Healthcare data carries additional expectations. A system built today that ignores it will need consent and rights handling added later, at exactly the moment a complaint or an audit arrives.',
          'We design consent capture, purpose limitation, access and deletion workflows into the product, host in Indian cloud regions where residency matters, and document the reasoning so a compliance review finds it rather than a gap.',
        ],
        points: [
          { name: 'Consent and purpose', desc: 'Consent capture and purpose limitation built into the product, not added as a banner.' },
          { name: 'Data principal rights', desc: 'Access, correction and erasure requests handled from the system within required timeframes.' },
          { name: 'Indian hosting', desc: 'AWS Mumbai and Hyderabad, Azure Central India, Google Cloud Mumbai, with backups in region.' },
          { name: 'Health data', desc: 'Additional controls for patient data where the business handles it.' },
        ],
      },
      {
        heading: 'Payments, delivery and the Indian customer',
        body: [
          'Indian commerce runs on UPI, on cash on delivery, and on a customer who expects a WhatsApp update at every step. UPI intent flows on mobile, gateway choice between Razorpay, PayU, Cashfree and PhonePe with different settlement and dispute behaviour, cash on delivery with its return rates, and courier integration through Shiprocket, Delhivery or direct APIs: each has edges that a team building for the first time discovers expensively.',
          'We have integrated all of these and know where the edges are. The order system reconciles cash on delivery properly, records payment method against margin so the business can see what COD returns actually cost, and pushes tracking to the customer over WhatsApp and SMS. Where ONDC opens a channel, we can connect to it.',
        ],
        points: [
          { name: 'Gateway integration', desc: 'Razorpay, PayU, Cashfree, PhonePe and Paytm with UPI, cards, net banking and EMI handled correctly.' },
          { name: 'Cash on delivery workflow', desc: 'COD orders, courier remittance, returns and margin reporting handled end to end.' },
          { name: 'Courier connections', desc: 'Shiprocket, Delhivery, DTDC, Blue Dart and India Post integrated with tracking to the customer.' },
          { name: 'Marketplace and ONDC', desc: 'Amazon, Flipkart and ONDC connections where the channel justifies it.' },
        ],
      },
      {
        heading: 'Replacing Tally-and-spreadsheets without stopping the business',
        body: [
          'Most Kochi engagements are not greenfield. There is Tally, which must stay. There is a legacy system that holds years of records. There is a set of spreadsheets everyone depends on and nobody trusts. The job is to replace what is failing while keeping the business running, and to migrate data without losing history.',
          'We plan migration as its own workstream: mapping, cleaning, trial migrations, reconciliation reports and a cutover plan with a way back. Legacy tools are retired in stages rather than switched off on a Thursday. The staff who run the old process are part of designing the new one, because they know where the exceptions are.',
        ],
        points: [
          { name: 'Data migration', desc: 'Mapping, cleaning, repeated trial migrations and reconciliation so the new system opens with correct balances.' },
          { name: 'Staged retirement', desc: 'Legacy modules replaced one at a time with both systems reconciled during the overlap.' },
          { name: 'Tally stays', desc: 'The accountant keeps working in Tally, fed from the operational system.' },
          { name: 'Training and adoption', desc: 'Role-based training in Malayalam and English, with the first month live supported closely.' },
        ],
      },
      {
        heading: 'AI features that earn their place',
        body: [
          'AI in a business system is worth building when it removes real manual work or makes a decision better, not because a pitch needed the word. The practical wins in Kerala businesses are usually document handling and forecasting: reading supplier invoices and purchase orders into structured records, forecasting demand across Onam and the monsoon, drafting replies to routine enquiries in Malayalam and English, and flagging the exceptions in a process so a person only looks at the cases that need one.',
          'We build these on top of the operational system, using your data, with humans reviewing output until accuracy justifies removing them. Where a language model is involved, we choose the model and the hosting with data protection in mind.',
        ],
        points: [
          { name: 'Document extraction', desc: 'Invoices, delivery notes and forms read into structured records with review queues.' },
          { name: 'Forecasting', desc: 'Demand, cash flow and staffing forecasts from your history and the Kerala seasonal calendar.' },
          { name: 'Assistants on your data', desc: 'Internal and customer-facing assistants that answer from your documents and systems, in both languages.' },
          { name: 'Workflow automation', desc: 'Approvals, notifications and hand-offs automated with exceptions routed to people.' },
        ],
      },
      {
        heading: 'How a build runs, week by week',
        body: [
          'Discovery takes the first two to three weeks: workshops with the people who run the process today, a map of the systems and data involved, a written specification, an architecture and a fixed estimate. Design follows, with clickable prototypes reviewed by the people who will use the screens, because the billing clerk and the store supervisor find the problems a project sponsor never sees.',
          'Build runs in two-week sprints with a working demo at the end of each. Data migration rehearsals start early. User acceptance testing runs on staging with real data. Go-live is planned with a cutover checklist, a rollback path and the team at your premises for the first days. Support starts the day the system goes live.',
        ],
        points: [
          { name: 'Weeks 1 to 3', desc: 'Discovery, specification, architecture and fixed estimate.' },
          { name: 'Weeks 3 to 5', desc: 'Prototypes reviewed with the people who will use the system.' },
          { name: 'Sprints', desc: 'Two-week cycles with a working demo at the end of each.' },
          { name: 'Go-live and support', desc: 'Rehearsed cutover, on-site presence and SLA support from day one.' },
        ],
      },
      {
        heading: 'Security, hosting and support',
        body: [
          'A business system is only as good as its uptime and its security. We deploy to AWS, Azure or Google Cloud in Indian regions, with infrastructure defined as code, automated backups tested by restoring them, monitoring that pages a person, and security practice that covers access control, secrets management, dependency updates and penetration testing where the risk justifies it.',
          'After launch, support runs on a service level agreement with named response times, a monthly maintenance allowance and a roadmap for improvements. Systems inherited from other vendors go through an assessment first so we know what we are taking on.',
        ],
        points: [
          { name: 'Infrastructure as code', desc: 'Environments reproducible from source, so recovery and scaling are procedures rather than emergencies.' },
          { name: 'Backups and recovery', desc: 'Automated backups with tested restores and a documented recovery time.' },
          { name: 'Security practice', desc: 'Role-based access, encrypted secrets, dependency scanning and periodic penetration testing.' },
          { name: 'SLA-backed support', desc: 'Named response and resolution times, monitoring and a monthly improvement allowance.' },
        ],
      },
      {
        heading: 'Choosing between Odoo, Zoho and a bespoke build',
        body: [
          'The most expensive mistake in business software is building what you could have configured, or configuring what you needed to build. Odoo with Indian localisation covers inventory, purchasing, sales, manufacturing, HR and accounting for most trading and manufacturing businesses. Zoho One covers CRM, books, projects and people for services firms at a price that is hard to argue with. A bespoke build is justified when the process is genuinely unusual, when the volume is large, or when the system is the product.',
          'We implement all three and recommend on the facts of your business. Often the answer is a platform for the standard modules and a bespoke component for the one process that makes the business different, integrated so the user sees one system.',
        ],
        points: [
          { name: 'Odoo', desc: 'Standard ERP modules with Indian GST localisation for trading and manufacturing.' },
          { name: 'Zoho', desc: 'CRM, books and operations for services firms at SME cost.' },
          { name: 'Bespoke', desc: 'Where the process is unusual, the volume is large or the software is the product.' },
          { name: 'Hybrid', desc: 'A platform for the standard, a bespoke module for the different, integrated as one.' },
        ],
      },
      {
        heading: 'Working with your existing IT and vendors',
        body: [
          'A Kochi business usually already has an accountant on Tally, a hardware vendor, a hosting provider and maybe a freelancer who built the website. We work with all of them rather than around them. Tally stays. The hardware vendor keeps the network. The system we build is documented so any of them can understand where it fits.',
          'Where an existing vendor built something that needs to be replaced, we assess it honestly, migrate from it carefully and say so plainly if it should be kept. The goal is a business with fewer moving parts, not a business with one more vendor.',
        ],
        points: [
          { name: 'Tally and the accountant', desc: 'Kept, fed automatically, never displaced.' },
          { name: 'Existing vendors', desc: 'Worked with, documented for, not worked around.' },
          { name: 'Honest assessment', desc: 'What to keep, what to replace, what to integrate, in writing.' },
          { name: 'Fewer moving parts', desc: 'The measure of success is a simpler business, not a bigger stack.' },
        ],
      },
      {
        heading: 'Why a Kochi engineering partner, not a Bengaluru one',
        body: [
          'Kochi has the engineering talent, through Infopark, the universities and the diaspora returning from the Gulf and abroad, at a cost base below Bengaluru or Pune, and with something the remote vendors lack: we can be at your premises in Kalamassery or Vyttila this afternoon. Discovery on the floor, migration rehearsals with your storekeeper, go-live with engineers beside the billing desk. That proximity is what makes business systems succeed.',
          'It also means the system is built for how Kerala businesses actually work: Malayalam-speaking staff, Onam peaks, cash on delivery, WhatsApp orders and an accountant who is not leaving Tally. Those are not edge cases to us. They are the brief.',
        ],
        points: [
          { name: 'On site when it matters', desc: 'Discovery, migration and go-live at your premises.' },
          { name: 'Kerala cost base', desc: 'Senior engineers without Bengaluru rates.' },
          { name: 'Built for how Kerala works', desc: 'Malayalam staff, Onam peaks, COD, WhatsApp, Tally.' },
          { name: 'Three-market bench', desc: 'Engineering capacity from the UAE and UK teams when a project needs it.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Do you build systems that comply with GST and e-invoicing?', answer: 'Yes. GST-compliant invoice formats, place of supply logic, HSN and SAC handling and return-ready data are part of the standard data model. E-invoice IRN generation and e-way bill integration are added for businesses above the thresholds, through a GSP.' },
      { question: 'Can you integrate with Tally?', answer: 'Yes. Most Kochi builds keep Tally Prime as the accounting system and feed it from the operational system, so the accountant works in the tool they know while the business runs on software that fits it.' },
      { question: 'Do you implement Odoo?', answer: 'Yes. Odoo with Indian localisation is our default recommendation when a business needs standard ERP modules and not a fully bespoke system. We implement, configure, customise and integrate it, and build bespoke modules where it does not fit.' },
      { question: 'Which payment gateways do you integrate?', answer: 'Razorpay, PayU, Cashfree, PhonePe and Paytm, with UPI, cards, net banking and EMI options, plus cash on delivery workflows with courier remittance reconciled. We recommend a gateway from your volumes and settlement needs.' },
      { question: 'Where will our data be hosted?', answer: 'In Indian cloud regions on AWS, Microsoft Azure or Google Cloud, with backups in region. The choice is made in discovery and documented, with the DPDP Act in mind.' },
      { question: 'Can you modernise a legacy system without stopping the business?', answer: 'Yes. We wrap legacy systems with APIs, migrate data in rehearsed stages with reconciliation at each step, and retire old modules one at a time. The business keeps running through the overlap and there is always a way back at cutover.' },
      { question: 'Who owns the code?', answer: 'You do. Source code, infrastructure, documentation and credentials are handed over in your name, and the system is built so another competent team could run it. We would rather keep clients by being good than by being unavoidable.' },
      { question: 'Do you work with startups in Infopark or through KSUM?', answer: 'Yes. We build products for early-stage companies that need a senior engineering team without hiring one, on a dedicated team or fixed-scope basis, with the architecture documented so an in-house team can take over as the company grows.' },
      { question: 'Should we use Odoo, Zoho or build our own system?', answer: 'Odoo with Indian localisation for trading and manufacturing businesses that need standard ERP modules. Zoho for services firms that need CRM, books and operations at SME cost. A bespoke build where the process is genuinely unusual, the volume is large or the software is the product. We implement all three and recommend on your facts, often a platform plus one bespoke module.' },
      { question: 'How much does custom software development cost in Kochi?', answer: 'Focused applications and MVPs run from ₹6,00,000. ERP and CRM implementations sit between ₹3,00,000 and ₹35,00,000 depending on modules, migration and integrations. Enterprise platforms run from ₹35,00,000. Every project is scoped from a paid discovery so the estimate reflects your requirements rather than a package.' },
      { question: 'Do you sign NDAs and work with our existing IT team?', answer: 'Yes to both. NDAs are signed before discovery, and we work alongside in-house IT, the accountant on Tally, hardware vendors and existing developers, documenting the system so any of them can understand where it fits.' },
      { question: 'How quickly can you start?', answer: 'Discovery can usually begin within two weeks of agreement, and the first working release is typically live within eight to twelve weeks of discovery ending.' },
    ],
  },

  'web-design-company-in-kochi': {
    capabilitiesHeading: 'What every Kochi website includes',
    capabilities: [
      { name: 'Mobile-first performance', desc: 'Designed and tested on mid-range Android phones over Jio and Airtel, because that is where the visit happens.' },
      { name: 'Search-ready structure', desc: 'Clean URLs, structured data, sitemaps, metadata and prerendered content so the site can rank from launch.' },
      { name: 'WhatsApp and call paths', desc: 'Click-to-WhatsApp and click-to-call built in and tracked, since that is how Kochi customers make contact.' },
      { name: 'Measurement installed', desc: 'GA4, Tag Manager and conversion events configured at launch, not when the first campaign runs.' },
      { name: 'Hosting and security', desc: 'Hosting in Indian regions, SSL, backups, monitoring and updates handled.' },
      { name: 'Privacy handling', desc: 'Cookie and privacy handling aligned with the DPDP Act.' },
    ],
    specsHeading: 'Typical projects, timelines and investment',
    specsColumns: ['Project', 'Timeline', 'Indicative investment'],
    specs: [
      ['Business website, 5 to 10 pages', '3 to 5 weeks', '₹1,20,000 to ₹3,00,000'],
      ['Bilingual corporate site', '5 to 8 weeks', '₹2,50,000 to ₹6,00,000'],
      ['E-commerce store', '8 to 14 weeks', '₹4,00,000 to ₹15,00,000'],
      ['Campaign landing pages', '1 to 2 weeks', '₹35,000 to ₹1,00,000'],
      ['Redesign and migration', '5 to 10 weeks', 'Scoped from the existing site'],
      ['Hosting, care and updates', 'Monthly', 'From ₹8,000 per month'],
    ],
    useCasesHeading: 'Who we design for in Kochi',
    useCases: [
      { name: 'Hospitals and clinics', desc: 'Department, doctor and treatment pages with booking, within NMC advertising limits.' },
      { name: 'Real estate', desc: 'Project sites with unit search, K-RERA details and enquiry routing to the sales team.' },
      { name: 'Professional services', desc: 'Law, CA, architecture and consultancy firms whose site must establish credibility in seconds.' },
      { name: 'Hospitality and tourism', desc: 'Resorts and homestays in Fort Kochi and the backwaters that need direct bookings, not just OTA listings.' },
      { name: 'Retail and D2C', desc: 'Jewellery, fashion and consumer brands selling online with UPI, COD and courier integration.' },
    ],
    engagementsHeading: 'How a project runs',
    engagements: [
      { name: 'Fixed-price project', desc: 'Discovery, design, build and launch on an agreed scope and price, with defined revision rounds.' },
      { name: 'Build with care plan', desc: 'The site delivered, then improved monthly from conversion and search data.' },
      { name: 'Landing page programme', desc: 'A cadence of campaign pages built and tested for a marketing team.' },
    ],
    detail: [
      {
        heading: 'Design for a market that checks the website first',
        body: [
          'A Kochi prospect who has been referred on WhatsApp will look at the website before replying. A site that reads as a template from a few years ago, with stock photographs of people who are clearly not in Kerala, changes that conversation. Design is the first credibility check, not decoration.',
          'Our process starts with the audience and the decision the site has to support, then works through structure, content, visual system and the details that signal quality. Stock photography is replaced with real photography and video from the Infynix Media team wherever the budget allows, because Kochi buyers recognise stock instantly.',
        ],
        points: [
          { name: 'Content before layout', desc: 'Pages designed around what needs to be said and what the visitor needs to do.' },
          { name: 'A visual system', desc: 'Typography, colour, spacing and components defined once so the site stays consistent.' },
          { name: 'Real imagery', desc: 'Photography and video of your people, premises and work, shot in Kochi.' },
          { name: 'Motion with restraint', desc: 'Animation used where it clarifies, never where it slows the page.' },
        ],
      },
      {
        heading: 'Built to rank and to load on Indian mobile',
        body: [
          'A beautiful site that Google cannot read, or that takes six seconds to load on a phone on a moving bus, is a beautiful liability. We build on modern frameworks with prerendered content so search engines and AI assistants receive the full page, images optimised, code split and hosting chosen for latency from Kerala.',
          'Search structure is designed in: URL architecture, metadata, structured data, sitemaps and internal linking, so the site is ready for the SEO programme on launch day rather than needing a rebuild in month six.',
        ],
        points: [
          { name: 'Prerendered pages', desc: 'Full HTML delivered to crawlers and assistants, not an empty shell.' },
          { name: 'Core Web Vitals', desc: 'Load, interactivity and stability tuned on the templates that carry traffic.' },
          { name: 'Structured data', desc: 'Organization, LocalBusiness, Service, FAQ and Product schema applied where it is true.' },
          { name: 'Search architecture', desc: 'URLs, navigation and internal links planned with the SEO team before design begins.' },
        ],
      },
      {
        heading: 'Malayalam and English done properly',
        body: [
          'Many Kochi businesses need Malayalam and English, and most bilingual sites are an English site with a translated copy bolted on. Malayalam typography needs its own sizes and line heights to be readable on a cheap phone, and translated content needs a workflow or the Malayalam version falls out of date within months.',
          'We design both languages together, choose typefaces that render Malayalam properly, mark up the language versions correctly for search, and set up a content workflow so an update in one language prompts the other.',
        ],
        points: [
          { name: 'Malayalam typography', desc: 'Typefaces, sizes and spacing chosen for Malayalam legibility on mobile.' },
          { name: 'Native content', desc: 'Malayalam copy written by native speakers, not translated.' },
          { name: 'Language markup', desc: 'Hreflang and canonical tags so search engines serve the right version.' },
          { name: 'Content workflow', desc: 'A CMS process that keeps both languages current.' },
        ],
      },
      {
        heading: 'What a redesign should preserve and what it should fix',
        body: [
          'Most Kochi businesses come to us with a site that has some rankings, some content and a lot of problems. A redesign that throws all of it away loses the search equity that took years to build. A redesign that keeps everything preserves the problems. The job is to keep what ranks, fix what is broken, consolidate what is thin and redirect what moves.',
          'We audit the existing site before designing, map every URL to its new home, migrate content deliberately and monitor Search Console through launch so nothing falls through.',
        ],
        points: [
          { name: 'Pre-design audit', desc: 'What ranks, what converts, what is broken, before anything is drawn.' },
          { name: 'Redirect map', desc: 'Every old URL mapped to its new home.' },
          { name: 'Consolidation', desc: 'Thin pages merged so the new site is stronger, not just newer.' },
          { name: 'Launch monitoring', desc: 'Search Console watched through and after go-live.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Will the site rank on Google?', answer: 'It will be built to. Prerendered content, clean structure, structured data, performance and metadata are part of every build. Ranking for competitive terms then depends on the content and authority programme that follows, which our SEO team can run.' },
      { question: 'Do you provide hosting and maintenance?', answer: 'Yes. Care plans from ₹8,000 per month cover hosting in Indian regions, SSL, backups, monitoring, updates and a monthly allowance for content changes.' },
      { question: 'Can you redesign our site without losing rankings?', answer: 'Yes. Redesigns are planned with a redirect map, content migration and tracking continuity so search equity is preserved, and we monitor Search Console through and after launch.' },
      { question: 'Do you take photographs and video for the site?', answer: 'Yes. Infynix Media shoots photography and video in Kochi for the sites we build, which is the single biggest visual upgrade over a template with stock imagery.' },
      { question: 'How much does a website cost in Kochi?', answer: 'A focused business website runs from ₹1,20,000 to ₹3,00,000. Bilingual corporate sites sit between ₹2,50,000 and ₹6,00,000. E-commerce stores run ₹4,00,000 to ₹15,00,000 depending on catalogue, integrations and design. Every project is quoted as a fixed price after discovery.' },
      { question: 'How long does it take to build a website?', answer: 'A business site takes 3 to 5 weeks. Bilingual corporate sites take 5 to 8 weeks. E-commerce takes 8 to 14 weeks. Content readiness on the client side is usually the biggest variable.' },
    ],
  },

  'mobile-app-development-company-in-kochi': {
    capabilitiesHeading: 'What a Kochi app build includes',
    capabilities: [
      { name: 'Android first, iOS alongside', desc: 'Kerala is an Android market. We design for mid-range Android on patchy networks and ship iOS from the same codebase where the audience needs it.' },
      { name: 'Offline and low-bandwidth behaviour', desc: 'Apps that work in a lift, a godown or a Wayanad estate and sync when the network returns.' },
      { name: 'UPI and Indian payments', desc: 'Razorpay, PhonePe, Cashfree and UPI intent flows, with subscriptions and mandates where the model needs them.' },
      { name: 'Malayalam interfaces', desc: 'Localised screens with Malayalam typography that renders properly, and a switch that remembers the choice.' },
      { name: 'WhatsApp and push', desc: 'Notifications through the channel the user actually reads, with consent handled under the DPDP Act.' },
      { name: 'Store compliance', desc: 'Google Play and App Store policy, privacy labels and review handled as part of delivery.' },
      { name: 'Analytics from day one', desc: 'Events, funnels and crash reporting configured before launch so the first release teaches you something.' },
      { name: 'Full handover', desc: 'Source, store accounts, signing keys and documentation in your name.' },
    ],
    specsHeading: 'Typical scope, timeline and investment',
    specsColumns: ['Engagement', 'Timeline', 'Indicative investment'],
    specs: [
      ['Discovery and prototype', '2 to 3 weeks', '₹1,50,000 to ₹3,50,000'],
      ['MVP app, Android and iOS', '8 to 12 weeks', '₹6,00,000 to ₹15,00,000'],
      ['Customer app with backend', '12 to 20 weeks', '₹12,00,000 to ₹30,00,000'],
      ['Field or workforce app', '6 to 12 weeks', '₹4,00,000 to ₹12,00,000'],
      ['Ongoing product team', 'Monthly', 'Scoped by team size'],
      ['Support and store maintenance', 'Monthly', 'From ₹30,000 per month'],
    ],
    useCasesHeading: 'Apps we build most often in Kochi',
    useCases: [
      { name: 'Customer apps for retail and services', desc: 'Loyalty, ordering, booking and account apps for chains and brands with a Kerala customer base.' },
      { name: 'Healthcare', desc: 'Appointment, report and follow-up apps for hospital groups, with health data handled carefully.' },
      { name: 'Field and workforce', desc: 'Delivery, inspection, sales and attendance apps that work offline for teams across the state.' },
      { name: 'Education', desc: 'Parent and student apps for schools and colleges, with fees, attendance and communication in one place.' },
      { name: 'Startups', desc: 'Product builds for Infopark and KSUM-backed companies that need a senior mobile team without hiring one.' },
    ],
    engagementsHeading: 'How we engage',
    engagements: [
      { name: 'Fixed-scope build', desc: 'Discovery produces a specification and a fixed price for a defined release.' },
      { name: 'Product team', desc: 'A named team shipping releases on your roadmap month to month.' },
      { name: 'Support and evolution', desc: 'Store maintenance, OS updates, monitoring and improvements for apps we built or inherited.' },
    ],
    detail: [
      {
        heading: 'Designing for the phone people actually own',
        body: [
          'The Kerala app user is on a mid-range Android phone with limited storage, on a network that drops in lifts and estates, and with dozens of apps competing for the same home screen. An app designed on the latest iPhone in an office with fibre is designed for a user who does not exist here.',
          'We design and test on the devices and networks the audience uses: small download size, fast cold start, graceful behaviour offline, and screens that work in Malayalam without breaking the layout. That discipline is the difference between an app that gets used and one that gets uninstalled to make room for something else.',
        ],
        points: [
          { name: 'Device and network testing', desc: 'Real mid-range Android devices on real Kerala networks, not just emulators.' },
          { name: 'Small and fast', desc: 'Download size and cold start treated as features.' },
          { name: 'Offline first', desc: 'Local storage and sync so the app works when the network does not.' },
          { name: 'Malayalam layouts', desc: 'Screens tested with Malayalam strings, which run longer than English.' },
        ],
      },
      {
        heading: 'Native or cross-platform, decided on the facts',
        body: [
          'Most Kochi apps are best built cross-platform in React Native or Flutter: one codebase, Android and iOS, faster releases and lower cost. Some are not: apps that depend on hardware, heavy media processing or platform-specific features may justify native. We decide in discovery on the requirements rather than on a preference.',
          'Either way the backend is built on the same engineering practice as our software projects, with APIs documented, hosting in Indian regions and integration with the systems the business already runs.',
        ],
        points: [
          { name: 'Cross-platform by default', desc: 'React Native or Flutter for the majority of business and consumer apps.' },
          { name: 'Native where justified', desc: 'Kotlin and Swift where hardware or performance demands it.' },
          { name: 'Backend and APIs', desc: 'Node.js or Python services documented and hosted in Indian regions.' },
          { name: 'Integration', desc: 'Connected to your CRM, ERP, payment and messaging systems.' },
        ],
      },
      {
        heading: 'Launch, stores and the months after',
        body: [
          'Shipping to the stores is a process with its own failure modes: policy rejections, privacy label mistakes, signing key mishaps and reviews that stall for weeks. We handle store setup, compliance and submission as part of delivery, and we keep the accounts and keys in your name.',
          'After launch, analytics and crash reporting tell us what to fix first, and a maintenance plan covers OS updates, store policy changes and the improvements that the first real users reveal.',
        ],
        points: [
          { name: 'Store setup and compliance', desc: 'Play and App Store accounts, policies, privacy labels and submission handled.' },
          { name: 'Analytics and crash reporting', desc: 'Events, funnels and stability monitored from the first release.' },
          { name: 'OS and policy updates', desc: 'Kept current as Android, iOS and store rules change.' },
          { name: 'Improvement cadence', desc: 'Releases planned from real usage data.' },
        ],
      },
      {
        heading: 'The backend nobody sees',
        body: [
          'An app is the visible tenth of a system. Behind it sit APIs, a database, authentication, notifications, payment reconciliation, an admin panel and the integrations with whatever the business already runs. Apps that fail after launch usually fail there: a backend that cannot handle Onam traffic, an admin panel nobody built, or an integration with billing that was left for later.',
          'We build the backend with the same engineering practice as our business systems: documented APIs, Indian cloud hosting, monitoring, backups and an admin panel the operations team can actually use.',
        ],
        points: [
          { name: 'Documented APIs', desc: 'So the app, the admin panel and future integrations share one contract.' },
          { name: 'Admin panel', desc: 'The operations screens that make the app runnable day to day.' },
          { name: 'Scalable hosting', desc: 'Sized for peak, monitored, backed up, in Indian regions.' },
          { name: 'Business integration', desc: 'Connected to CRM, billing, inventory and WhatsApp.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Should we build for Android only?', answer: 'Often yes, at least first. Kerala is predominantly Android, and a cross-platform codebase lets you add iOS later at low cost when the audience justifies it. We look at your customer data before recommending.' },
      { question: 'Can the app work offline?', answer: 'Yes. Offline-first design with local storage and sync is standard for field, delivery and workforce apps, and available for customer apps where it matters.' },
      { question: 'Do you handle Google Play and App Store submission?', answer: 'Yes. Store accounts, policy compliance, privacy labels, signing and submission are part of delivery, with accounts and keys in your name.' },
      { question: 'Who owns the app?', answer: 'You do. Source code, store accounts, signing keys, backend and documentation are handed over in your name.' },
      { question: 'How much does app development cost in Kochi?', answer: 'An MVP for Android and iOS runs ₹6,00,000 to ₹15,00,000. A customer app with a full backend runs ₹12,00,000 to ₹30,00,000. Field and workforce apps run ₹4,00,000 to ₹12,00,000. Every project is scoped from a paid discovery and quoted as a fixed price or a monthly team.' },
      { question: 'How long does it take to build an app?', answer: 'An MVP takes 8 to 12 weeks. A customer app with backend takes 12 to 20 weeks. Store review adds a week or two at the end, which we plan for.' },
    ],
  },

  'it-company-in-kochi': {
    capabilitiesHeading: 'What we run for Kochi businesses',
    capabilities: [
      { name: 'Business systems', desc: 'ERP, CRM, billing, inventory and HR systems implemented, integrated and supported, with GST and e-invoicing handled.' },
      { name: 'Custom software', desc: 'Web and mobile applications built for the way your business actually works.' },
      { name: 'Integration', desc: 'Tally, payment gateways, WhatsApp, couriers, marketplaces and government portals connected so data is entered once.' },
      { name: 'Cloud and hosting', desc: 'AWS, Azure and Google Cloud in Indian regions, with backups, monitoring and cost control.' },
      { name: 'Websites and e-commerce', desc: 'Sites and stores built to rank, load fast and convert, with UPI and COD handled.' },
      { name: 'Data and reporting', desc: 'Dashboards that pull from every system so the owner sees one set of numbers.' },
      { name: 'AI and automation', desc: 'Document extraction, forecasting and assistants where they remove real work.' },
      { name: 'Managed support', desc: 'SLA-backed support for the systems we build and the ones we take over.' },
    ],
    specsHeading: 'Typical engagements and investment',
    specsColumns: ['Engagement', 'Timeline', 'Indicative investment'],
    specs: [
      ['Systems audit and roadmap', '2 to 3 weeks', '₹1,00,000 to ₹3,00,000'],
      ['ERP or CRM implementation', '6 to 20 weeks', '₹3,00,000 to ₹35,00,000'],
      ['Custom application', '8 to 16 weeks', '₹6,00,000 to ₹25,00,000'],
      ['Integration project', '3 to 8 weeks', '₹1,50,000 to ₹8,00,000'],
      ['Website or e-commerce', '3 to 14 weeks', '₹1,20,000 to ₹15,00,000'],
      ['Managed support', 'Monthly', 'From ₹40,000 per month'],
    ],
    useCasesHeading: 'Who we work with in Kochi',
    useCases: [
      { name: 'Trading and distribution', desc: 'Inventory, billing and GST in one system with Tally fed automatically, for businesses from Broadway to Kalamassery.' },
      { name: 'Hospitals and clinics', desc: 'Patient, billing and reporting systems across branches with health data handled carefully.' },
      { name: 'Manufacturing', desc: 'Production, inventory and quality systems for units in Kalamassery, Aroor and the industrial belt.' },
      { name: 'Education', desc: 'Admissions, student records, fees and parent communication for schools and colleges.' },
      { name: 'Real estate and construction', desc: 'Project, sales, K-RERA reporting and site management systems.' },
      { name: 'Growing companies', desc: 'Businesses that have outgrown Tally-and-spreadsheets and need one system before the next stage.' },
    ],
    engagementsHeading: 'How we engage',
    engagements: [
      { name: 'Audit and roadmap', desc: 'A paid review of your current systems with a written plan of what to replace, integrate and leave alone.' },
      { name: 'Fixed-scope project', desc: 'A defined system delivered at a fixed price after discovery.' },
      { name: 'Dedicated team', desc: 'A named team working through your roadmap month to month.' },
      { name: 'Managed support', desc: 'SLA-backed support and improvement for everything we run.' },
    ],
    detail: [
      {
        heading: 'What an IT company should actually do for a Kochi business',
        body: [
          'Most Kochi businesses do not need more software. They need the software they have to talk to each other, the spreadsheets that hold the business together to become a system, and someone accountable when something breaks at nine on a Saturday. The category "IT company" covers everything from selling laptops to building banking platforms, so it is worth being precise about what we do.',
          'We build and integrate business systems, build custom software when nothing off the shelf fits, connect the tools a business already runs, host and support it all, and report on it in one place. We do not sell hardware, we do not resell licences we cannot support, and we do not take on work we cannot do well.',
        ],
        points: [
          { name: 'Systems, not boxes', desc: 'Software, integration, hosting and support. No hardware resale.' },
          { name: 'One accountable partner', desc: 'A single team responsible for the systems the business runs on.' },
          { name: 'Honest scoping', desc: 'We say what to replace, what to integrate and what to leave alone.' },
          { name: 'Local presence', desc: 'An office in Edappally and engineers who come to your premises.' },
        ],
      },
      {
        heading: 'GST, e-invoicing and the compliance layer',
        body: [
          'Every system that touches money in India sits inside GST: invoice formats, HSN and SAC codes, place of supply logic, and returns that need data organised by rate and counterparty. Businesses above ₹5 crore turnover generate e-invoices through the Invoice Registration Portal, and goods movement above the threshold needs e-way bills. TDS, PF and ESI add their own requirements for payroll.',
          'We design for all of it from the first sprint and integrate with Tally so the accountant gets return-ready data without exports. Where the business is approaching a threshold, the system is built ready for it so the change is a setting rather than a project.',
        ],
        points: [
          { name: 'GST-compliant documents', desc: 'Invoices, credit notes and bills of supply with the required fields.' },
          { name: 'E-invoice and e-way bill', desc: 'IRN generation and e-way bill data through a GSP integration.' },
          { name: 'Tally integration', desc: 'Return-ready data pushed to Tally Prime or Zoho Books automatically.' },
          { name: 'Payroll compliance', desc: 'TDS, PF and ESI handled where the system covers HR.' },
        ],
      },
      {
        heading: 'Getting off Tally-and-spreadsheets without a crisis',
        body: [
          'The typical Kochi business we meet runs Tally for accounts, a spreadsheet for stock, another for customers, WhatsApp for orders and a person who reconciles it all. It works until that person is on leave. The move to one system has to happen without stopping the business, without losing history and without forcing the accountant off Tally.',
          'We plan migration as its own workstream with rehearsals and reconciliation, retire the spreadsheets one at a time, keep Tally as the ledger, and train each role on the floor. The first month live is supported daily.',
        ],
        points: [
          { name: 'Rehearsed migration', desc: 'Trial migrations and reconciliation before cutover.' },
          { name: 'Staged retirement', desc: 'Spreadsheets and old tools retired one at a time.' },
          { name: 'Tally stays', desc: 'The ledger remains in the tool the accountant trusts.' },
          { name: 'Role-based training', desc: 'Training on the floor in Malayalam and English, with daily support in month one.' },
        ],
      },
      {
        heading: 'Cloud, hosting and cost control',
        body: [
          'Hosting is where Kochi businesses either overspend on infrastructure they do not need or underspend on backups they will need. We deploy to AWS, Azure or Google Cloud in Indian regions, size the infrastructure to the actual load, define it as code, back it up and test the restores, and monitor it so a person is paged before a customer notices.',
          'Cost is reviewed monthly. A system that was sized for launch is resized for reality, and the bill is part of the reporting.',
        ],
        points: [
          { name: 'Indian regions', desc: 'AWS Mumbai and Hyderabad, Azure Central India, Google Cloud Mumbai.' },
          { name: 'Right-sized', desc: 'Infrastructure matched to real load and reviewed monthly.' },
          { name: 'Tested backups', desc: 'Automated backups with restores actually tested.' },
          { name: 'Monitoring', desc: 'Alerts that reach a person before a customer does.' },
        ],
      },
      {
        heading: 'Data protection and the DPDP Act',
        body: [
          'The Digital Personal Data Protection Act 2023 applies to any business processing personal data in India, with obligations on consent, purpose, data principal rights and breach notification. For most Kochi businesses that means customer, patient, student and employee data held in systems that were never designed with consent or deletion in mind.',
          'We design new systems to the Act and assess existing ones against it, adding consent capture, access and erasure workflows and retention rules where they are missing, and hosting in Indian regions.',
        ],
        points: [
          { name: 'Consent and purpose', desc: 'Captured and limited in the product itself.' },
          { name: 'Rights workflows', desc: 'Access, correction and erasure handled from the system.' },
          { name: 'Retention', desc: 'Data kept as long as needed and no longer.' },
          { name: 'Assessment of existing systems', desc: 'A gap review of what you already run.' },
        ],
      },
      {
        heading: 'Support that answers',
        body: [
          'Support is where most IT relationships fail: a ticket that sits, a vendor who has moved on, a system nobody else understands. Our managed support runs on a service level agreement with named response and resolution times, monitoring, backups, a monthly allowance for improvements and documentation good enough that another team could take over.',
          'We take over systems built by other vendors after an assessment, and we are honest about what we find.',
        ],
        points: [
          { name: 'Named SLAs', desc: 'Response and resolution times in writing.' },
          { name: 'Monthly improvements', desc: 'An allowance for the small changes that keep a system fit.' },
          { name: 'Documentation', desc: 'Good enough for another team to run it.' },
          { name: 'Takeovers', desc: 'Inherited systems assessed before we commit.' },
        ],
      },
      {
        heading: 'A systems audit: what it covers and what you get',
        body: [
          'Most engagements start with a paid two to three week audit. We map every system the business runs on, including the spreadsheets and the WhatsApp groups, interview the people who use them, trace how an order, an invoice and a customer move through the business, and find where information is re-entered, lost or reconciled by hand. We review hosting, backups, security and the compliance gaps against GST and the DPDP Act.',
          'The output is a written roadmap: what to replace, what to integrate, what to leave alone, in what order, at what cost. It is yours whether or not we do the work. Many businesses find that the first three items on the list pay for the audit several times over.',
        ],
        points: [
          { name: 'System map', desc: 'Every tool, spreadsheet and manual step, documented.' },
          { name: 'Process tracing', desc: 'How orders, invoices and customers actually move through the business.' },
          { name: 'Risk review', desc: 'Hosting, backups, security and compliance gaps.' },
          { name: 'Costed roadmap', desc: 'What to do, in what order, at what cost, yours to keep.' },
        ],
      },
      {
        heading: 'Websites and e-commerce as part of the system',
        body: [
          'For most Kochi businesses the website is an island: built by someone who has moved on, disconnected from the CRM, the inventory and the billing. An enquiry on the site is retyped into a spreadsheet. An order online is retyped into Tally. We build and rebuild websites and stores as part of the business system, so an enquiry lands in the CRM with its source, an order updates stock and produces a GST invoice, and the marketing team can see what the site actually produced.',
          'The sites themselves are built to rank and to load fast on Indian mobile, with UPI and cash on delivery for stores, and they are supported under the same agreement as everything else.',
        ],
        points: [
          { name: 'Connected enquiries', desc: 'Site and WhatsApp enquiries land in the CRM with source attached.' },
          { name: 'Connected orders', desc: 'Online orders update inventory and produce GST invoices.' },
          { name: 'Built to rank', desc: 'Prerendered, fast and structured for search.' },
          { name: 'One support agreement', desc: 'Website, systems and hosting under one SLA.' },
        ],
      },
      {
        heading: 'AI and automation where it removes real work',
        body: [
          'AI earns its place in a Kochi business when it removes manual work or improves a decision, not because a vendor needed the word in a proposal. The practical wins are usually the boring ones: reading supplier invoices and purchase orders into the system, forecasting stock for Onam and the monsoon, drafting replies to routine enquiries in Malayalam and English, and flagging the exceptions in a process so a person only looks at what needs a person.',
          'We build these on top of the operational system, on your data, with a human reviewing output until accuracy justifies removing them. Where a language model is involved, the model and the hosting are chosen with data protection in mind.',
        ],
        points: [
          { name: 'Document extraction', desc: 'Invoices and forms read into structured records with review queues.' },
          { name: 'Forecasting', desc: 'Stock, cash and staffing forecasts from your history and the Kerala calendar.' },
          { name: 'Enquiry assistants', desc: 'Routine questions answered from your documents in both languages.' },
          { name: 'Exception handling', desc: 'Approvals and hand-offs automated, exceptions routed to people.' },
        ],
      },
      {
        heading: 'How an engagement runs',
        body: [
          'The audit comes first and produces the roadmap. The first project is usually the one that removes the most manual work for the least disruption, delivered in two-week sprints with a demo at the end of each so progress is something you can click. Migration is rehearsed, go-live is planned with a rollback, and our engineers are at your premises for the first days live.',
          'After that, managed support covers everything we run, and the roadmap is reviewed quarterly against what the business needs next. The relationship is meant to last years, which is why the documentation is written for someone who is not us.',
        ],
        points: [
          { name: 'Audit and roadmap', desc: 'Two to three weeks, written plan, yours to keep.' },
          { name: 'First project', desc: 'The highest-return, lowest-disruption item, in sprints.' },
          { name: 'Go-live', desc: 'Rehearsed, with rollback and engineers on site.' },
          { name: 'Managed support', desc: 'SLA-backed, reviewed quarterly against the roadmap.' },
        ],
      },
      {
        heading: 'Security basics most Kochi businesses are missing',
        body: [
          'The security failures we see in Kochi businesses are rarely sophisticated. Shared passwords on a sticky note, a Tally backup on a single laptop, an admin account belonging to an employee who left two years ago, a website on an unpatched WordPress install, and no idea who has access to the customer list. None of these need an expensive security programme. They need someone accountable for the basics.',
          'Our managed support covers those basics: access reviews, password management, tested backups, patching, monitoring and an incident plan, with the gaps found in the audit closed in order of risk.',
        ],
        points: [
          { name: 'Access reviews', desc: 'Who has access to what, reviewed and cleaned up quarterly.' },
          { name: 'Tested backups', desc: 'Backups that have actually been restored, off the laptop.' },
          { name: 'Patching', desc: 'Websites, servers and software kept current.' },
          { name: 'Incident plan', desc: 'What happens, and who does it, when something goes wrong.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'What does an IT company in Kochi actually do for a small business?', answer: 'For most, it means replacing Tally-and-spreadsheets with one system for billing, stock and customers, connecting it to Tally, WhatsApp and payments, hosting it properly and supporting it. We start with a paid audit that says what to replace, what to integrate and what to leave alone.' },
      { question: 'Do you sell or support hardware?', answer: 'No. We build, integrate, host and support software. For hardware and networking we can recommend local partners we have worked with.' },
      { question: 'Can you take over a system built by another vendor?', answer: 'Yes, after an assessment. We review the code, infrastructure and documentation, tell you honestly what we find, and take it on under a support agreement if it is workable.' },
      { question: 'Do you handle GST, e-invoicing and Tally?', answer: 'Yes. GST-compliant documents, e-invoice and e-way bill integration and Tally Prime integration are standard in the business systems we build.' },
      { question: 'Where is your office?', answer: 'Third floor, Oberon Mall, Padivattom, Edappally, Kochi 682024. Engineers work on site at client premises across Ernakulam for discovery, migration and go-live.' },
      { question: 'What does managed support cost?', answer: 'From ₹40,000 per month depending on the systems covered, with named response times, monitoring, backups and a monthly improvement allowance.' },
      { question: 'Do you work with businesses outside Kochi?', answer: 'Yes. We support businesses across Kerala and India, with on-site work where it is needed and remote delivery between visits.' },
      { question: 'What does a systems audit cost and what do we get?', answer: '₹1,00,000 to ₹3,00,000 depending on the size of the business, over two to three weeks. You get a system map, a trace of how orders, invoices and customers move, a risk review of hosting, backups, security and compliance, and a costed roadmap of what to replace, integrate and leave alone. It is yours whether or not we do the work.' },
      { question: 'Can you build our website as part of the same engagement?', answer: 'Yes. Websites and stores are built as part of the business system, so enquiries land in the CRM with their source and orders update stock and produce GST invoices. They are supported under the same agreement as everything else.' },
      { question: 'Do you use AI in the systems you build?', answer: 'Where it removes real work: document extraction, forecasting, enquiry assistants in Malayalam and English, and exception handling. It is built on your data with human review until accuracy justifies removing it, and never added for the sake of a proposal.' },
      { question: 'How quickly can you start?', answer: 'An audit can usually begin within two weeks of agreement. Project timelines depend on the roadmap, but the first improvement is typically live within eight to twelve weeks of the audit.' },
    ],
  },

  'social-media-marketing-agency-in-kochi': {
    capabilitiesHeading: 'What the engagement includes',
    capabilities: [
      { name: 'Bilingual content calendar', desc: 'Malayalam and English planned together, with the Malayalam written first for consumer brands because it usually outperforms.' },
      { name: 'Reels and short-form production', desc: 'Monthly shoot days in Kochi with the Infynix Media team, producing 15 to 25 finished clips per day.' },
      { name: 'Paid social run as performance', desc: 'Meta, Instagram and YouTube campaigns with the Conversions API and tracked WhatsApp enquiries, not boosted posts.' },
      { name: 'Community management', desc: 'Comments and DMs answered fast enough to convert, in the language the customer wrote in.' },
      { name: 'Creator and influencer work', desc: 'Kerala creators matched to the brand on fit and audience, with deliverables and tracking agreed in writing.' },
      { name: 'Reporting on enquiries', desc: 'Reach and engagement as leading indicators, enquiries and revenue as the measure.' },
    ],
    specsHeading: 'Formats, cadence and what to expect',
    specsColumns: ['Format', 'Typical cadence', 'What we measure'],
    specs: [
      ['Instagram Reels and YouTube Shorts', '12 to 20 per month', 'Reach, saves, profile visits, enquiries'],
      ['Static and carousel posts', '8 to 12 per month', 'Engagement, saves, link clicks'],
      ['Stories', 'Daily', 'Replies, sticker taps, WhatsApp clicks'],
      ['Paid social campaigns', 'Always on plus seasonal', 'Cost per enquiry, revenue'],
      ['Creator collaborations', '1 to 4 per month', 'Reach, code redemptions, enquiries'],
      ['Community management', 'Same day, 7 days', 'Response time, conversion of DMs'],
    ],
    useCasesHeading: 'Who this is for',
    useCases: [
      { name: 'Jewellery and fashion', desc: 'Brands on MG Road and in Lulu where Instagram is the showroom window and Onam and wedding season drive the year.' },
      { name: 'Restaurants and cafes', desc: 'Venues from Panampilly Nagar to Fort Kochi where Reels and Maps decide who walks in.' },
      { name: 'Clinics and wellness', desc: 'Aesthetic, dental and wellness practices building trust through content within NMC limits.' },
      { name: 'Real estate', desc: 'Developers reaching Kochi families and the Gulf diaspora with project content and site-visit campaigns.' },
      { name: 'Education', desc: 'Schools and institutes whose admissions depend on parents who research on Instagram and YouTube.' },
    ],
    engagementsHeading: 'How we work together',
    engagements: [
      { name: 'Social retainer', desc: 'Content, production, paid and community management monthly, with a shoot day built in.' },
      { name: 'Production only', desc: 'Shoot days and editing for an in-house team that runs its own channels.' },
      { name: 'Paid social management', desc: 'Campaigns run as performance marketing inside a wider marketing team.' },
    ],
    detail: [
      {
        heading: 'Malayalam first, because it works',
        body: [
          'For most Kochi consumer brands the Malayalam version of a Reel outperforms the English one, often by a wide margin. Not because the audience cannot read English, but because content in their own language reads as theirs. Humour lands, references land, and the comments fill up. English-first content translated into Malayalam does not get the same result.',
          'We write Malayalam first for consumer brands and English first for B2B and diaspora audiences, and we test rather than assume. The reporting shows what each language produces.',
        ],
        points: [
          { name: 'Native writing', desc: 'Malayalam scripts and captions written by native speakers.' },
          { name: 'Language testing', desc: 'The same idea tested in both languages, with the numbers deciding.' },
          { name: 'Diaspora content', desc: 'English and Malayalam content for the Gulf audience where the brand sells to it.' },
          { name: 'Comments in kind', desc: 'Replies in the language the customer used.' },
        ],
      },
      {
        heading: 'One shoot day, a month of content',
        body: [
          'Short-form rewards volume and consistency, which is exactly what a brand cannot sustain when every clip is treated as a production. The answer is planning. One well-planned shoot day in Kochi, with setups, scripts, wardrobe and locations decided in advance, produces a month of Reels and Stories. The constraint is planning, not filming.',
          'The Infynix Media team runs the shoot day, edits for each platform and delivers a scheduled calendar, with the performance of this month feeding what gets shot next.',
        ],
        points: [
          { name: 'Planned setups', desc: 'Scripts, locations and wardrobe decided before the day.' },
          { name: 'Platform-specific edits', desc: 'Vertical cuts, captions and hooks built for each placement.' },
          { name: 'Scheduled calendar', desc: 'A month of content approved and scheduled in one pass.' },
          { name: 'Learning loop', desc: 'Performance data deciding the next shoot.' },
        ],
      },
      {
        heading: 'Paid social run as performance, not boosting',
        body: [
          'Boosting a post is not a paid social strategy. Campaigns run with objectives, audiences, creative tests, the Conversions API and tracked WhatsApp enquiries produce enquiries at a cost the business can see. Boosted posts produce likes.',
          'We run paid social as performance marketing: structured campaigns, creative testing on a cadence, server-side tracking, and reporting on cost per enquiry and revenue. The organic content feeds the creative, and the paid data feeds the organic plan.',
        ],
        points: [
          { name: 'Structured campaigns', desc: 'Objectives, audiences and creative tests rather than boosted posts.' },
          { name: 'Conversions API', desc: 'Server-side tracking so reported results survive privacy changes.' },
          { name: 'WhatsApp tracked', desc: 'Click-to-WhatsApp measured as a conversion and routed to the CRM.' },
          { name: 'Creative from organic', desc: 'The best-performing organic content promoted with budget.' },
        ],
      },
      {
        heading: 'Content within the rules for clinics, schools and finance',
        body: [
          'Social content for a clinic, a school or a financial services firm is not the same as content for a cafe. Doctors are limited by NMC rules in how they may promote themselves. Education content falls under the ASCI chapter on claims about outcomes and placements. Financial promotions have their own regime. Platforms add restricted-category policies on top. A Reel that is fine for a restaurant can cost a clinic a complaint.',
          'We keep a checklist per sector and review every piece of content against it before it goes live, so the brand builds trust without building risk.',
        ],
        points: [
          { name: 'Healthcare content', desc: 'Educational rather than promotional, within NMC and ASCI guidance.' },
          { name: 'Education claims', desc: 'Outcome and placement claims substantiated or left out.' },
          { name: 'Financial content', desc: 'Disclosures and claims handled to the applicable rules.' },
          { name: 'Platform policy', desc: 'Restricted-category requirements met before an account is flagged.' },
        ],
      },
      {
        heading: 'What a month looks like',
        body: [
          'A monthly planning session sets the themes, offers and shoot list. A shoot day in Kochi produces the Reels, Stories and stills for the month. Editing and captioning follow in both languages, the calendar is approved in one pass and scheduled, and paid campaigns are set up around the strongest pieces. Community management runs daily. The month closes with a report on what reached, what engaged and what produced enquiries, which sets the next planning session.',
          'The rhythm is the product. Brands that publish consistently for a year build an audience that campaigns can then convert. Brands that post in bursts start over every time.',
        ],
        points: [
          { name: 'Planning session', desc: 'Themes, offers and shoot list agreed monthly.' },
          { name: 'Shoot day', desc: 'A month of content produced in one planned day.' },
          { name: 'Approval in one pass', desc: 'A scheduled calendar reviewed once, not post by post.' },
          { name: 'Monthly report', desc: 'Reach, engagement and enquiries, feeding the next plan.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Do you work with Kerala influencers and creators?', answer: 'Yes. We match creators to the brand on audience fit rather than follower count, agree deliverables and tracking in writing, and report on what each collaboration produced in enquiries or redemptions.' },
      { question: 'How do you measure social media results?', answer: 'Reach, saves and profile visits as leading indicators, and enquiries and revenue as the measure, with WhatsApp clicks tracked and routed to the CRM. Monthly reporting shows both.' },
      { question: 'Can you produce content in Malayalam?', answer: 'Yes, and for most consumer brands we write Malayalam first. Scripts, captions and replies are by native speakers.' },
      { question: 'Do you handle comments and DMs?', answer: 'Yes, same day, seven days a week, in the language the customer wrote in, with enquiries passed to your sales team or CRM.' },
      { question: 'How much does social media marketing cost in Kochi?', answer: 'Retainers including content, a monthly shoot day, editing, community management and paid campaign management typically run from ₹40,000 per month, rising with the number of platforms, languages and the volume of production. Ad spend is separate.' },
      { question: 'Can you handle content for a clinic or a school within the rules?', answer: 'Yes. We keep a checklist per sector covering NMC, ASCI and platform policies, and every piece of content is reviewed against it before publishing.' },
    ],
  },

  'ecommerce-website-development-company-in-kochi': {
    capabilitiesHeading: 'What every store includes',
    capabilities: [
      { name: 'UPI and Indian payments', desc: 'Razorpay, PayU, Cashfree or PhonePe with UPI intent, cards, net banking and EMI, chosen for your volumes and settlement needs.' },
      { name: 'Cash on delivery done properly', desc: 'COD with verification, courier remittance reconciliation and return-rate reporting against margin.' },
      { name: 'Courier integration', desc: 'Shiprocket, Delhivery, DTDC, Blue Dart and India Post with tracking pushed to the customer on WhatsApp.' },
      { name: 'GST-compliant invoicing', desc: 'Tax invoices with HSN codes and place of supply logic, and return-ready data for the accountant.' },
      { name: 'Mobile-first checkout', desc: 'A checkout that completes on a mid-range Android phone on a slow network without losing the order.' },
      { name: 'Search-ready catalogue', desc: 'Category and product structure, product schema and performance so the store can rank.' },
      { name: 'Marketplace connections', desc: 'Amazon, Flipkart and ONDC where the channel justifies it, with inventory synced.' },
      { name: 'Full handover', desc: 'Store, code, accounts and documentation in your name.' },
    ],
    specsHeading: 'Typical projects, timelines and investment',
    specsColumns: ['Project', 'Timeline', 'Indicative investment'],
    specs: [
      ['Shopify store', '4 to 8 weeks', '₹2,50,000 to ₹7,00,000'],
      ['WooCommerce store', '5 to 10 weeks', '₹3,00,000 to ₹8,00,000'],
      ['Headless or custom platform', '10 to 16 weeks', '₹10,00,000 to ₹25,00,000'],
      ['Marketplace and ONDC integration', '2 to 5 weeks', '₹1,00,000 to ₹4,00,000'],
      ['Migration from an existing store', '4 to 10 weeks', 'Scoped from the existing store'],
      ['Care, hosting and growth', 'Monthly', 'From ₹12,000 per month'],
    ],
    useCasesHeading: 'Who we build stores for in Kochi',
    useCases: [
      { name: 'Jewellery and fashion', desc: 'Brands taking the MG Road showroom online with the trust signals, imagery and Onam readiness the category needs.' },
      { name: 'Food, spices and Kerala products', desc: 'Brands selling banana chips, spices, tea and handloom to India and the diaspora, with courier and customs handled.' },
      { name: 'Ayurveda and wellness', desc: 'Product brands with subscription and repeat purchase models, within advertising rules.' },
      { name: 'Furniture and home', desc: 'High-value, bulky products with delivery scheduling and EMI at checkout.' },
      { name: 'B2B and wholesale', desc: 'Dealer portals with tiered pricing, credit and GST invoicing.' },
    ],
    engagementsHeading: 'How a project runs',
    engagements: [
      { name: 'Fixed-price build', desc: 'Discovery, design, build, integrations and launch on an agreed scope and price.' },
      { name: 'Build with growth plan', desc: 'The store delivered, then improved monthly from conversion, search and campaign data.' },
      { name: 'Migration', desc: 'Moving an existing store to a better platform without losing orders, customers or rankings.' },
    ],
    detail: [
      {
        heading: 'Choosing the platform on the facts',
        body: [
          'Shopify is the right answer for most Kochi retailers: managed, reliable, with Indian gateway and courier apps, and a team can run it. WooCommerce fits when content and commerce need to live together on WordPress and the catalogue is manageable. Headless or custom builds are justified when the catalogue, integrations or performance demands exceed what the platforms handle well.',
          'We recommend from your catalogue, volumes, team and roadmap rather than from a preference, and we say when the cheaper option is the right one.',
        ],
        points: [
          { name: 'Shopify', desc: 'For most retailers who want a managed platform their team can run.' },
          { name: 'WooCommerce', desc: 'Where content and commerce share a WordPress site.' },
          { name: 'Headless and custom', desc: 'Where scale, integration or performance justify the engineering.' },
          { name: 'Honest recommendation', desc: 'Based on your business, not on what we prefer to build.' },
        ],
      },
      {
        heading: 'The Indian checkout and what it costs to get wrong',
        body: [
          'Indian e-commerce runs on UPI and cash on delivery, and a checkout designed for a card-carrying European customer loses orders at every step. UPI intent flows must open the right app and return cleanly. COD must be verified to control returns. EMI options move high-value purchases. The customer expects a WhatsApp confirmation and tracking, not an email they will never open.',
          'We build the checkout for that customer, reconcile COD and gateway settlements into the accounts, and report return rates against margin so the business knows what COD actually costs it.',
        ],
        points: [
          { name: 'UPI done right', desc: 'Intent flows and collect requests that complete on real phones.' },
          { name: 'COD control', desc: 'Verification, address quality and return reporting.' },
          { name: 'EMI and BNPL', desc: 'Options that move high-value purchases, where margin allows.' },
          { name: 'WhatsApp confirmations', desc: 'Order, dispatch and delivery updates on the channel customers read.' },
        ],
      },
      {
        heading: 'Selling Kerala products to India and the diaspora',
        body: [
          'A Kochi brand selling spices, chips, tea, handloom or Ayurveda has two audiences: India, reached by courier and marketplaces, and the Gulf and wider diaspora, reached by international shipping and a storefront that speaks to them. Each needs different pricing, logistics, tax handling and content.',
          'We build stores that serve both, with international shipping and customs paperwork handled, prices shown in the right currency, and campaigns from the Infynix UAE team where the diaspora is the target.',
        ],
        points: [
          { name: 'International shipping', desc: 'Carrier integration, customs documentation and duties handled.' },
          { name: 'Currency and pricing', desc: 'Prices shown correctly for Indian and international customers.' },
          { name: 'Diaspora campaigns', desc: 'Run with our UAE team for Gulf audiences.' },
          { name: 'Marketplace reach', desc: 'Amazon, Flipkart and ONDC for Indian volume.' },
        ],
      },
      {
        heading: 'Onam readiness and the Kerala retail calendar',
        body: [
          'Onam is the largest retail window of the Kerala year, and a store that is not ready for it in July has missed it. Readiness means inventory synced, the checkout tested under load, courier capacity confirmed, offers built, creative shot, and campaigns scheduled. It also means the store can handle the returns that follow a peak without the accounts falling apart.',
          'We plan the store and the growth programme around the Kerala calendar: Onam, Vishu, wedding season, the monsoon shift to online and the December diaspora visits, with the operational side ready before the marketing side switches on.',
        ],
        points: [
          { name: 'Load and checkout testing', desc: 'The store tested at peak volume before the season.' },
          { name: 'Inventory and courier capacity', desc: 'Stock synced and courier limits confirmed in advance.' },
          { name: 'Offers and creative', desc: 'Seasonal campaigns built and scheduled early.' },
          { name: 'Returns handling', desc: 'Post-peak returns reconciled without breaking the accounts.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Shopify or WooCommerce for a Kochi store?', answer: 'Shopify for most retailers who want a managed platform their team can run with Indian gateway and courier apps. WooCommerce where content and commerce need to live together on WordPress. We recommend from your catalogue, volumes and team rather than a preference.' },
      { question: 'Do you integrate UPI and cash on delivery?', answer: 'Yes. UPI through Razorpay, PayU, Cashfree or PhonePe, and cash on delivery with verification, courier remittance reconciliation and return reporting against margin.' },
      { question: 'Can you connect us to Amazon, Flipkart and ONDC?', answer: 'Yes. Marketplace and ONDC connections with inventory synced are added where the channel justifies it.' },
      { question: 'Can you sell to customers in the Gulf?', answer: 'Yes. International shipping, customs documentation and currency handling are built in where the brand sells to the diaspora, and campaigns for that audience can be run by our UAE team.' },
      { question: 'How much does an e-commerce website cost in Kochi?', answer: 'A Shopify store runs ₹2,50,000 to ₹7,00,000, WooCommerce ₹3,00,000 to ₹8,00,000, and headless or custom platforms ₹10,00,000 to ₹25,00,000, depending on catalogue, integrations and design. Every project is quoted as a fixed price after discovery.' },
      { question: 'Do you provide GST-compliant invoicing for online orders?', answer: 'Yes. Tax invoices with HSN codes and correct CGST, SGST or IGST by place of supply are generated per order, with return-ready data for the accountant and Tally integration where needed.' },
    ],
  },

  'ui-ux-design-company-in-kochi': {
    capabilitiesHeading: 'What a design engagement produces',
    capabilities: [
      { name: 'Research you can act on', desc: 'Interviews, usage data and task analysis with real users in Kerala, not assumptions from a conference room.' },
      { name: 'Flows and wireframes', desc: 'The structure of the product decided before visual design, reviewed with the people who will use it.' },
      { name: 'Clickable prototypes', desc: 'Tested with users on the devices they own before a line of code is written.' },
      { name: 'A design system', desc: 'Components, tokens and patterns documented so the product stays consistent as it grows.' },
      { name: 'Malayalam-ready layouts', desc: 'Screens that survive Malayalam strings, which run longer than English and need different type.' },
      { name: 'Accessible by default', desc: 'Contrast, touch targets and screen reader support built in.' },
      { name: 'Developer handoff', desc: 'Specifications, assets and a component library engineers can build from without guessing.' },
      { name: 'Measurement plan', desc: 'The events and funnels that will tell you whether the design worked.' },
    ],
    specsHeading: 'Typical engagements and investment',
    specsColumns: ['Engagement', 'Timeline', 'Indicative investment'],
    specs: [
      ['UX audit of an existing product', '1 to 2 weeks', '₹75,000 to ₹2,00,000'],
      ['Research and product definition', '2 to 4 weeks', '₹1,50,000 to ₹4,00,000'],
      ['App or web product design', '4 to 10 weeks', '₹3,00,000 to ₹10,00,000'],
      ['Design system', '3 to 6 weeks', '₹2,50,000 to ₹6,00,000'],
      ['Ongoing product design', 'Monthly', 'Scoped by capacity'],
    ],
    useCasesHeading: 'Who we design for',
    useCases: [
      { name: 'SaaS and startups', desc: 'Infopark and KSUM-backed products that need a designed experience before the next round.' },
      { name: 'Healthcare', desc: 'Patient and clinician interfaces where clarity and error prevention matter.' },
      { name: 'Fintech and payments', desc: 'Flows where trust, speed and regulatory disclosure have to coexist.' },
      { name: 'Internal business tools', desc: 'ERP, CRM and operations screens that staff use for hours a day.' },
      { name: 'Consumer apps', desc: 'Products for a Kerala audience on mid-range Android in Malayalam and English.' },
    ],
    engagementsHeading: 'How we engage',
    engagements: [
      { name: 'Fixed-scope design project', desc: 'Research, design and handoff for a defined product or release.' },
      { name: 'Embedded designer', desc: 'A designer working inside your product team month to month.' },
      { name: 'Design and build', desc: 'Design carried through to engineering by the same team.' },
    ],
    detail: [
      {
        heading: 'Research before opinions',
        body: [
          'Most product decisions in Kochi startups and businesses are made by the loudest person in the room. Research replaces that with evidence: what users are trying to do, where they fail, what they say and what they actually do. It does not need to be slow. A week of interviews and usage data changes what gets built.',
          'We run research with real users in the market the product serves, in Malayalam where that is their language, on the devices they own, and we turn it into decisions rather than a report nobody reads.',
        ],
        points: [
          { name: 'User interviews', desc: 'Structured conversations with the people who use or will use the product.' },
          { name: 'Usage data', desc: 'Analytics and session recordings where the product exists.' },
          { name: 'Task analysis', desc: 'What users are trying to do, step by step, and where it breaks.' },
          { name: 'Decisions, not decks', desc: 'Findings turned into a prioritised list of what to change.' },
        ],
      },
      {
        heading: 'Designing for the device and the language',
        body: [
          'A product for a Kerala audience is used on a mid-range Android phone, often in Malayalam, often on a poor network. Malayalam strings run longer and need different type. Touch targets, contrast and loading states matter more when the phone and the network are ordinary. Designs made on a large monitor for an English-speaking user break on contact with that reality.',
          'We design for the actual device and language from the first wireframe and test prototypes on real phones with real users.',
        ],
        points: [
          { name: 'Malayalam layouts', desc: 'Screens designed and tested with Malayalam content.' },
          { name: 'Real devices', desc: 'Prototypes tested on mid-range Android and iPhones.' },
          { name: 'Loading and offline states', desc: 'Designed, not left to the engineer to improvise.' },
          { name: 'Accessibility', desc: 'Contrast, touch targets and screen readers handled.' },
        ],
      },
      {
        heading: 'From design to working software',
        body: [
          'Design that stops at a Figma file is half a product. The handoff has to give engineers specifications, assets and a component library they can build from without guessing, and the designer has to stay involved as the build reveals what the design missed.',
          'Because Infynix builds software as well as designing it, design and engineering are one team when the client wants them to be, and the design system becomes a code library rather than a document.',
        ],
        points: [
          { name: 'Specifications and assets', desc: 'Everything engineers need, organised.' },
          { name: 'Component library', desc: 'A design system that becomes code.' },
          { name: 'Design in the sprint', desc: 'The designer stays involved through the build.' },
          { name: 'Measured after launch', desc: 'Events and funnels that show whether the design worked.' },
        ],
      },
      {
        heading: 'Design for internal tools that people use all day',
        body: [
          'The most neglected interfaces in any Kochi business are the ones staff use for hours a day: the billing screen, the inventory form, the CRM. They were never designed, only built, and the cost shows up as errors, training time and workarounds. Designing them properly is often the highest-return design work a business can buy, because the users are captive and the volume is enormous.',
          'We design internal tools with the same rigour as consumer products: observing the work, mapping the tasks, reducing steps, and testing with the people who will use them, in Malayalam where that is their language.',
        ],
        points: [
          { name: 'Task observation', desc: 'Watching the work as it is done, not as it is described.' },
          { name: 'Fewer steps', desc: 'Removing clicks, fields and screens from the tasks done most.' },
          { name: 'Error prevention', desc: 'Designing so mistakes are hard to make and easy to undo.' },
          { name: 'Tested with staff', desc: 'Prototypes tried by the people who will live in them.' },
        ],
      },
    ],
    extraFaqs: [
      { question: 'Do you test designs with real users?', answer: 'Yes. Prototypes are tested with real users in the market the product serves, on the devices they own, in Malayalam where that is their language, before engineering begins.' },
      { question: 'Can you design in Malayalam?', answer: 'Yes. Layouts are designed and tested with Malayalam content, which runs longer than English and needs different typography, so the product works in both languages.' },
      { question: 'Do you build what you design?', answer: 'Yes, where the client wants one team. Infynix builds web and mobile software, so design carries through to engineering without a handoff gap.' },
      { question: 'What is a UX audit?', answer: 'A one to two week review of an existing product against usage data, heuristics and user tasks, producing a prioritised list of what to fix and why. It is the fastest way to find out where a product is losing users.' },
      { question: 'How much does UI/UX design cost in Kochi?', answer: 'A UX audit runs ₹75,000 to ₹2,00,000. Research and product definition runs ₹1,50,000 to ₹4,00,000. Full app or web product design runs ₹3,00,000 to ₹10,00,000, and a design system ₹2,50,000 to ₹6,00,000. Ongoing product design is scoped by capacity.' },
      { question: 'Do you design internal business tools, not just consumer apps?', answer: 'Yes, and it is often the highest-return design work a business can buy. Billing, inventory and CRM screens used all day are designed from task observation, with fewer steps and error prevention, and tested with the staff who use them.' },
    ],
  },
};
