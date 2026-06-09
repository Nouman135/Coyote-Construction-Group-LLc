"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Clock, DollarSign, ShieldCheck, Users } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed, Bonded, and Insured",
    desc: "Projects are handled by an experienced team with the protections homeowners expect.",
    accent: "primary" as const,
  },
  {
    icon: Award,
    title: "All Work Guaranteed",
    desc: "We stand behind the construction, remodeling, and exterior work we complete.",
    accent: "primary" as const,
  },
  {
    icon: BadgeCheck,
    title: "Free Estimates",
    desc: "Every project starts with a free in-person estimate and practical next-step guidance.",
    accent: "secondary" as const,
  },
  {
    icon: Clock,
    title: "Fast Response",
    desc: "New inquiries are handled quickly, with estimates typically completed within 3 days.",
    accent: "primary" as const,
  },
  {
    icon: DollarSign,
    title: "Budget-Friendly Solutions",
    desc: "Clear scopes and realistic recommendations help keep projects aligned with the budget.",
    accent: "secondary" as const,
  },
  {
    icon: Users,
    title: "Owner-Led Estimates",
    desc: "Jean Oliveira personally handles estimates so expectations are clear from the beginning.",
    accent: "primary" as const,
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
            className="inline-block text-primary text-sm font-bold uppercase tracking-widest mb-3"
          >
            Why Homeowners Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-4 tracking-tight font-bold"
          >
            Over 20 Years of Reliable Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-accent-foreground/80 max-w-2xl mx-auto text-lg"
          >
            {siteConfig.brand} serves Greater Boston homeowners with new construction, additions, remodeling, roofing, and general contracting.
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
              className={`glass-card rounded-lg p-6 md:p-8 card-hover-lift ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`inline-flex items-center justify-center h-14 w-14 rounded-lg mb-5 ${
                reason.accent === "secondary"
                  ? "bg-primary/20 text-primary"
                  : "bg-primary/20 text-primary"
              }`}>
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl text-accent-foreground mb-2 tracking-tight font-bold">{reason.title}</h3>
              <p className="text-accent-foreground/80 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-primary font-bold">
          {siteConfig.offers.customerDiscount}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
