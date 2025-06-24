
import React from 'react';

const AboutVariant3 = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Magazine-style layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left column - Large typography */}
            <div>
              <div className="sticky top-32">
                <h2 className="text-8xl md:text-9xl font-extralight leading-none tracking-tight mb-8">
                  <span className="block text-gray-800">AB</span>
                  <span className="block text-purple-300 -mt-4">OUT</span>
                </h2>
                <div className="w-24 h-px bg-purple-400/60 mb-8" />
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                  Where creativity meets functionality, 
                  and ideas transform into reality.
                </p>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="space-y-12">
              {/* Introduction */}
              <div className="space-y-6">
                <p className="text-2xl text-gray-200 font-light leading-relaxed">
                  I'm a developer who believes that the best solutions often come from 
                  the most <em className="text-purple-300 not-italic">elegant</em> approaches.
                </p>
                
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  With a background spanning full-stack development and design, 
                  I specialize in creating applications that feel as good as they function. 
                  Every project is an opportunity to push the boundaries of what's possible 
                  while maintaining the clarity that users deserve.
                </p>
              </div>

              {/* Specialty areas */}
              <div className="space-y-8">
                <h3 className="text-2xl font-light text-purple-200 tracking-wide">Specialties</h3>
                
                {[
                  {
                    area: 'Frontend Excellence',
                    description: 'React, TypeScript, and modern CSS for pixel-perfect interfaces',
                    accent: 'purple'
                  },
                  {
                    area: 'Backend Architecture',
                    description: 'Scalable APIs and database design with Node.js and PostgreSQL',
                    accent: 'blue'
                  },
                  {
                    area: 'User Experience',
                    description: 'Research-driven design decisions that prioritize user needs',
                    accent: 'purple'
                  }
                ].map((specialty, index) => (
                  <div key={index} className="border-l-2 border-purple-500/20 pl-6 hover:border-purple-400/40 transition-colors duration-300 group">
                    <h4 className={`text-lg font-light ${specialty.accent === 'purple' ? 'text-purple-300' : 'text-blue-300'} mb-2 group-hover:text-white transition-colors`}>
                      {specialty.area}
                    </h4>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats in elegant cards */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {[
                  { metric: '3+', label: 'Years of dedicated craft' },
                  { metric: '50+', label: 'Projects brought to life' },
                  { metric: '∞', label: 'Passion for perfection' },
                  { metric: '24/7', label: 'Commitment to quality' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 group">
                    <div className="text-4xl font-extralight text-purple-300 mb-2 group-hover:text-purple-200 transition-colors">
                      {stat.metric}
                    </div>
                    <div className="text-sm text-gray-500 font-light tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVariant3;
