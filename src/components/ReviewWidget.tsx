"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const DEFAULT_IFRAME_HEIGHT = 720;

const ReviewWidget = () => {
  const [iframeKey, setIframeKey] = useState(0);
  const [iframeHeight, setIframeHeight] = useState(DEFAULT_IFRAME_HEIGHT);

  useEffect(() => {
    const scriptSrc = siteConfig.reputationHub.reviewWidgetScriptSrc;
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${scriptSrc}"]`);

    const mountIframe = () => {
      setIframeKey((current) => current + 1);
    };

    if (existingScript) {
      mountIframe();
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.onload = mountIframe;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!Array.isArray(event.data) || event.data[0] !== "lc.setHeight") {
        return;
      }

      const data = event.data[1];
      if (data?.id !== "lc_reviews_widget" || !data?.height) {
        return;
      }

      setIframeHeight(Number(data.height));
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto w-full"
          style={{ minHeight: iframeHeight }}
        >
          <iframe
            key={iframeKey}
            className="lc_reviews_widget"
            src={siteConfig.reputationHub.reviewWidgetIframeSrc}
            frameBorder="0"
            scrolling="no"
            title="Trust Contractors Inc reviews"
            height={iframeHeight}
            style={{ minWidth: "100%", width: "100%", border: "none" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewWidget;
