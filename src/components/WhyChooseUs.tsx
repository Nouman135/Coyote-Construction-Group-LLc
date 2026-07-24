"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Clock, DollarSign, ShieldCheck, Users } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Projects are handled by an experienced team with the protections homeowners expect.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    desc: "We stand behind the roofing, remodeling, and renovation work we complete.",
  },
  {
    icon: BadgeCheck,
    title: "Free Estimates",
    desc: "Every project starts with a free in-person estimate and practical next-step guidance.",
  },
  {
    icon: Clock,
    title: "Next-Day Estimates",
    desc: "In-person estimates are typically completed by the next business day.",
  },
  {
    icon: DollarSign,
    title: "Clear Project Scopes",
    desc: "Transparent recommendations help keep projects aligned with your budget and goals.",
  },
  {
    icon: Users,
    title: "Owner-Led Service",
    desc: `${siteConfig.ownerName} personally handles estimates so expectations are clear from the beginning.`,
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
            Why Homeowners Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-4 tracking-tight font-extrabold"
          >
            10 Years of Reliable Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-accent-foreground/80 max-w-2xl mx-auto text-lg"
          >
            {siteConfig.brand} serves Hartford-area homeowners with roofing, kitchen and bathroom remodels, basement finishing, renovations, and general contracting.
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
