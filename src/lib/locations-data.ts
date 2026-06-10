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

const targetCities: CityData[] = [
  { name: "Bedford", lat: 42.4906, lng: -71.2762 },
  { name: "Lexington", lat: 42.443, lng: -71.229 },
  { name: "Winchester", lat: 42.4523, lng: -71.137 },
  { name: "Arlington", lat: 42.4154, lng: -71.1564 },
  { name: "Belmont", lat: 42.3959, lng: -71.1787 },
  { name: "Watertown", lat: 42.3709, lng: -71.1828 },
  { name: "Waltham", lat: 42.3765, lng: -71.2356 },
  { name: "Woburn", lat: 42.4793, lng: -71.1523 },
  { name: "Reading", lat: 42.5257, lng: -71.0953 },
  { name: "Wakefield", lat: 42.5065, lng: -71.0728 },
  { name: "Lynnfield", lat: 42.5387, lng: -71.0481 },
  { name: "North Reading", lat: 42.5751, lng: -71.0787 },
  { name: "Andover", lat: 42.6584, lng: -71.137 },
  { name: "North Andover", lat: 42.6987, lng: -71.1351 },
  { name: "Wilmington", lat: 42.5465, lng: -71.1737 },
];

const locationTemplate = (
  name: string,
  slug: string,
  region: string,
  lat: number,
  lng: number,
): LocationData => ({
  slug,
  name,
  state: "MA",
  region,
  isPrimary: false,
  lat,
  lng,
  description: `Trust Contractors Inc serves ${name}, MA with new construction, home additions, remodeling, roofing, carpentry, siding, painting, and general contracting.`,
  highlights: [
    "Free in-person estimates",
    "New construction, additions, and remodeling",
    "Roofing, siding, painting, and exterior work",
    "Owner-led estimates with fast response",
  ],
  content: [
    `Homeowners in ${name} can work directly with Trust Contractors Inc for larger construction and renovation projects that need dependable planning and skilled execution.`,
    "We focus on meaningful projects such as new builds, additions, whole-home remodeling, kitchens, bathrooms, basements, roofing, decks, porches, siding, painting, windows, doors, and trade coordination.",
    "Jean Oliveira personally handles estimates, and most estimates are completed within 3 days after the in-person review.",
  ],
  cities: [],
});

export const locations: LocationData[] = [
  {
    slug: "greater-boston",
    name: "Greater Boston",
    state: "MA",
    region: "Primary Service Area",
    isPrimary: true,
    lat: 42.4793,
    lng: -71.1523,
    description:
      "Trust Contractors Inc provides new construction, additions, remodeling, roofing, and general contracting across Greater Boston and surrounding North Shore and northwest communities.",
    highlights: [
      "Serving Greater Boston since 2003",
      "20-mile service radius",
      "Free in-person estimates",
      "New construction, additions, and remodeling prioritized",
    ],
    content: [
      "Trust Contractors Inc has served Greater Boston homeowners since 2003 with reliable construction, renovation, and general contracting services.",
      "Our strongest-fit projects include new construction, home additions, and remodeling work, with support for roofing, HVAC, plumbing, electrical coordination, carpentry, framing, decks, porches, siding, painting, windows, and doors.",
      "We respond quickly to new inquiries, provide free in-person estimates, and typically complete estimates within 3 days.",
    ],
    cities: targetCities,
  },
  locationTemplate("Bedford", "bedford", "Northwest Boston", 42.4906, -71.2762),
  locationTemplate("Lexington", "lexington", "Northwest Boston", 42.443, -71.229),
  locationTemplate("Winchester", "winchester", "North of Boston", 42.4523, -71.137),
  locationTemplate("Arlington", "arlington", "Inner Northwest", 42.4154, -71.1564),
  locationTemplate("Belmont", "belmont", "Inner Northwest", 42.3959, -71.1787),
  locationTemplate("Watertown", "watertown", "West Boston", 42.3709, -71.1828),
  locationTemplate("Waltham", "waltham", "West Boston", 42.3765, -71.2356),
  locationTemplate("Woburn", "woburn", "North of Boston", 42.4793, -71.1523),
  locationTemplate("Reading", "reading", "North Shore Area", 42.5257, -71.0953),
  locationTemplate("Wakefield", "wakefield", "North Shore Area", 42.5065, -71.0728),
  locationTemplate("Lynnfield", "lynnfield", "North Shore Area", 42.5387, -71.0481),
  locationTemplate("North Reading", "north-reading", "North Shore Area", 42.5751, -71.0787),
  locationTemplate("Andover", "andover", "Merrimack Valley", 42.6584, -71.137),
  locationTemplate("North Andover", "north-andover", "Merrimack Valley", 42.6987, -71.1351),
  locationTemplate("Wilmington", "wilmington", "North of Boston", 42.5465, -71.1737),
];
