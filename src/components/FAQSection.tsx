import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Do you offer free estimates?",
    a: "Yes. Skystone Construction LLC provides free estimates for roofing, remodeling, decks, pergolas, flooring, siding, and painting services.",
  },
  {
    q: "Do you work on commercial and residential properties?",
    a: "Yes. We support both residential and commercial projects across our Oklahoma City service area.",
  },
  {
    q: "Which locations do you serve?",
    a: "We serve Oklahoma City and nearby cities within a 30-mile radius, including Edmond, Norman, Yukon, Bethany, and surrounding communities.",
  },
  {
    q: "Can I request roof inspection only?",
    a: "Absolutely. We provide roof inspections as a standalone service and can recommend repair or replacement if needed.",
  },
  {
    q: "Do you have discounts or referral incentives?",
    a: "Yes. We currently offer a 15% customer discount and a $100 referral reward.",
  },
  {
    q: "What are your business hours?",
    a: "Our office hours are Monday to Friday from 8:00 AM to 5:00 PM and Saturday from 8:00 AM to 1:00 PM.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.04)_100%)]">
      <div className="container-max max-w-3xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-bold uppercase tracking-widest mb-3"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-tight font-bold"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md data-[state=open]:border-primary/20 transition-all"
              >
                <AccordionTrigger className="font-heading text-lg tracking-tight text-foreground hover:no-underline py-5 text-left font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5 text-left">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
