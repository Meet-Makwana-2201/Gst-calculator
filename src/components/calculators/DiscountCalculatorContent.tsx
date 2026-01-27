import Script from "next/script";
import Link from "next/link";

export default function DiscountCalculatorContent() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I calculate discount percentage?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To calculate discount percentage, subtract the sale price from the original price, divide by the original price, and multiply by 100. Formula: [(Original Price - Sale Price) / Original Price] × 100. For example, if an item costs ₹1000 and is on sale for ₹800, the discount is [(1000-800)/1000] × 100 = 20%."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between discount and cashback?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A discount reduces the price you pay immediately at purchase (e.g., 20% off means you pay 80% of the original price). Cashback returns money to you after the purchase is complete (e.g., 10% cashback means you get 10% back later). Discounts save money upfront, while cashback provides savings after the transaction."
                }
            },
            {
                "@type": "Question",
                "name": "How do successive discounts work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Successive discounts are applied one after another, not added together. For example, 20% + 10% discount doesn't equal 30% off. First apply 20% discount, then apply 10% to the reduced price. If an item costs ₹1000: after 20% off it's ₹800, then 10% off ₹800 = ₹720 final price (28% total discount, not 30%)."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="discount-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        How to Use This Discount Calculator
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300">
                            Calculate discounts, sale prices, and savings instantly with our easy-to-use calculator:
                        </p>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li>
                                <strong>Enter Original Price:</strong> Input the regular price of the item before any discounts.
                            </li>
                            <li>
                                <strong>Set Discount Percentage:</strong> Enter the discount rate (e.g., 25% off, 50% off).
                            </li>
                            <li>
                                <strong>View Sale Price:</strong> See the final price you&apos;ll pay after the discount is applied.
                            </li>
                            <li>
                                <strong>Check Savings:</strong> Instantly see how much money you&apos;re saving with the discount.
                            </li>
                            <li>
                                <strong>Multiple Discounts:</strong> Calculate successive discounts by applying them one after another.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Discount Calculation Formulas
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="space-y-6">
                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-indigo-600">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Calculate Sale Price
                                </h3>
                                <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100 mb-2">
                                    Sale Price = Original Price × (1 - Discount% / 100)
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Example: ₹2000 with 30% discount → ₹2000 × (1 - 30/100) = ₹2000 × 0.7 = ₹1400
                                </p>
                            </div>

                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-purple-600">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Calculate Discount Amount
                                </h3>
                                <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100 mb-2">
                                    Discount Amount = Original Price × (Discount% / 100)
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Example: ₹5000 with 20% discount → ₹5000 × (20/100) = ₹1000 savings
                                </p>
                            </div>

                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-pink-600">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Find Discount Percentage
                                </h3>
                                <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100 mb-2">
                                    Discount% = [(Original Price - Sale Price) / Original Price] × 100
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Example: Original ₹800, Sale ₹600 → [(800-600)/800] × 100 = 25% off
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Smart Shopping Tips
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Compare Discounts
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Don&apos;t just look at the percentage—calculate the actual savings. A 50% discount on a ₹100 item saves ₹50, while a 10% discount on a ₹1000 item saves ₹100. Always compare final prices, not just discount percentages. Use our <Link href="/calculators/percentage" className="text-indigo-600 hover:underline">Percentage Calculator</Link> for complex math.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Beware of Inflated Prices
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Some retailers inflate original prices before sales. Research the typical market price before assuming a discount is genuine. A 70% discount might not be a good deal if the original price was artificially high.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Stack Discounts Wisely
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    When multiple discounts are available (coupon + sale + cashback), apply them strategically. Percentage discounts are usually applied first, then flat discounts, then cashback. Check the terms to maximize savings.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Consider Total Cost
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Factor in shipping, taxes, and handling fees. A 30% discount with ₹200 shipping might cost more than a 20% discount with free shipping. Always calculate the final out-of-pocket amount, including <Link href="/calculators/gst" className="text-indigo-600 hover:underline">GST</Link>.
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
                                How do I calculate discount percentage?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                To calculate discount percentage, subtract the sale price from the original price, divide by the original price, and multiply by 100. Formula: [(Original Price - Sale Price) / Original Price] × 100. For example, if an item costs ₹1000 and is on sale for ₹800, the discount is [(1000-800)/1000] × 100 = 20%.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                What is the difference between discount and cashback?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                A discount reduces the price you pay immediately at purchase (e.g., 20% off means you pay 80% of the original price). Cashback returns money to you after the purchase is complete (e.g., 10% cashback means you get 10% back later). Discounts save money upfront, while cashback provides savings after the transaction.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                How do successive discounts work?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Successive discounts are applied one after another, not added together. For example, 20% + 10% discount doesn&apos;t equal 30% off. First apply 20% discount, then apply 10% to the reduced price. If an item costs ₹1000: after 20% off it&apos;s ₹800, then 10% off ₹800 = ₹720 final price (28% total discount, not 30%).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Shopping & Savings Resources Section */}
                <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                        Smart Shopping Resources
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 italic">Recommended Tools:</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/calculators/percentage" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> Percentage Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/calculators/gst" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> GST Calculator India
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/calculators/profit-loss" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> Profit & Loss Calculator
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 italic">Shopping Guides:</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/blog/how-percentage-works-shopping-salary" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> Guide: Percentage in Shopping & Salary
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/gst-on-electronics-mobile-laptops-2025" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> GST Rates on Electronics 2025
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
