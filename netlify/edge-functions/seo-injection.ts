import type { Config, Context } from "https://edge.netlify.com";

const DOMAIN = "https://skystone-construction-llc.com";
const BRAND = "Skystone Construction LLC";
const OG_IMAGE = "/og-image.png";
const PHONE = "(405) 400-3141";

interface SEOData {
  title: string;
  description: string;
}

function normalizeDescription(input: string): string {
  let description = input.replace(/\s+/g, " ").trim();
  if (description.length < 145) {
    description = `${description} Call ${PHONE} for a free estimate from ${BRAND}.`;
  }
  if (description.length > 155) {
    description = `${description.slice(0, 152).replace(/\s+\S*$/, "")}...`;
  }
  return description;
}

function getSEOData(path: string): SEOData {
  const p = path.replace(/\/$/, "") || "/";

  const staticRoutes: Record<string, SEOData> = {
    "/": {
      title: `Roofing and Remodeling | ${BRAND}`,
      description:
        "Skystone Construction LLC delivers roofing, remodeling, decks, pergolas, flooring, siding, and painting in Oklahoma City with free estimates.",
    },
    "/about": {
      title: `About Our Team | ${BRAND}`,
      description:
        "Learn how Skystone Construction LLC serves Oklahoma City with premium roofing and remodeling craftsmanship for residential and commercial projects.",
    },
    "/services": {
      title: `Construction Services | ${BRAND}`,
      description:
        "Explore Skystone Construction LLC services including roofing, decks, pergolas, kitchen and bath remodeling, flooring, siding, and painting.",
    },
    "/locations": {
      title: `OKC Service Areas | ${BRAND}`,
      description:
        "Skystone Construction LLC serves Oklahoma City and surrounding cities within a 30-mile radius. Find your location and request a free estimate.",
    },
    "/gallery": {
      title: `Project Gallery | ${BRAND}`,
      description:
        "View upcoming project highlights from Skystone Construction LLC and request a free estimate for roofing and remodeling in Oklahoma City.",
    },
    "/blog": {
      title: `Construction Blog | ${BRAND}`,
      description:
        "Read roofing and remodeling tips from Skystone Construction LLC, helping Oklahoma property owners make smarter repair and upgrade decisions.",
    },
  };

  if (staticRoutes[p]) {
    return {
      title: staticRoutes[p].title,
      description: normalizeDescription(staticRoutes[p].description),
    };
  }

  const serviceMap: Record<string, SEOData> = {
    "roof-replacement": {
      title: `Roof Replacement | ${BRAND}`,
      description:
        "Get full roof replacement services in Oklahoma City with Skystone Construction LLC. Durable systems, expert installation, and free estimates.",
    },
    "roof-repair": {
      title: `Roof Repair Services | ${BRAND}`,
      description:
        "Need roof repairs in Oklahoma City? Skystone Construction LLC fixes leaks and storm damage fast with quality workmanship and free estimates.",
    },
    "roof-inspection": {
      title: `Roof Inspections | ${BRAND}`,
      description:
        "Book a professional roof inspection with Skystone Construction LLC. We identify issues early and provide clear next-step recommendations.",
    },
    "deck-construction": {
      title: `Deck Construction | ${BRAND}`,
      description:
        "Build or upgrade your outdoor living space with custom deck construction by Skystone Construction LLC in the Oklahoma City metro area.",
    },
    "pergola-construction": {
      title: `Pergola Construction | ${BRAND}`,
      description:
        "Add comfort and style with custom pergola construction from Skystone Construction LLC. Serving Oklahoma City and nearby locations.",
    },
    "kitchen-bath-remodeling": {
      title: `Kitchen Bath Remodels | ${BRAND}`,
      description:
        "Transform kitchens and bathrooms with Skystone Construction LLC. High-quality remodeling services for Oklahoma City homes and businesses.",
    },
    "floor-installation": {
      title: `Floor Installation | ${BRAND}`,
      description:
        "Professional floor installation by Skystone Construction LLC for residential and commercial spaces across the Oklahoma City service area.",
    },
    "siding-and-painting": {
      title: `Siding and Painting | ${BRAND}`,
      description:
        "Upgrade curb appeal with siding and painting services from Skystone Construction LLC. Interior and exterior options with free estimates.",
    },
  };

  const serviceMatch = p.match(/^\/services\/(.+)$/);
  if (serviceMatch && serviceMap[serviceMatch[1]]) {
    return {
      title: serviceMap[serviceMatch[1]].title,
      description: normalizeDescription(serviceMap[serviceMatch[1]].description),
    };
  }

  const locationMap: Record<string, SEOData> = {
    "oklahoma-city": {
      title: `Oklahoma City Service | ${BRAND}`,
      description:
        "Skystone Construction LLC provides roofing and remodeling services in Oklahoma City with free estimates for residential and commercial clients.",
    },
    edmond: {
      title: `Edmond Contractors | ${BRAND}`,
      description:
        "Need roofing or remodeling in Edmond, OK? Skystone Construction LLC delivers reliable construction services with quality-first workmanship.",
    },
    norman: {
      title: `Norman Construction | ${BRAND}`,
      description:
        "Skystone Construction LLC serves Norman with roofing, remodeling, painting, and exterior upgrades backed by free project estimates.",
    },
    yukon: {
      title: `Yukon Construction Team | ${BRAND}`,
      description:
        "Get trusted roofing and remodeling support in Yukon from Skystone Construction LLC. Residential and commercial services available.",
    },
    bethany: {
      title: `Bethany Services | ${BRAND}`,
      description:
        "Skystone Construction LLC offers roofing, flooring, remodeling, and painting services in Bethany with practical planning and quality execution.",
    },
    moore: {
      title: `Moore Roofing Experts | ${BRAND}`,
      description:
        "From roof repairs to remodeling, Skystone Construction LLC serves Moore, OK with dependable craftsmanship and free estimate support.",
    },
    "midwest-city": {
      title: `Midwest City Service | ${BRAND}`,
      description:
        "Skystone Construction LLC provides roofing and remodeling in Midwest City with clear communication, premium workmanship, and free estimates.",
    },
    "del-city": {
      title: `Del City Contractors | ${BRAND}`,
      description:
        "Skystone Construction LLC serves Del City with roofing, siding, painting, and renovation services for homes and commercial properties.",
    },
    mustang: {
      title: `Mustang Construction | ${BRAND}`,
      description:
        "Upgrade your Mustang property with roofing and remodeling services from Skystone Construction LLC. Free estimates available.",
    },
    "warr-acres": {
      title: `Warr Acres Services | ${BRAND}`,
      description:
        "Skystone Construction LLC delivers roofing and remodeling in Warr Acres with quality craftsmanship and customer-first project support.",
    },
    "nichols-hills": {
      title: `Nichols Hills Service | ${BRAND}`,
      description:
        "Premium roofing and remodeling solutions in Nichols Hills from Skystone Construction LLC, tailored for high-quality property upgrades.",
    },
    "the-village": {
      title: `The Village Services | ${BRAND}`,
      description:
        "Skystone Construction LLC provides roofing and remodeling in The Village with reliable timelines, professional service, and free estimates.",
    },
    choctaw: {
      title: `Choctaw Contractors | ${BRAND}`,
      description:
        "Skystone Construction LLC supports Choctaw properties with roofing, remodeling, and exterior upgrades built for long-term performance.",
    },
  };

  const locationMatch = p.match(/^\/locations\/(.+)$/);
  if (locationMatch && locationMap[locationMatch[1]]) {
    return {
      title: locationMap[locationMatch[1]].title,
      description: normalizeDescription(locationMap[locationMatch[1]].description),
    };
  }

  const blogMap: Record<string, SEOData> = {
    "roof-repair-vs-replacement-guide": {
      title: `Repair or Replace Roof | ${BRAND}`,
      description:
        "Understand the key signs that determine whether roof repair or replacement is best for your Oklahoma property and long-term budget.",
    },
    "kitchen-remodel-planning-checklist": {
      title: `Kitchen Remodel Checklist | ${BRAND}`,
      description:
        "Use this kitchen remodeling checklist to plan scope, budget, materials, and schedule before your next construction project starts.",
    },
    "exterior-paint-and-siding-longevity": {
      title: `Siding and Paint Guide | ${BRAND}`,
      description:
        "Learn how siding and exterior paint upgrades protect your property from weather exposure while improving curb appeal and value.",
    },
  };

  const blogMatch = p.match(/^\/blog\/(.+)$/);
  if (blogMatch && blogMap[blogMatch[1]]) {
    return {
      title: blogMap[blogMatch[1]].title,
      description: normalizeDescription(blogMap[blogMatch[1]].description),
    };
  }

  return {
    title: `Oklahoma Construction | ${BRAND}`,
    description: normalizeDescription(
      `Skystone Construction LLC serves Oklahoma City with roofing, remodeling, flooring, decks, pergolas, siding, and painting. Call ${PHONE}.`,
    ),
  };
}

export default async function handler(req: Request, context: Context) {
  const url = new URL(req.url);
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) return response;

  const seo = getSEOData(url.pathname);
  const origin = url.origin;
  const ogImage = `${origin}${OG_IMAGE}`;
  const canonicalUrl = `${DOMAIN}${url.pathname.replace(/\/$/, "") || "/"}`;

  const metaTags = `
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    <meta name="twitter:image" content="${ogImage}" />
  `;

  let html = await response.text();
  html = html.replace(/<title>.*?<\/title>/g, "");
  html = html.replace(/<meta\s+name="description"[^>]*>/g, "");
  html = html.replace(/<meta\s+property="og:[^"]*"[^>]*>/g, "");
  html = html.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/g, "");
  html = html.replace(/<link\s+rel="canonical"[^>]*>/g, "");
  html = html.replace("</head>", `${metaTags}\n</head>`);

  return new Response(html, { status: response.status, headers: response.headers });
}

export const config = { path: "/*" };