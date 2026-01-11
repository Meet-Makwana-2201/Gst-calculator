import Script from "next/script";

export default function PercentageCalculatorContent() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I calculate percentage increase?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To calculate percentage increase, subtract the original value from the new value, divide by the original value, and multiply by 100. Formula: [(New Value - Original Value) / Original Value] × 100. For example, if a price increases from ₹100 to ₹120, the percentage increase is [(120-100)/100] × 100 = 20%."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between percentage and percentile?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Percentage represents a portion out of 100 (e.g., 75% means 75 out of 100). Percentile indicates the position of a value in a dataset relative to others (e.g., 75th percentile means the value is greater than 75% of the data). Percentage is a ratio, while percentile is a rank or position."
                }
            },
            {
                "@type": "Question",
                "name": "How do I find what percentage one number is of another?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Divide the first number by the second number and multiply by 100. Formula: (Part / Whole) × 100. For example, to find what percentage 25 is of 200: (25/200) × 100 = 12.5%. This is useful for calculating discounts, completion rates, and proportions."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="percentage-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        How to Use This Percentage Calculator
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300">
                            Our percentage calculator helps you solve various percentage problems quickly and accurately:
                        </p>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li>
                                <strong>Calculate Percentage:</strong> Enter the part and whole values to find what percentage one number is of another.
                            </li>
                            <li>
                                <strong>Find Percentage Value:</strong> Input the percentage and total to calculate the actual value (e.g., 20% of 500).
                            </li>
                            <li>
                                <strong>Percentage Increase/Decrease:</strong> Enter original and new values to calculate the percentage change.
                            </li>
                            <li>
                                <strong>Reverse Calculation:</strong> Find the original value when you know the percentage and final value.
                            </li>
                            <li>
                                <strong>Instant Results:</strong> All calculations update in real-time as you type.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Common Percentage Formulas
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="space-y-6">
                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-indigo-600">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Basic Percentage Formula
                                </h3>
                                <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100 mb-2">
                                    Percentage = (Part / Whole) × 100
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Example: What percentage is 30 of 150? → (30/150) × 100 = 20%
                                </p>
                            </div>

                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-purple-600">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Percentage Increase
                                </h3>
                                <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100 mb-2">
                                    % Increase = [(New Value - Old Value) / Old Value] × 100
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Example: Price increased from ₹100 to ₹125 → [(125-100)/100] × 100 = 25%
                                </p>
                            </div>

                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-pink-600">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Percentage Decrease
                                </h3>
                                <p className="text-center text-lg font-mono text-gray-900 dark:text-gray-100 mb-2">
                                    % Decrease = [(Old Value - New Value) / Old Value] × 100
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Example: Price dropped from ₹200 to ₹150 → [(200-150)/200] × 100 = 25%
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Real-World Applications
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Business & Finance
                                </h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                                    <li>• Calculate profit margins and markups</li>
                                    <li>• Determine sales tax and discounts</li>
                                    <li>• Analyze revenue growth rates</li>
                                    <li>• Track expense percentages</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Education & Grades
                                </h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                                    <li>• Convert marks to percentages</li>
                                    <li>• Calculate grade point averages</li>
                                    <li>• Determine passing percentages</li>
                                    <li>• Track academic improvement</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Shopping & Savings
                                </h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                                    <li>• Calculate discount percentages</li>
                                    <li>• Compare price changes</li>
                                    <li>• Determine savings amounts</li>
                                    <li>• Evaluate cashback offers</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                    Health & Fitness
                                </h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                                    <li>• Track weight loss/gain percentages</li>
                                    <li>• Calculate body fat percentages</li>
                                    <li>• Monitor fitness improvements</li>
                                    <li>• Measure nutritional values</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Detailed Real-World Examples
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🛍️</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Shopping Discount</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                A shirt costs ₹1,200 with a 30% discount. How much do you save and pay?
                            </p>
                            <div className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Calculation:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Discount = 30% of ₹1,200<br />
                                    = (30/100) × 1,200 = ₹360<br />
                                    Final Price = ₹1,200 - ₹360 = ₹840<br />
                                    <strong className="text-green-600">You save ₹360!</strong>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">💰</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Salary Hike</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                Your salary increased from ₹40,000 to ₹48,000. What's the percentage increase?
                            </p>
                            <div className="bg-purple-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Calculation:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Increase = ₹48,000 - ₹40,000 = ₹8,000<br />
                                    % Increase = (8,000/40,000) × 100<br />
                                    = 0.20 × 100 = 20%<br />
                                    <strong className="text-purple-600">20% salary hike!</strong>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Exam Score</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                You scored 432 marks out of 600. What's your percentage?
                            </p>
                            <div className="bg-green-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Calculation:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Percentage = (Marks Obtained / Total Marks) × 100<br />
                                    = (432/600) × 100<br />
                                    = 0.72 × 100 = 72%<br />
                                    <strong className="text-green-600">You scored 72%!</strong>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-2xl">🏋️</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Weight Loss</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                You lost weight from 80kg to 72kg. What's the percentage decrease?
                            </p>
                            <div className="bg-orange-50 dark:bg-gray-900 p-4 rounded-lg">
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Calculation:</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Weight Lost = 80 - 72 = 8kg<br />
                                    % Decrease = (8/80) × 100<br />
                                    = 0.10 × 100 = 10%<br />
                                    <strong className="text-orange-600">10% weight loss!</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Advanced Percentage Scenarios
                    </h2>

                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-indigo-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Successive Discounts: 20% + 10% ≠ 30%
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong>Problem:</strong> A product costs ₹1,000. First, a 20% discount is applied, then an additional 10% discount. What's the final price?
                            </p>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                                <p className="font-mono text-sm text-gray-900 dark:text-gray-100 mb-2">
                                    <strong>Step 1:</strong> Apply first discount (20%)
                                </p>
                                <p className="font-mono text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    Price after 20% off = ₹1,000 - (20% of ₹1,000)<br />
                                    = ₹1,000 - ₹200 = ₹800
                                </p>
                                <p className="font-mono text-sm text-gray-900 dark:text-gray-100 mb-2">
                                    <strong>Step 2:</strong> Apply second discount (10% on ₹800)
                                </p>
                                <p className="font-mono text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    Price after 10% off = ₹800 - (10% of ₹800)<br />
                                    = ₹800 - ₹80 = ₹720
                                </p>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                                    <strong>Total Discount:</strong> ₹1,000 - ₹720 = ₹280 (28%, not 30%!)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-purple-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Reverse Percentage: Finding Original Price
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong>Problem:</strong> After a 25% discount, you paid ₹750. What was the original price?
                            </p>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                                <p className="font-mono text-sm text-gray-900 dark:text-gray-100 mb-2">
                                    <strong>Logic:</strong> If 25% discount, you paid 75% of original price
                                </p>
                                <p className="font-mono text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    75% of Original Price = ₹750<br />
                                    (75/100) × Original Price = ₹750<br />
                                    Original Price = ₹750 × (100/75)<br />
                                    Original Price = ₹1,000
                                </p>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                                    <strong>Verification:</strong> 25% of ₹1,000 = ₹250 discount → Final = ₹750 ✓
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Business & Finance Applications
                    </h2>

                    <div className="space-y-4">
                        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">📊</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                                        Profit Margin Calculation
                                    </span>
                                </div>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                                <p className="mb-3">Calculate profit margin to understand business profitability:</p>
                                <div className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg">
                                    <p className="text-sm mb-2"><strong>Example:</strong> Product cost = ₹600, Selling price = ₹900</p>
                                    <p className="text-sm font-mono">
                                        Profit = ₹900 - ₹600 = ₹300<br />
                                        Profit Margin = (Profit / Selling Price) × 100<br />
                                        = (300/900) × 100 = 33.33%
                                    </p>
                                    <p className="text-sm mt-2 text-blue-700 dark:text-blue-400"><em>33.33% profit margin is healthy for retail!</em></p>
                                </div>
                            </div>
                        </details>

                        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">💳</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                                        Credit Card Interest
                                    </span>
                                </div>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                                <p className="mb-3">Understanding credit card charges:</p>
                                <div className="bg-purple-50 dark:bg-gray-900 p-4 rounded-lg">
                                    <p className="text-sm mb-2"><strong>Scenario:</strong> Outstanding balance = ₹50,000, Monthly interest = 3%</p>
                                    <p className="text-sm font-mono">
                                        Monthly Interest = 3% of ₹50,000<br />
                                        = (3/100) × 50,000 = ₹1,500<br />
                                        Annual Interest Rate = 3% × 12 = 36%
                                    </p>
                                    <p className="text-sm mt-2 text-red-700 dark:text-red-400"><em>Always pay full balance to avoid high interest!</em></p>
                                </div>
                            </div>
                        </details>

                        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">📈</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                                        Investment Returns
                                    </span>
                                </div>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                                <p className="mb-3">Calculate returns on your investments:</p>
                                <div className="bg-green-50 dark:bg-gray-900 p-4 rounded-lg">
                                    <p className="text-sm mb-2"><strong>Example:</strong> Invested ₹1,00,000, Current value = ₹1,35,000</p>
                                    <p className="text-sm font-mono">
                                        Gain = ₹1,35,000 - ₹1,00,000 = ₹35,000<br />
                                        Return % = (Gain / Investment) × 100<br />
                                        = (35,000/1,00,000) × 100 = 35%
                                    </p>
                                    <p className="text-sm mt-2 text-green-700 dark:text-green-400"><em>35% return is excellent!</em></p>
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        💡 Quick Percentage Tricks
                    </h2>

                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-yellow-200 dark:border-gray-700">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                                    <span className="text-blue-600 mr-2">⚡</span> Mental Math Shortcuts
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• <strong>10%:</strong> Divide by 10 (move decimal left)</li>
                                    <li>• <strong>5%:</strong> Half of 10%</li>
                                    <li>• <strong>1%:</strong> Divide by 100</li>
                                    <li>• <strong>25%:</strong> Divide by 4 (quarter)</li>
                                    <li>• <strong>50%:</strong> Divide by 2 (half)</li>
                                    <li>• <strong>75%:</strong> 50% + 25%</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                                    <span className="text-green-600 mr-2">✓</span> Quick Examples
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• 10% of ₹850 = ₹85</li>
                                    <li>• 5% of ₹850 = ₹42.50</li>
                                    <li>• 25% of ₹800 = ₹200</li>
                                    <li>• 50% of ₹1,200 = ₹600</li>
                                    <li>• 75% of ₹400 = ₹300</li>
                                    <li>• 15% = 10% + 5%</li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                                    <span className="text-purple-600 mr-2">🔄</span> Percentage Symmetry
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• 20% of 50 = 50% of 20 = 10</li>
                                    <li>• 8% of 25 = 25% of 8 = 2</li>
                                    <li>• 16% of 50 = 50% of 16 = 8</li>
                                    <li>• <em>Flip numbers for easier calculation!</em></li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                                    <span className="text-orange-600 mr-2">📐</span> Fraction Equivalents
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                                    <li>• 50% = 1/2</li>
                                    <li>• 25% = 1/4</li>
                                    <li>• 33.33% = 1/3</li>
                                    <li>• 20% = 1/5</li>
                                    <li>• 10% = 1/10</li>
                                    <li>• <em>Use fractions for quick mental math!</em></li>
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
                                    How do I calculate percentage increase?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    To calculate percentage increase, subtract the original value from the new value, divide by the original value, and multiply by 100. Formula: [(New Value - Original Value) / Original Value] × 100. For example, if a price increases from ₹100 to ₹120, the percentage increase is [(120-100)/100] × 100 = 20%.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What is the difference between percentage and percentile?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Percentage represents a portion out of 100 (e.g., 75% means 75 out of 100). Percentile indicates the position of a value in a dataset relative to others (e.g., 75th percentile means the value is greater than 75% of the data). Percentage is a ratio, while percentile is a rank or position.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How do I find what percentage one number is of another?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Divide the first number by the second number and multiply by 100. Formula: (Part / Whole) × 100. For example, to find what percentage 25 is of 200: (25/200) × 100 = 12.5%. This is useful for calculating discounts, completion rates, and proportions.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Why do successive discounts not add up?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Successive discounts are applied sequentially, not additively. The second discount is calculated on the already-reduced price, not the original price. For example, 20% + 10% discount on ₹100: First discount = ₹20 (price becomes ₹80), Second discount = 10% of ₹80 = ₹8 (final price ₹72). Total discount = ₹28 (28%), not ₹30 (30%).
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How do I calculate the original price after a discount?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    If you know the discounted price and discount percentage, use: Original Price = Discounted Price / (1 - Discount%/100). Example: Paid ₹800 after 20% discount. Original = 800 / (1 - 0.20) = 800 / 0.80 = ₹1,000. Alternatively: If 20% off, you paid 80%, so Original = (800 × 100) / 80 = ₹1,000.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What's the difference between markup and margin?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Markup is profit as a percentage of cost. Margin is profit as a percentage of selling price. Example: Cost = ₹100, Selling Price = ₹150, Profit = ₹50. Markup = (50/100) × 100 = 50%. Margin = (50/150) × 100 = 33.33%. Markup is always higher than margin for the same transaction.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How do I calculate percentage change between two numbers?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Use the formula: [(New Value - Old Value) / Old Value] × 100. If the result is positive, it's an increase. If negative, it's a decrease. Example: Sales changed from ₹50,000 to ₹45,000. Change = [(45,000 - 50,000) / 50,000] × 100 = -10%. This means a 10% decrease in sales.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Can percentages exceed 100%?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Yes! Percentages can exceed 100% in growth scenarios. If a stock price increases from ₹100 to ₹300, the percentage increase is [(300-100)/100] × 100 = 200%. This means the price tripled (increased by 200% of the original value). However, percentage decrease cannot exceed 100% (you can't lose more than everything).
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How do I convert percentage to decimal and vice versa?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    To convert percentage to decimal: Divide by 100 (or move decimal point two places left). Example: 45% = 45/100 = 0.45. To convert decimal to percentage: Multiply by 100 (or move decimal point two places right). Example: 0.75 = 0.75 × 100 = 75%. This is useful for calculations and formulas.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What's the easiest way to calculate 15% tip at a restaurant?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Quick method: Find 10% (move decimal left), then add half of that for 5%. Example: Bill = ₹850. 10% = ₹85. 5% = ₹42.50. Total 15% tip = ₹85 + ₹42.50 = ₹127.50. Even quicker: 15% ≈ 1/7 of the bill (slightly less). For ₹850, 1/7 ≈ ₹121. Round up to ₹130 for convenience!
                                </p>
                            </div>
                        </details>
                    </div>
                </section>
            </div>
        </>
    );
}
