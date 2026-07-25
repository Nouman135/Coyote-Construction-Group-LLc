import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Thank You | ${siteConfig.brand}`,
  description:
    `Your appointment with ${siteConfig.brand} has been scheduled. We look forward to speaking with you.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <section className="section-padding">
          <div className="container-max px-4 text-center">
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-10 shadow-sm">
              <CheckCircle className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h1 className="font-heading text-4xl font-extrabold text-foreground md:text-5xl">
                Thank You!
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Your appointment has been scheduled. A member of the {siteConfig.brand} team
                will be in touch soon to confirm your project details.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Back to Home
                </Link>
                <a
                  href={`tel:${siteConfig.primaryPhoneRaw}`}
                  className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Call {siteConfig.primaryPhoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
