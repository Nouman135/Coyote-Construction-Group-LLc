import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, User, ArrowLeft } from "lucide-react";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog-store";
import { siteConfig } from "@/lib/site-config";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function imgSrc(img: string | { src: string }): string {
  return typeof img === "string" ? img : img.src;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${siteConfig.brand}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: imgSrc(post.heroImage) }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const renderContent = () => {
    const elements: React.ReactNode[] = [];
    post.content.forEach((paragraph, index) => {
      elements.push(
        <p key={`p-${index}`} className="text-foreground/80 leading-relaxed text-base md:text-lg mb-6">
          {paragraph}
        </p>
      );
      if (index >= 1 && index <= 3 && post.images[index - 1]) {
        elements.push(
          <div key={`img-${index}`} className="my-8 rounded-xl overflow-hidden">
            <img
              src={imgSrc(post.images[index - 1])}
              alt={`${post.title} - Image ${index}`}
              className="w-full h-64 md:h-80 object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        );
      }
    });
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={imgSrc(post.heroImage)}
          alt={post.imageAltText || post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 tracking-wide">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-primary-foreground/70 text-sm">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> {post.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-secondary font-semibold text-sm mb-8 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          {post.rawHtml ? (
            <article
              className="blog-content text-foreground/80 leading-relaxed text-base md:text-lg [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-6 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-secondary [&_a]:underline [&_img]:my-8 [&_img]:rounded-xl [&_img]:w-full"
              dangerouslySetInnerHTML={{ __html: post.rawHtml }}
            />
          ) : (
            <article>{renderContent()}</article>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
