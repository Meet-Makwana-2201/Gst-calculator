import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import GTM from "@/components/GTM";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import NavigationProgress from "@/components/NavigationProgress";
import FeedbackWidget from "@/components/FeedbackWidget";
import { AppProvider } from "@/contexts/AppContext";

import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const monoFont = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0f766e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://onecalculator.online"),
  title: {
    default: "LedgerKit India | Modern GST, EMI, Tax and Finance Calculators",
    template: "%s | LedgerKit India",
  },
  description:
    "Modern finance calculators for India. Calculate GST, EMI, pricing, interest, and business numbers with a cleaner workflow and instant results.",
  keywords: [
    "GST calculator India",
    "EMI calculator India",
    "finance calculator",
    "business calculator",
    "loan calculator",
    "pricing calculator",
    "interest calculator",
    "free online calculator tools",
  ],
  authors: [{ name: "LedgerKit India" }],
  creator: "LedgerKit India",
  publisher: "LedgerKit India",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LedgerKit India",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://onecalculator.online",
    title: "LedgerKit India | Modern GST, EMI, Tax and Finance Calculators",
    description:
      "Modern finance calculators for India. Clean interfaces, instant answers, and zero signup friction.",
    siteName: "LedgerKit India",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "LedgerKit India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LedgerKit India | Modern GST, EMI, Tax and Finance Calculators",
    description:
      "Modern finance calculators for India. Clean interfaces, instant answers, and zero signup friction.",
    images: ["/logo.svg"],
    creator: "@gstcalc_india",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} min-h-screen`}
      >
        <AppProvider>
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LedgerKit India",
              url: "https://onecalculator.online",
              logo: "https://onecalculator.online/logo.svg",
              sameAs: ["https://twitter.com/gstcalc_india"],
            }}
          />
          <GTM />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NV668C3Z"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <NavigationProgress />
          <div className="relative min-h-screen overflow-x-clip">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.22),transparent_36%),radial-gradient(circle_at_85%_0%,rgba(245,158,11,0.20),transparent_28%)]" />
            <Header />
            <div className="relative z-10">{children}</div>
            <Footer />
          </div>
          <FeedbackWidget />
        </AppProvider>
      </body>
    </html>
  );
}
