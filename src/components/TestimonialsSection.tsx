import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-25" />

      <div className="container-max relative z-10">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-secondary text-sm font-bold uppercase tracking-widest mb-3"
          >
            Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-tight font-bold"
          >
            See Trust Contractors on Google
          </motion.h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Visit the Google Business Profile to review business details and share project feedback.
          </p>
        </div>

        <div className="flex justify-center">
          <a href={siteConfig.googleBusinessProfile} target="_blank" rel="noreferrer">
            <Button className="rounded-lg gap-2">
              Open Google Profile <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
