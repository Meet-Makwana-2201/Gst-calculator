import Script from "next/script";
import Link from "next/link";

export default function EMICalculatorContent() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is a good EMI ratio?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A good EMI ratio is typically 40-50% of your monthly income. Financial experts recommend that your total EMI obligations (including all loans) should not exceed 50% of your net monthly income. This ensures you have sufficient funds for other expenses and savings while maintaining a healthy debt-to-income ratio."
                }
            },
            {
                "@type": "Question",
                "name": "Does tenure affect my total interest?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, loan tenure significantly affects your total interest payment. A longer tenure reduces your monthly EMI but increases the total interest paid over the loan period. Conversely, a shorter tenure means higher monthly EMIs but lower overall interest costs. For example, a 20-year loan will have much higher total interest than a 10-year loan for the same principal and interest rate."
                }
            },
            {
                "@type": "Question",
                "name": "Can I prepay my loan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, most loans allow prepayment, though terms vary by lender. Home loans typically allow prepayment without penalties, while some personal loans may charge a prepayment fee (usually 2-5% of the outstanding amount). Prepaying your loan reduces the principal amount, which in turn reduces your total interest burden and can help you become debt-free faster."
                }
            }
        ]
    };

    return (
        <>
            {/* FAQ Schema for Rich Snippets */}
            <Script
                id="emi-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
                {/* How to Use Section */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        How to Use This EMI Calculator
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300">
                            Our EMI calculator makes it easy to calculate your monthly loan payments. Follow these simple steps:
                        </p>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li>
                                <strong>Enter Loan Amount:</strong> Input the total principal amount you wish to borrow. This is the actual loan amount before interest.
                            </li>
                            <li>
                                <strong>Set Interest Rate:</strong> Enter the annual interest rate offered by your lender. This is typically expressed as a percentage per annum.
                            </li>
                            <li>
                                <strong>Choose Loan Tenure:</strong> Select the loan repayment period in months or years. Common tenures range from 1 year to 30 years depending on the loan type.
                            </li>
                            <li>
                                <strong>View Results:</strong> The calculator instantly displays your monthly EMI, total interest payable, and the total amount (principal + interest) you&apos;ll pay over the loan period.
                            </li>
                            <li>
                                <strong>Adjust Parameters:</strong> Experiment with different values to find the optimal combination of loan amount, interest rate, and tenure that fits your budget.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* EMI Formula Section */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        What is the Formula for EMI?
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300">
                            The Equated Monthly Installment (EMI) is calculated using the following mathematical formula:
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-4 border-l-4 border-indigo-600">
                            <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100">
                                EMI = [P × R × (1 + R)^N] / [(1 + R)^N - 1]
                            </p>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 font-semibold">
                            Where:
                        </p>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>
                                <strong>P (Principal):</strong> The total loan amount you borrow from the lender. This is the base amount on which interest is calculated.
                            </li>
                            <li>
                                <strong>R (Rate of Interest):</strong> The monthly interest rate, calculated by dividing the annual interest rate by 12 months and then by 100. For example, if the annual rate is 12%, the monthly rate R = 12/(12×100) = 0.01.
                            </li>
                            <li>
                                <strong>N (Number of Installments):</strong> The total number of monthly payments over the loan tenure. For a 5-year loan, N = 5 × 12 = 60 months.
                            </li>
                        </ul>
                        <p className="text-gray-600 dark:text-gray-300 mt-4">
                            This formula ensures that you pay the same amount every month throughout the loan tenure, with the proportion of principal and interest changing over time. In the initial months, a larger portion goes toward interest, while in later months, more goes toward the principal.
                        </p>
                    </div>
                </section>

                {/* Factors Affecting EMI Section */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Factors Affecting Your Loan EMI
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300">
                            Understanding the factors that influence your EMI helps you make informed borrowing decisions:
                        </p>

                        <div className="space-y-6 mt-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    1. Loan Tenure Impact
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    The loan tenure has a significant inverse relationship with your EMI and total interest:
                                </p>
                                <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>
                                        <strong>Shorter Tenure:</strong> Higher monthly EMI but lower total interest paid. You become debt-free faster and save money in the long run.
                                    </li>
                                    <li>
                                        <strong>Longer Tenure:</strong> Lower monthly EMI but higher total interest paid. This provides more breathing room in your monthly budget but costs more over time. It effectively acts like <Link href="/calculators/compound-interest" className="text-indigo-600 hover:underline">compound interest</Link> working against you.
                                    </li>
                                </ul>
                                <p className="text-gray-600 dark:text-gray-300 mt-3">
                                    <em>Example:</em> A ₹10 lakh loan at 10% interest for 10 years results in an EMI of ₹13,215 with total interest of ₹5.86 lakhs. The same loan for 20 years has an EMI of ₹9,650 but total interest of ₹13.16 lakhs—more than double!
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    2. Interest Rate
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Even a small difference in interest rates can significantly impact your EMI and total cost. A 1% increase in interest rate can add thousands to your total payment over a long tenure. Always compare rates from multiple lenders and negotiate for the best deal.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    3. Principal Amount
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    The loan amount directly affects your EMI—higher principal means higher EMI. Consider making a larger down payment to reduce the principal amount, which will lower both your monthly EMI and total interest burden.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Real Loan Examples Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Real Loan Examples & Comparisons
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🏠</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Home Loan</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                ₹50 lakhs at 8.5% for 20 years
                            </p>
                            <div className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Calculation:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Monthly EMI: ₹43,391<br />
                                    Total Interest: ₹54,13,840<br />
                                    Total Payment: ₹1,04,13,840<br />
                                    <strong className="text-blue-600">Interest = 108% of principal!</strong>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🚗</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Car Loan</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                ₹8 lakhs at 9.5% for 5 years
                            </p>
                            <div className="bg-purple-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Calculation:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Monthly EMI: ₹16,761<br />
                                    Total Interest: ₹2,05,660<br />
                                    Total Payment: ₹10,05,660<br />
                                    <strong className="text-purple-600">Interest = 26% of principal</strong>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">💰</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Personal Loan</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                ₹3 lakhs at 14% for 3 years
                            </p>
                            <div className="bg-green-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Calculation:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Monthly EMI: ₹10,280<br />
                                    Total Interest: ₹70,080<br />
                                    Total Payment: ₹3,70,080<br />
                                    <strong className="text-green-600">Interest = 23% of principal</strong>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Education Loan</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                ₹15 lakhs at 10.5% for 10 years
                            </p>
                            <div className="bg-orange-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Calculation:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Monthly EMI: ₹20,076<br />
                                    Total Interest: ₹9,09,120<br />
                                    Total Payment: ₹24,09,120<br />
                                    <strong className="text-orange-600">Interest = 61% of principal</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tenure Impact Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Tenure Impact: 10 vs 15 vs 20 Years
                    </h2>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            See how tenure affects EMI and total interest for a ₹30 lakh loan at 9% interest:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-gray-900">
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Tenure</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Monthly EMI</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Total Interest</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Total Payment</th>
                                        <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Interest %</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">10 Years</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹38,008</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-700 dark:text-green-400 font-bold">₹15,60,960</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹45,60,960</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-600 font-bold">52%</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">15 Years</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹30,426</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-orange-700 dark:text-orange-400">₹24,76,680</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹54,76,680</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-orange-600">83%</td>
                                    </tr>
                                    <tr className="bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30">
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">20 Years</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹26,992</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-red-700 dark:text-red-400 font-bold">₹34,78,080</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">₹64,78,080</td>
                                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-red-600 font-bold">116%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 italic">
                            <strong>Key Insight:</strong> 20-year tenure saves ₹11,016/month but costs ₹19,17,120 more in interest compared to 10 years!
                        </p>
                    </div>
                </section>

                {/* Smart Tips Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        💡 Smart EMI Management Tips
                    </h2>

                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-yellow-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                                    <span className="text-green-600 mr-2">✓</span> Before Taking Loan
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Keep EMI below 40-50% of monthly income</li>
                                    <li>• Compare rates from 3-4 lenders</li>
                                    <li>• Check processing fees and hidden charges</li>
                                    <li>• Maintain good credit score (750+) for better rates</li>
                                    <li>• Make larger down payment to reduce principal</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                                    <span className="text-blue-600 mr-2">✓</span> During Loan Tenure
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Never miss EMI payments (affects credit score)</li>
                                    <li>• Use bonuses/windfalls for prepayment</li>
                                    <li>• Prepay in early years for maximum benefit</li>
                                    <li>• Consider balance transfer if rates drop</li>
                                    <li>• Review and optimize tenure periodically</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                                    <span className="text-purple-600 mr-2">✓</span> Prepayment Strategy
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Prepay in first 5 years for max savings</li>
                                    <li>• Choose tenure reduction over EMI reduction</li>
                                    <li>• Check prepayment penalty clauses</li>
                                    <li>• Home loans: No prepayment penalty (RBI rule)</li>
                                    <li>• Personal loans: May have 2-5% penalty</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                                    <span className="text-orange-600 mr-2">✓</span> Common Mistakes to Avoid
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• Don't take maximum eligible loan amount</li>
                                    <li>• Avoid very long tenures (20+ years)</li>
                                    <li>• Don't ignore processing fees in comparison</li>
                                    <li>• Never use personal loan for investments</li>
                                    <li>• Don't delay EMI payments even by a day</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What is a good EMI ratio?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    A good EMI ratio is typically 40-50% of your monthly income. Financial experts recommend that your total EMI obligations (including all loans) should not exceed 50% of your net monthly income. This ensures you have sufficient funds for other expenses and savings while maintaining a healthy debt-to-income ratio.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Does tenure affect my total interest?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Yes, loan tenure significantly affects your total interest payment. A longer tenure reduces your monthly EMI but increases the total interest paid over the loan period. Conversely, a shorter tenure means higher monthly EMIs but lower overall interest costs. For example, a 20-year loan will have much higher total interest than a 10-year loan for the same principal and interest rate.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Can I prepay my loan?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Yes, most loans allow prepayment, though terms vary by lender. Home loans typically allow prepayment without penalties, while some personal loans may charge a prepayment fee (usually 2-5% of the outstanding amount). Prepaying your loan reduces the principal amount, which in turn reduces your total interest burden and can help you become debt-free faster.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Should I choose EMI reduction or tenure reduction when prepaying?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Tenure reduction is generally better than EMI reduction. When you reduce tenure, you save more on total interest and become debt-free faster. EMI reduction gives you monthly cash flow relief but you continue paying interest for the original tenure. Example: ₹10L prepayment on ₹50L loan can save ₹15L+ in interest with tenure reduction vs ₹8L with EMI reduction.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What happens if I miss an EMI payment?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Missing an EMI has serious consequences: (1) Late payment charges (₹500-₹1,000), (2) Penal interest (2-3% extra on outstanding), (3) Negative impact on credit score (can drop by 50-100 points), (4) Loan marked as NPA after 90 days, (5) Legal action and asset seizure possible. Always inform your lender in advance if facing payment difficulties.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How does EMI calculation work for floating rate loans?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Floating rate loans are linked to external benchmarks (repo rate, MCLR). When rates change, lenders typically adjust either your EMI or tenure. Most banks now adjust EMI while keeping tenure constant. If repo rate increases by 0.5%, your EMI increases proportionally. Conversely, rate cuts reduce your EMI. Always check your loan agreement for rate reset frequency (quarterly/annually).
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What's the difference between reducing balance and flat rate EMI?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Reducing balance calculates interest on outstanding principal (decreases monthly). Flat rate calculates interest on original principal throughout. Example: ₹10L at 10% for 5 years. Reducing balance: Total interest ≈ ₹2.75L. Flat rate: Total interest = ₹5L. Most banks use reducing balance. If a lender quotes flat rate, the effective rate is nearly double!
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Can I get tax benefits on EMI payments?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Yes, for home loans: (1) Principal repayment: ₹1.5L deduction under Section 80C, (2) Interest payment: ₹2L deduction under Section 24(b), (3) First-time buyers: Additional ₹50K under Section 80EE. Education loans: Full interest deduction under Section 80E for 8 years. Car/personal loans: No tax benefits available.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    When is the best time to prepay a loan?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Prepay as early as possible, ideally in the first 5 years. In early years, most of your EMI goes toward interest. Prepaying reduces principal, which dramatically cuts future interest. Example: ₹5L prepayment in year 1 saves ₹8-10L in interest. Same prepayment in year 15 saves only ₹1-2L. The earlier you prepay, the more you save!
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Should I take a loan with lower EMI or lower total interest?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    It depends on your financial situation. If cash flow is tight, choose lower EMI (longer tenure) for breathing room. If you can afford higher EMI, choose lower total interest (shorter tenure) to save money long-term. Ideal approach: Start with comfortable EMI, then prepay aggressively when you have surplus funds. This gives flexibility while minimizing interest.
                                </p>
                            </div>
                        </details>
                    </div>
                </section>

                {/* Keep Learning Section */}
                <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                        Keep Learning
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 italic">Detailed Guides:</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/blog/what-is-emi-calculator" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> Essential Guide to EMI Components
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/simple-vs-compound-interest" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> Simple vs Compound Interest: Which is better?
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 italic">Related Tools:</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/calculators/compound-interest" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> Compound Interest Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/calculators/simple-interest" className="text-indigo-600 hover:underline flex items-center">
                                        <span className="mr-2">→</span> Simple Interest Calculator
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
