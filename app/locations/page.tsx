"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations } from "@/lib/locations-data";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import LocationMap from "@/components/LocationMap";
import { siteConfig } from "@/lib/site-config";

export default function LocationsPage() {
  const { openQuoteForm } = useQuoteForm();

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <section className="relative h-[42vh] md:h-[52vh] overflow-hidden">
          <img
            src={siteConfig.assets.heroImage}
            alt="Trust Contractors Inc service locations"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(222_62%_12%/.88)_0%,hsl(58_94%_51%/.22)_100%)]" />
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-4 tracking-wide font-bold">
                Service Locations
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                Cities and communities we serve within about {siteConfig.serviceRadiusMiles} miles across Greater Boston.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.05)_100%)]">
          <div className="container-max">
            <div className="max-w-6xl mx-auto mb-16">
              <LocationMap />
            </div>

            <div className="mb-12">
              <h2 className="font-heading text-3xl text-foreground mb-8 tracking-wide font-bold text-center">
                View All Locations
              </h2>
              <div className="flex flex-wrap justify-center items-stretch gap-6 w-full">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.slug}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex-none basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] max-w-[420px]"
                  >
                    <Link
                      href={`/locations/${location.slug}`}
                      className="bg-card rounded-lg border border-border p-6 card-hover-lift flex flex-col justify-between min-h-[200px] shadow-[0_18px_50px_-34px_hsl(var(--accent)/0.8)]"
                    >
                      <div>
                        <MapPin className="h-5 w-5 text-secondary mb-3" />
                        <h3 className="font-heading text-xl text-foreground font-bold">{location.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{location.region}</p>
                        <p className="text-muted-foreground text-sm mt-3 line-clamp-2">{location.description}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-secondary font-semibold text-sm mt-5">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button size="lg" onClick={openQuoteForm} className="gap-2">
                Request Free Estimate <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <Link href="/locations">View All Locations <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
