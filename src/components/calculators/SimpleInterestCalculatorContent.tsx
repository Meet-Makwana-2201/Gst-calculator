import Script from "next/script";

export default function SimpleInterestCalculatorContent() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the difference between simple and compound interest?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simple interest is calculated only on the principal amount throughout the loan/investment period. Compound interest is calculated on the principal plus accumulated interest, meaning you earn 'interest on interest'. For example, ₹10,000 at 10% for 2 years: Simple Interest = ₹2,000 (total ₹12,000), Compound Interest = ₹2,100 (total ₹12,100). Compound interest grows faster over time."
                }
            },
            {
                "@type": "Question",
                "name": "When is simple interest used?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simple interest is commonly used for short-term loans, car loans, personal loans, and some fixed deposits. It's preferred when you want predictable, linear interest calculations. Banks often use simple interest for loans under 1-2 years, while compound interest is more common for long-term investments like savings accounts, recurring deposits, and retirement funds."
                }
            },
            {
                "@type": "Question",
                "name": "How do I calculate simple interest manually?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use the formula: SI = (P × R × T) / 100, where P is principal, R is annual interest rate (%), and T is time in years. Example: Principal ₹50,000, Rate 8%, Time 3 years → SI = (50,000 × 8 × 3) / 100 = ₹12,000. Total Amount = Principal + SI = ₹50,000 + ₹12,000 = ₹62,000."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="simple-interest-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        How to Use This Simple Interest Calculator
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300">
                            Calculate simple interest for loans or investments with our easy-to-use calculator:
                        </p>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li>
                                <strong>Enter Principal Amount:</strong> Input the initial loan or investment amount (the base amount on which interest is calculated).
                            </li>
                            <li>
                                <strong>Set Interest Rate:</strong> Enter the annual interest rate as a percentage (e.g., 8% per annum).
                            </li>
                            <li>
                                <strong>Choose Time Period:</strong> Specify the duration in years (or convert months to years: 18 months = 1.5 years).
                            </li>
                            <li>
                                <strong>View Interest Amount:</strong> See the total simple interest earned or payable over the period.
                            </li>
                            <li>
                                <strong>Check Total Amount:</strong> View the final amount (Principal + Interest) you&apos;ll receive or pay.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Simple Interest Formula Explained
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-indigo-600 mb-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                The Formula
                            </h3>
                            <p className="text-center text-2xl font-mono text-gray-900 dark:text-gray-100 mb-4">
                                SI = (P × R × T) / 100
                            </p>
                            <div className="space-y-2 text-gray-600 dark:text-gray-300">
                                <p><strong>Where:</strong></p>
                                <ul className="space-y-2">
                                    <li><strong>SI</strong> = Simple Interest (the interest amount)</li>
                                    <li><strong>P</strong> = Principal (initial amount)</li>
                                    <li><strong>R</strong> = Rate of interest per annum (%)</li>
                                    <li><strong>T</strong> = Time period in years</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-blue-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                Worked Example
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Let&apos;s calculate simple interest for a loan:
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                                <li>• Principal (P) = ₹1,00,000</li>
                                <li>• Interest Rate (R) = 12% per annum</li>
                                <li>• Time Period (T) = 3 years</li>
                            </ul>
                            <div className="mt-4 p-4 bg-white dark:bg-gray-900 rounded">
                                <p className="font-mono text-sm text-gray-900 dark:text-gray-100">
                                    SI = (1,00,000 × 12 × 3) / 100<br />
                                    SI = 36,00,000 / 100<br />
                                    SI = ₹36,000
                                </p>
                                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <strong>Total Amount = Principal + SI = ₹1,00,000 + ₹36,000 = ₹1,36,000</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Simple Interest vs Compound Interest
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                                <thead className="bg-gray-100 dark:bg-gray-900">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 dark:text-gray-100">Aspect</th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 dark:text-gray-100">Simple Interest</th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 dark:text-gray-100">Compound Interest</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Calculation Base</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Only on principal</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">On principal + interest</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Growth Pattern</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Linear (constant)</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Exponential (accelerating)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Best For</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Short-term loans</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Long-term investments</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Returns</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Lower total interest</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Higher total interest</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Complexity</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Simple to calculate</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">More complex formula</td>
                                    </tr>
                                </tbody>
                            </table>
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
                                What is the difference between simple and compound interest?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Simple interest is calculated only on the principal amount throughout the loan/investment period. Compound interest is calculated on the principal plus accumulated interest, meaning you earn &apos;interest on interest&apos;. For example, ₹10,000 at 10% for 2 years: Simple Interest = ₹2,000 (total ₹12,000), Compound Interest = ₹2,100 (total ₹12,100). Compound interest grows faster over time.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                When is simple interest used?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Simple interest is commonly used for short-term loans, car loans, personal loans, and some fixed deposits. It&apos;s preferred when you want predictable, linear interest calculations. Banks often use simple interest for loans under 1-2 years, while compound interest is more common for long-term investments like savings accounts, recurring deposits, and retirement funds.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                How do I calculate simple interest manually?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Use the formula: SI = (P × R × T) / 100, where P is principal, R is annual interest rate (%), and T is time in years. Example: Principal ₹50,000, Rate 8%, Time 3 years → SI = (50,000 × 8 × 3) / 100 = ₹12,000. Total Amount = Principal + SI = ₹50,000 + ₹12,000 = ₹62,000.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
