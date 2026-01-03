import { Metadata } from "next";
import {
    Calculator,
    Percent,
    Tag,
    TrendingUp,
    Wallet,
    PiggyBank,
    Home,
} from "lucide-react";
import { ToolCard } from "@/components/calculators/ToolCard";

export const metadata: Metadata = {
    title: "Financial Calculators & Tools Dashboard | OneCalculator",
    description:
        "Access our comprehensive suite of free financial calculators. Calculate GST, EMI, interest, discounts, profit & loss, and more. Fast, accurate, and privacy-focused tools for business and personal finance.",
    alternates: {
        canonical: "https://onecalculator.online/calculators",
    },
    keywords: [
        "financial calculators",
        "GST calculator",
        "EMI calculator",
        "interest calculator",
        "discount calculator",
        "profit loss calculator",
        "free online tools",
    ],
    openGraph: {
        title: "Financial Calculators & Tools Dashboard | OneCalculator",
        description:
            "Free, accurate financial calculators for business and personal use. Calculate GST, EMI, interest, and more instantly.",
        url: "https://onecalculator.online/calculators",
        type: "website",
    },
};

export default function CalculatorsPage() {
    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section
                className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white py-20 md:py-32 overflow-hidden"
                role="banner"
            >
                <div
                    className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
                    aria-hidden="true"
                ></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Financial Calculators & Tools
                    </h1>
                    <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-10">
                        Powerful, accurate, and free tools to help you make smarter
                        financial decisions. From GST to investments, we&apos;ve got you
                        covered.
                    </p>
                </div>
            </section>

            {/* Calculators Grid */}
            <section
                className="container mx-auto px-4 py-16 -mt-8 relative z-20 max-w-7xl"
                aria-label="Calculator tools organized by category"
            >
                {/* Business Tools */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                        Business Tools
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ToolCard
                            href="/calculators/gst"
                            icon={Calculator}
                            title="GST Calculator"
                            description="Calculate GST, IGST, CGST, and SGST instantly with reverse GST calculation support."
                            gradientFrom="from-indigo-500"
                            gradientTo="to-purple-600"
                            accentColor="text-indigo-600 dark:text-indigo-400"
                        />
                        <ToolCard
                            href="/calculators/profit-loss"
                            icon={TrendingUp}
                            title="Profit & Loss Calculator"
                            description="Calculate profit or loss percentage and amount based on cost price and selling price."
                            gradientFrom="from-orange-500"
                            gradientTo="to-red-600"
                            accentColor="text-orange-600 dark:text-orange-400"
                        />
                        <ToolCard
                            href="/calculators/discount"
                            icon={Tag}
                            title="Discount Calculator"
                            description="Find out the final price after discount and how much you save instantly."
                            gradientFrom="from-green-500"
                            gradientTo="to-emerald-600"
                            accentColor="text-green-600 dark:text-green-400"
                        />
                    </div>
                </div>

                {/* Personal Finance */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                        Personal Finance
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ToolCard
                            href="/calculators/emi"
                            icon={Home}
                            title="EMI Calculator"
                            description="Calculate monthly home loan payments instantly with detailed amortization schedule."
                            gradientFrom="from-pink-500"
                            gradientTo="to-rose-600"
                            accentColor="text-pink-600 dark:text-pink-400"
                        />
                        <ToolCard
                            href="/calculators/simple-interest"
                            icon={Wallet}
                            title="Simple Interest Calculator"
                            description="Calculate simple interest on your principal amount over a period of time."
                            gradientFrom="from-teal-500"
                            gradientTo="to-emerald-600"
                            accentColor="text-teal-600 dark:text-teal-400"
                        />
                        <ToolCard
                            href="/calculators/compound-interest"
                            icon={PiggyBank}
                            title="Compound Interest Calculator"
                            description="Calculate compound interest with various compounding frequencies to see your money grow."
                            gradientFrom="from-purple-500"
                            gradientTo="to-indigo-600"
                            accentColor="text-purple-600 dark:text-purple-400"
                        />
                    </div>
                </div>

                {/* Math Utilities */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                        Math Utilities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ToolCard
                            href="/calculators/percentage"
                            icon={Percent}
                            title="Percentage Calculator"
                            description="Calculate percentages of numbers easily for discounts, tips, and simple math."
                            gradientFrom="from-blue-500"
                            gradientTo="to-cyan-600"
                            accentColor="text-blue-600 dark:text-blue-400"
                        />
                    </div>
                </div>
            </section>

            {/* SEO Content Section - Why Use OneCalculator? */}
            <section
                className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700"
                aria-labelledby="why-use-section"
            >
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2
                        id="why-use-section"
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center"
                    >
                        Why Use OneCalculator?
                    </h2>
                    <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6 text-lg leading-relaxed">
                        <p>
                            At OneCalculator, we believe financial calculations should be{" "}
                            <strong>fast, accurate, and accessible to everyone</strong>.
                            Whether you&apos;re a business owner managing GST compliance, a
                            homebuyer planning EMI payments, or a student learning about
                            compound interest, our tools are designed to deliver instant,
                            precise results without any complexity.
                        </p>
                        <p>
                            <strong>Privacy is our priority.</strong> All calculations happen
                            directly in your browser—we don&apos;t store, track, or share
                            your data. Your financial information stays completely private.
                            Combined with lightning-fast performance and mobile-responsive
                            design, OneCalculator provides a seamless experience across all
                            devices. Our tools use industry-standard formulas trusted by
                            financial institutions worldwide, ensuring you can make informed
                            decisions with confidence.
                        </p>
                    </div>

                    {/* Key Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center">
                            <div
                                className="w-16 h-16 mx-auto bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4"
                                aria-hidden="true"
                            >
                                <svg
                                    className="w-8 h-8 text-indigo-600 dark:text-indigo-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                                100% Accurate
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Industry-standard formulas ensure precise results every time.
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4"
                                aria-hidden="true"
                            >
                                <svg
                                    className="w-8 h-8 text-purple-600 dark:text-purple-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                                Privacy First
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                No data storage. All calculations happen in your browser.
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-16 h-16 mx-auto bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4"
                                aria-hidden="true"
                            >
                                <svg
                                    className="w-8 h-8 text-pink-600 dark:text-pink-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                                Lightning Fast
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Instant results as you type. No waiting, no page reloads.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
