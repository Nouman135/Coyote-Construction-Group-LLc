"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

const ReviewWidget = () => {
  return (
    <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.05)_100%)]">
      <Script src={siteConfig.reputationHub.reviewWidgetScriptSrc} strategy="afterInteractive" />
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <iframe
            className="lc_reviews_widget"
            src={siteConfig.reputationHub.reviewWidgetIframeSrc}
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%" }}
            title="Trust Contractors Inc reviews"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewWidget;
