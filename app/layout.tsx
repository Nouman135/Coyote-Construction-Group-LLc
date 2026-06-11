import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import ExternalTrackingScript from "@/components/ExternalTrackingScript";
import { SiteProviders } from "./providers";

export const metadata = {
  title: "Trust Contractors Inc",
  description: "Trust Contractors Inc provides new construction, additions, remodeling, roofing, carpentry, siding, painting, and general contracting across Greater Boston.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter`}>
        <ExternalTrackingScript />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteProviders>
            <TooltipProvider>
              <main className="min-h-screen bg-background">{children}</main>
              <Toaster />
            </TooltipProvider>
          </SiteProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}