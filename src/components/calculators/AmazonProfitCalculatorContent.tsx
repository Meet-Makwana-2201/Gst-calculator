'use client';

export default function AmazonProfitCalculatorContent() {
    return (
        <div className="mt-16 space-y-12">
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Calculating Amazon Marketplace Profitability</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p>
                        Selling on Amazon can be a highly lucrative business, but the fee structure is complex. Many sellers make the mistake of looking only at their <strong>Selling Price</strong> and <strong>Cost of Goods Sold (COGS)</strong>, ignoring the hidden costs and <strong>Amazon FBA fees</strong> that eat into their <strong>ROI (Return on Investment)</strong>.
                    </p>
                    <p>
                        To truly understand your take-home profit, you must account for Amazon&apos;s referral fees, shipping costs, and advertising expenses using a reliable <strong>Amazon seller fee calculator</strong>.
                    </p>

                    <h3 className="text-2xl font-bold mt-8 mb-4">Breakdown of Amazon Seller Fees</h3>
                    <div className="space-y-4 not-prose">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800">
                            <span className="text-2xl">💰</span>
                            <div>
                                <h4 className="font-bold text-orange-700 dark:text-orange-400">Referral Fees</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">A percentage of the total sales price that Amazon charges for every item sold. This varies by category, typically ranging from 8% to 15%.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-800">
                            <span className="text-2xl">📦</span>
                            <div>
                                <h4 className="font-bold text-red-700 dark:text-red-400">Closing Fees / Fixed Fees</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">A flat fee charged based on the price range of your product.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-800">
                            <span className="text-2xl">🚚</span>
                            <div>
                                <h4 className="font-bold text-yellow-700 dark:text-yellow-400">Fulfillment (FBA) vs. Self-Ship Costs</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Costs associated with picking, packing, and shipping your product to the customer.</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mt-12 mb-4">How to Improve Your Net Margins</h3>
                    <p>
                        If your calculations show a net margin below 10%, you are in a high-risk zone. Consider these strategies to help boost your profitability:
                    </p>
                    <ul>
                        <li><strong>Bundling:</strong> Sell multiple units together to pay the shipping fee only once.</li>
                        <li><strong>Reduce Return Rates:</strong> High returns lead to wasted shipping and handling fees.</li>
                        <li><strong>Optimize Packaging:</strong> Smaller and lighter packages fall into lower FBA shipping tiers.</li>
                    </ul>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            Does this calculator include GST?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            This calculator provides a general estimate. Depending on your region, Amazon might charge GST on their fees (input tax credit works here) and you may need to collect GST from your customers. You should input your "Post-GST" landing cost for more accurate results.
                        </p>
                    </details>
                    <details className="group border-b border-gray-100 dark:border-gray-700 pb-4">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-gray-900 dark:text-gray-100">
                            What is a good profit margin for Amazon FBA?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            A healthy net profit margin for an Amazon seller usually falls between 15% and 25%. Anything above 30% is considered excellent, while margins below 10% can be dangerous due to unpredictable advertising costs and returns.
                        </p>
                    </details>
                </div>
            </section>
        </div>
    );
}
