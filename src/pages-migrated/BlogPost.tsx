import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, User } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/components/QuoteFormContext";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const { openQuoteForm } = useQuoteForm();

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <Navbar />
        <main className="section-padding">
          <div className="container-max text-center py-20">
            <h1 className="font-heading text-4xl text-foreground mb-4 tracking-wide font-bold">Post Not Found</h1>
            <Link to="/blog" className="text-secondary font-semibold hover:underline">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <section className="relative py-16 md:py-24 overflow-hidden">
          <img src={post.heroImage} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(222_62%_12%/.88)_0%,hsl(58_94%_51%/.22)_100%)]" />
          <div className="container-max px-4 text-center">
            <div className="max-w-3xl mx-auto relative z-10">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-4 tracking-wide font-bold">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-accent-foreground/85 text-sm">
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

        <section className="section-padding bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--primary)/0.04)_100%)]">
          <div className="container-max max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-secondary font-semibold text-sm mb-8 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <article>
              {post.content.map((paragraph) => (
                <p key={paragraph} className="text-foreground/80 leading-relaxed text-base md:text-lg mb-6">
                  {paragraph}
                </p>
              ))}
            </article>

            <div className="flex justify-center mt-10">
              <Button size="lg" onClick={openQuoteForm} className="gap-2">
                Request Free Estimate <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
