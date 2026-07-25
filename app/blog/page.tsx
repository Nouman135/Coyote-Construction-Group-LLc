import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog-store";
import { siteConfig } from "@/lib/site-config";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.brand}`,
  description: `Remodeling, roofing, and construction insights from ${siteConfig.brand} in the DFW metroplex.`,
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  return <BlogPageClient posts={posts} />;
}
