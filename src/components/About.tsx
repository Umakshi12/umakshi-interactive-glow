
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Elegant section heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-gray-200 via-purple-200 to-gray-200 bg-clip-text text-transparent">
                About
              </span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mx-auto" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                I'm a passionate developer who believes in the power of elegant code and thoughtful design. 
                My approach combines technical excellence with creative vision.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                With expertise spanning modern web technologies and AI integration, I create solutions 
                that are both innovative and timeless. Every project is an opportunity to push boundaries 
                while maintaining simplicity and sophistication.
              </p>

              <div className="space-y-6 pt-4">
                <h3 className="text-2xl font-light text-purple-300 tracking-wide">Expertise</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Full Stack Development',
                    'AI Integration & Machine Learning',
                    'UI/UX Design & Strategy',
                    'Mobile Application Development'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="w-2 h-2 bg-purple-400/60 rounded-full mr-4 group-hover:bg-purple-400 transition-colors duration-300" />
                      <span className="text-gray-300 font-light tracking-wide group-hover:text-gray-200 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Elegant stats */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: '3+', label: 'Years Experience' },
                  { number: '50+', label: 'Projects Completed' },
                  { number: '20+', label: 'Technologies' },
                  { number: '100%', label: 'Commitment' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-8 rounded-lg bg-gradient-to-br from-gray-900/30 to-purple-900/10 border border-purple-500/10 hover:border-purple-400/20 transition-all duration-500 hover:scale-105 backdrop-blur-sm group"
                  >
                    <div className="text-4xl font-extralight text-purple-300 mb-3 group-hover:text-purple-200 transition-colors duration-300 tracking-wider">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 font-light text-sm tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center pt-8">
                <p className="text-gray-500 font-light italic tracking-wide">
                  "Perfection is achieved not when there is nothing more to add, 
                  but when there is nothing left to take away."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
