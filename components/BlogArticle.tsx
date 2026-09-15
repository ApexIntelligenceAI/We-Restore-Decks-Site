import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

type BlogArticleProps = {
  post: BlogPost;
};

const formatDate = (value: string) => {
  if (!value) return "";
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return value;

  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};

export const BlogArticle = ({ post }: BlogArticleProps) => {
  return (
    <>
      <section className="art-hero">
        <div className="art-container">
          <Link href="/blog" className="art-back">← Back to Blog</Link>
          <div className="art-cat">{post.category}</div>
          <h1 className="art-title">{post.title}</h1>
          <div className="art-meta">
            <div>{formatDate(post.date)}</div>
            {post.readTime && (
              <>
                <div className="art-sep">•</div>
                <div>{post.readTime}</div>
              </>
            )}
            {post.author && (
              <>
                <div className="art-sep">•</div>
                <div>{post.author}</div>
              </>
            )}
          </div>
          {post.coverImage && (
            <div className="art-imgwrap">
              <Image
                src={post.coverImage}
                alt={post.title}
                className="art-img"
                width={1200}
                height={675}
                priority
              />
            </div>
          )}
        </div>
      </section>

      <section className="art-body-section">
        <div className="art-narrow">
          <div
            className="art-rich w-richtext"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    </>
  );
};
