import DiscountCalculator from "@/components/calculators/DiscountCalculator";
import DiscountCalculatorContent from "@/components/calculators/DiscountCalculatorContent";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "Discount Calculator | Calculate Sale Price & Savings",
    description: "Calculate the final price after discount. Find out how much you save on sales and offers. Easy to use discount calculator.",
    keywords: ["discount calculator", "sale price calculator", "shopping calculator", "percentage off calculator"],
    alternates: {
        canonical: "https://onecalculator.online/calculators/discount",
    },
    openGraph: {
        title: "Discount Calculator - Calculate Sale Price",
        description: "Find out the final price and your savings with our free discount calculator.",
        url: "/calculators/discount",
        type: "website",
    },
};

export default function DiscountPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Discount Calculator",
        "applicationCategory": "FinanceApplication",
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
                "name": "How to calculate discount percentage in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To calculate discount percentage, use this formula: Discount % = (Discount Amount ÷ Original Price) × 100. For example, if a product is originally ₹800 and sold for ₹600, the discount amount is ₹200. So discount % = (200 ÷ 800) × 100 = 25%. Use our free discount calculator to get instant results."
                }
            },
            {
                "@type": "Question",
                "name": "How to calculate sale price after discount?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sale price after discount = Original Price × (1 − Discount% ÷ 100). For example, on a ₹1,000 item with 30% discount: Sale Price = 1000 × (1 − 0.30) = ₹700. You save ₹300. Enter any original price and discount percentage in our calculator to get the final price instantly."
                }
            },
            {
                "@type": "Question",
                "name": "What is MRP and how is discount calculated on MRP?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MRP (Maximum Retail Price) is the highest price at which a product can be sold in India as per the Legal Metrology Act. Discount on MRP is calculated as: Discount Amount = MRP − Selling Price. Discount % = (Discount Amount ÷ MRP) × 100. Retailers and e-commerce platforms like Amazon and Flipkart always show discounts based on MRP."
                }
            },
            {
                "@type": "Question",
                "name": "How much do I save on a 50% discount on a ₹2000 item?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "On a 50% discount on a ₹2,000 item: Savings = ₹2,000 × 50 ÷ 100 = ₹1,000. Final price = ₹2,000 − ₹1,000 = ₹1,000. You save ₹1,000 and pay only ₹1,000. Use our discount calculator to instantly compute savings for any price and discount percentage."
                }
            },
            {
                "@type": "Question",
                "name": "How to calculate successive discounts — like 20% off then another 10% off?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Successive discounts are NOT simply added. For 20% followed by 10% off: Step 1 — apply 20% off ₹1,000 = ₹800. Step 2 — apply 10% off ₹800 = ₹720. Total saving = ₹280, not 30% of ₹1,000 (₹300). The effective combined discount = 100 − (80 × 90 ÷ 100) = 28%. Always calculate step by step for accuracy."
                }
            },
            {
                "@type": "Question",
                "name": "Discount calculate kaise kare? (How to calculate discount?)",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Discount calculate karne ke liye: Discount Amount = Original Price × Discount% ÷ 100. Final Price = Original Price − Discount Amount. Example: ₹500 item par 20% discount — Discount = 500 × 20 ÷ 100 = ₹100. Final Price = ₹400. Hamare free discount calculator mein price aur percent enter karein, answer turant milega."
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
                        Discount Calculator
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Calculate the sale price and your savings. Perfect for shopping and sales.
                    </p>
                </div>
                <DiscountCalculator />
            </section>

            <section className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <DiscountCalculatorContent />
            </section>
        </main>
    );
}
