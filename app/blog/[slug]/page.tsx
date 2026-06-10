import { notFound } from 'next/navigation';
import { sql } from '@/lib/db';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type BlogPostData = {
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  date: string;
  cardImage?: string;
};

async function getBlogPost(slug: string): Promise<BlogPostData | null> {
  try {
    const result = await sql`SELECT slug, title, content, excerpt, date, cardImage FROM blog_posts WHERE slug = ${slug}`;
    return (result.rows[0] as BlogPostData) || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate static parameters for SSG at build time
// We can also use ISR (Incremental Static Regeneration) for dynamic content

export async function generateStaticParams() {
  try {
    const result = await sql`SELECT slug FROM blog_posts ORDER BY date DESC`;
    return result.rows.map((row: { slug: string }) => ({
      slug: row.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

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
            </div>
            <div className="prose prose-lg max-w-none text-foreground">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
