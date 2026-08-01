export type Client = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

export const clients: Client[] = [
  { name: "Bank of Baroda", logo: "/assets/clients/bank-of-baroda.png", width: 281, height: 98 },
  { name: "Kotak Life", logo: "/assets/clients/kotak-life.png", width: 136, height: 136 },
  { name: "PNB", logo: "/assets/clients/pnb.png", width: 131, height: 131 },
  { name: "AEON Insurance Brokers", logo: "/assets/clients/aeon-insurance.png", width: 112, height: 112 },
  { name: "Central Bank of India", logo: "/assets/clients/central-bank-of-india.png", width: 212, height: 77 },
  { name: "Cipla Health", logo: "/assets/clients/cipla-health.png", width: 242, height: 70 },
  { name: "Reliance Foundation Hospital", logo: "/assets/clients/reliance-foundation-hospital.png", width: 219, height: 137 },
  { name: "Vantage Nutrition", logo: "/assets/clients/vantage-nutrition.png", width: 212, height: 104 },
  { name: "Pfizer", logo: "/assets/clients/pfizer.png", width: 213, height: 88 },
  { name: "Thumbay Hospital", logo: "/assets/clients/thumbay-hospital.png", width: 331, height: 61 },
  { name: "Flurys", logo: "/assets/clients/flurys.png", width: 160, height: 160 },
  { name: "Zandu Care", logo: "/assets/clients/zandu-care.png", width: 180, height: 180 },
  { name: "BudLeaf Tea", logo: "/assets/clients/budleaf-tea.png", width: 642, height: 275 },
  { name: "Asta Berry", logo: "/assets/clients/asta-berry.png", width: 166, height: 166 },
  { name: "YO1 Longevity Resorts", logo: "/assets/clients/yo1-longevity-resorts.png", width: 200, height: 200 },
  { name: "TVS", logo: "/assets/clients/tvs.png", width: 294, height: 294 },
  { name: "BYD", logo: "/assets/clients/byd.png", width: 347, height: 260 },
  { name: "VOIS", logo: "/assets/clients/vois.png", width: 324, height: 209 },
  { name: "Global Partner", logo: "/assets/clients/client-19.png", width: 420, height: 210 },
  { name: "Partner Brand", logo: "/assets/clients/client-20.png", width: 480, height: 252 },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    short: "Positioning, narrative and identity that gives every future decision a spine.",
    description:
      "Before a single pixel is placed, we dig into who you are, who you're for, and why anyone should care. We connect the dots between market reality and brand ambition — building positioning, voice and identity systems that hold up campaign after campaign.",
    capabilities: [
      "Brand positioning & architecture",
      "Naming & verbal identity",
      "Visual identity systems",
      "Brand guidelines & governance",
      "Category & competitor mapping",
    ],
  },
  {
    slug: "creative-campaigns",
    title: "Creative Campaigns",
    short: "360° ideas built to survive contact with TVC, OOH, social and everything between.",
    description:
      "Big ideas that scale across every touchpoint — from a festive TVC to a bus-stop OOH panel to a fifteen-second Reel. We build campaign worlds, not one-off assets, so the story stays consistent from Phase I to Phase IV.",
    capabilities: [
      "Campaign concepting & big ideas",
      "TVC & film direction",
      "OOH & BTL activation design",
      "Multi-phase campaign rollouts",
      "Influencer & creator collaborations",
    ],
  },
  {
    slug: "social-media",
    title: "Social & Content",
    short: "Always-on content and community management that earns the scroll-stop.",
    description:
      "Platforms move fast; brands that win move with intent. We plan, produce and publish content calendars built for Instagram, YouTube, LinkedIn and beyond — tuned to each platform's language, not a repurposed afterthought.",
    capabilities: [
      "Always-on content calendars",
      "Platform-native creative",
      "Community management",
      "Influencer partnerships",
      "Paid social strategy",
    ],
  },
  {
    slug: "digital-performance",
    title: "Digital & Performance",
    short: "Media planning and buying that turns impressions into engagement, clicks and leads.",
    description:
      "Reach means nothing without response. We plan and execute performance-led digital media — display, audio, search and programmatic — with the reporting rigor to prove exactly what moved the needle.",
    capabilities: [
      "Media planning & buying",
      "Programmatic & display",
      "Audio & streaming partnerships",
      "Performance reporting & CTR optimisation",
      "Landing page & funnel design",
    ],
  },
  {
    slug: "design-production",
    title: "Design & Production",
    short: "From newspaper ads to digital signage, produced to a premium finish.",
    description:
      "Every execution — a newspaper pointer ad, a mall digital signage loop, a product shot — gets the same craft. Our in-house design and production team turns strategy into artwork that's launch-ready across every format.",
    capabilities: [
      "Print & newspaper ad design",
      "OOH & digital signage artwork",
      "Packaging & POS design",
      "Photography & shoot direction",
      "Motion graphics & edits",
    ],
  },
  {
    slug: "ai-emerging-media",
    title: "AI & Emerging Media",
    short: "Generative tools in service of human ideas — not the other way round.",
    description:
      "We use Gen AI as a medium, not a shortcut. Every AI-assisted frame is still driven by human prompt, refinement and intent — letting us reimagine traditions like Dhanteras through a contemporary lens without losing the craft of storytelling.",
    capabilities: [
      "Gen AI campaign visuals",
      "AI-assisted film & audio production",
      "Rapid creative prototyping",
      "Emerging platform experimentation",
      "Human-led prompt engineering",
    ],
  },
];

export type Industry = {
  title: string;
  description: string;
  clientLogos: string[];
};

export const industries: Industry[] = [
  {
    title: "Banking & Financial Services",
    description:
      "From festive-season savings pushes to anti-fraud awareness, we help financial brands feel human without losing trust.",
    clientLogos: ["Bank of Baroda", "Kotak Life", "PNB", "Central Bank of India", "AEON Insurance Brokers"],
  },
  {
    title: "Healthcare & Pharma",
    description:
      "Sensitive categories need careful storytelling. We translate clinical credibility into campaigns people actually engage with.",
    clientLogos: ["Reliance Foundation Hospital", "Cipla Health", "Pfizer", "Thumbay Hospital", "Zandu Care", "Vantage Nutrition"],
  },
  {
    title: "Automotive & Mobility",
    description:
      "Speed, precision and a bit of swagger — built for brands that move fast and want their marketing to keep pace.",
    clientLogos: ["TVS", "BYD"],
  },
  {
    title: "F&B, Wellness & Lifestyle",
    description:
      "Legacy and longevity brands, reimagined for a scroll-first audience without losing what made them iconic.",
    clientLogos: ["Flurys", "BudLeaf Tea", "Asta Berry", "YO1 Longevity Resorts"],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Listen & Diagnose",
    description:
      "We start by understanding the brief behind the brief — your category, your competition, and the real objective hiding under the ask.",
  },
  {
    number: "02",
    title: "Connect the Dots",
    description:
      "Strategy, story and screens don't happen in silos. We map the idea across every phase and platform before a single asset is made.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Scripts, storyboards, design systems and shot lists — built for craft, not just speed, whether the medium is a TVC or a Gen AI frame.",
  },
  {
    number: "04",
    title: "Launch in Phases",
    description:
      "A communication reveal, a launch moment, an activation, an amplification push — sequenced, not dumped all at once.",
  },
  {
    number: "05",
    title: "Prove It",
    description:
      "Impressions, engagement, CTR, reach — every campaign closes with the numbers that say whether the dots actually connected.",
  },
];

export type WhyPoint = {
  title: string;
  description: string;
};

export const whyDottyDoe: WhyPoint[] = [
  {
    title: "An extended arm, not a vendor",
    description:
      "We embed in your brand's world instead of parachuting in with a generic deck. Not just another boutique agency.",
  },
  {
    title: "Anything & everything creative",
    description:
      "You name it, and we do it — strategy, story and screens under one roof, so nothing gets lost in translation between teams.",
  },
  {
    title: "Brave enough to not follow the herd",
    description:
      "We work with brands who want to say something different, and we bring the craft to back that ambition up.",
  },
  {
    title: "Proof, not promises",
    description:
      "Every case study on this site ends in numbers — impressions, reach, CTR, views — because that's the only opinion that matters.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What does dotty doe actually do?",
    answer:
      "Anything and everything creative — brand strategy, campaign ideas, content, media, design production and AI-driven storytelling. We're an extended arm of your brand across strategy, story and screens, not a single-service vendor.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "Banking and financial services, healthcare and pharma, automotive and mobility, and F&B, wellness and lifestyle brands — see the Industries section for the full picture. If your category isn't listed, tell us about it anyway.",
  },
  {
    question: "Is it retainer or project-based?",
    answer:
      "Both. Some brands bring us on as an always-on extended team; others come to us for a single 360° campaign. We scope around the outcome you need, not a rigid package.",
  },
  {
    question: "Do you handle production, or just the idea?",
    answer:
      "Both. Strategy and concept mean nothing without flawless execution, so our in-house team takes ideas through TVC, OOH, BTL, digital signage and social production end to end.",
  },
  {
    question: "How does Gen AI fit into your process?",
    answer:
      "As a medium, not a shortcut. Our AI-driven Diwali campaign for Reliance Foundation used Gen AI visuals, but every prompt, refinement and recording was still driven by human intent and insight.",
  },
  {
    question: "How fast can a campaign go from brief to launch?",
    answer:
      "It depends on scope, but our phased approach — communication reveal, launch, activation, amplification — means we can move fast without sacrificing the craft. Tell us your timeline and we'll tell you what's realistic.",
  },
];

export type ImpactHighlight = {
  client: string;
  logo: string;
  campaign: string;
  metricValue: string;
  metricLabel: string;
  note: string;
};

export const impactHighlights: ImpactHighlight[] = [
  {
    client: "Bank of Baroda",
    logo: "/assets/clients/bank-of-baroda.png",
    campaign: "BOB Ke Sang Tyohaar Ki Umang",
    metricValue: "5,80,35,609",
    metricLabel: "Total Impressions",
    note: "A festive-season 360° push across TVC, OOH, newspaper and BTL activation, all built around one campaign badge.",
  },
  {
    client: "Bank of Baroda",
    logo: "/assets/clients/bank-of-baroda.png",
    campaign: "BOB BRO × Spotify",
    metricValue: "91.5%",
    metricLabel: "Audio Completion Rate",
    note: "A student savings account, dropped straight into a Mood Indigo playlist audiences actually wanted to hear.",
  },
  {
    client: "Reliance Foundation Hospital",
    logo: "/assets/clients/reliance-foundation-hospital.png",
    campaign: "Own The Tough Call",
    metricValue: "15.8M",
    metricLabel: "Total Views",
    note: "A World Heart Day campaign that reframed sitting as the new smoking — and made the toughest call the most rewarding one.",
  },
  {
    client: "Bank of Baroda",
    logo: "/assets/clients/bank-of-baroda.png",
    campaign: "#PehchaanCon",
    metricValue: "6.8M",
    metricLabel: "Total Reach",
    note: "Anti-fraud awareness told through comedians and creators instead of a compliance memo.",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
};

export type MetricGroup = {
  title: string;
  metrics: { label: string; value: string }[];
};

export type CaseStudyChapter = {
  title: string;
  summary: string;
  objectives: string[];
  gallery: GalleryImage[];
  metrics: MetricGroup;
  phases?: { title: string; description: string }[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  clientLogo: string;
  category: string;
  title: string;
  tagline: string;
  year: string;
  cover: GalleryImage;
  services: string[];
  challenge: string;
  research: string;
  strategy: string;
  creative: string;
  chapters: CaseStudyChapter[];
  results: string;
  businessImpact: string;
  lessonsLearned: string;
  videos?: { title: string; url: string; thumbnail: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "bank-of-baroda-360",
    client: "Bank of Baroda",
    clientLogo: "/assets/clients/bank-of-baroda.png",
    category: "Banking & Financial Services",
    title: "A 360° Campaign, Three Times Over",
    tagline: "BOB Ke Sang Tyohaar Ki Umang · BOB BRO × Spotify · #PehchaanCon",
    year: "2024",
    cover: { src: "/assets/case-studies/bob/360-gallery.png", alt: "Bank of Baroda festive 360 campaign OOH, TVC and BTL activation gallery" },
    services: ["Brand Strategy", "Creative Campaigns", "Digital & Performance", "Design & Production"],
    challenge:
      "Bank of Baroda needed to show up everywhere at once — a festive season offer push that had to feel consistent from a hoarding on a highway to a newspaper fold to a QR code in someone's hand, plus a youth savings product that needed cultural relevance, plus a fraud-awareness mandate that couldn't sound like a compliance notice.",
    research:
      "Three very different audiences, three very different moments: festive shoppers scanning offers at speed, students discovering their first bank account through the platforms they already live on, and everyday customers who tune out anything that sounds like a warning label.",
    strategy:
      "One campaign badge — BOB Ke Sang Tyohaar Ki Umang — anchored every festive touchpoint so the brand felt omnipresent rather than scattered. For the youth product, we went to where students already were: Mood Indigo and Spotify. For fraud awareness, we swapped the lecture for comedy, letting creators carry the anti-scam message instead of a warning banner.",
    creative:
      "A phased festive rollout — communication reveal, TVC launch, offline activation, social amplification — gave the campaign room to build instead of dumping every asset on day one. #bobxmoodindigo turned a bank savings account into a curated 34-song playlist and a physical festival presence. #PehchaanCon recruited standup comedians and lifestyle creators to make fraud education something people wanted to share.",
    chapters: [
      {
        title: "Chapter 01 — BOB Ke Sang Tyohaar Ki Umang",
        summary:
          "A festive-season offers campaign leveraging TVC, social, and BTL activation to promote home loans, car loans and festive banking offers across every visible surface.",
        objectives: [
          "Promote the festive season offerings and leverage the brand on all verticals",
          "Use multimedia platforms & leverage TVC, social media campaigns & BTL activation",
          "Garner engagement on digital channels and stay ahead of the competition",
        ],
        gallery: [
          { src: "/assets/case-studies/bob/objectives-tvc-phases.png", alt: "Bank of Baroda festive campaign objectives, badge and four launch phases" },
          { src: "/assets/case-studies/bob/360-gallery.png", alt: "TVC still, newspaper ads, OOH hoardings, BTL activation and digital signage for BOB festive campaign" },
        ],
        metrics: {
          title: "Festive 360° Results",
          metrics: [
            { label: "Total Engagement", value: "1,21,74,738" },
            { label: "Total Impressions", value: "5,80,35,609" },
            { label: "Total Clicks", value: "21,83,783" },
          ],
        },
        phases: [
          { title: "Phase I", description: "Pan India Communication Reveal" },
          { title: "Phase II", description: "TVC Launch" },
          { title: "Phase III", description: "Offline Activation" },
          { title: "Phase IV", description: "Social Media Activation" },
        ],
      },
      {
        title: "Chapter 02 — BOB BRO × Spotify",
        summary:
          "A partnership with Mood Indigo and Spotify to introduce BOB BRO, the student-focused savings account, through a curated audio experience instead of a banner ad.",
        objectives: [
          "Introduce and promote its student-focused savings account, BOB BRO",
          "Spread awareness about a convenient and tailored banking solution",
          "Garner engagement on platforms outside BOB social media",
        ],
        gallery: [
          { src: "/assets/case-studies/bob/spotify-objectives-metrics.png", alt: "Bank of Baroda x Spotify partnership objectives and results" },
          { src: "/assets/case-studies/bob/spotify-gallery.png", alt: "Mood Indigo activation booth, branded merchandise, and Spotify takeover ad creatives" },
        ],
        metrics: {
          title: "BOB BRO × Spotify Results",
          metrics: [
            { label: "Total Reach", value: "15,00,000" },
            { label: "Total Impressions", value: "50,05,884" },
            { label: "Audio Completion", value: "91.5%" },
            { label: "Ad Clicks", value: "34,305" },
            { label: "CTR", value: "0.65" },
          ],
        },
      },
      {
        title: "Chapter 03 — #PehchaanCon",
        summary:
          "An anti-fraud awareness campaign built on humour instead of warnings, collaborating with comedians and creators to make monetary scam education genuinely shareable.",
        objectives: [
          "Raise awareness, educate people about monetary scams",
          "Utilize a light-hearted and humorous approach for its campaign positioning",
          "Garner engagement on social media via influencers",
        ],
        gallery: [
          { src: "/assets/case-studies/bob/pehchaancon-objectives.png", alt: "#PehchaanCon campaign objectives and results" },
          { src: "/assets/case-studies/bob/pehchaancon-influencers.png", alt: "Standup comedians and creators involved in the #PehchaanCon anti-fraud campaign" },
        ],
        metrics: {
          title: "#PehchaanCon Results",
          metrics: [
            { label: "Total Views", value: "15.8M" },
            { label: "Total Reach", value: "6.8M" },
            { label: "Total Engagement", value: "1.1M" },
          ],
        },
      },
    ],
    results:
      "Across three very different mandates, the same brand felt like one continuous story — a festive campaign that dominated impressions, a youth product that found real cultural traction on Spotify, and a fraud-awareness push that people actually wanted to watch and share.",
    businessImpact:
      "Nearly 5.8 crore festive impressions and over 21 lakh clicks translated directly into loan and savings account consideration during the highest-intent season of the year, while #PehchaanCon shifted fraud awareness from a compliance checkbox into an 15.8M-view cultural moment.",
    lessonsLearned:
      "When one brand needs to speak to three different audiences at once, the discipline isn't in picking one voice — it's in giving each audience its own entry point while keeping the visual and narrative spine identical underneath.",
  },
  {
    slug: "reliance-foundation-own-the-tough-call",
    client: "Reliance Foundation Hospital",
    clientLogo: "/assets/clients/reliance-foundation-hospital.png",
    category: "Healthcare & Pharma",
    title: "Own The Tough Call",
    tagline: "A World Heart Day campaign that reframed sitting as the new smoking",
    year: "2024",
    cover: { src: "/assets/case-studies/reliance-heart/campaign-gallery.png", alt: "Own The Tough Call World Heart Day campaign film stills and social posters" },
    services: ["Brand Strategy", "Creative Campaigns", "Design & Production", "Social & Content"],
    challenge:
      "World Heart Day messaging tends to default to statistics and stock-photo doctors. Reliance Foundation Hospital wanted something that would actually make people pause — a message that sitting through convenience is quietly as dangerous as any headline vice, without tipping into fear-mongering.",
    research:
      "The toughest health decisions rarely look dramatic — they look like choosing dry fruits over sweets, or a walk over another hour of screen time. The insight: reframe the 'tough call' not as a medical event, but as the small, daily choice between convenience and care.",
    strategy:
      "#OwnTheToughCall positioned everyday self-discipline as heroic. A real & raw portrayal of individuals choosing health over convenience, paired with simple, doable activities audiences could adopt immediately — because awareness only matters if it's actionable.",
    creative:
      "A campaign film carried the emotional core, amplified through paired-choice social posters ('Indulging in dry fruits' vs. 'Indulging in sweets') and an experimental series that taught a 30-second manual heart-rate check. Offline, a Pledge Tree activation let visitors physically commit paper hearts to their own tough call, while a Doctor Series let real physicians speak on-record, closing with a personal note: caregivers need to care for themselves too.",
    chapters: [
      {
        title: "Chapter 01 — Campaign Film & Social Amplification",
        summary:
          "A 360° World Heart Day campaign spread across TVC, social activation, reminders and publishing platforms.",
        objectives: [
          "#OwnTheToughCall — a World Heart Day campaign to spread awareness that sitting is the new smoking",
          "Showcase real & raw portrayal of individuals choosing health over convenience",
          "Highlight that the toughest decisions are often the most rewarding",
          "Promote simple doable activities to integrate into daily life for heart health",
        ],
        gallery: [
          { src: "/assets/case-studies/reliance-heart/objectives-phases.png", alt: "Own The Tough Call campaign objectives and four rollout phases" },
          { src: "/assets/case-studies/reliance-heart/campaign-gallery.png", alt: "Campaign film stills, paired-choice social posters and heart-rate check experimental series" },
        ],
        metrics: {
          title: "Meta & YouTube Performance",
          metrics: [
            { label: "Total Engagement (Meta)", value: "9M+" },
            { label: "Total Impressions (Meta)", value: "4M+" },
            { label: "Follower Growth (Meta)", value: "3K+" },
            { label: "Total Views (Meta)", value: "7M+" },
            { label: "Total Views (YouTube)", value: "609.4K+" },
            { label: "Total Impressions (YouTube)", value: "254K+" },
            { label: "Follower Growth (YouTube)", value: "12.2K+" },
          ],
        },
        phases: [
          { title: "Phase I", description: "Launch TVC Campaign Film" },
          { title: "Phase II", description: "Social Media Activation" },
          { title: "Phase III", description: "Launch a Reminder on Social Media" },
          { title: "Phase IV", description: "Amplify via Publishing Platforms" },
        ],
      },
      {
        title: "Chapter 02 — Offline Pledge & Doctor Series",
        summary:
          "An in-hospital Pledge Tree activation and a Doctor Series that let real physicians deliver the campaign message in their own words.",
        objectives: [
          "Our Hearts, Our Pledges — small steps make a big impact",
          "Decoding matters of the heart with our own medical experts",
          "A personal message for doctors, by a doctor: caregivers need to care for themselves too",
        ],
        gallery: [
          { src: "/assets/case-studies/reliance-heart/pledge-doctor-series.png", alt: "Offline Pledge Tree activation and Doctor Series portraits for Reliance Foundation Hospital" },
        ],
        metrics: {
          title: "Activation Highlights",
          metrics: [
            { label: "Format", value: "Offline + Digital" },
            { label: "Voices Featured", value: "3 In-House Doctors" },
          ],
        },
      },
    ],
    results:
      "The campaign film and its paired social amplification pushed past 9M engagements and 7M views on Meta alone, while the doctor-led series gave the message a credibility no stock creative could match.",
    businessImpact:
      "By turning a preventive-health message into something shareable rather than clinical, Reliance Foundation Hospital built World Heart Day equity that outlived the single-day news cycle — with a YouTube follower base up over 12K off the back of one campaign.",
    lessonsLearned:
      "Healthcare messaging lands hardest when it comes from real practitioners saying real things, not a brand voice reciting statistics — the Doctor Series consistently out-performed purely brand-voiced creative.",
  },
  {
    slug: "reliance-foundation-ai-diwali",
    client: "Reliance Foundation",
    clientLogo: "/assets/clients/reliance-foundation-hospital.png",
    category: "AI & Emerging Media",
    title: "An AI-Driven Diwali Campaign",
    tagline: "Reimagining Dhanteras — from gold and glitter to health and healing",
    year: "2024",
    cover: { src: "/assets/case-studies/reliance-diwali/campaign-reveal.png", alt: "Reliance Foundation AI-driven Diwali campaign — family holding sparklers outside a lit-up home" },
    services: ["Creative Campaigns", "AI & Emerging Media", "Brand Strategy"],
    challenge:
      "Dhanteras marketing is saturated with gold, glitter and material wealth. Reliance Foundation wanted to flip that narrative toward health and well-being, without the campaign feeling like a lecture wedged into a festive moment — and to do it through a genuinely new production medium.",
    research:
      "A modern tussle between the real and the unreal: mythology has always used larger-than-life imagery to make a point stick. A contemporary audience needed that same mythic weight, delivered through a medium that felt as current as the message.",
    strategy:
      "Using a Gen AI medium, we bridged tradition with the present to tell a story that felt both timeless and relevant today. For Dhanteras, we flipped the narrative from gold and glitter to health and healing — reminding audiences that true wealth lies in well-being. While AI powered the visuals, every prompt, refinement and recording was driven by human intent and insight.",
    creative:
      "The campaign built in three deliberate beats — start with a real voice, tease the transformation, then reveal the full campaign film across platforms.",
    chapters: [
      {
        title: "Chapter 01 — Started With a Voxpop",
        summary:
          "A real, unscripted voxpop grounded the campaign in an authentic human moment before any AI visual was introduced — earning trust before asking for attention.",
        objectives: [
          "Open with an authentic, real-world voice rather than a produced hook",
          "Set up the 'real vs. unreal' tension the campaign would resolve",
        ],
        gallery: [
          { src: "/assets/case-studies/reliance-diwali/voxpop.png", alt: "Voxpop interview subject on Marine Drive, Mumbai, opening the AI-driven Diwali campaign" },
        ],
        metrics: {
          title: "Beat 01",
          metrics: [{ label: "Format", value: "Voxpop Film" }],
        },
      },
      {
        title: "Chapter 02 — A Few Social Media Teasers",
        summary:
          "AI-generated teaser visuals — a Dhanteras thali reimagined, a couple exchanging festive gifts — built anticipation for the full reveal without giving away the twist.",
        objectives: [
          "Build anticipation through Gen AI visuals rooted in Dhanteras iconography",
          "Signal a shift in tone from material wealth toward warmth and wellbeing",
        ],
        gallery: [
          { src: "/assets/case-studies/reliance-diwali/teaser-1.png", alt: "AI-generated Dhanteras thali teaser visual with diyas and marigolds" },
          { src: "/assets/case-studies/reliance-diwali/teaser-2.png", alt: "AI-generated couple exchanging Dhanteras gifts teaser visual" },
        ],
        metrics: {
          title: "Beat 02",
          metrics: [{ label: "Format", value: "Gen AI Social Teasers" }],
        },
      },
      {
        title: "Chapter 03 — Campaign Reveal Across Platforms",
        summary:
          "The full campaign film revealed the reframed message — a family lighting sparklers outside their home, true wealth reframed as health, healing and time together.",
        objectives: [
          "Reveal the full narrative arc across every publishing platform",
          "Land the Dhanteras message: true wealth lies in well-being",
        ],
        gallery: [
          { src: "/assets/case-studies/reliance-diwali/campaign-reveal.png", alt: "Family holding sparklers outside a Diwali-lit home for the campaign reveal film" },
        ],
        metrics: {
          title: "Beat 03",
          metrics: [{ label: "Format", value: "Campaign Film + Platform Rollout" }],
        },
      },
    ],
    results:
      "A three-beat rollout — real voice, AI-powered tease, full reveal — let the campaign earn attention before it asked for it, giving the reframed Dhanteras message room to actually land.",
    businessImpact:
      "By pairing an emerging production medium with a genuinely different festive message, Reliance Foundation stood apart in one of the most crowded advertising calendars of the year without inflating production timelines or budgets.",
    lessonsLearned:
      "Gen AI visuals earn trust fastest when they're bookended by something unmistakably real — the voxpop opening did more for campaign credibility than any AI frame that followed it.",
    videos: [
      { title: "Started With a Voxpop", url: "https://www.youtube.com/watch?v=8HD4uKaaACw", thumbnail: "/assets/case-studies/reliance-diwali/voxpop.png" },
      { title: "Campaign Reveal Across Platforms", url: "https://www.youtube.com/watch?v=wjZkzQmDgug", thumbnail: "/assets/case-studies/reliance-diwali/campaign-reveal.png" },
    ],
  },
];

export type WorkItem = {
  title: string;
  client: string;
  category: string;
  image: string;
  alt: string;
  caseStudySlug: string;
  size?: "large" | "regular";
};

export const workItems: WorkItem[] = [
  {
    title: "BOB Ke Sang Tyohaar Ki Umang",
    client: "Bank of Baroda",
    category: "360° Campaign",
    image: "/assets/case-studies/bob/360-gallery.png",
    alt: "Bank of Baroda festive campaign TVC, OOH, newspaper and BTL gallery",
    caseStudySlug: "bank-of-baroda-360",
    size: "large",
  },
  {
    title: "Own The Tough Call",
    client: "Reliance Foundation Hospital",
    category: "World Heart Day Campaign",
    image: "/assets/case-studies/reliance-heart/campaign-gallery.png",
    alt: "Own The Tough Call campaign film stills and social posters",
    caseStudySlug: "reliance-foundation-own-the-tough-call",
    size: "large",
  },
  {
    title: "An AI-Driven Diwali Campaign",
    client: "Reliance Foundation",
    category: "Gen AI Campaign Film",
    image: "/assets/case-studies/reliance-diwali/campaign-reveal.png",
    alt: "Family holding sparklers outside a Diwali-lit home",
    caseStudySlug: "reliance-foundation-ai-diwali",
  },
  {
    title: "BOB BRO × Spotify",
    client: "Bank of Baroda",
    category: "Audio Partnership",
    image: "/assets/case-studies/bob/spotify-gallery.png",
    alt: "Mood Indigo activation booth and Spotify takeover ad creatives",
    caseStudySlug: "bank-of-baroda-360",
  },
  {
    title: "#PehchaanCon",
    client: "Bank of Baroda",
    category: "Influencer Campaign",
    image: "/assets/case-studies/bob/pehchaancon-influencers.png",
    alt: "Standup comedians and creators for the anti-fraud campaign",
    caseStudySlug: "bank-of-baroda-360",
  },
  {
    title: "Doctor Series & Pledge Tree",
    client: "Reliance Foundation Hospital",
    category: "Offline Activation",
    image: "/assets/case-studies/reliance-heart/pledge-doctor-series.png",
    alt: "Offline Pledge Tree activation and Doctor Series portraits",
    caseStudySlug: "reliance-foundation-own-the-tough-call",
  },
  {
    title: "Started With a Voxpop",
    client: "Reliance Foundation",
    category: "Campaign Film",
    image: "/assets/case-studies/reliance-diwali/voxpop.png",
    alt: "Voxpop interview subject opening the AI-driven Diwali campaign",
    caseStudySlug: "reliance-foundation-ai-diwali",
  },
  {
    title: "Festive Teasers, Reimagined",
    client: "Reliance Foundation",
    category: "Gen AI Visuals",
    image: "/assets/case-studies/reliance-diwali/teaser-2.png",
    alt: "AI-generated couple exchanging Dhanteras gifts",
    caseStudySlug: "reliance-foundation-ai-diwali",
  },
];

export type ResultStat = {
  value: string;
  label: string;
};

export const resultStats: ResultStat[] = [
  { value: "20+", label: "Brands trusted us" },
  { value: "65M+", label: "Impressions delivered" },
  { value: "20M+", label: "Campaign views generated" },
  { value: "91.5%", label: "Best-in-class audio completion rate" },
];

export type CultureValue = {
  title: string;
  description: string;
};

export const cultureValues: CultureValue[] = [
  {
    title: "Curiosity over comfort",
    description:
      "We'd rather chase a strange idea into a Gen AI experiment than reheat last year's campaign format.",
  },
  {
    title: "Craft, not just concepts",
    description:
      "A big idea means nothing if the newspaper ad is misaligned or the OOH proof is off-brand. We sweat the finish.",
  },
  {
    title: "Numbers close every story",
    description:
      "Every deck ends in metrics, not adjectives — impressions, reach, CTR, completion rate. That's the only applause we trust.",
  },
  {
    title: "Brave, on the client's behalf",
    description:
      "We push back on safe ideas because the brands we admire most are the ones who didn't play it safe either.",
  },
];

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
