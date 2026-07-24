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
    slug: "roofing-services",
    title: "Roofing Services",
    subtitle: "Roof repair, replacement, and storm damage restoration",
    price: "Free Estimate",
    priority: true,
    image: "/services/Roof_Replacement.png",
    description:
      "Fixon Construction delivers dependable roofing services for Hartford-area homeowners who need lasting protection, clean workmanship, and clear communication from estimate through completion.",
    features: [
      "Roof repair and full replacement",
      "Shingle, flashing, and leak diagnostics",
      "Storm and weather damage assessment",
      "Ventilation and exterior detail review",
      "Clean jobsite practices",
      "Free in-person estimates",
    ],
    process: [
      { step: "Inspection", desc: "We review roof condition, leak risks, and the scope of work on site." },
      { step: "Recommendation", desc: "You receive clear repair or replacement options with practical guidance." },
      { step: "Installation", desc: "Our crew completes the approved roofing work with attention to detail." },
      { step: "Cleanup", desc: "We inspect the finished roof and leave the property clean." },
    ],
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    subtitle: "Functional, modern kitchens built around how you live",
    price: "Free Estimate",
    priority: true,
    image: "/services/Kitchen_Bath_Remodeling.png",
    description:
      "Kitchen remodeling is one of Fixon Construction's most requested services. We help homeowners improve layout, storage, surfaces, lighting, and finishes while keeping the project organized and realistic.",
    features: [
      "Kitchen layout and cabinet updates",
      "Countertops, backsplash, and finish coordination",
      "Flooring, trim, and paint integration",
      "Plumbing coordination for sinks and fixtures",
      "Demolition and installation management",
      "Clear project milestones",
    ],
    process: [
      { step: "Planning", desc: "We clarify your kitchen goals, must-haves, and practical budget range." },
      { step: "Scope", desc: "You receive a renovation plan with materials, trade needs, and timing." },
      { step: "Build", desc: "Our team handles preparation, installation, and finishing work." },
      { step: "Review", desc: "We walk through the completed kitchen and address final details." },
    ],
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    subtitle: "Bathroom renovations with clean finishes and careful coordination",
    price: "Free Estimate",
    priority: true,
    image: "/gallery/project-3.jpg",
    description:
      "From practical refreshes to full bathroom renovations, Fixon Construction updates bathrooms with attention to waterproofing, layout, fixtures, tile, ventilation, and long-term usability.",
    features: [
      "Full bathroom remodels",
      "Tile, vanity, fixture, and lighting updates",
      "Shower and tub replacement coordination",
      "Flooring and trim work",
      "Plumbing coordination",
      "Clean jobsite practices",
    ],
    process: [
      { step: "Assessment", desc: "We review the existing bathroom and define the renovation goals." },
      { step: "Selections", desc: "We align fixtures, finishes, layout changes, and budget expectations." },
      { step: "Remodel", desc: "Our team handles demolition, prep, install, and finish details." },
      { step: "Final Check", desc: "We confirm function, finishes, cleanup, and customer satisfaction." },
    ],
  },
  {
    slug: "basement-remodeling",
    title: "Basement Finishing",
    subtitle: "Finished basements, family rooms, and usable lower-level space",
    price: "Free Estimate",
    image: "/services/Floor_Installation.png",
    description:
      "We turn unfinished or outdated basements into comfortable, useful space. Fixon Construction helps plan basement layouts for living areas, offices, guest rooms, storage, and entertainment zones.",
    features: [
      "Basement finishing and remodeling",
      "Framing, drywall, flooring, and trim",
      "Moisture-aware planning",
      "Lighting coordination",
      "Family room and flex-space builds",
      "Clean finish details",
    ],
    process: [
      { step: "Review", desc: "We inspect basement condition, ceiling height, utilities, and access." },
      { step: "Plan", desc: "We define the finished layout and practical scope of work." },
      { step: "Buildout", desc: "Our team completes framing, surfaces, floors, and finish work." },
      { step: "Delivery", desc: "We review the new space and complete final touch-ups." },
    ],
  },
  {
    slug: "home-remodeling",
    title: "Home Renovations",
    subtitle: "Whole-home and targeted renovations with dependable execution",
    price: "Free Estimate",
    image: "/home-hero-banner.jpeg",
    description:
      "We remodel homes with a practical process that balances design, budget, schedule, and finish quality. From layout updates to major interior transformations, Fixon Construction keeps projects organized from start to finish.",
    features: [
      "Whole-home remodeling",
      "Interior layout improvements",
      "Finish upgrades and modernizations",
      "Kitchen, bath, and living area work",
      "Owner-led estimates and project guidance",
      "Clean project communication",
    ],
    process: [
      { step: "Discovery", desc: "We discuss the rooms, pain points, budget, and outcome you want." },
      { step: "Estimate", desc: "You receive a practical scope and timeline after the in-person review." },
      { step: "Renovation", desc: "Our team handles demolition, preparation, installation, and finish phases." },
      { step: "Completion", desc: "We walk the project with you and complete final punch-list items." },
    ],
  },
  {
    slug: "general-contracting",
    title: "General Contracting",
    subtitle: "Owner-led coordination for residential construction and renovation",
    price: "Free Estimate",
    image: "/gallery/construction-services-gallery-01.jpg",
    description:
      "Fixon Construction provides general contracting for homeowners who need one accountable team to coordinate the details. We organize schedules, trade work, site communication, and quality control.",
    features: [
      "Project planning and management",
      "Trade coordination for multiple scopes",
      "Schedule and milestone communication",
      "Permit and inspection awareness",
      "Residential construction leadership",
      "Direct estimate handling by the owner",
    ],
    process: [
      { step: "Project Review", desc: "We define the work, constraints, budget, and desired timeline." },
      { step: "Coordination Plan", desc: "We organize the scopes and trade sequence before work begins." },
      { step: "Execution", desc: "Our team manages daily progress and communicates what comes next." },
      { step: "Closeout", desc: "We review the finished project and confirm all core details are complete." },
    ],
  },
];
