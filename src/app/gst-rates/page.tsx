export const metadata = {
  title: "GST Rates Chart India 2025 | Complete GST Rate List | GST Calculator",
  description: "Complete GST rates chart for India 2025. Find GST rates for all goods and services: 0%, 5%, 12%, 18%, 28%. Updated GST rate list with HSN codes and categories.",
  keywords: [
    "easy gst calculator",
    "gstcalc",
    "reverse gst calculator",
    "reverse gst",
    "easy reverse gst",
    "GST rates India 2025",
    "GST rate chart",
    "GST rates list",
    "HSN code GST rates",
    "GST rates for goods",
    "GST rates for services",
    "complete GST rates",
  ],
  alternates: {
    canonical: "https://onecalculator.online/gst-rates",
  },
  openGraph: {
    title: "GST Rates Chart India 2025 | Complete GST Rate List | GST Calculator",
    description: "Complete GST rates chart for India 2025. Find GST rates for all goods and services: 0%, 5%, 12%, 18%, 28%. Updated GST rate list with HSN codes and categories.",
    url: "/gst-rates",
    siteName: "OneCalculator",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "GST Rates Chart 2025",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Rates Chart India 2025 | Complete GST Rate List | GST Calculator",
    description: "Complete GST rates chart for India 2025. Find GST rates for all goods and services: 0%, 5%, 12%, 18%, 28%. Updated GST rate list with HSN codes and categories.",
    images: ["/logo.svg"],
  },
};

export default function GSTRates() {
  const gstRates = [
    {
      rate: "0%",
      description: "Essential items, fresh food, unprocessed items",
      examples: [
        "Fresh vegetables and fruits",
        "Food grains (rice, wheat, pulses)",
        "Fresh milk",
        "Eggs",
        "Salt",
        "Unbranded bread",
        "Printed books, newspapers",
        "Hindu religious books",
      ],
    },
    {
      rate: "5%",
      description: "Common household items and essential commodities",
      examples: [
        "Apparels up to ₹1000",
        "Restaurant services (non-AC)",
        "Transport services (economy class)",
        "Railway transport (first class, sleeper)",
        "Basic drugs and medicines",
        "Packed food items",
        "Sugar, tea, coffee (except branded)",
        "Edible oil",
      ],
    },
    {
      rate: "12%",
      description: "Processed foods and some consumer goods",
      examples: [
        "Processed foods",
        "Computers and peripherals",
        "Mobile phones (some models)",
        "Restaurant services (AC)",
        "Business class air travel",
        "Work contracts",
        "Medicines (certain categories)",
        "Ghee, butter, cheese",
      ],
    },
    {
      rate: "18%",
      description: "Most goods and services (standard rate)",
      examples: [
        "Most goods and services",
        "Fast food restaurants",
        "Software services",
        "IT services",
        "Hotel accommodation (above ₹7500)",
        "Financial services",
        "Telecom services",
        "Chocolates, ice cream",
        "Hair oil, toothpaste",
        "Most processed foods",
      ],
    },
    {
      rate: "28%",
      description: "Luxury items, sin goods, and high-end products",
      examples: [
        "Luxury cars",
        "Cigarettes and tobacco products",
        "Aerated drinks",
        "5-star hotels",
        "Cinema tickets above ₹500",
        "Paints and varnishes",
        "Cement",
        "Tires and tubes",
        "Some cosmetic products",
        "Casinos and betting",
      ],
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
            GST Rates Chart India 2025
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Complete list of GST rates applicable in India. Find the GST rate for your goods or services quickly.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8">
          {gstRates.map((rateInfo, index) => (
            <div
              key={rateInfo.rate}
              className="p-6 md:p-8 rounded-2xl border-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover-lift transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center font-bold text-2xl ${index === 0 ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
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
                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
            📌 Important Notes:
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li>• GST rates may vary based on HSN (Harmonized System of Nomenclature) codes for goods or SAC (Services Accounting Code) for services.</li>
            <li>• Some items may have different rates based on value, brand, or specific category.</li>
            <li>• Always verify the exact GST rate for your specific product/service using official GST portal or consult a tax professional.</li>
            <li>• GST rates are subject to change based on government notifications.</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/calculator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all hover-lift shadow-lg"
          >
            Calculate GST Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}

