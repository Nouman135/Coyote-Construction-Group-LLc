export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  cardImage: string;
  heroImage: string;
  images: string[];
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "roof-repair-vs-replacement-guide",
    title: "Roof Repair vs Replacement in Oklahoma",
    excerpt: "Learn when a repair is enough and when a full replacement saves more money long term for Oklahoma properties.",
    date: "May 1, 2026",
    author: "Skystone Construction LLC",
    cardImage: "/blog/blog-roof-repair-vs-replacement.png",
    heroImage: "/blog/blog-roof-repair-vs-replacement.png",
    images: [],
    content: [
      "Not every roof issue needs a full replacement. If damage is isolated and the roof system still has life, targeted repairs can restore protection quickly.",
      "Replacement becomes the smarter choice when recurring leaks, widespread granule loss, storm impact, or aging materials reduce overall performance.",
      "A professional inspection helps you compare cost, risk, and lifespan so you can invest confidently and avoid repeated emergency repairs.",
      "Skystone Construction LLC provides free estimates to help property owners choose the right path based on real roof condition, not guesswork.",
    ],
  },
  {
    slug: "kitchen-remodel-planning-checklist",
    title: "Kitchen Remodel Planning Checklist",
    excerpt: "A simple checklist to keep your kitchen remodel on budget, on schedule, and aligned with your long-term goals.",
    date: "April 17, 2026",
    author: "Skystone Construction LLC",
    cardImage: "/blog/blog-kitchen-remodel-checklist.png",
    heroImage: "/blog/blog-kitchen-remodel-checklist.png",
    images: [],
    content: [
      "Before construction starts, define your priorities: layout function, storage, durability, lighting, and finish style. Clear priorities prevent expensive changes mid-project.",
      "Set a realistic budget range that includes materials, labor, and a contingency for hidden conditions. This keeps decisions practical and stress levels low.",
      "Choose materials that balance style and maintenance needs for your household or commercial use pattern.",
      "Working with a contractor that communicates clearly on timelines and milestones helps your project stay organized from demolition to final walkthrough.",
    ],
  },
  {
    slug: "exterior-paint-and-siding-longevity",
    title: "How Siding and Paint Protect Your Home",
    excerpt: "Exterior siding and paint upgrades improve curb appeal while helping shield your property from weather and wear.",
    date: "March 22, 2026",
    author: "Skystone Construction LLC",
    cardImage: "/blog/blog-siding-and-paint.png",
    heroImage: "/blog/blog-siding-and-paint.png",
    images: [],
    content: [
      "Exterior materials face constant exposure to sun, moisture, and seasonal temperature swings. Proper siding and paint systems improve resistance and performance.",
      "Surface preparation is just as important as product selection. Clean prep and professional application increase finish life and appearance quality.",
      "Routine inspections catch early signs of failure like cracking, bubbling, and moisture intrusion before they become costly structural issues.",
      "When planned correctly, exterior improvements can boost both property value and confidence in your building envelope.",
    ],
  },
];
