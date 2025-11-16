import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export type PostFrontMatter = {
  title: string;
  date: string;
  excerpt: string;
  author: string;
};

export type Post = {
  slug: string;
  frontMatter: PostFrontMatter;
  content: string;
};

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontMatter: data as PostFrontMatter,
      content,
    };
  });

  return posts.sort((a, b) => (a.frontMatter.date > b.frontMatter.date ? -1 : 1));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  return {
    slug,
    frontMatter: data as PostFrontMatter,
    content: processedContent.toString(),
  };
}
