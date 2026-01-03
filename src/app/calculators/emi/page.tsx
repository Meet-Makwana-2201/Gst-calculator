import EMICalculator from "@/components/calculators/EMICalculator";
import EMICalculatorContent from "@/components/calculators/EMICalculatorContent";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "EMI Calculator | Calculate Loan EMI Online",
    description: "Calculate your monthly EMI for home loans, car loans, or personal loans. Plan your repayment schedule effectively.",
    keywords: ["EMI calculator", "loan calculator", "home loan emi calculator", "car loan emi calculator"],
    alternates: {
        canonical: "https://onecalculator.online/calculators/emi",
    },
    openGraph: {
        title: "EMI Calculator - Plan Your Loans",
        description: "Calculate your monthly loan payments easily with our EMI calculator.",
        url: "/calculators/emi",
        type: "website",
    },
};

export default function EMIPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "EMI Calculator",
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
                        EMI Calculator
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Calculate your monthly EMI for any loan. Enter the loan amount, interest rate, and tenure.
                    </p>
                </div>
                <EMICalculator />
            </section>

            {/* SEO Content Section */}
            <section className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <EMICalculatorContent />
            </section>
        </main>
    );
}
