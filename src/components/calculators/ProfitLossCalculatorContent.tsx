import Script from "next/script";
import Link from "next/link";

export default function ProfitLossCalculatorContent() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is a good profit margin for a business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A good profit margin varies by industry. Generally, a net profit margin of 10-20% is considered healthy for most businesses. Retail businesses typically have 2-5% margins, while software companies can achieve 20-30% or higher. Service-based businesses often have higher margins (15-25%) than product-based businesses. Compare your margins with industry benchmarks for accurate assessment."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between gross profit and net profit?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gross profit is revenue minus the cost of goods sold (COGS), showing profit before operating expenses. Net profit is what remains after deducting all expenses including operating costs, taxes, and interest from revenue. For example, if revenue is ₹100,000, COGS is ₹60,000, and operating expenses are ₹25,000: Gross Profit = ₹40,000, Net Profit = ₹15,000."
                }
            },
            {
                "@type": "Question",
                "name": "How do I calculate markup vs margin?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Markup is profit as a percentage of cost: (Selling Price - Cost) / Cost × 100. Margin is profit as a percentage of selling price: (Selling Price - Cost) / Selling Price × 100. Example: Cost ₹100, Selling Price ₹150. Markup = (150-100)/100 × 100 = 50%. Margin = (150-100)/150 × 100 = 33.33%. Markup is always higher than margin for the same transaction. Use our <Link href=\"/calculators/percentage\" className=\"text-indigo-600 hover:underline\">percentage calculator</Link> for complex growth scenarios."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="profit-loss-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        How to Use This Profit & Loss Calculator
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300">
                            Calculate your business profitability and margins with our comprehensive calculator:
                        </p>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li>
                                <strong>Enter Cost Price:</strong> Input the total cost to acquire or produce the product/service, including all expenses.
                            </li>
                            <li>
                                <strong>Set Selling Price:</strong> Enter the price at which you sell the product or service to customers.
                            </li>
                            <li>
                                <strong>View Profit/Loss:</strong> Instantly see whether you made a profit or loss and the exact amount.
                            </li>
                            <li>
                                <strong>Check Profit Margin:</strong> See your profit margin percentage to understand profitability relative to sales.
                            </li>
                            <li>
                                <strong>Calculate Markup:</strong> View the markup percentage to understand pricing relative to cost.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Profit & Loss Formulas
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="space-y-6">
                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Profit Calculation
                                </h3>
                                <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100 mb-2">
                                    Profit = Selling Price - Cost Price
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Example: Selling Price ₹1500, Cost Price ₹1000 → Profit = ₹1500 - ₹1000 = ₹500
                                </p>
                            </div>

                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-red-600">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Loss Calculation
                                </h3>
                                <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100 mb-2">
                                    Loss = Cost Price - Selling Price
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Example: Cost Price ₹1000, Selling Price ₹800 → Loss = ₹1000 - ₹800 = ₹200
                                </p>
                            </div>

                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-indigo-600">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Profit Margin (%)
                                </h3>
                                <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100 mb-2">
                                    Profit Margin = (Profit / Selling Price) × 100
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Example: Profit ₹500, Selling Price ₹1500 → (500/1500) × 100 = 33.33%
                                </p>
                            </div>

                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-purple-600">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Markup (%)
                                </h3>
                                <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100 mb-2">
                                    Markup = (Profit / Cost Price) × 100
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Example: Profit ₹500, Cost Price ₹1000 → (500/1000) × 100 = 50%
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Key Business Metrics
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Break-Even Point
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                    The point where total revenue equals total costs (no profit, no loss). Critical for understanding minimum sales needed to cover expenses.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded">
                                    Break-Even = Fixed Costs / (Price - Variable Cost per Unit)
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Return on Investment (ROI)
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                    Measures the profitability of an investment relative to its cost. Higher ROI indicates better investment performance.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded">
                                    ROI = (Net Profit / Investment Cost) × 100
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Gross Profit Margin
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                    Shows profitability after direct costs but before operating expenses. Indicates pricing power and production efficiency.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded">
                                    Gross Margin = [(Revenue - COGS) / Revenue] × 100
                                </p>
                                <p className="text-xs mt-2 text-gray-500 italic">Don't forget to account for <Link href="/calculators/gst" className="text-indigo-600 hover:underline">GST</Link> in your pricing strategy.</p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Net Profit Margin
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                    Final profitability after all expenses. The ultimate measure of business efficiency and financial health.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded">
                                    Net Margin = (Net Profit / Revenue) × 100
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                What is a good profit margin for a business?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                A good profit margin varies by industry. Generally, a net profit margin of 10-20% is considered healthy for most businesses. Retail businesses typically have 2-5% margins, while software companies can achieve 20-30% or higher. Service-based businesses often have higher margins (15-25%) than product-based businesses. Compare your margins with industry benchmarks for accurate assessment.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                What is the difference between gross profit and net profit?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Gross profit is revenue minus the cost of goods sold (COGS), showing profit before operating expenses. Net profit is what remains after deducting all expenses including operating costs, taxes, and interest from revenue. For example, if revenue is ₹100,000, COGS is ₹60,000, and operating expenses are ₹25,000: Gross Profit = ₹40,000, Net Profit = ₹15,000.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                How do I calculate markup vs margin?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Markup is profit as a percentage of cost: (Selling Price - Cost) / Cost × 100. Margin is profit as a percentage of selling price: (Selling Price - Cost) / Selling Price × 100. Example: Cost ₹100, Selling Price ₹150. Markup = (150-100)/100 × 100 = 50%. Margin = (150-100)/150 × 100 = 33.33%. Markup is always higher than margin for the same transaction.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Business Growth Resources Section */}
                <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                        Business Growth Resources
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 italic">Essential Business Tools:</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/calculators/gst" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> GST Calculator (India)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/calculators/percentage" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> Percentage Growth Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/calculators/discount" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> Discount & Offer Calculator
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 italic">Guides for Entrepreneurs:</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/blog/mastering-gst-calculator" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> Mastering Business Tax Compliance
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/gst-calculation-for-freelancers-india" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> Profit Maximization for Freelancers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
