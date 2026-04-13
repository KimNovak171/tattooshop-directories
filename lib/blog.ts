import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPostSummary = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export type BlogPost = BlogPostSummary & {
  content: string;
  contentHtml: string;
};

function normalizeFrontmatter(data: Record<string, unknown>): {
  title: string;
  date: string;
  description: string;
} {
  return {
    title: String(data.title ?? ""),
    date: String(data.date ?? ""),
    description: String(data.description ?? ""),
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostSummary[] {
  const slugs = getPostSlugs();

  const posts = slugs.map((slug) => {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);
    const { title, date, description } = normalizeFrontmatter(
      data as Record<string, unknown>,
    );
    return { slug, title, date, description };
  });

  return posts.sort((a, b) => {
    const ta = new Date(a.date).getTime();
    const tb = new Date(b.date).getTime();
    return tb - ta;
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const { title, date, description } = normalizeFrontmatter(
    data as Record<string, unknown>,
  );

  const file = await remark().use(remarkHtml).process(content);
  const contentHtml = String(file);

  return { slug, title, date, description, content, contentHtml };
}
