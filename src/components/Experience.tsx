import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Scientist",
      company: "iAssist Innovations Labs",
      period: "Apr 2024 – May 2025",
      description: "Led mICRa product enhancement for ICICI Lombard, automating monitoring, integrating new features, and optimizing reporting with Pandas and Python. Reduced reporting time from 15 to 6 hours via time scheduling, parallel processing, and multithreading. Migrated legacy monolith to scalable, dockerized microservices architecture. Improved prediction accuracy by refining algorithms and data preprocessing.",
      skills: ["Python", "Flask", "ICR/OCR", "Pandas", "Microservices", "Docker", "Machine Learning", "Model Optimization"]
    },
    {
      title: "Data Scientist Intern",
      company: "Exposys Data Labs",
      period: "Apr 2024 – May 2024",
      description: "Built predictive models for company profits using advanced regression (Linear, Lasso, Ridge, Decision Tree, Random Forest, SVR). Performed EDA, feature engineering, and data visualization (Pandas, NumPy, Seaborn, Matplotlib). Achieved 97.95% accuracy (Linear Regression, MSE, MAE, R²). Deployed models with Streamlit and Flask for real-time prediction; automated ML pipelines for scalable analytics.",
      skills: ["Python", "Scikit-Learn", "Streamlit", "Flask", "Model Deployment", "ML Pipelines"]
    },
    {
      title: "ML Intern",
      company: "CSIR - CSIO, Chandigarh",
      period: "Jul 2023 – Sep 2023",
      description: "Developed AI Car Assistant for vehicle acceleration prediction using Multiple Linear Regression and cross-validation (R² = 0.9574). Applied data mining, visualization, and preprocessing on real-time series datasets.",
      skills: ["Python", "Regression", "Data Mining", "EDA", "Model Evaluation"]
    },
    {
      title: "Android Developer Intern",
      company: "OOHR Innovations, UIET KUK",
      period: "Apr 2023 – Aug 2023",
      description: "Developed driver's app, designed workflows, and contributed to UI/UX using Kotlin, XML, and Figma.",
      skills: ["Android Development", "Mobile App Development", "UI/UX Design", "Figma"]
    },
    {
      title: "Subject Matter Expert (Mathematics)",
      company: "Shadovein",
      period: "May 2021 – Sep 2021",
      description: "Provided mathematical solutions for real-world problems; gained experience in documentation and content management.",
      skills: ["Mathematics", "Quantitative Analysis", "MS Office", "CMS"]
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
