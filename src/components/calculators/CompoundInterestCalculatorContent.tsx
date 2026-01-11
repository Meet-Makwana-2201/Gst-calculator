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
                        Real-World Wealth Building Examples
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Retirement Planning at 25</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Starting early makes a massive difference. Invest ₹10,000/month from age 25 to 60 at 12% returns.
                            </p>
                            <div className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Calculation:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Investment Period: 35 years<br />
                                    Total Invested: ₹42,00,000<br />
                                    Maturity Value: ₹6,44,91,000<br />
                                    <strong className="text-green-600">Wealth Created: ₹6.02 Crores!</strong>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">👶</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Child's Education Fund</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Start investing ₹5,000/month when your child is born for their higher education at 18.
                            </p>
                            <div className="bg-purple-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>At 10% Annual Returns:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Total Invested: ₹10,80,000<br />
                                    Maturity at 18 years: ₹30,30,000<br />
                                    Interest Earned: ₹19,50,000<br />
                                    <em>Enough for premium education!</em>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🏠</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Down Payment for Home</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Save ₹25,000/month for 5 years to accumulate down payment for your dream home.
                            </p>
                            <div className="bg-green-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>At 11% Returns:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Total Invested: ₹15,00,000<br />
                                    Maturity Value: ₹20,46,000<br />
                                    Gain: ₹5,46,000<br />
                                    Perfect for 20% down payment!
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">💰</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Becoming a Crorepati</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                How much to invest monthly to reach ₹1 Crore in 15 years at 12% returns?
                            </p>
                            <div className="bg-orange-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Required SIP:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Monthly Investment: ₹20,000<br />
                                    Total Invested: ₹36,00,000<br />
                                    Maturity: ₹1,00,03,000<br />
                                    <strong className="text-orange-600">You're a Crorepati!</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Advanced Compounding Scenarios
                    </h2>

                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-indigo-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            The Power of Starting Early: Age 25 vs Age 35
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                                <h4 className="font-bold text-lg text-blue-600 mb-3">Person A: Starts at 25</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    Invests ₹5,000/month for 10 years, then stops. Total investment: ₹6 lakhs.
                                </p>
                                <div className="bg-blue-50 dark:bg-gray-900 p-3 rounded text-sm">
                                    <p>At age 60 (35 years total):</p>
                                    <p className="font-bold text-blue-700 dark:text-blue-400 text-lg mt-2">₹1.77 Crores</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                                <h4 className="font-bold text-lg text-purple-600 mb-3">Person B: Starts at 35</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    Invests ₹5,000/month for 25 years continuously. Total investment: ₹15 lakhs.
                                </p>
                                <div className="bg-purple-50 dark:bg-gray-900 p-3 rounded text-sm">
                                    <p>At age 60 (25 years total):</p>
                                    <p className="font-bold text-purple-700 dark:text-purple-400 text-lg mt-2">₹94.7 Lakhs</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 italic">
                            <strong>Key Insight:</strong> Person A invested ₹9 lakhs less but has ₹82 lakhs more! Starting 10 years earlier is worth more than 2.5x the investment amount.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-green-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Lump Sum vs SIP: Which is Better?
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong>Scenario:</strong> You have ₹10 lakhs to invest for 10 years at 12% returns.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                                    <h4 className="font-bold text-green-600 mb-3">Option 1: Lump Sum</h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                        Invest entire ₹10 lakhs today
                                    </p>
                                    <div className="bg-green-50 dark:bg-gray-900 p-3 rounded">
                                        <p className="text-sm">After 10 years:</p>
                                        <p className="font-bold text-green-700 dark:text-green-400 text-xl">₹31.06 Lakhs</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Returns: ₹21.06 lakhs</p>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                                    <h4 className="font-bold text-teal-600 mb-3">Option 2: Monthly SIP</h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                        Invest ₹8,333/month for 10 years
                                    </p>
                                    <div className="bg-teal-50 dark:bg-gray-900 p-3 rounded">
                                        <p className="text-sm">After 10 years:</p>
                                        <p className="font-bold text-teal-700 dark:text-teal-400 text-xl">₹19.03 Lakhs</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Returns: ₹9.03 lakhs</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-4">
                                <strong>Verdict:</strong> Lump sum wins if you have the money upfront. But SIP is better for regular income earners and reduces market timing risk through rupee cost averaging.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Mathematical Concepts & Insights
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-indigo-600">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                📈 Exponential Growth Curve
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Compound interest grows exponentially, not linearly. The growth accelerates over time, creating a J-curve pattern.
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <strong>Example:</strong> ₹1 lakh at 12%<br />
                                    Years 1-10: Grows to ₹3.1 lakhs (+₹2.1L)<br />
                                    Years 11-20: Grows to ₹9.6 lakhs (+₹6.5L)<br />
                                    Years 21-30: Grows to ₹30 lakhs (+₹20.4L)<br />
                                    <em>Last decade adds 3x more than first!</em>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-purple-600">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                🎯 The Rule of 114 & 144
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Beyond Rule of 72, use Rule of 114 to triple and Rule of 144 to quadruple your money.
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <strong>At 12% returns:</strong><br />
                                    Double: 72/12 = 6 years<br />
                                    Triple: 114/12 = 9.5 years<br />
                                    Quadruple: 144/12 = 12 years<br />
                                    <em>Your money grows 4x in just 12 years!</em>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-green-600">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                💡 Continuous Compounding
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                As compounding frequency approaches infinity, we get continuous compounding: A = Pe^(rt)
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    ₹1 lakh at 12% for 10 years:<br />
                                    Annual: ₹3,10,585<br />
                                    Daily: ₹3,32,011<br />
                                    Continuous: ₹3,32,012<br />
                                    <em>Daily ≈ Continuous compounding</em>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-orange-600">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                ⏰ Time is More Powerful Than Rate
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Doubling time matters more than rate differences for long-term wealth.
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    ₹1 lakh for 30 years:<br />
                                    At 8%: ₹10.06 lakhs<br />
                                    At 12%: ₹29.96 lakhs<br />
                                    <strong>4% difference = 3x wealth!</strong><br />
                                    <em>Choose investments wisely</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Investment Instruments Comparison
                    </h2>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Compare how ₹10 lakhs grows over 20 years in different investment options:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-gray-900">
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Investment Type</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Avg. Return</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Compounding</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Maturity Value</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Wealth Multiplier</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Savings Account</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">3-4%</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Quarterly</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹20.49 L</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-red-600">2.0x</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Fixed Deposit</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">6-7%</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Quarterly</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹38.70 L</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-orange-600">3.9x</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">PPF/EPF</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">7-8%</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Annual</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹45.76 L</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-yellow-600">4.6x</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Debt Mutual Funds</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">8-9%</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Daily</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹53.70 L</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-blue-600">5.4x</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Balanced Funds</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">10-11%</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Daily</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹72.45 L</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-indigo-600">7.2x</td>
                                    </tr>
                                    <tr className="bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold">Equity Mutual Funds</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-gray-700 dark:text-gray-300">12-15%</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Daily</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-700 dark:text-green-400">₹96.46 L</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-bold text-green-600">9.6x</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 italic">
                            <strong>Note:</strong> Higher returns come with higher risk. Diversify across asset classes based on your risk appetite and investment horizon.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        💡 Pro Tips for Maximizing Returns
                    </h2>

                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-yellow-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                                    <span className="text-green-600 mr-2">✓</span> Tax-Efficient Investing
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Use ELSS funds for Section 80C deduction (₹1.5L limit)</li>
                                    <li>• PPF interest is completely tax-free (EEE status)</li>
                                    <li>• Hold equity funds 1 year for LTCG tax benefit</li>
                                    <li>• NPS offers additional ₹50,000 deduction under 80CCD(1B)</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                                    <span className="text-blue-600 mr-2">✓</span> Inflation Protection
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Target returns 3-4% above inflation rate</li>
                                    <li>• At 6% inflation, 8% returns = 2% real growth</li>
                                    <li>• Equity historically beats inflation by 6-8%</li>
                                    <li>• Rebalance portfolio annually to maintain allocation</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                                    <span className="text-purple-600 mr-2">✓</span> Rupee Cost Averaging
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• SIP automatically buys more units when prices are low</li>
                                    <li>• Reduces impact of market volatility</li>
                                    <li>• Eliminates need to time the market</li>
                                    <li>• Continue SIP even during market crashes for best returns</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                                    <span className="text-orange-600 mr-2">✓</span> Step-Up SIP Strategy
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Increase SIP by 10-15% annually with salary hikes</li>
                                    <li>• ₹10K SIP with 10% annual increase = ₹3.5 Cr in 25 years</li>
                                    <li>• Same ₹10K without increase = ₹1.9 Cr (45% less!)</li>
                                    <li>• Automate step-up to stay disciplined</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What is the power of compounding?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    The power of compounding refers to earning interest on both your principal and previously earned interest, creating exponential growth over time. Albert Einstein allegedly called it the 'eighth wonder of the world'. For example, ₹1 lakh invested at 10% annually: after 10 years with simple interest = ₹2 lakhs, but with compound interest = ₹2.59 lakhs—an extra ₹59,000 from compounding alone.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How does compounding frequency affect returns?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    More frequent compounding leads to higher returns. For ₹1 lakh at 12% for 1 year: Annual compounding = ₹12,000 interest, Quarterly = ₹12,551, Monthly = ₹12,683, Daily = ₹12,747. The difference becomes more significant over longer periods. Daily compounding yields the highest returns, followed by monthly, quarterly, and annual.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What is the Rule of 72?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    The Rule of 72 is a quick way to estimate how long it takes to double your money with compound interest. Divide 72 by the annual interest rate. For example, at 8% interest, your money doubles in approximately 72/8 = 9 years. At 12%, it doubles in 72/12 = 6 years. This rule works best for interest rates between 6-10%.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How much should I invest monthly to become a crorepati?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    It depends on your time horizon and expected returns. At 12% annual returns: For 15 years, invest ₹20,000/month. For 20 years, invest ₹10,000/month. For 25 years, invest ₹6,000/month. For 30 years, invest just ₹3,500/month. The earlier you start, the less you need to invest monthly. Use our calculator to find your personalized plan.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What's the difference between CAGR and absolute returns?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    CAGR (Compound Annual Growth Rate) is the annualized rate of return, while absolute return is the total percentage gain. Example: ₹1 lakh becomes ₹2 lakhs in 5 years. Absolute return = 100% (doubled). CAGR = 14.87% per year. CAGR is better for comparing investments over different time periods as it accounts for the compounding effect.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Should I choose growth or dividend option in mutual funds?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    For wealth accumulation, always choose the growth option. Dividends break the compounding cycle and are taxable in your hands. Growth option reinvests all returns, maximizing compounding. Example: ₹10 lakhs in growth option at 12% for 20 years = ₹96.46 lakhs. Same in dividend option (assuming 3% annual dividend) = ₹64 lakhs. Growth wins by ₹32 lakhs!
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How does inflation affect my compound interest returns?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Inflation reduces your real returns. Real Return = Nominal Return - Inflation Rate. If you earn 10% but inflation is 6%, your real return is only 4%. To maintain purchasing power, your investments must beat inflation. At 6% inflation, ₹1 lakh today will need ₹3.21 lakhs in 20 years to have the same value. Always factor inflation when planning long-term goals.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Can I withdraw from compound interest investments anytime?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    It depends on the investment type. Mutual funds: Yes, but may have exit loads (1-2% if withdrawn before 1 year). Fixed Deposits: Premature withdrawal allowed with penalty (0.5-1% lower interest). PPF: Partial withdrawal allowed after 7 years. NPS: Locked till 60 years (except partial withdrawal for specific purposes). Always check lock-in periods and penalties before investing.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What's better: monthly SIP or lump sum investment?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Lump sum typically gives higher returns if invested at the right time, but SIP is better for most investors because: (1) Reduces market timing risk through rupee cost averaging, (2) Builds investment discipline, (3) Easier on monthly budget, (4) Reduces emotional stress during market volatility. If you have a large sum, consider Systematic Transfer Plan (STP) - invest lump sum in debt fund and transfer monthly to equity fund.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How accurate is this compound interest calculator?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Our calculator uses the standard compound interest formula A = P(1 + r/n)^(nt) and provides mathematically accurate results. However, actual investment returns may vary due to: (1) Market fluctuations (equity returns aren't fixed), (2) Fund management fees and expense ratios, (3) Tax implications, (4) Entry/exit loads. Use this calculator for planning and projections, but consult a financial advisor for personalized investment advice.
                                </p>
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </>
    );
}
