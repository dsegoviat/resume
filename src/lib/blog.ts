import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { BlogPostMeta, Locale } from "@/types/content";

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "posts");

type PostFrontmatter = {
  title?: string;
  date?: string;
  tags?: string[];
  summary?: string;
  published?: boolean;
  locale?: Locale;
};

async function getPostFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(POSTS_DIRECTORY, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map((entry) => entry.name);
  } catch {
    return [];
  }
}

function toPostMeta(fileName: string, frontmatter: PostFrontmatter): BlogPostMeta {
  const fallbackTitle = fileName.replace(/\.mdx$/, "").replace(/-/g, " ");
  return {
    slug: fileName.replace(/\.mdx$/, ""),
    title: frontmatter.title ?? fallbackTitle,
    date: frontmatter.date ?? "1970-01-01",
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    summary: frontmatter.summary ?? "",
    published: frontmatter.published === true,
    locale: frontmatter.locale === "es" ? "es" : "en",
  };
}

export async function getPublishedPostsMeta(): Promise<BlogPostMeta[]> {
  const files = await getPostFiles();
  const posts = await Promise.all(
    files.map(async (fileName) => {
      const fullPath = path.join(POSTS_DIRECTORY, fileName);
      const raw = await fs.readFile(fullPath, "utf8");
      const { data } = matter(raw);
      return toPostMeta(fileName, data as PostFrontmatter);
    }),
  );

  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPublishedPosts() {
  const files = await getPostFiles();
  const posts = await Promise.all(
    files.map(async (fileName) => {
      const fullPath = path.join(POSTS_DIRECTORY, fileName);
      const raw = await fs.readFile(fullPath, "utf8");
      const { content, frontmatter } = await compileMDX<PostFrontmatter>({
        source: raw,
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      });

      return {
        meta: toPostMeta(fileName, frontmatter),
        content,
      };
    }),
  );

  return posts
    .filter((post) => post.meta.published)
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
    );
}
