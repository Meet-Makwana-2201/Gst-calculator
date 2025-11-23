import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Image from 'next/image';

export const metadata = {
    title: "GST Invoice Format for Freelancers: Free Template & Guide",
    description: "Learn how to create a compliant GST invoice for freelancers in India. Download free Excel templates and understand mandatory fields, export invoices, and digital signatures.",
    keywords: [
        "GST invoice format for freelancers",
        "freelance invoice template India",
        "GST bill format excel",
        "export invoice format for services",
        "LUT bond for export",
        "freelancer billing software",
    ],
    alternates: {
        canonical: "/blog/gst-invoice-format-for-freelancers",
    },
    openGraph: {
        title: "GST Invoice Format for Freelancers: Free Template & Guide",
        description: "Learn how to create a compliant GST invoice for freelancers in India. Download free Excel templates and understand mandatory fields, export invoices, and digital signatures.",
        url: "/blog/gst-invoice-format-for-freelancers",
        siteName: "GST Calculator",
        images: [
            {
                url: "/blog-gst-invoice.png",
                width: 1200,
                height: 630,
                alt: "GST Invoice Format",
            },
        ],
        locale: "en_IN",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "GST Invoice Format for Freelancers: Free Template & Guide",
        description: "Learn how to create a compliant GST invoice for freelancers in India. Download free Excel templates and understand mandatory fields, export invoices, and digital signatures.",
        images: ["/blog-gst-invoice.png"],
    },
};

export default function BlogPost() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "GST Invoice Format for Freelancers: Free Template & Guide",
        "description": "Learn how to create a compliant GST invoice for freelancers in India. Download free Excel templates and understand mandatory fields, export invoices, and digital signatures.",
        "datePublished": "2025-01-22",
        "author": {
            "@type": "Organization",
            "name": "GST Calculator India"
        },
        "image": "https://easy-gst-calculator.netlify.app/blog-gst-invoice.png"
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
                        GST Invoice Format for Freelancers: The Ultimate Guide
                    </h1>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-6">
                        <span>January 22, 2025</span>
                        <span className="mx-2">•</span>
                        <span>Freelancing</span>
                        <span className="mx-2">•</span>
                        <span>6 min read</span>
                    </div>
                    <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
                        <Image
                            src="/blog-gst-invoice.png"
                            alt="GST Invoice Format"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                        As a freelancer registered under GST, issuing a proper tax invoice is mandatory. A compliant invoice not only ensures you follow the law but also projects professionalism to your clients.
                    </p>

                    <h2>Mandatory Fields in a GST Invoice</h2>
                    <p>
                        According to GST rules, your invoice must contain the following details:
                    </p>
                    <ol>
                        <li><strong>Invoice Number & Date:</strong> A unique consecutive serial number.</li>
                        <li><strong>Your Details:</strong> Name, Address, and GSTIN.</li>
                        <li><strong>Client Details:</strong> Name, Address, and GSTIN (if registered).</li>
                        <li><strong>Place of Supply:</strong> Crucial for determining IGST vs CGST/SGST.</li>
                        <li><strong>SAC Code:</strong> Service Accounting Code (e.g., 9983 for IT services).</li>
                        <li><strong>Description of Services:</strong> Clear description of work done.</li>
                        <li><strong>Taxable Value:</strong> The amount before tax.</li>
                        <li><strong>Tax Rate & Amount:</strong> Breakdown of CGST, SGST, or IGST.</li>
                        <li><strong>Total Value:</strong> Final amount payable.</li>
                        <li><strong>Signature:</strong> Digital or physical signature.</li>
                    </ol>

                    <h2>Export Invoices (For International Clients)</h2>
                    <p>
                        If you work with clients outside India, this is considered an <strong>export of services</strong>.
                    </p>
                    <ul>
                        <li><strong>Zero-Rated Supply:</strong> Exports are generally zero-rated, meaning you don't charge GST if you have a Letter of Undertaking (LUT).</li>
                        <li><strong>Currency:</strong> The invoice can be in foreign currency (e.g., USD), but it's good practice to show the INR equivalent for your records.</li>
                        <li><strong>Endorsement:</strong> The invoice should carry the endorsement: <em>"SUPPLY MEANT FOR EXPORT UNDER BOND OR LETTER OF UNDERTAKING WITHOUT PAYMENT OF INTEGRATED TAX"</em>.</li>
                    </ul>

                    <h2>Digital Signatures</h2>
                    <p>
                        You don't strictly need a Class 3 Digital Signature Certificate (DSC) for invoices sent via email. A scanned image of your physical signature or a digital sign-off is generally accepted for freelance work, though using a secure digital signature is better for authenticity.
                    </p>

                    <h2>Tools for Invoicing</h2>
                    <p>
                        While you can use Excel (we have a template below), as you grow, consider using:
                    </p>
                    <ul>
                        <li><strong>Zoho Books / Zoho Invoice:</strong> Great for automation.</li>
                        <li><strong>ClearTax:</strong> Good for compliance.</li>
                        <li><strong>Refrens:</strong> Popular among Indian freelancers.</li>
                    </ul>

                    <h2>Free Excel Template</h2>
                    <p>
                        We have created a simple, compliant Excel template for you. It includes formulas to automatically calculate the tax amounts.
                    </p>
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                        <p className="mb-2 font-semibold">Download GST Invoice Template (.xlsx)</p>
                        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                            Download Now
                        </button>
                    </div>
                </div>
            </article>
        </main>
    );
}
