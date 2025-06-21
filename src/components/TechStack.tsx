
import React from 'react';

const TechStack = () => {
  const technologies = {
    "Frontend": [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "React Native", level: 75 }
    ],
    "Backend": [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "Express.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 78 }
    ],
    "AI/ML": [
      { name: "TensorFlow", level: 75 },
      { name: "OpenAI API", level: 88 },
      { name: "Hugging Face", level: 70 },
      { name: "Python ML", level: 80 },
      { name: "Data Analysis", level: 85 }
    ],
    "Tools & Others": [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Firebase", level: 85 },
      { name: "Figma", level: 80 }
    ]
  };

  return (
    <section id="techstack" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>

          {/* Technologies grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <div 
                key={category}
                className="p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Category title */}
                <h3 className="text-xl font-bold text-purple-400 mb-6 text-center">
                  {category}
                </h3>

                {/* Tech list */}
                <div className="space-y-4">
                  {techs.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{tech.name}</span>
                        <span className="text-cyan-400 text-sm">{tech.level}%</span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-1000 ease-out"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <p className="text-gray-300 text-lg mb-8">
              Always learning and exploring new technologies to stay at the forefront of innovation
            </p>
            
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                Expert Level (80%+)
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                Intermediate (60-80%)
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                Learning (60%-)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
