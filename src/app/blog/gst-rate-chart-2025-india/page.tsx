import BlogPostWrapper from '@/components/BlogPostWrapper';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: "GST Rate Chart India 2025: Complete List with Examples | GST Blog",
  description: "Complete GST rates chart for India 2025. Find GST rates for all goods and services including HSN codes, examples, and recent updates. Your comprehensive GST rate guide.",
  keywords: [
    "easy gst calculator",
    "gstcalc",
    "reverse gst calculator",
    "reverse gst",
    "easy reverse gst",
    "GST rate chart 2025",
    "GST rates India",
    "GST rates list",
    "HSN code GST rates",
    "GST rates 2025",
    "complete GST rates",
  ],
  alternates: {
    canonical: "https://onecalculator.online/blog/gst-rate-chart-2025-india",
  },
  openGraph: {
    title: "GST Rate Chart India 2025: Complete List with Examples | GST Blog",
    description: "Complete GST rates chart for India 2025. Find GST rates for all goods and services including HSN codes, examples, and recent updates. Your comprehensive GST rate guide.",
    url: "/blog/gst-rate-chart-2025-india",
    siteName: "OneCalculator",
    images: [
      {
        url: "/blog-gst-rates-2025.png",
        width: 512,
        height: 512,
        alt: "GST Rate Chart 2025",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Rate Chart India 2025: Complete List with Examples | GST Blog",
    description: "Complete GST rates chart for India 2025. Find GST rates for all goods and services including HSN codes, examples, and recent updates. Your comprehensive GST rate guide.",
    images: ["/blog-gst-rates-2025.png"],
  },
};

const toc = [
  { id: '0-percent', title: '0% GST Rate', level: 2 as const },
  { id: '5-percent', title: '5% GST Rate', level: 2 as const },
  { id: '12-percent', title: '12% GST Rate', level: 2 as const },
  { id: '18-percent', title: '18% GST Rate', level: 2 as const },
  { id: '28-percent', title: '28% GST Rate', level: 2 as const },
  { id: 'find-rate', title: 'How to Find the Correct GST Rate', level: 2 as const },
  { id: 'special', title: 'Special Categories', level: 2 as const },
];

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "GST Rate Chart India 2025: Complete List with Examples",
    "description": "Complete GST rates chart for India 2025. Find GST rates for all goods and services including HSN codes, examples, and recent updates.",
    "datePublished": "2025-01-10",
    "author": {
      "@type": "Organization",
      "name": "GST Calculator India"
    },
    "image": "https://onecalculator.online/blog-gst-rates-2025.png"
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogPostWrapper
        slug="gst-rate-chart-2025-india"
        title="GST Rate Chart India 2025: Complete List with Examples"
        description="Your comprehensive guide to all GST rates applicable in India in 2025, with examples and explanations."
        date="January 10, 2025"
        readTime="6 min read"
        category="GST Rates"
        image="/blog-gst-rates-2025.png"
        toc={toc}
      >
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

        {
          gstRates.map((rateInfo, index) => {
            const colorClasses = [
              'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
              'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
              'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
              'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400',
              'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
            ];

            const sectionIds = ['0-percent', '5-percent', '12-percent', '18-percent', '28-percent'];

            return (
              <section key={rateInfo.rate} id={sectionIds[index]} className="p-6 rounded-2xl border-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl ${colorClasses[index]}`}>
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
            );
          })
        }

        < h2 id="find-rate" > How to Find the Correct GST Rate</h2 >
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

        <h2 id="special">Special Categories</h2>
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
      </BlogPostWrapper >
    </>
  );
}
