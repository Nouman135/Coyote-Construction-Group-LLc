"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import { siteConfig } from "@/lib/site-config";
import { constructionServicesGallery, renovationRemodelingGallery } from "@/lib/gallery-data";

export default function GalleryPage() {
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
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
          <div className="container-max space-y-20">
            <div>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl text-foreground tracking-tight font-bold">
                  Construction Services Gallery
                </h2>
                <p className="text-muted-foreground mt-3">{constructionServicesGallery.length} project photos</p>
              </div>
              <GalleryGrid images={constructionServicesGallery} />
            </div>

            <div>
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl text-foreground tracking-tight font-bold">
                  Renovation and Remodeling Gallery
                </h2>
                <p className="text-muted-foreground mt-3">{renovationRemodelingGallery.length} project photos</p>
              </div>
              <GalleryGrid images={renovationRemodelingGallery} />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={openQuoteForm} className="gap-2">
                Request Free Estimate <ArrowRight className="h-5 w-5" />
              </Button>
              <a href={siteConfig.legacyGalleryUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  View Previous Website Gallery <ExternalLink className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
