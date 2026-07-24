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
  { name: "Hartford", lat: 41.7658, lng: -72.6734 },
  { name: "West Hartford", lat: 41.762, lng: -72.742 },
  { name: "East Hartford", lat: 41.7823, lng: -72.612 },
  { name: "New Britain", lat: 41.6612, lng: -72.7795 },
  { name: "Bristol", lat: 41.6718, lng: -72.9493 },
  { name: "Manchester", lat: 41.7759, lng: -72.5215 },
  { name: "Windsor", lat: 41.8526, lng: -72.6437 },
  { name: "Glastonbury", lat: 41.7123, lng: -72.6081 },
  { name: "Wethersfield", lat: 41.7143, lng: -72.6526 },
  { name: "Farmington", lat: 41.7198, lng: -72.832 },
  { name: "Southington", lat: 41.5965, lng: -72.8782 },
  { name: "Middletown", lat: 41.5623, lng: -72.6506 },
  { name: "Enfield", lat: 41.9762, lng: -72.5918 },
  { name: "Vernon", lat: 41.8187, lng: -72.4795 },
  { name: "Bloomfield", lat: 41.8265, lng: -72.7301 },
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
  state: "CT",
  region,
  isPrimary: false,
  lat,
  lng,
  description: `Fixon Construction serves ${name}, CT with roofing, kitchen and bathroom remodeling, basement finishing, renovations, and general contracting.`,
  highlights: [
    "Free in-person estimates",
    "Roofing, kitchen, and bathroom remodels",
    "Basement finishing and renovations",
    "Owner-led estimates with direct communication",
  ],
  content: [
    `Homeowners in ${name} can work directly with Fixon Construction for roofing, remodeling, basement finishing, and general contracting projects that need dependable planning and skilled execution.`,
    "We focus on roofing, kitchen and bathroom remodels, basement finishing, home renovations, and general contracting for projects that fit our scope and quality standards.",
    "Ronnie Costa personally handles estimates, and most estimates are completed by the next business day after the in-person review.",
  ],
  cities: [],
});

export const locations: LocationData[] = [
  {
    slug: "hartford-area",
    name: "Hartford Area",
    state: "CT",
    region: "Primary Service Area",
    isPrimary: true,
    lat: 41.7658,
    lng: -72.6734,
    description:
      "Fixon Construction provides roofing, kitchen and bathroom remodeling, basement finishing, renovations, and general contracting across Hartford, CT and surrounding communities.",
    highlights: [
      "Serving the Hartford area for 10 years",
      "50-mile service radius",
      "Free in-person estimates",
      "Roofing and remodeling prioritized",
    ],
    content: [
      "Fixon Construction has served Hartford-area homeowners with reliable roofing, renovation, and general contracting services for over 10 years.",
      "Our strongest-fit projects include roofing, kitchen and bathroom remodels, basement finishing, home renovations, and general contracting.",
      "We provide free in-person estimates and typically complete them by the next business day.",
    ],
    cities: targetCities,
  },
  locationTemplate("Hartford", "hartford", "Capital Region", 41.7658, -72.6734),
  locationTemplate("West Hartford", "west-hartford", "Capital Region", 41.762, -72.742),
  locationTemplate("East Hartford", "east-hartford", "Capital Region", 41.7823, -72.612),
  locationTemplate("New Britain", "new-britain", "Central Connecticut", 41.6612, -72.7795),
  locationTemplate("Bristol", "bristol", "Central Connecticut", 41.6718, -72.9493),
  locationTemplate("Manchester", "manchester", "Eastern Connecticut", 41.7759, -72.5215),
  locationTemplate("Windsor", "windsor", "Capital Region", 41.8526, -72.6437),
  locationTemplate("Glastonbury", "glastonbury", "Central Connecticut", 41.7123, -72.6081),
  locationTemplate("Wethersfield", "wethersfield", "Capital Region", 41.7143, -72.6526),
  locationTemplate("Farmington", "farmington", "Central Connecticut", 41.7198, -72.832),
  locationTemplate("Southington", "southington", "Central Connecticut", 41.5965, -72.8782),
  locationTemplate("Middletown", "middletown", "Central Connecticut", 41.5623, -72.6506),
  locationTemplate("Enfield", "enfield", "Northern Connecticut", 41.9762, -72.5918),
  locationTemplate("Vernon", "vernon", "Eastern Connecticut", 41.8187, -72.4795),
  locationTemplate("Bloomfield", "bloomfield", "Capital Region", 41.8265, -72.7301),
];
