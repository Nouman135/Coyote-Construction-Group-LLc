export const siteConfig = {
  brand: "Coyote Construction Group",
  officialName: "Coyote Construction Group LLC",
  domain: "https://coyoteconstructiongroup.com",
  legacyWebsiteUrl: "https://coyoteconstructiongroup.com",
  ownerName: "Joshua Morrison",
  ownerTitle: "CEO",
  primaryPhoneDisplay: "(682) 200-4762",
  primaryPhoneRaw: "16822004762",
  businessPhoneDisplay: "(682) 200-4762",
  businessPhoneRaw: "16822004762",
  email: "joshua@coyoterestoration.com",
  commercialEmail: "joshua@coyoterestoration.com",
  address: {
    street: "5750 Rufe Snow Dr #100",
    city: "North Richland Hills",
    state: "TX",
    stateFull: "Texas",
    postalCode: "76180",
    country: "US",
  },
  foundedYear: 2025,
  yearsInBusiness: "1 year",
  employeeCount: 10,
  serviceRadiusMiles: 45,
  minimumJobSize: "$10,000",
  idealJobSize: "$100,000",
  businessType: "LLC",
  hasSalesReps: true,
  serviceHours: {
    weekdays: "Mon–Fri: 9 AM–5 PM (estimate appointments)",
    estimates: "Virtual estimates by appointment",
    estimateTurnaround: "Estimates typically completed within 48–72 hours",
  },
  offers: {
    estimate: "Free virtual estimates",
  },
  leadPreference: "Booked directly into your calendar",
  responseTime: "Same-day response to new inquiries",
  seo: {
    defaultDescription:
      "Coyote Construction Group provides remodeling, roofing, new construction, renovations, and general contracting across North Richland Hills, Fort Worth, and the Dallas–Fort Worth metroplex.",
  },
  widgets: {
    chatWidgetId: "6a64d52db257ee9eec0a5b0f",
    chatLoaderSrc: "https://widgets.leadconnectorhq.com/loader.js",
    chatResourcesUrl: "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
  },
  gohighlevel: {
    locationId: "",
    trackingId: "",
    externalTrackingScriptSrc: "https://link.adssurveys.com/js/external-tracking.js",
    quoteFormId: "Main Form",
    inlineFormId: "ff8w398uWNVf4QmDuecq",
    inlineFormUrl: "https://link.adssurveys.com/widget/form/ff8w398uWNVf4QmDuecq",
    inlineFormEmbedScriptSrc: "https://link.adssurveys.com/js/form_embed.js",
    bookingWidgetId: "wmnmUXZSdfQC24kWbmyG",
    bookingWidgetUrl: "https://link.adssurveys.com/widget/booking/wmnmUXZSdfQC24kWbmyG",
    bookingWidgetIframeId: "wmnmUXZSdfQC24kWbmyG_1785002551543",
  },
  reputationHub: {
    reviewWidgetScriptSrc: "",
    reviewWidgetIframeSrc: "",
  },
  googleBusinessProfile:
    "https://www.google.com/search?q=Coyote+Construction+Group&stick=H4sIAAAAAAAA_-NgU1I1qLAwM0k1tzQyNjNMNDQwskixMqgwNTNIMkg0tTRPTTRMMTA0X8Qq6ZxfmV-SquCcn1dcUlSaXJKZn6fgXpRfWgAAUbsh9EUAAAA&hl=en",
  assets: {
    logo: "/coyote-construction-logo.png",
    favicon: "/favicon.png",
    ogImage: "/home-hero-banner.jpeg",
    homeHeroImage: "/home-hero-banner.jpeg",
    heroImage: "/home-hero-banner.jpeg",
    aboutHeroImage: "/gallery/preview/cs-16.jpeg",
  },
};

export const formattedAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.postalCode}`;

export const serviceAreaLabel = `${siteConfig.address.city} & the DFW Metroplex`;
