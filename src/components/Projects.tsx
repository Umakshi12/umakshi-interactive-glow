
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "A complete e-commerce solution with AI-driven product recommendations, inventory management, and customer analytics.",
      tech: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL"],
      status: "Live",
      image: "🛒"
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable chat application with real-time messaging, file sharing, and video calls using WebRTC.",
      tech: ["React", "Socket.io", "Express", "MongoDB", "WebRTC"],
      status: "Live",
      image: "💬"
    },
    {
      title: "Task Management Dashboard",
      description: "Comprehensive project management tool with team collaboration, time tracking, and analytics.",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      status: "In Progress",
      image: "📊"
    },
    {
      title: "Portfolio Website Generator",
      description: "AI-powered tool that generates personalized portfolio websites based on user data and preferences.",
      tech: ["Next.js", "OpenAI API", "Prisma", "Tailwind CSS"],
      status: "Completed",
      image: "🎨"
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for fitness tracking with workout plans and nutrition guidance.",
      tech: ["React Native", "Firebase", "HealthKit", "Redux"],
      status: "Live",
      image: "💪"
    },
    {
      title: "Smart Home IoT Dashboard",
      description: "IoT dashboard for controlling and monitoring smart home devices with voice commands and automation.",
      tech: ["React", "IoT", "AWS", "Voice API"],
      status: "Prototype",
      image: "🏠"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm cursor-pointer"
              >
                {/* Project icon */}
                <div className="text-4xl mb-4 text-center">{project.image}</div>
                
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    project.status === 'Completed' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/20 rounded text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
