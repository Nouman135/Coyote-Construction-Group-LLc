import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog-store";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Trust Contractors Inc",
  description: "Construction and remodeling insights from Trust Contractors Inc in Greater Boston.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  return <BlogPageClient posts={posts} />;
}
