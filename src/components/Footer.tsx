import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-white">GST Calculator</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              India&apos;s most trusted free GST calculator. Fast, accurate, and easy to use for businesses and individuals.
            </p>
            {/* Social Links - Placeholder for future use */}
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" aria-label="Social media">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tax & Business */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Tax & Business</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/calculators/gst" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  GST Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/discount" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Discount Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/profit-loss" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Profit & Loss Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Finance & Math */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Finance & Math</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/calculators/emi" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/percentage" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Percentage Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/simple-interest" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Simple Interest Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/compound-interest" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Compound Interest Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              Made with <span className="text-red-500">❤️</span> by <span className="font-semibold text-gray-300">Meet</span> | © {new Date().getFullYear()} | All rights reserved
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Free & Secure</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
