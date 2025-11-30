import DiscountCalculator from "@/components/calculators/DiscountCalculator";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "Discount Calculator | Calculate Sale Price & Savings",
    description: "Calculate the final price after discount. Find out how much you save on sales and offers. Easy to use discount calculator.",
    keywords: ["discount calculator", "sale price calculator", "shopping calculator", "percentage off calculator"],
    alternates: {
        canonical: "/calculators/discount",
    },
    openGraph: {
        title: "Discount Calculator - Calculate Sale Price",
        description: "Find out the final price and your savings with our free discount calculator.",
        url: "/calculators/discount",
        type: "website",
    },
};

export default function DiscountPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Discount Calculator",
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
                        Discount Calculator
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Calculate the sale price and your savings. Perfect for shopping and sales.
                    </p>
                </div>
                <DiscountCalculator />
            </section>
        </main>
    );
}
