'use client';

export default function LoanCalculatorContent() {
    return (
        <div className="mt-16 space-y-12">
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Understanding Your Loan & EMI</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p>
                        Whether you are planning to buy a home, finance a new car, or take a personal loan for an emergency, understanding the cost of borrowing and your <strong>loan eligibility</strong> is crucial. A <strong>Loan Calculator</strong> (or <strong>EMI Calculator</strong>) helps you visualize the long-term impact of interest rates and tenure on your monthly budget.
                    </p>
                    <p>
                        Most loans today operate on an <strong>Equated Monthly Installment (EMI)</strong> basis using the <strong>reducing balance method</strong>. This means you pay a fixed amount every month until the loan is fully repaid. This amount consists of both the principal repayment and the interest charged by the bank.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">How EMI is Calculated</h3>
                    <p>The standard mathematical formula to calculate EMI is:</p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl font-mono text-center my-6">
                        EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>P:</strong> Principal Loan Amount</li>
                        <li><strong>R:</strong> Monthly Interest Rate (Annual Rate / 12 / 100)</li>
                        <li><strong>N:</strong> Loan Tenure in months</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Key Factors Influencing Your Loan</h3>
                    <div className="grid md:grid-cols-2 gap-6 not-prose">
                        <div className="p-5 border border-gray-100 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                            <h4 className="font-bold text-blue-600 mb-2">Interest Rate</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Even a 0.5% difference in the annual interest rate can save or cost you thousands of rupees over a 20-year home loan.</p>
                        </div>
                        <div className="p-5 border border-gray-100 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900/50">
                            <h4 className="font-bold text-indigo-600 mb-2">Loan Tenure</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">A longer tenure reduces your monthly EMI but significantly increases the total interest you pay over the life of the loan.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            What is the difference between a Loan Calculator and an EMI Calculator?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            They are often used interchangeably. However, a Loan Calculator usually focuses on the total cost of the loan (Principal + Interest), whereas an EMI Calculator focuses on your monthly outflow. Our tool provides both views to give you a complete picture.
                        </p>
                    </details>
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            Does this calculator work for all types of loans?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Yes, this calculator uses the standard reducing balance method used by banks for Home Loans, Car Loans, Personal Loans, and Education Loans. Note that Gold Loans or some Business Loans might use a flat interest rate method, which results in different EMIs.
                        </p>
                    </details>
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            How can I reduce my total interest payout?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            The best ways to reduce interest are: 1. Making a larger down payment. 2. Choosing a shorter loan tenure. 3. Making part-prepayments during the loan period (which our <i>EMI with Preclosure</i> tool can help you calculate).
                        </p>
                    </details>
                </div>
            </section>
        </div>
    );
}
