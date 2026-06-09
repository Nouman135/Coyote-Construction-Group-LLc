import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John D.",
    location: "Location Alpha",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    name: "Jane S.",
    location: "Location Beta",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
  },
  {
    name: "Alex M.",
    location: "Location Delta",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-bold uppercase tracking-widest mb-3"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-tight font-bold"
          >
            What Our <span className="text-gradient-primary">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-card rounded-2xl p-7 border border-border card-hover-lift relative"
            >
              <div className="absolute -top-3 -left-1">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Quote className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="flex gap-1 mb-5 mt-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
