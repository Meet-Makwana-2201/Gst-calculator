'use client';

export default function MarginCalculatorContent() {
    return (
        <div className="mt-16 space-y-12">
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Margin vs. Markup: What&apos;s the Difference?</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p>
                        One of the most common points of confusion in business accounting is the difference between <strong>Profit Margin</strong> and <strong>Markup</strong>. While both express profit as a percentage, they use different denominators.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-8">
                        <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800">
                            <h3 className="text-emerald-700 dark:text-emerald-400 font-bold mb-3 mt-0">Profit Margin</h3>
                            <p className="text-sm mb-4">Margin is the ratio of profit to the <strong>Selling Price</strong>. It identifies how much of every dollar in sales actually ends up as profit.</p>
                            <p className="font-mono text-xs bg-white dark:bg-black p-2 rounded">Margin = (Profit / Selling Price) x 100</p>
                        </div>
                        <div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800">
                            <h3 className="text-teal-700 dark:text-teal-400 font-bold mb-3 mt-0">Markup</h3>
                            <p className="text-sm mb-4">Markup is the ratio of profit to the <strong>Cost Price</strong>. It is the percentage added to the cost to reach the selling price.</p>
                            <p className="font-mono text-xs bg-white dark:bg-black p-2 rounded">Markup = (Profit / Cost Price) x 100</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Why Margin Matters for Your Business</h3>
                    <p>
                        Knowing your gross profit margin is essential for determining if your business is sustainable. If your margins are too low, you may not be able to cover your operating expenses (rent, salaries, marketing) even if you have high sales volume.
                    </p>
                    <p>
                        Most industries have "standard" margins. For example, retail often targets a 50% margin (sometimes called "keystone pricing"), while software can have margins upwards of 80-90%.
                    </p>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            Can a profit margin be higher than 100%?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            No. By definition, profit margin is a percentage of the selling price. Since profit cannot exceed the selling price (unless the product had a negative cost), the margin will always be less than 100%. Markup, however, can easily exceed 100% (e.g., if you buy for ₹10 and sell for ₹30, your markup is 200%).
                        </p>
                    </details>
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            Should I use margin or markup to set my prices?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Financial statements usually deal with margins. If your goal is to have a 20% net profit, you should think in terms of margin. If you want to simply "add a bit on top" of what you paid, you are thinking in terms of markup. Both are valid as long as you understand the math behind them.
                        </p>
                    </details>
                </div>
            </section>
        </div>
    );
}
