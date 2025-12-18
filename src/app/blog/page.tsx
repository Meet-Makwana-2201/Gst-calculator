import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import Image from 'next/image';

export const metadata = {
  title: "GST Blog - Articles, Guides & Resources | GST Calculator India",
  description: "Learn about GST calculation, GST rates, billing tools, and more with our comprehensive blog articles. Expert guides for freelancers and small businesses in India.",
  keywords: [
    "GST blog",
    "GST articles",
    "GST guide",
    "GST for freelancers",
    "GST rates 2025",
    "GST calculation guide",
  ],
  alternates: {
    canonical: "https://onecalculator.online/blog",
  },
  openGraph: {
    title: "GST Blog - Articles, Guides & Resources | GST Calculator India",
    description: "Learn about GST calculation, GST rates, billing tools, and more with our comprehensive blog articles. Expert guides for freelancers and small businesses in India.",
    url: "/blog",
    siteName: "GST Calculator",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "GST Calculator Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Blog - Articles, Guides & Resources | GST Calculator India",
    description: "Learn about GST calculation, GST rates, billing tools, and more with our comprehensive blog articles. Expert guides for freelancers and small businesses in India.",
    images: ["/logo.svg"],
  },
};

import { blogPosts } from '@/lib/blog-data';

export default function Blog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "GST Calculator Blog",
    "description": "Expert guides and resources for GST calculation in India",
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "GST Calculator India"
      },
      "url": `https://onecalculator.online/blog/${post.slug}`
    }))
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <JsonLd data={jsonLd} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', item: 'https://onecalculator.online' },
        { name: 'Blog', item: 'https://onecalculator.online/blog' }
      ]} />

      {/* Hero Section */}
      <section className="relative py-20 bg-indigo-600 dark:bg-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            GST Knowledge Hub
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Master GST with our expert guides, latest updates, and comprehensive resources for businesses and freelancers.
          </p>
        </div>
      </section>

      <section className="flex-1 container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col h-full"
            >
              <article className="flex-1 flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:-translate-y-1">
                {post.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-white/90 dark:bg-gray-900/90 text-indigo-600 dark:text-indigo-400 backdrop-blur-sm shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 flex-1">
                    {post.description}
                  </p>

                  <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium group-hover:gap-2 transition-all">
                    Read Article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="p-8 md:p-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full -ml-16 -mb-16 blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Ready to simplify your GST calculations?
              </h2>
              <p className="text-indigo-100 text-lg mb-0">
                Join thousands of businesses using our tools for accurate and instant GST calculations.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/calculator"
                className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Open Calculator
              </Link>
              <Link
                href="/gst-rates"
                className="px-8 py-4 bg-indigo-700/50 text-white border border-indigo-400/30 rounded-xl font-bold hover:bg-indigo-700 transition-all backdrop-blur-sm"
              >
                Check Rates
              </Link>
            </div>
          </div>
        </div>
      </section >
    </main >
  );
}

