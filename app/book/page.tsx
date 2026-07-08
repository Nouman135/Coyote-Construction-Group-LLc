import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Book an Appointment | ${siteConfig.brand}`,
  description:
    "Schedule an appointment with Trust Contractors Inc for construction, remodeling, roofing, carpentry, siding, painting, and general contracting services.",
};

export default function BookPage() {
  return <BookPageClient />;
}
