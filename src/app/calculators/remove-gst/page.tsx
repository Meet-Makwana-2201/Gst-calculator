import RemoveGSTCalculator from "@/components/gst/RemoveGSTCalculator";
import { StructuredData, generateSoftwareSchema, generateBreadcrumbSchema } from "@/components/StructuredData";
import Link from "next/link";
import { Minus } from "lucide-react";

export const metadata = {
    title: "Remove GST Calculator – Minus GST from Price Instantly",
    description: "Fast and accurately remove GST from any price. Calculate the original base price, CGST, and SGST instantly. Supports all Indian GST slabs (5%, 12%, 18%, 28%).",
    keywords: [
        "remove gst calculator",
        "minus gst calculator",
        "remove gst from price",
        "reverse gst calculator",
        "gst inclusive to exclusive calculator",
        "calculate gst backwards",
        "gst removal tool",
        "subtract gst from amount"
    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/remove-gst",
    },
    openGraph: {
        title: "Remove GST Calculator – Minus GST from Price Instantly",
        description: "Free online tool to remove GST from any price. Get the base price and GST amount instantly for all Indian GST slabs.",
        url: "/calculators/remove-gst",
        siteName: "OneCalculator",
        images: [
            {
                url: "/logo.svg",
                width: 512,
                height: 512,
                alt: "Remove GST Calculator Tool",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Remove GST Calculator – Minus GST from Price Instantly",
        description: "Free online tool to remove GST from any price. Get the base price and GST amount instantly for all Indian GST slabs.",
        images: ["/logo.svg"],
    },
};

export default function RemoveGSTPage() {
    const softwareSchema = generateSoftwareSchema(
        "Remove GST Calculator",
        "Calculate the original base price from a GST-inclusive total. Supports all Indian GST rates.",
        "https://onecalculator.online/calculators/remove-gst"
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://onecalculator.online" },
        { name: "Calculators", url: "https://onecalculator.online/calculators" },
        { name: "Remove GST Calculator", url: "https://onecalculator.online/calculators/remove-gst" },
    ]);

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <StructuredData data={softwareSchema} />
            <StructuredData data={breadcrumbSchema} />
            <section className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                        Remove GST Calculator
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Quickly extract the base price and tax components from any GST-inclusive amount. Perfect for freelancers, business owners, and savvy shoppers.
                    </p>
                </div>

                <RemoveGSTCalculator />

                <div className="mt-16 space-y-12">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
                            <Minus className="w-6 h-6 text-orange-600" />
                            How to Remove GST from Price
                        </h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                            <p>
                                Removing GST from a final price is a common task for accounting and tax filing. Many people make the mistake of simply subtracting the GST percentage from the total amount, but this leads to incorrect results.
                            </p>
                            <p>
                                Since GST is calculated on the <strong>base price</strong>, we must use a reverse formula to find that original value.
                            </p>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-100 dark:border-orange-800 my-8">
                                <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-3">The Reverse GST Formula:</h3>
                                <ul className="space-y-2 font-mono text-sm md:text-base list-none pl-0">
                                    <li><strong>Original Price</strong> = Total Price ÷ (1 + GST Rate ÷ 100)</li>
                                    <li><strong>GST Amount</strong> = Total Price − Original Price</li>
                                </ul>
                            </div>

                            <h3>Why use this calculator?</h3>
                            <ul>
                                <li><strong>Accuracy:</strong> Avoid manual errors with decimal calculations.</li>
                                <li><strong>Tax Splitting:</strong> Instantly see the division between CGST and SGST.</li>
                                <li><strong>Time-Saving:</strong> Get results as you type, no page reloads needed.</li>
                                <li><strong>Professional Records:</strong> Use the breakdown for your internal bookkeeping or invoice verification.</li>
                            </ul>

                            <p className="mt-8">
                                Looking for the standard calculator? Try our <Link href="/calculators/gst" className="text-indigo-600 hover:underline font-semibold">General GST Calculator</Link> to add GST to your base prices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
