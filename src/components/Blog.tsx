import React, { useEffect, useState, useRef } from 'react';
import { Calendar, Eye, ArrowRight } from 'lucide-react';
import { initAutoSlider } from '../lib/autoSlider';

// Replace with your Medium username if needed
const MEDIUM_RSS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kaushik.umakshi';

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(MEDIUM_RSS_URL)
      .then(res => res.json())
      .then(data => {
        if (data.items && data.items.length > 0) {
          setPosts(data.items);
          setError(null);
        } else {
          setError("No blog posts found.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load blog posts. Please try again later.");
        setLoading(false);
      });
  }, []);

  // initialize auto-slider for the blog posts when posts change
  useEffect(() => {
    if (!sliderRef.current || posts.length === 0) return;
    // cleanup previous
    if (cleanupRef.current) cleanupRef.current();

    const container = sliderRef.current;
    container.setAttribute('data-auto-slider', 'true');

    // right -> left infinite loop:
    const cleanup = initAutoSlider(container, { speed: 80, direction: 'left', ensureSeamless: true });
    cleanupRef.current = cleanup;

    return () => {
      if (cleanup) cleanup();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  return (
    <section id="blog" className="py-32 relative overflow-hidden">
      {/* Creamy radial gradient background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            background: 'radial-gradient(circle at 50% 50%, #fffbe8 0%, #fdf6e3 60%, #f7ecd7 100%)',
          }}
        />
        {/* Wavy SVG overlays */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C360,240 1080,80 1440,160 L1440,0 L0,0 Z"
            fill="url(#wave1)"
            opacity="0.13"
          />
          <defs>
            <linearGradient id="wave1" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f7ecd7" />
              <stop offset="1" stopColor="#fffbe8" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 1, transform: 'scaleY(-1)' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
            fill="url(#wave2)"
            opacity="0.10"
          />
          <defs>
            <linearGradient id="wave2" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f7ecd7" />
              <stop offset="1" stopColor="#fffbe8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-extralight mb-8 tracking-widest">
              <span className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                BLOG
              </span>
            </h2>
            <p className="text-neutral-800 text-lg mb-8 font-light max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development, AI, and technology
            </p>
          </div>

          {/* Slider or fallback */}
          {loading ? (
            <div className="text-center text-yellow-700 text-lg py-12">Loading blog posts...</div>
          ) : error ? (
            <div className="text-center text-red-600 text-lg py-12">{error}</div>
          ) : (
            <div
              ref={sliderRef}
              className="blog-slider w-full overflow-hidden flex items-center"
              aria-roledescription="auto-slider"
              // scalable, interchangeable card size:
              style={
                {
                  // card width between 360px and 560px, prefers ~42vw; adjust as needed
                  '--card-w': 'clamp(360px, 42vw, 560px)',
                  // INCREASED vertical size so titles and content fit:
                  // card height between 420px and 840px, prefers ~55vh
                  '--card-h': 'clamp(420px, 55vh, 840px)',
                   // keep a minimum slider height to match card height
                   minHeight: 'var(--card-h)',
                } as React.CSSProperties
              }
            >
              <div className="slider-track inline-flex gap-12 items-stretch" style={{ alignItems: 'stretch' }}>
                {posts.map((post) => (
                  <article
                    key={post.guid}
                    role="article"
                    // enforce uniform scalable size using CSS variable; keep responsive padding
                    style={
                      {
                        width: 'var(--card-w)',
                        height: 'var(--card-h)',
                        minWidth: 'var(--card-w)',
                        minHeight: 'var(--card-h)',
                      } as React.CSSProperties
                    }
                    className={
                      [
                        // larger padding to give title/excerpt more vertical room
                        'flex-shrink-0 group relative flex flex-col p-8 md:p-10 rounded-xl bg-gradient-to-br from-white/90 to-yellow-50/70',
                        'border border-yellow-100/80 hover:border-yellow-200/90 transition-all duration-300 shadow-md',
                        // ensure content wraps and does not overflow
                        'overflow-hidden break-words hyphens-auto'
                      ].join(' ')
                    }
                  >
                    <div className="text-4xl mb-4">✍️</div>
                    <div className="flex items-center space-x-3 text-xs text-neutral-500 mb-2 flex-wrap">
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-800 rounded-full">
                        {post.categories && post.categories.length > 0 ? post.categories[0] : "Medium"}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{new Date(post.pubDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye size={12} />
                        <span>Medium</span>
                      </div>
                    </div>
                    <h4 className="text-base md:text-lg font-semibold text-yellow-900 mb-4 leading-snug whitespace-normal break-words">
                      {post.title}
                    </h4>
                    <div className="text-neutral-800 mb-4 flex-1 overflow-hidden">
                      <p className="break-words leading-relaxed" dangerouslySetInnerHTML={{ __html: post.description.split('</p>')[0] + '</p>' }} />
                    </div>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-yellow-500/80 hover:bg-yellow-600 text-white rounded-full text-sm font-medium transition-all duration-300 mt-auto"
                    >
                      Read More
                      <ArrowRight className="ml-2" size={16} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
