import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string;
}

export function getBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        coverImage: data.coverImage,
        excerpt: data.excerpt,
        content,
      };
    })
    .sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime());
}