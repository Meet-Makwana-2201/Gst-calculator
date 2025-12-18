import BlogPostWrapper from '@/components/BlogPostWrapper';
import JsonLd from '@/components/JsonLd';

export const metadata = {
    title: "GST State Codes List 2025: Complete List of 38 Codes",
    description: "Find the complete list of GST State Codes for 2025. Correct state codes are mandatory for filing GST returns and generating e-way bills. Check your state code here.",
    keywords: [
        "GST state codes list 2025",
        "gst state code list pdf",
        "state code 27 gst",
        "gst state code 29",
        "gst state code 07",
    ],
    alternates: {
        canonical: "https://onecalculator.online/blog/gst-state-codes-list-2025",
    },
    openGraph: {
        title: "GST State Codes List 2025: Complete List of 38 Codes",
        description: "Find the complete list of GST State Codes for 2025. Correct state codes are mandatory for filing GST returns and generating e-way bills. Check your state code here.",
        url: "/blog/gst-state-codes-list-2025",
        siteName: "GST Calculator",
        images: [
            {
                url: "/blog-gst-state-codes.png",
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
        title: "GST State Codes List 2025: Complete List of 38 Codes",
        description: "Find the complete list of GST State Codes for 2025. Correct state codes are mandatory for filing GST returns and generating e-way bills. Check your state code here.",
        images: ["/blog-gst-state-codes.png"],
    },
};

const toc = [
    { id: 'why-important', title: 'Why are GST State Codes Important?', level: 2 as const },
    { id: 'list', title: 'Complete List of GST State Codes', level: 2 as const },
    { id: 'how-to-find', title: 'How to Find State Code in GSTIN', level: 2 as const },
];

export default function BlogPost() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "GST State Codes List 2025: Complete List of 38 Codes",
        "description": "Find the complete list of GST State Codes for 2025. Correct state codes are mandatory for filing GST returns and generating e-way bills. Check your state code here.",
        "datePublished": "2025-01-30",
        "author": {
            "@type": "Organization",
            "name": "GST Calculator India"
        },
        "image": "https://onecalculator.online/blog-gst-state-codes.png"
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <BlogPostWrapper
                slug="gst-state-codes-list-2025"
                title="GST State Codes List 2025: Complete Reference"
                description="Every GSTIN (Goods and Services Tax Identification Number) starts with a 2-digit state code. Using the correct state code is mandatory for filing GST returns, generating e-way bills, and claiming Input Tax Credit."
                date="January 30, 2025"
                readTime="3 min read"
                category="Reference"
                image="/blog-gst-state-codes.png"
                toc={toc}
            >
                <p>
                    Every GSTIN (Goods and Services Tax Identification Number) starts with a 2-digit state code. Using the correct state code is mandatory for filing GST returns, generating e-way bills, and claiming Input Tax Credit.
                </p>

                <h2 id="why-important">Why are GST State Codes Important?</h2>
                <p>
                    The first two digits of your 15-character GSTIN represent your state code.
                </p>
                <ul>
                    <li><strong>Place of Supply:</strong> Helps determine if a transaction is Intra-state (CGST + SGST) or Inter-state (IGST).</li>
                    <li><strong>Compliance:</strong> Wrong state codes can lead to mismatch in returns and rejection of ITC claims.</li>
                </ul>

                <h2 id="list">Complete List of GST State Codes</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full my-4 border border-gray-200 dark:border-gray-700 text-sm">
                        <thead className="bg-gray-100 dark:bg-gray-800">
                            <tr>
                                <th className="p-3 text-left">Code</th>
                                <th className="p-3 text-left">State / Union Territory</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
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
                                { code: "29", state: "Karnataka" },
                                { code: "30", state: "Goa" },
                                { code: "31", state: "Lakshadweep" },
                                { code: "32", state: "Kerala" },
                                { code: "33", state: "Tamil Nadu" },
                                { code: "34", state: "Puducherry" },
                                { code: "35", state: "Andaman and Nicobar Islands" },
                                { code: "36", state: "Telangana" },
                                { code: "37", state: "Andhra Pradesh" },
                                { code: "38", state: "Ladakh" },
                                { code: "97", state: "Other Territory" },
                            ].map((item) => (
                                <tr key={item.code} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                    <td className="p-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">{item.code}</td>
                                    <td className="p-3">{item.state}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 id="how-to-find">How to Find State Code in GSTIN</h2>
                <p>
                    Look at any GST Number, for example: <strong>27ABCDE1234F1Z5</strong>.
                </p>
                <p>
                    The first two digits are <strong>27</strong>. Checking the table above, 27 corresponds to <strong>Maharashtra</strong>.
                </p>
            </BlogPostWrapper>
        </>
    );
}
