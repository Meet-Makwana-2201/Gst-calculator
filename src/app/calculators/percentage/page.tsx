import PercentageCalculator from "@/components/calculators/PercentageCalculator";
import PercentageCalculatorContent from "@/components/calculators/PercentageCalculatorContent";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "Percentage Calculator | Calculate Percentages Online",
    description: "Free online percentage calculator. Calculate percentages of numbers easily and accurately. Useful for discounts, tips, and simple math.",
    keywords: [
        "percentage calculator",
        "calculate percentage",
        "percentage formula",
        "percent increase calculator",
        "percentage of a number",
        "percentage calculator online"
    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/percentage",
    },
    openGraph: {
        title: "Percentage Calculator - Calculate Percentages Instantly",
        description: "Simple and fast percentage calculator for all your math needs.",
        url: "/calculators/percentage",
        type: "website",
    },
};

export default function PercentagePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Percentage Calculator",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How to calculate percentage of a number?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To calculate percentage of a number, use the formula: Result = (Percentage ÷ 100) × Number. For example, to find 15% of 500: (15 ÷ 100) × 500 = 75. So 15% of 500 is 75. This is useful for calculating discounts, tax amounts, and interest on financial amounts in India."
                }
            },
            {
                "@type": "Question",
                "name": "How to calculate percentage increase or percentage hike in salary?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Percentage increase = ((New Value − Old Value) ÷ Old Value) × 100. For a salary hike from ₹30,000 to ₹36,000: Increase = ((36,000 − 30,000) ÷ 30,000) × 100 = 20% hike. This formula works for any percentage increase calculation including price hikes, score improvements, and revenue growth."
                }
            },
            {
                "@type": "Question",
                "name": "How to find what percentage one number is of another?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To find what percentage A is of B: Percentage = (A ÷ B) × 100. Example: What percentage is 45 of 180? Answer = (45 ÷ 180) × 100 = 25%. This is commonly used by students to calculate marks percentage — e.g., scored 450 out of 600: (450 ÷ 600) × 100 = 75%."
                }
            },
            {
                "@type": "Question",
                "name": "How to calculate marks percentage for Class 10 or Class 12 board exams?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Marks percentage = (Total Marks Obtained ÷ Total Maximum Marks) × 100. For example, if a Class 12 student scores 450 out of 500: Percentage = (450 ÷ 500) × 100 = 90%. This applies to CBSE, ICSE, and all State Board exams. Enter your marks in our percentage calculator to get your score instantly."
                }
            },
            {
                "@type": "Question",
                "name": "How to calculate percentage decrease — for example price drop or weight loss?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Percentage decrease = ((Old Value − New Value) ÷ Old Value) × 100. Example 1 — Price drop: Petrol was ₹100, now ₹92. Decrease = ((100 − 92) ÷ 100) × 100 = 8%. Example 2 — Weight loss: Was 80 kg, now 72 kg. Decrease = ((80 − 72) ÷ 80) × 100 = 10% weight lost."
                }
            },
            {
                "@type": "Question",
                "name": "Percentage kaise nikaalte hain? (How to find percentage?)",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Percentage nikaalne ka formula: Percentage = (Part ÷ Whole) × 100. Example: Aapne exam mein 360 marks liye aur total 400 tha, toh percentage = (360 ÷ 400) × 100 = 90%. Salary hike ke liye: (Hike Amount ÷ Old Salary) × 100. Hamare free percentage calculator mein values dale aur turant answer paayein."
                }
            }
        ]
    };

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <JsonLd data={jsonLd} />
            <JsonLd data={faqSchema} />
            <section className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Percentage Calculator
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Calculate percentages instantly. Enter the value and the percentage to get the result.
                    </p>
                </div>
                <PercentageCalculator />
            </section>

            <section className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <PercentageCalculatorContent />
            </section>
        </main>
    );
}
