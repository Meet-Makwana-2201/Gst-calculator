import Link from 'next/link';

export const metadata = {
  title: "Difference Between GST and VAT: Key Changes Explained | GST Blog",
  description: "Understand the key differences between GST and VAT systems in India. Learn how GST replaced VAT, what changed, and what it means for businesses and consumers.",
  keywords: [
    "easy gst calculator",
    "gstcalc",
    "reverse gst calculator",
    "reverse gst",
    "easy reverse gst",
    "GST vs VAT",
    "difference GST VAT",
    "GST replaced VAT",
    "VAT to GST transition",
    "GST vs VAT India",
    "what is difference between GST and VAT",
  ],
  alternates: {
    canonical: "/blog/difference-between-gst-and-vat",
  },
  openGraph: {
    title: "Difference Between GST and VAT: Key Changes Explained | GST Blog",
    description: "Understand the key differences between GST and VAT systems in India. Learn how GST replaced VAT, what changed, and what it means for businesses and consumers.",
    url: "/blog/difference-between-gst-and-vat",
    siteName: "GST Calculator",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "GST vs VAT Differences",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Difference Between GST and VAT: Key Changes Explained | GST Blog",
    description: "Understand the key differences between GST and VAT systems in India. Learn how GST replaced VAT, what changed, and what it means for businesses and consumers.",
    images: ["/logo.svg"],
  },
};

export default function BlogPost() {
  return (
    <main className="flex flex-col min-h-screen">
      <article className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400">
              GST Basics
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">7 min read</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">January 5, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Difference Between GST and VAT: Key Changes Explained
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Understanding how GST replaced VAT in India and what changed for businesses and consumers.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              🎯 Quick Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              <strong>GST (Goods and Services Tax)</strong> replaced <strong>VAT (Value Added Tax)</strong>
              in India on July 1, 2017. GST is a unified tax system that replaced multiple indirect taxes
              including VAT, service tax, excise duty, and others.
            </p>
          </div>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What Was VAT?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              VAT (Value Added Tax) was a state-level tax levied on goods. It had several limitations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>Applied only to goods, not services</li>
              <li>Different rates in different states (creating confusion)</li>
              <li>Cascading tax effect (tax on tax)</li>
              <li>Multiple taxes applied at different stages</li>
              <li>No uniform tax system across India</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What is GST?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              GST is a comprehensive, destination-based tax levied on the supply of goods and services.
              Key features:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>Applies to both goods and services</li>
              <li>Uniform tax rates across India</li>
              <li>Eliminates cascading tax effect</li>
              <li>Input Tax Credit (ITC) system</li>
              <li>Single tax system replacing multiple taxes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Key Differences: GST vs VAT
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-4">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Aspect</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">VAT</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">GST</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">Scope</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Only goods</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Goods + Services</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">Tax Structure</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">State-level only</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">CGST + SGST (intrastate) or IGST (interstate)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">Tax Rates</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Varied by state</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Uniform across India (5%, 12%, 18%, 28%)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">Input Credit</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Limited</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Seamless across goods and services</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">Cascading Effect</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Present (tax on tax)</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Eliminated</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">Compliance</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Multiple registrations</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Single registration, unified returns</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Benefits of GST Over VAT
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Unified System</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  One tax system replaces multiple taxes (VAT, service tax, excise, etc.), simplifying compliance.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">💰 Better Input Credit</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Seamless credit across goods and services reduces overall tax burden.
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🌐 Interstate Trade</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  IGST system makes interstate transactions simpler and more efficient.
                </p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">📊 Transparency</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Digital invoicing and online returns increase transparency and reduce fraud.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Impact on Businesses
            </h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Positive Impacts:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Reduced compliance burden (single registration instead of multiple)</li>
                <li>Better cash flow due to seamless input tax credit</li>
                <li>Easier interstate trade and expansion</li>
                <li>Lower overall tax burden for most businesses</li>
              </ul>

              <p>
                <strong>Challenges:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Initial adaptation to new system</li>
                <li>Technology requirement for digital compliance</li>
                <li>Training staff on GST procedures</li>
              </ul>
            </div>
          </section>

          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Calculate GST Easily
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Whether you&apos;re new to GST or transitioning from VAT, our free GST calculator helps you
              calculate GST amounts instantly. Supports all GST rates and tax types (CGST, SGST, IGST).
            </p>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all hover-lift"
            >
              Use GST Calculator
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

