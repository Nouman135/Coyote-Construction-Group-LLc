"use client";

import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, CheckCircle, Heart, Users } from "lucide-react";
import { formattedAddress, serviceAreaLabel, siteConfig } from "@/lib/site-config";
import ScrollToTop from "@/components/ScrollToTop";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <ScrollToTop />
      <main>
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src={siteConfig.assets.aboutHeroImage}
            alt={`${siteConfig.brand} project work`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(220_30%_6%/.88)_0%,hsl(22_78%_46%/.24)_100%)]" />
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight font-extrabold">
                About {siteConfig.brand}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                Restoration-informed construction across {serviceAreaLabel}.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 tracking-tight font-extrabold">
                Our Story
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                {siteConfig.brand} provides remodeling, roofing, new construction, renovations, and general contracting to homeowners and property owners across the Dallas–Fort Worth metroplex.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our restoration background makes us better builders. We understand how homes fail, how water and storms damage structures, and how to rebuild properly — giving clients a stronger construction partner for high-value projects.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Led by CEO {siteConfig.ownerName}, our team of {siteConfig.employeeCount} professionals focuses on remodeling, roofing, and new construction for projects starting at {siteConfig.minimumJobSize}, with ideal projects around {siteConfig.idealJobSize}.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container-max">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground text-center mb-12 tracking-tight font-extrabold">
              What Sets Us Apart
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: CheckCircle, title: "Quality First", desc: "All work is completed with careful execution and detail-focused craftsmanship." },
                { icon: Users, title: "Sales Team Support", desc: "Dedicated sales reps handle estimates and keep expectations clear from day one." },
                { icon: Award, title: "Restoration Expertise", desc: "Real restoration experience that informs every roofing and construction project." },
                { icon: Heart, title: "Local Commitment", desc: `Serving ${serviceAreaLabel} with reliability and pride in the work.` },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bento-card text-center"
                >
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl text-foreground mb-2 tracking-tight line-clamp-2 font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bento-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl text-foreground tracking-tight font-bold">Our Mission</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Deliver dependable remodeling, roofing, and new construction solutions that improve properties, protect budgets, and keep clients informed from estimate through completion.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bento-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl text-foreground tracking-tight font-bold">Our Vision</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Be the trusted name for remodeling, roofing, and new construction across North Richland Hills and the DFW metroplex.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container-max max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 tracking-tight font-extrabold">
                Our Promise
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We provide free virtual estimates, transparent project scopes, and high standards from start to finish.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Whether you need a remodel, roof replacement, new construction, renovation, or general contracting, your project gets the same quality commitment.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Visit us at {formattedAddress}, or call {siteConfig.primaryPhoneDisplay} to schedule your free estimate.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
