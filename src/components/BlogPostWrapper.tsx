'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Share2, Clock, Calendar, Tag, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

interface TableOfContentsItem {
    id: string;
    title: string;
    level: 2 | 3;
}

import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

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
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
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

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const text = `Check out this article: ${title}`;

        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
                break;
            case 'copy':
                navigator.clipboard.writeText(url);
                alert('Link copied to clipboard!');
                break;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <BreadcrumbJsonLd items={[
                { name: 'Home', item: 'https://onecalculator.online' },
                { name: 'Blog', item: 'https://onecalculator.online/blog' },
                { name: title, item: `https://onecalculator.online/blog/${slug}` }
            ]} />
            {/* Hero Section */}
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 py-12 text-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm md:text-base text-gray-200">
                            {category && (
                                <span className="px-3 py-1 rounded-full bg-indigo-600/80 backdrop-blur-sm text-white font-medium flex items-center gap-2">
                                    <Tag className="w-4 h-4" />
                                    {category}
                                </span>
                            )}
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {date}
                            </span>
                            {readTime && (
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {readTime}
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
                    {/* Main Content */}
                    <article className="flex-1 max-w-4xl">
                        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:text-indigo-500 prose-img:rounded-xl prose-img:shadow-lg">
                            {children}
                        </div>

                        {/* Share Section */}
                        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                <Share2 className="w-5 h-5" />
                                Share this article
                            </h3>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => handleShare('facebook')}
                                    className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                    aria-label="Share on Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleShare('twitter')}
                                    className="p-3 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                                    aria-label="Share on Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleShare('linkedin')}
                                    className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                                    aria-label="Share on LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleShare('copy')}
                                    className="p-3 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                                    aria-label="Copy Link"
                                >
                                    <LinkIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar / Table of Contents */}
                    <aside className="lg:w-80 hidden lg:block space-y-8">
                        {toc && toc.length > 0 && (
                            <div className="sticky top-24 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                                    Table of Contents
                                </h4>
                                <nav className="space-y-1">
                                    {toc.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`block py-2 px-3 text-sm rounded-lg transition-colors ${activeId === item.id
                                                ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 font-medium'
                                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
                                                } ${item.level === 3 ? 'ml-4' : ''}`}
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        )}

                        {/* CTA Widget */}
                        <div className="p-6 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl text-white shadow-lg">
                            <h4 className="text-xl font-bold mb-2">Need to Calculate GST?</h4>
                            <p className="text-indigo-100 mb-6 text-sm">
                                Use our free, accurate GST calculator for instant results.
                            </p>
                            <Link
                                href="/calculators"
                                className="block w-full py-3 px-4 bg-white text-indigo-600 text-center font-bold rounded-xl hover:bg-indigo-50 transition-colors shadow-md"
                            >
                                Open Calculator
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
