"use client";

import { QuoteFormProvider } from "@/components/QuoteFormContext";

export function SiteProviders({ children }: { children: React.ReactNode }) {
  return <QuoteFormProvider>{children}</QuoteFormProvider>;
}
