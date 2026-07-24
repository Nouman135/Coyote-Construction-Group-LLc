"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck, Sparkles, Star, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import GhlFormEmbed from "@/components/GhlFormEmbed";
import { LeadConnectorEmbedRedirect } from "@/components/LeadConnectorEmbedRedirect";
import { siteConfig } from "@/lib/site-config";

const badges = [
  { icon: ShieldCheck, label: "Licensed & insured" },
  { icon: Star, label: "Quality craftsmanship" },
  { icon: Sparkles, label: "Free in-person estimates" },
];

const stats = [
  { value: "10+", label: "Years serving Hartford area" },
  { value: "50", label: "Mile service radius" },
  { value: "$10K+", label: "Ideal project size" },
];

const HeroSection = () => {
  const { openQuoteForm } = useQuoteForm();

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <LeadConnectorEmbedRedirect event="form" redirectTo="/book" />
      <img
        src={siteConfig.assets.homeHeroImage}
        alt={`${siteConfig.brand} roofing and remodeling services`}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,hsl(222_35%_8%/.92)_0%,hsl(222_35%_14%/.84)_55%,hsl(24_95%_53%/.18)_100%)]" />
      <div className="absolute inset-0 gradient-mesh opacity-40" />

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
                Hartford Area Roofing & Remodeling
              </motion.div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] text-white leading-[0.95] mb-6 tracking-tight font-extrabold">
                Build With
                <br />
                <span className="text-gradient-primary">Confidence</span>
              </h1>
              <p className="text-white/85 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                {siteConfig.brand} delivers roofing, kitchen and bathroom remodels, basement finishing, renovations, and general contracting across Hartford and surrounding Connecticut communities.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={openQuoteForm}
                  className="text-base gap-2 px-8 py-6 text-lg rounded-xl shadow-[0_16px_40px_-12px_hsl(var(--primary)/0.55)]"
                >
                  Request Free Estimate
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
                <span className="text-white/90 font-medium text-sm">
                  {siteConfig.ownerName}, {siteConfig.ownerTitle}, personally handles in-person estimates.
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
            <div className="rounded-2xl shadow-2xl bg-card/95 border border-white/20 backdrop-blur-xl p-5 md:p-6">
              <h3 className="font-heading text-2xl text-foreground mb-1 font-bold">Request a Free Estimate</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Free in-person estimates, typically completed by the next business day.
              </p>
              <GhlFormEmbed height={739} />
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
