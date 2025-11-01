import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy - GST Calculator India | Data Protection & Privacy",
  description: "Privacy policy for GST Calculator India. Learn how we protect your data, what information we collect, and how we ensure your privacy. No data storage, complete privacy.",
  keywords: [
    "privacy policy GST calculator",
    "data protection",
    "GST calculator privacy",
    "no data collection",
  ],
};

export default function Privacy() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                🔒 Your Privacy is Our Priority
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                At GST Calculator India, we believe in complete privacy. We don&apos;t collect, store, or share any of your calculation data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We collect <strong>minimal information</strong> to provide you with the best experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>No Calculation Data:</strong> We do NOT collect, store, or transmit any of your GST calculations. All calculations happen locally in your browser.</li>
                <li><strong>Preferences Only:</strong> We store your preferences (like selected currency and tax type) locally on your device using browser localStorage. This data never leaves your device.</li>
                <li><strong>Analytics:</strong> We may use anonymous analytics to understand how our tool is used (page views, features used), but this data cannot identify you personally.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use information only to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Remember your preferences (currency, tax type) for a better user experience</li>
                <li>Improve our calculator tool based on anonymous usage patterns</li>
                <li>Ensure the tool works correctly on your device</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Data Storage and Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>All calculations happen locally in your browser.</strong> Your data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Never leaves your device</li>
                <li>Is not transmitted to our servers</li>
                <li>Is not stored in any database</li>
                <li>Cannot be accessed by us or any third party</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may use third-party services for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Analytics:</strong> To understand usage patterns (anonymous data only)</li>
                <li><strong>Hosting:</strong> Our website is hosted on secure platforms</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                These services comply with standard privacy practices, but they do not receive any of your calculation data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Cookies and Local Storage
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use browser localStorage (not cookies) to remember:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Your preferred currency (INR or USD)</li>
                <li>Your preferred tax type (GST, IGST, or CGST+SGST)</li>
                <li>Your last used GST rate</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                This data is stored only on your device and can be cleared at any time through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have complete control:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Clear your preferences anytime through browser settings</li>
                <li>Use the calculator without storing any preferences</li>
                <li>No account required, so no personal information is collected</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. We are committed to maintaining your privacy, so any changes will only enhance, not reduce, your privacy protections.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <Link 
                href="/contact" 
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                Visit our Contact Page →
              </Link>
            </div>

            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                ✅ Summary: Your Data is Safe
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We don&apos;t collect your calculations. We don&apos;t store your data. We don&apos;t track you. 
                Use our calculator with complete confidence that your privacy is protected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

