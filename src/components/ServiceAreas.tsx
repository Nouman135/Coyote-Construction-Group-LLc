"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useQuoteForm } from "@/components/QuoteFormContext";
import { locations } from "@/lib/locations-data";
import { Button } from "@/components/ui/button";
import LocationMap from "@/components/LocationMap";
import { serviceAreaLabel, siteConfig } from "@/lib/site-config";

const ServiceAreas = () => {
  const { openQuoteForm } = useQuoteForm();
  const previewLocations = locations.slice(1, 7);

  return (
    <section
      id="locations"
      className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.04)_100%)]"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-4"
          >
            Coverage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-tight font-extrabold"
          >
            Serving Fort Worth & North Texas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            Service available within about {siteConfig.serviceRadiusMiles} miles across {serviceAreaLabel}.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border shadow-[0_24px_60px_-30px_hsl(var(--accent)/0.35)]"
        >
          <LocationMap />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {previewLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="rounded-2xl border border-border bg-card p-6 shadow-[0_18px_40px_-30px_hsl(var(--accent)/0.7)] card-hover-lift flex items-center gap-3"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">{location.name}</h3>
                <p className="text-sm text-muted-foreground">{location.region}</p>
              </div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Button size="lg" onClick={openQuoteForm} className="gap-2 px-8 rounded-xl">
            Request Free Estimate
          </Button>
          <Link href="/locations">
            <Button variant="outline" size="lg" className="gap-2 px-8 rounded-xl">
              View All Locations <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
