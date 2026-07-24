"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";

const ServicesSection = () => {
  const { openQuoteForm } = useQuoteForm();

  return (
    <section
      id="services"
      className="relative -mt-px section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.04)_100%)]"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-4"
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-tight font-extrabold"
          >
            Roofing, Remodeling & Renovations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Priority services include roofing, kitchen and bathroom remodels, basement finishing, home renovations, and general contracting across the Hartford area.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="h-full"
            >
              <div className="group relative rounded-2xl overflow-hidden h-full flex flex-col card-hover-lift bg-card border border-border shadow-[0_16px_40px_-28px_hsl(var(--accent)/0.8)]">
                <Link href={`/services/${service.slug}`} className="relative aspect-[4/3] w-full block">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(0_0%_0%/0.05)_0%,hsl(222_35%_8%/0.82)_100%)]" />

                  <div className="absolute top-4 left-4 right-4 z-10 flex items-start justify-between gap-2">
                    {service.priority && (
                      <span className="inline-block bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        Priority Service
                      </span>
                    )}
                    <span className="inline-block bg-white/95 text-foreground text-xs font-bold px-3 py-1.5 rounded-full ml-auto">
                      {service.price}
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-col justify-end h-full p-6">
                    <h3 className="font-heading text-2xl text-white mb-1 tracking-tight font-bold">
                      {service.title}
                    </h3>
                    <p className="text-white/85 text-sm">{service.subtitle}</p>
                  </div>
                </Link>

                <div className="mt-auto p-5 bg-card border-t border-border flex items-center justify-between gap-4">
                  <p className="text-muted-foreground text-sm line-clamp-2">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all shrink-0"
                  >
                    Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" onClick={openQuoteForm} className="gap-2 rounded-xl px-8">
            Get Free Estimate <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
