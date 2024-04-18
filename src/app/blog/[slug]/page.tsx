import type { Metadata } from "next";
import { Suspense, cache } from "react";
import { notFound } from "next/navigation";
import { getViewsCount } from "@db/actions";
import { getBlogPosts } from "@db/blog";
import ViewCounter from "../view-counter";
import { increment } from "@db/actions";
import rehypeHighlight from "rehype-highlight";
import { MDXRemote } from "next-mdx-remote/rsc";
import { formatDate } from "@/util";
import "@css/github-dark.css";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://zafeer.vercel.app${image}`
    : `https://zafeer.vercel.app/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://zafeer.vercel.app/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function BlogById({ params }: { params: any }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  const options: any = {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight],
    },
  };
  return (
    <section
      id="blogbyid"
      className="flex flex-col max-w-7xl w-full items-center justify-center mx-auto px-10 xl:px-0 mt-28  min-w-80"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://zafeer.vercel.app${post.metadata.image}`
              : `https://zafeer.vercel.app/og?title=${post.metadata.title}`,
            url: `https://zafeer.vercel.app/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Zafeer Mahmood",
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter text-start max-w-[33ch] lg:max-w-[54ch] w-full mt-10">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-start mt-2 mb-8 text-sm  max-w-[56ch] lg:max-w-[93ch] w-full ">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
        <Suspense fallback={<p className="h-5" />}>
          <Views slug={post.slug} />
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-invert text-xs md:text-md lg:text-xl  ">
        <MDXRemote source={post.content} options={options} />
      </article>
    </section>
  );
}

let incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  incrementViews(slug);
  return <ViewCounter allViews={views} slug={slug} />;
}
