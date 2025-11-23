import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Image from 'next/image';

export const metadata = {
    title: "Composition Scheme vs Regular GST: Which is Better for Small Business?",
    description: "Compare Composition Scheme vs Regular GST scheme. Understand the pros and cons, tax rates (1% vs 18%), compliance burden, and input tax credit rules to make the right choice.",
    keywords: [
        "composition scheme vs regular scheme",
        "GST composition scheme limit 2025",
        "benefits of composition scheme",
        "input tax credit composition scheme",
        "GST registration for small business",
        "regular vs composition gst difference",
    ],
    alternates: {
        canonical: "/blog/composition-scheme-vs-regular-gst",
    },
    openGraph: {
        title: "Composition Scheme vs Regular GST: Which is Better for Small Business?",
        description: "Compare Composition Scheme vs Regular GST scheme. Understand the pros and cons, tax rates (1% vs 18%), compliance burden, and input tax credit rules to make the right choice.",
        url: "/blog/composition-scheme-vs-regular-gst",
        siteName: "GST Calculator",
        images: [
            {
                url: "/blog-composition-vs-regular.png",
                width: 1200,
                height: 630,
                alt: "Composition vs Regular GST",
            },
        ],
        locale: "en_IN",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Composition Scheme vs Regular GST: Which is Better for Small Business?",
        description: "Compare Composition Scheme vs Regular GST scheme. Understand the pros and cons, tax rates (1% vs 18%), compliance burden, and input tax credit rules to make the right choice.",
        images: ["/blog-composition-vs-regular.png"],
    },
};

export default function BlogPost() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Composition Scheme vs Regular GST: Which is Better for Small Business?",
        "description": "Compare Composition Scheme vs Regular GST scheme. Understand the pros and cons, tax rates (1% vs 18%), compliance burden, and input tax credit rules to make the right choice.",
        "datePublished": "2025-01-25",
        "author": {
            "@type": "Organization",
            "name": "GST Calculator India"
        },
        "image": "https://easy-gst-calculator.netlify.app/blog-composition-vs-regular.png"
    };

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <JsonLd data={jsonLd} />
            <article className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
                <Link href="/blog" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline mb-8">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Blog
                </Link>

                <header className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Composition Scheme vs Regular GST: Which is Better?
                    </h1>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-6">
                        <span>January 25, 2025</span>
                        <span className="mx-2">•</span>
                        <span>Business Guide</span>
                        <span className="mx-2">•</span>
                        <span>7 min read</span>
                    </div>
                    <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
                        <Image
                            src="/blog-composition-vs-regular.png"
                            alt="Composition vs Regular GST"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                        Small business owners in India often face a dilemma when registering for GST: should they opt for the <strong>Regular Scheme</strong> or the <strong>Composition Scheme</strong>? Both have distinct advantages and limitations.
                    </p>

                    <h2>What is the Composition Scheme?</h2>
                    <p>
                        The Composition Scheme is a simple and easy scheme under GST for taxpayers. Small taxpayers can get rid of tedious GST formalities and pay GST at a fixed rate of turnover. This scheme can be opted for by any taxpayer whose turnover is less than <strong>₹1.5 Crore</strong>.
                    </p>

                    <h2>Comparison Table</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full my-4 border border-gray-200 dark:border-gray-700 text-sm">
                            <thead className="bg-gray-100 dark:bg-gray-800">
                                <tr>
                                    <th className="p-3 text-left">Feature</th>
                                    <th className="p-3 text-left">Regular Scheme</th>
                                    <th className="p-3 text-left">Composition Scheme</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="p-3 font-semibold">Tax Rate</td>
                                    <td className="p-3">Standard rates (5%, 12%, 18%, 28%)</td>
                                    <td className="p-3">Lower fixed rates (1% for traders/manufacturers, 5% for restaurants, 6% for service providers)</td>
                                </tr>
                                <tr className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="p-3 font-semibold">Input Tax Credit (ITC)</td>
                                    <td className="p-3 text-green-600 font-bold">Available</td>
                                    <td className="p-3 text-red-600 font-bold">Not Available</td>
                                </tr>
                                <tr className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="p-3 font-semibold">Inter-state Sales</td>
                                    <td className="p-3">Allowed</td>
                                    <td className="p-3">Not Allowed (Can only sell within state)</td>
                                </tr>
                                <tr className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="p-3 font-semibold">Tax Invoice</td>
                                    <td className="p-3">Must issue Tax Invoice</td>
                                    <td className="p-3">Cannot issue Tax Invoice (Bill of Supply instead)</td>
                                </tr>
                                <tr className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="p-3 font-semibold">Returns</td>
                                    <td className="p-3">Monthly (GSTR-1, GSTR-3B)</td>
                                    <td className="p-3">Quarterly (CMP-08) & Annual</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Pros & Cons</h2>

                    <h3>Regular Scheme</h3>
                    <p><strong>Pros:</strong></p>
                    <ul>
                        <li>Can claim Input Tax Credit (ITC), reducing costs.</li>
                        <li>Can sell across India (Inter-state) and export.</li>
                        <li>Preferred by B2B clients who want to claim ITC.</li>
                    </ul>
                    <p><strong>Cons:</strong></p>
                    <ul>
                        <li>Higher compliance burden (monthly returns).</li>
                        <li>Complex record-keeping.</li>
                    </ul>

                    <h3>Composition Scheme</h3>
                    <p><strong>Pros:</strong></p>
                    <ul>
                        <li>Lower tax liability.</li>
                        <li>Less compliance (quarterly returns).</li>
                        <li>Simple records.</li>
                    </ul>
                    <p><strong>Cons:</strong></p>
                    <ul>
                        <li>Cannot collect tax from customers.</li>
                        <li>Cannot claim ITC on purchases.</li>
                        <li>Restricted to intra-state sales only.</li>
                    </ul>

                    <h2>Which one should you choose?</h2>
                    <p>
                        <strong>Choose Composition Scheme if:</strong> You are a small retailer or restaurant with mostly B2C customers, you don't plan to sell outside your state, and your profit margins are high enough to absorb the tax cost (since you can't collect it).
                    </p>
                    <p>
                        <strong>Choose Regular Scheme if:</strong> You are a B2B business, you plan to expand nationally, or you have significant input costs (rent, raw materials) on which you want to claim credit.
                    </p>
                </div>
            </article>
        </main>
    );
}
