import ShareButtons from "@/components/ShareButtons";

export const metadata = {
    title: "About Us - GST Calculator India | Our Mission & Story",
    description: "Learn about our mission to provide simple, accurate, and free GST calculations for businesses and individuals across India. Fast, reliable, and trusted GST calculator platform.",
    keywords: [
        "easy gst calculator",
        "gstcalc",
        "reverse gst calculator",
        "reverse gst",
        "easy reverse gst",
        "About GST Calculator India",
        "GST calculator mission",
        "who built GST calculator",
        "free GST calculator India",
        "trusted GST calculator",
        "GST calculation platform",
        "about GST calculator tool",
        "GST calculator story",
    ],
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
    alternates: {
        canonical: "https://onecalculator.online/about",
    },
    openGraph: {
        title: "About Us - GST Calculator India | Our Mission & Story",
        description: "Learn about our mission to provide simple, accurate, and free GST calculations for businesses and individuals across India. Fast, reliable, and trusted GST calculator platform.",
        url: "/about",
        siteName: "GST Calculator",
        images: [
            {
                url: "/logo.svg",
                width: 512,
                height: 512,
                alt: "About GST Calculator",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us - GST Calculator India | Our Mission & Story",
        description: "Learn about our mission to provide simple, accurate, and free GST calculations for businesses and individuals across India. Fast, reliable, and trusted GST calculator platform.",
        images: ["/logo.svg"],
    },
};

export default function About() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="flex-1 container mx-auto px-4 py-8 max-w-4xl space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">About GST Calculator India</h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Welcome to GST Calculator India - your trusted, free, and easy-to-use tool for calculating GST amounts online.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Who We Are</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            We are a team dedicated to simplifying GST calculations for businesses, professionals, and individuals across India.
                            Our mission is to provide accurate, fast, and completely free GST calculation tools that everyone can access without any barriers.
                        </p>
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Why We Built This</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            GST (Goods and Services Tax) calculation can be confusing and time-consuming. Many businesses and individuals struggle
                            with manual calculations, leading to errors and wasted time. We recognized this challenge and decided to create a
                            solution that:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                            <li><strong>Simplifies GST calculations</strong> - No complex formulas to remember</li>
                            <li><strong>Saves time</strong> - Get instant, accurate results in seconds</li>
                            <li><strong>Is completely free</strong> - No hidden costs, no subscriptions</li>
                            <li><strong>Works everywhere</strong> - Access from any device, anywhere</li>
                            <li><strong>Supports all GST rates</strong> - 5%, 12%, 18%, 28%, and custom rates</li>
                            <li><strong>Includes reverse calculation</strong> - Calculate original price from total amount</li>
                        </ul>
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">What Makes Us Different</h2>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🚀 Fast & Accurate</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Instant calculations with precise results. No waiting, no errors.
                                </p>
                            </div>
                            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">🔒 Privacy First</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Your data stays on your device. No tracking, no storage of your calculations.
                                </p>
                            </div>
                            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">📱 Mobile Friendly</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    Optimized for all devices - desktop, tablet, and mobile phones.
                                </p>
                            </div>
                            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">💰 Always Free</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">
                                    No hidden fees, no premium plans. Everything is free forever.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Our Commitment</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            We are committed to providing the best GST calculation experience possible. This tool is regularly updated
                            to ensure accuracy and improve user experience. While we strive for perfection, we recommend verifying
                            critical calculations using official methods, especially for tax filing purposes.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-4">
                            <strong>Important Note:</strong> This calculator is a helpful tool for quick calculations. For official tax
                            purposes and critical business decisions, please consult with a certified tax professional or use official
                            government calculators.
                        </p>
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Get in Touch</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Have questions, suggestions, or found a bug? We&apos;d love to hear from you! Visit our{" "}
                            <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                Contact Page
                            </a>{" "}
                            to reach out. Your feedback helps us improve the tool for everyone.
                        </p>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Share with Others</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Found this tool helpful? Share it with your friends, colleagues, and business partners who might benefit from it.
                        </p>
                        <ShareButtons url="https://onecalculator.online" title="GST Calculator India - Free Online GST Calculation Tool" />
                    </div>
                </div>
            </section>
        </main>
    );
}
