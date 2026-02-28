import { Metadata } from "next";
import {
    Calculator,
    Percent,
    Tag,
    TrendingUp,
    Wallet,
    PiggyBank,
    Home,
    Minus,
    BarChart3,
    Coins,
    ShoppingCart,
    Gem,
    ShieldCheck,
} from "lucide-react";
import { ToolCard } from "@/components/calculators/ToolCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Free Online Financial & Math Calculators — GST, EMI, Interest, Percentage | OneCalculator",
    description:
        "Access free online calculators for GST, EMI, interest, percentage and financial math — easy, fast, and accurate results for business and personal finance.",
    alternates: {
        canonical: "https://onecalculator.online/calculators",
    },
    keywords: [
        "online calculators",
        "financial calculators",
        "free online calculators",
        "GST EMI interest calculator",
        "all calculators in one place",
        "free online tools",
    ],
    openGraph: {
        title: "Free Online Financial & Math Calculators — GST, EMI, Interest, Percentage | OneCalculator",
        description:
            "Access free online calculators for GST, EMI, interest, percentage and financial math — easy, fast, and accurate results for business and personal finance.",
        url: "https://onecalculator.online/calculators",
        type: "website",
    },
};

// ─── JSON-LD Structured Data ────────────────────────────────────────────────
const BASE_URL = "https://onecalculator.online";

const calculatorItems = [
    {
        position: 1,
        name: "GST Calculator",
        description:
            "Calculate GST, IGST, CGST, and SGST instantly. Supports forward GST calculation (add GST to base price) and reverse GST calculation (extract GST from total). Covers all Indian GST rate slabs: 5%, 12%, 18%, and 28%.",
        url: `${BASE_URL}/calculators/gst`,
        keywords: "GST calculator, CGST SGST calculator, reverse GST, GST India, add GST, remove GST",
    },
    {
        position: 2,
        name: "Remove GST Calculator",
        description:
            "Extract the base price and exact tax amount from any GST-inclusive total price. Ideal for businesses that need to separate the pre-tax amount from a GST-inclusive invoice or MRP.",
        url: `${BASE_URL}/calculators/remove-gst`,
        keywords: "remove GST, minus GST calculator, extract GST, GST inclusive price calculator",
    },
    {
        position: 3,
        name: "EMI Calculator",
        description:
            "Calculate monthly home loan, car loan, and personal loan EMI payments with a detailed amortization schedule. Uses the standard reducing balance formula trusted by banks and NBFCs across India.",
        url: `${BASE_URL}/calculators/emi`,
        keywords: "EMI calculator, home loan EMI, car loan EMI, loan EMI calculator India",
    },
    {
        position: 4,
        name: "Discount Calculator",
        description:
            "Find the final price after applying any discount percentage and instantly see how much you save. Useful for shoppers, retailers, and e-commerce sellers to calculate sale prices.",
        url: `${BASE_URL}/calculators/discount`,
        keywords: "discount calculator, sale price calculator, percentage discount, savings calculator",
    },
    {
        position: 5,
        name: "Percentage Calculator",
        description:
            "Solve everyday percentage problems: find percentage of a number, calculate percentage increase or decrease, and reverse-calculate what percentage one number is of another.",
        url: `${BASE_URL}/calculators/percentage`,
        keywords: "percentage calculator, percent calculator, percentage increase, percentage of number",
    },
    {
        position: 6,
        name: "Simple Interest Calculator",
        description:
            "Calculate simple interest on a principal amount for a given rate and time period. Suitable for short-term loans, fixed deposits, and basic finance learning.",
        url: `${BASE_URL}/calculators/simple-interest`,
        keywords: "simple interest calculator, SI calculator, interest on principal, SI formula India",
    },
    {
        position: 7,
        name: "Compound Interest Calculator",
        description:
            "Calculate compound interest with multiple compounding frequencies (annual, semi-annual, quarterly, monthly). Ideal for estimating mutual fund returns, FD maturity amounts, and long-term investment growth.",
        url: `${BASE_URL}/calculators/compound-interest`,
        keywords: "compound interest calculator, CI calculator, compounding interest, investment growth calculator",
    },
    {
        position: 8,
        name: "Profit Loss Calculator",
        description:
            "Calculate profit percentage, loss percentage, selling price, or cost price based on any two known values. Indispensable for traders, retailers, and business owners tracking product margins.",
        url: `${BASE_URL}/calculators/profit-loss`,
        keywords: "profit loss calculator, profit percentage calculator, loss percentage, margin calculator India",
    },
    {
        position: 9,
        name: "Margin Calculator",
        description:
            "Calculate gross margin and markup percentage to set competitive selling prices. Helps sellers determine the right price to achieve target profit margins on products and services.",
        url: `${BASE_URL}/calculators/margin`,
        keywords: "margin calculator, markup calculator, gross margin, profit margin calculator",
    },
    {
        position: 10,
        name: "Loan Calculator",
        description:
            "Estimate monthly EMI and total interest payout for home loans, car loans, personal loans, and business loans. Compare different loan tenures and interest rates to find the best repayment plan.",
        url: `${BASE_URL}/calculators/loan`,
        keywords: "loan calculator, loan EMI calculator, personal loan calculator, interest rate calculator",
    },
    {
        position: 11,
        name: "SIP Calculator",
        description:
            "Forecast the future value of systematic investment plan (SIP) contributions in mutual funds. Enter monthly SIP amount, expected annual return, and investment duration to see projected wealth.",
        url: `${BASE_URL}/calculators/sip`,
        keywords: "SIP calculator, mutual fund SIP calculator, SIP returns, monthly investment calculator",
    },
    {
        position: 12,
        name: "Lumpsum Calculator",
        description:
            "Estimate the future value of a one-time lumpsum investment based on expected annual returns and tenure using the compound interest formula adopted by Indian mutual funds.",
        url: `${BASE_URL}/calculators/lumpsum`,
        keywords: "lumpsum calculator, lump sum investment calculator, one-time investment, mutual fund return",
    },
    {
        position: 13,
        name: "EMI Preclosure Calculator",
        description:
            "Calculate how much interest you save and how many EMIs you reduce by making a lump-sum prepayment on your existing loan. Optimize your part-prepayment strategy.",
        url: `${BASE_URL}/calculators/emi-preclosure`,
        keywords: "EMI preclosure calculator, loan prepayment calculator, part payment savings, loan foreclosure",
    },
    {
        position: 14,
        name: "Amazon Seller Profit Calculator",
        description:
            "Analyze Amazon India marketplace fees, referral fees, GST, and shipping costs to calculate your true net profit per unit. Essential for Amazon sellers optimizing product pricing.",
        url: `${BASE_URL}/calculators/amazon-seller-profit`,
        keywords: "Amazon seller profit calculator, Amazon India fees, marketplace fee calculator, e-commerce profit",
    },
];

const collectionPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        // ── 1. CollectionPage: primary entity for /calculators ──────────────
        {
            "@type": ["CollectionPage", "WebPage"],
            "@id": `${BASE_URL}/calculators#webpage`,
            name: "Free Online Financial & Math Calculators",
            headline: "Free Online Financial & Math Calculators — GST, EMI, Interest & More",
            description:
                "India's most comprehensive free calculator suite. Access 14+ tools for GST, EMI, compound interest, SIP, discount, profit-loss, and percentage — all in one place. Instant, accurate, privacy-first.",
            url: `${BASE_URL}/calculators`,
            inLanguage: ["en-IN", "hi-IN"],
            isPartOf: {
                "@type": "WebSite",
                "@id": `${BASE_URL}/#website`,
                name: "OneCalculator",
                url: BASE_URL,
                description:
                    "India's trusted free financial calculator suite for GST, EMI, interest, and business math.",
                inLanguage: ["en-IN", "hi-IN"],
                publisher: {
                    "@type": "Organization",
                    "@id": `${BASE_URL}/#organization`,
                    name: "OneCalculator",
                    url: BASE_URL,
                    logo: {
                        "@type": "ImageObject",
                        url: `${BASE_URL}/logo.svg`,
                        width: 512,
                        height: 512,
                    },
                    sameAs: ["https://twitter.com/gstcalc_india"],
                    foundingDate: "2024",
                    areaServed: {
                        "@type": "Country",
                        name: "India",
                    },
                    knowsAbout: [
                        "GST Calculator",
                        "EMI Calculator",
                        "Financial Calculators",
                        "Indian Taxation",
                        "Personal Finance",
                    ],
                },
                potentialAction: {
                    "@type": "SearchAction",
                    target: {
                        "@type": "EntryPoint",
                        urlTemplate: `${BASE_URL}/calculators/{search_term_string}`,
                    },
                    "query-input": "required name=search_term_string",
                },
            },
            breadcrumb: {
                "@id": `${BASE_URL}/calculators#breadcrumb`,
            },
            hasPart: calculatorItems.map((item) => ({
                "@type": "SoftwareApplication",
                "@id": `${item.url}#tool`,
                name: item.name,
                description: item.description,
                url: item.url,
                applicationCategory: "FinanceApplication",
                operatingSystem: "Web Browser",
                offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                },
                featureList: item.keywords,
                inLanguage: ["en-IN", "hi-IN"],
                isAccessibleForFree: true,
                author: {
                    "@id": `${BASE_URL}/#organization`,
                },
            })),
            mainEntity: {
                "@id": `${BASE_URL}/calculators#itemlist`,
            },
            about: [
                {
                    "@type": "Thing",
                    name: "GST (Goods and Services Tax)",
                    description: "Indirect tax levied on supply of goods and services in India",
                },
                {
                    "@type": "Thing",
                    name: "EMI (Equated Monthly Installment)",
                    description: "Fixed monthly payment made by borrowers to lenders",
                },
                {
                    "@type": "Thing",
                    name: "Personal Finance",
                    description: "Financial planning including investment, saving, and tax management",
                },
            ],
            audience: {
                "@type": "Audience",
                audienceType:
                    "Business owners, Accountants, Homebuyers, Investors, Students, Shoppers in India",
                geographicArea: {
                    "@type": "Country",
                    name: "India",
                },
            },
            dateCreated: "2024-01-01",
            dateModified: "2026-02-28",
        },

        // ── 2. BreadcrumbList ───────────────────────────────────────────────
        {
            "@type": "BreadcrumbList",
            "@id": `${BASE_URL}/calculators#breadcrumb`,
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: BASE_URL,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "All Calculators",
                    item: `${BASE_URL}/calculators`,
                },
            ],
        },

        // ── 3. ItemList: enables rich result eligibility ────────────────────
        {
            "@type": "ItemList",
            "@id": `${BASE_URL}/calculators#itemlist`,
            name: "Free Online Financial & Math Calculators",
            description:
                "Complete collection of free calculators for GST, EMI, interest, discount, and financial math — built for users in India.",
            url: `${BASE_URL}/calculators`,
            numberOfItems: calculatorItems.length,
            itemListOrder: "https://schema.org/ItemListOrderAscending",
            itemListElement: calculatorItems.map((item) => ({
                "@type": "ListItem",
                position: item.position,
                name: item.name,
                description: item.description,
                url: item.url,
                item: {
                    "@id": `${item.url}#tool`,
                },
            })),
        },
    ],
};
// ────────────────────────────────────────────────────────────────────────────

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Which free online calculators are available on OneCalculator?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "OneCalculator offers 14+ free online calculators for Indian users: GST Calculator (with reverse GST), EMI Calculator, Compound Interest Calculator, Simple Interest Calculator, SIP Calculator, Lumpsum Calculator, Profit & Loss Calculator, Discount Calculator, Percentage Calculator, Margin Calculator, Loan Calculator, EMI Preclosure Calculator, Amazon Seller Profit Calculator, and Remove GST Calculator. All tools are free, no login required, and work on mobile and desktop."
            }
        },
        {
            "@type": "Question",
            "name": "Is OneCalculator free to use? Do I need to register?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all calculators on OneCalculator are 100% free with no registration required. There are no hidden charges, no subscription plans, and no login needed. You can perform unlimited calculations instantly. All calculations happen in your browser — your data is never stored or shared."
            }
        },
        {
            "@type": "Question",
            "name": "Which calculator should I use for a home loan or car loan EMI?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use our EMI Calculator for calculating monthly instalments on home loans, car loans, personal loans, and education loans. It uses the standard reducing balance formula: EMI = P × r × (1+r)^n ÷ ((1+r)^n − 1), where P = principal, r = monthly interest rate, n = tenure in months. For existing loans where you want to pay off early, use the EMI Preclosure Calculator to see how much interest you save."
            }
        },
        {
            "@type": "Question",
            "name": "How do I calculate GST on my product or invoice using this website?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Visit our GST Calculator at onecalculator.online/calculators/gst. Enter the base price and select your GST rate (5%, 12%, 18%, or 28%). The calculator instantly shows the GST amount, CGST, SGST/IGST, and the total price. For reverse GST (when you have a GST-inclusive price and want to find the base price), use the Reverse GST tab. All Indian GST slabs are supported."
            }
        },
        {
            "@type": "Question",
            "name": "Which calculator is best for SIP mutual fund investment planning?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use our SIP Calculator (onecalculator.online/calculators/sip) to plan systematic investment plan returns. Enter your monthly SIP amount, expected annual return rate (typically 10%–15% for equity mutual funds), and investment duration. The calculator uses compound interest to show projected corpus. For one-time investments, use the Lumpsum Calculator instead."
            }
        },
        {
            "@type": "Question",
            "name": "Konsa calculator use karein — GST, EMI ya interest ke liye? (Which calculator to use?)",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Business owners ke liye — GST Calculator aur Profit Loss Calculator useful hai. Home/car loan ke liye — EMI Calculator use karein. Investment planning ke liye — SIP Calculator ya Compound Interest Calculator. Shopping discount ke liye — Discount Calculator. Exam marks ya salary hike ke liye — Percentage Calculator. Sab calculators free hain, koi login nahi chahiye."
            }
        }
    ]
};
// ────────────────────────────────────────────────────────────────────────────

export default function CalculatorsPage() {
    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <JsonLd data={collectionPageSchema} />
            <JsonLd data={faqSchema} />
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
                        Online Financial & Math Calculators (Free & Easy)
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
                            href="/calculators/remove-gst"
                            icon={Minus}
                            title="Remove GST Calculator"
                            description="Quickly extract the base price and tax amount from any GST-inclusive total."
                            gradientFrom="from-orange-500"
                            gradientTo="to-red-600"
                            accentColor="text-orange-600 dark:text-orange-400"
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
                        <ToolCard
                            href="/calculators/margin"
                            icon={BarChart3}
                            title="Margin Calculator"
                            description="Calculate markup and margin to set the perfect selling price for your products."
                            gradientFrom="from-emerald-500"
                            gradientTo="to-teal-600"
                            accentColor="text-emerald-600 dark:text-emerald-400"
                        />
                        <ToolCard
                            href="/calculators/amazon-seller-profit"
                            icon={ShoppingCart}
                            title="Amazon Seller Profit"
                            description="Analyze marketplace fees and landing costs to find your true net profit per unit."
                            gradientFrom="from-orange-600"
                            gradientTo="to-red-600"
                            accentColor="text-orange-600 dark:text-orange-400"
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
                        <ToolCard
                            href="/calculators/loan"
                            icon={Calculator}
                            title="Loan Calculator"
                            description="Estimate monthly EMIs and total interest payout for home, car, or personal loans."
                            gradientFrom="from-blue-600"
                            gradientTo="to-indigo-600"
                            accentColor="text-blue-600 dark:text-blue-400"
                        />
                        <ToolCard
                            href="/calculators/sip"
                            icon={Coins}
                            title="SIP Calculator"
                            description="Forecast the future value of your monthly mutual fund investments with compounding."
                            gradientFrom="from-purple-600"
                            gradientTo="to-indigo-600"
                            accentColor="text-purple-600 dark:text-purple-400"
                        />
                        <ToolCard
                            href="/calculators/lumpsum"
                            icon={Gem}
                            title="Lumpsum Calculator"
                            description="See how your one-time investment grows over time with expected annual returns."
                            gradientFrom="from-indigo-600"
                            gradientTo="to-purple-600"
                            accentColor="text-indigo-600 dark:text-indigo-400"
                        />
                        <ToolCard
                            href="/calculators/emi-preclosure"
                            icon={ShieldCheck}
                            title="EMI Preclosure"
                            description="Calculate how much interest you save and tenure you reduce by making extra payments."
                            gradientFrom="from-blue-700"
                            gradientTo="to-cyan-600"
                            accentColor="text-blue-700 dark:text-blue-400"
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

            {/* Calculator Guide Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900" aria-labelledby="calculator-guide">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 id="calculator-guide" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
                        Complete Calculator Guide
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                                    <Calculator className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">GST Calculator</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Essential for businesses and freelancers in India. Calculate GST (Goods and Services Tax) on products and services, including CGST, SGST, and IGST components.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Use for:</strong> Invoice generation, tax filing, pricing products</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Best for:</strong> Business owners, accountants, e-commerce sellers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Features:</strong> Forward & reverse GST, all tax slabs (5%, 12%, 18%, 28%)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mr-4">
                                    <Home className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">EMI Calculator</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Plan your loan repayments with precision. Calculate monthly installments for home loans, car loans, personal loans, and education loans.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Use for:</strong> Home buying, car purchase, debt planning</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Best for:</strong> Homebuyers, loan applicants, financial planners</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Shows:</strong> Monthly EMI, total interest, payment breakdown</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                                    <PiggyBank className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Interest Calculators</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Understand how your money grows. Calculate both simple and compound interest for investments, savings, and fixed deposits.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Use for:</strong> Investment planning, FD returns, savings goals</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Best for:</strong> Investors, savers, retirement planners</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Compare:</strong> Simple vs compound interest over time</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                    <Percent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Percentage Calculator</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Solve everyday percentage problems. Calculate discounts, tips, grade percentages, salary hikes, and percentage changes.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Use for:</strong> Shopping discounts, exam scores, salary calculations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Best for:</strong> Students, shoppers, professionals, everyone!</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Handles:</strong> Increase, decrease, reverse percentage</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases by Profession */}
            <section className="py-20 bg-white dark:bg-gray-800" aria-labelledby="use-cases">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 id="use-cases" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
                        Calculators for Every Profession
                    </h2>

                    <div className="space-y-6">
                        <details className="group bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">💼</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                                        For Business Owners & Entrepreneurs
                                    </span>
                                </div>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                                <p className="mb-4">Essential tools for managing your business finances:</p>
                                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                                    <li>• <strong>GST Calculator:</strong> Invoice generation, tax compliance, pricing</li>
                                    <li>• <strong>Profit & Loss:</strong> Product pricing, margin analysis</li>
                                    <li>• <strong>Discount Calculator:</strong> Promotional pricing, sales planning</li>
                                    <li>• <strong>Percentage Calculator:</strong> Revenue growth, expense tracking</li>
                                    <li>• <strong>EMI Calculator:</strong> Business loan planning</li>
                                    <li>• <strong>Interest Calculators:</strong> Investment returns, cash flow</li>
                                </ul>
                            </div>
                        </details>

                        <details className="group bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">🏠</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                                        For Homebuyers & Property Investors
                                    </span>
                                </div>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                                <p className="mb-4">Plan your property purchase with confidence:</p>
                                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                                    <li>• <strong>EMI Calculator:</strong> Home loan affordability, monthly payments</li>
                                    <li>• <strong>Simple Interest:</strong> Construction loan calculations</li>
                                    <li>• <strong>Percentage Calculator:</strong> Down payment, price negotiations</li>
                                    <li>• <strong>Compound Interest:</strong> Property appreciation estimates</li>
                                    <li>• <strong>GST Calculator:</strong> Under-construction property GST</li>
                                    <li>• <strong>Discount Calculator:</strong> Builder discounts, offers</li>
                                </ul>
                            </div>
                        </details>

                        <details className="group bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">📚</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                                        For Students & Educators
                                    </span>
                                </div>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                                <p className="mb-4">Learn and apply mathematical concepts:</p>
                                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                                    <li>• <strong>Percentage Calculator:</strong> Grade calculation, score analysis</li>
                                    <li>• <strong>Simple Interest:</strong> Learn basic finance concepts</li>
                                    <li>• <strong>Compound Interest:</strong> Understand exponential growth</li>
                                    <li>• <strong>EMI Calculator:</strong> Education loan planning</li>
                                    <li>• <strong>Profit & Loss:</strong> Business math practice</li>
                                    <li>• <strong>Discount Calculator:</strong> Real-world math applications</li>
                                </ul>
                            </div>
                        </details>

                        <details className="group bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">💰</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                                        For Investors & Wealth Builders
                                    </span>
                                </div>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                                <p className="mb-4">Maximize your investment returns:</p>
                                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                                    <li>• <strong>Compound Interest:</strong> SIP returns, wealth accumulation</li>
                                    <li>• <strong>Simple Interest:</strong> FD returns, bond yields</li>
                                    <li>• <strong>Percentage Calculator:</strong> Portfolio gains, CAGR</li>
                                    <li>• <strong>Profit & Loss:</strong> Stock trading, investment analysis</li>
                                    <li>• <strong>EMI Calculator:</strong> Loan vs investment decisions</li>
                                    <li>• <strong>GST Calculator:</strong> Gold, property investment GST</li>
                                </ul>
                            </div>
                        </details>

                        <details className="group bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">🛍️</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                                        For Smart Shoppers
                                    </span>
                                </div>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                                <p className="mb-4">Make informed purchase decisions:</p>
                                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                                    <li>• <strong>Discount Calculator:</strong> Sale prices, best deals</li>
                                    <li>• <strong>Percentage Calculator:</strong> Cashback, offers comparison</li>
                                    <li>• <strong>GST Calculator:</strong> Final price with tax</li>
                                    <li>• <strong>EMI Calculator:</strong> No-cost EMI verification</li>
                                    <li>• <strong>Simple Interest:</strong> Credit card interest</li>
                                    <li>• <strong>Profit & Loss:</strong> Resale value estimation</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900" aria-labelledby="comparison">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 id="comparison" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
                        Calculator Comparison: Choose the Right Tool
                    </h2>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-900">
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Calculator</th>
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Best For</th>
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Time Frame</th>
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Complexity</th>
                                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Use Frequency</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">GST Calculator</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Business transactions</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Instant</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-600">Easy</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Daily</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">EMI Calculator</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Loan planning</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Long-term (1-30 years)</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-orange-600">Medium</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Occasional</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Simple Interest</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Short-term loans, FDs</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Short-term (1-5 years)</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-600">Easy</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Monthly</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Compound Interest</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Investments, SIPs</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Long-term (5-30 years)</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-orange-600">Medium</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Weekly</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Percentage</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Everyday calculations</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Instant</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-600">Easy</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Daily</td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold">Discount</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Shopping, sales</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Instant</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-green-600">Easy</td>
                                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">Weekly</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white dark:bg-gray-800" aria-labelledby="faq">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 id="faq" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Are these calculators really free to use?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Yes! All our calculators are 100% free with no hidden charges, registration requirements, or usage limits. We believe financial tools should be accessible to everyone. You can use any calculator as many times as you need without any cost.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How accurate are the calculations?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Our calculators use industry-standard formulas that are verified and trusted by financial institutions worldwide. For example, our EMI calculator uses the same formula banks use, and our GST calculator follows official Indian tax regulations. Results are accurate to multiple decimal places.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Do you store my financial data?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    No, we don't store any of your data. All calculations happen entirely in your browser using JavaScript. Nothing is sent to our servers. Your financial information remains completely private and secure on your device. This is a core principle of OneCalculator.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Which calculator should I use for home loan planning?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Use the <strong>EMI Calculator</strong> for home loans. It shows your monthly installment, total interest payable, and helps you compare different loan tenures. You can also use the <strong>Simple Interest Calculator</strong> for construction loans and the <strong>Percentage Calculator</strong> to calculate your down payment percentage.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Can I use these calculators on my mobile phone?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Absolutely! All our calculators are fully responsive and optimized for mobile devices. They work seamlessly on smartphones, tablets, laptops, and desktops. The interface automatically adjusts to your screen size for the best experience.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    What's the difference between simple and compound interest?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    <strong>Simple interest</strong> is calculated only on the principal amount, resulting in linear growth. <strong>Compound interest</strong> is calculated on principal plus accumulated interest, resulting in exponential growth. For example, ₹1L at 10% for 10 years: Simple interest = ₹1L total interest. Compound interest = ₹1.59L total interest. Compound interest grows much faster over time!
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    How do I calculate GST for my business invoices?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Use our <strong>GST Calculator</strong> in forward mode. Enter your base price and select the GST rate (5%, 12%, 18%, or 28%). The calculator will show you the GST amount (split into CGST and SGST for intra-state or IGST for inter-state) and the final price to charge your customer.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Can I save or print my calculation results?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Yes! You can take a screenshot of your results or use your browser's print function (Ctrl+P or Cmd+P) to save results as a PDF. Since calculations happen in your browser, you can also bookmark the page with your inputs for quick access later.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Do I need to create an account to use these calculators?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    No account needed! All calculators are instantly accessible without any registration, login, or sign-up. Just visit the page and start calculating. This keeps things simple and protects your privacy.
                                </p>
                            </div>
                        </details>

                        <details className="group">
                            <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <span className="font-semibold text-gray-900 dark:text-gray-100">
                                    Are these calculators suitable for professional use?
                                </span>
                                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <div className="mt-3 p-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Yes! Our calculators are used by accountants, financial advisors, business owners, and professionals across India. They use the same formulas as professional financial software. However, for critical financial decisions, we always recommend consulting with a qualified financial advisor or chartered accountant.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </main>
    );
}
