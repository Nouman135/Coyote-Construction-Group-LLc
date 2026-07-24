export interface GalleryImage {
  src: string;
  alt: string;
}

const constructionGalleryPhotos = Array.from({ length: 15 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    src: `/gallery/construction-services-gallery-${number}.jpg`,
    alt: `Fixon Construction project photo ${number}`,
  };
});

const renovationProjectPhotos = Array.from({ length: 10 }, (_, index) => ({
  src: `/gallery/project-${index + 1}.jpg`,
  alt: `Fixon Construction renovation project ${index + 1}`,
}));

const additionalProjectPhotos = Array.from({ length: 11 }, (_, index) => ({
  src: `/gallery/preview/cs-${index + 16}.jpeg`,
  alt: `Fixon Construction remodeling project ${index + 16}`,
}));

export const constructionServicesGallery: GalleryImage[] = [
  ...constructionGalleryPhotos,
  { src: "/services/Roof_Replacement.png", alt: "Fixon Construction roof replacement project" },
  { src: "/services/Roof_Repair.png", alt: "Fixon Construction roof repair project" },
  { src: "/services/Deck_Construction.png", alt: "Fixon Construction deck construction project" },
  { src: "/home-hero-banner.jpeg", alt: "Fixon Construction exterior renovation project" },
];

export const renovationRemodelingGallery: GalleryImage[] = [
  ...renovationProjectPhotos,
  ...additionalProjectPhotos,
  { src: "/services/Kitchen_Bath_Remodeling.png", alt: "Fixon Construction kitchen remodeling project" },
  { src: "/services/Floor_Installation.png", alt: "Fixon Construction flooring installation project" },
  { src: "/services/Painting.png", alt: "Fixon Construction interior painting project" },
  { src: "/services/Siding_Painting.png", alt: "Fixon Construction siding and painting project" },
];
