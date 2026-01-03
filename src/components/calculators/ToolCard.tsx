import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ToolCardProps {
    href: string;
    icon: LucideIcon;
    title: string;
    description: string;
    gradientFrom: string;
    gradientTo: string;
    accentColor: string;
}

export function ToolCard({
    href,
    icon: Icon,
    title,
    description,
    gradientFrom,
    gradientTo,
    accentColor,
}: ToolCardProps) {
    return (
        <Link href={href} className="group" aria-label={`Use ${title}`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col hover:-translate-y-1">
                <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                >
                    <Icon className="w-8 h-8 text-white" />
                </div>
                <h3
                    className={`text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:${accentColor} transition-colors`}
                >
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                    {description}
                </p>
                <div
                    className={`flex items-center ${accentColor} font-bold`}
                    aria-label="Use Tool"
                >
                    Use Tool
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
