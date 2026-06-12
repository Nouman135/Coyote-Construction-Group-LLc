"use client";

import { motion } from "framer-motion";
import type { GalleryImage } from "@/lib/gallery-data";

interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid = ({ images }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
          className="group relative overflow-hidden rounded-lg bg-muted shadow-lg aspect-square"
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
