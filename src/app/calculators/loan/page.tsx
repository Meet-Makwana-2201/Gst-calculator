import LoanCalculator from "@/components/calculators/LoanCalculator";
import LoanCalculatorContent from "@/components/calculators/LoanCalculatorContent";
import { StructuredData, generateSoftwareSchema, generateBreadcrumbSchema } from "@/components/StructuredData";

export const metadata = {
    title: "Loan Calculator - Calculate Home, Car & Personal Loan EMI 2026",
    description: "Accurate Loan EMI calculator for home, car, and personal loans. Estimate monthly payments, total interest, and loan eligibility. Works for SBI, HDFC, and all banks.",
    keywords: [
        "loan calculator",
        "emi calculator",
        "home loan calculator",
        "car loan calculator",
        "personal loan calculator",
        "loan interest calculator",
        "online loan emi calculator",
        "mortgage calculator",
        "loan eligibility calculator",
        "sbi loan calculator",
        "hdfc loan emi calculator",
        "refinance mortgage calculator"
    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/loan",
    },
};

export default function LoanCalculatorPage() {
    const softwareSchema = generateSoftwareSchema(
        "Loan Calculator",
        "Calculate monthly EMI and total interest for home, car, and personal loans.",
        "https://onecalculator.online/calculators/loan"
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://onecalculator.online" },
        { name: "Calculators", url: "https://onecalculator.online/calculators" },
        { name: "Loan Calculator", url: "https://onecalculator.online/calculators/loan" },
    ]);

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <StructuredData data={softwareSchema} />
            <StructuredData data={breadcrumbSchema} />
            <section className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-7xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                        Loan Calculator
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Plan your finances better with our precise loan calculator. Get instant breakdown of principal vs interest for any type of loan.
                    </p>
                </div>

                <LoanCalculator />
                <LoanCalculatorContent />
            </section>
        </main>
    );
}
