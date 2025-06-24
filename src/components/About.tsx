
import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Minimalist heading with floating elements */}
          <div className={`text-center mb-24 relative transition-all duration-1000 ${
            inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" />
            <h2 className="text-7xl md:text-8xl font-extralight mb-8 tracking-widest">
              <span className="bg-gradient-to-r from-purple-100 via-gray-100 to-purple-100 bg-clip-text text-transparent">
                ABOUT
              </span>
            </h2>
            <div className="flex justify-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
              <div className="w-2 h-2 bg-purple-400/60 rounded-full mt-[-4px]" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
            </div>
          </div>

          {/* Asymmetric layout */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Large text block */}
            <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
            }`}>
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-extralight tracking-wide">
                Passionate about creating digital experiences that blend 
                <span className="text-purple-300 font-light"> aesthetic beauty </span>
                with 
                <span className="text-purple-300 font-light"> functional excellence</span>.
              </p>
              
              <p className="text-lg text-gray-400 leading-loose font-light max-w-3xl">
                Every line of code is crafted with intention. Every design decision serves a purpose. 
                I believe in the philosophy that true innovation emerges from the intersection of 
                simplicity and sophistication.
              </p>

              {/* Philosophy cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                {[
                  { title: 'Design Philosophy', desc: 'Less is more, but better' },
                  { title: 'Code Philosophy', desc: 'Clean, elegant, maintainable' },
                  { title: 'User Philosophy', desc: 'Intuitive and delightful' },
                  { title: 'Growth Philosophy', desc: 'Always learning, always improving' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-6 rounded-lg bg-gradient-to-br from-gray-900/20 to-purple-900/5 border border-purple-500/10 hover:border-purple-400/20 transition-all duration-500 group hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 ${
                      inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
                    }`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <h4 className="text-purple-300 font-light text-sm tracking-wider uppercase mb-2 group-hover:text-purple-200 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar with skills */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${
              inView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
            }`}>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-extralight text-purple-200 tracking-wider mb-8">Expertise</h3>
                <div className="space-y-4">
                  {[
                    'React & Next.js',
                    'TypeScript',
                    'Node.js & Express',
                    'PostgreSQL & MongoDB',
                    'AWS & Docker',
                    'UI/UX Design'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center justify-between group">
                      <span className="text-gray-300 font-light tracking-wide group-hover:text-purple-200 transition-colors">
                        {skill}
                      </span>
                      <div className="w-8 h-px bg-gradient-to-r from-purple-400/40 to-transparent group-hover:from-purple-400/60 transition-colors" />
                    </div>
                  ))}
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
