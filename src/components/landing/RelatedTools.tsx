"use client";

import Link from "next/link";
import {
    Calculator,
    Percent,
    Tag,
    TrendingUp,
    PiggyBank,
    Wallet
} from "lucide-react";

interface ToolCard {
    title: string;
    route: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
}

const tools: ToolCard[] = [
    {
        title: "EMI Calculator",
        route: "/calculators/emi",
        description: "Calculate your monthly loan payments instantly.",
        icon: <Calculator className="w-6 h-6" />,
        gradient: "from-blue-500 to-cyan-600",
    },
    {
        title: "Percentage Calculator",
        route: "/calculators/percentage",
        description: "Solve complex percentage problems in seconds.",
        icon: <Percent className="w-6 h-6" />,
        gradient: "from-purple-500 to-pink-600",
    },
    {
        title: "Discount Calculator",
        route: "/calculators/discount",
        description: "Calculate sale prices and savings.",
        icon: <Tag className="w-6 h-6" />,
        gradient: "from-green-500 to-emerald-600",
    },
    {
        title: "Profit & Loss Calculator",
        route: "/calculators/profit-loss",
        description: "Track your business margins and net profit.",
        icon: <TrendingUp className="w-6 h-6" />,
        gradient: "from-orange-500 to-red-600",
    },
    {
        title: "Simple Interest",
        route: "/calculators/simple-interest",
        description: "Basic interest calculation for loans or savings.",
        icon: <PiggyBank className="w-6 h-6" />,
        gradient: "from-indigo-500 to-purple-600",
    },
    {
        title: "Compound Interest",
        route: "/calculators/compound-interest",
        description: "See how your investments grow over time.",
        icon: <Wallet className="w-6 h-6" />,
        gradient: "from-pink-500 to-rose-600",
    },
];

export default function RelatedTools() {
    return (
        <section className="py-16 md:py-24 px-4 relative z-10 bg-white dark:bg-gray-900">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        More Free Financial Tools
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Explore our complete suite of calculators to help you make informed financial decisions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tools.map((tool) => (
                        <Link
                            key={tool.route}
                            href={tool.route}
                            className="group block"
                        >
                            <div className="h-full p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <div
                                    className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center text-white shadow-lg`}
                                >
                                    {tool.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {tool.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {tool.description}
                                </p>
                                <div className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400 font-medium text-sm group-hover:translate-x-1 transition-transform">
                                    Try it now
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
