import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Book an Appointment | ${siteConfig.brand}`,
  description:
    `Schedule an appointment with ${siteConfig.brand} for remodeling, roofing, new construction, renovations, and general contracting across the DFW metroplex.`,
};

export default function BookPage() {
  return <BookPageClient />;
}
