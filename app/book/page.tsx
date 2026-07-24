import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Book an Appointment | ${siteConfig.brand}`,
  description:
    "Schedule an appointment with Fixon Construction for roofing, kitchen and bathroom remodels, basement finishing, renovations, and general contracting.",
};

export default function BookPage() {
  return <BookPageClient />;
}
