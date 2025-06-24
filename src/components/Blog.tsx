
import React, { useState } from 'react';
import { Calendar, Clock, Eye, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn best practices for structuring large React applications with TypeScript, including component architecture and state management strategies.",
      category: "React",
      date: "2024-06-20",
      readTime: "8 min read",
      views: 1240,
      image: "📚",
      featured: true
    },
    {
      id: 2,
      title: "AI Integration in Modern Web Development",
      excerpt: "Exploring how artificial intelligence is transforming web development, from automated testing to intelligent user interfaces.",
      category: "AI",
      date: "2024-06-15",
      readTime: "12 min read",
      views: 890,
      image: "🤖",
      featured: false
    },
    {
      id: 3,
      title: "The Future of CSS: Container Queries and Beyond",
      excerpt: "Discover the latest CSS features that are revolutionizing responsive design and how to implement them in your projects.",
      category: "CSS",
      date: "2024-06-10",
      readTime: "6 min read",
      views: 650,
      image: "🎨",
      featured: false
    },
    {
      id: 4,
      title: "Performance Optimization Techniques for React Apps",
      excerpt: "Deep dive into React performance optimization techniques including memoization, lazy loading, and bundle splitting.",
      category: "React",
      date: "2024-06-05",
      readTime: "10 min read",
      views: 1100,
      image: "⚡",
      featured: true
    },
    {
      id: 5,
      title: "Building APIs with Node.js and Express",
      excerpt: "Complete guide to creating robust REST APIs with Node.js, Express, and best practices for error handling and validation.",
      category: "Backend",
      date: "2024-05-30",
      readTime: "15 min read",
      views: 720,
      image: "🔧",
      featured: false
    },
    {
      id: 6,
      title: "Database Design Patterns for Modern Applications",
      excerpt: "Understanding database design patterns and choosing the right approach for your application's data requirements.",
      category: "Database",
      date: "2024-05-25",
      readTime: "9 min read",
      views: 580,
      image: "💾",
      featured: false
    }
  ];

  const categories = ['all', 'React', 'AI', 'CSS', 'Backend', 'Database'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section id="blog" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-extralight mb-8 tracking-widest">
              <span className="bg-gradient-to-r from-purple-100 via-gray-100 to-purple-100 bg-clip-text text-transparent">
                BLOG
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 font-light max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development, AI, and technology
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-light transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-purple-500/30 hover:text-purple-400'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featuredPost && selectedCategory === 'all' && (
            <div className="mb-16">
              <h3 className="text-2xl font-light text-purple-300 mb-6 text-center">Featured Post</h3>
              <div className="group relative p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm cursor-pointer">
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="text-6xl">{featuredPost.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye size={14} />
                        <span>{featuredPost.views}</span>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {featuredPost.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                      <span className="text-sm font-light">Read more</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => selectedCategory !== 'all' || !post.featured).map((post, index) => (
              <article 
                key={post.id}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Post image/icon */}
                <div className="text-4xl mb-4 text-center">{post.image}</div>
                
                {/* Post meta */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Eye size={12} />
                    <span>{post.views}</span>
                  </div>
                </div>

                {/* Post content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Post footer */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-purple-400" />
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              </article>
            ))}
          </div>

          {/* Load more button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-purple-300 hover:border-purple-400/50 hover:text-purple-200 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              Load More Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
