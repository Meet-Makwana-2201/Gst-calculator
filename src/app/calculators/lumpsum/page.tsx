import LumpsumCalculator from "@/components/calculators/LumpsumCalculator";
import LumpsumCalculatorContent from "@/components/calculators/LumpsumCalculatorContent";
import { StructuredData, generateSoftwareSchema, generateBreadcrumbSchema } from "@/components/StructuredData";

export const metadata = {
    title: "Lumpsum Calculator Online - Calculate One-time Investment Returns 2026",
    description: "Best Lumpsum investment calculator to estimate the future value of one-time mutual fund or stock investments. Plan your long-term wealth growth accurately.",
    keywords: [
        "lumpsum calculator",
        "lumpsum calculator online",
        "mutual fund lumpsum calculator",
        "investment growth calculator",
        "one-time investment tool",
        "wealth appreciation calculator",
        "lumpsum return calculator online",
        "future value calculator lumpsum",
        "fd lumpsum calculator",
        "equity lumpsum calculator"
    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/lumpsum",
    },
};

export default function LumpsumCalculatorPage() {
    const softwareSchema = generateSoftwareSchema(
        "Lumpsum Calculator",
        "Calculate the growth and returns of one-time lumpsum investments over time.",
        "https://onecalculator.online/calculators/lumpsum"
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://onecalculator.online" },
        { name: "Calculators", url: "https://onecalculator.online/calculators" },
        { name: "Lumpsum Calculator", url: "https://onecalculator.online/calculators/lumpsum" },
    ]);

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <StructuredData data={softwareSchema} />
            <StructuredData data={breadcrumbSchema} />
            <section className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-7xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        Lumpsum Calculator
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        See how far a one-time investment can take you. Predict your wealth growth and plan for your future financial goals.
                    </p>
                </div>

                <LumpsumCalculator />
                <LumpsumCalculatorContent />
            </section>
        </main>
    );
}
