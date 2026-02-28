import SimpleInterestCalculator from "@/components/calculators/SimpleInterestCalculator";
import SimpleInterestCalculatorContent from "@/components/calculators/SimpleInterestCalculatorContent";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "Simple Interest Calculator | Calculate SI & Total Amount",
    description: "Free simple interest calculator. Calculate the interest earned on your principal amount over time. Useful for loans and savings.",
    keywords: [
        "simple interest calculator",
        "calculate simple interest",
        "simple interest formula",
        "simple interest example",
        "simple interest online"
    ],
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

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the formula for simple interest?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simple Interest (SI) formula: SI = (P × R × T) ÷ 100, where P = Principal amount (₹), R = Rate of interest (% per annum), T = Time period (in years). Total Amount = P + SI. Example: Principal ₹50,000, Rate 8% per year, Time 3 years. SI = (50,000 × 8 × 3) ÷ 100 = ₹12,000. Total amount = ₹62,000."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between simple interest and compound interest?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simple Interest (SI) is calculated only on the principal amount and remains the same every year. Compound Interest (CI) is calculated on the principal plus accumulated interest, so it grows exponentially. Example: ₹1,00,000 at 10% for 3 years — SI = ₹30,000 (total ₹1,30,000). CI (annually) = ₹33,100 (total ₹1,33,100). FDs in Indian banks typically use simple interest for short tenures."
                }
            },
            {
                "@type": "Question",
                "name": "How is simple interest calculated for personal loans in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For personal loans in India, simple interest = (Loan Amount × Annual Interest Rate × Tenure in years) ÷ 100. Example: ₹2,00,000 loan at 12% p.a. for 2 years. SI = (2,00,000 × 12 × 2) ÷ 100 = ₹48,000. Total repayment = ₹2,48,000. Note that most bank loans actually use reducing balance (EMI) method, not flat simple interest."
                }
            },
            {
                "@type": "Question",
                "name": "How to calculate simple interest for months or days instead of years?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For months: Time T = Number of months ÷ 12. For days: Time T = Number of days ÷ 365. Example — 6 months: SI = (P × R × 6) ÷ (100 × 12). Example — 90 days: SI = (P × R × 90) ÷ (100 × 365). For ₹10,000 at 9% for 6 months: SI = (10,000 × 9 × 6) ÷ (100 × 12) = ₹450."
                }
            },
            {
                "@type": "Question",
                "name": "Which banks in India give the best simple interest rate on fixed deposits?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As of 2026, small finance banks like Unity Small Finance Bank, Suryoday SFB, and Utkarsh SFB offer the highest FD interest rates in India (up to 9%–9.5% p.a. for regular customers, and up to 9.75%–10% for senior citizens). Large banks like SBI offer 6.5%–7%, HDFC Bank 7%–7.4%, and ICICI Bank 6.7%–7.25%. Always verify rates directly on the bank's official website before investing."
                }
            },
            {
                "@type": "Question",
                "name": "Simple interest ka formula kya hai? (What is simple interest formula?)",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simple Interest ka formula hai: SI = (Muladhana × Dar × Samay) ÷ 100, yaani SI = (P × R × T) ÷ 100. Example: ₹20,000 principal, 10% interest rate, 2 saal ke liye: SI = (20,000 × 10 × 2) ÷ 100 = ₹4,000. Total amount = ₹24,000. Hamare calculator mein values dalein aur turant result paayein."
                }
            }
        ]
    };

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <JsonLd data={jsonLd} />
            <JsonLd data={faqSchema} />
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
