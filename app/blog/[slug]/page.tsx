import { notFound } from 'next/navigation';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blog-data';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main className="section-padding">
        <article className="container-max max-w-4xl">
          <section className="mb-8">
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4 tracking-wide font-bold">
              {post.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
              <span>Published: {post.date}</span>
              <span>By {post.author}</span>
            </div>
            <div className="prose prose-lg max-w-none text-foreground">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
