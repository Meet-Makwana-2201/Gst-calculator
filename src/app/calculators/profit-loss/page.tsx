import ProfitLossCalculator from "@/components/calculators/ProfitLossCalculator";
import ProfitLossCalculatorContent from "@/components/calculators/ProfitLossCalculatorContent";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "Profit & Loss Calculator | Calculate Profit Margin & Percentage",
    description: "Calculate profit or loss amount and percentage easily. Essential tool for businesses, traders, and students to determine financial outcomes.",
    keywords: [
        "profit and loss calculator",
        "profit margin calculator",
        "loss percentage calculator",
        "profit formula",
        "calculate profit"
    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/profit-loss",
    },
    openGraph: {
        title: "Profit & Loss Calculator - Calculate Margins",
        description: "Determine your profit or loss percentage and amount instantly.",
        url: "/calculators/profit-loss",
        type: "website",
    },
};

export default function ProfitLossPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Profit & Loss Calculator",
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
                "name": "How to calculate profit percentage in business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Profit Percentage = (Profit ÷ Cost Price) × 100, where Profit = Selling Price − Cost Price. Example: If Cost Price = ₹500 and Selling Price = ₹650, then Profit = ₹150. Profit % = (150 ÷ 500) × 100 = 30%. This means you earned a 30% return on your investment. Widely used by traders, retailers, and shopkeepers in India."
                }
            },
            {
                "@type": "Question",
                "name": "How to calculate loss percentage?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Loss Percentage = (Loss ÷ Cost Price) × 100, where Loss = Cost Price − Selling Price (when SP < CP). Example: Bought goods for ₹1,000, sold for ₹800. Loss = ₹200. Loss % = (200 ÷ 1,000) × 100 = 20% loss. Important for traders to track performance and set better pricing strategies."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between profit margin and profit percentage?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Profit Percentage is calculated on Cost Price: Profit % = (Profit ÷ CP) × 100. Profit Margin is calculated on Selling Price: Margin % = (Profit ÷ SP) × 100. Example: CP = ₹400, SP = ₹500, Profit = ₹100. Profit % = (100 ÷ 400) × 100 = 25%. Profit Margin = (100 ÷ 500) × 100 = 20%. Margin is used more in e-commerce and retail pricing in India."
                }
            },
            {
                "@type": "Question",
                "name": "How to find selling price when cost price and profit percentage are given?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Selling Price = Cost Price × (1 + Profit% ÷ 100). Example: If CP = ₹800 and desired profit is 25%, then SP = 800 × (1 + 25/100) = 800 × 1.25 = ₹1,000. Similarly, if you want to find CP given SP and profit %: CP = SP ÷ (1 + Profit% ÷ 100). Use our profit calculator to find any missing value instantly."
                }
            },
            {
                "@type": "Question",
                "name": "How do GST and profit calculation work together for Indian businesses?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When calculating profit in India, remember that GST collected from customers is NOT your revenue — it must be remitted to the government. True profit = (Selling Price excl. GST) − Cost Price. Example: You sell a product for ₹1,180 inclusive of 18% GST. GST-exclusive SP = ₹1,000. If CP = ₹700, then Profit = ₹300. Profit % = (300 ÷ 700) × 100 = 42.86%. Always compute profit on the base price, not the GST-inclusive price."
                }
            },
            {
                "@type": "Question",
                "name": "Profit aur loss kaise calculate karte hain? (How to calculate profit and loss?)",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Profit = Bikri Mulya (Selling Price) − Lagat Mulya (Cost Price). Profit % = (Profit ÷ Cost Price) × 100. Agar SP se CP zyada ho toh Loss = CP − SP. Loss % = (Loss ÷ CP) × 100. Example: ₹600 mein kharida, ₹750 mein becha — Profit = ₹150, Profit % = 25%. Hamare free profit loss calculator mein CP aur SP dalein aur calculation khud ho jayegi."
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
                        Profit & Loss Calculator
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Determine if you made a profit or a loss. Calculate the exact amount and percentage.
                    </p>
                </div>
                <ProfitLossCalculator />
            </section>

            <section className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <ProfitLossCalculatorContent />
            </section>
        </main>
    );
}
