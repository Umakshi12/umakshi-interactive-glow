import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = {
    "Programming Languages": [
      { name: "Python", level: 95, color: "from-yellow-500 to-orange-500" },
      { name: "C/C++", level: 80, color: "from-blue-700 to-blue-400" }
    ],
    "Libraries & Frameworks": [
      { name: "Pandas", level: 90, color: "from-green-600 to-green-400" },
      { name: "Scikit-Learn", level: 88, color: "from-blue-600 to-purple-500" },
      { name: "Flask", level: 85, color: "from-gray-600 to-gray-400" },
      { name: "Matplotlib", level: 80, color: "from-orange-600 to-red-500" },
      { name: "Streamlit", level: 80, color: "from-pink-500 to-purple-400" },
      { name: "TensorFlow", level: 75, color: "from-orange-600 to-red-500" },
      { name: "Keras", level: 75, color: "from-pink-600 to-red-400" },
      { name: "CNN", level: 70, color: "from-purple-600 to-purple-400" },
      { name: "LangChain", level: 70, color: "from-blue-500 to-cyan-500" },
      { name: "LangGraph", level: 65, color: "from-gray-700 to-gray-500" }
    ],
    "Prompt Engineering & Agentic AI": [
      { name: "One shot prompting", level: 85, color: "from-purple-500 to-blue-400" },
      { name: "Few shot prompting", level: 80, color: "from-pink-500 to-yellow-400" },
      { name: "DeepSeek r1", level: 70, color: "from-blue-400 to-blue-200" },
      { name: "Chain-of-Thought (CoT)", level: 70, color: "from-purple-400 to-purple-200" },
      { name: "Make.com", level: 70, color: "from-green-500 to-green-300" },
      { name: "n8n", level: 65, color: "from-orange-400 to-yellow-300" },
      { name: "Multi-modal AI", level: 65, color: "from-cyan-400 to-blue-300" }
    ],
    "Tools & Databases": [
      { name: "Docker", level: 80, color: "from-blue-500 to-cyan-400" },
      { name: "COMSOL", level: 70, color: "from-blue-600 to-blue-300" },
      { name: "Android Studio", level: 70, color: "from-green-700 to-green-500" },
      { name: "Figma", level: 70, color: "from-purple-500 to-pink-400" },
      { name: "MS Office", level: 80, color: "from-blue-400 to-blue-200" },
      { name: "MySQL", level: 75, color: "from-blue-700 to-blue-500" }
    ]
  };

  return (
    <section id="techstack" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <h2 className="text-5xl md:text-6xl font-extralight mb-6 tracking-wider">
            {/* <h2 className="text-6xl md:text-7xl font-extralight mb-8 tracking-widest"> */}

              <span className="bg-gradient-to-r from-purple-100 via-gray-100 to-purple-100 bg-clip-text text-transparent">
                SKILLS
              </span>
            </h2>
            <div className="flex justify-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
              <div className="w-2 h-2 bg-purple-400/60 rounded-full mt-[-4px]" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
            </div>
          </div>

          {/* Technologies grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, techs], categoryIndex) => (
              <div 
                key={category}
                className={`group relative transition-all duration-700 ${
                  inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
                onMouseEnter={() => setSelectedCategory(category)}
                onMouseLeave={() => setSelectedCategory(null)}
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${
                  selectedCategory === category ? 'scale-105 shadow-2xl shadow-purple-500/20' : ''
                }`}>
                  {/* Category title */}
                  <h3 className="text-xl font-light text-purple-300 mb-6 text-center tracking-wide">
                    {category}
                  </h3>

                  {/* Tech list */}
                  <div className="space-y-4">
                    {techs.map((tech, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-light text-sm">{tech.name}</span>
                          <span className="text-purple-300 text-xs font-light">{tech.level}%</span>
                        </div>
                        
                        {/* Animated progress bar */}
                        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                            style={{ 
                              width: inView ? `${tech.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 200) + (index * 100)}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced legend */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'
          }`}>
            <p className="text-gray-300 text-lg mb-8 font-light">
              Continuously evolving skillset with passion for learning cutting-edge technologies
            </p>
            
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                <span>Expert (80%+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span>Proficient (60-80%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-gray-500 to-blue-500 rounded-full"></div>
                <span>Learning (&lt;60%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
