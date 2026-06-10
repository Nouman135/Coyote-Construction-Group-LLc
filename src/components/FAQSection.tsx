"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    q: "Do you offer free estimates?",
    a: "Yes. Trust Contractors Inc offers free in-person estimates. Jean Oliveira personally handles estimates, and estimates are typically completed within 3 days.",
  },
  {
    q: "Which projects do you prioritize?",
    a: "Our priority services are new construction, home additions, and remodeling. We also handle general contracting, roofing, HVAC, plumbing, electrical coordination, carpentry, framing, decks, porches, siding, painting, windows, and doors.",
  },
  {
    q: "Which areas do you serve?",
    a: `We serve Greater Boston communities within about ${siteConfig.serviceRadiusMiles} miles, including Bedford, Lexington, Winchester, Arlington, Belmont, Watertown, Waltham, Woburn, Reading, Wakefield, Lynnfield, North Reading, Andover, North Andover, and Wilmington.`,
  },
  {
    q: "What is your minimum job size?",
    a: `The minimum job size is ${siteConfig.minimumJobSize}. Larger additions and remodeling projects are often a strong fit around ${siteConfig.idealJobSize}.`,
  },
  {
    q: "How quickly do you respond to new inquiries?",
    a: "New inquiries are usually handled immediately, and leads can be sent directly for manual follow-up.",
  },
  {
    q: "Do you offer financing?",
    a: "No. Trust Contractors Inc does not currently offer financing.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.05)_100%)]">
      <div className="container-max max-w-3xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-secondary text-sm font-bold uppercase tracking-widest mb-3"
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
              key={faq.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="bg-card rounded-lg border border-border px-6 data-[state=open]:shadow-md data-[state=open]:border-primary/40 transition-all"
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
