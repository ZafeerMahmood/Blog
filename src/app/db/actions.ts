"use server";

import { createClient } from "@/util/supabase";
import { SupabaseClient } from "@supabase/supabase-js";
import { unstable_noStore as noStore } from "next/cache";

let supabase: SupabaseClient | null = null;

async function getSupabaseClient(): Promise<SupabaseClient> {
  if (!supabase) {
    supabase = await createClient();
  }
  return supabase;
}

export async function increment(slug: string) {
  const supabase = await getSupabaseClient();
  try {
    noStore();
    const { data: existingViews, error } = await supabase
      .from("views")
      .select("count")
      .eq("slug", slug)
      .single();

    const newCount = existingViews ? existingViews.count + 1 : 1;
    await supabase
      .from("views")
      .upsert([{ slug, count: newCount }], { onConflict: "slug" });
  } catch (error) {}
}

export async function getBlogViews() {
  const supabase = await getSupabaseClient();
  try {
    noStore();
    const { data, error } = await supabase.from("views").select("count");
    if (error) {
      throw error;
    }
    const totalCount = data.reduce((acc, curr) => acc + curr.count, 0);
    return totalCount;
  } catch (error) {
    return 0;
  }
}

export async function getViewsCount(): Promise<
  { slug: string; count: number }[]
> {
  const supabase = await getSupabaseClient();
  noStore();
  try {
    const { data, error } = await supabase.from("views").select("slug, count");
    if (error) {
      throw error;
    }
    const viewsCount = data.map((row) => ({
      slug: row.slug,
      count: Number(row.count),
    }));

    return viewsCount;
  } catch (error) {
    return [];
  }
}
