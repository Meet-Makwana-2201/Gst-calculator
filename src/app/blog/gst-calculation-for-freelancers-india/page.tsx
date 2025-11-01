export const metadata = {
  title: "GST Calculation for Freelancers in India: Complete Guide 2025 | GST Blog",
  description: "Complete guide to GST for freelancers in India. Learn about GST registration, calculation, invoicing, and filing. Essential tips for freelancers working with Indian and international clients.",
  keywords: [
    "GST for freelancers",
    "GST freelancer India",
    "freelancer GST registration",
    "GST calculation freelancers",
    "freelancer GST invoice",
    "GST compliance freelancers",
  ],
};

export default function BlogPost() {
  return (
    <main className="flex flex-col min-h-screen">
      <article className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400">
              Freelancers
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">8 min read</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">January 15, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            GST Calculation for Freelancers in India: Complete Guide 2025
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about GST registration, calculation, and compliance as a freelancer in India.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
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

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Do Freelancers Need GST Registration?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As a freelancer in India, you need to register for GST if your annual aggregate turnover 
              exceeds <strong>₹20 lakhs</strong> (or ₹10 lakhs if you're located in special category states 
              like Himachal Pradesh, Uttarakhand, or North-Eastern states).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Even if your turnover is below this threshold, GST registration is still beneficial because:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>It allows you to claim Input Tax Credit (ITC) on business expenses</li>
              <li>Many clients prefer working with GST-registered freelancers</li>
              <li>It adds credibility and professionalism to your business</li>
              <li>You can issue proper tax invoices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How to Calculate GST as a Freelancer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Most freelance services fall under the <strong>18% GST rate</strong> category. Here's how to calculate GST:
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

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can use our free <a href="/calculator" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">GST Calculator</a> to 
              instantly calculate GST amounts for any invoice amount.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              GST on International Clients
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When providing services to clients outside India:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Export of Services:</strong> If your client is outside India, the services are considered exports and are typically <strong>zero-rated</strong> (0% GST)</li>
              <li><strong>Documentation Required:</strong> You need to maintain proper export documentation and may need to file forms like GSTR-1</li>
              <li><strong>Currency:</strong> You can receive payments in foreign currency (USD, EUR, etc.) and convert using the exchange rate on the date of transaction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Creating GST Invoices as a Freelancer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A proper GST invoice must include:
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-4">
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ Invoice number (sequential)</li>
                <li>✓ Date of invoice</li>
                <li>✓ Your name, address, and GSTIN</li>
                <li>✓ Client's name, address, and GSTIN (if registered)</li>
                <li>✓ Description of services</li>
                <li>✓ Taxable amount</li>
                <li>✓ GST rate and amount</li>
                <li>✓ Total amount payable</li>
              </ul>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our <a href="/calculator" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Print Invoice</a> feature 
              helps you create professional GST invoices quickly.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              GST Filing for Freelancers
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As a GST-registered freelancer, you need to file:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>GSTR-1:</strong> Monthly or quarterly return for outward supplies (invoices issued)</li>
              <li><strong>GSTR-3B:</strong> Monthly summary return with tax payment</li>
              <li><strong>Annual Return (GSTR-9):</strong> Annual reconciliation return</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Use our calculator to prepare your invoices with accurate GST amounts before filing.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Tips for Freelancers
            </h2>
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
          </section>

          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Ready to Calculate GST?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Use our free GST calculator to instantly calculate GST amounts for your freelance invoices. 
              No registration required, works on all devices.
            </p>
            <a
              href="/calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all hover-lift"
            >
              Use GST Calculator
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}

