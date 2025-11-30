import ProfitLossCalculator from "@/components/calculators/ProfitLossCalculator";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "Profit & Loss Calculator | Calculate Profit Margin & Percentage",
    description: "Calculate profit or loss amount and percentage easily. Essential tool for businesses, traders, and students to determine financial outcomes.",
    keywords: ["profit loss calculator", "profit margin calculator", "business calculator", "loss percentage calculator"],
    alternates: {
        canonical: "/calculators/profit-loss",
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

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <JsonLd data={jsonLd} />
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
        </main>
    );
}
