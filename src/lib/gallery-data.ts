export interface GalleryImage {
  src: string;
  alt: string;
}

const brand = "Coyote Construction Group";

const constructionGalleryPhotos = Array.from({ length: 15 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    src: `/gallery/construction-services-gallery-${number}.jpg`,
    alt: `${brand} construction project photo ${number}`,
  };
});

const renovationProjectPhotos = Array.from({ length: 10 }, (_, index) => ({
  src: `/gallery/project-${index + 1}.jpg`,
  alt: `${brand} renovation project ${index + 1}`,
}));

const additionalProjectPhotos = Array.from({ length: 11 }, (_, index) => ({
  src: `/gallery/preview/cs-${index + 16}.jpeg`,
  alt: `${brand} remodeling project ${index + 16}`,
}));

export const constructionServicesGallery: GalleryImage[] = [
  ...constructionGalleryPhotos,
  { src: "/services/Roof_Replacement.png", alt: `${brand} roof replacement project` },
  { src: "/services/Roof_Repair.png", alt: `${brand} roof repair project` },
  { src: "/services/Deck_Construction.png", alt: `${brand} deck construction project` },
  { src: "/home-hero-banner.jpeg", alt: `${brand} exterior renovation project` },
];

export const renovationRemodelingGallery: GalleryImage[] = [
  ...renovationProjectPhotos,
  ...additionalProjectPhotos,
  { src: "/services/Kitchen_Bath_Remodeling.png", alt: `${brand} kitchen remodeling project` },
  { src: "/services/Floor_Installation.png", alt: `${brand} flooring installation project` },
  { src: "/services/Painting.png", alt: `${brand} interior painting project` },
  { src: "/services/Siding_Painting.png", alt: `${brand} siding and painting project` },
];
