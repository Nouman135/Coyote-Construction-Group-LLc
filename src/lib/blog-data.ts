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
    slug: "planning-home-addition-greater-boston",
    title: "Planning a Home Addition in Greater Boston",
    excerpt: "What homeowners should think through before starting an addition, from scope and budget to trade coordination.",
    date: "May 1, 2026",
    author: "Trust Contractors Inc",
    cardImage: "/blog/blog-kitchen-remodel-checklist.png",
    heroImage: "/blog/blog-kitchen-remodel-checklist.png",
    images: [],
    content: [
      "A successful addition starts with a clear purpose. Before pricing the work, define whether the project is meant to add bedrooms, create a larger kitchen, build a suite, expand living space, or improve resale value.",
      "Older Greater Boston homes often require careful planning around structure, access, utilities, and exterior tie-ins. A contractor should review these details early so the budget reflects real construction needs.",
      "Homeowners should also plan for trade coordination. Additions may involve framing, roofing, siding, windows, doors, HVAC, plumbing, electrical, flooring, painting, and finish carpentry.",
      "Trust Contractors Inc provides free in-person estimates and owner-led guidance so clients understand the project before work begins.",
    ],
  },
  {
    slug: "remodeling-vs-new-construction",
    title: "Remodeling vs New Construction: Which Fits Your Project?",
    excerpt: "A practical look at when to renovate existing space and when a new build or larger addition may make more sense.",
    date: "April 17, 2026",
    author: "Trust Contractors Inc",
    cardImage: "/blog/blog-roof-repair-vs-replacement.png",
    heroImage: "/blog/blog-roof-repair-vs-replacement.png",
    images: [],
    content: [
      "Remodeling can be the right choice when the existing structure is sound and the home already has enough space. Layout changes, kitchens, bathrooms, basements, and exterior upgrades can create major value without starting over.",
      "New construction or a larger addition may make more sense when the home no longer supports the owner's lifestyle, the desired layout cannot be achieved inside the current footprint, or the project requires extensive structural work.",
      "Budget should be compared against long-term value, not only the first estimate. The right path depends on scope, site conditions, finish expectations, and how long the homeowner plans to stay.",
      "Trust Contractors Inc helps homeowners compare options through direct, in-person estimating and clear recommendations.",
    ],
  },
  {
    slug: "exterior-upgrades-roofing-siding-paint",
    title: "Exterior Upgrades That Protect Your Home",
    excerpt: "Roofing, siding, painting, windows, doors, decks, and porches can all work together to improve protection and curb appeal.",
    date: "March 22, 2026",
    author: "Trust Contractors Inc",
    cardImage: "/blog/blog-siding-and-paint.png",
    heroImage: "/blog/blog-siding-and-paint.png",
    images: [],
    content: [
      "Exterior construction is about more than curb appeal. Roofing, siding, paint, windows, doors, decks, and porches all help protect the home from weather while shaping how the property looks and functions.",
      "When these scopes are planned together, homeowners can avoid mismatched finishes and repeated disruption. For example, siding, trim, windows, and paint often affect one another.",
      "The best exterior projects begin with an honest inspection of what needs repair, what can stay, and what should be upgraded for long-term value.",
      "Trust Contractors Inc coordinates exterior work as part of larger remodels, additions, and general contracting projects across Greater Boston.",
    ],
  },
];
