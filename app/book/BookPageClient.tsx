"use client";

import Script from "next/script";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LeadConnectorEmbedRedirect } from "@/components/LeadConnectorEmbedRedirect";
import { siteConfig } from "@/lib/site-config";

const BOOKING_WIDGET_ID = "JKO8uHIt0sLkXD0iDdNy";
const BOOKING_WIDGET_URL = `https://link.adssurveys.com/widget/booking/${BOOKING_WIDGET_ID}`;

export default function BookPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <LeadConnectorEmbedRedirect event="booking" redirectTo="/thank-you" />
      <TopBar />
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-accent text-accent-foreground">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(222_62%_12%/.94)_0%,hsl(58_94%_51%/.22)_100%)]" />
          <div className="container-max relative px-4 py-16 md:px-8 lg:px-16 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Appointment Booking
              </p>
              <h1 className="font-heading text-4xl font-bold tracking-wide text-white md:text-5xl lg:text-6xl">
                Schedule Your Estimate
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/82 md:text-lg">
                Choose a convenient time to speak with {siteConfig.brand} about your project.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_18px_45px_-30px_hsl(var(--accent)/0.65)]">
              <iframe
                src={BOOKING_WIDGET_URL}
                id={`${BOOKING_WIDGET_ID}_1782260846160`}
                title="Trust Contractors appointment booking calendar"
                className="block min-h-[760px] w-full border-0"
                scrolling="no"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script src={siteConfig.gohighlevel.inlineFormEmbedScriptSrc} strategy="afterInteractive" />
    </div>
  );
}
