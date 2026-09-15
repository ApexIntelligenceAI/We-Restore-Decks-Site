import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  coverImage: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const ensureBlogDir = () => {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
};

export const getAllPosts = (): BlogPost[] => {
  ensureBlogDir();
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const slug =
      (data.slug as string) || file.replace(/\.(mdx|md)$/, "");

    return {
      slug,
      title: (data.title as string) || slug,
      category: (data.category as string) || "Blog",
      date: (data.date as string) || "",
      readTime: (data.readTime as string) || "",
      author: (data.author as string) || "We Restore Decks",
      summary: (data.summary as string) || "",
      coverImage: (data.coverImage as string) || "",
      content,
    };
  });

  return posts.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return getAllPosts().find((post) => post.slug === slug);
};

export const getAllPostSlugs = (): string[] => {
  return getAllPosts().map((post) => post.slug);
};
