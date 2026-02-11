import MarginCalculator from "@/components/calculators/MarginCalculator";
import MarginCalculatorContent from "@/components/calculators/MarginCalculatorContent";
import { StructuredData, generateSoftwareSchema, generateBreadcrumbSchema } from "@/components/StructuredData";

export const metadata = {
    title: "Margin Calculator - Calculate Profit, Selling Price & Markup 2026",
    description: "Professional profit margin calculator. Find the ideal selling price, calculate gross margin, and understand markup vs margin for your business products.",
    keywords: [
        "margin calculator",
        "profit margin calculator",
        "markup calculator",
        "selling price calculator",
        "gross margin calculator",
        "business profit calculator",
        "retail margin calculator",
        "markup vs margin calculator",
        "calculate gross profit",
        "business margin tool"
    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/margin",
    },
};

export default function MarginCalculatorPage() {
    const softwareSchema = generateSoftwareSchema(
        "Margin Calculator",
        "Calculate gross profit margin, markup, and selling price based on cost.",
        "https://onecalculator.online/calculators/margin"
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://onecalculator.online" },
        { name: "Calculators", url: "https://onecalculator.online/calculators" },
        { name: "Margin Calculator", url: "https://onecalculator.online/calculators/margin" },
    ]);

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <StructuredData data={softwareSchema} />
            <StructuredData data={breadcrumbSchema} />
            <section className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-7xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                        Margin Calculator
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Protect your profitability with precise calculations. Quickly find the right selling price to hit your target profit margins.
                    </p>
                </div>

                <MarginCalculator />
                <MarginCalculatorContent />
            </section>
        </main>
    );
}
