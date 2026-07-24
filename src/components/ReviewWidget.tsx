"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Clock, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Professional roofing and remodeling work backed by the standards homeowners expect.",
  },
  {
    icon: Star,
    title: "Quality First",
    desc: "Every project is handled with careful planning, clean execution, and strong finish details.",
  },
  {
    icon: Clock,
    title: "Next-Day Estimates",
    desc: "Free in-person estimates are typically completed by the next business day.",
  },
  {
    icon: BadgeCheck,
    title: "Owner Involvement",
    desc: `${siteConfig.ownerName} personally handles estimates and keeps communication direct.`,
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
            Built on Trust & Craftsmanship
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            {siteConfig.brand} is building its reputation one project at a time across the Hartford area with roofing, remodeling, and renovation work homeowners can count on.
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
