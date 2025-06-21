
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies and AI integration. 
                I love creating innovative solutions that bridge the gap between cutting-edge technology and user experience.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech started with a curiosity about how things work, and has evolved into a deep 
                understanding of both frontend and backend development, with a special focus on AI-powered applications.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-400">What I Do:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Full Stack Web Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    AI Integration & Machine Learning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    UI/UX Design & Prototyping
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    Mobile App Development
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats or highlights */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Projects Done</div>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                  <div className="text-gray-300">Technologies</div>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                  <div className="text-gray-300">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
