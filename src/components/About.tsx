import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Split skills into main and tools/databases
  const mainSkills = [
    'Python',
    'Machine Learning & Deep Learning',
    'Data Analysis & Visualization',
    'Prompt Engineering',
    'Microservices & Docker',
    'LLM Training & Fine-tuning',
    'AI Agent Development',
    'Pandas, Scikit-Learn, TensorFlow, Keras',
    'LangChain, LangGraph, Crew.ai',
  ];
  const toolsAndDatabases = [
    'Streamlit',
    'Flask',
    'MySQL',
    'C/C++',
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
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
            opacity="0.18"
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
            opacity="0.13"
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
          {/* Minimalist heading with floating elements */}
          <div className={`text-center mb-24 relative transition-all duration-1000 ${
            inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-700 rounded-full animate-pulse" />
            <h2 className="text-7xl md:text-8xl font-extralight mb-8 tracking-widest">
              <span className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                ABOUT
              </span>
            </h2>
            <div className="flex justify-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-700 to-transparent" />
              <div className="w-2 h-2 bg-yellow-700 rounded-full mt-[-4px]" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-700 to-transparent" />
            </div>
          </div>

          {/* Asymmetric layout */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Large text block */}
            <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
            }`}>
              <p className="text-2xl md:text-3xl text-black leading-relaxed font-extralight tracking-wide">
                Results-driven <span className="text-yellow-800 font-light">AI Scientist</span> and <span className="text-yellow-800 font-light">Data Scientist</span> passionate about leveraging AI to solve real-world problems. Experienced in machine learning, data analysis, model deployment, and microservices architecture. Proficient in Python, ML frameworks, and prompt engineering. Eager to explore opportunities in LLM training, fine-tuning, and AI agent development.
              </p>
              
              <p className="text-lg text-neutral-800 leading-loose font-light max-w-3xl">
                Worked as an AI Scientist at iAssist Innovations Labs, with hands-on experience in automating processes, optimizing models, and developing scalable AI solutions. Let's connect to discuss innovative AI solutions or collaborations in the field of artificial intelligence.
              </p>

              {/* Philosophy cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                {[
                  { title: 'AI Philosophy', desc: 'AI should empower and augment human potential.' },
                  { title: 'Code Philosophy', desc: 'Clean, scalable, and maintainable code for robust AI systems.' },
                  { title: 'Growth Philosophy', desc: 'Continuous learning and adaptation in the fast-evolving AI landscape.' },
                  { title: 'Collaboration', desc: 'Open to teamwork and knowledge sharing for impactful solutions.' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-6 rounded-lg bg-gradient-to-br from-white/80 to-yellow-50/60 border border-yellow-400/80 hover:border-yellow-700 transition-all duration-500 group hover:scale-105 hover:shadow-lg hover:shadow-yellow-200/20 shadow-md cursor-pointer ${
                      inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
                    }`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <h4 className="text-yellow-800 font-light text-sm tracking-wider uppercase mb-2 group-hover:text-yellow-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-black font-light">
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
                <h3 className="text-3xl font-extralight text-yellow-800 tracking-wider mb-8">Expertise</h3>
                <div className="space-y-4">
                  {mainSkills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between group">
                      <span className="text-black font-light tracking-wide group-hover:text-yellow-800 transition-colors">
                        {skill}
                      </span>
                      <div className="w-8 h-px bg-gradient-to-r from-yellow-300/40 to-transparent group-hover:from-yellow-400/60 transition-colors" />
                    </div>
                  ))}
                </div>
                <h4 className="text-xl font-extralight text-yellow-700 tracking-wider mt-10 mb-4">Tools & Databases</h4>
                <div className="space-y-2">
                  {toolsAndDatabases.map((tool, index) => (
                    <div key={index} className="flex items-center justify-between group">
                      <span className="text-black font-light tracking-wide group-hover:text-yellow-800 transition-colors">
                        {tool}
                      </span>
                      <div className="w-8 h-px bg-gradient-to-r from-yellow-200/40 to-transparent group-hover:from-yellow-300/60 transition-colors" />
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
