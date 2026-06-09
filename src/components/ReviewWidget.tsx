import { useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const ReviewWidget = () => {
  useEffect(() => {
    const existing = document.querySelector(`script[src="${siteConfig.widgets.reviewScriptSrc}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = siteConfig.widgets.reviewScriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.04)_100%)]">
      <div className="container-max">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-bold uppercase tracking-widest mb-3"
          >
            Real Client Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-foreground mb-4 tracking-tight font-bold"
          >
            Trusted by Property Owners
          </motion.h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm p-2 md:p-3 shadow-[0_20px_60px_-30px_hsl(var(--accent)/0.5)]"
        >
          <iframe
            className="lc_reviews_widget"
            src={siteConfig.widgets.reviewIframeSrc}
            frameBorder="0"
            scrolling="no"
            style={{ width: "100%", minWidth: "100%" }}
            title="Skystone Construction reviews"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewWidget;
