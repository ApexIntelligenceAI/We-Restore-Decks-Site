import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { BlogListing } from "@/components/BlogListing";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Deck care insights, restoration tips, and outdoor living inspiration from We Restore Decks in Annapolis, MD.",
};

const BlogPage = () => {
  const posts = getAllPosts();

  return (
    <>
      <BlogListing posts={posts} />
      <Footer />
    </>
  );
};

export default BlogPage;
