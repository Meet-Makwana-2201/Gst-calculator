'use client';

export default function LumpsumCalculatorContent() {
    return (
        <div className="mt-16 space-y-12">
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">What is a Lumpsum Investment?</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p>
                        A <strong>Lumpsum Investment</strong> is a one-time investment in a financial instrument, such as a mutual fund, fixed deposit, or equity market. Unlike a Systematic Investment Plan (SIP), where you invest small amounts regularly, here you invest your entire capital at once. This tool is a <strong>future value calculator for lumpsum</strong> investments.
                    </p>
                    <p>
                        Lumpsum investments are ideal when you have a large amount of surplus cash, such as a bonus, an inheritance, or proceeds from a property sale, and you want to ensure long-term <strong>wealth growth</strong>.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">How Lumpsum Returns are Calculated</h3>
                    <p>Lumpsum returns are based on the common <strong>compound interest formula</strong>:</p>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl font-mono text-center my-6">
                        FV = P × (1 + r/100)^n
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>FV:</strong> Future Value of your investment</li>
                        <li><strong>P:</strong> Principal (Initial) Investment Amount</li>
                        <li><strong>r:</strong> Annual Expected Return Rate</li>
                        <li><strong>n:</strong> Time period in years</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-8 mb-4">When to Choose Lumpsum Over SIP</h3>
                    <p>
                        While SIPs are generally more popular for their discipline, lumpsum investments can outperform SIPs in a steadily rising market (bull market) because your entire capital is exposed to growth from day one.
                    </p>
                    <ul>
                        <li><strong>Significant Capital:</strong> You already have the cash available.</li>
                        <li><strong>Long Horizon:</strong> You don&apos;t need the money for at least 5-10 years.</li>
                        <li><strong>Market Dips:</strong> Investing during a market correction or "crash" via lumpsum can lead to significantly higher returns once the market recovers.</li>
                    </ul>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            Which is better for me: SIP or Lumpsum?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            It depends on your cash flow. If you have a monthly salary, SIP is better. If you have a idle large amount of money in your savings account, a lumpsum investment (especially in a debt-to-equity STP) might be more effective.
                        </p>
                    </details>
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            What return percentage should I use for mutual funds?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            For equity mutual funds in India, investors commonly use 12% as a long-term average. For debt funds, 6-8% is more realistic. Always remember that past performance is not a guarantee of future returns.
                        </p>
                    </details>
                </div>
            </section>
        </div>
    );
}
