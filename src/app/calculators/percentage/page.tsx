import PercentageCalculator from "@/components/calculators/PercentageCalculator";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "Percentage Calculator | Calculate Percentages Online",
    description: "Free online percentage calculator. Calculate percentages of numbers easily and accurately. Useful for discounts, tips, and simple math.",
    keywords: ["percentage calculator", "calculate percentage", "math calculator", "percent calculator online"],
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

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <JsonLd data={jsonLd} />
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
        </main>
    );
}
