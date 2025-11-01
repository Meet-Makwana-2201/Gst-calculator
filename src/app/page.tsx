import QuickCalculator from "@/components/QuickCalculator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeFAQ from "@/components/HomeFAQ";

export const metadata = {
  title: "Free GST Calculator India (2025) | Add & Remove GST Online | Instant Calculation",
  description: "Fast and accurate GST calculator for India. Calculate GST, reverse GST, IGST, CGST, SGST instantly. No login, works on mobile. Simple and fast GST tool. Supports 5%, 12%, 18%, 28% rates with detailed breakdown.",
  keywords: [
    "GST calculator India",
    "calculate GST amount online",
    "GST calculator",
    "GST calculation online India",
    "online GST calculator",
    "GST tax calculator India",
    "free GST calculator",
    "GST calculator 18 percent",
    "GST amount calculator",
    "India GST calculator",
    "reverse GST calculator India",
    "GST calculation formula",
    "GST rate calculator",
    "GST inclusive calculator",
    "GST exclusive calculator",
    "how to calculate GST",
    "GST percentage calculator",
    "instant GST calculation",
    "GST calculator for business",
    "gst calculator india online",
    "how to calculate gst 18%",
    "gst calculator with breakdown",
    "gst calculator mobile friendly",
    "gst for freelancers india",
    "gst calculator excel download",
    "gst billing tools for small business",
    "difference between gst and vat",
  ],
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
    canonical: "https://easy-gst-calculator.netlify.app",
  },
  openGraph: {
    title: "GST Calculator - Instant GST Calculation Online",
    description: "Calculate GST amounts easily with our simple GST calculator. No login required. Instant results. Accurate GST calculations.",
    url: "https://easy-gst-calculator.netlify.app",
    siteName: "GST Calculator",
    images: [
      {
        url: "https://easy-gst-calculator.netlify.app/og-home.jpg",
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
    images: ["https://easy-gst-calculator.netlify.app/og-home.jpg"],
  },
};



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900/20 -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOWZhZmIiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxLjUiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 dark:opacity-10" />

      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20 space-y-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Free • Fast • Accurate
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-gradient">Calculate GST</span>
            <br />
            <span className="text-gray-900 dark:text-gray-100">in Seconds</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            India&apos;s most trusted <strong>GST calculator India online</strong>. Calculate GST and reverse GST instantly with 
            support for all rates. <strong>Mobile-friendly</strong> and works everywhere. No sign-up, no fees, just accurate calculations with detailed breakdown.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/calculator">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all hover-lift rounded-xl"
              >
                <span>Get Started</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all rounded-xl"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">100% Free</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">No Sign-up</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Instant Results</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">All GST Rates</span>
            </div>
          </div>
        </div>

        {/* Calculator Component with modern styling */}
        <div className="w-full max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <QuickCalculator />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 relative z-10 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose Our GST Calculator?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need for accurate GST calculations in one place
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover-lift text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Multi-Tax Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Calculate GST, IGST, CGST, and SGST with detailed breakdown. Understand the <strong>difference between IGST, CGST, SGST</strong>. Perfect for both interstate and intrastate transactions.
              </p>
            </div>

            <div className="p-6 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover-lift text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Multiple Currencies</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Support for Indian Rupees (₹) and US Dollars ($). Perfect for <strong>GST for freelancers in India</strong> working with international clients.
              </p>
            </div>

            <div className="p-6 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover-lift text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get instant, accurate results. No waiting, no loading delays. Calculate GST in real-time as you type.
              </p>
            </div>

            <div className="p-6 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover-lift text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Privacy First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your calculations stay on your device. No data collection, no tracking, complete privacy guaranteed.
              </p>
            </div>

            <div className="p-6 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover-lift text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Mobile Friendly</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Works perfectly on all devices - desktop, tablet, and mobile. Calculate GST on the go!
              </p>
            </div>

            <div className="p-6 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover-lift text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Always Accurate</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Based on official GST formulas and calculations. Verified for accuracy and compliance with Indian tax laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 relative z-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto">
          <HomeFAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-4 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-90 dark:opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxLjUiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Ready to Calculate GST?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of businesses and individuals using our free GST calculator for accurate tax calculations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/calculator">
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-lg font-semibold bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all hover-lift rounded-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Start Calculating Now
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 text-lg font-semibold border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all rounded-xl"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">100% Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Setup in Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
