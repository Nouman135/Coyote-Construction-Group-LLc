import { Link } from "react-router-dom";
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
      className="relative -mt-px section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.05)_100%)]"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-secondary text-sm font-bold uppercase tracking-widest mb-3"
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-tight font-bold"
          >
            Construction, Additions, and Remodeling
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            New construction, additions, remodeling, general contracting, roofing, carpentry, exterior work, and trade coordination across Greater Boston.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center items-stretch gap-7">
            {services.map((service, i) => {
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex-none basis-full sm:basis-[calc(50%-14px)] lg:basis-[calc(33.333%-19px)] max-w-[420px] h-full flex"
                >
                  <div className="group relative rounded-lg overflow-hidden w-full h-full flex flex-col card-hover-lift bg-card border border-border shadow-[0_16px_40px_-28px_hsl(var(--accent)/0.8)]">
                    <Link to={`/services/${service.slug}`} className="relative aspect-[4/3] w-full block">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(0_0%_0%/0.06)_0%,hsl(0_0%_0%/0.78)_100%)]" />

                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
                          {service.price}
                        </span>
                      </div>

                      <div className="relative z-10 flex flex-col justify-end h-full p-6">
                        <h3 className="font-heading text-2xl text-white mb-1 tracking-tight font-bold">
                          {service.title}
                        </h3>
                        <p className="text-white/90 text-sm">{service.subtitle}</p>
                      </div>
                    </Link>

                    <div className="mt-auto p-5 bg-card border-t border-border flex items-center justify-between">
                      <p className="text-muted-foreground text-sm line-clamp-2">{service.subtitle}</p>
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all"
                      >
                        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" onClick={openQuoteForm} className="gap-2">
            Get Free Estimate <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
