import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ViewCounter from "./view-counter";
import { getViewsCount } from "@db/actions";
import { getBlogPosts } from "@db/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read on software development, design, and more.",
};

export default function Blog() {
  let allBlogs = getBlogPosts();
  return (
    <section
      id="blog"
      className="flex flex-col max-w-[650px]   mx-auto px-10 xl:px-0 mt-28 w-full "
    >
      <h1 className="font-medium text-2xl mb-8 tracking-tighter w-full ">
        read my blog
      </h1>
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
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
