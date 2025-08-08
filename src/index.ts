import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

export const schema = await import('./db/schema');
export * from './db/schema';

export const db = drizzle(process.env.DATABASE_URL!);
