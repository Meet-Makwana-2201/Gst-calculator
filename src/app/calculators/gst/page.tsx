import GSTCalculator from "@/components/gst/GSTCalculator";
import ReverseGSTCalculator from "@/components/gst/ReverseGSTCalculator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StructuredData, generateSoftwareSchema, generateBreadcrumbSchema } from "@/components/StructuredData";
import Link from "next/link";

export const metadata = {
    title: "GST Calculator Tool India (2025) | Add & Remove GST | IGST/CGST/SGST Breakdown",
    description: "Fast and accurate GST calculator for India. Calculate GST, reverse GST, IGST, CGST, SGST instantly. No login, works on mobile. Simple and fast GST tool with detailed breakdown. Supports 5%, 12%, 18%, 28% rates.",
    keywords: [
        "GST calculator",
        "GST calculator India",
        "GST tax calculator",
        "CGST SGST calculator",
        "GST reverse calculator",
        "reverse gst calculator",
        "reverse gst",
        "easy reverse gst",
        "calculate GST amount online",
        "GST calculation online India",
        "online GST calculator",
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
    ],
    alternates: {
        canonical: "https://onecalculator.online/calculators/gst",
    },
    openGraph: {
        title: "GST Calculator Tool - Calculate GST, Reverse GST Easily",
        description: "Use our GST calculator to calculate GST and reverse GST amounts quickly and accurately. Customize GST rates as needed.",
        url: "/calculators/gst",
        siteName: "OneCalculator",
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
                <h1 className="sr-only">GST Calculator Tool</h1>
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
                                    GST = 1180 - 1000 = ₹180. Read our detailed guide on <Link href="/blog/how-to-calculate-gst-backwards" className="text-indigo-600 hover:underline">how to calculate GST backwards</Link>.
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

                    {/* Practical Examples */}
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-indigo-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Practical GST Calculation Examples
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                                    Example 1: E-commerce Product Sale
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    You're selling a laptop for ₹50,000 (base price) with 18% GST:
                                </p>
                                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Base Price:</span>
                                        <span className="font-semibold">₹50,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">GST @ 18%:</span>
                                        <span className="font-semibold">₹9,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">CGST (9%):</span>
                                        <span className="font-semibold">₹4,500</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">SGST (9%):</span>
                                        <span className="font-semibold">₹4,500</span>
                                    </div>
                                    <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2 flex justify-between">
                                        <span className="text-gray-900 dark:text-gray-100 font-bold">Final Amount:</span>
                                        <span className="font-bold text-indigo-600 dark:text-indigo-400">₹59,000</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                                    Example 2: Freelancer Invoice (Reverse Calculation)
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    Client agreed to pay ₹59,000 total. You need to calculate base amount and GST (18%):
                                </p>
                                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Total Amount:</span>
                                        <span className="font-semibold">₹59,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Base Amount:</span>
                                        <span className="font-semibold">₹50,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">GST Amount:</span>
                                        <span className="font-semibold">₹9,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">CGST (9%):</span>
                                        <span className="font-semibold">₹4,500</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">SGST (9%):</span>
                                        <span className="font-semibold">₹4,500</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
                                    Example 3: Restaurant Bill with 5% GST
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-3">
                                    Food items worth ₹2,000 with 5% GST:
                                </p>
                                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Food Cost:</span>
                                        <span className="font-semibold">₹2,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">GST @ 5%:</span>
                                        <span className="font-semibold">₹100</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">CGST (2.5%):</span>
                                        <span className="font-semibold">₹50</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">SGST (2.5%):</span>
                                        <span className="font-semibold">₹50</span>
                                    </div>
                                    <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2 flex justify-between">
                                        <span className="text-gray-900 dark:text-gray-100 font-bold">Total Bill:</span>
                                        <span className="font-bold text-green-600 dark:text-green-400">₹2,100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GST Rate Variations */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            GST Rate Slabs in India (2025)
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                                        <th className="py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">GST Rate</th>
                                        <th className="py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">Product Categories</th>
                                        <th className="py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">Examples</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="py-3 px-4 font-bold text-green-600">0%</td>
                                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Essential Items</td>
                                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Fresh vegetables, milk, bread, newspapers</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="py-3 px-4 font-bold text-blue-600">5%</td>
                                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Basic Necessities</td>
                                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Sugar, tea, coffee, edible oils, coal, medicines</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="py-3 px-4 font-bold text-yellow-600">12%</td>
                                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Standard Goods</td>
                                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Computers, processed food, butter, ghee</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="py-3 px-4 font-bold text-indigo-600">18%</td>
                                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Most Goods & Services</td>
                                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Electronics, IT services, restaurants, hotels</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="py-3 px-4 font-bold text-red-600">28%</td>
                                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">Luxury Items</td>
                                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Cars, motorcycles, AC, refrigerators, cigarettes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic">
                            Note: GST rates are subject to change. Use our <Link href="/gst-rate-finder" className="text-indigo-600 hover:underline">GST Rate Finder</Link> to find specific rates by product or HSN code.
                        </p>
                    </div>

                    {/* Use Cases by Industry */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            Industry-Specific GST Use Cases
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-2xl">💼</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Freelancers & Consultants</h3>
                                </div>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-indigo-600 mr-2">•</span>
                                        <span>Create accurate invoices with GST breakdown</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-indigo-600 mr-2">•</span>
                                        <span>Calculate tax liability on project payments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-indigo-600 mr-2">•</span>
                                        <span>Reverse calculate when clients provide total amount. See our <Link href="/blog/gst-calculation-for-freelancers-india" className="text-indigo-600 hover:underline">GST guide for Indian freelancers</Link>.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-2xl">🏪</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Retail Businesses</h3>
                                </div>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Calculate selling price from cost price</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Determine MRP including GST</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">•</span>
                                        <span>Track tax collected on daily sales</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-2xl">🏭</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Manufacturers</h3>
                                </div>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Calculate output tax on finished goods</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Determine input tax credit on raw materials</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">•</span>
                                        <span>Price products for B2B and B2C markets</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-2xl">🛒</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">E-commerce Sellers</h3>
                                </div>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-orange-600 mr-2">•</span>
                                        <span>Calculate inter-state IGST for online orders</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-600 mr-2">•</span>
                                        <span>Determine platform commission with GST</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-600 mr-2">•</span>
                                        <span>Price products competitively with tax included</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step-by-Step Guide */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-blue-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            How to Use This GST Calculator - Step by Step
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                        Choose Calculator Type
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Select "GST Calculator" to add GST to a base amount, or "Reverse GST Calculator" to extract GST from a total amount.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                        Enter the Amount
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Input your base price (for GST calculation) or total amount (for reverse calculation) in the amount field.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                        Select GST Rate
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Choose the applicable GST rate (5%, 12%, 18%, or 28%) or enter a custom rate if needed.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                        View Results
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Instantly see the GST breakdown including CGST, SGST/IGST, and the final amount. Results update automatically as you type.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                                    5
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                        Save or Export (Optional)
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Use the calculation for your invoices, accounting, or tax filing. You can take a screenshot or note down the values.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Common Scenarios */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Common GST Calculation Scenarios
                        </h2>
                        <div className="space-y-4">
                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        Scenario 1: Calculating Invoice Amount for Services
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p className="mb-2"><strong>Situation:</strong> You provide IT consulting services worth ₹1,00,000 and need to add 18% GST.</p>
                                    <p className="mb-2"><strong>Solution:</strong> Use the GST Calculator tab, enter ₹1,00,000, select 18% rate.</p>
                                    <p><strong>Result:</strong> GST = ₹18,000 (CGST: ₹9,000 + SGST: ₹9,000), Total Invoice = ₹1,18,000</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        Scenario 2: Finding Base Price from MRP
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p className="mb-2"><strong>Situation:</strong> A product's MRP is ₹5,900 (inclusive of 18% GST). You need the base price for accounting.</p>
                                    <p className="mb-2"><strong>Solution:</strong> Use the Reverse GST Calculator tab, enter ₹5,900, select 18% rate.</p>
                                    <p><strong>Result:</strong> Base Price = ₹5,000, GST Amount = ₹900</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        Scenario 3: Inter-State Supply (IGST)
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p className="mb-2"><strong>Situation:</strong> Selling goods worth ₹25,000 from Maharashtra to Gujarat (inter-state) at 12% GST.</p>
                                    <p className="mb-2"><strong>Solution:</strong> Use GST Calculator, enter ₹25,000, select 12% rate. For inter-state, entire 12% is IGST.</p>
                                    <p><strong>Result:</strong> IGST = ₹3,000, Total = ₹28,000</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        Scenario 4: Restaurant Bill Calculation
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p className="mb-2"><strong>Situation:</strong> Food bill of ₹3,500 with 5% GST (non-AC restaurant).</p>
                                    <p className="mb-2"><strong>Solution:</strong> Use GST Calculator, enter ₹3,500, select 5% rate.</p>
                                    <p><strong>Result:</strong> GST = ₹175 (CGST: ₹87.50 + SGST: ₹87.50), Total Bill = ₹3,675</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        Scenario 5: Luxury Car Purchase
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p className="mb-2"><strong>Situation:</strong> Buying a car with ex-showroom price of ₹10,00,000 and 28% GST.</p>
                                    <p className="mb-2"><strong>Solution:</strong> Use GST Calculator, enter ₹10,00,000, select 28% rate.</p>
                                    <p><strong>Result:</strong> GST = ₹2,80,000 (CGST: ₹1,40,000 + SGST: ₹1,40,000), Total = ₹12,80,000</p>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <div className="space-y-4">
                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        What is the difference between CGST, SGST, and IGST?
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p>CGST (Central GST) and SGST (State GST) are applied on intra-state transactions (within the same state), with the tax split equally between central and state governments. IGST (Integrated GST) is applied on inter-state transactions (between different states) and imports, collected entirely by the central government.</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        How do I calculate GST backwards (reverse calculation)?
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p>To calculate GST backwards, use the formula: Base Amount = Total Amount ÷ (1 + GST Rate/100). For example, if the total is ₹1,180 with 18% GST: Base = 1180 ÷ 1.18 = ₹1,000. Then GST = ₹1,180 - ₹1,000 = ₹180. Our Reverse GST Calculator does this automatically.</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        Is this GST calculator free to use?
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p>Yes, our GST calculator is completely free to use with no registration, login, or hidden charges. You can perform unlimited calculations for both adding and removing GST.</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        What are the current GST rates in India?
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p>India has five GST rate slabs: 0% (essential items like milk, bread), 5% (household necessities), 12% (processed foods), 18% (most goods and services), and 28% (luxury items and sin goods). The most commonly used rate is 18%.</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        Can I use this calculator for business invoicing?
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p>Absolutely! This calculator is perfect for creating business invoices. It provides accurate GST breakdowns including CGST, SGST, and IGST components that you can include in your invoices. Many freelancers, small businesses, and enterprises use it daily.</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        How accurate is this GST calculator?
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p>Our calculator uses precise mathematical formulas as per GST regulations in India. All calculations are accurate to two decimal places, which is the standard for financial transactions. However, always verify critical calculations with your accountant.</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        Do I need to register for GST to use this calculator?
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p>No, you don't need GST registration to use this calculator. It's a free tool for anyone to calculate GST amounts. However, if your business turnover exceeds ₹40 lakhs (₹20 lakhs for services), you must register for GST with the government.</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        Can I calculate GST for multiple items at once?
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p>Currently, the calculator works for one item at a time. For multiple items, calculate each separately and add the results. If items have the same GST rate, you can add their base prices together and calculate once.</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        What is Input Tax Credit (ITC) in GST?
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p>Input Tax Credit allows businesses to reduce their GST liability by claiming credit for the GST paid on purchases (inputs). For example, if you paid ₹1,000 GST on purchases and collected ₹1,500 GST on sales, you only pay ₹500 to the government (₹1,500 - ₹1,000).</p>
                                </div>
                            </details>

                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                                        Does this calculator work on mobile devices?
                                    </span>
                                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                    <p>Yes! Our GST calculator is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktop computers. You can calculate GST on the go, anytime, anywhere.</p>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Educational Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                            Understanding GST: A Complete Guide
                        </h2>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                What is GST?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Goods and Services Tax (GST) is an indirect tax levied on the supply of goods and services in India. Introduced on July 1, 2017, GST replaced multiple indirect taxes like VAT, Service Tax, Excise Duty, and others, creating a unified tax system across the country.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                Benefits of GST
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                                <li><strong>Simplified Tax Structure:</strong> One tax instead of multiple indirect taxes</li>
                                <li><strong>Reduced Tax Burden:</strong> Elimination of cascading effect (tax on tax)</li>
                                <li><strong>Increased Transparency:</strong> Digital system reduces tax evasion</li>
                                <li><strong>Ease of Doing Business:</strong> Simplified compliance and registration</li>
                                <li><strong>Uniform Taxation:</strong> Same tax rates across all states</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                Who Should Pay GST?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for services, ₹10 lakhs for special category states) must register for GST. However, even smaller businesses can opt for voluntary registration to claim input tax credit and expand their business opportunities.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                GST Return Filing
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Registered businesses must file GST returns monthly or quarterly (depending on turnover) through the GST portal. Returns include details of sales, purchases, output tax, and input tax credit. Common return forms include GSTR-1 (outward supplies), GSTR-3B (summary return), and GSTR-9 (annual return).
                            </p>
                        </div>
                    </div>

                    {/* Tips and Best Practices */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-yellow-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            💡 Tips for Accurate GST Calculation
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">✓ Always Verify GST Rates</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    GST rates can change. Always check the latest applicable rate for your product or service from the official GST portal before invoicing.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">✓ Maintain Proper Records</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Keep detailed records of all GST calculations, invoices, and receipts for easy filing of returns and claiming input tax credit.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">✓ Understand Intra vs Inter-State</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Know whether your transaction is intra-state (CGST+SGST) or inter-state (IGST) as this affects how GST is split and claimed.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-5">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">✓ Round Off Correctly</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    GST amounts should be rounded to two decimal places. The final invoice total can be rounded to the nearest rupee as per GST rules.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Related Tools Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                            Related Financial Tools
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <Link href="/calculators/percentage" className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Percentage Calculator</h3>
                                <p className="text-xs text-gray-500 mt-1">Calculate percentages, increases, and decreases.</p>
                            </Link>
                            <Link href="/calculators/discount" className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Discount Calculator</h3>
                                <p className="text-xs text-gray-500 mt-1">Find out how much you save on sales.</p>
                            </Link>
                            <Link href="/calculators/emi" className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100">EMI Calculator</h3>
                                <p className="text-xs text-gray-500 mt-1">Calculate your monthly loan repayments.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
