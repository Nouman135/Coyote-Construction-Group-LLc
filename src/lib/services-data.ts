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
    slug: "new-construction",
    title: "New Construction",
    subtitle: "Ground-up residential builds managed from planning to completion",
    price: "Free Estimate",
    image: "/services/Deck_Construction.png",
    description:
      "Trust Contractors Inc manages new construction projects with careful planning, clear communication, and detail-focused craftsmanship. Jean Oliveira personally handles estimates so every scope starts with practical guidance and realistic expectations.",
    features: [
      "Custom new home construction",
      "Project planning and coordination",
      "Permit and code coordination",
      "Framing, exterior, and interior build phases",
      "Trusted subcontractor coordination",
      "In-person estimate with direct owner involvement",
    ],
    process: [
      { step: "Consultation", desc: "We review your plans, budget, timeline, and property goals in person." },
      { step: "Scope", desc: "You receive a clear construction scope with priorities, milestones, and next steps." },
      { step: "Build", desc: "Our team coordinates the construction phases with reliable communication." },
      { step: "Walkthrough", desc: "We complete final details and review the finished work with you." },
    ],
  },
  {
    slug: "home-additions",
    title: "Home Additions",
    subtitle: "More space for growing homes and higher-value properties",
    price: "Free Estimate",
    image: "/services/Kitchen_Bath_Remodeling.png",
    description:
      "Home additions are one of Trust Contractors Inc's priority services. We help Greater Boston homeowners expand living space with additions designed to connect cleanly with the existing structure and improve everyday function.",
    features: [
      "Room additions and expanded living areas",
      "Second-story and structural expansion planning",
      "Foundation, framing, roofing, and exterior tie-ins",
      "Kitchen, bath, and suite additions",
      "Permit-focused project coordination",
      "Ideal for larger remodeling investments",
    ],
    process: [
      { step: "Site Review", desc: "We assess the existing structure, space needs, access, and constraints." },
      { step: "Plan", desc: "We align design direction, budget range, and construction sequencing." },
      { step: "Construction", desc: "Our crew manages the build with clean coordination between trades." },
      { step: "Finish", desc: "We complete interior and exterior details so the addition feels connected." },
    ],
  },
  {
    slug: "home-remodeling",
    title: "Home Remodeling",
    subtitle: "Whole-home and targeted renovations with dependable execution",
    price: "Free Estimate",
    image: "/services/Kitchen_Bath_Remodeling.png",
    description:
      "We remodel homes with a practical process that balances design, budget, schedule, and finish quality. From layout updates to major interior transformations, Trust Contractors Inc keeps projects organized from start to finish.",
    features: [
      "Whole-home remodeling",
      "Interior layout improvements",
      "Finish upgrades and modernizations",
      "Kitchen, bath, basement, and living area work",
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
    subtitle: "Owner-led coordination for complex residential construction work",
    price: "Free Estimate",
    image: "/services/Pergola_Construction.png",
    description:
      "Trust Contractors Inc provides general contracting for homeowners who need one accountable team to coordinate the details. We organize schedules, trade work, site communication, and quality control for projects of meaningful size.",
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
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    subtitle: "Functional, polished kitchens built around how you live",
    price: "Free Estimate",
    image: "/services/Kitchen_Bath_Remodeling.png",
    description:
      "Kitchen remodeling is a core Trust Contractors Inc service. We help homeowners improve layout, storage, surfaces, lighting, and finishes while keeping the process organized and realistic.",
    features: [
      "Kitchen layout updates",
      "Cabinet, countertop, and finish coordination",
      "Flooring, trim, and paint integration",
      "Electrical and plumbing coordination",
      "Demolition and installation management",
      "Clear project milestones",
    ],
    process: [
      { step: "Planning", desc: "We clarify your kitchen goals, must-haves, and practical budget range." },
      { step: "Scope", desc: "We prepare a renovation plan with materials, trade needs, and timing." },
      { step: "Build", desc: "Our crew completes preparation, installation, and finishing work." },
      { step: "Review", desc: "We inspect details and walk through the completed kitchen with you." },
    ],
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    subtitle: "Bathroom renovations with clean finishes and careful coordination",
    price: "Free Estimate",
    image: "/services/Kitchen_Bath_Remodeling.png",
    description:
      "From practical refreshes to full bathroom renovations, Trust Contractors Inc updates bathrooms with attention to waterproofing, layout, fixtures, tile, ventilation, and long-term usability.",
    features: [
      "Full bathroom remodels",
      "Tile, vanity, fixture, and lighting updates",
      "Shower and tub replacement coordination",
      "Flooring and trim work",
      "Plumbing and electrical coordination",
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
    title: "Basement Remodeling",
    subtitle: "Finished basements, family rooms, and usable lower-level space",
    price: "Free Estimate",
    image: "/services/Floor_Installation.png",
    description:
      "We turn unfinished or outdated basements into comfortable, useful space. Trust Contractors Inc can help plan basement layouts for living areas, offices, guest rooms, storage, and entertainment zones.",
    features: [
      "Basement finishing and remodeling",
      "Framing, drywall, flooring, and trim",
      "Moisture-aware planning",
      "Lighting and electrical coordination",
      "Family room and flex-space builds",
      "Clean finish details",
    ],
    process: [
      { step: "Review", desc: "We inspect the basement condition, ceiling height, utilities, and access." },
      { step: "Plan", desc: "We define the finished layout and practical scope of work." },
      { step: "Buildout", desc: "Our team completes framing, surfaces, floors, and finish work." },
      { step: "Delivery", desc: "We review the new space and complete final touch-ups." },
    ],
  },
  {
    slug: "roofing-services",
    title: "Roofing Services",
    subtitle: "Roof repair, replacement, and exterior protection",
    price: "Free Estimate",
    image: "/services/Roof_Replacement.png",
    description:
      "Trust Contractors Inc provides roofing services for homeowners who need reliable repair, replacement, or project coordination as part of a larger build or renovation.",
    features: [
      "Roof repair and replacement",
      "Shingle and flashing work",
      "Leak and storm damage review",
      "Roofing for additions and remodels",
      "Ventilation and exterior detail review",
      "All work handled with care and cleanup",
    ],
    process: [
      { step: "Inspection", desc: "We check visible roof condition, leak risks, and project needs." },
      { step: "Recommendation", desc: "We explain repair or replacement options clearly." },
      { step: "Installation", desc: "Our crew completes the approved roofing work." },
      { step: "Cleanup", desc: "We inspect the finished roof and clean the work area." },
    ],
  },
  {
    slug: "hvac-plumbing-electrical",
    title: "HVAC, Plumbing and Electrical",
    subtitle: "Trade coordination for remodeling and construction projects",
    price: "Free Estimate",
    image: "/services/Kitchen_Bath_Remodeling.png",
    description:
      "For renovation, addition, and new construction projects, Trust Contractors Inc coordinates HVAC, plumbing, and electrical needs so the work fits the overall plan and code requirements.",
    features: [
      "HVAC coordination for additions and remodels",
      "Plumbing coordination for kitchens and baths",
      "Electrical coordination for layouts and lighting",
      "Trade scheduling within the project plan",
      "Code-aware project planning",
      "Integrated general contracting support",
    ],
    process: [
      { step: "Needs Review", desc: "We identify the mechanical, plumbing, and electrical scopes needed." },
      { step: "Trade Plan", desc: "We coordinate trade timing with the larger construction schedule." },
      { step: "Rough-In", desc: "The needed systems are coordinated before surfaces are closed." },
      { step: "Finish", desc: "We align final fixtures, devices, and closeout details." },
    ],
  },
  {
    slug: "carpentry-services",
    title: "Carpentry Services",
    subtitle: "Interior and exterior carpentry with practical craftsmanship",
    price: "Free Estimate",
    image: "/services/Pergola_Construction.png",
    description:
      "Our carpentry work supports new construction, remodels, additions, decks, porches, trim, and finish details. We focus on sturdy execution and clean integration with the rest of the project.",
    features: [
      "Structural and finish carpentry",
      "Trim, framing, and detail work",
      "Deck and porch carpentry",
      "Repair and replacement work",
      "Custom project support",
      "Clean measurements and finishing",
    ],
    process: [
      { step: "Measure", desc: "We review the carpentry needs and take site measurements." },
      { step: "Scope", desc: "We define materials, details, and timing." },
      { step: "Build", desc: "Our team completes the carpentry with attention to fit and finish." },
      { step: "Inspect", desc: "We check alignment, strength, and finish quality." },
    ],
  },
  {
    slug: "framing-contractor",
    title: "Framing Contractor",
    subtitle: "Framing support for additions, remodels, and new construction",
    price: "Free Estimate",
    image: "/services/Deck_Construction.png",
    description:
      "Trust Contractors Inc provides framing services for structural changes, additions, and new builds. We coordinate framing around the approved scope so the project moves forward cleanly.",
    features: [
      "Wall and floor framing",
      "Addition and remodel framing",
      "Openings and structural layout support",
      "Coordination with plans and inspections",
      "Reliable project sequencing",
      "Clean jobsite organization",
    ],
    process: [
      { step: "Plan Review", desc: "We review drawings, dimensions, and structural requirements." },
      { step: "Prep", desc: "We coordinate materials and site readiness." },
      { step: "Frame", desc: "Our team completes framing to support the next construction phases." },
      { step: "Verify", desc: "We check alignment and readiness for follow-on trades." },
    ],
  },
  {
    slug: "deck-builder",
    title: "Deck Builder",
    subtitle: "Deck construction, replacement, stairs, and railings",
    price: "Free Estimate",
    image: "/services/Deck_Construction.png",
    description:
      "We build and update decks that make outdoor areas safer, more useful, and more enjoyable. Trust Contractors Inc helps with new decks, repairs, stairs, railings, and structural refreshes.",
    features: [
      "New deck construction",
      "Deck replacement and upgrades",
      "Stairs, railings, and framing",
      "Porch and entry tie-ins",
      "Material and layout guidance",
      "Durable exterior workmanship",
    ],
    process: [
      { step: "Site Visit", desc: "We review access, grade, existing structures, and usage goals." },
      { step: "Design Direction", desc: "We define the deck size, material approach, and details." },
      { step: "Construction", desc: "Our team builds the structure, decking, stairs, and railings." },
      { step: "Walkthrough", desc: "We inspect the finished deck and review care details." },
    ],
  },
  {
    slug: "porch-construction",
    title: "Porch Construction",
    subtitle: "Porches, entries, coverings, and exterior living upgrades",
    price: "Free Estimate",
    image: "/services/Pergola_Construction.png",
    description:
      "Trust Contractors Inc builds and improves porches that enhance curb appeal and everyday use. We coordinate structural details, roofing tie-ins, railings, stairs, and finish work.",
    features: [
      "New porch construction",
      "Porch repairs and replacements",
      "Stairs, posts, railings, and trim",
      "Roof and exterior tie-ins",
      "Curb appeal upgrades",
      "Weather-ready finishes",
    ],
    process: [
      { step: "Evaluate", desc: "We review the home exterior, existing porch, and access needs." },
      { step: "Plan", desc: "We align design, materials, structure, and timeline." },
      { step: "Build", desc: "Our crew completes framing, surfaces, railings, and finishing." },
      { step: "Finish", desc: "We verify quality and complete cleanup." },
    ],
  },
  {
    slug: "siding-services",
    title: "Siding Services",
    subtitle: "Exterior siding repair, replacement, and finish coordination",
    price: "Free Estimate",
    image: "/services/Siding_Painting.png",
    description:
      "We repair and replace siding to protect homes and improve curb appeal. Our exterior work can be coordinated with roofing, additions, decks, porches, windows, doors, and painting.",
    features: [
      "Siding repair and replacement",
      "Exterior trim coordination",
      "Weather protection improvements",
      "Additions and remodel tie-ins",
      "Color and material guidance",
      "Clean exterior finishing",
    ],
    process: [
      { step: "Inspect", desc: "We assess existing siding, trim, and weather exposure." },
      { step: "Recommend", desc: "We explain repair or replacement options." },
      { step: "Install", desc: "Our team completes siding and exterior detail work." },
      { step: "Review", desc: "We check finish quality and site cleanup." },
    ],
  },
  {
    slug: "painting-services",
    title: "Painting Services",
    subtitle: "Interior and exterior painting for finished construction projects",
    price: "Free Estimate",
    image: "/services/Painting.png",
    description:
      "Trust Contractors Inc provides painting services to complete remodels, refresh interiors, and protect exterior surfaces. Proper prep and clean application make the finish last longer.",
    features: [
      "Interior painting",
      "Exterior painting",
      "Surface preparation",
      "Trim, walls, and finish details",
      "Painting after remodels and additions",
      "Color and finish guidance",
    ],
    process: [
      { step: "Surface Review", desc: "We inspect surfaces and prep requirements." },
      { step: "Scope", desc: "We confirm colors, finishes, rooms, and exterior areas." },
      { step: "Paint", desc: "Our crew prepares and paints with attention to clean lines." },
      { step: "Final Touches", desc: "We review coverage, cleanup, and details." },
    ],
  },
  {
    slug: "window-door-replacement",
    title: "Window and Door Replacement",
    subtitle: "Window, entry door, and exterior opening upgrades",
    price: "Free Estimate",
    image: "/services/Siding_Painting.png",
    description:
      "Window and door replacement helps improve comfort, curb appeal, and weather protection. We coordinate openings, trim, siding tie-ins, and finish details as part of remodels or exterior upgrades.",
    features: [
      "Window replacement coordination",
      "Entry and exterior door replacement",
      "Trim and finish integration",
      "Siding and exterior tie-ins",
      "Weather sealing and cleanup",
      "Project-ready measurements",
    ],
    process: [
      { step: "Measure", desc: "We review openings, sizes, trim, and exterior conditions." },
      { step: "Plan", desc: "We define products, timing, and finish requirements." },
      { step: "Replace", desc: "Our team coordinates removal, installation, and sealing." },
      { step: "Finish", desc: "We complete trim details and final inspection." },
    ],
  },
];
