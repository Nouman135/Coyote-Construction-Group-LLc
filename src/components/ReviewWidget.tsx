"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const ReviewWidget = () => {
  return (
    <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.05)_100%)]">
      <div className="container-max">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-secondary text-sm font-bold uppercase tracking-widest mb-3"
          >
            Google Business Profile
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-foreground mb-4 tracking-tight font-bold"
          >
            Trusted Around Greater Boston
          </motion.h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto rounded-lg border border-border bg-card p-6 md:p-8 shadow-[0_20px_60px_-34px_hsl(var(--accent)/0.45)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center">
            <div>
              <div className="flex items-center gap-2 text-secondary font-bold text-sm mb-2">
                <MapPin className="h-4 w-4" />
                Trust Contractors Inc
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Review Trust Contractors Inc on Google or use the profile to confirm business details for Local Services Ads and local search visibility.
              </p>
            </div>
            <a href={siteConfig.googleBusinessProfile} target="_blank" rel="noreferrer">
              <Button className="rounded-lg gap-2 w-full md:w-auto">
                Open Profile <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewWidget;
