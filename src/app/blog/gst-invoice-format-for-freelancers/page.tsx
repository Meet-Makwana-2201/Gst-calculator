import BlogPostWrapper from '@/components/BlogPostWrapper';
import JsonLd from '@/components/JsonLd';

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

const toc = [
    { id: 'mandatory-fields', title: 'Mandatory Fields in a GST Invoice', level: 2 as const },
    { id: 'digital-signatures', title: 'Digital Signatures', level: 2 as const },
    { id: 'tools', title: 'Tools for Invoicing', level: 2 as const },
    { id: 'template', title: 'Free Excel Template', level: 2 as const },
];

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
        <>
            <JsonLd data={jsonLd} />
            <BlogPostWrapper
                slug="gst-invoice-format-for-freelancers"
                title="GST Invoice Format for Freelancers: The Ultimate Guide"
                description="As a freelancer registered under GST, issuing a proper tax invoice is mandatory. A compliant invoice not only ensures you follow the law but also projects professionalism to your clients."
                date="January 22, 2025"
                readTime="6 min read"
                category="Freelancing"
                image="/blog-gst-invoice.png"
                toc={toc}
            >
                <p>
                    As a freelancer registered under GST, issuing a proper tax invoice is mandatory. A compliant invoice not only ensures you follow the law but also projects professionalism to your clients.
                </p>

                <h2 id="mandatory-fields">Mandatory Fields in a GST Invoice</h2>
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

                <h2 id="digital-signatures">Digital Signatures</h2>
                <p>
                    You don&apos;t strictly need a Class 3 Digital Signature Certificate (DSC) for invoices sent via email. A scanned image of your physical signature or a digital sign-off is generally accepted for freelance work, though using a secure digital signature is better for authenticity.
                </p>

                <h2 id="tools">Tools for Invoicing</h2>
                <p>
                    While you can use Excel (we have a template below), as you grow, consider using:
                </p>
                <ul>
                    <li><strong>Zoho Books / Zoho Invoice:</strong> Great for automation.</li>
                    <li><strong>ClearTax:</strong> Good for compliance.</li>
                    <li><strong>Refrens:</strong> Popular among Indian freelancers.</li>
                </ul>

                <h2 id="template">Free Excel Template</h2>
                <p>
                    We have created a simple, compliant Excel template for you. It includes formulas to automatically calculate the tax amounts.
                </p>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                    <p className="mb-2 font-semibold">Download GST Invoice Template (.xlsx)</p>
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                        Download Now
                    </button>
                </div>
            </BlogPostWrapper>
        </>
    );
}
