export const constructionServicesGallery = Array.from({ length: 15 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    src: `/gallery/construction-services-gallery-${number}.jpg`,
    alt: `Trust Contractors Inc construction services project ${index + 1}`,
  };
});
