import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
    title: "All Calculators | GST Calculator India",
    description: "List of all available calculators including GST Calculator, Reverse GST Calculator, Percentage, Discount, Profit & Loss, Simple Interest, Compound Interest, and EMI Calculator.",
    alternates: {
        canonical: "/calculators",
    },
};

export default function CalculatorsPage() {
    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Financial Calculators
                    </h1>
                    <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-10">
                        Powerful, accurate, and free tools to help you make smarter financial decisions.
                        From GST to investments, we&apos;ve got you covered.
                    </p>
                </div>
            </section>

            {/* Calculators Grid */}
            <section className="container mx-auto px-4 py-16 -mt-20 relative z-20 max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* GST Calculator Card */}
                    <Link href="/calculators/gst" className="group">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:-translate-y-1">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                GST Calculator
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                                Calculate GST, IGST, CGST, and SGST instantly. Includes Reverse GST calculation to find base amount from total.
                            </p>
                            <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-bold">
                                Use Calculator
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Percentage Calculator */}
                    <Link href="/calculators/percentage" className="group">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:-translate-y-1">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl font-bold text-white">%</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                Percentage Calculator
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                                Calculate percentages of numbers easily. Useful for discounts, tips, and simple math calculations.
                            </p>
                            <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold">
                                Use Calculator
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Discount Calculator */}
                    <Link href="/calculators/discount" className="group">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:-translate-y-1">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                Discount Calculator
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                                Find out the final price after discount and how much you save. Perfect for shopping and sales.
                            </p>
                            <div className="flex items-center text-green-600 dark:text-green-400 font-bold">
                                Use Calculator
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Profit & Loss Calculator */}
                    <Link href="/calculators/profit-loss" className="group">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:-translate-y-1">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                Profit & Loss Calculator
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                                Calculate profit or loss percentage and amount based on cost price and selling price.
                            </p>
                            <div className="flex items-center text-orange-600 dark:text-orange-400 font-bold">
                                Use Calculator
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Simple Interest Calculator */}
                    <Link href="/calculators/simple-interest" className="group">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:-translate-y-1">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl font-bold text-white">SI</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                Simple Interest
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                                Calculate simple interest on your principal amount over a period of time.
                            </p>
                            <div className="flex items-center text-teal-600 dark:text-teal-400 font-bold">
                                Use Calculator
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Compound Interest Calculator */}
                    <Link href="/calculators/compound-interest" className="group">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:-translate-y-1">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl font-bold text-white">CI</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                Compound Interest
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                                Calculate compound interest with various compounding frequencies to see your money grow.
                            </p>
                            <div className="flex items-center text-purple-600 dark:text-purple-400 font-bold">
                                Use Calculator
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* EMI Calculator */}
                    <Link href="/calculators/emi" className="group">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:-translate-y-1">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                                EMI Calculator
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                                Calculate monthly EMI for home loans, car loans, or personal loans. Plan your repayment schedule effectively.
                            </p>
                            <div className="flex items-center text-pink-600 dark:text-pink-400 font-bold">
                                Use Calculator
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Why Use Our Calculators?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            We provide simple, accurate, and fast tools to help you with your daily financial calculations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">100% Accurate</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Our calculators use standard financial formulas to ensure precise results every time.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Lightning Fast</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Get instant results as you type. No waiting, no page reloads. Just pure speed.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">Mobile Friendly</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Designed to work perfectly on all devices - phones, tablets, and desktops.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Common questions about our financial tools.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <Card className="border-none shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    Are these calculators free to use?
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Yes, all calculators on this website are completely free to use. There are no hidden charges or subscriptions required.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    How accurate are the results?
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-400">
                                    We use standard mathematical and financial formulas used by banks and financial institutions. However, results are for informational purposes only and should not be considered as professional financial advice.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    Can I use these calculators offline?
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Currently, these calculators require an internet connection to load the page. Once loaded, many of them can function without active data since the calculation happens in your browser.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                <div className="container mx-auto px-4 max-w-4xl text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                        Master Your Finances with Our Tools
                    </h2>
                    <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
                        <p>
                            Financial planning is crucial for achieving your life goals. Whether you are a business owner calculating GST returns, a shopper looking for the best deals, or an investor planning for retirement, having the right tools can make all the difference.
                        </p>
                        <p>
                            Our suite of calculators is designed to simplify complex financial concepts. The <strong>GST Calculator</strong> helps businesses stay compliant with tax laws. The <strong>EMI Calculator</strong> assists in planning loan repayments without straining your budget. The <strong>Compound Interest Calculator</strong> demonstrates the power of long-term investing.
                        </p>
                        <p>
                            We are committed to adding more tools to help you navigate the world of finance with confidence. Bookmark this page and check back often for updates!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
