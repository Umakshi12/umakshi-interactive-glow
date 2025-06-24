
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = {
    "Frontend": [
      { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
      { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
      { name: "Next.js", level: 80, color: "from-gray-700 to-gray-500" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-teal-500" },
      { name: "React Native", level: 75, color: "from-purple-500 to-pink-500" }
    ],
    "Backend": [
      { name: "Node.js", level: 88, color: "from-green-600 to-green-400" },
      { name: "Python", level: 82, color: "from-yellow-500 to-orange-500" },
      { name: "Express.js", level: 85, color: "from-gray-600 to-gray-400" },
      { name: "PostgreSQL", level: 80, color: "from-blue-700 to-blue-500" },
      { name: "MongoDB", level: 78, color: "from-green-700 to-green-500" }
    ],
    "AI/ML": [
      { name: "TensorFlow", level: 75, color: "from-orange-600 to-red-500" },
      { name: "OpenAI API", level: 88, color: "from-purple-600 to-purple-400" },
      { name: "Hugging Face", level: 70, color: "from-yellow-600 to-orange-400" },
      { name: "Python ML", level: 80, color: "from-blue-600 to-purple-500" },
      { name: "Data Analysis", level: 85, color: "from-indigo-600 to-purple-500" }
    ],
    "Tools & Others": [
      { name: "Git", level: 90, color: "from-red-600 to-red-400" },
      { name: "Docker", level: 75, color: "from-blue-500 to-cyan-400" },
      { name: "AWS", level: 70, color: "from-orange-500 to-yellow-400" },
      { name: "Firebase", level: 85, color: "from-yellow-500 to-red-500" },
      { name: "Figma", level: 80, color: "from-purple-500 to-pink-400" }
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
            <h2 className="text-6xl md:text-7xl font-extralight mb-8 tracking-widest">
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
