export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
    image?: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "gst-state-codes-list-2025",
        title: "GST State Codes List 2025: Complete Guide for E-way Bills",
        description: "Complete list of GST State Codes in India (01-37). Essential for GST registration, e-way bills, and filing returns.",
        date: "January 30, 2025",
        readTime: "3 min read",
        category: "Reference",
        image: "/blog-gst-state-codes.png",
    },
    {
        slug: "how-to-calculate-gst-backwards",
        title: "How to Calculate GST Backwards (Reverse Calculation)",
        description: "Learn how to calculate GST backwards from the total amount. Use the reverse GST formula to find the base price.",
        date: "January 28, 2025",
        readTime: "4 min read",
        category: "Guides",
        image: "/blog-reverse-gst.png",
    },
    {
        slug: "composition-scheme-vs-regular-gst",
        title: "Composition Scheme vs Regular GST: Which is Better?",
        description: "Compare Composition Scheme vs Regular GST scheme. Understand the pros and cons, tax rates, and compliance burden.",
        date: "January 25, 2025",
        readTime: "7 min read",
        category: "Business Guide",
        image: "/blog-composition-vs-regular.png",
    },
    {
        slug: "gst-invoice-format-for-freelancers",
        title: "GST Invoice Format for Freelancers: The Ultimate Guide",
        description: "Learn how to create a compliant GST invoice. Download free Excel templates and understand mandatory fields.",
        date: "January 22, 2025",
        readTime: "6 min read",
        category: "Freelancing",
        image: "/blog-gst-invoice.png",
    },
    {
        slug: "gst-on-electronics-mobile-laptops-2025",
        title: "GST on Electronics 2025: Mobile Phones & Laptops",
        description: "Complete guide to GST rates on electronics in India for 2025. Know the tax rates for mobile phones, laptops, and accessories.",
        date: "January 20, 2025",
        readTime: "5 min read",
        category: "Consumer Electronics",
        image: "/blog-gst-electronics.png",
    },
    {
        slug: "gst-calculation-for-freelancers-india",
        title: "GST Calculation for Freelancers in India: Complete Guide 2025",
        description: "Everything freelancers need to know about GST registration, calculation, and filing. Learn how to calculate GST on your freelance income and stay compliant.",
        date: "January 15, 2025",
        readTime: "8 min read",
        category: "Freelancers",
        image: "/blog-freelancer-gst.png",
    },
    {
        slug: "gst-rate-chart-2025-india",
        title: "GST Rate Chart India 2025: Complete List with Examples",
        description: "Comprehensive GST rates chart for 2025. Find GST rates for all goods and services including HSN codes, examples, and recent updates.",
        date: "January 10, 2025",
        readTime: "6 min read",
        category: "GST Rates",
        image: "/blog-gst-rates-2025.png",
    },
    {
        slug: "gst-calculator-excel-download",
        title: "GST Calculator Excel Download: Free Template & Guide",
        description: "Download free GST calculation Excel templates. Learn how to create your own GST calculator in Excel with formulas and examples.",
        date: "January 8, 2025",
        readTime: "5 min read",
        category: "Tools & Resources",
        image: "/blog-excel-calculator.png",
    },
    {
        slug: "difference-between-gst-and-vat",
        title: "Difference Between GST and VAT: Key Changes Explained",
        description: "Understand the differences between GST and VAT systems in India. Learn how GST replaced VAT and what it means for businesses.",
        date: "January 5, 2025",
        readTime: "7 min read",
        category: "GST Basics",
        image: "/blog-difference-gst-vat.png",
    },
];
