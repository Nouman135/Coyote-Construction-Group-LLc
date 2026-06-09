import { motion } from "framer-motion";
import { ShieldCheck, DollarSign, Users, Zap, Award, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Built for Oklahoma Weather",
    desc: "We install and repair with durability in mind for wind, heat, and seasonal storms.",
    accent: "primary" as const,
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Clear scopes, no guesswork, and honest recommendations before work begins.",
    accent: "primary" as const,
  },
  {
    icon: BadgeCheck,
    title: "Free Estimates",
    desc: "Every project starts with a practical assessment and next-step guidance.",
    accent: "secondary" as const,
  },
  {
    icon: Zap,
    title: "Fast Communication",
    desc: "You get timely updates from inspection through final walkthrough.",
    accent: "primary" as const,
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    desc: "We focus on detail and finish quality that protects and elevates your property.",
    accent: "secondary" as const,
  },
  {
    icon: Users,
    title: "Referral Rewards",
    desc: `Ask about our ${siteConfig.offers.referralReward} program when you refer family or friends.`,
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
            Reliable Service, Premium Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-accent-foreground/80 max-w-xl mx-auto text-lg"
          >
            Skystone Construction LLC serves residential and commercial properties across the Oklahoma City metro area.
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
              className={`glass-card rounded-2xl p-6 md:p-8 card-hover-lift ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl mb-5 ${
                reason.accent === "secondary"
                  ? "bg-secondary/20 text-secondary"
                  : "bg-primary/20 text-primary"
              }`}>
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
