'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  Facebook,
  Link as LinkIcon,
  Linkedin,
  Share2,
  Tag,
  Twitter,
} from 'lucide-react';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

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
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    if (toc) {
      toc.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.observe(element);
      });
    }

    return () => observer.disconnect();
  }, [toc]);

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin' | 'copy') => {
    const url = window.location.href;
    const text = `Check out this article: ${title}`;

    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
      return;
    }

    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
      return;
    }

    if (platform === 'linkedin') {
      window.open(
        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        '_blank'
      );
      return;
    }

    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: 'https://onecalculator.online' },
          { name: 'Blog', item: 'https://onecalculator.online/blog' },
          { name: title, item: `https://onecalculator.online/blog/${slug}` },
        ]}
      />

      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="relative h-[360px] md:h-[500px]">
          <Image src={image} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/55 to-slate-900/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.2),transparent_35%)]" />
          <div className="container relative mx-auto flex h-full items-end px-4 pb-10 md:pb-14">
            <div className="max-w-4xl animate-fade-in-up-slow">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium text-white/90 md:text-sm">
                {category && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/20 px-3 py-1 backdrop-blur-sm">
                    <Tag className="h-4 w-4" />
                    {category}
                  </span>
                )}
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                  <Calendar className="h-4 w-4" />
                  {date}
                </span>
                {readTime && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                    <Clock className="h-4 w-4" />
                    {readTime}
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-black leading-tight text-white md:text-5xl">{title}</h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 md:text-xl">{description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <article className="flex-1 lg:max-w-4xl">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10 dark:border-slate-800 dark:bg-slate-900 animate-fade-in-up-slow animate-delay-100">
              <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-a:text-cyan-700 hover:prose-a:text-cyan-600 prose-img:rounded-xl prose-img:shadow-lg dark:prose-invert dark:prose-a:text-cyan-400">
                {children}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 animate-fade-in-up-slow animate-delay-200">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-slate-100">
                <Share2 className="h-5 w-5" />
                Share this article
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleShare('facebook')}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600"
                  aria-label="Share on X"
                >
                  <Twitter className="h-4 w-4" />
                  X
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  aria-label="Copy link"
                >
                  <LinkIcon className="h-4 w-4" />
                  Copy Link
                </button>
              </div>
            </div>
          </article>

          <aside className="hidden w-full lg:block lg:max-w-[300px]">
            <div className="sticky top-24 space-y-6">
              {toc && toc.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 animate-fade-in-up-slow">
                  <h4 className="mb-4 text-lg font-bold text-slate-900 dark:text-slate-100">On this page</h4>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block rounded-lg px-3 py-2 text-sm transition ${
                          activeId === item.id
                            ? 'bg-cyan-50 font-semibold text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-300'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                        } ${item.level === 3 ? 'ml-4' : ''}`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              <div className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-700 to-teal-600 p-6 text-white shadow-lg dark:border-cyan-800/50 animate-fade-in-up-slow animate-delay-100">
                <h4 className="text-xl font-black">Try the GST Calculator</h4>
                <p className="mt-2 text-sm text-cyan-50">
                  Apply what you read with instant GST, IGST, CGST and SGST calculations.
                </p>
                <Link
                  href="/calculators"
                  className="mt-5 block rounded-xl bg-white px-4 py-3 text-center font-bold text-cyan-700 transition hover:bg-cyan-50"
                >
                  Open Calculator
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

