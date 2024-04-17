"use server";

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getBlogViews() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }
  noStore();
  let views = await sql`
    SELECT count
    FROM views
  `;
  return views.rows.reduce((acc, curr) => acc + Number(curr.count), 0);
}

export async function getViewsCount(): Promise<
  { slug: string; count: number }[]
> {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();
  const result = await sql`
    SELECT slug, count
    FROM views
  `;
  return result.rows.map((row) => ({
    slug: row.slug,
    count: Number(row.count),
  }));
}
