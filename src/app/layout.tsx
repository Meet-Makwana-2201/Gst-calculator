import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import FeedbackWidget from "@/components/FeedbackWidget";
import { AppProvider } from "@/contexts/AppContext";
import NavigationProgress from "@/components/NavigationProgress";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://onecalculator.online'),
  title: {
    default: "OneCalculator: Free GST, EMI, & Math Calculators Online",
    template: "%s | OneCalculator - Free Financial Tools",
  },
  description: "India's most trusted calculator suite. Free tools for GST, Home Loan EMI, Discounts, Profit margins, and Interest calculations. Privacy-focused & Instant.",
  keywords: [
    "financial calculator",
    "GST india",
    "EMI calculator",
    "discount calculator",
    "free online tools",
    "GST calculator",
    "calculate GST",
    "reverse GST calculator",
    "GST tax calculator",
    "India tax calculator",
    "online GST calculator",
    "free GST tool",
    "GST rates",
    "IGST calculator",
    "CGST calculator",
    "SGST calculator",
    "home loan calculator",
    "profit loss calculator",
    "percentage calculator",
    "compound interest calculator",
    "simple interest calculator"
  ],
  authors: [{ name: "OneCalculator" }],
  creator: "OneCalculator",
  publisher: "OneCalculator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.svg'],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'OneCalculator',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://onecalculator.online',
    title: 'OneCalculator: Free GST, EMI, & Math Calculators Online',
    description: 'India\'s most trusted calculator suite. Free tools for GST, Home Loan EMI, Discounts, Profit margins, and Interest calculations.',
    siteName: 'OneCalculator',
    images: [
      {
        url: '/logo.svg',
        width: 512,
        height: 512,
        alt: 'OneCalculator Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneCalculator: Free GST, EMI, & Math Calculators Online',
    description: 'India\'s most trusted calculator suite. Free tools for GST, Home Loan EMI, Discounts, Profit margins, and Interest calculations.',
    images: ['/logo.svg'],
    creator: '@gstcalc_india',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'OneCalculator',
            url: 'https://onecalculator.online',
            logo: 'https://onecalculator.online/logo.svg',
            sameAs: [
              'https://twitter.com/gstcalc_india',
            ],
          }} />
          <GTM />
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NV668C3Z"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
          <NavigationProgress />
          <Header />
          {children}
          <Footer />
          <FeedbackWidget />
        </AppProvider>
      </body>
    </html>
  );
}
