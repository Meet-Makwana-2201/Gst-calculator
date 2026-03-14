import Image from "next/image";
import Link from "next/link";

import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts } from "@/lib/blog/registry";

export const metadata = {
  title: "Blog | GST, Tax and Finance Guides for India",
  description:
    "Practical GST, finance, pricing, and calculator guides for freelancers, operators, and small businesses in India.",
  keywords: [
    "GST blog India",
    "GST guides",
    "finance articles India",
    "pricing guides",
    "tax help for freelancers",
  ],
  alternates: {
    canonical: "https://onecalculator.online/blog",
  },
  openGraph: {
    title: "LedgerKit India Blog | GST, Tax and Finance Guides",
    description:
      "Practical GST, finance, pricing, and calculator guides for freelancers, operators, and small businesses in India.",
    url: "/blog",
    siteName: "LedgerKit India",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "LedgerKit India blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LedgerKit India Blog | GST, Tax and Finance Guides",
    description:
      "Practical GST, finance, pricing, and calculator guides for freelancers, operators, and small businesses in India.",
    images: ["/logo.svg"],
  },
};

const feedHighlights = [
  "Cleaner article cards with clearer scan paths",
  "Reading journeys connected to calculators and rate tools",
  "Fast access to GST, pricing, lending, and business topics",
];

export default function Blog() {
  const blogPosts = getAllBlogPosts();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "LedgerKit India Blog",
    description: "Practical guides for GST, pricing, and finance workflows in India",
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: "LedgerKit India",
      },
      url: `https://onecalculator.online/blog/${post.slug}`,
    })),
  };

  const [featured, secondary, ...gridPosts] = blogPosts;
  const categories = [...new Set(blogPosts.map((post) => post.category))].slice(0, 8);

  return (
    <main className="px-4 pb-16 pt-8 md:px-6 md:pb-20">
      <JsonLd data={jsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://onecalculator.online" },
          { name: "Blog", item: "https://onecalculator.online/blog" },
        ]}
      />

      <section className="mx-auto max-w-7xl">
        <div className="surface-panel hero-grid relative overflow-hidden rounded-[2.4rem] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute inset-x-0 top-0 h-2 brand-gradient" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="animate-fade-in-up">
              <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white dark:bg-white dark:text-slate-950">
                Editorial redesign
              </span>
              <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl dark:text-white">
                Guides that read faster and convert into action.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                The blog now matches the product redesign: sharper hierarchy, stronger cards, and
                cleaner paths from reading to calculation.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/calculators">
                  <Button size="lg">Open calculators</Button>
                </Link>
                <Link href="/gst-rates">
                  <Button size="lg" variant="outline">
                    Browse GST rates
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {feedHighlights.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.75rem] border border-slate-200 bg-white/90 p-5 shadow-[0_18px_36px_-26px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900/90"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <p className="text-sm font-semibold leading-7 text-slate-700 dark:text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {featured ? (
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article className="surface-panel hover-lift overflow-hidden rounded-[2.2rem] p-4 md:p-5">
                <div className="relative min-h-[320px] overflow-hidden rounded-[1.8rem]">
                  {featured.image ? (
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      priority
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/80">
                      <span className="rounded-full bg-white/12 px-3 py-2 backdrop-blur-md">
                        Featured
                      </span>
                      <span>{featured.category}</span>
                      <span>{featured.readTime}</span>
                    </div>
                    <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white md:text-4xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
                      {featured.description}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ) : null}

          {secondary ? (
            <Link href={`/blog/${secondary.slug}`} className="group block">
              <article className="surface-panel hover-lift flex h-full flex-col rounded-[2.2rem] p-5">
                <div className="relative min-h-[240px] overflow-hidden rounded-[1.6rem]">
                  {secondary.image ? (
                    <Image
                      src={secondary.image}
                      alt={secondary.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    <span>{secondary.category}</span>
                    <span>{secondary.date}</span>
                    <span>{secondary.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
                    {secondary.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {secondary.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-700 dark:text-teal-300">
                    Read article
                    <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ) : null}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
              Browse topics
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white">
              Articles organized for fast scanning
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-600 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-300"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gridPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
              style={{ animationDelay: `${Math.min(index, 6) * 70}ms` }}
            >
              <article className="surface-panel hover-lift flex h-full flex-col rounded-[1.9rem] p-4">
                {post.image ? (
                  <div className="relative h-56 overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950 transition group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
                    {post.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {post.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">{post.readTime}</span>
                    <span className="font-bold text-teal-700 dark:text-teal-300">Read more</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl">
        <div className="brand-gradient overflow-hidden rounded-[2.3rem] p-8 text-white shadow-[0_26px_70px_-30px_rgba(8,145,178,0.72)] md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/70">
                Read, then act
              </p>
              <h3 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Apply what you read without leaving the workflow.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">
                Use the calculators right after reading a guide, or jump into GST rates when you
                need the slab reference next.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/calculators">
                <Button size="lg" variant="secondary" className="w-full">
                  Open calculators
                </Button>
              </Link>
              <Link href="/gst-rates">
                <Button size="lg" variant="outline" className="w-full border-white/30 bg-white/12 text-white hover:bg-white/20">
                  View GST rates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
