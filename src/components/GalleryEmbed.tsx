import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";

const GalleryEmbed = () => {
  const { openQuoteForm } = useQuoteForm();

  return (
    <section className="section-padding bg-accent relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="container-max relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-bold uppercase tracking-widest mb-3"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-4 tracking-tight font-bold"
          >
            Our <span className="text-gradient-primary">Work</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center py-20 glass-card rounded-lg"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center h-20 w-20 rounded-lg bg-primary/15 text-secondary mb-6"
          >
            <Camera className="h-10 w-10" />
          </motion.div>
          <h3 className="font-heading text-2xl text-accent-foreground mb-3 tracking-tight font-bold">
            Coming Soon
          </h3>
          <p className="text-accent-foreground/80 max-w-sm text-sm mb-6">
            Project photos are being prepared. Check back soon to see completed construction, remodeling, and exterior projects.
          </p>
          <Button variant="default" onClick={openQuoteForm} className="gap-2 rounded-lg">
            Request Free Estimate <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryEmbed;
