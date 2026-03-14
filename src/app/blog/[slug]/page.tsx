import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog/registry";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | LedgerKit India",
      description: "The requested article could not be found.",
    };
  }

  const postModule = await post.load();

  return (
    postModule.metadata ?? {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: `https://onecalculator.online/blog/${post.slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        url: `/blog/${post.slug}`,
        images: post.image
          ? [
              {
                url: post.image,
                alt: post.title,
              },
            ]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: post.image ? [post.image] : undefined,
      },
    }
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postModule = await post.load();
  const PostContent = postModule.default;

  return <PostContent />;
}
