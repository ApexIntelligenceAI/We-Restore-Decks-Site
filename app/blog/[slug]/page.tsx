import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { BlogArticle } from "@/components/BlogArticle";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
  return getAllPostSlugs().map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogArticle post={post} />
      <Footer />
    </>
  );
};

export default BlogPostPage;
