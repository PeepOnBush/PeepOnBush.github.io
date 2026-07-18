import { useState } from 'react';
import { aboutMe, myProjects } from './portfolioData';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filterTech, setFilterTech] = useState('All');

  const filteredProjects = myProjects.filter((project) => {
    if (filterTech === 'All') return true;
    return project.techStack.includes(filterTech);
  });

  return (
    // The "dark" class triggers Tailwind's dark mode styling
    <div className={isDarkMode ? 'dark' : ''}>
      {/* Main Background & Text Colors */}
      <div className="min-h-screen transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans">
        
        {/* Centered Container */}
        <div className="max-w-4xl mx-auto p-8">
          
          {/* Header Section */}
          <header className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">{aboutMe.name}</h1>
              <h2 className="text-xl font-medium mt-2 text-gray-600 dark:text-gray-400">{aboutMe.role}</h2>
            </div>
            
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="px-4 py-2 rounded-lg font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition"
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </header>

          <p className="text-lg leading-relaxed mb-12">{aboutMe.bio}</p>

          {/* Projects Section */}
          <section>
            <h3 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-6 inline-block">My Projects</h3>

            {/* Filters */}
            <div className="flex gap-3 mb-8">
              {['All', 'React', 'Python', 'Docker'].map((tech) => (
                <button 
                  key={tech}
                  onClick={() => setFilterTech(tech)}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                    filterTech === tech 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.length === 0 ? (
                <p className="text-gray-500 italic">No projects found with this tech!</p>
              ) : (
                filteredProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                  >
                    <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-bold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                    >
                      View on GitHub ↗
                    </a>
                  </div>
                ))
              )}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default App;