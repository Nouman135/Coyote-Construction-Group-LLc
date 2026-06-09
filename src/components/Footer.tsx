import { Link } from "react-router-dom";
import { Phone, Mail, Clock, ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import { siteConfig } from "@/lib/site-config";

const Footer = () => {
  const { openQuoteForm } = useQuoteForm();

  return (
    <footer className="text-accent-foreground bg-[linear-gradient(180deg,hsl(224_28%_13%)_0%,hsl(224_30%_7%)_100%)]">
      {/* CTA Banner */}
      <div className="bg-[linear-gradient(120deg,hsl(var(--primary))_0%,hsl(198_95%_48%)_100%)] relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container-max px-4 py-12 md:py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground font-bold tracking-tight">
                Start Your Project with a Free Estimate
              </h3>
              <p className="text-primary-foreground/80 text-sm mt-1">
                Roofing, remodeling, painting, and more across the Oklahoma City metro.
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="default"
                size="lg"
                onClick={openQuoteForm}
                className="gap-2 rounded-xl font-bold bg-[hsl(224_30%_14%)] text-white border border-white/25 hover:bg-[hsl(224_30%_10%)] shadow-[0_8px_24px_-12px_hsl(224_40%_5%)]"
              >
                Get Free Estimate <ArrowRight className="h-5 w-5" />
              </Button>
              <a href={`tel:${siteConfig.primaryPhoneRaw}`}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2 rounded-xl font-bold bg-white text-primary hover:bg-white/90"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white p-4">
              <img src={siteConfig.assets.logo} alt={siteConfig.brand} className="h-14 w-auto object-contain" />
            </div>
            <p className="text-accent-foreground/80 text-sm leading-relaxed">
              Skystone Construction LLC provides roofing, decks, pergolas, remodeling, flooring, siding, and painting for residential and commercial properties.
            </p>
            <div className="mt-4 bg-secondary/10 border border-secondary/20 rounded-xl px-4 py-3">
              <p className="text-secondary font-semibold text-sm">
                🎁 {siteConfig.offers.customerDiscount} + {siteConfig.offers.referralReward}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg tracking-tight mb-4 text-accent-foreground/80 font-bold">
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
                    to={link.to}
                    className="footer-link-underline text-accent-foreground/80 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg tracking-tight mb-4 text-accent-foreground/80 font-bold">
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
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg tracking-tight mb-4 text-accent-foreground/80 font-bold">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-accent-foreground/85">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                {siteConfig.serviceHours.weekdays}
              </li>
              <li className="pl-6 text-accent-foreground/80">{siteConfig.serviceHours.saturday}</li>
              <li className="pl-6 text-xs text-accent-foreground/75">{siteConfig.serviceHours.sunday}</li>
            </ul>
            <div className="mt-4 flex items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-accent-foreground/85 hover:text-primary text-xs"
              >
                <Instagram className="h-3.5 w-3.5" />
                Instagram
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-accent-foreground/85 hover:text-primary text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-accent-foreground/85 text-xs">
            © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
          </p>
          <span className="text-accent-foreground/80 text-xs">EIN: {siteConfig.ein}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
