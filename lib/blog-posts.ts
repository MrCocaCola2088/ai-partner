import {blogPostsA, type BlogPost} from '@/lib/blog-posts-a';
import {blogPostsB} from '@/lib/blog-posts-b';
import {blogPostsC} from '@/lib/blog-posts-c';

export type {BlogPost};

export const blogPosts: BlogPost[] = [...blogPostsA, ...blogPostsB, ...blogPostsC].sort((a, b) =>
  a.published < b.published ? 1 : -1
);

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function postPlainText(post: BlogPost, locale: 'es' | 'en') {
  return [
    post.title[locale],
    ...post.sections.flatMap((section) => [
      section.heading?.[locale] ?? '',
      ...section.paragraphs.map((paragraph) => paragraph[locale]),
    ]),
  ]
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function readingMinutes(post: BlogPost, locale: 'es' | 'en') {
  const words = postPlainText(post, locale).split(' ').filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
