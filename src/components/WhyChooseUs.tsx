"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Clock, DollarSign, ShieldCheck, Users } from "lucide-react";
import { serviceAreaLabel, siteConfig } from "@/lib/site-config";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Restoration-Informed Builds",
    desc: "We understand how homes fail, how storms damage structures, and how to rebuild properly.",
  },
  {
    icon: Award,
    title: "High-Value Projects",
    desc: "We focus on remodeling, roofing, and new construction — not small repair jobs.",
  },
  {
    icon: BadgeCheck,
    title: "Free Virtual Estimates",
    desc: "Every project starts with a free virtual estimate and clear next-step guidance.",
  },
  {
    icon: Clock,
    title: "Same-Day Response",
    desc: "New inquiries receive a same-day response from our dedicated sales team.",
  },
  {
    icon: DollarSign,
    title: "Clear Project Scopes",
    desc: `Transparent recommendations for projects from ${siteConfig.minimumJobSize} to ${siteConfig.idealJobSize}+.`,
  },
  {
    icon: Users,
    title: "Dedicated Sales Team",
    desc: "Experienced sales reps handle estimates and keep expectations clear from day one.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--accent))_0%,hsl(var(--accent-dark))_100%)] relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-4 border-primary/30 bg-primary/15 text-primary"
          >
            Why Property Owners Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-4 tracking-tight font-extrabold"
          >
            Built for High-Value Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-accent-foreground/80 max-w-2xl mx-auto text-lg"
          >
            {siteConfig.brand} serves {serviceAreaLabel} with remodeling, roofing, new construction, renovations, and general contracting backed by real restoration experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 md:p-8 card-hover-lift"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl mb-5 bg-primary/20 text-primary">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl text-accent-foreground mb-2 tracking-tight font-bold">{reason.title}</h3>
              <p className="text-accent-foreground/80 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
