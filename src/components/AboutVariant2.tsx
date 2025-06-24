
import React from 'react';

const AboutVariant2 = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500/10 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-blue-500/10 rotate-12 animate-float" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/5 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Centered approach with timeline feel */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-400/50" />
              <h2 className="text-5xl md:text-6xl font-extralight tracking-widest text-purple-100">
                STORY
              </h2>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-400/50" />
            </div>
            <p className="text-gray-400 font-light text-lg tracking-wide">The journey behind the code</p>
          </div>

          {/* Timeline-style content */}
          <div className="relative">
            {/* Central line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-400/20 via-purple-400/40 to-purple-400/20" />

            <div className="space-y-24">
              {/* Mission statement */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="inline-block p-8 rounded-lg bg-gradient-to-l from-purple-900/20 to-transparent border-r border-purple-500/20">
                    <h3 className="text-2xl font-light text-purple-200 mb-4 tracking-wide">Mission</h3>
                    <p className="text-gray-300 font-light leading-relaxed">
                      To create digital experiences that don't just function, but inspire. 
                      Where technology meets artistry, and user needs drive innovation.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 bg-purple-400/60 rounded-full border-4 border-black" />
                </div>
                <div className="w-1/2 pl-12" />
              </div>

              {/* Approach */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12" />
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-400/60 rounded-full border-4 border-black" />
                </div>
                <div className="w-1/2 pl-12">
                  <div className="inline-block p-8 rounded-lg bg-gradient-to-r from-blue-900/20 to-transparent border-l border-blue-500/20">
                    <h3 className="text-2xl font-light text-blue-200 mb-4 tracking-wide">Approach</h3>
                    <p className="text-gray-300 font-light leading-relaxed">
                      Every project begins with understanding. Understanding the user, 
                      the problem, and the potential for something extraordinary.
                    </p>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="inline-block p-8 rounded-lg bg-gradient-to-l from-purple-900/20 to-transparent border-r border-purple-500/20">
                    <h3 className="text-2xl font-light text-purple-200 mb-4 tracking-wide">Values</h3>
                    <p className="text-gray-300 font-light leading-relaxed">
                      Quality over quantity. Simplicity over complexity. 
                      User satisfaction over personal preference.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 bg-purple-400/60 rounded-full border-4 border-black" />
                </div>
                <div className="w-1/2 pl-12" />
              </div>
            </div>
          </div>

          {/* Skills showcase */}
          <div className="mt-24 text-center">
            <h3 className="text-3xl font-extralight text-gray-200 mb-12 tracking-wider">Toolkit</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'TypeScript', 'Node.js', 'PostgreSQL', 
                'AWS', 'Docker', 'Figma', 'Git'
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/40 to-purple-900/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-gray-300 font-light tracking-wide">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVariant2;
