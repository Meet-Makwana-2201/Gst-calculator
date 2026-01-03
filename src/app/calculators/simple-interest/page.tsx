import SimpleInterestCalculator from "@/components/calculators/SimpleInterestCalculator";
import SimpleInterestCalculatorContent from "@/components/calculators/SimpleInterestCalculatorContent";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "Simple Interest Calculator | Calculate SI & Total Amount",
    description: "Free simple interest calculator. Calculate the interest earned on your principal amount over time. Useful for loans and savings.",
    keywords: ["simple interest calculator", "SI calculator", "interest calculator", "loan interest calculator"],
    alternates: {
        canonical: "https://onecalculator.online/calculators/simple-interest",
    },
    openGraph: {
        title: "Simple Interest Calculator - Calculate Returns",
        description: "Calculate simple interest and total amount easily with our free tool.",
        url: "/calculators/simple-interest",
        type: "website",
    },
};

export default function SimpleInterestPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Simple Interest Calculator",
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
                        Simple Interest Calculator
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Calculate the simple interest on your principal amount.
                    </p>
                </div>
                <SimpleInterestCalculator />
            </section>

            <section className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <SimpleInterestCalculatorContent />
            </section>
        </main>
    );
}
