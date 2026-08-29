"use client";

import { motion } from "framer-motion";
import { serviceAreaLabel, siteConfig } from "@/lib/site-config";

const ReviewWidget = () => {
  const iframeSrc = siteConfig.reputationHub.reviewWidgetIframeSrc;

  if (!iframeSrc) {
    return null;
  }

  return (
    <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.04)_100%)]">
      <div className="container-max">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-4"
          >
            Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-foreground mb-4 tracking-tight font-extrabold"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Real reviews from homeowners and property owners across {serviceAreaLabel}.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_45px_-30px_hsl(var(--accent)/0.55)]"
        >
          <iframe
            className="lc_reviews_widget"
            src={iframeSrc}
            frameBorder={0}
            scrolling="no"
            title={`${siteConfig.brand} customer reviews`}
            style={{ minWidth: "100%", width: "100%", border: "none", display: "block" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewWidget;
