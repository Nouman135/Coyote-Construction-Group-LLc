"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/lib/services-data";
import { locations } from "@/lib/locations-data";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: "services" },
  { label: "Locations", href: "/locations", dropdown: "locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const { openQuoteForm } = useQuoteForm();
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout>>();
const location = usePathname();

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openDropdown = (id: string) => {
    clearTimeout(hoverTimeout.current);
    setActiveDropdown(id);
  };

  const closeDropdown = () => {
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const mobileMenu = (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[998] md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-card z-[999] md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <img src={siteConfig.assets.logo} alt={siteConfig.brand} className="h-10 w-auto" />
          </Link>
          <button onClick={() => setOpen(false)} className="p-1 text-foreground/90 hover:text-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex flex-col px-4 py-4 gap-1 overflow-y-auto scrollbar-hide h-[calc(100%-72px)]">
          {navLinks.map((link) =>
            link.dropdown === "services" ? (
              <li key={link.href}>
                <div className="flex items-center justify-between py-3">
                <Link href={link.href} onClick={() => setOpen(false)} className="font-heading text-base tracking-tight text-foreground/80 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                  <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="p-1 text-foreground/80">
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {mobileServicesOpen && (
                  <ul className="pl-4 pb-2 space-y-1">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-foreground/90 hover:text-secondary transition-colors">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : link.dropdown === "locations" ? (
              <li key={link.href}>
                <div className="flex items-center justify-between py-3">
                <Link href={link.href} onClick={() => setOpen(false)} className="font-heading text-base tracking-tight text-foreground/80 hover:text-secondary transition-colors">
                    {link.label}
                  </Link>
                  <button onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)} className="p-1 text-foreground/80">
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {mobileLocationsOpen && (
                  <ul className="pl-4 pb-2 space-y-1 scrollbar-hide max-h-60 overflow-y-auto">
                    {locations.map((loc) => (
                      <li key={loc.slug}>
                        <Link href={`/locations/${loc.slug}`} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-foreground/90 hover:text-secondary transition-colors">
                          {loc.name}, {loc.state}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="font-heading text-base tracking-tight text-foreground/80 hover:text-secondary transition-colors block py-3">
                  {link.label}
                </Link>
              </li>
            )
          )}
          <li className="pt-4">
            <Button variant="default" size="sm" className="w-full" onClick={() => { openQuoteForm(); setOpen(false); }}>
              Get Free Estimate
            </Button>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <nav className="sticky top-0 z-[120] bg-white/65 backdrop-blur-xl shadow-[0_10px_35px_-18px_hsl(var(--accent)/0.65)] border-b border-white/35">
        <div className="container-max flex items-center justify-between px-4 py-2.5">
          <Link href="/" className="flex items-center gap-2">
            <img src={siteConfig.assets.logo} alt={siteConfig.brand} className="h-12 w-auto" />
          </Link>
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => openDropdown(link.dropdown!)}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={link.href}
                    className="nav-link-underline font-heading text-base tracking-tight text-foreground/85 hover:text-secondary transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDropdown === link.dropdown ? "rotate-180" : ""}`} />
                  </Link>
                  {activeDropdown === link.dropdown && link.dropdown === "services" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[130]">
                      <div className="w-[720px] bg-white border border-border rounded-lg shadow-2xl p-4">
                        <div className="grid grid-cols-3 gap-x-5 gap-y-1">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                              className="block rounded-lg px-3 py-2 text-[14px] leading-tight text-popover-foreground hover:bg-primary/20 hover:text-secondary transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                              <span className="font-semibold">{s.title}</span>
                          </Link>
                        ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {activeDropdown === link.dropdown && link.dropdown === "locations" && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[130]">
                      <div className="bg-white border border-border rounded-lg shadow-2xl p-4 w-[720px]">
                        <div className="grid grid-cols-3 gap-x-5 gap-y-1">
                        {locations.map((loc) => (
                          <Link
                            key={loc.slug}
                            href={`/locations/${loc.slug}`}
                              className="block rounded-lg px-3 py-2 text-[14px] leading-tight text-popover-foreground hover:bg-primary/20 hover:text-secondary transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                              <span className="font-semibold">{loc.name}</span>
                          </Link>
                        ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link-underline font-heading text-base tracking-tight text-foreground/85 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li className="hidden lg:block">
              <Button variant="default" size="sm" onClick={openQuoteForm} className="shadow-lg">
                Get Free Estimate
              </Button>
            </li>
          </ul>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
      {isMounted && createPortal(mobileMenu, document.body)}
    </>
  );
};

export default Navbar;
