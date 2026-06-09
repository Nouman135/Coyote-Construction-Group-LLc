import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useQuoteForm } from "@/components/QuoteFormContext";
import { locations } from "@/lib/locations-data";
import { Button } from "@/components/ui/button";
import LocationMap from "@/components/LocationMap";
import { siteConfig } from "@/lib/site-config";

const ServiceAreas = () => {
  const { openQuoteForm } = useQuoteForm();
  const previewLocations = locations.slice(0, 6);

  return (
    <section
      id="locations"
      className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.05)_100%)]"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-bold uppercase tracking-widest mb-3"
          >
            Coverage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-tight font-bold"
          >
            Cities We Serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            Service available within {siteConfig.serviceRadiusMiles} miles of Oklahoma City.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <LocationMap />
        </motion.div>

        <div className="flex flex-wrap justify-center items-stretch gap-6 mt-10">
          {previewLocations.map((location) => (
            <Link
              key={location.slug}
              to={`/locations/${location.slug}`}
              className="flex-none basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] max-w-[420px] h-full rounded-2xl border border-border bg-card p-6 shadow-[0_18px_40px_-30px_hsl(var(--accent)/0.7)] card-hover-lift flex items-center gap-3"
            >
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">{location.name}</h3>
                <p className="text-sm text-muted-foreground">{location.region}</p>
              </div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Button size="lg" onClick={openQuoteForm} className="gap-2 px-8 rounded-xl">
            Get Free Estimate
          </Button>
          <Link to="/locations">
            <Button variant="outline" size="lg" className="gap-2 px-8 rounded-xl">
              View All Locations <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
