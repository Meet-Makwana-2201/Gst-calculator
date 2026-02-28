import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import CompoundInterestCalculatorContent from "@/components/calculators/CompoundInterestCalculatorContent";
import JsonLd from "@/components/JsonLd";

export const metadata = {
    title: "Compound Interest Calculator | Calculate CI & Returns",
    description: "Calculate compound interest with different compounding frequencies (monthly, quarterly, annually). See how your money grows over time.",
    keywords: [
        "compound interest calculator",
        "compound interest formula",
        "compound interest monthly",
        "compound interest example",
        "calculate compound interest",

    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/compound-interest",
    },
    openGraph: {
        title: "Compound Interest Calculator - Grow Your Wealth",
        description: "Visualize the power of compounding with our free calculator.",
        url: "/calculators/compound-interest",
        type: "website",
    },
};

export default function CompoundInterestPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Compound Interest Calculator",
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
                "name": "What is the compound interest formula?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Compound Interest formula: A = P × (1 + R/n)^(n×T), where A = Final Amount, P = Principal, R = Annual interest rate (decimal), n = number of times interest compounds per year, T = time in years. CI = A − P. Example: ₹1,00,000 at 10% compounded annually for 3 years: A = 1,00,000 × (1.10)^3 = ₹1,33,100. CI = ₹33,100."
                }
            },
            {
                "@type": "Question",
                "name": "How does monthly compounding compare to annual compounding on investments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Monthly compounding gives higher returns than annual compounding for the same interest rate. Example: ₹1,00,000 at 12% p.a. for 1 year — Annual compounding: A = ₹1,12,000 (CI = ₹12,000). Monthly compounding (n=12): A = 1,00,000 × (1 + 0.12/12)^12 = ₹1,12,683 (CI = ₹12,683). Mutual funds and bank FDs in India often compound quarterly or monthly."
                }
            },
            {
                "@type": "Question",
                "name": "How to calculate compound interest on SBI or HDFC Bank FD?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most Indian bank FDs compound quarterly. Use: A = P × (1 + R/400)^(4×T). Example: SBI 5-year FD of ₹1,00,000 at 7.5% p.a., quarterly compounding: A = 1,00,000 × (1 + 7.5/400)^20 = ₹1,44,997 approximately. Maturity amount ≈ ₹1,45,000. Use our compound interest calculator for exact results by selecting 'quarterly' frequency."
                }
            },
            {
                "@type": "Question",
                "name": "What is the Rule of 72 and how does it apply to Indian investments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Rule of 72 is a shortcut to estimate how many years it takes for an investment to double: Years to double = 72 ÷ Interest Rate. Example: At 8% returns (like SBI FD), money doubles in 72 ÷ 8 = 9 years. At 12% (equity mutual fund average), money doubles in 72 ÷ 12 = 6 years. At 15% (top equity funds), it doubles in just 4.8 years. Useful for quick mental calculations."
                }
            },
            {
                "@type": "Question",
                "name": "Is compound interest taxable in India for FDs and mutual funds?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. For bank FDs: Interest earned is fully taxable as per your income tax slab. TDS at 10% is deducted if interest exceeds ₹40,000/year (₹50,000 for senior citizens). For equity mutual funds: Long-term capital gains (held >1 year) above ₹1.25 lakh are taxed at 12.5% (from Budget 2024). Debt funds: Gains taxed at your slab rate. ELSS mutual funds offer 80C deduction up to ₹1.5 lakh."
                }
            },
            {
                "@type": "Question",
                "name": "Compound interest ka matlab kya hai? (What does compound interest mean?)",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Compound interest matlab hai — interest ke upar bhi interest milna. Simple interest mein sirf principal par interest milta hai, lekin compound interest mein har period ke baad jo interest banta hai woh bhi principal mein jod diya jaata hai. Iska matlab aapka paisa exponentially badhta hai. Example: ₹1,00,000 par 10% compound interest 10 saal mein ₹2,59,374 ban jaata hai."
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
                        Compound Interest Calculator
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Calculate compound interest and see how your investments grow over time.
                    </p>
                </div>
                <CompoundInterestCalculator />
            </section>

            <section className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <CompoundInterestCalculatorContent />
            </section>
        </main>
    );
}
