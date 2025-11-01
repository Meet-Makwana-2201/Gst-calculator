import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from '@/components/GTM';
import FeedbackWidget from "@/components/FeedbackWidget";
import { AppProvider } from "@/contexts/AppContext";
import NavigationProgress from "@/components/NavigationProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Free GST Calculator India (2025) | Add & Remove GST Online",
    template: "%s | GST Calculator India",
  },
  description: "Fast and accurate GST calculator for India. Calculate GST, reverse GST, IGST, CGST, SGST instantly. No login, works on mobile. Simple and fast GST tool. Free online GST calculator with breakdown.",
  keywords: [
    "GST calculator India",
    "GST calculator",
    "calculate GST amount online",
    "GST calculation online India",
    "online GST calculator",
    "GST tax calculator",
    "reverse GST calculator India",
    "GST calculation formula",
    "free GST calculator",
    "GST calculator 18 percent",
    "GST amount calculator",
    "India GST calculator",
    "GST rate calculator",
    "GST inclusive calculator",
    "GST exclusive calculator",
    "GST calculator for business",
    "GST calculator app",
    "how to calculate GST",
    "GST percentage calculator",
  ],
  authors: [{ name: "GST Calculator Team" }],
  creator: "GST Calculator",
  publisher: "GST Calculator",
  metadataBase: new URL("https://easy-gst-calculator.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://easy-gst-calculator.netlify.app",
    siteName: "GST Calculator India",
    title: "GST Calculator India - Free Online GST Calculation Tool",
    description: "Free GST calculator India. Calculate GST amount online instantly. Reverse GST calculator, GST calculation formula. Accurate GST tax calculator.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Calculator India - Free Online GST Calculation Tool",
    description: "Free GST calculator India. Calculate GST amount online instantly. Reverse GST calculator, GST calculation formula.",
  },
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
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code if available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GST Calculator" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
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
