'use client';

export default function EMIPreclosureCalculatorContent() {
    return (
        <div className="mt-16 space-y-12">
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">The Power of Part-Prepayment</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p>
                        Most people think of their home or car loan as a 20-year commitment that cannot be changed. However, the secret to becoming debt-free much faster lies in <strong>Principal Prepayment</strong> or <strong>Loan Foreclosure</strong>.
                    </p>
                    <p>
                        When you make a <strong>loan part-payment</strong> over and above your regular EMI, the entire amount goes directly towards reducing your <strong>Outstanding Principal</strong>. This reduces the base on which future interest is calculated, leading to a massive "snowball effect" of <strong>interest savings</strong>.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">How Much Can You Really Save?</h3>
                    <p>
                        Consider a ₹50 Lakh home loan at 9% interest for 20 years. Your total interest would be roughly ₹58 Lakhs (more than the actual loan itself!).
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                        <div className="p-6 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800 rounded-xl">
                            <h4 className="font-bold text-green-700 mb-1">Benefit 1: Interest Saving</h4>
                            <p className="text-sm">By paying just ₹10,000 extra every month, you could save over ₹25 Lakhs in interest payout over the life of the loan.</p>
                        </div>
                        <div className="p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-xl">
                            <h4 className="font-bold text-blue-700 mb-1">Benefit 2: Tenure Reduction</h4>
                            <p className="text-sm">That same ₹10,000 extra payment would reduce your 20-year (240 months) tenure by nearly 7 years (84 months).</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4">When Should You Prepay?</h3>
                    <p>
                        The best time to prepay is <strong>as early as possible</strong>. Because of the way reducing balance interest works, your interest component is highest in the first few years of the loan. Prepaying in the 2nd year saves much more money than prepaying the same amount in the 15th year.
                    </p>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            Do banks charge a penalty for pre-payment?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            As per RBI guidelines, banks in India cannot charge any foreclosure or pre-payment penalties on <strong>floating-rate</strong> home loans and other consumer loans. However, fixed-rate loans might still attract a penalty (usually 2-3%). Always check your loan agreement.
                        </p>
                    </details>
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            Is it better to reduce EMI or Tenure?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            From a purely mathematical standpoint, <strong>reducing your tenure</strong> is much more beneficial as it maximizes your interest savings. Reducing EMI gives you more monthly cash flow but doesn&apos;t save as much in the long run. Our calculator assumes you keep the EMI same and reduce the tenure.
                        </p>
                    </details>
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            Should I invest my extra cash or prepay my loan?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            If your loan interest rate is 9% and you can earn 12% from an investment, investing might seem better. However, loan interest is a "guaranteed" expense, while investment returns are not. For many, the peace of mind of being debt-free is more valuable than a 2-3% potential return delta.
                        </p>
                    </details>
                </div>
            </section>
        </div>
    );
}
