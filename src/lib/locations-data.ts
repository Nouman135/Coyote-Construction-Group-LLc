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

export const targetCities: CityData[] = [
  { name: "North Richland Hills", lat: 32.8843, lng: -97.2293 },
  { name: "Fort Worth", lat: 32.7555, lng: -97.3308 },
  { name: "Keller", lat: 32.9346, lng: -97.229 },
  { name: "Southlake", lat: 32.9412, lng: -97.1342 },
  { name: "Colleyville", lat: 32.8807, lng: -97.155 },
  { name: "Grapevine", lat: 32.9343, lng: -97.0781 },
  { name: "Hurst", lat: 32.8235, lng: -97.1706 },
  { name: "Bedford", lat: 32.844, lng: -97.1431 },
  { name: "Arlington", lat: 32.7357, lng: -97.1081 },
  { name: "Mansfield", lat: 32.5632, lng: -97.1417 },
  { name: "Haltom City", lat: 32.7996, lng: -97.2692 },
  { name: "Euless", lat: 32.8371, lng: -97.082 },
  { name: "Roanoke", lat: 33.004, lng: -97.2256 },
  { name: "Trophy Club", lat: 33.0182, lng: -97.1836 },
  { name: "Burleson", lat: 32.5421, lng: -97.3208 },
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
  state: "TX",
  region,
  isPrimary: false,
  lat,
  lng,
  description: `Coyote Construction Group serves ${name}, TX with remodeling, roofing, new construction, renovations, and general contracting.`,
  highlights: [
    "Free virtual estimates",
    "Remodeling and roofing prioritized",
    "New construction and renovations",
    "Dedicated sales rep support",
  ],
  content: [
    `Homeowners and property owners in ${name} work with Coyote Construction Group for remodeling, roofing, new construction, renovations, and general contracting backed by real restoration experience.`,
    "We focus on high-value projects — remodeling, roofing, and new construction — with a minimum job size of $10,000 and ideal projects around $100,000.",
    "Our sales team handles estimates with same-day inquiry response. Virtual estimates are typically completed within 48–72 hours.",
  ],
  cities: [],
});

export const locations: LocationData[] = [
  {
    slug: "north-richland-hills-area",
    name: "North Richland Hills Area",
    state: "TX",
    region: "Primary Service Area",
    isPrimary: true,
    lat: 32.8843,
    lng: -97.2293,
    description:
      "Coyote Construction Group provides remodeling, roofing, new construction, renovations, and general contracting across North Richland Hills, TX and the Dallas–Fort Worth metroplex.",
    highlights: [
      "Based in North Richland Hills, TX",
      "45-mile service radius",
      "Free virtual estimates",
      "Remodeling and roofing prioritized",
    ],
    content: [
      "Coyote Construction Group is headquartered at 5750 Rufe Snow Dr #100 in North Richland Hills, serving homeowners and property owners across the DFW metroplex.",
      "Our restoration background makes us better builders — we understand how homes fail, how storms damage structures, and how to rebuild properly.",
      "We provide free virtual estimates, same-day inquiry response, and dedicated sales rep support for projects starting at $10,000.",
    ],
    cities: targetCities,
  },
  locationTemplate("North Richland Hills", "north-richland-hills", "Tarrant County", 32.8843, -97.2293),
  locationTemplate("Fort Worth", "fort-worth", "Tarrant County", 32.7555, -97.3308),
  locationTemplate("Keller", "keller", "Tarrant County", 32.9346, -97.229),
  locationTemplate("Southlake", "southlake", "Tarrant / Denton County", 32.9412, -97.1342),
  locationTemplate("Colleyville", "colleyville", "Tarrant County", 32.8807, -97.155),
  locationTemplate("Grapevine", "grapevine", "Tarrant / Dallas County", 32.9343, -97.0781),
  locationTemplate("Hurst", "hurst", "Tarrant County", 32.8235, -97.1706),
  locationTemplate("Bedford", "bedford", "Tarrant County", 32.844, -97.1431),
  locationTemplate("Arlington", "arlington", "Tarrant County", 32.7357, -97.1081),
  locationTemplate("Mansfield", "mansfield", "Tarrant / Johnson County", 32.5632, -97.1417),
  locationTemplate("Haltom City", "haltom-city", "Tarrant County", 32.7996, -97.2692),
  locationTemplate("Euless", "euless", "Tarrant County", 32.8371, -97.082),
  locationTemplate("Roanoke", "roanoke", "Denton County", 33.004, -97.2256),
  locationTemplate("Trophy Club", "trophy-club", "Denton / Tarrant County", 33.0182, -97.1836),
  locationTemplate("Burleson", "burleson", "Johnson / Tarrant County", 32.5421, -97.3208),
];
