import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Link 
              key={index} 
              to={`/blog/${post.slug}`}
              className="flex flex-col h-full group"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-sm text-blue-600 mb-2">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-gray-600 flex-grow">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};