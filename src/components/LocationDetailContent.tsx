"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import { siteConfig } from "@/lib/site-config";
import type { LocationData } from "@/lib/locations-data";

interface Props {
  location: LocationData;
  nearbyCityNames: string[];
}

export default function LocationDetailContent({ location, nearbyCityNames }: Props) {
  const { openQuoteForm } = useQuoteForm();
  const displayedCities = location.cities.length
    ? location.cities.map((city) => city.name)
    : nearbyCityNames;

  return (
    <>
      <section className="bg-[linear-gradient(140deg,hsl(var(--accent))_0%,hsl(var(--accent-dark))_100%)] py-16 md:py-24">
        <div className="container-max px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 text-accent-foreground/90 text-sm mb-3">
              <MapPin className="h-4 w-4" />
              <span>
                {location.state} - {location.region}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-4 tracking-wide font-bold">
              {location.name}
            </h1>
            <p className="text-accent-foreground/90 text-lg md:text-xl max-w-2xl mx-auto">
              {location.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <Link
            href="/locations"
            className="inline-flex items-center gap-1 text-secondary font-semibold text-sm mb-8 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to All Locations
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {location.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 bento-card"
              >
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-foreground font-medium text-sm">{highlight}</span>
              </motion.div>
            ))}
          </div>

          {location.content.map((paragraph) => (
            <p key={paragraph} className="text-foreground/80 leading-relaxed text-base md:text-lg mb-6">
              {paragraph}
            </p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card mt-10"
          >
            <h3 className="font-heading text-xl text-foreground mb-4 tracking-wide font-bold flex items-center gap-2">
              <Navigation className="h-5 w-5 text-secondary" />
              Nearby Areas We Also Serve
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {displayedCities.map((city) => (
                <div
                  key={city}
                  className="text-sm py-2 px-3 bg-muted rounded-lg text-foreground text-center font-medium"
                >
                  {city}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="bento-card text-center mt-10">
            <h3 className="font-heading text-2xl text-foreground mb-3 tracking-wide font-bold">
              Need Help in {location.name}?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Request a free estimate for new construction, additions, remodeling, roofing, or exterior improvements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={openQuoteForm} className="gap-2">
                Request Free Estimate <ArrowRight className="h-5 w-5" />
              </Button>
              <a href={`tel:${siteConfig.primaryPhoneRaw}`}>
                <Button variant="outline" size="lg" className="gap-2">
                  <Phone className="h-4 w-4" /> {siteConfig.primaryPhoneDisplay}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
