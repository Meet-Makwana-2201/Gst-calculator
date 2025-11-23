import Link from 'next/link';

export const metadata = {
  title: "GST Calculator Excel Download: Free Template & Guide | GST Blog",
  description: "Download free GST calculation Excel templates. Learn how to create your own GST calculator in Excel with formulas, examples, and step-by-step guide.",
  keywords: [
    "easy gst calculator",
    "gstcalc",
    "reverse gst calculator",
    "reverse gst",
    "easy reverse gst",
    "GST calculator Excel",
    "GST Excel template",
    "GST formula Excel",
    "download GST calculator",
    "Excel GST template",
    "GST calculation sheet",
  ],
  alternates: {
    canonical: "/blog/gst-calculator-excel-download",
  },
  openGraph: {
    title: "GST Calculator Excel Download: Free Template & Guide | GST Blog",
    description: "Download free GST calculation Excel templates. Learn how to create your own GST calculator in Excel with formulas, examples, and step-by-step guide.",
    url: "/blog/gst-calculator-excel-download",
    siteName: "GST Calculator",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "GST Calculator Excel Template",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Calculator Excel Download: Free Template & Guide | GST Blog",
    description: "Download free GST calculation Excel templates. Learn how to create your own GST calculator in Excel with formulas, examples, and step-by-step guide.",
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
              Tools & Resources
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">5 min read</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">January 8, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            GST Calculator Excel Download: Free Template & Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Learn how to create and use Excel templates for GST calculation. Download ready-to-use templates and formulas.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              ✅ What You&apos;ll Learn
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• How to create GST calculator formulas in Excel</li>
              <li>• Ready-to-use Excel template formulas</li>
              <li>• How to download GST calculation sheets</li>
              <li>• Tips for maintaining GST records in Excel</li>
            </ul>
          </div>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Use Excel for GST Calculation?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">📊 Bulk Calculations</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Excel is perfect for calculating GST for multiple invoices or items at once.
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">💾 Offline Access</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Work without internet connection and maintain your own records.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📈 Customizable</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Customize formulas and templates to match your specific business needs.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🔢 Advanced Features</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use pivot tables, charts, and advanced Excel functions for analysis.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Excel GST Calculation Formulas
            </h2>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Basic GST Calculation Formula:</h3>
              <div className="space-y-3 text-sm font-mono">
                <div className="p-3 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                  <div className="text-gray-600 dark:text-gray-400 mb-1">Cell A1: Base Amount</div>
                  <div className="text-gray-600 dark:text-gray-400 mb-1">Cell B1: GST Rate (%)</div>
                  <div className="text-indigo-600 dark:text-indigo-400 font-bold mt-2">
                    GST Amount (Cell C1): =A1*B1/100
                  </div>
                  <div className="text-green-600 dark:text-green-400 font-bold mt-2">
                    Total Amount (Cell D1): =A1+C1
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Reverse GST Calculation Formula:</h3>
              <div className="space-y-3 text-sm font-mono">
                <div className="p-3 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                  <div className="text-gray-600 dark:text-gray-400 mb-1">Cell A1: Total Amount (incl. GST)</div>
                  <div className="text-gray-600 dark:text-gray-400 mb-1">Cell B1: GST Rate (%)</div>
                  <div className="text-indigo-600 dark:text-indigo-400 font-bold mt-2">
                    Base Amount (Cell C1): =A1/(1+B1/100)
                  </div>
                  <div className="text-green-600 dark:text-green-400 font-bold mt-2">
                    GST Amount (Cell D1): =A1-C1
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">CGST & SGST Calculation:</h3>
              <div className="space-y-3 text-sm font-mono">
                <div className="p-3 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                  <div className="text-gray-600 dark:text-gray-400 mb-1">Cell A1: Base Amount</div>
                  <div className="text-gray-600 dark:text-gray-400 mb-1">Cell B1: Total GST Rate (%)</div>
                  <div className="text-blue-600 dark:text-blue-400 font-bold mt-2">
                    CGST (Cell C1): =A1*(B1/2)/100
                  </div>
                  <div className="text-purple-600 dark:text-purple-400 font-bold mt-2">
                    SGST (Cell D1): =A1*(B1/2)/100
                  </div>
                  <div className="text-green-600 dark:text-green-400 font-bold mt-2">
                    Total (Cell E1): =A1+C1+D1
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Download GST Excel Sheet
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our online GST calculator allows you to download your calculations directly as Excel/CSV files.
              Simply calculate GST using our tool and click the &quot;Download Sheet&quot; or &quot;Excel&quot; export button.
            </p>

            <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800 mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                📥 Steps to Download:
              </h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Enter your amount and GST rate in our calculator</li>
                <li>Click &quot;Calculate GST&quot; to get results</li>
                <li>Click the &quot;Excel&quot; or &quot;Download Sheet&quot; button</li>
                <li>Your GST calculation will download as a CSV/Excel file</li>
                <li>Open in Excel and customize as needed</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Creating Your Own GST Template
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Step 1: Set Up Columns</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Create columns for: Invoice Number, Date, Description, Base Amount, GST Rate, GST Amount, Total Amount
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Step 2: Add Formulas</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Use the formulas provided above in your Excel sheet. Excel will automatically calculate GST when you enter amounts.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Step 3: Add Formatting</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Format cells for currency, add borders, and create a professional-looking invoice template.
                </p>
              </div>
            </div>
          </section>

          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Try Our Online Calculator + Export
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our free online GST calculator not only calculates GST instantly but also lets you export
              results to Excel/CSV. Perfect for quick calculations and maintaining records!
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

