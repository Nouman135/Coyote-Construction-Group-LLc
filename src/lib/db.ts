import { createPool } from '@vercel/postgres';
import { sql } from '@vercel/postgres';

// Create tables if they don't exist
async function initDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS site_config (
        id SERIAL PRIMARY KEY,
        key TEXT UNIQUE NOT NULL,
        value TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        excerpt TEXT,
        date TEXT NOT NULL,
        cardImage TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Initialize database when the module loads
initDatabase();

// Health check for the database connection
async function checkHealth() {
  try {
    const { rows } = await sql`SELECT 1`;
    return { healthy: true, poolSize: rows.length };
  } catch (error) {
    return { healthy: false, error: String(error) };
  }
}

export { sql, checkHealth };
