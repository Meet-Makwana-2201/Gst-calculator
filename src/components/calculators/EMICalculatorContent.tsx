import Script from "next/script";

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
                                        <strong>Longer Tenure:</strong> Lower monthly EMI but higher total interest paid. This provides more breathing room in your monthly budget but costs more over time.
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

                {/* FAQ Section */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                What is a good EMI ratio?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                A good EMI ratio is typically 40-50% of your monthly income. Financial experts recommend that your total EMI obligations (including all loans) should not exceed 50% of your net monthly income. This ensures you have sufficient funds for other expenses and savings while maintaining a healthy debt-to-income ratio.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                Does tenure affect my total interest?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Yes, loan tenure significantly affects your total interest payment. A longer tenure reduces your monthly EMI but increases the total interest paid over the loan period. Conversely, a shorter tenure means higher monthly EMIs but lower overall interest costs. For example, a 20-year loan will have much higher total interest than a 10-year loan for the same principal and interest rate.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                Can I prepay my loan?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Yes, most loans allow prepayment, though terms vary by lender. Home loans typically allow prepayment without penalties, while some personal loans may charge a prepayment fee (usually 2-5% of the outstanding amount). Prepaying your loan reduces the principal amount, which in turn reduces your total interest burden and can help you become debt-free faster.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
