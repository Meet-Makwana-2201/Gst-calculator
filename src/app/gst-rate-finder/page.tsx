import GSTRateFinder from '@/components/GSTRateFinder';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'GST Rate Finder - Search HSN Codes & Tax Rates | GST Calculator India',
    description: 'Find GST rates for any product or service in India. Search by HSN code, product name, or category. Instant results with current GST tax rates.',
    keywords: [
        'GST rate finder',
        'HSN code search',
        'GST rate search India',
        'product GST rate',
        'HSN code lookup',
        'GST tax rate finder',
        'find GST rate',
        'HSN SAC code',
    ],
    alternates: {
        canonical: 'https://onecalculator.online/gst-rate-finder',
    },
    openGraph: {
        title: 'GST Rate Finder - Search HSN Codes & Tax Rates',
        description: 'Find GST rates for any product or service in India. Search by HSN code, product name, or category.',
        url: '/gst-rate-finder',
        siteName: 'GST Calculator',
        images: [
            {
                url: '/logo.svg',
                width: 512,
                height: 512,
                alt: 'GST Rate Finder',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GST Rate Finder - Search HSN Codes & Tax Rates',
        description: 'Find GST rates for any product or service in India. Search by HSN code, product name, or category.',
        images: ['/logo.svg'],
    },
};

export default function GSTRateFinderPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'GST Rate Finder',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
        },
        description: 'Search and find GST rates for products and services in India using HSN/SAC codes',
    };

    return (
        <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        GST Rate Finder
                    </h1>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
                        Search for GST rates by product name, HSN code, or category. Get instant results with current tax rates.
                    </p>
                </div>
            </section>

            {/* Search Section */}
            <section className="flex-1 container mx-auto px-4 py-16 max-w-6xl">
                <GSTRateFinder />
            </section>

            {/* Info Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                What is HSN Code?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                <strong>HSN (Harmonized System of Nomenclature)</strong> is an internationally standardized system of names and numbers to classify traded products. In India, HSN codes are used to classify goods under GST. Each product is assigned a unique HSN code that determines its applicable GST rate.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                GST Rate Slabs in India
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                                    <div className="text-2xl font-bold text-green-600 mb-1">0% & 5%</div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Essential items like food grains, milk, vegetables, life-saving drugs
                                    </p>
                                </div>
                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                                    <div className="text-2xl font-bold text-blue-600 mb-1">12%</div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Processed foods, computers, mobile phones
                                    </p>
                                </div>
                                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                                    <div className="text-2xl font-bold text-orange-600 mb-1">18%</div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Most goods and services, IT services, capital goods
                                    </p>
                                </div>
                                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                                    <div className="text-2xl font-bold text-red-600 mb-1">28%</div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Luxury items, automobiles, tobacco, aerated drinks
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl text-white">
                            <h3 className="text-2xl font-bold mb-3">Ready to Calculate GST?</h3>
                            <p className="text-indigo-100 mb-6">
                                Use our calculator to compute GST amounts instantly with the rates you found.
                            </p>
                            <Link href="/calculator">
                                <Button className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold">
                                    Open GST Calculator
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
