// Insights articles for the India site.
//
// Each article has a short lead (`content`, split on blank lines), a set of
// `sections` (heading plus paragraphs) and `sources`: the outbound citations
// the article relies on. The previous entries were 70-word stubs followed by
// hard-coded filler in InsightsPage.jsx; these are written to be read, and
// they cite the primary documents so a reader or a search engine can check.

export const insightsData = [
  {
    slug: 'what-is-growth-engineering',
    title: 'What is Growth Engineering and Why Your Business Needs It',
    category: 'Growth Engineering',
    summary:
      'Why disconnected websites, ads and software leak revenue, and how a Kerala business connects search, media and systems into one engine that can be measured.',
    content: `
      Most Kerala businesses that come to us are not short of effort. They have a website, they run ads, they have a CRM someone set up, and they have a WhatsApp number that does most of the actual selling. What they lack is a connection between those things, and the connection is where the revenue leaks.

      Growth Engineering is the name we give to building that connection deliberately: a website that search engines can read, campaigns measured against a lead the sales team recognises, and systems that carry the enquiry from the first click to the invoice without a person re-keying it.
    `,
    sections: [
      {
        heading: 'The problem is the gaps, not the tools',
        paragraphs: [
          'A typical Kochi business has a website built by one vendor, ads run by another, a CRM configured by a third and an accounts package the auditor insists on. Each supplier optimises its own piece. The website looks good but Google cannot read it. The ads report leads the sales team never called. The CRM holds contacts nobody trusts. The accounts show revenue that cannot be traced to a campaign.',
          'Nobody in that arrangement is wrong, exactly. The failure is structural: no one owns the number the owner actually cares about, which is what was spent and what it brought in. Growth Engineering starts by making one team responsible for that number and then building the plumbing that produces it.',
        ],
      },
      {
        heading: 'Search engines have to be able to read the site',
        paragraphs: [
          'A surprising share of business websites in India are built on JavaScript frameworks that ship an empty page and fill it in the browser. Google can render JavaScript, but it does so in a second pass, with a delay, and not always completely. Google’s own documentation on JavaScript SEO is explicit that server-side or pre-rendering is the safer route for content that has to be indexed.',
          'Our own sites are pre-rendered for this reason: every page exists as full HTML before any script runs. The same approach, applied to a client’s site, is usually the single largest technical gain available, because pages that were invisible start to be indexed within weeks. Core Web Vitals, Google’s page experience measures, are treated as acceptance criteria rather than a report.',
        ],
      },
      {
        heading: 'A lead is only a lead if sales agrees',
        paragraphs: [
          'The most common argument between a business and its agency is about the word lead. The agency counts a form fill. The sales manager counts a person who answered the phone and had a budget. Until the definition is written down and applied in the CRM by whoever handles enquiries, the campaign reports are fiction.',
          'Speed matters as much as definition. Research published in Harvard Business Review found that firms which contacted a lead within an hour were far more likely to qualify it than those that waited, and most did not manage it. In Kerala, where the customer expects a WhatsApp reply in minutes, the gap between a lead arriving and a human responding is the whole game. Routing, acknowledgement in Malayalam or English, and escalation when nobody responds are engineering problems, and they are solvable.',
        ],
      },
      {
        heading: 'Measurement that survives consent rules',
        paragraphs: [
          'India’s Digital Personal Data Protection Act sets out how personal data must be collected and used, and the platforms increasingly require consent signals before they will attribute a conversion. Configured badly, consent removes half of a business’s measurement. Configured properly, with consent mode and server-side collection, it keeps compliance and keeps enough signal for the campaigns to learn.',
          'The other half of measurement is feeding outcomes back. When qualified leads and closed deals are uploaded to Google and Meta as offline conversions, the platforms optimise for what the business wants rather than for whoever fills forms fastest. Most accounts in Kerala have never had this connected.',
        ],
      },
      {
        heading: 'Systems that carry the enquiry to the invoice',
        paragraphs: [
          'The final gap is between the CRM and the accounts. A deal closed in the CRM is re-keyed into Tally by the accountant, the customer is created twice, and the salesperson never learns the invoice is overdue. Connecting the two, with GST treatment applied correctly and e-invoicing handled where turnover requires it, closes the loop: the campaign that produced the enquiry can finally be matched to the revenue it produced.',
          'That is what Growth Engineering means in practice. Not a new tool, but the connections between the tools a business already has, built so the number the owner cares about can be read every month without a spreadsheet.',
        ],
      },
      {
        heading: 'Where to start',
        paragraphs: [
          'Three questions decide the order of work. Can Google read the site? Does the sales team agree what a lead is, and is it applied in the CRM? Can a closed deal be traced back to the campaign that produced it? Whichever answer is no first is where the engineering begins.',
        ],
      },
    ],
    sources: [
      { label: 'Google Search Central: Understand JavaScript SEO basics', url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics' },
      { label: 'web.dev: Rendering on the web', url: 'https://web.dev/articles/rendering-on-the-web' },
      { label: 'web.dev: Web Vitals', url: 'https://web.dev/articles/vitals' },
      { label: 'Harvard Business Review: The Short Life of Online Sales Leads', url: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads' },
      { label: 'Google Analytics Help: Consent mode', url: 'https://support.google.com/analytics/answer/9976101' },
      { label: 'Ministry of Electronics and Information Technology, Government of India', url: 'https://www.meity.gov.in/', note: 'Digital Personal Data Protection Act, 2023' },
      { label: 'GST e-invoice system', url: 'https://einvoice.gst.gov.in/' },
      { label: 'WhatsApp Business Platform documentation', url: 'https://developers.facebook.com/docs/whatsapp/' },
    ],
    date: 'September 6, 2026',
    author: 'Infynix Tech Lab',
  },
  {
    slug: 'ai-surveillance-computer-vision-security',
    title: 'How Real-Time AI Computer Vision Improves Facility Security',
    category: 'AI Vision',
    summary:
      'How object detection running on edge hardware turns recorded video into live alerts for warehouses, plants and campuses in India, and what to get right on privacy and false alarms.',
    content: `
      Most facilities in India record video and nobody watches it. A guard at a monitor wall cannot attend to forty feeds, so incidents are discovered afterwards, if at all. The footage becomes evidence for a claim rather than a way to prevent the loss.

      Computer vision changes what the cameras are for. A model running on hardware at the site watches every feed continuously, detects the conditions that matter, and raises an alert with a clip while there is still time to act.
    `,
    sections: [
      {
        heading: 'What the models actually detect',
        paragraphs: [
          'Modern object detection models, of which the YOLO family is the best known, identify people, vehicles and objects in each frame and track them across frames. That is enough to define most security and safety conditions as rules: a person inside a zone after hours, a vehicle stopped in a loading bay longer than a limit, a forklift and a pedestrian in the same aisle, a worker without a hard hat in a live area, a fire exit blocked.',
          'None of these require identifying who the person is. That distinction matters for both accuracy and privacy: detecting a condition is a well-solved problem, while identifying individuals is a different technology with a much higher legal and ethical bar.',
        ],
      },
      {
        heading: 'Why processing happens at the site',
        paragraphs: [
          'Streaming every camera to a cloud service is expensive on Indian connectivity, adds latency, and creates a large store of footage nobody wants to hold. Edge hardware such as NVIDIA’s Jetson modules runs the detection at the site, so only events with short clips leave the premises. The system keeps working when the connection drops, and the footage stays where it was captured under the facility’s own retention policy.',
          'It also means existing cameras can usually be reused. The survey assesses each camera’s resolution, angle and lighting against the intended detection, and only the gaps are filled with new hardware.',
        ],
      },
      {
        heading: 'False alarms are the real enemy',
        paragraphs: [
          'Sites that already have motion-triggered alarms turn them off within weeks, because dogs, rain, headlights and moving shadows fire them all night and the guards stop responding. Object detection tuned to the site distinguishes a person at the fence from a stray animal and a truck in the yard from a tree in the wind.',
          'The honest measure is the false alarm rate against the previous system, measured during a pilot on real events, with zones and thresholds tuned in the first weeks. An alert that carries a clip lets the responder confirm before anyone is sent.',
        ],
      },
      {
        heading: 'Safety data that did not exist before',
        paragraphs: [
          'Near misses between vehicles and people, missing PPE and breaches of exclusion zones happen daily on busy Indian sites and are almost never recorded. Safety managers work from incident reports written after someone was hurt. A vision system logs the near misses as they happen, by zone, shift and time of day, and gives the safety team evidence for a layout change, a training intervention or a conversation with a contractor.',
        ],
      },
      {
        heading: 'Privacy under the DPDP Act',
        paragraphs: [
          'Video of identifiable people is personal data. India’s Digital Personal Data Protection Act requires a lawful basis, purpose limitation and reasonable security, and a facility deploying analytics should be able to explain what the system does, why, and for how long footage is kept. Designing around events rather than identities, masking areas where privacy demands it, setting retention to the purpose and putting up clear signage keeps the analysis straightforward.',
          'Biometric identification of individuals is a separate decision with a separate justification, and it is rarely necessary for security or safety outcomes.',
        ],
      },
      {
        heading: 'How a deployment runs',
        paragraphs: [
          'A site survey and a written data protection assessment first. Then a pilot on a handful of cameras with the false alarm rate measured against the old system. Then rollout, with alerts delivered to phones, the control room, the incident system or access control in the format each expects, and a tuning period on real events. A managed service keeps the hardware healthy and the models current.',
        ],
      },
    ],
    sources: [
      { label: 'Ultralytics YOLO documentation', url: 'https://docs.ultralytics.com/' },
      { label: 'NVIDIA Jetson modules', url: 'https://developer.nvidia.com/embedded/jetson-modules' },
      { label: 'Ministry of Electronics and Information Technology, Government of India', url: 'https://www.meity.gov.in/', note: 'Digital Personal Data Protection Act, 2023' },
      { label: 'UK Health and Safety Executive: Workplace transport', url: 'https://www.hse.gov.uk/workplacetransport/', note: 'a widely used reference on vehicle and pedestrian separation' },
      { label: 'ICO guidance on artificial intelligence and data protection', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/', note: 'a clear framework for explaining automated systems, useful beyond the UK' },
    ],
    date: 'September 6, 2026',
    author: 'Infynix AI Team',
  },
];
