import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';

export const metadata = {
  title: 'GST Blog - Articles, Guides & Resources | GST Calculator India',
  description:
    'Learn about GST calculation, GST rates, billing tools, and more with our comprehensive blog articles. Expert guides for freelancers and small businesses in India.',
  keywords: [
    'GST blog',
    'GST articles',
    'GST guide',
    'GST for freelancers',
    'GST rates 2025',
    'GST calculation guide',
  ],
  alternates: {
    canonical: 'https://onecalculator.online/blog',
  },
  openGraph: {
    title: 'GST Blog - Articles, Guides & Resources | GST Calculator India',
    description:
      'Learn about GST calculation, GST rates, billing tools, and more with our comprehensive blog articles. Expert guides for freelancers and small businesses in India.',
    url: '/blog',
    siteName: 'OneCalculator',
    images: [
      {
        url: '/logo.svg',
        width: 512,
        height: 512,
        alt: 'GST Calculator Blog',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GST Blog - Articles, Guides & Resources | GST Calculator India',
    description:
      'Learn about GST calculation, GST rates, billing tools, and more with our comprehensive blog articles. Expert guides for freelancers and small businesses in India.',
    images: ['/logo.svg'],
  },
};

export default function Blog() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'GST Calculator Blog',
    description: 'Expert guides and resources for GST calculation in India',
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: {
        '@type': 'Organization',
        name: 'GST Calculator India',
      },
      url: `https://onecalculator.online/blog/${post.slug}`,
    })),
  };

  const [featured, ...restPosts] = blogPosts;
  const categories = [...new Set(blogPosts.map((post) => post.category))].slice(0, 8);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <JsonLd data={jsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: 'https://onecalculator.online' },
          { name: 'Blog', item: 'https://onecalculator.online/blog' },
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-200/70 bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,0.16),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(20,184,166,0.14),transparent_38%)] py-16 md:py-24 dark:border-slate-800/70">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up-slow">
            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-white/80 px-4 py-1 text-sm font-semibold text-cyan-700 backdrop-blur-sm dark:border-cyan-800 dark:bg-slate-900/70 dark:text-cyan-300">
              Insights for GST and finance
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl dark:text-slate-100">
              Blog That Helps You Calculate Better
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Actionable guides, practical examples, and updates to help freelancers, shops, and growing businesses handle GST with confidence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/85 dark:text-slate-300"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="group mb-12 block animate-fade-in-up-slow animate-delay-100">
            <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_28px_80px_-35px_rgba(15,23,42,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_36px_90px_-35px_rgba(14,116,144,0.45)] md:grid-cols-2 dark:border-slate-800 dark:bg-slate-900">
              <div className="relative min-h-[260px] md:min-h-[360px]">
                {featured.image && (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="flex flex-col justify-between p-7 md:p-10">
                <div>
                  <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300">
                    Featured - {featured.category}
                  </span>
                  <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 md:text-3xl dark:text-slate-100">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {featured.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>{featured.date}</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </article>
          </Link>
        )}

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {restPosts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex h-full flex-col animate-fade-in-up-slow" style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                {post.image && (
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-cyan-700 backdrop-blur-sm dark:bg-slate-900/90 dark:text-cyan-300">
                        {post.category}
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>{post.date}</span>
                    <span>|</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-700 dark:text-slate-100 dark:group-hover:text-cyan-400">
                    {post.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 flex-1 text-slate-600 dark:text-slate-300">
                    {post.description}
                  </p>
                  <div className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                    Read article
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-cyan-200/60 bg-gradient-to-r from-cyan-700 to-teal-600 p-8 text-white shadow-2xl md:p-12 dark:border-cyan-800/50 animate-fade-in-up-slow animate-delay-200">
          <div className="absolute -right-14 -top-16 h-52 w-52 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-14 -left-14 h-52 w-52 rounded-full bg-slate-900/20 blur-3xl" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-black md:text-3xl">Need instant GST calculations while reading?</h3>
              <p className="mt-3 text-cyan-50">
                Use our free calculator suite to apply these ideas immediately for invoices, pricing, and planning.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/calculators" className="rounded-xl bg-white px-6 py-3 font-bold text-cyan-700 transition hover:bg-cyan-50">
                Open Calculator
              </Link>
              <Link
                href="/gst-rates"
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
              >
                Check Rates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


