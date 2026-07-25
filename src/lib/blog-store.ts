import fs from "fs";
import path from "path";
import { blogPosts as staticBlogPosts } from "@/lib/blog-data";
import type { BlogPost, StoredBlogPost } from "@/lib/blog-types";

const BLOG_POSTS_FILE = path.join(process.cwd(), "data/blog-posts.json");

function formatDisplayDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) {
    return isoDate;
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function readAutomatedPosts(): StoredBlogPost[] {
  try {
    if (!fs.existsSync(BLOG_POSTS_FILE)) {
      return [];
    }

    const raw = fs.readFileSync(BLOG_POSTS_FILE, "utf-8");
    const parsed = JSON.parse(raw) as StoredBlogPost[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function toBlogPost(stored: StoredBlogPost): BlogPost {
  return {
    slug: stored.slug,
    title: stored.title,
    excerpt: stored.description,
    date: formatDisplayDate(stored.createdAt),
    author: stored.author || "Coyote Construction Group",
    cardImage: stored.imageUrl,
    heroImage: stored.imageUrl,
    images: [],
    content: [],
    rawHtml: stored.rawHTML,
    imageAltText: stored.imageAltText,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  const automated = readAutomatedPosts().map(toBlogPost);
  const automatedSlugs = new Set(automated.map((post) => post.slug));
  const staticPosts = staticBlogPosts.filter(
    (post) => !automatedSlugs.has(post.slug)
  );

  return [...automated, ...staticPosts];
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.slug === slug);
}
