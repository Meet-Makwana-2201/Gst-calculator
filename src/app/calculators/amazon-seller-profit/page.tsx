import AmazonProfitCalculator from "@/components/calculators/AmazonProfitCalculator";
import AmazonProfitCalculatorContent from "@/components/calculators/AmazonProfitCalculatorContent";
import { StructuredData, generateSoftwareSchema, generateBreadcrumbSchema } from "@/components/StructuredData";

export const metadata = {
    title: "Amazon Seller Profit Calculator 2026 – FBA & Marketplace Fee Tool",
    description: "Accurate Amazon FBA profit calculator for sellers. Factor in referral fees, shipping, ROI, and net margin to see your true profit per unit.",
    keywords: [
        "amazon seller profit calculator india",
        "amazon fba profit calculator",
        "amazon fee calculator",
        "amazon referral fee calculator",
        "fba fee calculator 2026",
        "seller central profit calculator",
        "amazon profit margin tool",
        "amazon revenue calculator",
        "calculate amazon profits",
        "amazon roi calculator"
    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/amazon-seller-profit",
    },
};

export default function AmazonProfitPage() {
    const softwareSchema = generateSoftwareSchema(
        "Amazon Seller Profit Calculator",
        "Calculate net profit and margins for Amazon sellers after marketplace fees.",
        "https://onecalculator.online/calculators/amazon-seller-profit"
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://onecalculator.online" },
        { name: "Calculators", url: "https://onecalculator.online/calculators" },
        { name: "Amazon Seller Profit Calculator", url: "https://onecalculator.online/calculators/amazon-seller-profit" },
    ]);

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <StructuredData data={softwareSchema} />
            <StructuredData data={breadcrumbSchema} />
            <section className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-7xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                        Amazon Seller Profit
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Don&apos;t guess your profits. Our marketplace fee analyzer helps you see exactly how much you keep from every sale after Amazon fees.
                    </p>
                </div>

                <AmazonProfitCalculator />
                <AmazonProfitCalculatorContent />
            </section>
        </main>
    );
}
