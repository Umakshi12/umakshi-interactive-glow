
import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, X, Filter, ArrowRight } from 'lucide-react';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock search data
  const searchData = [
    { id: 1, title: "About Me", type: "section", content: "Full-stack developer passionate about creating innovative solutions", url: "#about" },
    { id: 2, title: "React Experience", type: "skill", content: "Advanced React development with TypeScript and modern hooks", url: "#techstack" },
    { id: 3, title: "AI E-commerce Platform", type: "project", content: "AI-powered e-commerce solution with recommendation engine", url: "#projects" },
    { id: 4, title: "Node.js Backend", type: "skill", content: "Scalable backend development with Express and PostgreSQL", url: "#techstack" },
    { id: 5, title: "Contact Information", type: "section", content: "Get in touch for collaboration opportunities", url: "#contact" },
    { id: 6, title: "Chat Application", type: "project", content: "Real-time messaging with WebRTC video calls", url: "#projects" },
    { id: 7, title: "TypeScript", type: "skill", content: "Type-safe development with advanced TypeScript patterns", url: "#techstack" },
    { id: 8, title: "Building Scalable React Applications", type: "blog", content: "Best practices for React architecture and state management", url: "#blog" },
    { id: 9, title: "AI Integration Guide", type: "blog", content: "How to integrate AI features in modern web applications", url: "#blog" },
    { id: 10, title: "Work Experience", type: "section", content: "Professional experience in software development", url: "#experience" }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: '🔍' },
    { id: 'section', label: 'Sections', icon: '📄' },
    { id: 'project', label: 'Projects', icon: '💼' },
    { id: 'skill', label: 'Skills', icon: '⚡' },
    { id: 'blog', label: 'Blog', icon: '📝' }
  ];

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = searchData.filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.content.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = selectedFilter === 'all' || item.type === selectedFilter;
        return matchesQuery && matchesFilter;
      });
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, selectedFilter]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleResultClick = (url: string) => {
    const element = document.querySelector(url);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setSearchQuery('');
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'section': return '📄';
      case 'project': return '💼';
      case 'skill': return '⚡';
      case 'blog': return '📝';
      default: return '🔍';
    }
  };

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-20 left-6 z-40 p-3 bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-full hover:border-purple-400/50 transition-all duration-300 hover:scale-110 group"
        title="Search (Cmd+K)"
      >
        <SearchIcon size={20} className="text-purple-300 group-hover:text-purple-200" />
      </button>

      {/* Search modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div className="w-full max-w-2xl mx-4 bg-gray-900/95 backdrop-blur-lg border border-purple-500/30 rounded-2xl shadow-2xl animate-fade-in">
            {/* Search header */}
            <div className="flex items-center p-6 border-b border-purple-500/20">
              <SearchIcon size={20} className="text-purple-400 mr-3" />
              <input
                type="text"
                placeholder="Search portfolio content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                autoFocus
              />
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <span>Cmd+K</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-800 rounded"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2 p-4 border-b border-purple-500/10">
              <Filter size={16} className="text-gray-400" />
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs transition-all duration-200 ${
                    selectedFilter === filter.id
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                      : 'bg-gray-800/50 text-gray-400 hover:text-purple-400 hover:bg-gray-800'
                  }`}
                >
                  <span>{filter.icon}</span>
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>

            {/* Search results */}
            <div className="max-h-96 overflow-y-auto">
              {searchQuery.length > 0 ? (
                searchResults.length > 0 ? (
                  <div className="p-2">
                    {searchResults.map((result, index) => (
                      <div
                        key={result.id}
                        onClick={() => handleResultClick(result.url)}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800/50 cursor-pointer transition-all duration-200 group"
                      >
                        <div className="text-2xl">{getTypeIcon(result.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-white font-medium group-hover:text-purple-300 transition-colors">
                              {result.title}
                            </h3>
                            <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                              {result.type}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm line-clamp-1">{result.content}</p>
                        </div>
                        <ArrowRight size={16} className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="text-4xl mb-4">🔍</div>
                    <p className="text-gray-400">No results found for "{searchQuery}"</p>
                    <p className="text-gray-500 text-sm mt-2">Try searching for projects, skills, or blog posts</p>
                  </div>
                )
              ) : (
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">👋</div>
                  <p className="text-gray-400 mb-2">Search my portfolio</p>
                  <p className="text-gray-500 text-sm">Find projects, skills, blog posts, and more</p>
                </div>
              )}
            </div>

            {/* Search footer */}
            <div className="flex items-center justify-between p-4 border-t border-purple-500/10 text-xs text-gray-500">
              <div className="flex items-center space-x-4">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>Esc Close</span>
              </div>
              <span>Powered by Portfolio Search</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
