import { notFound } from 'next/navigation';
import { pool } from '@/lib/db';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Params = {
  slug: string;
};

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
    const client = await pool.connect();
    
    const result = await client.query(
      'SELECT slug, title, content, excerpt, date, cardImage FROM blog_posts WHERE slug = $1',
      [slug]
    );
    
    client.release();
    
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

interface PageProps {
  params: Params;
}

// Generate static parameters for SSG at build time
// We can also use ISR (Incremental Static Regeneration) for dynamic content

export async function generateStaticParams(): Promise<Params[]> {
  try {
    const client = await pool.connect();
    
    const result = await client.query(
      'SELECT slug FROM blog_posts ORDER BY date DESC'
    );
    
    client.release();
    
    return result.rows.map((row) => ({
      slug: row.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Dynamic metadata generation
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const post = await getBlogPost(params.slug);
//   
//   if (!post) {
//     return { title: 'Blog Post Not Found' };
//   }
// 
//   return {
//     title: post.title,
//     description: post.excerpt,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       images: [post.cardImage || '/default-blog-image.jpg'],
//       url: `https://yourdomain.com/blog/${post.slug}`,
//     },
//   };
// }

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
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
              {/* Render HTML content - this would need proper sanitization in production */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}