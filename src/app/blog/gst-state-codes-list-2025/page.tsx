import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Image from 'next/image';

export const metadata = {
    title: "GST State Codes List 2025: Complete Guide for E-way Bills",
    description: "Complete list of GST State Codes in India (01-37). Essential for GST registration, e-way bills, and filing returns. Find your state code instantly.",
    keywords: [
        "GST state codes list 2025",
        "state code 27 gst",
        "gst state code list pdf",
        "what is my gst state code",
        "e-way bill state codes",
        "gst tin number format",
    ],
    alternates: {
        canonical: "/blog/gst-state-codes-list-2025",
    },
    openGraph: {
        title: "GST State Codes List 2025: Complete Guide for E-way Bills",
        description: "Complete list of GST State Codes in India (01-37). Essential for GST registration, e-way bills, and filing returns. Find your state code instantly.",
        url: "/blog/gst-state-codes-list-2025",
        siteName: "GST Calculator",
        images: [
            {
                url: "/blog-state-codes.png",
                width: 1200,
                height: 630,
                alt: "GST State Codes List",
            },
        ],
        locale: "en_IN",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "GST State Codes List 2025: Complete Guide for E-way Bills",
        description: "Complete list of GST State Codes in India (01-37). Essential for GST registration, e-way bills, and filing returns. Find your state code instantly.",
        images: ["/blog-state-codes.png"],
    },
};

export default function BlogPost() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "GST State Codes List 2025: Complete Guide for E-way Bills",
        "description": "Complete list of GST State Codes in India (01-37). Essential for GST registration, e-way bills, and filing returns. Find your state code instantly.",
        "datePublished": "2025-01-30",
        "author": {
            "@type": "Organization",
            "name": "GST Calculator India"
        },
        "image": "https://easy-gst-calculator.netlify.app/blog-state-codes.png"
    };

    const stateCodes = [
        { code: "01", state: "Jammu and Kashmir" },
        { code: "02", state: "Himachal Pradesh" },
        { code: "03", state: "Punjab" },
        { code: "04", state: "Chandigarh" },
        { code: "05", state: "Uttarakhand" },
        { code: "06", state: "Haryana" },
        { code: "07", state: "Delhi" },
        { code: "08", state: "Rajasthan" },
        { code: "09", state: "Uttar Pradesh" },
        { code: "10", state: "Bihar" },
        { code: "11", state: "Sikkim" },
        { code: "12", state: "Arunachal Pradesh" },
        { code: "13", state: "Nagaland" },
        { code: "14", state: "Manipur" },
        { code: "15", state: "Mizoram" },
        { code: "16", state: "Tripura" },
        { code: "17", state: "Meghalaya" },
        { code: "18", state: "Assam" },
        { code: "19", state: "West Bengal" },
        { code: "20", state: "Jharkhand" },
        { code: "21", state: "Odisha" },
        { code: "22", state: "Chhattisgarh" },
        { code: "23", state: "Madhya Pradesh" },
        { code: "24", state: "Gujarat" },
        { code: "25", state: "Daman and Diu" },
        { code: "26", state: "Dadra and Nagar Haveli" },
        { code: "27", state: "Maharashtra" },
        { code: "28", state: "Andhra Pradesh (Old)" },
        { code: "29", state: "Karnataka" },
        { code: "30", state: "Goa" },
        { code: "31", state: "Lakshadweep" },
        { code: "32", state: "Kerala" },
        { code: "33", state: "Tamil Nadu" },
        { code: "34", state: "Puducherry" },
        { code: "35", state: "Andaman and Nicobar Islands" },
        { code: "36", state: "Telangana" },
        { code: "37", state: "Andhra Pradesh (New)" },
        { code: "38", state: "Ladakh" },
    ];

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
                        GST State Codes List 2025
                    </h1>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-6">
                        <span>January 30, 2025</span>
                        <span className="mx-2">•</span>
                        <span>Reference</span>
                        <span className="mx-2">•</span>
                        <span>3 min read</span>
                    </div>
                    <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
                        <Image
                            src="/blog-state-codes.png"
                            alt="GST State Codes List"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                        The GST State Code is a two-digit number that represents a specific state or union territory in India. It is the first two digits of your 15-digit GSTIN (Goods and Services Tax Identification Number).
                    </p>

                    <h2>Why is it important?</h2>
                    <ul>
                        <li><strong>GST Registration:</strong> It defines your jurisdiction.</li>
                        <li><strong>Invoicing:</strong> Mandatory for determining Place of Supply.</li>
                        <li><strong>E-way Bills:</strong> Required for generating e-way bills for transport.</li>
                    </ul>

                    <h2>Complete List of State Codes</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full my-4 border border-gray-200 dark:border-gray-700 text-sm">
                            <thead className="bg-gray-100 dark:bg-gray-800">
                                <tr>
                                    <th className="p-3 text-left w-24">Code</th>
                                    <th className="p-3 text-left">State / Union Territory</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stateCodes.map((item) => (
                                    <tr key={item.code} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                        <td className="p-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">{item.code}</td>
                                        <td className="p-3">{item.state}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2>How to identify State Code in GSTIN?</h2>
                    <p>
                        If a GSTIN is <strong>27ABCDE1234F1Z5</strong>:
                    </p>
                    <ul>
                        <li>The first two digits <strong>"27"</strong> represent the state code (Maharashtra).</li>
                        <li>The next 10 characters are the PAN number.</li>
                    </ul>
                </div>
            </article>
        </main>
    );
}
