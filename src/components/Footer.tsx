"use client";

import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import { formattedAddress, serviceAreaLabel, siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";

const logoClassName = "h-11 w-auto max-w-[240px] object-contain";

const priorityServices = services.filter((s) => s.priority);

const Footer = () => {
  const { openQuoteForm } = useQuoteForm();

  return (
    <footer className="text-accent-foreground bg-[linear-gradient(180deg,hsl(var(--accent))_0%,hsl(var(--accent-dark))_100%)]">
      <div className="bg-[linear-gradient(120deg,hsl(var(--primary))_0%,hsl(32_90%_52%)_100%)] relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-25" />
        <div className="container-max px-4 py-12 md:py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground font-extrabold tracking-tight">
                Start Your Project with a Free Estimate
              </h3>
              <p className="text-primary-foreground/85 text-sm mt-2 max-w-xl">
                Remodeling, roofing, new construction, renovations, and general contracting across {serviceAreaLabel}.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                size="lg"
                onClick={openQuoteForm}
                className="gap-2 rounded-xl font-bold bg-secondary text-secondary-foreground border border-secondary/20 hover:bg-secondary/90"
              >
                Request Estimate <ArrowRight className="h-5 w-5" />
              </Button>
              <a href={`tel:${siteConfig.primaryPhoneRaw}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 rounded-xl font-bold bg-white text-secondary hover:bg-white/90"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4 inline-block rounded-lg overflow-hidden">
              <img
                src={siteConfig.assets.logo}
                alt={siteConfig.brand}
                className={logoClassName}
              />
            </div>
            <p className="text-accent-foreground/80 text-sm leading-relaxed">
              {siteConfig.brand} provides remodeling, roofing, new construction, renovations, and general contracting across the Dallas–Fort Worth metroplex.
            </p>
            <div className="mt-4 bg-primary/10 border border-primary/25 rounded-xl px-4 py-3">
              <p className="text-primary font-semibold text-sm">
                {siteConfig.offers.estimate}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg tracking-tight mb-4 text-accent-foreground/90 font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Services", to: "/services" },
                { label: "Locations", to: "/locations" },
                { label: "Gallery", to: "/gallery" },
                { label: "Blog", to: "/blog" },
                { label: "About", to: "/about" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.to}
                    className="footer-link-underline text-accent-foreground/80 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg tracking-tight mb-4 text-accent-foreground/90 font-bold">
              Priority Services
            </h4>
            <ul className="space-y-2.5 text-sm text-accent-foreground/80">
              {priorityServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="footer-link-underline hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/general-contracting" className="footer-link-underline hover:text-primary transition-colors">
                  General Contracting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg tracking-tight mb-4 text-accent-foreground/90 font-bold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-accent-foreground/85">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.primaryPhoneRaw}`} className="hover:text-primary transition-colors">{siteConfig.primaryPhoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.commercialEmail}`} className="hover:text-primary transition-colors">{siteConfig.commercialEmail}</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                {siteConfig.serviceHours.weekdays}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>{formattedAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-accent-foreground/85 text-xs">
            Copyright {new Date().getFullYear()} {siteConfig.officialName}. All rights reserved.
          </p>
          <span className="text-accent-foreground/80 text-xs">Serving {serviceAreaLabel}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
