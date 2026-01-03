import Script from "next/script";

export default function CompoundInterestCalculatorContent() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the power of compounding?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The power of compounding refers to earning interest on both your principal and previously earned interest, creating exponential growth over time. Albert Einstein allegedly called it the 'eighth wonder of the world'. For example, ₹1 lakh invested at 10% annually: after 10 years with simple interest = ₹2 lakhs, but with compound interest = ₹2.59 lakhs—an extra ₹59,000 from compounding alone."
                }
            },
            {
                "@type": "Question",
                "name": "How does compounding frequency affect returns?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "More frequent compounding leads to higher returns. For ₹1 lakh at 12% for 1 year: Annual compounding = ₹12,000 interest, Quarterly = ₹12,551, Monthly = ₹12,683, Daily = ₹12,747. The difference becomes more significant over longer periods. Daily compounding yields the highest returns, followed by monthly, quarterly, and annual."
                }
            },
            {
                "@type": "Question",
                "name": "What is the Rule of 72?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Rule of 72 is a quick way to estimate how long it takes to double your money with compound interest. Divide 72 by the annual interest rate. For example, at 8% interest, your money doubles in approximately 72/8 = 9 years. At 12%, it doubles in 72/12 = 6 years. This rule works best for interest rates between 6-10%."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="compound-interest-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        How to Use This Compound Interest Calculator
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300">
                            Calculate the future value of your investments with compound interest:
                        </p>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li>
                                <strong>Enter Principal Amount:</strong> Input your initial investment or deposit amount.
                            </li>
                            <li>
                                <strong>Set Interest Rate:</strong> Enter the annual interest rate (e.g., 8%, 12% per annum).
                            </li>
                            <li>
                                <strong>Choose Time Period:</strong> Specify the investment duration in years.
                            </li>
                            <li>
                                <strong>Select Compounding Frequency:</strong> Choose how often interest is compounded (annually, semi-annually, quarterly, monthly, or daily).
                            </li>
                            <li>
                                <strong>View Results:</strong> See total compound interest earned, final amount, and year-by-year growth breakdown.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Compound Interest Formula
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-indigo-600 mb-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                The Formula
                            </h3>
                            <p className="text-center text-xl font-mono text-gray-900 dark:text-gray-100 mb-4">
                                A = P(1 + r/n)^(nt)
                            </p>
                            <div className="space-y-2 text-gray-600 dark:text-gray-300">
                                <p><strong>Where:</strong></p>
                                <ul className="space-y-2">
                                    <li><strong>A</strong> = Final amount (principal + interest)</li>
                                    <li><strong>P</strong> = Principal (initial investment)</li>
                                    <li><strong>r</strong> = Annual interest rate (as decimal: 8% = 0.08)</li>
                                    <li><strong>n</strong> = Number of times interest compounds per year</li>
                                    <li><strong>t</strong> = Time in years</li>
                                </ul>
                                <p className="mt-4"><strong>Compound Interest = A - P</strong></p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-blue-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                Worked Example
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Calculate compound interest for an investment:
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                                <li>• Principal (P) = ₹1,00,000</li>
                                <li>• Interest Rate (r) = 10% = 0.10</li>
                                <li>• Time (t) = 5 years</li>
                                <li>• Compounding (n) = Quarterly (4 times/year)</li>
                            </ul>
                            <div className="mt-4 p-4 bg-white dark:bg-gray-900 rounded">
                                <p className="font-mono text-sm text-gray-900 dark:text-gray-100">
                                    A = 1,00,000(1 + 0.10/4)^(4×5)<br />
                                    A = 1,00,000(1 + 0.025)^20<br />
                                    A = 1,00,000(1.025)^20<br />
                                    A = 1,00,000 × 1.6386<br />
                                    A = ₹1,63,862
                                </p>
                                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                                    <strong>Compound Interest = ₹1,63,862 - ₹1,00,000 = ₹63,862</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Compounding Frequency Impact
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            See how different compounding frequencies affect ₹1,00,000 at 12% for 10 years:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                                <thead className="bg-gray-100 dark:bg-gray-900">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 dark:text-gray-100">Frequency</th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 dark:text-gray-100">Times/Year (n)</th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 dark:text-gray-100">Final Amount</th>
                                        <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 dark:text-gray-100">Interest Earned</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Annually</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">1</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">₹3,10,585</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">₹2,10,585</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Semi-Annually</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">2</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">₹3,20,714</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">₹2,20,714</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Quarterly</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">4</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">₹3,26,204</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">₹2,26,204</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Monthly</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">12</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">₹3,30,039</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">₹2,30,039</td>
                                    </tr>
                                    <tr className="bg-green-50 dark:bg-green-900/20">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Daily</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">365</td>
                                        <td className="px-6 py-4 text-sm font-bold text-green-700 dark:text-green-400">₹3,32,011</td>
                                        <td className="px-6 py-4 text-sm font-bold text-green-700 dark:text-green-400">₹2,32,011</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">
                            Note: Daily compounding yields ₹21,426 more than annual compounding over 10 years!
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Investment Strategies
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Start Early
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Time is your biggest ally with compound interest. Starting 10 years earlier can more than double your returns, even with the same total contributions. A 25-year-old investing ₹5,000/month will have significantly more at 60 than a 35-year-old investing ₹10,000/month.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Reinvest Returns
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Always reinvest your interest and dividends to maximize compounding. Withdrawing returns breaks the compounding cycle. Choose growth options over dividend payout options in mutual funds to let your money compound faster.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Regular Contributions
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Adding regular contributions (SIP/STP) amplifies compounding power. Even small monthly additions grow substantially over time. ₹5,000/month at 12% for 20 years = ₹49.96 lakhs (you invest ₹12 lakhs, compounding adds ₹37.96 lakhs).
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Stay Patient
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Compound interest works slowly at first but accelerates dramatically. The last 10 years of a 30-year investment often generate more returns than the first 20 years combined. Avoid withdrawing early—let compounding work its magic.
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
                                What is the power of compounding?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                The power of compounding refers to earning interest on both your principal and previously earned interest, creating exponential growth over time. Albert Einstein allegedly called it the &apos;eighth wonder of the world&apos;. For example, ₹1 lakh invested at 10% annually: after 10 years with simple interest = ₹2 lakhs, but with compound interest = ₹2.59 lakhs—an extra ₹59,000 from compounding alone.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                How does compounding frequency affect returns?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                More frequent compounding leads to higher returns. For ₹1 lakh at 12% for 1 year: Annual compounding = ₹12,000 interest, Quarterly = ₹12,551, Monthly = ₹12,683, Daily = ₹12,747. The difference becomes more significant over longer periods. Daily compounding yields the highest returns, followed by monthly, quarterly, and annual.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                What is the Rule of 72?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                The Rule of 72 is a quick way to estimate how long it takes to double your money with compound interest. Divide 72 by the annual interest rate. For example, at 8% interest, your money doubles in approximately 72/8 = 9 years. At 12%, it doubles in 72/12 = 6 years. This rule works best for interest rates between 6-10%.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
