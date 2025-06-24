
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Refined code elements for subtle background
  const codeElements = [
    '<>', '</>', '{}', '[]', '()', '=>', '&&', '||', '!=', '==',
    'fn', 'const', 'return', 'import', 'export', 'async', 'await',
    'JS', 'TS', 'CSS', 'HTML', 'API', 'git'
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Elegant background code particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => {
          const element = codeElements[i % codeElements.length];
          const isSymbol = ['<>', '</>', '{}', '[]', '()', '=>'].includes(element);
          
          return (
            <div
              key={i}
              className={`absolute text-xs font-mono animate-pulse select-none pointer-events-none ${
                isSymbol 
                  ? 'text-purple-500/15' 
                  : 'text-gray-600/20'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                fontSize: `${0.6 + Math.random() * 0.4}rem`,
              }}
            >
              {element}
            </div>
          );
        })}
      </div>

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
                  ? 'bg-purple-400/10 rotate-45' 
                  : 'bg-gray-400/10 rounded-full'
              }`} 
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Enlarged elegant profile section */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-1.5 backdrop-blur-sm border border-purple-500/30">
              <div className="w-full h-full rounded-full bg-black/80 flex items-center justify-center backdrop-blur-sm">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center text-8xl md:text-9xl font-light text-purple-300/80 tracking-wider">
                  U
                </div>
              </div>
            </div>
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>

        {/* Elegant typography */}
        <h1 className="text-6xl md:text-8xl font-extralight mb-8 animate-fade-in tracking-wider">
          <span className="bg-gradient-to-r from-gray-200 via-purple-200 to-gray-200 bg-clip-text text-transparent">
            Umakshi
          </span>
        </h1>

        {/* Refined subtitle */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
            Full Stack Developer
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mx-auto mt-4" />
        </div>

        {/* Elegant description */}
        <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto animate-fade-in font-light leading-relaxed" style={{ animationDelay: '0.6s' }}>
          Crafting innovative digital experiences with precision and creativity
        </p>

        {/* Refined CTA */}
        <button
          onClick={scrollToAbout}
          className="group relative px-12 py-4 bg-transparent border border-purple-400/30 rounded-full hover:border-purple-400/60 transition-all duration-500 hover:scale-105 animate-fade-in backdrop-blur-sm"
          style={{ animationDelay: '0.9s' }}
        >
          <span className="relative z-10 font-light text-purple-300 tracking-wide">Explore Portfolio</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>

        {/* Minimal scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
          <ArrowDown className="text-purple-400/60" size={24} strokeWidth={1} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
