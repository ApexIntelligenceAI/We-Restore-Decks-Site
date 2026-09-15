"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { BlogPost } from "@/lib/blog";

const PER_PAGE = 9;

type BlogListingProps = {
  posts: BlogPost[];
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

export const BlogListing = ({ posts }: BlogListingProps) => {
  const [page, setPage] = useState(1);
  const pages = Math.ceil(posts.length / PER_PAGE);
  const visiblePosts = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    const section = document.querySelector(".blog-list-section");
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="blog-hero">
        <div className="blog-container">
          <div className="blog-eyebrow">Our Blog</div>
          <h1 className="blog-title">Deck Care Insights &amp; Inspiration</h1>
          <p className="blog-subtitle">
            Expert tips on deck restoration, repair, power washing, and outdoor living
            from the We Restore Decks team.
          </p>
        </div>
      </section>

      <section className="blog-list-section">
        <div className="blog-container">
          {posts.length === 0 ? (
            <div className="w-dyn-empty">
              <div>No items found.</div>
            </div>
          ) : (
            <div className="blog-grid" role="list">
              {visiblePosts.map((post) => (
                <div key={post.slug} className="w-dyn-item" role="listitem">
                  <Link href={`/blog/${post.slug}`} className="bcard w-inline-block">
                    <div className="bcard-imgwrap">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          className="bcard-img"
                          width={640}
                          height={360}
                          loading="lazy"
                        />
                      ) : (
                        <div className="bcard-img" />
                      )}
                    </div>
                    <div className="bcard-content">
                      <div className="bcard-cat">{post.category}</div>
                      <h3 className="bcard-title">{post.title}</h3>
                      <p className="bcard-sum">{post.summary}</p>
                      <div className="bcard-meta">
                        <div className="bcard-mt">{formatDate(post.date)}</div>
                        {post.readTime && (
                          <>
                            <div className="bcard-mt">•</div>
                            <div className="bcard-mt">{post.readTime}</div>
                          </>
                        )}
                      </div>
                      <span className="bcard-more">Read more →</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {pages > 1 && (
            <div className="blog-pager">
              {Array.from({ length: pages }, (_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    type="button"
                    className={`blog-page-btn${pageNumber === page ? " is-active" : ""}`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
