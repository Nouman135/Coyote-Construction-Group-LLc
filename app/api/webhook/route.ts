import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { z } from 'zod';

// Define schema for blog post data
const blogPostSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  content: z.string().min(1),
  excerpt: z.string().optional(),
  date: z.string().min(1),
  cardImage: z.string().url().optional(),
});

export async function POST(request: Request) {
  try {
    // Parse and validate the incoming request body
    const data = await request.json();
    const validatedData = blogPostSchema.parse(data);

    // Check if the blog post already exists
    const existing = await sql`SELECT id FROM blog_posts WHERE slug = ${validatedData.slug}`;

    const now = new Date().toISOString();

    if (existing.rows.length > 0) {
      // Update existing blog post
      await sql`
        UPDATE blog_posts SET 
          title = ${validatedData.title},
          content = ${validatedData.content},
          excerpt = ${validatedData.excerpt || null},
          date = ${validatedData.date},
          cardImage = ${validatedData.cardImage || null},
          updated_at = ${now}
        WHERE slug = ${validatedData.slug}
      `;

      return NextResponse.json(
        { success: true, message: 'Blog post updated successfully', action: 'updated' },
        { status: 200 }
      );
    } else {
      // Insert new blog post
      await sql`
        INSERT INTO blog_posts 
          (slug, title, content, excerpt, date, cardImage)
        VALUES (
          ${validatedData.slug},
          ${validatedData.title},
          ${validatedData.content},
          ${validatedData.excerpt || null},
          ${validatedData.date},
          ${validatedData.cardImage || null}
        )
      `;

      return NextResponse.json(
        { success: true, message: 'Blog post created successfully', action: 'created' },
        { status: 201 }
      );
    }
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors);
      return NextResponse.json(
        { success: false, message: 'Invalid blog post data', details: error.errors },
        { status: 400 }
      );
    }
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Error:', errorMessage);
    return NextResponse.json(
      { success: false, message: 'Failed to process blog post', error: errorMessage },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  try {
    const { checkHealth } = await import('@/lib/db');
    const status = await checkHealth();
    
    return NextResponse.json({
      success: true,
      healthy: status.healthy,
      database: status.healthy ? 'connected' : 'disconnected',
      poolSize: status.poolSize,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      healthy: false,
      database: 'disconnected',
      error: String(error)
    }, { status: 500 });
  }
}
