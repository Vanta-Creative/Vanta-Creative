export interface Capability {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  bestFor: string;
  formats: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    number: "01",
    title: "Social Media Creatives",
    shortDesc: "Arresting visual assets designed specifically for Instagram, LinkedIn, and modern social platforms.",
    fullDesc: "We design organic social content that moves beyond boring corporate templates. From typographic carousels to rich story systems and feed anchors, we craft visuals that stand out in high-speed mobile feeds.",
    deliverables: [
      "Typographic carousel templates & multi-slides",
      "Feed grid architecture and anchor posts",
      "9:16 Full-screen story graphics",
      "Visual quote and statement cards",
      "Native format exports (4:5, 1:1, 9:16)"
    ],
    bestFor: "Brands, creators, and businesses wanting a cohesive, sophisticated social presence.",
    formats: ["4:5 Feed", "9:16 Story/Reel", "1:1 Square"]
  },
  {
    number: "02",
    title: "Advertising Design",
    shortDesc: "High-impact static ad units and visual hooks engineered to stop fast-scrolling feeds.",
    fullDesc: "Direct-response advertising design where aesthetics and visual hierarchy work together. We design static ads, comparison layouts, and feature callouts that communicate value in under a second.",
    deliverables: [
      "Top-of-funnel static ad creatives",
      "Multi-slide carousel ad sets",
      "Product showcase and feature highlights",
      "Offer announcement and promo graphics",
      "Variations for testing and iteration"
    ],
    bestFor: "D2C brands, online businesses, and marketers running paid campaigns on Meta, TikTok, or Pinterest.",
    formats: ["4:5 Feed Ad", "9:16 Story Ad", "1:1 Square Ad"]
  },
  {
    number: "03",
    title: "Brand Visuals",
    shortDesc: "Digital brand assets, cohesive color scripts, and typography treatments calibrated for screens.",
    fullDesc: "Elevate how your brand looks across digital touchpoints. We develop visual identities, graphic systems, and aesthetic guidelines tailored for digital screens rather than outdated print rules.",
    deliverables: [
      "Screen-first typography and font pairing guidance",
      "Digital color palettes and contrast rules",
      "Graphic treatment and texture libraries",
      "Digital asset kit for internal teams",
      "Design documentation and export specs"
    ],
    bestFor: "New brands launching online or established businesses modernizing their digital presence.",
    formats: ["Digital Guidelines", "Figma / Vector Assets"]
  },
  {
    number: "04",
    title: "Campaign Design",
    shortDesc: "End-to-end creative visual suites for product releases, seasonal moments, and brand drops.",
    fullDesc: "Give your next release the visual gravity of a major event. We design teaser sequences, launch-day announcement graphics, countdown assets, and lookbook layouts that build genuine anticipation.",
    deliverables: [
      "Pre-launch teasers and countdown graphics",
      "Launch day hero announcement graphics",
      "Lookbook and collection showcase slides",
      "Highlight and story series",
      "Milestone and restock visuals"
    ],
    bestFor: "Product launches, apparel drops, seasonal promotions, and milestone announcements.",
    formats: ["4:5 Lookbook", "9:16 Stories", "Custom Dimensions"]
  },
  {
    number: "05",
    title: "Creative Collaboration",
    shortDesc: "Flexible ongoing design support for businesses needing reliable, high-craft creative on demand.",
    fullDesc: "Have a steady pipeline of creative needs? We collaborate directly with your team, tackling design tasks with quick turnarounds and transparent communication, without the bloat of traditional agencies.",
    deliverables: [
      "Regular sprints of tailored creative assets",
      "Direct creative collaboration with your team",
      "Fast turnarounds on active tasks",
      "All editable source files provided",
      "Adaptable scope suited to your monthly budget"
    ],
    bestFor: "Agile teams and businesses seeking an adaptable design partner.",
    formats: ["All Placements & Formats"]
  }
];
