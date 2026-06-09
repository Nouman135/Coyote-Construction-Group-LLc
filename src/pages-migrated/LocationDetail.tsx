import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations } from "@/lib/locations-data";
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";
import { siteConfig } from "@/lib/site-config";

const LocationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find((l) => l.slug === slug);
  const { openQuoteForm } = useQuoteForm();
  const nearby = locations.filter((l) => l.slug !== location?.slug).slice(0, 6);

  if (!location) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <Navbar />
        <main className="section-padding">
          <div className="container-max text-center py-20">
            <h1 className="font-heading text-4xl text-foreground mb-4 tracking-wide font-bold">Location Not Found</h1>
            <Link to="/locations" className="text-secondary font-semibold hover:underline">
              Back to Locations
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <section className="bg-[linear-gradient(140deg,hsl(var(--accent))_0%,hsl(var(--accent-dark))_100%)] py-16 md:py-24">
          <div className="container-max px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 text-accent-foreground/90 text-sm mb-3">
                <MapPin className="h-4 w-4" />
                <span>{location.state} - {location.region}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-4 tracking-wide font-bold">
                {location.name}
              </h1>
              <p className="text-accent-foreground/90 text-lg md:text-xl max-w-2xl mx-auto">
                {location.description}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max max-w-4xl">
            <Link
              to="/locations"
              className="inline-flex items-center gap-1 text-secondary font-semibold text-sm mb-8 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Back to All Locations
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {location.highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 bento-card"
                >
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{h}</span>
                </motion.div>
              ))}
            </div>

            {location.content.map((p) => (
              <p key={p} className="text-foreground/80 leading-relaxed text-base md:text-lg mb-6">
                {p}
              </p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bento-card mt-10"
            >
              <h3 className="font-heading text-xl text-foreground mb-4 tracking-wide font-bold flex items-center gap-2">
                <Navigation className="h-5 w-5 text-secondary" />
                Nearby Areas We Also Serve
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {(location.cities.length ? location.cities : nearby.map((n) => ({ name: n.name, lat: n.lat, lng: n.lng }))).map((city) => (
                  <div
                    key={city.name}
                    className="text-sm py-2 px-3 bg-muted rounded-lg text-foreground text-center font-medium"
                  >
                    {city.name}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="bento-card text-center mt-10">
              <h3 className="font-heading text-2xl text-foreground mb-3 tracking-wide font-bold">
                Need Help in {location.name}?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Request a free estimate for new construction, additions, remodeling, roofing, or exterior improvements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" onClick={openQuoteForm} className="gap-2">
                  Request Free Estimate <ArrowRight className="h-5 w-5" />
                </Button>
                <a href={`tel:${siteConfig.primaryPhoneRaw}`}>
                  <Button variant="outline" size="lg" className="gap-2">
                    <Phone className="h-4 w-4" /> {siteConfig.primaryPhoneDisplay}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LocationDetail;
