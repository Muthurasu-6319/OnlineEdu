import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Search, X } from 'lucide-react';

const API_URL = '/api/blogs';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedPost, setSelectedPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);

  const categories = [
    { label: 'All Articles', value: 'ALL' },
    { label: 'Admissions', value: 'ADMISSIONS' },
    { label: 'Distance MBA & MCA', value: 'MBA_MCA' },
    { label: 'Board Exams (10th/12th)', value: 'BOARD' },
    { label: 'Career Guide', value: 'CAREER' }
  ];

  // Load custom blogs from API on mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setAllPosts(data);
        }
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
      }
    };
    fetchBlogs();
  }, []);

  // Dynamic SEO Meta Tags
  useEffect(() => {
    if (selectedPost) {
      document.title = `${selectedPost.title} | VNET Academy Blog`;
      
      const setMeta = (name, content) => {
        let meta = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          if (name.startsWith('og:')) meta.setAttribute('property', name);
          else meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content || '');
      };

      setMeta('description', selectedPost.snippet);
      setMeta('keywords', selectedPost.keywords);
      setMeta('og:title', selectedPost.title);
      setMeta('og:description', selectedPost.snippet);
    } else {
      document.title = 'VNET Distance Academy | Best Online Education in Coimbatore';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', 'VNET Distance Academy provides UGC-approved online MBA, MCA, UG & PG degrees in Coimbatore and Tirupur.');
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute('content', 'distance education, online degree, Coimbatore, VNET Academy, Alagappa University distance education');
    }
  }, [selectedPost]);

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory;
    const searchString = `${post.title} ${post.content} ${post.keywords || ''}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-slate-50 py-16 xl:py-24 font-outfit" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            VNET Distance Academy <span className="text-[#2ca785]">Educational Blog</span>
          </h1>
          <p className="text-slate-500 mt-3 text-base sm:text-lg max-w-3xl mx-auto font-medium">
            Stay updated with the latest insights on distance learning, online MBA & MCA specializations, board exams prep, and career opportunities.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-6 rounded-3xl border border-slate-100 shadow-xs">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-[#2ca785] text-white shadow-md shadow-emerald-100'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & keywords..."
              className="w-full bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-xs sm:text-sm text-slate-700 px-4 py-2.5 pl-10 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2ca785] focus:border-transparent transition-all"
            />
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-xs">
            <p className="text-lg text-slate-500 font-medium mb-1">No articles found</p>
            <p className="text-sm text-slate-400">Try searching for keywords like "Alagappa", "Amity", "NIOS", or "Coimbatore".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full p-6 sm:p-8"
              >
                {/* Category & Date */}
                <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                  <span className="text-[#2ca785] bg-emerald-50 px-3 py-1 rounded-full">{post.category.replace('_', ' ')}</span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 mb-4 line-clamp-2 hover:text-[#1c2d76] transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Snippet */}
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 font-medium font-sans flex-grow">
                  {post.snippet}
                </p>

                {/* Author & Read More Button */}
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                    <User size={14} className="text-slate-400" />
                    <span>{post.author}</span>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className="text-[#1c2d76] hover:text-[#2ca785] text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ARTICLE DETAILS MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setSelectedPost(null)} />
          <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative z-10 font-outfit max-h-[85vh] flex flex-col">
            
            {/* Close Button */}
            <div className="absolute right-6 top-6 z-20">
              <button 
                onClick={() => setSelectedPost(null)} 
                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="overflow-y-auto p-8 sm:p-10 space-y-6">
              {/* Category & Date */}
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider pt-4">
                <span className="text-[#2ca785] bg-emerald-50 px-3 py-1 rounded-full">{selectedPost.category.replace('_', ' ')}</span>
                <span>{selectedPost.date}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-black text-[#1c2d76] leading-tight">
                {selectedPost.title}
              </h2>

              {/* Author Info */}
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 pb-2 border-b border-slate-100">
                <User size={14} className="text-slate-400" />
                <span>Published by {selectedPost.author}</span>
              </div>

              {/* Detailed Content */}
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-medium whitespace-pre-line space-y-4">
                {selectedPost.content}
              </div>

              {/* SEO Keywords Tag Cloud */}
              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">SEO Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.keywords.split(',').map((kw, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-600 text-[11px] font-bold px-3 py-1 rounded-full">
                      {kw.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
