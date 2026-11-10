export interface CampaignAsset {
  id: string;
  src: string;
  title: string;
  caption: string;
  format: '4:5 Feed' | '1:1 Square' | '9:16 Story';
  aspectRatioLabel: string;
  role: string;
  artDirectionNotes: string;
}

export interface ConceptSpec {
  label: string;
  value: string;
  detail: string;
}

export interface Campaign {
  id: string;
  client: string;
  tagline: string;
  category: string;
  year: string;
  projectType: 'CONCEPT PROJECT';
  disclaimer: string;
  palette: string[];
  deliverables: string[];
  conceptSpecs: ConceptSpec[];
  overview: string;
  challenge: string;
  creativeSolution: string;
  artDirection: string;
  typography: string;
  assets: CampaignAsset[];
}

export const CONCEPT_DISCLAIMER =
  "This is an independently developed concept project created to demonstrate VANTA CREATIVE's design approach and creative capabilities. The brand and campaign are fictional and are not affiliated with a real business.";

export const CAMPAIGNS: Campaign[] = [
  {
    id: "aurelle-skin",
    client: "Aurelle Skin",
    tagline: "Tactile Luxury & Mineral Serenity for Clinical Skincare",
    category: "Skincare & Wellness Concept",
    year: "2026",
    projectType: "CONCEPT PROJECT",
    disclaimer: CONCEPT_DISCLAIMER,
    palette: ["#E6DEC8", "#CBB89D", "#3B352E", "#151515"],
    deliverables: [
      "Paid Social Static Creative Direction",
      "Curated Editorial Feed Grid Architecture",
      "9:16 Story & Droplet Composition Stills",
      "Tactile Material & Color Guidelines"
    ],
    conceptSpecs: [
      { label: "Concept Type", value: "Creative Exploration", detail: "Fictional brand concept" },
      { label: "Design Focus", value: "Tactile Product Lighting", detail: "Travertine & prism refraction" },
      { label: "Placements", value: "4:5 Feed & 9:16 Story", detail: "Native screen geometry" },
      { label: "Aesthetic Direction", value: "Warm Architectural Minimal", detail: "Earthy limestone palette" }
    ],
    overview: "A design exploration for a hypothetical high-end skincare label. In digital feeds crowded with noisy corporate banners, Aurelle Skin demonstrates how tactile lighting, stone pedestals, and restrained typography create immediate luxury perception.",
    challenge: "Exploring how social media graphics can communicate sensory product texture and premium value without relying on overused pastel templates or noisy promotional stickers.",
    creativeSolution: "We anchored the visual direction around raw travertine stone, sunlight refraction through frosted glass, and balanced typographic hierarchy that lets the product form breathe.",
    artDirection: "Travertine counters, natural morning shadows, soft linen folds, and refracted caustic patterns through optical-grade glass.",
    typography: "Refined display serif for product titling paired with an understated geometric sans for formulation notes.",
    assets: [
      {
        id: "aurelle-01",
        src: "/assets/aistudio/aurelle-skin-01_f0c183df.png",
        title: "Sculptural Form",
        caption: "Hero product concept on circular sandstone pedestal with curvilinear architectural background",
        format: "4:5 Feed",
        aspectRatioLabel: "4:5 Portrait Feed",
        role: "Hero Static Concept",
        artDirectionNotes: "Monolithic sandstone pedestal, soft diffuse key light, organic architectural curve in background creating depth."
      },
      {
        id: "aurelle-02",
        src: "/assets/aistudio/aurelle-skin-02_8f413c9e.png",
        title: "Prismatic Clarity",
        caption: "Prism refraction still emphasizing pure botanical formula and micro-droplet consistency",
        format: "4:5 Feed",
        aspectRatioLabel: "4:5 Portrait Feed",
        role: "Texture & Refraction Study",
        artDirectionNotes: "Glass optic refraction plates, golden-hour caustic ray, precision droplet placement on sand surface."
      },
      {
        id: "aurelle-03",
        src: "/assets/aistudio/aurelle-skin-03_efe561b3.jpg",
        title: "The Morning Ritual",
        caption: "Editorial travertine sanctuary setup with folded waffle towel and sunlit bathroom reflection",
        format: "4:5 Feed",
        aspectRatioLabel: "4:5 Portrait Feed",
        role: "Editorial Atmosphere",
        artDirectionNotes: "Travertine basin vanity, warm architectural sunlight, mirrored depth of field, tactile linen texture."
      }
    ]
  },
  {
    id: "brew-theory",
    client: "Brew Theory",
    tagline: "The Art of the Pause: Coffee, Thoughtfully Considered",
    category: "Artisan Coffee & Lifestyle Concept",
    year: "2026",
    projectType: "CONCEPT PROJECT",
    disclaimer: CONCEPT_DISCLAIMER,
    palette: ["#2B1A12", "#D2BBA2", "#F3EDE3", "#121212"],
    deliverables: [
      "Editorial Typographic Feed Stills",
      "9:16 Full-Screen Contemplative Stories",
      "Tactile Ingredient & Grind Showcases",
      "High-Contrast Lighting Playbooks"
    ],
    conceptSpecs: [
      { label: "Concept Type", value: "Creative Exploration", detail: "Fictional brand concept" },
      { label: "Design Focus", value: "Editorial Typography", detail: "Bold declarative headlines" },
      { label: "Placements", value: "1:1 Square & 9:16 Vertical", detail: "Multi-placement pacing" },
      { label: "Aesthetic Direction", value: "Deep Espresso & Warm Light", detail: "Raking morning illumination" }
    ],
    overview: "A concept campaign developed to demonstrate how thoughtful copywriting and bold editorial type can elevate lifestyle products. Reframing coffee from a hurried morning chore into an intentional moment of creative pause.",
    challenge: "Moving beyond cliché café imagery to craft high-impact social media creatives that arrest scrollers through stark typographic scale and dramatic lighting.",
    creativeSolution: "We created 'The Art of the Pause' — a high-contrast creative framework pairing deep umber backgrounds with bold, contemplative headlines ('THE ART OF THE PAUSE', 'BREWED TO BE DIFFERENT', 'THE WORLD CAN WAIT FIVE MINUTES').",
    artDirection: "Deep dark umber canvas, raking diagonal sunlight, warm crema specular highlights, single-origin bean textures, and clean editorial typographic layouts.",
    typography: "High-contrast editorial serif headlines paired with clean modern sans supporting prose.",
    assets: [
      {
        id: "brew-01",
        src: "/assets/aistudio/brew-theory-01_c4707cb3.png",
        title: "The Art of the Pause",
        caption: "Raking morning light across rich crema with bold editorial typography",
        format: "4:5 Feed",
        aspectRatioLabel: "4:5 Portrait Feed",
        role: "Editorial Headline Anchor",
        artDirectionNotes: "Deep chocolate gradient ground, dramatic 45-degree morning sunlight, rising steam wisps, timeless serif headline lockup."
      },
      {
        id: "brew-02",
        src: "/assets/aistudio/brew-theory-02_dac1ff80.png",
        title: "Brewed to be Different",
        caption: "Espresso cup with freshly ground single-origin roast on light stone surface",
        format: "1:1 Square",
        aspectRatioLabel: "1:1 Square Feed",
        role: "Product Texture Showcase",
        artDirectionNotes: "High-key warm travertine marble, scattered whole Arabica beans, textural crescent of coarse coffee grinds."
      },
      {
        id: "brew-03",
        src: "/assets/aistudio/brew-theory-03_e73d77ab.png",
        title: "The World Can Wait",
        caption: "Vertical story asset crafted for maximum mobile immersion and contemplation",
        format: "9:16 Story",
        aspectRatioLabel: "9:16 Mobile Story",
        role: "Full-Screen Story Creative",
        artDirectionNotes: "Vertical 9:16 composition, negative dark space allowing the typography to breathe, centered espresso focal point with steam."
      }
    ]
  },
  {
    id: "offgrid",
    client: "OFFGRID",
    tagline: "Brutalist Streetwear & High-Discipline Silhouettes",
    category: "Streetwear & Technical Apparel Concept",
    year: "2026",
    projectType: "CONCEPT PROJECT",
    disclaimer: CONCEPT_DISCLAIMER,
    palette: ["#1B1B1B", "#6C6C6C", "#DF5E27", "#EBEBEB"],
    deliverables: [
      "Brutalist Lookbook Creative Stills",
      "Heavyweight Silhouette Garment Studies",
      "Drop Announcement Campaign Layouts",
      "Architectural Shadow & Framing System"
    ],
    conceptSpecs: [
      { label: "Concept Type", value: "Creative Exploration", detail: "Fictional brand concept" },
      { label: "Design Focus", value: "Brutalist Architectural Framing", detail: "Concrete geometry & shadows" },
      { label: "Placements", value: "4:5 Lookbook Feed", detail: "High-density editorial" },
      { label: "Aesthetic Direction", value: "Monochrome with High-Vis Accent", detail: "Industrial concrete aesthetic" }
    ],
    overview: "A conceptual campaign exploring how brutalist architecture and stark shadow composition can give independent apparel brands heavyweight visual credibility on Instagram and digital campaigns.",
    challenge: "Demonstrating how contemporary fashion creatives can avoid generic e-commerce backdrops and instead establish a bold, cultural design universe.",
    creativeSolution: "We framed the garments within raw cast-concrete architecture. High-contrast monochrome apparel, razor-sharp shadow geometry, and subtle safety orange accents give every layout a monolithic, sculptural presence.",
    artDirection: "Brutalist cast concrete, hard midday shadows, sculptural human posture, suspended product forms, and subtle pops of high-vis safety orange.",
    typography: "Minimalist sans-serif micro-branding with tight tracking and technical alignment.",
    assets: [
      {
        id: "offgrid-01",
        src: "/assets/aistudio/offgrid-01_824aec8c.png",
        title: "Architectural Silhouette",
        caption: "Model framed by monumental cast concrete columns and razor-sharp shadow geometry",
        format: "4:5 Feed",
        aspectRatioLabel: "4:5 Portrait Feed",
        role: "Lookbook Hero",
        artDirectionNotes: "Brutalist concrete architecture, harsh daylight shadow cast, oversized boxy tee fit, relaxed wide-leg work trousers."
      },
      {
        id: "offgrid-02",
        src: "/assets/aistudio/offgrid-02_828d473a.png",
        title: "Form & Drape",
        caption: "Suspended 450GSM heavyweight hoodie study demonstrating garment density and structural hood posture",
        format: "4:5 Feed",
        aspectRatioLabel: "4:5 Portrait Feed",
        role: "Garment Drape Study",
        artDirectionNotes: "Floating product silhouette, weathered concrete wall backdrop, dramatic rim light revealing heavy fleece texture."
      },
      {
        id: "offgrid-03",
        src: "/assets/aistudio/offgrid-03_f0ef09da.png",
        title: "The Collective",
        caption: "Tri-subject editorial on brutalist concrete staircase featuring layered tech outerwear and signature neon accent",
        format: "4:5 Feed",
        aspectRatioLabel: "4:5 Portrait Feed",
        role: "Campaign Group Still",
        artDirectionNotes: "Geometric concrete staircase, three-model tiered composition, contrast between charcoal technical fabrics and safety orange details."
      }
    ]
  }
];

export const ALL_ASSETS = CAMPAIGNS.flatMap(c => 
  c.assets.map(a => ({
    ...a,
    clientName: c.client,
    category: c.category,
    campaignId: c.id
  }))
);
