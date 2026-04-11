import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedPosts } from "@/lib/blog";
import styles from "./styles.module.css";

export const metadata = {
  title: "Blog | David Segovia",
  description: "Technical notes about modern software engineering and AI workflows.",
};

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          Back to resume
        </Link>
        <h1>Blog</h1>
        <p>Notes on software architecture, AI automation and engineering practice.</p>
      </header>

      <section className={styles.grid}>
        {posts.map((post) => (
          <article key={post.meta.slug} className={styles.card}>
            <div>
              <time dateTime={post.meta.date}>{post.meta.date}</time>
              <h2>{post.meta.title}</h2>
              <p>{post.meta.summary}</p>
            </div>
            <ul>
              {post.meta.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className={styles.postContent}>{post.content}</div>
          </article>
        ))}
      </section>
    </main>
  );
}
