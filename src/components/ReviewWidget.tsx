"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Clock, BadgeCheck } from "lucide-react";
import { serviceAreaLabel, siteConfig } from "@/lib/site-config";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Professional remodeling, roofing, and construction work backed by the standards property owners expect.",
  },
  {
    icon: Star,
    title: "Restoration Experience",
    desc: "Our restoration background makes us better builders — we know how to rebuild structures properly.",
  },
  {
    icon: Clock,
    title: "Same-Day Response",
    desc: "New inquiries receive a same-day response. Virtual estimates are completed within 48–72 hours.",
  },
  {
    icon: BadgeCheck,
    title: "Dedicated Sales Team",
    desc: "Experienced sales reps handle estimates and keep communication clear from the first call.",
  },
];

const ReviewWidget = () => {
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
            Our Commitment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-foreground mb-4 tracking-tight font-extrabold"
          >
            Real Experience. Real Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            {siteConfig.brand} is building its reputation one project at a time across {serviceAreaLabel} with remodeling, roofing, and new construction work property owners can count on.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bento-card text-center card-hover-lift"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-4">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewWidget;
