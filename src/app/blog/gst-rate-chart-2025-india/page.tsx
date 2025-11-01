import Link from 'next/link';

export const metadata = {
  title: "GST Rate Chart India 2025: Complete List with Examples | GST Blog",
  description: "Complete GST rates chart for India 2025. Find GST rates for all goods and services including HSN codes, examples, and recent updates. Your comprehensive GST rate guide.",
  keywords: [
    "GST rate chart 2025",
    "GST rates India",
    "GST rates list",
    "HSN code GST rates",
    "GST rates 2025",
    "complete GST rates",
  ],
};

export default function BlogPost() {
  const gstRates = [
    {
      rate: "0%",
      description: "Essential items and unprocessed goods",
      examples: ["Fresh vegetables and fruits", "Food grains (rice, wheat)", "Fresh milk and eggs", "Salt", "Unbranded bread"],
      common: true,
    },
    {
      rate: "5%",
      description: "Common household items",
      examples: ["Apparels up to ₹1000", "Restaurant services (non-AC)", "Transport services (economy)", "Basic medicines"],
      common: true,
    },
    {
      rate: "12%",
      description: "Processed foods and electronics",
      examples: ["Processed foods", "Computers and laptops", "Mobile phones (some)", "AC restaurant services"],
      common: true,
    },
    {
      rate: "18%",
      description: "Most goods and services (standard rate)",
      examples: ["Most services", "Fast food", "IT services", "Software services", "Hotel accommodation"],
      common: true,
    },
    {
      rate: "28%",
      description: "Luxury items and sin goods",
      examples: ["Luxury cars", "Cigarettes", "Aerated drinks", "5-star hotels", "Casinos"],
      common: false,
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <article className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400">
              GST Rates
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">6 min read</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">January 10, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            GST Rate Chart India 2025: Complete List with Examples
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your comprehensive guide to all GST rates applicable in India in 2025, with examples and explanations.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              📊 Quick Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              India uses a multi-tier GST structure with rates of 0%, 5%, 12%, 18%, and 28%. 
              The most common rate is 18%, which applies to most goods and services. Understanding 
              which rate applies to your product or service is crucial for accurate invoicing.
            </p>
          </div>

          {gstRates.map((rateInfo, index) => (
            <section key={rateInfo.rate} className="p-6 rounded-2xl border-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <div className="flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl ${
                  index === 0 ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                  index === 1 ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                  index === 2 ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' :
                  index === 3 ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400' :
                  'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {rateInfo.rate}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {rateInfo.rate} GST Rate
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {rateInfo.description}
                  </p>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                      Common Examples:
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {rateInfo.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                          <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How to Find the Correct GST Rate
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Check HSN/SAC Code</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Goods have HSN (Harmonized System of Nomenclature) codes, and services have SAC 
                  (Services Accounting Code). These codes determine the GST rate.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Consult Official GST Portal</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The official GST portal (gst.gov.in) has comprehensive rate lists. Always verify 
                  the rate for your specific product or service.
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">3. Check Recent Notifications</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  GST rates can change through government notifications. Stay updated with the latest 
                  GST rate changes and amendments.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Special Categories
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">📦 Composite Scheme</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Small businesses with turnover up to ₹1.5 crores can opt for the composition scheme 
                  with reduced rates (1-6% depending on business type).
                </p>
              </div>
              <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                <h3 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">🏭 Reverse Charge</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  In reverse charge mechanism, the recipient pays GST instead of the supplier. 
                  Common in certain services and imports.
                </p>
              </div>
            </div>
          </section>

          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Need to Calculate GST?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Use our free GST calculator with all standard rates (5%, 12%, 18%, 28%) and custom rate support. 
              Calculate GST instantly for any amount.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all hover-lift"
              >
                Calculate GST Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/gst-rates"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 rounded-xl font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all"
              >
                View Detailed Chart
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

