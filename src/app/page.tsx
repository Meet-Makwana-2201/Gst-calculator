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
  { value: "12+", label: "Core calculators" },
  { value: "0", label: "Signup steps" },
  { value: "<10s", label: "Typical task time" },
];

const experienceCards = [
  {
    title: "Clarity first",
    description: "Sharper hierarchy, stronger contrast, and cleaner result cards reduce scan time.",
  },
  {
    title: "Mobile ready",
    description: "The redesigned layout is intentionally built for phones before stretching to desktop.",
  },
  {
    title: "Task-focused",
    description: "Popular tools, related actions, and content blocks are grouped by what users need next.",
  },
];

const featuredCategories = [
  {
    eyebrow: "Tax",
    title: "GST workflows for invoices, pricing, and reverse calculations",
    copy: "Use GST tools built for sellers, freelancers, and finance teams that need fast answers without spreadsheet friction.",
    href: "/calculators/gst",
  },
  {
    eyebrow: "Lending",
    title: "EMI and loan views that show the real cost quickly",
    copy: "Compare repayment impact, interest burden, and monthly affordability in a cleaner flow.",
    href: "/calculators/emi",
  },
  {
    eyebrow: "Business math",
    title: "Margins, discounting, and percentage analysis in one place",
    copy: "Useful for daily pricing, sales checks, marketplace decisions, and finance operations.",
    href: "/calculators",
  },
];

export const metadata = {
  title: "LedgerKit India | GST, EMI, Tax and Finance Calculators",
  description:
    "Modern calculator workspace for India. GST, EMI, interest, pricing, and business finance tools redesigned for speed and clarity.",
  keywords: [
    "GST calculator India",
    "modern calculator site",
    "EMI calculator",
    "business finance tools",
    "pricing calculator India",
  ],
  alternates: {
    canonical: "https://onecalculator.online/",
  },
  openGraph: {
    title: "LedgerKit India | GST, EMI, Tax and Finance Calculators",
    description:
      "A cleaner finance workspace for India with GST, EMI, tax, pricing, and interest tools.",
    url: "/",
    siteName: "LedgerKit India",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "LedgerKit India platform preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LedgerKit India | GST, EMI, Tax and Finance Calculators",
    description:
      "A cleaner finance workspace for India with GST, EMI, tax, pricing, and interest tools.",
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
        name: "LedgerKit India",
        url: "https://onecalculator.online",
        logo: "https://onecalculator.online/logo.svg",
      },
      {
        "@type": "WebSite",
        "@id": "https://onecalculator.online/#website",
        url: "https://onecalculator.online/",
        name: "LedgerKit India",
      },
      {
        "@type": "WebPage",
        "@id": "https://onecalculator.online/#webpage",
        url: "https://onecalculator.online/",
        name: "LedgerKit India | GST, EMI, Tax and Finance Calculators",
        description:
          "Modern calculator workspace for India. GST, EMI, interest, pricing, and business finance tools redesigned for speed and clarity.",
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
              <span className="inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-slate-600 shadow-[0_20px_38px_-28px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
                Complete redesign 2026
              </span>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black leading-[0.95] text-slate-950 md:text-7xl dark:text-white">
                Finance tools that feel like a product, not a template.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                LedgerKit India turns GST, EMI, pricing, and business calculations into a faster,
                cleaner workflow with stronger visual hierarchy and less noise.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/calculators">
                  <Button size="lg">Browse calculators</Button>
                </Link>
                <Link href="/calculators/gst">
                  <Button size="lg" variant="outline">
                    Launch GST calculator
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
                Core experiences
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
                Rebuilt around what users come here to finish
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              The new structure prioritizes task completion first, then deeper reading. Users can
              jump into a tool, browse related calculators, or continue into guides without losing
              context.
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-panel overflow-hidden rounded-[2rem] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
              Brand system
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
              New identity, new rhythm, new interface language
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              The redesign introduces a stronger type pairing, rounded modular surfaces, cleaner
              contrast, a new brand mark, and calmer spacing that makes dense calculator pages more
              usable.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950">
                <p className="text-xs font-bold uppercase tracking-[0.24em] opacity-70">Typography</p>
                <p className="mt-3 text-2xl font-black">Space Grotesk + DM Sans</p>
              </div>
              <div className="brand-gradient rounded-[1.75rem] p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">Palette</p>
                <p className="mt-3 text-2xl font-black">Teal, amber, ink, warm neutrals</p>
              </div>
            </div>
          </div>

          <div className="surface-panel rounded-[2rem] p-4 md:p-6">
            <div className="overflow-hidden rounded-[1.7rem] bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/55">
                    Editorial feed
                  </p>
                  <h3 className="mt-2 text-3xl font-black tracking-tight">Fresh guides, cleaner cards</h3>
                </div>
                <div className="hidden rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold md:block">
                  Learn faster
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-[1.5rem] bg-white/8 p-3 transition hover:bg-white/12"
                  >
                    {post.image ? (
                      <div className="relative h-40 overflow-hidden rounded-[1.25rem]">
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
                      <h4 className="mt-3 text-xl font-black tracking-tight text-white">
                        {post.title}
                      </h4>
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
