import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import CompoundInterestCalculatorContent from "@/components/calculators/CompoundInterestCalculatorContent";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "Compound Interest Calculator | Calculate CI & Returns",
    description: "Calculate compound interest with different compounding frequencies (monthly, quarterly, annually). See how your money grows over time.",
    keywords: [
        "compound interest calculator",
        "compound interest formula",
        "compound interest monthly",
        "compound interest example",
        "calculate compound interest",

    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/compound-interest",
    },
    openGraph: {
        title: "Compound Interest Calculator - Grow Your Wealth",
        description: "Visualize the power of compounding with our free calculator.",
        url: "/calculators/compound-interest",
        type: "website",
    },
};

export default function CompoundInterestPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Compound Interest Calculator",
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
                        Compound Interest Calculator
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Calculate compound interest and see how your investments grow over time.
                    </p>
                </div>
                <CompoundInterestCalculator />
            </section>

            <section className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <CompoundInterestCalculatorContent />
            </section>
        </main>
    );
}
