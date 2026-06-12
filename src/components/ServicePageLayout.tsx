"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ServiceData } from "@/lib/services-data";
import { useQuoteForm } from "@/components/QuoteFormContext";
import { siteConfig } from "@/lib/site-config";

interface Props {
  service: ServiceData;
}

const ServicePageLayout = ({ service }: Props) => {
  const { openQuoteForm } = useQuoteForm();
  return (
    <>
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(222_62%_12%/.86)_0%,hsl(58_94%_51%/.22)_100%)]" />
        <div className="relative z-10 container-max px-4 pb-10 md:pb-14 w-full">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-2 tracking-wide font-bold">
            {service.title}
          </h1>
          <p className="text-white/80 text-lg">{service.subtitle}</p>
          <span className="inline-block mt-3 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-lg">
            {service.price}
          </span>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.04)_100%)]">
        <div className="container-max grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-foreground/90 text-lg leading-relaxed"
            >
              {service.description}
            </motion.p>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-6 tracking-wide font-bold">
                Our <span className="text-secondary">Process</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.process.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bento-card"
                  >
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm mb-3">
                      {i + 1}
                    </span>
                    <h3 className="font-heading text-xl text-foreground mb-1 tracking-wide font-bold">{p.step}</h3>
                    <p className="text-muted-foreground text-sm">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bento-card">
              <h3 className="font-heading text-2xl text-foreground mb-4 tracking-wide font-bold">
                What's Included
              </h3>
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent rounded-lg p-6 text-accent-foreground">
              <h3 className="font-heading text-2xl mb-2 tracking-wide font-bold">Ready to Start?</h3>
              <p className="text-accent-foreground/80 text-sm mb-4">
                Request your free in-person estimate and get expert guidance for your project goals.
              </p>
              <Button variant="default" className="w-full mb-3 gap-2" onClick={openQuoteForm}>
                Request Free Estimate <ArrowRight className="h-4 w-4" />
              </Button>
              <a href={siteConfig.legacyServicesUrl} target="_blank" rel="noopener noreferrer" className="block mb-3">
                <Button variant="outline" className="w-full gap-2 bg-white text-foreground border-foreground/20 hover:bg-white/90 hover:text-foreground">
                  View All Services <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
              <a href={`tel:${siteConfig.primaryPhoneRaw}`}>
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="h-4 w-4" /> {siteConfig.primaryPhoneDisplay}
                </Button>
              </a>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
              <h3 className="font-heading text-2xl text-foreground mb-2 tracking-wide font-bold">Project Fit</h3>
              <p className="text-foreground/80 text-sm">
                Minimum job size is <strong>{siteConfig.minimumJobSize}</strong>. <strong>{siteConfig.offers.estimate}</strong> are available.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default ServicePageLayout;
