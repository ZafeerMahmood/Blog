"use server";

import { db } from "./index";
import { views } from "./schema";
import { sql } from "drizzle-orm";
import { unstable_noStore as noStore } from "next/cache";

export async function increment(slug: string) {
  noStore();
  try {
    await db
      .insert(views)
      .values({ slug, count: 1 })
      .onConflictDoUpdate({
        target: views.slug,
        set: { count: sql`${views.count} + 1` },
      });
  } catch (error) {
    console.error("Error incrementing view count:", error);
  }
}

export async function getBlogViews() {
  noStore();
  try {
    const result = await db.select({ count: views.count }).from(views);
    const totalCount = result.reduce((acc, curr) => acc + curr.count, 0);
    return totalCount;
  } catch (error) {
    console.error("Error getting total views:", error);
    return 0;
  }
}

export async function getViewsCount(): Promise<
  { slug: string; count: number }[]
> {
  noStore();
  try {
    const result = await db.select().from(views);
    return result.map((row) => ({
      slug: row.slug,
      count: row.count,
    }));
  } catch (error) {
    console.error("Error getting views count:", error);
    return [];
  }
}