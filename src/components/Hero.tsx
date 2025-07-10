import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [magRef, magStyle] = useMagnetic<HTMLButtonElement>(60, '#6b7280');

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Solid black background with floating elements */}
      <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
        <div className="absolute w-[400px] h-[100px] bg-black/60 rounded-full blur-2xl left-1/4 top-1/3 animate-float" />
        <div className="absolute w-[300px] h-[80px] bg-black/40 rounded-full blur-2xl right-1/4 top-2/3 animate-float-reverse" />
        <div className="absolute w-[200px] h-[60px] bg-black/30 rounded-full blur-2xl left-1/3 bottom-1/4 animate-float" />
      </div>

      {/* Elegant AI network background */}
      {/*
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        {[...Array(10)].map((_, i) => (
          <circle
            key={i}
            cx={`${10 + Math.random() * 80}%`}
            cy={`${10 + Math.random() * 80}%`}
            r={12 + Math.random() * 18}
            fill="url(#aiNodeGradient)"
            opacity="0.18"
          >
            <animate
              attributeName="cy"
              values={`10%;90%;10%`}
              dur={`${8 + Math.random() * 4}s`}
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
            />
          </circle>
        ))}
        <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="#222" strokeWidth="2" opacity="0.08" />
        <line x1="40%" y1="60%" x2="60%" y2="20%" stroke="#444" strokeWidth="2" opacity="0.08" />
        <defs>
          <radialGradient id="aiNodeGradient">
            <stop offset="0%" stopColor="#222" />
            <stop offset="100%" stopColor="#444" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      */}

      {/* --- New: Weak White AI network background for preview --- */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        {/* Animated nodes with weak white color */}
        {[...Array(10)].map((_, i) => (
          <circle
            key={i}
            cx={`${10 + Math.random() * 80}%`}
            cy={`${10 + Math.random() * 80}%`}
            r={12 + Math.random() * 18}
            fill="url(#aiNodeGradientWhite)"
            opacity="0.18"
          >
            <animate
              attributeName="cy"
              values={`10%;90%;10%`}
              dur={`${8 + Math.random() * 4}s`}
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
            />
          </circle>
        ))}
        {/* Optional: connecting lines (keep same) */}
        <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="#222" strokeWidth="2" opacity="0.08" />
        <line x1="40%" y1="60%" x2="60%" y2="20%" stroke="#444" strokeWidth="2" opacity="0.08" />
        <defs>
          <radialGradient id="aiNodeGradientWhite">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Subtle floating elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute animate-float opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          >
            <div 
              className={`w-3 h-3 ${
                i % 2 === 0 
                  ? 'bg-gray-400/10 rotate-45' 
                  : 'bg-gray-600/10 rounded-full'
              }`} 
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Enlarged elegant profile section with actual image */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-black/40 p-1.5 backdrop-blur-sm border border-gray-800/60">
              <div className="w-full h-full rounded-full bg-black/40 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Umakshi - AI Scientist"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute -inset-8 bg-black/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>

        {/* Elegant typography */}
        <h1 className="text-6xl md:text-8xl font-extralight mb-8 animate-fade-in tracking-wider">
          <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent">
            Umakshi
          </span>
        </h1>

        {/* Refined subtitle */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            AI Developer | Data Scientist | Prompt Engineer
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent mx-auto mt-4" />
        </div>

        {/* Elegant description */}
        <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto animate-fade-in font-light leading-relaxed" style={{ animationDelay: '0.6s' }}>
          Crafting innovative digital experiences with precision and creativity
        </p>

        {/* Refined CTA */}
        <button
          ref={magRef}
          onClick={scrollToAbout}
          className="group relative px-12 py-4 bg-transparent border border-gray-400/30 rounded-full hover:border-gray-400/60 transition-all duration-500 hover:scale-105 animate-fade-in backdrop-blur-sm"
          style={{ ...magStyle, animationDelay: '0.9s' }}
        >
          <span className="relative z-10 font-light text-gray-200 tracking-wide">Explore Portfolio</span>
          <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>

        {/* Minimal scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
          <ArrowDown className="text-gray-400/60" size={24} strokeWidth={1} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
