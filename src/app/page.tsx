import Image from "next/image";
import Link from "next/link";

import HomeFAQ from "@/components/HomeFAQ";
import JsonLd from "@/components/JsonLd";
import QuickCalculator from "@/components/QuickCalculator";
import RelatedTools from "@/components/landing/RelatedTools";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts } from "@/lib/blog/registry";
import { homeFaqs } from "@/lib/home-faq-data";

const stats = [
  { value: "4 Slabs", label: "GST rates covered (5%, 12%, 18%, 28%)" },
  { value: "100%", label: "Free to use with no signup required" },
  { value: "No login", label: "Open any tool instantly" },
];

const experienceCards = [
  {
    title: "Built for India",
    description:
      "GST, EMI, interest, pricing, and business math tools are organized around everyday Indian finance tasks.",
  },
  {
    title: "Simple to verify",
    description:
      "Use clear inputs, instant outputs, and practical guides that explain the method behind each calculation.",
  },
  {
    title: "Private by default",
    description:
      "Calculations run in your browser, so you can check amounts quickly without creating an account.",
  },
];

const featuredCategories = [
  {
    eyebrow: "Tax",
    title: "GST calculators for invoices, inclusive pricing, and reverse tax math",
    copy: "Calculate GST amounts, split tax components, and work backwards from GST-inclusive prices in seconds.",
    href: "/calculators/gst",
  },
  {
    eyebrow: "Lending",
    title: "EMI, loan, and interest tools for faster borrowing decisions",
    copy: "Check monthly repayments, total interest, and loan affordability before you commit to a lender.",
    href: "/calculators/emi",
  },
  {
    eyebrow: "Business math",
    title: "Margin, discount, and percentage calculators for daily business use",
    copy: "Handle pricing checks, sales math, profit planning, and percentage changes without manual formulas.",
    href: "/calculators",
  },
];

export const metadata = {
  title: "OneCalculator | Free GST, EMI & Financial Calculators",
  description:
    "Free online GST, EMI, loan, interest, and business calculators for India. No login required, instant results, and practical guides for smarter finance decisions.",
  keywords: [
    "gst calculator india",
    "online calculator india free",
    "financial calculators india",
    "emi calculator",
    "loan calculator india",
    "business calculator india",
  ],
  alternates: {
    canonical: "https://onecalculator.online",
  },
  openGraph: {
    title: "OneCalculator | Free GST, EMI & Financial Calculators",
    description:
      "Free online GST, EMI, loan, interest, and business calculators for India with instant results and helpful guides.",
    url: "/",
    siteName: "OneCalculator",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "OneCalculator platform preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneCalculator | Free GST, EMI & Financial Calculators",
    description:
      "Free online GST, EMI, loan, interest, and business calculators for India with instant results and practical guides.",
    images: ["/logo.svg"],
  },
};

export default function Home() {
  const blogPosts = getAllBlogPosts();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://onecalculator.online/#organization",
        name: "OneCalculator",
        url: "https://onecalculator.online",
        logo: "https://onecalculator.online/logo.svg",
      },
      {
        "@type": "WebSite",
        "@id": "https://onecalculator.online/#website",
        url: "https://onecalculator.online/",
        name: "OneCalculator",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://onecalculator.online/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://onecalculator.online/#webpage",
        url: "https://onecalculator.online/",
        name: "OneCalculator | Free GST, EMI & Financial Calculators",
        description:
          "Free online financial calculators for India covering GST, EMI, interest, pricing, and business math with instant results and practical guides.",
        isPartOf: { "@id": "https://onecalculator.online/#website" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://onecalculator.online/#faq",
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="relative">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-14">
        <div className="hero-grid absolute inset-x-4 top-6 z-0 mx-auto h-[40rem] max-w-7xl rounded-[2.5rem] [mask-image:radial-gradient(circle_at_center,black,transparent_88%)] md:inset-x-6" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="animate-fade-in-up">
              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black leading-[0.95] text-slate-950 md:text-7xl dark:text-white">
                All-in-One Financial Calculator Suite
              </h1>
              <p className="mb-2 mt-3 max-w-3xl text-base font-normal text-slate-500 dark:text-slate-400 md:text-lg">
                Free online calculators for GST, EMI, loans, interest, discounts, profit, and
                everyday business math in India.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                OneCalculator helps freelancers, business owners, students, and finance teams get
                instant answers without spreadsheets, signups, or extra steps. Use the tools to
                calculate tax, compare borrowing costs, check margins, and make faster finance
                decisions.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                Every calculator is built to be easy to verify with clear inputs, instant results,
                and related guides when you want to understand the formula behind the number.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/calculators">
                  <Button size="lg">Open calculators</Button>
                </Link>
                <Link href="/calculators/gst">
                  <Button size="lg" variant="outline">
                    Use GST calculator
                  </Button>
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="surface-panel animate-fade-in-up rounded-[1.75rem] px-5 py-4"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <p className="text-3xl font-black tracking-tight text-slate-950 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up-slow lg:pl-8">
              <QuickCalculator />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {experienceCards.map((card, index) => (
            <article
              key={card.title}
              className="surface-panel hover-lift animate-fade-in-up rounded-[1.75rem] p-6"
              style={{ animationDelay: `${120 + index * 70}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl brand-gradient text-white">
                <span className="text-lg font-black">{index + 1}</span>
              </div>
              <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
                Core calculators
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
                Start with the calculators people use most
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              Open a focused tool for GST, borrowing, or pricing, then continue into related
              calculators and guides when you need more detail.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredCategories.map((item, index) => (
              <article
                key={item.title}
                className="surface-panel hover-lift rounded-[2rem] p-7"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  {item.eyebrow}
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.copy}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-700 transition hover:text-amber-600 dark:text-teal-300 dark:hover:text-amber-300"
                >
                  Open category
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="surface-panel overflow-hidden rounded-[2rem] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
              Why OneCalculator
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
              Clear tools, practical guides, and no unnecessary friction
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              The homepage now points directly to the tasks users care about most: calculating GST,
              checking EMI, comparing interest, and solving day-to-day business math. It is built
              for fast access on desktop and mobile, with supporting explanations instead of empty
              marketing copy.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950">
                <p className="text-xs font-bold uppercase tracking-[0.24em] opacity-70">Use case</p>
                <p className="mt-3 text-2xl font-black">GST, loans, pricing, and finance</p>
              </div>
              <div className="brand-gradient rounded-[1.75rem] p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">Access</p>
                <p className="mt-3 text-2xl font-black">Free, instant, and no login</p>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              Looking for a starting point? Visit the{" "}
              <Link
                href="/calculators"
                className="font-semibold text-teal-700 transition hover:text-amber-600 dark:text-teal-300 dark:hover:text-amber-300"
              >
                full calculator library
              </Link>
              , jump straight to the{" "}
              <Link
                href="/calculators/gst"
                className="font-semibold text-teal-700 transition hover:text-amber-600 dark:text-teal-300 dark:hover:text-amber-300"
              >
                GST calculator
              </Link>
              , or browse the{" "}
              <Link
                href="/blog"
                className="font-semibold text-teal-700 transition hover:text-amber-600 dark:text-teal-300 dark:hover:text-amber-300"
              >
                finance guides
              </Link>
              {" "}for examples and explanations.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 md:px-6 md:pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="surface-panel rounded-[2rem] p-4 md:p-6">
            <div className="overflow-hidden rounded-[1.7rem] bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/55">
                    Popular guides
                  </p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                    Learn the logic behind the calculators
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/15 md:block"
                >
                  Read next
                </Link>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-[1.5rem] bg-white/8 p-3 transition hover:bg-white/12"
                  >
                    {post.image ? (
                      <div className="relative h-65 overflow-hidden rounded-[1.25rem]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : null}
                    <div className="p-2">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
                        {post.category}
                      </p>
                      <h3 className="mt-3 text-xl font-black tracking-tight text-white">
                        {post.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/70">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <HomeFAQ />
        </div>
      </section>

      <RelatedTools />

      <section className="px-4 pb-8 pt-12 md:px-6 md:pb-10 md:pt-16">
        <div className="brand-gradient mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] p-8 text-white shadow-[0_30px_80px_-34px_rgba(8,145,178,0.75)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/70">
                Ready to use it
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
                Move from rough estimates to cleaner decisions in minutes.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
                Start with GST, explore the full calculator library, or jump into guides that
                explain the logic behind the numbers.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/calculators/gst">
                <Button size="lg" variant="secondary" className="w-full">
                  Open GST calculator
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="w-full border-white/25 bg-white/12 text-white hover:bg-white/20">
                  Read the guides
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

