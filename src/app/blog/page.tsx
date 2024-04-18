import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ViewCounter from "./view-counter";
import { getViewsCount } from "@db/actions";
import { getBlogPosts } from "@db/blog";
import SearchBox from "./search";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read on software development, design, and more.",
};

export default async function Blog({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || "";
  let allBlogs = [];

  if (query.trim() === "") {
    allBlogs = getBlogPosts();
  } else {
    allBlogs = getBlogPosts().filter(
      (post) =>
        post.metadata.title.includes(query) ||
        post.metadata.summary.includes(query) ||
        post.metadata.publishedAt.includes(query) ||
        post.slug.includes(query) ||
        post.content.includes(query)
    );
  }

  return (
    <section
      id="blog"
      className="flex flex-col max-w-[650px] mx-auto px-10 xl:px-0 mt-36 w-full"
    >
      <h1 className="font-medium text-2xl mb-8 tracking-tighter w-full">
        Read my blog
      </h1>
      <div className="mb-8 w-full">
        <SearchBox />
      </div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <Suspense fallback={<p className="h-6" />}>
                <Views slug={post.slug} />
              </Suspense>
            </div>
          </Link>
        ))}
      {allBlogs.length === 0 && (
        <div className="">
          <p className="text-2xl">No posts found for {query}</p>
        </div>
      )}
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}
