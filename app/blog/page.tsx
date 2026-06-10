"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import { siteConfig } from "@/lib/site-config";

export default function BlogPage() {
  const { openQuoteForm } = useQuoteForm();

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <section className="relative overflow-hidden">
          <img
            src={siteConfig.assets.heroImage}
            alt="Construction tips and blog"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(222_62%_12%/.88)_0%,hsl(58_94%_51%/.22)_100%)]" />
          <div className="relative z-10 flex items-center justify-center h-[40vh] md:h-[50vh] text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-4 tracking-wide font-bold">
                Blog
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                Practical construction and remodeling insights from Trust Contractors Inc.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.05)_100%)]">
          <div className="container-max">
            <div className="flex flex-wrap justify-center items-stretch gap-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-none basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] max-w-[420px] h-full"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group bg-card rounded-lg overflow-hidden border border-border card-hover-lift flex flex-col w-full h-full shadow-[0_20px_50px_-34px_hsl(var(--accent)/0.8)]"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.cardImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {post.date}
                      </div>
                      <h2 className="font-heading text-xl text-foreground mb-2 group-hover:text-secondary transition-colors tracking-wide line-clamp-2 font-bold">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-secondary font-semibold text-sm mt-auto">
                        Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button size="lg" onClick={openQuoteForm} className="gap-2">
                Request Free Estimate <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
