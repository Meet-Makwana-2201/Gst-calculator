import QuickCalculator from "@/components/QuickCalculator"; // 👈 import the new component
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "GST Calculator - Instant GST Calculation Online",
  description: "Calculate GST amounts easily with our simple GST calculator. No login required. Instant results. Accurate GST calculations.",
  keywords: ["GST Calculator", "GST Calculation", "Online GST Calculator", "Instant GST"],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "GST Calculator - Instant GST Calculation Online",
    description: "Calculate GST amounts easily with our simple GST calculator. No login required. Instant results. Accurate GST calculations.",
    url: "https://yourdomain.com",
    siteName: "GST Calculator",
    images: [
      {
        url: "https://yourdomain.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "GST Calculator Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Calculator - Instant GST Calculation Online",
    description: "Calculate GST amounts easily with our simple GST calculator. No login required. Instant results. Accurate GST calculations.",
    images: ["https://yourdomain.com/og-home.jpg"],
    creator: "@your_twitter_username",
  },
};



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Simple GST Calculations
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Calculate GST amounts instantly with our easy-to-use calculator. No sign-up required.
          </p>
          <Link href="/calculator">
            <Button variant="default" size="lg" className="mt-4">
              Get Started →
            </Button>
          </Link>
        </div>

        {/* Calculator Component */}
        <QuickCalculator />
      </section>
    </main>
  );
}
