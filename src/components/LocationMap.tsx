"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import { locations } from "@/lib/locations-data";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import "leaflet/dist/leaflet.css";

const mainLocation = locations.find((location) => location.isPrimary) ?? locations[0];
const radiusMeters = siteConfig.serviceRadiusMiles * 1609.34;
const sidebarLocations = locations.filter((location) => !location.isPrimary).slice(0, 9);

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const cityMarkersRef = useRef<Record<string, L.Marker>>({});
  const [activeCity, setActiveCity] = useState<string | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const L = await import("leaflet");

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      if (!mapRef.current) return;

      const map = L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: false,
      }).setView([mainLocation.lat, mainLocation.lng], 10);

      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);

      L.circle([mainLocation.lat, mainLocation.lng], {
        radius: radiusMeters,
        color: "#1F2937",
        fillColor: "#F97316",
        fillOpacity: 0.08,
        weight: 2,
        dashArray: "8 4",
      }).addTo(map);

      const primaryIcon = L.divIcon({
        className: "custom-marker-primary",
        html: `<div style="background:#1F2937;width:32px;height:32px;border-radius:50%;border:3px solid #F97316;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#F97316"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
        </div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const cityIcon = L.divIcon({
        className: "custom-marker-city",
        html: `<div style="background:#1F2937;width:16px;height:16px;border-radius:50%;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.2);"></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });

      L.marker([mainLocation.lat, mainLocation.lng], { icon: primaryIcon })
        .addTo(map)
        .bindPopup(
          `<div style="padding:8px;font-family:sans-serif;">
            <strong style="font-size:14px;">${mainLocation.name}</strong>
            <p style="color:#666;font-size:12px;margin:4px 0 0;">Primary Service Area</p>
          </div>`,
        );

      locations
        .filter((city) => city.slug !== mainLocation.slug)
        .forEach((city) => {
          const marker = L.marker([city.lat, city.lng], { icon: cityIcon })
            .addTo(map)
            .bindPopup(
              `<div style="padding:6px;font-family:sans-serif;">
                <strong style="font-size:13px;">${city.name}</strong>
                <p style="color:#666;font-size:11px;margin:2px 0 0;">${city.region}</p>
              </div>`,
            );
          cityMarkersRef.current[city.name] = marker;
        });
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleCityClick = (cityName: string, lat: number, lng: number) => {
    setActiveCity(activeCity === cityName ? null : cityName);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([lat, lng], 11, { duration: 1 });
      setTimeout(() => {
        cityMarkersRef.current[cityName]?.openPopup();
      }, 800);
    }
  };

  const handleMainClick = () => {
    setActiveCity(null);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([mainLocation.lat, mainLocation.lng], 10, { duration: 1.2 });
    }
  };

  return (
    <div className="rounded-lg overflow-hidden border border-border shadow-lg bg-card">
      <div className="bg-primary px-5 py-3 flex items-center gap-2">
        <MapPin className="h-4 w-4 text-primary-foreground" />
        <span className="font-heading font-bold text-primary-foreground text-sm tracking-wide">
          Service Area - {siteConfig.serviceRadiusMiles} Mile Radius
        </span>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[35%] lg:border-r border-border">
          <button
            onClick={handleMainClick}
            className={`w-full text-left px-5 py-4 flex items-center justify-between border-b border-border transition-all ${
              activeCity === null
                ? "bg-primary/10 border-l-4 border-l-primary"
                : "hover:bg-muted/50 border-l-4 border-l-transparent"
            }`}
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary shrink-0" />
              <div>
                <h4 className={`font-heading font-bold text-sm tracking-wide ${activeCity === null ? "text-secondary" : "text-foreground"}`}>
                  {mainLocation.name}
                </h4>
                <p className="text-muted-foreground text-[11px]">Primary Service Area</p>
              </div>
            </div>
          </button>

          {sidebarLocations.map((city) => (
            <div key={city.name} className="border-b border-border">
              <button
                onClick={() => handleCityClick(city.name, city.lat, city.lng)}
                className={`w-full text-left px-5 py-3 flex items-center justify-between transition-all ${
                  activeCity === city.name
                    ? "bg-primary/10 border-l-4 border-l-primary"
                    : "hover:bg-muted/50 border-l-4 border-l-transparent"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary shrink-0" />
                  <span className={`font-medium text-sm ${activeCity === city.name ? "text-secondary" : "text-foreground"}`}>
                    {city.name}
                  </span>
                </div>
                <ChevronRight
                  className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${
                    activeCity === city.name ? "rotate-90" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeCity === city.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-3">
                      <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                        Roofing, remodeling, and renovation services available in {city.name}.
                      </p>
                      <Link href={`/locations/${city.slug}`}>
                        <Button size="sm" variant="outline" className="w-full text-xs">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-[65%] h-[400px] lg:h-[500px] relative" style={{ zIndex: 0 }}>
          <div ref={mapRef} className="w-full h-full" style={{ zIndex: 0 }} />
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
