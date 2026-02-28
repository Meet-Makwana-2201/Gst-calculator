import EMICalculator from "@/components/calculators/EMICalculator";
import EMICalculatorContent from "@/components/calculators/EMICalculatorContent";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "Free EMI Calculator India 2026 — Home Loan, Car Loan & More",
    description: "Calculate your Home Loan, Car Loan or Personal Loan EMI in seconds. Free 2026 EMI calculator with interest breakdown & amortization schedule. No signup needed.",
    keywords: [
        "emi calculator india",
        "home loan emi calculator",
        "car loan emi 2026",
        "personal loan emi calculator",
        "loan emi calculator",
        "emi formula",
        "emi interest calculator",
        "free emi calculator",
        "amortization schedule india",
    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/emi",
    },
    openGraph: {
        title: "Free EMI Calculator India 2026 — Home Loan, Car Loan & More",
        description: "Calculate your Home Loan, Car Loan or Personal Loan EMI in seconds. Free 2026 EMI calculator with interest breakdown & amortization schedule. No signup needed.",
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
                        EMI Calculator India 2026 — Home Loan, Car Loan & Personal Loan (Free)
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
