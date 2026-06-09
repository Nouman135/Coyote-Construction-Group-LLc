import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
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

    // Connect to the database
    const client = await pool.connect();
    
    try {
      // Check if the blog post already exists
      const existing = await client.query(
        'SELECT id FROM blog_posts WHERE slug = $1',
        [validatedData.slug]
      );

      const now = new Date().toISOString();

      if (existing.rows.length > 0) {
        // Update existing blog post
        await client.query(
          `UPDATE blog_posts SET 
            title = $1,
            content = $2,
            excerpt = $4,
            date = $4,
            cardImage = $5,
            updated_at = $6
          WHERE slug = $7`,
          [
            validatedData.title,
            validatedData.content,
            validatedData.excerpt,
            validatedData.date,
            validatedData.cardImage,
            now,
            validatedData.slug,
          ]
        );

        return NextResponse.json(
          { success: true, message: 'Blog post updated successfully', action: 'updated' },
          { status: 200 }
        );
      } else {
        // Insert new blog post
        await client.query(
          `INSERT INTO blog_posts 
            (slug, title, content, excerpt, date, cardImage)
          VALUES ($1, $2, $3, $4, $5, $6)`,
          [
            validatedData.slug,
            validatedData.title,
            validatedData.content,
            validatedData.excerpt,
            validatedData.date,
            validatedData.cardImage,
          ]
        );

        return NextResponse.json(
          { success: true, message: 'Blog post created successfully', action: 'created' },
          { status: 201 }
        );
      }
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { success: false, message: 'Failed to process blog post', error: String(dbError) },
        { status: 500 }
      );
    } finally {
      client.release();
    }
  } catch (validationError) {
    console.error('Validation error:', validationError);
    return NextResponse.json(
      { success: false, message: 'Invalid blog post data', details: validationError.errors },
      { status: 400 }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error', error: String(error) },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  try {
    const { healthy } = await import('@/lib/db');
    const status = await healthy();
    
    return NextResponse.json({
      healthy: status.healthy,
      database: 'connected'
    });
  } catch (error) {
    return NextResponse.json({
      healthy: false,
      database: 'disconnected',
      error: String(error)
    }, { status: 500 });
  }
}