import { PROFILE } from "@constants/index";
import { getBlogPosts } from "@db/blog";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${PROFILE.DEPLOYMENT}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/blog", "/contact"].map((route) => ({
    url: `${PROFILE.DEPLOYMENT}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
