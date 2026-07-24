"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import { siteConfig } from "@/lib/site-config";

export default function ServicesPage() {
  const { openQuoteForm } = useQuoteForm();

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <section className="relative h-[42vh] md:h-[52vh] overflow-hidden">
          <img
            src={siteConfig.assets.heroImage}
            alt={`${siteConfig.brand} services`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(222_35%_8%/.88)_0%,hsl(24_95%_53%/.22)_100%)]" />
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-5xl md:text-6xl text-white mb-3 tracking-wide font-bold">Services</h1>
              <p className="text-white/80 max-w-2xl mx-auto">
                Roofing, kitchen and bathroom remodels, basement finishing, renovations, and general contracting across the Hartford area.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.05)_100%)]">
          <div className="container-max">
            <div className="flex flex-wrap justify-center items-stretch gap-6 w-full">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex-none basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] max-w-[420px] h-full flex"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative rounded-lg overflow-hidden block card-hover-lift w-full h-full flex flex-col border border-border bg-card shadow-[0_20px_50px_-34px_hsl(var(--accent)/0.8)]"
                  >
                    <div className="relative aspect-[3/2] w-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(0_0%_0%/.08)_0%,hsl(0_0%_0%/.8)_100%)]" />
                      <div className="relative z-10 flex flex-col justify-end h-full p-6">
                        <h2 className="font-heading text-2xl text-white mb-1 tracking-wide font-bold">{service.title}</h2>
                        <p className="text-white/80 text-sm mb-3">{service.subtitle}</p>
                        <span className="inline-flex items-center gap-1 text-secondary font-semibold text-sm">
                          Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <p className="text-muted-foreground text-sm line-clamp-2">{service.subtitle}</p>
                      <span className="inline-flex items-center gap-1 text-secondary font-semibold text-sm">
                        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button size="lg" onClick={openQuoteForm} className="gap-2">
                Request Free Estimate <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Prefer to call?{' '}
              <a href={`tel:${siteConfig.primaryPhoneRaw}`} className="text-secondary font-semibold hover:underline">
                {siteConfig.primaryPhoneDisplay}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
