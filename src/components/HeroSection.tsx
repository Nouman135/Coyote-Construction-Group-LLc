"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck, Sparkles, Star, Hammer, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import GhlFormEmbed from "@/components/GhlFormEmbed";
import { LeadConnectorEmbedRedirect } from "@/components/LeadConnectorEmbedRedirect";
import { serviceAreaLabel, siteConfig } from "@/lib/site-config";

const badges = [
  { icon: ShieldCheck, label: "Licensed & insured" },
  { icon: Star, label: "Restoration-informed builds" },
  { icon: Sparkles, label: "Free virtual estimates" },
];

const stats = [
  { value: `${siteConfig.employeeCount}`, label: "Team members" },
  { value: `${siteConfig.serviceRadiusMiles}`, label: "Mile service radius" },
  { value: siteConfig.idealJobSize, label: "Ideal project size" },
];

const HeroSection = () => {
  const { openQuoteForm } = useQuoteForm();

  return (
    <section id="home" className="relative min-h-[94vh] flex items-center overflow-hidden">
      <LeadConnectorEmbedRedirect event="form" redirectTo="/book" />
      <img
        src={siteConfig.assets.homeHeroImage}
        alt={`${siteConfig.brand} remodeling, roofing, and new construction`}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,hsl(220_30%_6%/.93)_0%,hsl(220_28%_14%/.86)_52%,hsl(22_78%_46%/.22)_100%)]" />
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="relative z-10 container-max px-4 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="section-badge mb-8 text-white/90 border-white/20 bg-white/10"
              >
                <Hammer className="h-4 w-4" />
                {serviceAreaLabel}
              </motion.div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-[4.25rem] text-white leading-[0.98] mb-6 tracking-tight font-extrabold">
                Remodeling, Roofing &
                <br />
                <span className="text-gradient-primary">New Construction</span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-[3.5rem] text-white/95">Built to Last</span>
              </h1>
              <p className="text-white/85 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                {siteConfig.brand} delivers high-value remodeling, roofing, new construction, renovations, and general contracting across the Dallas–Fort Worth metroplex — backed by real restoration experience.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={openQuoteForm}
                  className="text-base gap-2 px-8 py-6 text-lg rounded-xl hero-glow shadow-[0_16px_40px_-12px_hsl(var(--primary)/0.55)]"
                >
                  Schedule Free Estimate
                </Button>
                <a href={`tel:${siteConfig.primaryPhoneRaw}`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base gap-2 px-8 py-6 text-lg rounded-xl border-2 border-white/25 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                  >
                    <Phone className="h-5 w-5" /> {siteConfig.primaryPhoneDisplay}
                  </Button>
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="glass-card rounded-2xl px-5 py-4 inline-flex items-center gap-3"
              >
                <Users className="h-5 w-5 text-primary shrink-0" />
                <span className="text-white/90 font-medium text-sm">
                  Dedicated sales reps handle estimates · {siteConfig.responseTime.toLowerCase()} · Virtual estimates in 48–72 hours
                </span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="lg:col-span-5"
            id="quote-form"
          >
            <div className="rounded-2xl shadow-2xl bg-card/95 border border-white/20 backdrop-blur-xl p-5 md:p-6 hero-glow">
              <h3 className="font-heading text-2xl text-foreground mb-1 font-bold">Request a Free Estimate</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Free virtual estimates · Typically completed within 48–72 hours
              </p>
              <GhlFormEmbed height={745} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 glass-card rounded-2xl p-6 md:p-8 gradient-border"
        >
          <div className="flex flex-wrap items-center justify-around gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                className="text-center min-w-[120px]"
              >
                <div className="font-heading text-3xl md:text-4xl text-white tracking-tight font-extrabold">
                  {stat.value}
                </div>
                <div className="text-white/75 text-xs font-semibold uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-primary/25 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-white/80 text-xs font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -bottom-px left-0 right-0 h-20 bg-background leading-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-full" preserveAspectRatio="none">
          <path d="M0 48C240 96 520 88 720 52C920 18 1180 8 1440 44V80H0V48Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
