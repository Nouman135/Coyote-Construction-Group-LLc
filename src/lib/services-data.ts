export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  process: { step: string; desc: string }[];
  priority?: boolean;
}

export const services: ServiceData[] = [
  {
    slug: "home-remodeling",
    title: "Remodeling",
    subtitle: "Kitchen, bath, and whole-home transformations",
    price: "Free Estimate",
    priority: true,
    image: "/services/Kitchen_Bath_Remodeling.png",
    description:
      "Remodeling is one of our most requested and profitable services. Coyote Construction Group delivers high-end kitchen, bathroom, and whole-home remodels with professional project management from planning through completion.",
    features: [
      "Kitchen and bathroom remodels",
      "Whole-home interior renovations",
      "Layout, cabinetry, and finish upgrades",
      "Living space and open-concept transformations",
      "Dedicated sales reps and project coordination",
      "Free virtual estimates",
    ],
    process: [
      { step: "Consultation", desc: "We discuss your goals, scope, and budget during a virtual or on-site consultation." },
      { step: "Scope & Plan", desc: "You receive a clear renovation plan with materials, timeline, and investment range." },
      { step: "Build", desc: "Our crew handles demolition, installation, and finishing with clean jobsite practices." },
      { step: "Walkthrough", desc: "We review the completed work together and address every final detail." },
    ],
  },
  {
    slug: "roofing-services",
    title: "Roofing",
    subtitle: "Residential roofing, storm repairs, and replacements",
    price: "Free Estimate",
    priority: true,
    image: "/services/Roof_Replacement.png",
    description:
      "Our restoration background makes us stronger roofers. We understand how storms, water, and weather damage structures — and how to rebuild them properly for North Texas homeowners.",
    features: [
      "Roof repair and full replacement",
      "Storm and hail damage assessment",
      "Shingle, flashing, and leak diagnostics",
      "Insurance claim support experience",
      "Ventilation and exterior detail review",
      "Free virtual estimates",
    ],
    process: [
      { step: "Inspection", desc: "We review roof condition, damage, and the full scope of work." },
      { step: "Recommendation", desc: "You receive clear repair or replacement options with practical guidance." },
      { step: "Installation", desc: "Our crew completes approved roofing work with attention to detail." },
      { step: "Cleanup", desc: "We inspect the finished roof and leave your property clean." },
    ],
  },
  {
    slug: "new-construction",
    title: "New Construction",
    subtitle: "Custom homes and ground-up residential builds",
    price: "Free Estimate",
    priority: true,
    image: "/gallery/construction-services-gallery-01.jpg",
    description:
      "From custom homes to major residential builds, Coyote Construction Group manages new construction projects with the same restoration-informed expertise that sets us apart across the DFW metroplex.",
    features: [
      "Custom home construction",
      "Ground-up residential builds",
      "Structural framing and major additions",
      "Professional construction management",
      "Permit and inspection coordination",
      "Projects starting at $10,000+",
    ],
    process: [
      { step: "Discovery", desc: "We define your vision, lot requirements, budget, and timeline." },
      { step: "Pre-Construction", desc: "Plans, permits, and trade sequencing are organized before breaking ground." },
      { step: "Build", desc: "Our team manages daily progress with clear milestone communication." },
      { step: "Delivery", desc: "We walk the finished project with you and confirm every core detail." },
    ],
  },
  {
    slug: "general-contracting",
    title: "General Contracting",
    subtitle: "One accountable team for complex residential projects",
    price: "Free Estimate",
    image: "/services/Deck_Construction.png",
    description:
      "Coyote Construction Group provides general contracting for homeowners and property owners who need one accountable team to coordinate trades, schedules, and quality across the full project.",
    features: [
      "End-to-end project management",
      "Trade coordination for multiple scopes",
      "Schedule and milestone communication",
      "Permit and inspection awareness",
      "Residential and light commercial work",
      "Dedicated sales rep support",
    ],
    process: [
      { step: "Project Review", desc: "We define the work, constraints, budget, and desired timeline." },
      { step: "Coordination Plan", desc: "Scopes and trade sequences are organized before work begins." },
      { step: "Execution", desc: "Our team manages daily progress and communicates what comes next." },
      { step: "Closeout", desc: "We review the finished project and confirm all details are complete." },
    ],
  },
  {
    slug: "home-renovations",
    title: "Renovations",
    subtitle: "Targeted upgrades and major interior transformations",
    price: "Free Estimate",
    image: "/home-hero-banner.jpeg",
    description:
      "We handle renovations that improve how you live — from finish upgrades and layout changes to major interior transformations — with a practical process built around budget, schedule, and quality.",
    features: [
      "Whole-home and room-by-room renovations",
      "Interior layout improvements",
      "Finish upgrades and modernizations",
      "Addition and expansion coordination",
      "Ideal for $100,000+ projects",
      "Same-day inquiry response",
    ],
    process: [
      { step: "Discovery", desc: "We discuss the rooms, pain points, budget, and outcome you want." },
      { step: "Estimate", desc: "You receive a practical scope and timeline after your virtual review." },
      { step: "Renovation", desc: "Our team handles prep, installation, and finishing phases." },
      { step: "Completion", desc: "We walk the project with you and complete final punch-list items." },
    ],
  },
];
