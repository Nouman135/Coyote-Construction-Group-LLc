import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import { siteConfig } from "@/lib/site-config";
import project1 from "@/assets/gallery/project-1.jpg";
import project2 from "@/assets/gallery/project-2.jpg";
import project3 from "@/assets/gallery/project-3.jpg";
import project4 from "@/assets/gallery/project-4.jpg";
import project5 from "@/assets/gallery/project-5.jpg";
import project6 from "@/assets/gallery/project-6.jpg";
import project7 from "@/assets/gallery/project-7.jpg";
import project8 from "@/assets/gallery/project-8.jpg";
import project9 from "@/assets/gallery/project-9.jpg";
import project10 from "@/assets/gallery/project-10.jpg";

const galleryImages = [
  { src: project1, alt: "Bathroom remodel project" },
  { src: project2, alt: "Interior painting project" },
  { src: project3, alt: "Tiled shower renovation" },
  { src: project4, alt: "Vanity and tile installation" },
  { src: project5, alt: "Bathroom flooring project" },
  { src: project6, alt: "Tile floor installation" },
  { src: project7, alt: "Marble tile installation" },
  { src: project8, alt: "Bathroom tile work in progress" },
  { src: project9, alt: "Marble floor installation" },
  { src: project10, alt: "Full bathroom renovation" },
];

const Gallery = () => {
  const { openQuoteForm } = useQuoteForm();

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <section className="relative overflow-hidden">
          <img
            src={siteConfig.assets.heroImage}
            alt="Trust Contractors Inc gallery hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(222_62%_12%/.88)_0%,hsl(58_94%_51%/.22)_100%)]" />
          <div className="absolute inset-0 gradient-mesh opacity-25" />
          <div className="relative z-10 flex items-center justify-center h-[38vh] md:h-[46vh] text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-4 tracking-wide font-bold">
                Our Gallery
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                Project showcase, renovations, finish work, and exterior upgrades
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.05)_100%)]">
          <div className="container-max">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
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

            <div className="flex justify-center mt-16">
              <Button size="lg" onClick={openQuoteForm} className="gap-2">
                Request Free Estimate <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
