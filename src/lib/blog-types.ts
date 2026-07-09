export interface StoredBlogPost {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  rawHTML: string;
  imageAltText: string;
  author?: string;
  createdAt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  cardImage: string | { src: string };
  heroImage: string | { src: string };
  images: (string | { src: string })[];
  content: string[];
  rawHtml?: string;
  imageAltText?: string;
}
