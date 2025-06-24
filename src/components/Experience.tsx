
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Co.",
      period: "2022 - Present",
      description: "Leading development of AI-powered web applications using React, Node.js, and Python. Implemented machine learning models for user behavior prediction with focus on elegant, scalable solutions.",
      skills: ["React", "Node.js", "Python", "AI/ML", "PostgreSQL"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2021 - 2022",
      description: "Developed responsive web applications and mobile experiences. Collaborated closely with design teams to create intuitive, beautiful user interfaces that prioritize user experience.",
      skills: ["React", "TypeScript", "Tailwind CSS", "React Native"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2020 - 2021",
      description: "Built and maintained web applications in fast-paced startup environment. Gained comprehensive experience in full-stack development and agile methodologies.",
      skills: ["JavaScript", "HTML/CSS", "Express.js", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Elegant section heading */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-extralight mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-gray-200 via-purple-200 to-gray-200 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mx-auto" />
          </div>

          {/* Refined timeline */}
          <div className="relative">
            {/* Elegant timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400/30 via-purple-400/60 to-purple-400/30 transform lg:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-20 ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'}`}>
                {/* Refined timeline dot */}
                <div className="absolute left-8 lg:left-1/2 w-3 h-3 bg-purple-400 rounded-full transform lg:-translate-x-1/2 -translate-y-1/2 top-8 shadow-lg shadow-purple-400/50" />
                
                {/* Elegant content card */}
                <div className={`ml-20 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}`}>
                  <div className="p-8 rounded-lg bg-gradient-to-br from-gray-900/40 to-purple-900/10 border border-purple-500/20 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 backdrop-blur-sm group">
                    <div className="flex flex-wrap items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-light text-white mb-2 tracking-wide group-hover:text-purple-200 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-purple-300 font-light text-lg">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 font-light tracking-wide text-sm bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed font-light text-lg">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600/20 to-purple-600/10 border border-purple-500/20 rounded-full text-purple-200 font-light tracking-wide hover:border-purple-400/40 transition-colors duration-300"
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
