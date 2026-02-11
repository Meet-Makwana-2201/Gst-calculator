import SIPCalculator from "@/components/calculators/SIPCalculator";
import SIPCalculatorContent from "@/components/calculators/SIPCalculatorContent";
import { StructuredData, generateSoftwareSchema, generateBreadcrumbSchema } from "@/components/StructuredData";

export const metadata = {
    title: "SIP Calculator Online - Mutual Fund SIP Return Calculator 2026",
    description: "Best SIP calculator to estimate mutual fund returns. Plan your wealth with monthly SIP, step-up SIP, and compounding. Check SBI, HDFC, and LIC SIP returns.",
    keywords: [
        "sip calculator",
        "sip calculator online",
        "mutual fund sip calculator",
        "sip return calculator",
        "systematic investment plan calculator",
        "monthly sip calculator",
        "step up sip calculator",
        "wealth builder calculator",
        "sip goal planner",
        "sbi sip calculator",
        "hdfc sip returns"
    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/sip",
    },
};

export default function SIPCalculatorPage() {
    const softwareSchema = generateSoftwareSchema(
        "SIP Calculator",
        "Calculate the future value and estimated returns of monthly Systematic Investment Plans.",
        "https://onecalculator.online/calculators/sip"
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://onecalculator.online" },
        { name: "Calculators", url: "https://onecalculator.online/calculators" },
        { name: "SIP Calculator", url: "https://onecalculator.online/calculators/sip" },
    ]);

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <StructuredData data={softwareSchema} />
            <StructuredData data={breadcrumbSchema} />
            <section className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-7xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                        SIP Calculator
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Small monthly investments can lead to massive wealth over time. See how much your SIP could grow with the power of compounding.
                    </p>
                </div>

                <SIPCalculator />
                <SIPCalculatorContent />
            </section>
        </main>
    );
}
