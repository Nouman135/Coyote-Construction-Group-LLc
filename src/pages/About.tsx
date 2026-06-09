import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Award, Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src={siteConfig.assets.aboutHeroImage}
            alt="About Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(220_25%_8%/.85)_0%,hsl(198_90%_45%/.35)_100%)]" />
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-4 tracking-wide font-bold">
                About {siteConfig.brand}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                Built on trust, craftsmanship, and reliable service across the Oklahoma City metro area.
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
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 tracking-wide font-bold">
                Our Story
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Skystone Construction LLC was built to deliver dependable roofing and remodeling work without the communication gaps and quality shortcuts clients often face.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our team serves both residential and commercial properties with a practical, detail-focused process from first estimate to final walkthrough.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                We are proud to support Oklahoma City, Edmond, Norman, Yukon, Bethany, and nearby communities with honest recommendations and premium workmanship.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container-max">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground text-center mb-12 tracking-wide font-bold">
              What Sets Us Apart
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: CheckCircle, title: "Quality First", desc: "Every project is completed with clean execution and detail-focused craftsmanship." },
                { icon: Users, title: "Client Focused", desc: "We keep communication clear so you always know the next step." },
                { icon: Award, title: "Professional Team", desc: "Experienced crews for roofing, remodeling, flooring, siding, and painting." },
                { icon: Heart, title: "Local Commitment", desc: "We serve our community with honesty, reliability, and pride in our work." },
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
                  <h3 className="font-heading text-xl text-foreground mb-2 tracking-wide font-bold">{item.title}</h3>
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
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl text-foreground tracking-wide font-bold">Our Mission</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Deliver premium construction solutions that protect and improve every property we touch while making the process simple for clients.
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
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl text-foreground tracking-wide font-bold">Our Vision</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Be the trusted name for roofing and remodeling excellence in the Oklahoma City region.
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
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 tracking-wide font-bold">
                Our Promise
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We provide free estimates, transparent project scopes, and high standards from start to finish.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Whether you need roofing, remodeling, decks, pergolas, flooring, siding, or painting, your project gets the same quality commitment.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Our goal is simple: excellent work, strong communication, and results you can trust.
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
