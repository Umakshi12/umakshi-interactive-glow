
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Co.",
      period: "2022 - Present",
      description: "Leading development of AI-powered web applications using React, Node.js, and Python. Implemented machine learning models for user behavior prediction.",
      skills: ["React", "Node.js", "Python", "AI/ML", "PostgreSQL"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2021 - 2022",
      description: "Developed responsive web applications and mobile apps. Collaborated with UX designers to create intuitive user interfaces.",
      skills: ["React", "TypeScript", "Tailwind CSS", "React Native"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2020 - 2021",
      description: "Built and maintained web applications. Gained experience in full-stack development and agile methodologies.",
      skills: ["JavaScript", "HTML/CSS", "Express.js", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform md:-translate-x-1/2 -translate-y-1/2 top-6"></div>
                
                {/* Content card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-purple-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-cyan-400 font-medium">{exp.period}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border border-purple-500/30 rounded-full text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
