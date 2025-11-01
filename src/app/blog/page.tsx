import Link from 'next/link';

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
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "gst-calculation-for-freelancers-india",
    title: "GST Calculation for Freelancers in India: Complete Guide 2025",
    description: "Everything freelancers need to know about GST registration, calculation, and filing. Learn how to calculate GST on your freelance income and stay compliant.",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Freelancers",
  },
  {
    slug: "gst-rate-chart-2025-india",
    title: "GST Rate Chart India 2025: Complete List with Examples",
    description: "Comprehensive GST rates chart for 2025. Find GST rates for all goods and services including HSN codes, examples, and recent updates.",
    date: "January 10, 2025",
    readTime: "6 min read",
    category: "GST Rates",
  },
  {
    slug: "gst-calculator-excel-download",
    title: "GST Calculator Excel Download: Free Template & Guide",
    description: "Download free GST calculation Excel templates. Learn how to create your own GST calculator in Excel with formulas and examples.",
    date: "January 8, 2025",
    readTime: "5 min read",
    category: "Tools & Resources",
  },
  {
    slug: "difference-between-gst-and-vat",
    title: "Difference Between GST and VAT: Key Changes Explained",
    description: "Understand the differences between GST and VAT systems in India. Learn how GST replaced VAT and what it means for businesses.",
    date: "January 5, 2025",
    readTime: "7 min read",
    category: "GST Basics",
  },
];

export default function Blog() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
            GST Blog & Resources
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Expert guides, tips, and resources to help you understand GST calculation, compliance, and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="h-full p-6 rounded-2xl border-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover-lift transition-all hover:border-indigo-400 dark:hover:border-indigo-600">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-200 dark:border-indigo-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            📚 Stay Updated
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            New articles are added regularly. Bookmark this page to stay informed about GST updates, 
            calculation tips, and best practices for businesses and freelancers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Use GST Calculator
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/gst-rates"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
            >
              View GST Rates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

