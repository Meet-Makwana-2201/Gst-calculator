import { blogPosts } from "@/lib/blog-data";

import type { BlogPostModule, BlogRegistryEntry } from "./types";

const blogPostLoaders: Record<string, () => Promise<BlogPostModule>> = {
  "best-free-online-financial-calculators-2026": () =>
    import("@/content/blog/posts/best-free-online-financial-calculators-2026"),
  "composition-scheme-vs-regular-gst": () =>
    import("@/content/blog/posts/composition-scheme-vs-regular-gst"),
  "difference-between-gst-and-vat": () =>
    import("@/content/blog/posts/difference-between-gst-and-vat"),
  "gst-calculation-for-freelancers-india": () =>
    import("@/content/blog/posts/gst-calculation-for-freelancers-india"),
  "gst-calculator-excel-download": () =>
    import("@/content/blog/posts/gst-calculator-excel-download"),
  "gst-invoice-format-for-freelancers": () =>
    import("@/content/blog/posts/gst-invoice-format-for-freelancers"),
  "gst-on-electronics-laptops-india-2026": () =>
    import("@/content/blog/posts/gst-on-electronics-laptops-india-2026"),
  "gst-on-electronics-mobile-laptops-2025": () =>
    import("@/content/blog/posts/gst-on-electronics-mobile-laptops-2025"),
  "gst-rate-chart-2025-india": () =>
    import("@/content/blog/posts/gst-rate-chart-2025-india"),
  "gst-state-codes-list-2025": () =>
    import("@/content/blog/posts/gst-state-codes-list-2025"),
  "how-compound-interest-works": () =>
    import("@/content/blog/posts/how-compound-interest-works"),
  "how-percentage-works-shopping-salary": () =>
    import("@/content/blog/posts/how-percentage-works-shopping-salary"),
  "how-to-calculate-gst-backwards": () =>
    import("@/content/blog/posts/how-to-calculate-gst-backwards"),
  "how-to-minus-gst-from-price": () =>
    import("@/content/blog/posts/how-to-minus-gst-from-price"),
  "mastering-gst-calculator": () =>
    import("@/content/blog/posts/mastering-gst-calculator"),
  "remove-gst-calculator": () =>
    import("@/content/blog/posts/remove-gst-calculator"),
  "simple-vs-compound-interest": () =>
    import("@/content/blog/posts/simple-vs-compound-interest"),
  "state-code-38-gst-ladakh": () =>
    import("@/content/blog/posts/state-code-38-gst-ladakh"),
  "what-is-emi-calculator": () =>
    import("@/content/blog/posts/what-is-emi-calculator"),
};

export const blogPostRegistry: BlogRegistryEntry[] = blogPosts
  .map((post) => ({
    ...post,
    load: blogPostLoaders[post.slug],
  }))
  .filter((post): post is BlogRegistryEntry => typeof post.load === "function");

export function getAllBlogPosts() {
  return blogPostRegistry;
}

export function getBlogPostBySlug(slug: string) {
  return blogPostRegistry.find((post) => post.slug === slug);
}
