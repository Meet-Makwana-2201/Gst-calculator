'use client';

export default function SIPCalculatorContent() {
    return (
        <div className="mt-16 space-y-12">
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Mastering Wealth with SIP</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p>
                        A <strong>Systematic Investment Plan (SIP)</strong> is a smart and hassle-free mode for investing in mutual funds. It allows you to invest a fixed amount of money at regular intervals, such as monthly, rather than making a one-time lump sum payment. Whether you are using a <strong>monthly SIP calculator</strong> or planning a <strong>step-up SIP</strong>, consistency is key.
                    </p>
                    <p>
                        SIPs are popular because they instill financial discipline and leverage the power of <strong>compounding</strong> and <strong>rupee cost averaging</strong>. Even with small amounts, regular SIPs are the most effective way for <strong>wealth creation</strong> over the long term.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">How SIP Calculation Works</h3>
                    <p>The calculation uses the formula for the future value of an annuity certain:</p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl font-mono text-center my-6">
                        FV = P × [ ( (1 + r)^n - 1 ) / r ] × (1 + r)
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>FV:</strong> Future Value of the investment</li>
                        <li><strong>P:</strong> Monthly Investment Amount</li>
                        <li><strong>r:</strong> Monthly Rate of Return (Annual Rate / 12 / 100)</li>
                        <li><strong>n:</strong> Number of Installments (Months)</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Top Benefits of SIP</h3>
                    <div className="grid md:grid-cols-2 gap-6 not-prose">
                        <div className="p-5 border border-indigo-100 dark:border-indigo-800 rounded-xl bg-indigo-50/50 dark:bg-indigo-900/10">
                            <h4 className="font-bold text-indigo-600 mb-2">Power of Compounding</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">When you invest regularly, your returns themselves start earning returns. Over 10-20 years, this exponential growth becomes the primary driver of wealth.</p>
                        </div>
                        <div className="p-5 border border-purple-100 dark:border-purple-800 rounded-xl bg-purple-50/50 dark:bg-purple-900/10">
                            <h4 className="font-bold text-purple-600 mb-2">Rupee Cost Averaging</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">By investing a fixed amount every month, you buy more units when prices are low and fewer units when prices are high, lowering your average cost per unit.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            Is SIP better than Lumpsum investment?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            For most people, yes. While lumpsum can be better if you time the market perfectly, SIPs remove the need for market timing risk. SIPs are generally more sustainable for regular income earners and provide the benefit of rupee cost averaging during market volatility.
                        </p>
                    </details>
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            Can I stop my SIP anytime?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Yes, most SIPs in mutual funds are completely flexible. You can pause, stop, or increase the SIP amount (Top-up SIP) depending on your financial situation. There is usually no penalty for stopping a mutual fund SIP.
                        </p>
                    </details>
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            What is a realistic return rate to expect?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Historically, Indian equity mutual funds have delivered returns in the range of 10% to 15% over long periods (10+ years). However, returns are not guaranteed and depend on market performance. For conservative planning, many investors use 12% as a benchmark.
                        </p>
                    </details>
                </div>
            </section>
        </div>
    );
}
