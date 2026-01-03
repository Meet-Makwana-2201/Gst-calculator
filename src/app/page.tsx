import QuickCalculator from "@/components/QuickCalculator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeFAQ from "@/components/HomeFAQ";
import JsonLd from "@/components/JsonLd";
import { blogPosts } from "@/lib/blog-data";
import Image from "next/image";
import RelatedTools from "@/components/landing/RelatedTools";

export const metadata = {
  title: "All-in-One Financial Calculator Suite | Free GST, EMI & Math Tools",
  description: "India's most trusted calculator platform. Free tools for GST, Home Loan EMI, Discounts, Profit margins, Interest calculations & more. Privacy-focused, instant results, no login required.",
  keywords: [
    "financial calculator",
    "calculator suite",
    "GST india",
    "EMI calculator",
    "discount calculator",
    "free online tools",
    "easy gst calculator",
    "gstcalc",
    "reverse gst calculator",
    "reverse gst",
    "easy reverse gst",
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
  alternates: {
    canonical: "https://onecalculator.online/",
  },
  openGraph: {
    title: "All-in-One Financial Calculator Suite | OneCalculator",
    description: "India's most trusted calculator platform. Free tools for GST, EMI, Discounts, Profit margins & more. Privacy-focused, instant results.",
    url: "/",
    siteName: "OneCalculator",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "OneCalculator Platform Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All-in-One Financial Calculator Suite | OneCalculator",
    description: "India's most trusted calculator platform. Free tools for GST, EMI, Discounts, Profit margins & more. Privacy-focused, instant results.",
    images: ["/logo.svg"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://onecalculator.online/#organization",
        "name": "OneCalculator",
        "url": "https://onecalculator.online",
        "logo": "https://onecalculator.online/logo.svg",
        "sameAs": []
      },
      {
        "@type": "SoftwareApplication",
        "name": "OneCalculator - Financial Calculator Suite",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1250"
        }
      }
    ]
  };

  return (
    <main className="flex flex-col min-h-screen relative overflow-hidden">
      <JsonLd data={jsonLd} />

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-900/20 -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOWZhZmIiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxLjUiLz48Y2lyY2xlIGN4PSI0NSIgY3k9IjQ1IiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 dark:opacity-10" />

      <section className="flex-1 w-full max-w-7xl mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content - Left Side */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free • Fast • Accurate
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              <span className="text-gradient">All-in-One</span>
              <br />
              <span className="text-gray-900 dark:text-gray-100">Financial Calculator Suite</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From GST to EMI, solve every math problem in seconds. India&apos;s most trusted calculator platform with <strong>free tools for business and personal finance</strong>. No sign-up, no fees, just accurate calculations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href="/calculators/gst">
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
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
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
            </div>
          </div>

          {/* Calculator Component - Right Side */}
          <div className="w-full max-w-xl mx-auto lg:ml-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <QuickCalculator />
          </div>
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

      {/* Latest Blog Posts Section */}
      <section className="py-16 md:py-24 px-4 relative z-10 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Latest Updates & Guides
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest GST news, rates, and calculation guides.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                  {post.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog">
              <Button variant="outline" className="px-8 py-2">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Sections */}
      <section className="py-16 md:py-24 px-4 relative z-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl space-y-16">

          {/* Understanding GST */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Understanding GST in India
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              <p>
                The <strong>Goods and Services Tax (GST)</strong> is a unified indirect tax system implemented in India on July 1, 2017. It replaced a complex web of multiple indirect taxes such as VAT, Service Tax, Excise Duty, and others. GST is levied on the supply of goods and services and follows a multi-stage, destination-based tax structure.
              </p>
              <p>
                The primary goal of GST is to create a single common market across India, eliminating the cascading effect of taxes (tax on tax) and simplifying compliance for businesses. Whether you are a manufacturer, trader, or service provider, understanding GST is crucial for smooth business operations.
              </p>
            </div>
          </div>

          {/* GST Rate Slabs */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              GST Rate Slabs Explained
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-indigo-600 mb-2">5% Rate</div>
                <p className="text-gray-600 dark:text-gray-300">
                  Applicable to essential household items, food items, and life-saving drugs. Examples: Sugar, Spices, Tea, Coffee.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-indigo-600 mb-2">12% Rate</div>
                <p className="text-gray-600 dark:text-gray-300">
                  Applicable to processed foods and certain electronics. Examples: Butter, Cheese, Mobile Phones.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-indigo-600 mb-2">18% Rate</div>
                <p className="text-gray-600 dark:text-gray-300">
                  The standard rate for most manufactured goods and services. Examples: Hair oil, Soap, Capital goods, IT services.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-indigo-600 mb-2">28% Rate</div>
                <p className="text-gray-600 dark:text-gray-300">
                  Applicable to luxury items and demerit goods. Examples: Automobiles, Air conditioners, Cement, Tobacco.
                </p>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              How to Use Our GST Calculator
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
              <p>
                Our <strong>online GST calculator</strong> is designed for simplicity and accuracy. Here is how you can use it:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Enter Amount:</strong> Input the net price of the goods or service.</li>
                <li><strong>Select GST Rate:</strong> Choose the applicable GST slab (5%, 12%, 18%, or 28%).</li>
                <li><strong>Get Results:</strong> The tool instantly calculates the GST amount and the total gross price.</li>
              </ol>
              <p>
                You can also use the <strong>Reverse GST Calculator</strong> tab if you have the total amount and want to find the base price before tax. This is particularly useful for freelancers and businesses creating invoices from inclusive prices.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 relative z-10 bg-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
              See what our users have to say about our GST tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-indigo-100 mb-6 italic">
                &quot;The best GST calculator I&apos;ve found. The reverse calculation feature is a lifesaver for my freelance invoices.&quot;
              </p>
              <div className="font-bold">Rahul Sharma</div>
              <div className="text-sm text-indigo-300">Freelance Designer</div>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-indigo-100 mb-6 italic">
                &quot;Simple, fast, and accurate. I use it daily for my shop&apos;s billing. Highly recommended!&quot;
              </p>
              <div className="font-bold">Priya Patel</div>
              <div className="text-sm text-indigo-300">Small Business Owner</div>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-indigo-100 mb-6 italic">
                &quot;The blog articles are very helpful. I learned a lot about the composition scheme and saved money on taxes.&quot;
              </p>
              <div className="font-bold">Amit Kumar</div>
              <div className="text-sm text-indigo-300">Restaurant Owner</div>
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

      {/* Related Tools Section */}
      <RelatedTools />

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
              <Link href="/calculators/gst">
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
