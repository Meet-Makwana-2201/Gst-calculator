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
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                How do I calculate percentage increase?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                To calculate percentage increase, subtract the original value from the new value, divide by the original value, and multiply by 100. Formula: [(New Value - Original Value) / Original Value] × 100. For example, if a price increases from ₹100 to ₹120, the percentage increase is [(120-100)/100] × 100 = 20%.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                What is the difference between percentage and percentile?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Percentage represents a portion out of 100 (e.g., 75% means 75 out of 100). Percentile indicates the position of a value in a dataset relative to others (e.g., 75th percentile means the value is greater than 75% of the data). Percentage is a ratio, while percentile is a rank or position.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-lg border border-indigo-200 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                How do I find what percentage one number is of another?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Divide the first number by the second number and multiply by 100. Formula: (Part / Whole) × 100. For example, to find what percentage 25 is of 200: (25/200) × 100 = 12.5%. This is useful for calculating discounts, completion rates, and proportions.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
