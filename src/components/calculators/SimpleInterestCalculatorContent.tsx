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
                        Real-World Applications of Simple Interest
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🏦</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Personal Loans</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Most personal loans from banks and NBFCs use simple interest for short durations (1-5 years).
                            </p>
                            <div className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Example:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Loan: ₹2,00,000 at 11% for 2 years<br />
                                    Interest = (2,00,000 × 11 × 2) / 100 = ₹44,000<br />
                                    Total Repayment = ₹2,44,000<br />
                                    Monthly EMI ≈ ₹10,167
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🚗</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Auto Loans</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Car loans typically use simple interest, making it easier to understand total cost.
                            </p>
                            <div className="bg-green-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Example:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Car Price: ₹8,00,000 at 9.5% for 5 years<br />
                                    Interest = (8,00,000 × 9.5 × 5) / 100 = ₹3,80,000<br />
                                    Total Payment = ₹11,80,000<br />
                                    Monthly EMI ≈ ₹19,667
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">💰</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Fixed Deposits (Short-term)</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Some banks offer simple interest on FDs with tenure less than 1 year.
                            </p>
                            <div className="bg-purple-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Example:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Deposit: ₹5,00,000 at 6.5% for 1 year<br />
                                    Interest = (5,00,000 × 6.5 × 1) / 100 = ₹32,500<br />
                                    Maturity Amount = ₹5,32,500<br />
                                    Effective Monthly Return = ₹2,708
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">EMI on No-Cost Financing</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Electronics and appliances often come with "no-cost EMI" using simple interest principles.
                            </p>
                            <div className="bg-orange-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Example:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Phone: ₹60,000 for 12 months<br />
                                    Processing Fee: ₹1,000 (hidden interest)<br />
                                    Effective Rate ≈ 1.67% per year<br />
                                    Monthly EMI = ₹5,000
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Advanced Calculation Scenarios
                    </h2>

                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-indigo-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Scenario 1: Finding Principal When Interest is Known
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong>Problem:</strong> You want to earn ₹50,000 as interest in 4 years at 8% per annum. What should be your principal investment?
                            </p>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                                <p className="font-mono text-sm text-gray-900 dark:text-gray-100 mb-2">
                                    <strong>Formula Rearrangement:</strong> P = (SI × 100) / (R × T)
                                </p>
                                <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                                    P = (50,000 × 100) / (8 × 4)<br />
                                    P = 50,00,000 / 32<br />
                                    P = ₹1,56,250
                                </p>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                                    <strong>Answer:</strong> You need to invest ₹1,56,250 to earn ₹50,000 interest in 4 years at 8% p.a.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-purple-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Scenario 2: Finding Rate When Principal and Interest are Known
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong>Problem:</strong> You invested ₹75,000 and received ₹1,05,000 after 5 years. What was the interest rate?
                            </p>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                                <p className="font-mono text-sm text-gray-900 dark:text-gray-100 mb-2">
                                    <strong>Step 1:</strong> Find Interest Amount
                                </p>
                                <p className="font-mono text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    SI = Total Amount - Principal<br />
                                    SI = 1,05,000 - 75,000 = ₹30,000
                                </p>
                                <p className="font-mono text-sm text-gray-900 dark:text-gray-100 mb-2">
                                    <strong>Step 2:</strong> Calculate Rate: R = (SI × 100) / (P × T)
                                </p>
                                <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                                    R = (30,000 × 100) / (75,000 × 5)<br />
                                    R = 30,00,000 / 3,75,000<br />
                                    R = 8% per annum
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-green-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Scenario 3: Finding Time Period
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong>Problem:</strong> How long will it take for ₹1,00,000 to grow to ₹1,30,000 at 10% simple interest?
                            </p>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                                <p className="font-mono text-sm text-gray-900 dark:text-gray-100 mb-2">
                                    <strong>Step 1:</strong> Interest = 1,30,000 - 1,00,000 = ₹30,000
                                </p>
                                <p className="font-mono text-sm text-gray-900 dark:text-gray-100 mb-2">
                                    <strong>Step 2:</strong> T = (SI × 100) / (P × R)
                                </p>
                                <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                                    T = (30,000 × 100) / (1,00,000 × 10)<br />
                                    T = 30,00,000 / 10,00,000<br />
                                    T = 3 years
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Mathematical Insights & Concepts
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-indigo-600">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                📊 Linear Growth Pattern
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Simple interest grows linearly, meaning the interest amount remains constant each year. This creates a straight-line graph when plotted over time.
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <strong>Example:</strong> ₹10,000 at 10% p.a.<br />
                                    Year 1: ₹1,000 interest<br />
                                    Year 2: ₹1,000 interest<br />
                                    Year 3: ₹1,000 interest<br />
                                    <em>Same amount every year!</em>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-purple-600">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                🔢 Time Value of Money
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Simple interest demonstrates that money has time value. The same principal amount is worth more in the future due to interest accumulation.
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <strong>Concept:</strong><br />
                                    ₹1,00,000 today = ₹1,08,000 after 1 year at 8%<br />
                                    The ₹8,000 difference is the "time value"
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-green-600">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                ⚖️ Proportional Relationship
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Interest is directly proportional to principal, rate, and time. Double any factor, and interest doubles too.
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Base: P=₹10,000, R=5%, T=2 years → SI=₹1,000<br />
                                    Double P: ₹20,000 → SI=₹2,000<br />
                                    Double R: 10% → SI=₹2,000<br />
                                    Double T: 4 years → SI=₹2,000
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-orange-600">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                📈 Break-Even Analysis
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                You can calculate when an investment will double using: Time = 100 / Rate
                            </p>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    <strong>Rule of 100:</strong><br />
                                    At 5% → 100/5 = 20 years to double<br />
                                    At 10% → 100/10 = 10 years to double<br />
                                    At 20% → 100/20 = 5 years to double
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Comparison: Simple vs Compound Interest Over Time
                    </h2>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Let's compare how ₹1,00,000 grows at 10% per annum under both methods:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-gray-900">
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Year</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Simple Interest</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Compound Interest</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Difference</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">1</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹1,10,000</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹1,10,000</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-600">₹0</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">2</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹1,20,000</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹1,21,000</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-600">₹1,000</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">5</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹1,50,000</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹1,61,051</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-600">₹11,051</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">10</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹2,00,000</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹2,59,374</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-600">₹59,374</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">20</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹3,00,000</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹6,72,750</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-600 font-bold">₹3,72,750</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 italic">
                            <strong>Key Insight:</strong> The difference becomes significant over longer periods. For short-term (1-3 years), simple interest is nearly equivalent to compound interest, making it ideal for short-term loans.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        💡 Tips & Best Practices
                    </h2>

                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-yellow-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                                    <span className="text-green-600 mr-2">✓</span> For Borrowers
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Choose simple interest for short-term loans (under 3 years)</li>
                                    <li>• Calculate total interest before signing loan agreements</li>
                                    <li>• Compare effective interest rates across lenders</li>
                                    <li>• Consider prepayment to reduce total interest</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                                    <span className="text-blue-600 mr-2">✓</span> For Investors
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Simple interest is better for short-term goals (6-18 months)</li>
                                    <li>• For long-term wealth, prefer compound interest instruments</li>
                                    <li>• Use simple interest for predictable, fixed returns</li>
                                    <li>• Calculate returns before investing in FDs or bonds</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                                    <span className="text-purple-600 mr-2">✓</span> Common Mistakes to Avoid
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Don't confuse annual rate with monthly rate</li>
                                    <li>• Always convert months to years (divide by 12)</li>
                                    <li>• Don't forget to add principal to get total amount</li>
                                    <li>• Check if rate is per annum or per month</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                                    <span className="text-orange-600 mr-2">✓</span> Quick Mental Math Tricks
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• 10% for 1 year = Move decimal left once</li>
                                    <li>• 5% = Half of 10%</li>
                                    <li>• Double time = Double interest (at same rate)</li>
                                    <li>• Use Rule of 100: Years to double = 100/Rate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Industry-Specific Applications
                    </h2>

                    <div className="space-y-4">
                        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">🏢</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                                        Business & Corporate Finance
                                    </span>
                                </div>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                                <p className="mb-3">Businesses use simple interest for:</p>
                                <ul className="space-y-2 ml-4">
                                    <li>• <strong>Working Capital Loans:</strong> Short-term financing for inventory and operations</li>
                                    <li>• <strong>Trade Credit:</strong> Calculating interest on delayed payments (e.g., 30/60/90 days credit)</li>
                                    <li>• <strong>Invoice Discounting:</strong> Determining discount rates for early payment</li>
                                    <li>• <strong>Bridge Loans:</strong> Temporary financing between transactions</li>
                                </ul>
                                <div className="mt-4 p-4 bg-blue-50 dark:bg-gray-900 rounded-lg">
                                    <p className="text-sm"><strong>Example:</strong> A company takes ₹50 lakh working capital loan at 12% for 6 months (0.5 years)</p>
                                    <p className="text-sm font-mono mt-2">Interest = (50,00,000 × 12 × 0.5) / 100 = ₹3,00,000</p>
                                </div>
                            </div>
                        </details>

                        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">🎓</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                                        Education Loans
                                    </span>
                                </div>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                                <p className="mb-3">Education loans often use simple interest during the study period (moratorium):</p>
                                <div className="mt-4 p-4 bg-purple-50 dark:bg-gray-900 rounded-lg">
                                    <p className="text-sm mb-2"><strong>Scenario:</strong> ₹10 lakh education loan at 9% for 4-year course</p>
                                    <p className="text-sm font-mono">Interest during study = (10,00,000 × 9 × 4) / 100 = ₹3,60,000</p>
                                    <p className="text-sm mt-2">Total amount when repayment starts = ₹13,60,000</p>
                                    <p className="text-sm mt-2 text-purple-700 dark:text-purple-400"><em>Note: Some banks capitalize this interest, converting it to compound interest for repayment phase</em></p>
                                </div>
                            </div>
                        </details>

                        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">🏠</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                                        Real Estate & Property
                                    </span>
                                </div>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                                <p className="mb-3">Real estate transactions involving simple interest:</p>
                                <ul className="space-y-2 ml-4">
                                    <li>• <strong>Construction Finance:</strong> Short-term loans for builders</li>
                                    <li>• <strong>Earnest Money Deposits:</strong> Interest on booking amounts</li>
                                    <li>• <strong>Rental Deposits:</strong> Interest payable on security deposits</li>
                                    <li>• <strong>Land Purchase Loans:</strong> Temporary financing before construction</li>
                                </ul>
                                <div className="mt-4 p-4 bg-green-50 dark:bg-gray-900 rounded-lg">
                                    <p className="text-sm"><strong>Example:</strong> Security deposit of ₹2,00,000 for commercial property at 6% p.a.</p>
                                    <p className="text-sm font-mono mt-2">Annual interest = (2,00,000 × 6 × 1) / 100 = ₹12,000</p>
                                    <p className="text-sm mt-2">Landlord must return ₹2,12,000 after 1 year</p>
                                </div>
                            </div>
                        </details>

                        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">⚖️</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                                        Legal & Court Cases
                                    </span>
                                </div>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                                <p className="mb-3">Courts often award simple interest in financial disputes:</p>
                                <ul className="space-y-2 ml-4">
                                    <li>• <strong>Delayed Payments:</strong> Interest on unpaid dues (typically 9-12% p.a.)</li>
                                    <li>• <strong>Compensation Awards:</strong> Interest from date of incident to judgment</li>
                                    <li>• <strong>Refunds:</strong> Interest on delayed refunds by companies/government</li>
                                    <li>• <strong>Breach of Contract:</strong> Damages with interest</li>
                                </ul>
                                <div className="mt-4 p-4 bg-orange-50 dark:bg-gray-900 rounded-lg">
                                    <p className="text-sm"><strong>Example:</strong> Court awards ₹5,00,000 with 9% interest from Jan 2022 to Jan 2025 (3 years)</p>
                                    <p className="text-sm font-mono mt-2">Interest = (5,00,000 × 9 × 3) / 100 = ₹1,35,000</p>
                                    <p className="text-sm mt-2">Total amount payable = ₹6,35,000</p>
                                </div>
                            </div>
                        </details>
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
                                    What is the difference between simple and compound interest?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Simple interest is calculated only on the principal amount throughout the loan/investment period. Compound interest is calculated on the principal plus accumulated interest, meaning you earn 'interest on interest'. For example, ₹10,000 at 10% for 2 years: Simple Interest = ₹2,000 (total ₹12,000), Compound Interest = ₹2,100 (total ₹12,100). Compound interest grows faster over time.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    When is simple interest used?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Simple interest is commonly used for short-term loans, car loans, personal loans, and some fixed deposits. It's preferred when you want predictable, linear interest calculations. Banks often use simple interest for loans under 1-2 years, while compound interest is more common for long-term investments like savings accounts, recurring deposits, and retirement funds.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How do I calculate simple interest manually?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Use the formula: SI = (P × R × T) / 100, where P is principal, R is annual interest rate (%), and T is time in years. Example: Principal ₹50,000, Rate 8%, Time 3 years → SI = (50,000 × 8 × 3) / 100 = ₹12,000. Total Amount = Principal + SI = ₹50,000 + ₹12,000 = ₹62,000.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Can I convert months to years for simple interest calculation?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Yes! Simply divide the number of months by 12. For example: 6 months = 0.5 years, 18 months = 1.5 years, 30 months = 2.5 years. The formula remains SI = (P × R × T) / 100, where T is now in decimal years. Example: ₹1,00,000 at 12% for 9 months → T = 9/12 = 0.75 years → SI = (1,00,000 × 12 × 0.75) / 100 = ₹9,000.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Is simple interest better than compound interest?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    It depends on your perspective. For borrowers, simple interest is better as you pay less total interest. For investors, compound interest is better as you earn more returns. Simple interest is ideal for short-term scenarios (under 3 years) where the difference is minimal. For long-term investments (5+ years), compound interest significantly outperforms simple interest.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How do banks calculate EMI for simple interest loans?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    For simple interest loans, EMI = (Principal + Total Interest) / Number of Months. Example: ₹2,00,000 loan at 10% for 2 years → Interest = (2,00,000 × 10 × 2) / 100 = ₹40,000 → Total = ₹2,40,000 → EMI = 2,40,000 / 24 = ₹10,000 per month. Each EMI is the same amount throughout the loan tenure.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What is the Rule of 72 vs Rule of 100?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    The Rule of 72 is for compound interest: divide 72 by the interest rate to find years to double (e.g., 72/8 = 9 years at 8% compound). The Rule of 100 is for simple interest: divide 100 by the rate (e.g., 100/8 = 12.5 years at 8% simple). Simple interest always takes longer to double your money compared to compound interest.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Can simple interest be negative?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    No, simple interest itself cannot be negative as it's calculated using positive values (principal, rate, time). However, in some contexts like penalty interest or late payment charges, you might see "negative interest" terminology, which actually means you're paying additional interest as a penalty. In investment contexts, negative returns mean your investment lost value, but that's different from the simple interest calculation itself.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How accurate is this simple interest calculator?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Our calculator uses the standard simple interest formula SI = (P × R × T) / 100 and provides results accurate to two decimal places. This matches banking and financial standards. However, actual loan agreements may include additional fees, processing charges, or different calculation methods (like daily simple interest). Always verify the final amount with your lender or financial institution.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What's the difference between flat rate and reducing balance?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Flat rate (simple interest) calculates interest on the original principal throughout the loan. Reducing balance (used in most home loans) calculates interest on the outstanding balance, which decreases with each payment. Example: ₹1 lakh at 10% for 1 year → Flat rate interest = ₹10,000. Reducing balance interest ≈ ₹5,500 (much lower). Banks often quote flat rates to make loans appear cheaper, but reducing balance is more borrower-friendly.
                                </p>
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </>
    );
}
