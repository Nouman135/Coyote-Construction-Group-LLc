export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  process: { step: string; desc: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    subtitle: "Full system replacement for long-term protection",
    price: "Free Estimate",
    image: "/services/Roof_Replacement.png",
    description:
      "We replace aging and storm-damaged roofs with durable materials built for Oklahoma weather. Every project starts with an honest evaluation and a clear scope of work.",
    features: [
      "Tear-off and full replacement",
      "Shingle and roofing system upgrades",
      "Flashing and ventilation review",
      "Clean, jobsite-safe workmanship",
      "Residential and commercial options",
      "Free estimate with project guidance",
    ],
    process: [
      { step: "Inspection", desc: "We assess roof age, storm impact, and structural condition." },
      { step: "Proposal", desc: "You receive a clear replacement plan and timeline." },
      { step: "Installation", desc: "Our crew completes removal, prep, and new system install." },
      { step: "Final Walkthrough", desc: "We review results and cleanup before project signoff." },
    ],
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    subtitle: "Fast repairs for leaks, wind, and storm damage",
    price: "Free Estimate",
    image: "/services/Roof_Repair.png",
    description:
      "From active leaks to missing shingles, our repair team resolves roofing issues quickly and correctly to protect your home or business.",
    features: [
      "Leak source detection",
      "Shingle and flashing repairs",
      "Storm and wind damage fixes",
      "Preventive maintenance options",
      "Residential and commercial service",
      "Clear recommendations with no pressure",
    ],
    process: [
      { step: "Diagnosis", desc: "We identify the true cause and scope of the issue." },
      { step: "Repair Plan", desc: "You get practical options prioritized by urgency." },
      { step: "Fix Execution", desc: "Our team completes repairs using compatible materials." },
      { step: "Quality Check", desc: "We test and verify performance before closing out." },
    ],
  },
  {
    slug: "roof-inspection",
    title: "Roof Inspection",
    subtitle: "Detailed inspections for homes and commercial roofs",
    price: "Free Estimate",
    image: "/services/Roof_Inspection.png",
    description:
      "Our roof inspections help you understand condition, lifespan, and priority repairs before they become expensive emergencies.",
    features: [
      "Surface and underlayment checks",
      "Leak-risk and drainage review",
      "Storm impact documentation",
      "Maintenance recommendations",
      "Inspection support for buyers/sellers",
      "Clear reporting in plain language",
    ],
    process: [
      { step: "Site Visit", desc: "We inspect the roof system and key vulnerable areas." },
      { step: "Findings Review", desc: "We explain immediate and long-term concerns." },
      { step: "Action Plan", desc: "You receive repair or replacement guidance." },
      { step: "Follow-up", desc: "We answer questions and help prioritize next steps." },
    ],
  },
  {
    slug: "deck-construction",
    title: "Deck Construction",
    subtitle: "Outdoor deck builds and upgrades",
    price: "Free Estimate",
    image: "/services/Deck_Construction.png",
    description:
      "We design and build durable decks that expand your living space and improve your home's value, function, and curb appeal.",
    features: [
      "New deck framing and installation",
      "Deck board replacement and refresh",
      "Stair and railing integration",
      "Custom dimensions and layout options",
      "Residential craftsmanship",
      "Detail-focused finishing",
    ],
    process: [
      { step: "Consultation", desc: "We define your deck goals and site constraints." },
      { step: "Plan & Quote", desc: "You receive design direction and transparent pricing." },
      { step: "Build", desc: "Our team installs with structural and finish quality in mind." },
      { step: "Completion", desc: "We perform final checks and walkthrough with you." },
    ],
  },
  {
    slug: "pergola-construction",
    title: "Pergola Construction",
    subtitle: "Custom pergolas for shade and style",
    price: "Free Estimate",
    image: "/services/Pergola_Construction.png",
    description:
      "Add comfort and architectural detail to your outdoor space with a custom pergola designed around your home and lifestyle.",
    features: [
      "Custom pergola design and sizing",
      "Freestanding or attached options",
      "Material and finish guidance",
      "Clean structural installation",
      "Backyard enhancement for entertaining",
      "Built to local weather conditions",
    ],
    process: [
      { step: "Design Session", desc: "We shape layout, style, and dimensions to your space." },
      { step: "Material Selection", desc: "We align structure and finish with your goals." },
      { step: "Installation", desc: "Our crew builds the pergola with precision and safety." },
      { step: "Final Review", desc: "We verify details and ensure complete satisfaction." },
    ],
  },
  {
    slug: "kitchen-bath-remodeling",
    title: "Kitchen & Bath Remodeling",
    subtitle: "Room, bathroom, and kitchen renovations",
    price: "Free Estimate",
    image: "/services/Kitchen_Bath_Remodeling.png",
    description:
      "We modernize kitchens, bathrooms, and interior spaces with practical layouts, quality finishes, and dependable project management.",
    features: [
      "Kitchen refreshes and full remodels",
      "Bathroom renovation and updates",
      "Room reconfiguration support",
      "Fixture and finish upgrades",
      "Function-first planning",
      "Residential and commercial interiors",
    ],
    process: [
      { step: "Discovery", desc: "We discuss design goals, budget, and schedule priorities." },
      { step: "Scope Creation", desc: "You get a clear renovation plan and material direction." },
      { step: "Renovation", desc: "Our team executes demolition, prep, and installation phases." },
      { step: "Delivery", desc: "We complete punch-list items and finalize your remodel." },
    ],
  },
  {
    slug: "floor-installation",
    title: "Floor Installation",
    subtitle: "New flooring systems for residential and commercial spaces",
    price: "Free Estimate",
    image: "/services/Floor_Installation.png",
    description:
      "We install new flooring with clean transitions, proper leveling, and careful finishing to improve the appearance and durability of your space.",
    features: [
      "Subfloor prep and leveling",
      "Room-by-room installation planning",
      "Trim and transition finishing",
      "Residential and commercial projects",
      "Reliable timelines",
      "Quality control throughout install",
    ],
    process: [
      { step: "Assessment", desc: "We inspect current floors and substrate condition." },
      { step: "Prep", desc: "We prepare surfaces for long-lasting performance." },
      { step: "Install", desc: "Our team installs with precise alignment and clean cuts." },
      { step: "Final Touches", desc: "We complete transitions, cleanup, and walkthrough." },
    ],
  },
  {
    slug: "siding",
    title: "Siding",
    subtitle: "Exterior siding installation, repair, and upgrades",
    price: "Free Estimate",
    image: "/services/Siding_Painting.png",
    description:
      "Protect and refresh your property's exterior with quality siding work for homes and commercial buildings. We focus on clean installation and weather-ready durability.",
    features: [
      "Siding installation and replacement",
      "Storm and impact damage repair",
      "Trim and accent detailing",
      "Residential and commercial service",
      "Material and color guidance",
      "Clean, jobsite-safe workmanship",
    ],
    process: [
      { step: "Condition Review", desc: "We inspect existing siding and underlying surfaces." },
      { step: "Scope & Materials", desc: "We align material, color, and timeline with your goals." },
      { step: "Installation", desc: "Our crew handles prep, install, and finish detailing." },
      { step: "Project Wrap", desc: "We verify quality and complete a full site cleanup." },
    ],
  },
  {
    slug: "painting",
    title: "Painting",
    subtitle: "Interior, exterior, residential, commercial, and floor painting",
    price: "Free Estimate",
    image: "/services/Painting.png",
    description:
      "General painting services covering interior, exterior, residential, commercial, and floor applications. We deliver consistent prep, clean lines, and long-lasting finishes.",
    features: [
      "Interior painting",
      "Exterior painting",
      "Residential projects",
      "Commercial projects",
      "Floor painting and coatings",
      "Surface prep and finish detail",
    ],
    process: [
      { step: "Surface Review", desc: "We inspect surfaces and identify prep requirements." },
      { step: "Scope & Colors", desc: "We align finishes, colors, and timelines with your vision." },
      { step: "Application", desc: "Our crew handles prep, priming, and clean application." },
      { step: "Final Walkthrough", desc: "We verify finish quality and complete cleanup." },
    ],
  },
];
