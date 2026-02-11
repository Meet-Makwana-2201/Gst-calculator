import EMIPreclosureCalculator from "@/components/calculators/EMIPreclosureCalculator";
import EMIPreclosureCalculatorContent from "@/components/calculators/EMIPreclosureCalculatorContent";
import { StructuredData, generateSoftwareSchema, generateBreadcrumbSchema } from "@/components/StructuredData";

export const metadata = {
    title: "EMI Preclosure Calculator 2026 – Save Interest on Bank Loans",
    description: "Calculate interest savings and tenure reduction on home & car loans. Predict impact of part-prepayment, loan foreclosure, and monthly extra payments easily.",
    keywords: [
        "emi preclosure calculator",
        "loan prepayment calculator",
        "interest saving calculator online",
        "home loan preclosure tool",
        "tenure reduction calculator",
        "loan payoff calculator india",
        "foreclosure calculator",
        "loan part payment calculator",
        "calculate revised emi",
        "interest savings on loan prepayment"
    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/emi-preclosure",
    },
};

export default function EMIPreclosurePage() {
    const softwareSchema = generateSoftwareSchema(
        "EMI Preclosure Calculator",
        "Estimate interest savings and tenure reduction through loan part-prepayments.",
        "https://onecalculator.online/calculators/emi-preclosure"
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://onecalculator.online" },
        { name: "Calculators", url: "https://onecalculator.online/calculators" },
        { name: "EMI Preclosure Calculator", url: "https://onecalculator.online/calculators/emi-preclosure" },
    ]);

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <StructuredData data={softwareSchema} />
            <StructuredData data={breadcrumbSchema} />
            <section className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-7xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-6">
                        EMI Preclosure & Savings
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Stop paying excessive interest to banks. Discover the massive impact of making small extra payments and slash your loan tenure by years.
                    </p>
                </div>

                <EMIPreclosureCalculator />
                <EMIPreclosureCalculatorContent />
            </section>
        </main>
    );
}
