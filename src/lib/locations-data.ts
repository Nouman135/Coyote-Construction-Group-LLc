export interface CityData {
  name: string;
  lat: number;
  lng: number;
}

export interface LocationData {
  slug: string;
  name: string;
  state: string;
  region: string;
  description: string;
  highlights: string[];
  content: string[];
  isPrimary: boolean;
  lat: number;
  lng: number;
  cities: CityData[];
}

export const locations: LocationData[] = [
  {
    slug: "oklahoma-city",
    name: "Oklahoma City",
    state: "OK",
    region: "Primary Service Area",
    isPrimary: true,
    lat: 35.4676,
    lng: -97.5164,
    description:
      "Skystone Construction LLC provides premium roofing and remodeling services across Oklahoma City with reliable scheduling and free estimates.",
    highlights: [
      "Roof replacement, repair, and inspections",
      "Deck, pergola, and remodeling projects",
      "Residential and commercial service",
      "Fast communication and free estimates",
    ],
    content: [
      "Our Oklahoma City team delivers complete exterior and interior improvement services with a quality-first process. We focus on durable materials, clear communication, and consistent workmanship.",
      "From storm-related roof issues to kitchen and bath upgrades, we help homeowners and business owners make smart decisions with transparent recommendations and practical timelines.",
      "If you are in Oklahoma City and need a trusted contractor, our crew is ready to help with a free estimate and project guidance.",
    ],
    cities: [
      { name: "Edmond", lat: 35.6528, lng: -97.4781 },
      { name: "Norman", lat: 35.2226, lng: -97.4395 },
      { name: "Yukon", lat: 35.5067, lng: -97.7625 },
      { name: "Bethany", lat: 35.5187, lng: -97.6323 },
      { name: "Moore", lat: 35.3395, lng: -97.4867 },
      { name: "Midwest City", lat: 35.4495, lng: -97.3967 },
      { name: "Stuart", lat: 34.8979, lng: -96.0950 },
      { name: "Shawnee", lat: 35.3273, lng: -96.9253 },
      { name: "Guthrie", lat: 35.8781, lng: -97.4253 },
      { name: "Mustang", lat: 35.3842, lng: -97.7245 },
      { name: "Warr Acres", lat: 35.5228, lng: -97.6189 },
      { name: "Nichols Hills", lat: 35.5509, lng: -97.5487 },
      { name: "The Village", lat: 35.5609, lng: -97.5514 },
      { name: "Choctaw", lat: 35.4976, lng: -97.2698 },
    ],

  },
  {
    slug: "edmond",
    name: "Edmond",
    state: "OK",
    region: "North Metro",
    isPrimary: false,
    lat: 35.6528,
    lng: -97.4781,
    description: "Reliable roofing and remodeling services for homes and businesses in Edmond, Oklahoma.",
    highlights: ["Free estimates", "Commercial and residential", "Roofing specialists", "Interior and exterior upgrades"],
    content: [
      "We support property owners in Edmond with roofing, decks, pergolas, painting, and remodeling services.",
      "Our team combines practical recommendations with quality execution to deliver dependable results.",
    ],
    cities: [],
  },
  {
    slug: "norman",
    name: "Norman",
    state: "OK",
    region: "South Metro",
    isPrimary: false,
    lat: 35.2226,
    lng: -97.4395,
    description: "Professional roof and remodeling projects throughout Norman with a clean, efficient process.",
    highlights: ["Roof replacement and repair", "Kitchen and bath remodeling", "Free estimate service", "Trusted workmanship"],
    content: [
      "In Norman, we help clients protect and improve their properties with full-service construction solutions.",
      "From inspections to major renovations, our work is organized, transparent, and quality-driven.",
    ],
    cities: [],
  },
  {
    slug: "yukon",
    name: "Yukon",
    state: "OK",
    region: "West Metro",
    isPrimary: false,
    lat: 35.5067,
    lng: -97.7625,
    description: "Skystone Construction LLC serves Yukon with roofing, siding, painting, and remodeling expertise.",
    highlights: ["Exterior remodeling", "Deck and pergola projects", "Residential and commercial", "Responsive support"],
    content: [
      "Our Yukon projects are built around reliable communication, clear scopes, and craftsmanship you can trust.",
      "We tailor each service to your property goals, timeline, and budget expectations.",
    ],
    cities: [],
  },
  {
    slug: "bethany",
    name: "Bethany",
    state: "OK",
    region: "West OKC",
    isPrimary: false,
    lat: 35.5187,
    lng: -97.6323,
    description: "Dedicated construction services in Bethany for roofing, flooring, painting, and remodels.",
    highlights: ["Floor installation", "Roof inspections", "Painting services", "Fast project communication"],
    content: [
      "Bethany homeowners and business owners count on our team for quality-focused upgrades.",
      "We handle project details carefully to keep work efficient and results professional.",
    ],
    cities: [],
  },
  {
    slug: "moore",
    name: "Moore",
    state: "OK",
    region: "South OKC",
    isPrimary: false,
    lat: 35.3395,
    lng: -97.4867,
    description: "Quality construction and roofing support in Moore backed by free estimates and practical planning.",
    highlights: ["Storm-ready roofing solutions", "Interior remodeling", "Exterior siding and paint", "Dependable scheduling"],
    content: [
      "In Moore, we provide complete service from first inspection through project completion.",
      "Our team emphasizes durability, clean execution, and customer-first communication.",
    ],
    cities: [],
  },
  {
    slug: "midwest-city",
    name: "Midwest City",
    state: "OK",
    region: "East Metro",
    isPrimary: false,
    lat: 35.4495,
    lng: -97.3967,
    description: "Residential and commercial roofing and remodeling services available across Midwest City.",
    highlights: ["Roof repairs and replacement", "Inspection and maintenance", "Room renovations", "Free estimates"],
    content: [
      "We support Midwest City projects with proven construction workflows and premium finishes.",
      "Every project is managed for quality, consistency, and long-term value.",
    ],
    cities: [],
  },
  {
    slug: "stuart",
    name: "Stuart",
    state: "OK",
    region: "Southeast Oklahoma",
    isPrimary: false,
    lat: 34.8979,
    lng: -96.0950,
    description: "Skystone Construction LLC provides dependable roofing and remodeling services to property owners in Stuart, Oklahoma.",
    highlights: ["Roof repair and replacement", "Exterior remodeling", "Residential and commercial", "Free on-site estimates"],
    content: [
      "We bring quality construction services to Stuart with a focus on durability and clean workmanship.",
      "From roofing projects to remodeling upgrades, our team keeps the process clear and straightforward.",
    ],
    cities: [],
  },
  {
    slug: "shawnee",
    name: "Shawnee",
    state: "OK",
    region: "East Metro",
    isPrimary: false,
    lat: 35.3273,
    lng: -96.9253,
    description: "Professional roofing, painting, and remodeling services available throughout Shawnee, Oklahoma.",
    highlights: ["Storm-ready roofing", "Interior and exterior remodeling", "Deck and pergola builds", "Free estimates"],
    content: [
      "Shawnee property owners trust our team for quality-driven roofing and remodeling projects.",
      "We focus on transparent recommendations, dependable scheduling, and long-lasting results.",
    ],
    cities: [],
  },
  {
    slug: "guthrie",
    name: "Guthrie",
    state: "OK",
    region: "North Metro",
    isPrimary: false,
    lat: 35.8781,
    lng: -97.4253,
    description: "Trusted roofing and property improvement services for homes and businesses in Guthrie, Oklahoma.",
    highlights: ["Roof inspection and repair", "Remodeling projects", "Exterior upgrades", "Residential and commercial"],
    content: [
      "In Guthrie, we deliver complete construction support with a focus on quality finishes and reliable timelines.",
      "Our team is ready to help with everything from quick repairs to full property upgrades.",
    ],
    cities: [],
  },

  {
    slug: "mustang",
    name: "Mustang",
    state: "OK",
    region: "Southwest Metro",
    isPrimary: false,
    lat: 35.3842,
    lng: -97.7245,
    description: "Trusted roofing and remodeling projects in Mustang with premium workmanship standards.",
    highlights: ["Roof inspection services", "Pergola and deck upgrades", "Floor installation", "Referral rewards available"],
    content: [
      "We help Mustang property owners complete projects with quality materials and dependable execution.",
      "From quick repairs to full upgrades, we keep your project moving with clear updates.",
    ],
    cities: [],
  },
  {
    slug: "warr-acres",
    name: "Warr Acres",
    state: "OK",
    region: "Northwest OKC",
    isPrimary: false,
    lat: 35.5228,
    lng: -97.6189,
    description: "Complete construction support in Warr Acres including roofing, paint, and interior renovations.",
    highlights: ["Remodeling services", "Roof leak repair", "Exterior upgrades", "Commercial-ready service"],
    content: [
      "In Warr Acres, our team delivers dependable upgrades for both residential and commercial properties.",
      "We focus on workmanship quality, strong communication, and practical project outcomes.",
    ],
    cities: [],
  },
  {
    slug: "nichols-hills",
    name: "Nichols Hills",
    state: "OK",
    region: "North Central OKC",
    isPrimary: false,
    lat: 35.5509,
    lng: -97.5487,
    description: "High-quality roofing and remodeling services tailored to property standards in Nichols Hills.",
    highlights: ["Premium finish quality", "Exterior and interior service", "Project detail focus", "Free estimates"],
    content: [
      "We support Nichols Hills clients with detail-oriented construction and polished results.",
      "Our team emphasizes craftsmanship, professionalism, and clean project delivery.",
    ],
    cities: [],
  },
  {
    slug: "the-village",
    name: "The Village",
    state: "OK",
    region: "North OKC",
    isPrimary: false,
    lat: 35.5609,
    lng: -97.5514,
    description: "Roofing, remodeling, and painting services for homes and businesses in The Village.",
    highlights: ["Fast response", "Roof and remodeling experts", "Residential and commercial", "Transparent project scopes"],
    content: [
      "Clients in The Village choose Skystone Construction LLC for practical service and quality outcomes.",
      "We manage each project carefully from quote to completion.",
    ],
    cities: [],
  },
  {
    slug: "choctaw",
    name: "Choctaw",
    state: "OK",
    region: "East Metro",
    isPrimary: false,
    lat: 35.4976,
    lng: -97.2698,
    description: "Full-service construction and roofing solutions for Choctaw properties within our service radius.",
    highlights: ["Roof replacement and repairs", "Siding and paint upgrades", "Deck and pergola options", "Friendly customer support"],
    content: [
      "In Choctaw, we deliver complete project support across exterior and interior improvement services.",
      "Our goal is long-lasting quality with a smooth, customer-focused experience.",
    ],
    cities: [],
  },
];
