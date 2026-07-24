import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import ExternalTrackingScript from "@/components/ExternalTrackingScript";
import ReputationReviewScript from "@/components/ReputationReviewScript";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";
import { SiteProviders } from "./providers";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.brand,
  description: siteConfig.seo.defaultDescription,
  icons: {
    icon: [
      { url: siteConfig.assets.favicon, type: "image/png" },
    ],
    apple: siteConfig.assets.favicon,
    shortcut: siteConfig.assets.favicon,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter`}>
        <ReputationReviewScript />
        <ExternalTrackingScript />
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
          <SiteProviders>
            <TooltipProvider>
              <main className="min-h-screen bg-background">{children}</main>
              <Toaster />
            </TooltipProvider>
          </SiteProviders>
        </ThemeProvider>
        <ChatWidgetLoader />
      </body>
    </html>
  );
}