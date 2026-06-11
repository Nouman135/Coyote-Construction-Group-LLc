"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import EmbeddedQuoteForm from "@/components/EmbeddedQuoteForm";
import { siteConfig } from "@/lib/site-config";

const badges = [
  { icon: ShieldCheck, label: "Licensed, bonded, and insured" },
  { icon: Star, label: "All work guaranteed" },
  { icon: Sparkles, label: "Free in-person estimates" },
];

const stats = [
  { value: "2003", label: "Serving Greater Boston since" },
  { value: "20", label: "Mile service radius" },
  { value: "$30K", label: "Minimum project size" },
];

const HeroSection = () => {
  const { openQuoteForm } = useQuoteForm();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={siteConfig.assets.homeHeroImage}
        alt={`${siteConfig.brand} construction and remodeling services`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(222_62%_12%/.9)_0%,hsl(222_62%_16%/.8)_52%,hsl(58_94%_51%/.22)_100%)]" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="relative z-10 container-max px-4 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
                className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-md border border-white/45 text-white text-sm font-semibold px-5 py-2 rounded-lg mb-8 shadow-[0_6px_20px_-10px_hsl(0_0%_0%/0.8)]"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                Greater Boston General Contractors
              </motion.div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-6 tracking-tight font-bold">
                Trust Contractors
                <br />
                <span className="text-gradient-primary">Inc</span>
                <br />
                Since 2003
              </h1>
              <p className="text-white/85 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                New construction, home additions, remodeling, roofing, carpentry, siding, painting, and general contracting for homeowners across Greater Boston.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={openQuoteForm}
                  className="text-base gap-2 px-8 py-6 text-lg rounded-lg"
                >
                  Request Free Estimate
                </Button>
                <a href={`tel:${siteConfig.primaryPhoneRaw}`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base gap-2 px-8 py-6 text-lg rounded-lg border-2 border-white/20 text-white bg-white/5 hover:bg-white/10"
                  >
                    <Phone className="h-5 w-5" /> {siteConfig.primaryPhoneDisplay}
                  </Button>
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="glass-card rounded-lg px-5 py-3 inline-flex items-center gap-3"
              >
                <span className="text-white/90 font-semibold text-sm">
                  Jean Oliveira personally handles estimates and responds quickly.
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
            <div className="rounded-lg shadow-2xl bg-card/95 border border-white/20 backdrop-blur-md p-4">
              <h3 className="font-heading text-2xl text-foreground mb-1 font-bold">Request a Free Estimate</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Free in-person estimates with typical turnaround in 3 days.
              </p>
              <EmbeddedQuoteForm height={588} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 glass-card rounded-lg p-6 gradient-border"
        >
          <div className="flex flex-wrap items-center justify-around gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl text-white tracking-wide font-bold">
                  {stat.value}
                </div>
                <div className="text-white/80 text-xs font-medium uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 icon-readable-dark" />
                </div>
                <span className="text-white/80 text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -bottom-px left-0 right-0 h-16 bg-background leading-none">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-full" preserveAspectRatio="none">
          <path d="M0 38C220 90 520 88 720 46C920 6 1230 2 1440 38V64H0V38Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
