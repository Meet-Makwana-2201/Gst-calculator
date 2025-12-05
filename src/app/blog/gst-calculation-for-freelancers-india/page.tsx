import BlogPostWrapper from '@/components/BlogPostWrapper';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: "GST Calculation for Freelancers in India: Complete Guide 2025 | GST Blog",
  description: "Complete guide to GST for freelancers in India. Learn about GST registration, calculation, invoicing, and filing. Essential tips for freelancers working with Indian and international clients.",
  keywords: [
    "easy gst calculator",
    "gstcalc",
    "reverse gst calculator",
    "reverse gst",
    "easy reverse gst",
    "GST for freelancers",
    "GST freelancer India",
    "freelancer GST registration",
    "GST calculation freelancers",
    "freelancer GST invoice",
    "GST compliance freelancers",
  ],
  alternates: {
    canonical: "/blog/gst-calculation-for-freelancers-india",
  },
  openGraph: {
    title: "GST Calculation for Freelancers in India: Complete Guide 2025 | GST Blog",
    description: "Complete guide to GST for freelancers in India. Learn about GST registration, calculation, invoicing, and filing. Essential tips for freelancers working with Indian and international clients.",
    url: "/blog/gst-calculation-for-freelancers-india",
    siteName: "GST Calculator",
    images: [
      {
        url: "/blog-freelancer-gst.png",
        width: 512,
        height: 512,
        alt: "GST for Freelancers Guide",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Calculation for Freelancers in India: Complete Guide 2025 | GST Blog",
    description: "Complete guide to GST for freelancers in India. Learn about GST registration, calculation, invoicing, and filing. Essential tips for freelancers working with Indian and international clients.",
    images: ["/blog-freelancer-gst.png"],
  },
};

const toc = [
  { id: 'registration', title: 'Do Freelancers Need GST Registration?', level: 2 as const },
  { id: 'calculation', title: 'How to Calculate GST as a Freelancer', level: 2 as const },
  { id: 'international', title: 'GST on International Clients', level: 2 as const },
  { id: 'invoices', title: 'Creating GST Invoices as a Freelancer', level: 2 as const },
  { id: 'filing', title: 'GST Filing for Freelancers', level: 2 as const },
  { id: 'tips', title: 'Tips for Freelancers', level: 2 as const },
];

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "GST Calculation for Freelancers in India: Complete Guide 2025",
    "description": "Complete guide to GST for freelancers in India. Learn about GST registration, calculation, invoicing, and filing.",
    "datePublished": "2025-01-15",
    "author": {
      "@type": "Organization",
      "name": "GST Calculator India"
    },
    "image": "https://onecalculator.online/blog-freelancer-gst.png"
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogPostWrapper
        slug="gst-calculation-for-freelancers-india"
        title="GST Calculation for Freelancers in India: Complete Guide 2025"
        description="Everything you need to know about GST registration, calculation, and compliance as a freelancer in India."
        date="January 15, 2025"
        readTime="8 min read"
        category="Freelancers"
        image="/blog-freelancer-gst.png"
        toc={toc}
      >
        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            🎯 Key Takeaways
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• GST registration is mandatory if your annual turnover exceeds ₹20 lakhs (₹10 lakhs for special category states)</li>
            <li>• Freelancers can use our free GST calculator to calculate GST on invoices</li>
            <li>• Understanding GST helps you quote accurate prices to clients</li>
            <li>• Proper GST invoicing is essential for compliance and getting paid</li>
          </ul>
        </div>

        <h2 id="registration">Do Freelancers Need GST Registration?</h2>
        <p>
          As a freelancer in India, you need to register for GST if your annual aggregate turnover
          exceeds <strong>₹20 lakhs</strong> (or ₹10 lakhs if you&apos;re located in special category states
          like Himachal Pradesh, Uttarakhand, or North-Eastern states).
        </p>
        <p>
          Even if your turnover is below this threshold, GST registration is still beneficial because:
        </p>
        <ul>
          <li>It allows you to claim Input Tax Credit (ITC) on business expenses</li>
          <li>Many clients prefer working with GST-registered freelancers</li>
          <li>It adds credibility and professionalism to your business</li>
          <li>You can issue proper tax invoices</li>
        </ul>

        <h2 id="calculation">How to Calculate GST as a Freelancer</h2>
        <p>
          Most freelance services fall under the <strong>18% GST rate</strong> category. Here&apos;s how to calculate GST:
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Example Calculation:</h3>
          <div className="space-y-2 text-sm font-mono text-gray-700 dark:text-gray-300">
            <div>Service Charge = ₹50,000</div>
            <div>GST Rate = 18%</div>
            <div className="border-t border-gray-300 dark:border-gray-700 pt-2 mt-2">
              <div>GST Amount = ₹50,000 × 18% = ₹9,000</div>
              <div className="font-bold mt-2">Total Invoice Amount = ₹59,000</div>
            </div>
          </div>
        </div>

        <p>
          You can use our free <a href="/calculator" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">GST Calculator</a> to
          instantly calculate GST amounts for any invoice amount.
        </p>

        <h2 id="international">GST on International Clients</h2>
        <p>
          When providing services to clients outside India:
        </p>
        <ul>
          <li><strong>Export of Services:</strong> If your client is outside India, the services are considered exports and are typically <strong>zero-rated</strong> (0% GST)</li>
          <li><strong>Documentation Required:</strong> You need to maintain proper export documentation and may need to file forms like GSTR-1</li>
          <li><strong>Currency:</strong> You can receive payments in foreign currency (USD, EUR, etc.) and convert using the exchange rate on the date of transaction</li>
        </ul>

        <h2 id="invoices">Creating GST Invoices as a Freelancer</h2>
        <p>
          A proper GST invoice must include:
        </p>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-4">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✓ Invoice number (sequential)</li>
            <li>✓ Date of invoice</li>
            <li>✓ Your name, address, and GSTIN</li>
            <li>✓ Client&apos;s name, address, and GSTIN (if registered)</li>
            <li>✓ Description of services</li>
            <li>✓ Taxable amount</li>
            <li>✓ GST rate and amount</li>
            <li>✓ Total amount payable</li>
          </ul>
        </div>
        <p>
          Our <a href="/calculator" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Print Invoice</a> feature
          helps you create professional GST invoices quickly.
        </p>

        <h2 id="filing">GST Filing for Freelancers</h2>
        <p>
          As a GST-registered freelancer, you need to file:
        </p>
        <ul>
          <li><strong>GSTR-1:</strong> Monthly or quarterly return for outward supplies (invoices issued)</li>
          <li><strong>GSTR-3B:</strong> Monthly summary return with tax payment</li>
          <li><strong>Annual Return (GSTR-9):</strong> Annual reconciliation return</li>
        </ul>
        <p>
          Use our calculator to prepare your invoices with accurate GST amounts before filing.
        </p>

        <h2 id="tips">Tips for Freelancers</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">💡 Quote GST-Inclusive Prices</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              When quoting to clients, mention whether your price includes GST or not to avoid confusion.
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">📱 Use Our Mobile Calculator</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Our calculator works great on mobile, so you can calculate GST on the go during client meetings.
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">💰 Track Your Calculations</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Use our billing history feature to keep track of all your GST calculations and invoices.
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">📊 Export for Records</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Export your calculations to CSV or Excel for easy record-keeping and tax filing.
            </p>
          </div>
        </div>
      </BlogPostWrapper >
    </>
  );
}
