
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-purple-600 rounded-full animate-pulse opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-700 to-blue-700 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center text-6xl font-bold text-white">
                  U
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-800 to-blue-800 rounded-full opacity-10 blur-xl animate-pulse" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Hi, I'm Umakshi
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Full Stack Developer & AI Enthusiast
        </p>

        {/* Description */}
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Crafting innovative solutions with cutting-edge technology and creative problem-solving
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToAbout}
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-800 to-blue-800 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/25 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="relative z-10 font-semibold">Explore My Work</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-800 to-blue-800 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-purple-600" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
