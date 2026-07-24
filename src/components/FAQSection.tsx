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
    a: `Yes. ${siteConfig.brand} offers free in-person estimates. ${siteConfig.ownerName} personally handles estimates, and they are typically completed by the next business day.`,
  },
  {
    q: "Which services do you prioritize?",
    a: "Our priority services are roofing, kitchen remodeling, and bathroom remodeling. We also handle basement finishing, home renovations, and general contracting.",
  },
  {
    q: "Which areas do you serve?",
    a: `We serve Hartford, CT and surrounding communities within about ${siteConfig.serviceRadiusMiles} miles, including West Hartford, East Hartford, New Britain, Bristol, Manchester, Windsor, Glastonbury, Wethersfield, Farmington, Southington, Middletown, Enfield, Vernon, and Bloomfield.`,
  },
  {
    q: "What is your minimum job size?",
    a: `The minimum job size is ${siteConfig.minimumJobSize}. Ideal projects are typically ${siteConfig.idealJobSize}.`,
  },
  {
    q: "What types of jobs do you not take?",
    a: "We focus on roofing, remodeling, basement finishing, renovations, and general contracting. We do not take smaller jobs or standalone electrical work.",
  },
  {
    q: "Do you offer financing?",
    a: `No. ${siteConfig.brand} does not currently offer financing.`,
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
            className="section-badge mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 tracking-tight font-extrabold"
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
                className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-lg data-[state=open]:border-primary/30 transition-all"
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
