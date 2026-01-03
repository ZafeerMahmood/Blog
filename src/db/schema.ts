import { pgTable, text, integer } from 'drizzle-orm/pg-core';

export const views = pgTable('views', {
  slug: text('slug').primaryKey(),
  count: integer('count').notNull().default(0),
});
