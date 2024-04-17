import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read on software development, design, and more.",
};

function Blog() {
  return (
    <section
      id="blog"
      className="flex flex-col max-w-7xl w-full items-center justify-center mx-auto px-10 xl:px-0 mt-28 "
    >
      Coming Soon...
    </section>
  );
}

export default Blog;
