"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Check,
  Clock,
  Facebook,
  Link as LinkIcon,
  Linkedin,
  Share2,
  Tag,
  Twitter,
} from "lucide-react";

import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

interface TableOfContentsItem {
  id: string;
  title: string;
  level: 2 | 3;
}

interface BlogPostWrapperProps {
  title: string;
  description: string;
  date: string;
  readTime?: string;
  category?: string;
  image: string;
  toc?: TableOfContentsItem[];
  slug: string;
  children: React.ReactNode;
}

const shareButtons = [
  { platform: "facebook", label: "Facebook", icon: Facebook },
  { platform: "twitter", label: "X", icon: Twitter },
  { platform: "linkedin", label: "LinkedIn", icon: Linkedin },
  { platform: "copy", label: "Copy link", icon: LinkIcon },
] as const;

export default function BlogPostWrapper({
  title,
  description,
  date,
  readTime,
  category,
  image,
  toc,
  slug,
  children,
}: BlogPostWrapperProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeading = entries.find((entry) => entry.isIntersecting);
        if (visibleHeading?.target.id) {
          setActiveId(visibleHeading.target.id);
        }
      },
      { rootMargin: "0% 0% -75% 0%" }
    );

    toc?.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [toc]);

  const handleShare = async (
    platform: "facebook" | "twitter" | "linkedin" | "copy"
  ) => {
    const url = window.location.href;
    const text = `Check out this article: ${title}`;

    if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank"
      );
      return;
    }

    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        "_blank"
      );
      return;
    }

    if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        "_blank"
      );
      return;
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="px-4 pb-16 pt-8 md:px-6 md:pb-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "https://onecalculator.online" },
          { name: "Blog", item: "https://onecalculator.online/blog" },
          { name: title, item: `https://onecalculator.online/blog/${slug}` },
        ]}
      />

      <section className="mx-auto max-w-7xl">
        <div className="surface-panel overflow-hidden rounded-[2.4rem] p-4 md:p-5">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950">
            <div className="relative min-h-[360px] md:min-h-[520px]">
              <Image src={image} alt={title} fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.28),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.20),transparent_22%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                  {category ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-2 backdrop-blur-md">
                      <Tag className="h-4 w-4" />
                      {category}
                    </span>
                  ) : null}
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-2 backdrop-blur-md">
                    <Calendar className="h-4 w-4" />
                    {date}
                  </span>
                  {readTime ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-2 backdrop-blur-md">
                      <Clock className="h-4 w-4" />
                      {readTime}
                    </span>
                  ) : null}
                </div>
                <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/82 md:text-lg">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-8">
            <div className="surface-panel rounded-[2rem] p-6 md:p-10">
              <div className="prose prose-lg max-w-none prose-headings:scroll-mt-28 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-700 prose-p:leading-8 prose-a:text-teal-700 prose-a:no-underline hover:prose-a:text-amber-600 prose-strong:text-slate-950 prose-img:rounded-[1.4rem] prose-img:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)] dark:prose-invert dark:prose-p:text-slate-300 dark:prose-a:text-teal-300 dark:hover:prose-a:text-amber-300 dark:prose-strong:text-white">
                {children}
              </div>
            </div>

            <div className="surface-panel rounded-[2rem] p-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="flex items-center gap-2 text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                    <Share2 className="h-5 w-5" />
                    Share this article
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Send it to your team, save it for later, or continue the workflow in a calculator.
                  </p>
                </div>
                <Link href="/calculators" className="text-sm font-bold text-teal-700 dark:text-teal-300">
                  Open calculators
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {shareButtons.map(({ platform, label, icon: Icon }) => (
                  <button
                    key={platform}
                    onClick={() => handleShare(platform)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                      platform === "copy"
                        ? "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                        : "bg-slate-950 text-white hover:bg-teal-700 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
                    }`}
                    aria-label={label}
                  >
                    {platform === "copy" && copied ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                    {platform === "copy" && copied ? "Copied" : label}
                  </button>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-5">
            {toc && toc.length > 0 ? (
              <div className="surface-panel sticky top-28 rounded-[2rem] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  On this page
                </p>
                <nav className="mt-4 space-y-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block rounded-2xl px-4 py-3 text-sm transition ${
                        activeId === item.id
                          ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                          : "text-slate-600 hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                      } ${item.level === 3 ? "ml-4" : ""}`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            ) : null}

            <div className="brand-gradient overflow-hidden rounded-[2rem] p-6 text-white shadow-[0_24px_60px_-28px_rgba(8,145,178,0.72)]">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/70">
                Next step
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-tight">
                Use the calculator while the context is fresh.
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/85">
                Move from article to action with instant GST, reverse GST, EMI, and pricing tools.
              </p>
              <Link
                href="/calculators"
                className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
              >
                Open calculator library
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
