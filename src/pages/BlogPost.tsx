import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

export const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <article className="max-w-3xl mx-auto px-4 py-8">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-blue-600 mb-8">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
};