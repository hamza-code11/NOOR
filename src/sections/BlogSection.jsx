// components/BlogSection.jsx
import React from 'react';
import { ArrowRight, Calendar, Clock, User, Crown } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogSection = () => {
  return (
    <section className="bg-primary py-12 md:py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-28 h-28 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-36 h-36 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div>
            <span className="inline-flex items-center gap-2 bg-gold/20 text-gold-light text-xs font-semibold px-4 py-1.5 rounded-full mb-3 border border-gold/30">
              <Crown size={14} className="text-gold" />
              Our Blog
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
              Latest Blogs
            </h2>
            <p className="text-white/60 text-sm md:text-base">
              Stay updated with fashion tips, trends & stories
            </p>
          </div>
          <a 
            href="/blog"
            className="hidden md:flex items-center gap-2 text-gold-light hover:text-gold font-semibold text-sm transition-colors group border-b-2 border-gold/50 hover:border-gold pb-1"
          >
            View All Posts
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="group bg-primary-light/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:-translate-y-1.5 border border-white/10"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[200px] sm:h-[220px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gold Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge - Gold */}
                <span className="absolute top-3 left-3 bg-gold text-primary-dark text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {post.category}
                </span>

                {/* Read Article Overlay */}
                <div className="absolute bottom-3 right-3 bg-gold text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                  Read Article
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-[11px] md:text-xs text-white/50 mb-3 pb-3 border-b border-white/10">
                  <span className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center">
                      <User size={11} className="text-gold-light" />
                    </div>
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center">
                      <Calendar size={11} className="text-gold-light" />
                    </div>
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5 ml-auto">
                    <div className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center">
                      <Clock size={11} className="text-gold-light" />
                    </div>
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-gold-light transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/50 text-xs md:text-sm mb-4 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <span className="inline-flex items-center gap-1.5 text-gold-light text-sm font-semibold group-hover:text-gold transition-colors group/link">
                  Read More
                  <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <a 
            href="/blog"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary-dark px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:shadow-xl hover:shadow-gold/40 group"
          >
            View All Posts
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;