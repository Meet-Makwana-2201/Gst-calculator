import type { Metadata } from "next";
import type { ComponentType } from "react";

export interface BlogPostSummary {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export interface BlogPostModule {
  default: ComponentType;
  metadata?: Metadata;
}

export interface BlogRegistryEntry extends BlogPostSummary {
  load: () => Promise<BlogPostModule>;
}
