import GSTCalculator from "@/components/gst/GSTCalculator";
import ReverseGSTCalculator from "@/components/gst/ReverseGSTCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StructuredData, generateSoftwareSchema, generateBreadcrumbSchema } from "@/components/StructuredData";

export const metadata = {
    title: "GST Calculator Tool India (2025) | Add & Remove GST | IGST/CGST/SGST Breakdown",
    description: "Fast and accurate GST calculator for India. Calculate GST, reverse GST, IGST, CGST, SGST instantly. No login, works on mobile. Simple and fast GST tool with detailed breakdown. Supports 5%, 12%, 18%, 28% rates.",
    keywords: [
        "easy gst calculator",
        "gstcalc",
        "reverse gst calculator",
        "reverse gst",
        "easy reverse gst",
        "calculate GST amount online",
        "GST calculator",
        "GST calculation online India",
        "online GST calculator",
        "GST tax calculator",
        "free GST calculator",
        "GST calculator 18 percent",
        "GST amount calculator",
        "India GST calculator",
        "reverse GST calculator India",
        "GST calculation formula",
        "GST rate calculator",
        "GST inclusive calculator",
        "GST exclusive calculator",
        "how to calculate GST",
        "GST percentage calculator",
        "instant GST calculation",
        "GST calculator for business",
        "gst calculator india online",
        "GST tax calculator",
    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/gst",
    },
    openGraph: {
        title: "GST Calculator Tool - Calculate GST, Reverse GST Easily",
        description: "Use our GST calculator to calculate GST and reverse GST amounts quickly and accurately. Customize GST rates as needed.",
        url: "/calculators/gst",
        siteName: "GST Calculator",
        images: [
            {
                url: "/logo.svg",
                width: 512,
                height: 512,
                alt: "GST Calculator Tool",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "GST Calculator Tool - Calculate GST, Reverse GST Easily",
        description: "Use our GST calculator to calculate GST and reverse GST amounts quickly and accurately. Customize GST rates as needed.",
        images: ["/logo.svg"],
    },
};

export default function CalculatorPage() {
    const softwareSchema = generateSoftwareSchema(
        "GST Calculator Tool",
        "Calculate GST, IGST, CGST, and SGST instantly with reverse GST calculation support.",
        "https://onecalculator.online/calculators/gst"
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://onecalculator.online" },
        { name: "Calculators", url: "https://onecalculator.online/calculators" },
        { name: "GST Calculator", url: "https://onecalculator.online/calculators/gst" },
    ]);

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <StructuredData data={softwareSchema} />
            <StructuredData data={breadcrumbSchema} />
            <section className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                <Tabs defaultValue="gst" className="w-full">
                    <TabsList className="mb-6 grid w-full grid-cols-2">
                        <TabsTrigger value="gst">GST Calculator</TabsTrigger>
                        <TabsTrigger value="reverse-gst">Reverse GST Calculator</TabsTrigger>
                    </TabsList>
                    <TabsContent value="gst">
                        <GSTCalculator />
                    </TabsContent>
                    <TabsContent value="reverse-gst">
                        <ReverseGSTCalculator />
                    </TabsContent>
                </Tabs>

                {/* SEO Content Sections */}
                <div className="mt-16 space-y-12">
                    {/* GST Formula */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            GST Calculation Formula
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                                    Add GST Formula
                                </h3>
                                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm mb-2">
                                    GST Amount = (Original Cost × GST Rate) / 100<br />
                                    Net Price = Original Cost + GST Amount
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Example: If cost is ₹1,000 and GST is 18%:<br />
                                    GST = (1000 × 18) / 100 = ₹180<br />
                                    Total = ₹1,180
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                                    Reverse GST Formula
                                </h3>
                                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm mb-2">
                                    Original Cost = Total Amount / (1 + (GST Rate / 100))<br />
                                    GST Amount = Total Amount - Original Cost
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Example: If total is ₹1,180 and GST is 18%:<br />
                                    Original = 1180 / (1 + 0.18) = ₹1,000<br />
                                    GST = 1180 - 1000 = ₹180
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Types of GST */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            Types of GST Explained
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                <div className="text-xl font-bold text-indigo-600 mb-2">CGST</div>
                                <div className="text-sm font-semibold text-gray-500 mb-2">Central Goods & Services Tax</div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Collected by the Central Government on intra-state sales (within the same state).
                                </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                <div className="text-xl font-bold text-indigo-600 mb-2">SGST</div>
                                <div className="text-sm font-semibold text-gray-500 mb-2">State Goods & Services Tax</div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Collected by the State Government on intra-state sales. Replaced VAT and other state taxes.
                                </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                                <div className="text-xl font-bold text-purple-600 mb-2">IGST</div>
                                <div className="text-sm font-semibold text-gray-500 mb-2">Integrated Goods & Services Tax</div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Collected by the Central Government on inter-state sales (between two states) and imports.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Reverse Calculation Guide */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Why Use Reverse GST Calculation?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Reverse GST calculation is essential when you have the final invoice amount (inclusive of tax) and need to find the base taxable value. This is common for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                            <li><strong>Freelancers:</strong> Who agree on a fixed project fee (e.g., ₹50,000) and need to back-calculate the base amount to create a proper GST invoice.</li>
                            <li><strong>Retailers:</strong> Who sell MRP products and need to calculate the tax component for accounting.</li>
                            <li><strong>Expense Claiming:</strong> When claiming input tax credit on bills that only show the total amount.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
