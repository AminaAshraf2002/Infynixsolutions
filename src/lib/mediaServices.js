// Infynix Media, India catalogue.
//
// The India site declared a Media division and listed nothing under it, because
// these slugs were dropped when duplicate service pages were consolidated. The
// division hub therefore said "we have a Media practice" and could not name a
// single thing it did.
//
// Written for the Indian market rather than copied from the UAE set, and each
// entry carries FAQs, which the UAE Media entries do not, so these pages are
// eligible for FAQ rich results and AI answers from the day they ship.

export const mediaServices = {
  'photography-videography': {
    title: 'Photography & Videography',
    category: 'Media',
    keywords: [
      'Photography Kochi', 'Videography Kerala', 'Product Photography Kochi',
      'Corporate Video Production Kerala', 'Brand Photography India',
    ],
    description:
      'Product, brand and corporate photography and video, shot on location across Kerala by our own team in Kochi.',
    challenge:
      'Stock imagery is the fastest way to look like every other business in the category, and buyers recognise it immediately.',
    insight:
      'Original footage of real premises, real staff and real products outperforms polished stock on nearly every consumer channel in Kerala.',
    solution:
      'Location and studio shoots, product photography, corporate portraits, editing and colour grading, delivered in the aspect ratios each platform actually needs.',
    outcome:
      'A library of owned visual assets for the website, social channels and ad campaigns, with no licensing expiry to manage.',
    faqs: [
      { q: 'Do you travel outside Kochi for shoots?', a: 'Yes. We shoot across Kerala, most often in Ernakulam, Kozhikode, Thrissur and Trivandrum. Travel is quoted separately for locations beyond a day trip from the Edappally office.' },
      { q: 'How many images or minutes do we get?', a: 'It depends on the shoot length rather than a fixed count. A standard day produces roughly 40 to 60 edited stills, or 3 to 5 minutes of finished video, plus vertical cutdowns for social.' },
      { q: 'Do you handle the editing as well?', a: 'Yes. Editing, retouching and colour grading are part of the engagement. You receive finished assets, not raw files, though raw footage can be handed over on request.' },
    ],
  },

  'brand-films-commercials': {
    title: 'Brand Films & Commercials',
    category: 'Media',
    keywords: [
      'Brand Film Production Kochi', 'Corporate Video Kerala', 'TV Commercial Production India',
      'Ad Film Maker Kochi', 'Video Production Company Kerala',
    ],
    description:
      'Brand films, ad films and corporate video, written and produced end to end for Kerala and national campaigns.',
    challenge:
      'Most corporate video explains what a company does and gives a viewer no reason to keep watching past the first ten seconds.',
    insight:
      'A brand film earns attention the way any film does, through a specific story, not a list of capabilities set to music.',
    solution:
      'Concept and script, casting, location scouting, direction, production and post, with Malayalam and English versions cut from the same shoot.',
    outcome:
      'A film that works as the hero asset on the homepage, in paid campaigns and in the sales pitch, rather than three separate productions.',
    faqs: [
      { q: 'How long does a brand film take?', a: 'Typically 4 to 8 weeks from brief to delivery. Scripting and approvals take longer than shooting, so the timeline is usually set by how fast decisions come back rather than production days.' },
      { q: 'Can you produce in Malayalam and English?', a: 'Yes, and for most Kerala brands you should. We plan bilingual delivery into the shoot rather than dubbing afterwards, which is why the two versions read as native rather than translated.' },
      { q: 'What does a brand film cost?', a: 'Multi-location ad films with casting, sets and a full crew run considerably higher. We scope from the distribution plan, because a film for paid media needs different assets than one for a trade show.' },
    ],
  },

  'short-form-social-content': {
    title: 'Short-Form & Social Content',
    category: 'Media',
    keywords: [
      'Reels Production Kochi', 'Social Media Video Kerala', 'Short Form Content India',
      'Instagram Reels Agency Kochi', 'Malayalam Content Production',
    ],
    description:
      'Reels, shorts and vertical video produced in volume, cut for the platform and the language each audience actually watches in.',
    challenge:
      'Short-form rewards volume and consistency, which is exactly what a brand cannot sustain when every clip is treated as a production.',
    insight:
      'One well-planned shoot day can produce a month of short-form. The constraint is planning, not filming.',
    solution:
      'Monthly shoot days, a bilingual content calendar, editing and captioning in Malayalam and English, and delivery in the formats each platform ranks.',
    outcome:
      'A steady publishing rhythm the team can actually keep, with the creative learnings feeding back into what gets shot next.',
    faqs: [
      { q: 'How many reels can one shoot day produce?', a: 'Planned properly, 15 to 25 finished vertical clips. The number depends far more on how many setups and wardrobe changes we plan than on the hours on site.' },
      { q: 'Do you write the scripts and captions?', a: 'Yes, in Malayalam and English. For most Kerala consumer brands the Malayalam version outperforms the English one, so we write it first rather than translating.' },
      { q: 'Can you work with footage we already have?', a: 'Yes. Editing existing footage into short-form is a common starting point and considerably cheaper than a new shoot. It works when the raw material has enough coverage; we will tell you honestly if it does not.' },
    ],
  },

  'motion-graphics-animation': {
    title: 'Motion Graphics & Animation',
    category: 'Media',
    keywords: [
      'Motion Graphics Kochi', '2D Animation Kerala', 'Explainer Video India',
      'Product Animation Kochi', 'Animated Video Production Kerala',
    ],
    description:
      'Explainer animation, product motion and title design for brands whose product is difficult to film.',
    challenge:
      'Software, financial services and industrial products are hard to photograph, so their marketing defaults to stock footage of people pointing at laptops.',
    insight:
      'Animation is the right medium when the thing you sell is a process rather than an object.',
    solution:
      'Script, storyboard, illustration, 2D and 3D motion, sound design and versioning for social, web and presentation.',
    outcome:
      'A clear explanation of a complex product that works as a sales asset and a paid-social creative at the same time.',
    faqs: [
      { q: 'How long is a typical explainer?', a: 'Sixty to ninety seconds for a paid-media asset, two to three minutes for a sales or onboarding piece. Longer than that and completion rates fall sharply, so we would rather cut two shorter films.' },
      { q: 'Do you write the script?', a: 'Yes. Scripting is where an explainer succeeds or fails, so it is part of the engagement rather than something we ask you to supply.' },
      { q: 'Can you animate our existing brand assets?', a: 'Yes. Working from your established identity is usually faster and produces a more consistent result than designing a new visual language for one film.' },
    ],
  },

  'podcast-audio-production': {
    title: 'Podcast & Audio Production',
    category: 'Media',
    keywords: [
      'Podcast Production Kochi', 'Audio Production Kerala', 'Podcast Studio India',
      'Corporate Podcast Kochi', 'Malayalam Podcast Production',
    ],
    description:
      'Recording, editing and distribution for brand podcasts and audio series, in Malayalam and English.',
    challenge:
      'Most brand podcasts stop after six episodes, because nobody planned who would edit, publish and promote them.',
    insight:
      'A podcast is a publishing operation, not a recording. The production schedule matters more than the microphone.',
    solution:
      'Episode planning, recording, editing, mixing, show notes written for search, and distribution to the major platforms.',
    outcome:
      'A sustainable series with episodes that surface in search, plus short-form video cutdowns from the same session.',
    faqs: [
      { q: 'Do we need a studio?', a: 'Not necessarily. We record on location with portable kit, which usually produces better guest conversations than a studio does. For regular series a fixed setup at your office is often the practical answer.' },
      { q: 'Do you handle publishing and distribution?', a: 'Yes, including Spotify, Apple Podcasts and YouTube, plus show notes written to be findable rather than as a transcript dump.' },
      { q: 'Can we get video from the same recording?', a: 'Yes, and you should. Recording video alongside audio costs little extra on the day and produces the vertical clips that do most of the work in growing a podcast audience.' },
    ],
  },
};
