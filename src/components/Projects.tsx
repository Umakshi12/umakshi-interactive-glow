import React from 'react';

// Define the type for a project object coming from the GitHub API
interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[]; // We'll use topics as the tech stack
}

// The component now accepts the 'projects' prop from your main page
const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Your background styles remain unchanged */}
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
            opacity="0.13"
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
            opacity="0.10"
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
          {/* Section heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Grid layout now maps over the 'projects' prop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects && projects.length > 0 ? (
              projects.map((project, index) => (
                // The entire card is now a link to the GitHub repo
                <a
                  key={project.id}
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between items-center w-full min-h-[320px] p-5 rounded-lg bg-gradient-to-br from-white/80 to-yellow-50/60 border border-yellow-100/80 hover:border-yellow-200/90 transition-all duration-300 hover:scale-105 shadow-md cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Default project icon */}
                  <div className="text-4xl mb-4 text-center">📂</div>

                  {/* Project Title from GitHub repo name */}
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yellow-700 transition-colors text-center">
                    {project.name.replace(/[-_]/g, ' ')} {/* Replaces dashes/underscores with spaces */}
                  </h3>

                  {/* Project Description from GitHub */}
                  <p className="text-neutral-800 mb-4 leading-relaxed text-sm text-center break-words">
                    {project.description}
                  </p>

                  {/* Tech stack from GitHub topics */}
                  <div className="flex flex-wrap gap-1 mb-4 justify-center">
                    {project.topics.map((topic, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-200/40 to-yellow-50/40 border border-yellow-200/40 rounded text-yellow-800"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 to-yellow-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </a>
              ))
            ) : (
              // Message to show if no projects with the 'portfolio' topic are found
              <p className="text-center col-span-full text-yellow-800">
                No projects found. Go tag some on GitHub!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


// const Projects = () => {
//   const projects = [
//     {
//       title: "Umakshi Interactive Glow (Portfolio Website)",
//       description: "A modern, interactive portfolio website to showcase my skills, experience, and projects in AI, data science, and web development. Features animated hero section, custom cursor, responsive design, and interactive UI elements.",
//       tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
//       status: "Live",
//       image: "💡"
//     },
//     {
//       title: "DRY HERBS – Ayurvedic Herbs Classifier",
//       description: "Collaborated with a PhD scholar to classify Ayurvedic herbs using computer vision (CNN, Django API). Managed dataset collection, preprocessing, augmentation, and model deployment.",
//       tech: ["Python", "CNN", "Django", "Computer Vision", "Data Augmentation"],
//       status: "Major Project",
//       image: "🌿"
//     },
//     {
//       title: "Piezoelectric Energy Harvester (COMSOL)",
//       description: "Modeled and simulated a piezoelectric energy harvesting system using COMSOL Multiphysics. Conducted finite element analysis for design optimization.",
//       tech: ["COMSOL", "Simulation", "Finite Element Analysis"],
//       status: "Minor Project",
//       image: "⚡"
//     },
//     {
//       title: "Smart Energy Meter (Arduino)",
//       description: "Designed and developed a smart energy meter system using Arduino UNO, LED display, and optocoupler for accurate monitoring.",
//       tech: ["Arduino", "Embedded Systems", "Electronics"],
//       status: "Mini Project",
//       image: "🔌"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       {/* Creamy radial gradient background */}
//       <div className="absolute inset-0 z-0" aria-hidden="true">
//         <div
//           style={{
//             width: '100%',
//             height: '100%',
//             position: 'absolute',
//             background: 'radial-gradient(circle at 50% 50%, #fffbe8 0%, #fdf6e3 60%, #f7ecd7 100%)',
//           }}
//         />
//         {/* Wavy SVG overlays */}
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 1440 320"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,160 C360,240 1080,80 1440,160 L1440,0 L0,0 Z"
//             fill="url(#wave1)"
//             opacity="0.13"
//           />
//           <defs>
//             <linearGradient id="wave1" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#f7ecd7" />
//               <stop offset="1" stopColor="#fffbe8" />
//             </linearGradient>
//           </defs>
//         </svg>
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 1440 320"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 1, transform: 'scaleY(-1)' }}
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
//             fill="url(#wave2)"
//             opacity="0.10"
//           />
//           <defs>
//             <linearGradient id="wave2" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#f7ecd7" />
//               <stop offset="1" stopColor="#fffbe8" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-6xl mx-auto">
//           {/* Section heading */}
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//             <span className="bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>

//           {/* Simple grid layout for projects */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <div 
//                 key={index}
//                 className="group relative flex flex-col justify-between items-center w-full min-h-[320px] p-5 rounded-lg bg-gradient-to-br from-white/80 to-yellow-50/60 border border-yellow-100/80 hover:border-yellow-200/90 transition-all duration-300 hover:scale-105 shadow-md cursor-pointer overflow-hidden"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 {/* Project icon */}
//                 <div className="text-4xl mb-4 text-center">{project.image}</div>
//                 {/* Status badge */}
//                 <div className="absolute top-4 right-4">
//                   <span className={`px-2 py-1 text-xs rounded-full font-medium ${
//                     project.status === 'Live' ? 'bg-green-500/20 text-green-700 border border-green-500/30' :
//                     project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-700 border border-yellow-500/30' :
//                     project.status === 'Completed' ? 'bg-blue-500/20 text-blue-700 border border-blue-500/30' :
//                     'bg-yellow-200/40 text-yellow-800 border border-yellow-200/60'
//                   }`}>
//                     {project.status}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yellow-700 transition-colors text-center">
//                   {project.title}
//                 </h3>
//                 <p className="text-neutral-800 mb-4 leading-relaxed text-sm text-center break-words">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-1 mb-4 justify-center">
//                   {project.tech.map((tech, techIndex) => (
//                     <span 
//                       key={techIndex}
//                       className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-200/40 to-yellow-50/40 border border-yellow-200/40 rounded text-yellow-800"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 to-yellow-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
