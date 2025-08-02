import React, { useState } from "react";
import { ExternalLink, Github, Code, Zap, Database, Globe, Eye } from "lucide-react";

const Projects = ({ id, data }) => {
  const [selectedProject, setSelectedProject] = useState(0);
  
  const getProjectIcon = (technologies) => {
    if (technologies.some(tech => tech.includes('MongoDB') || tech.includes('MySQL'))) return <Database className="w-6 h-6" />;
    if (technologies.some(tech => tech.includes('Angular') || tech.includes('React'))) return <Globe className="w-6 h-6" />;
    if (technologies.some(tech => tech.includes('Node.js') || tech.includes('Express'))) return <Zap className="w-6 h-6" />;
    return <Code className="w-6 h-6" />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Live': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Deployed': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'Completed': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const openProjectDetails = (projectId) => {
    window.open(`/project/${projectId}`, '_blank');
  };

  return (
    <section id={id} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">azeem@developer:~$</span> ./projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Project Selector */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 sticky top-24">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-mono text-purple-400 text-sm">~/projects/list</span>
              </div>
              
              <div className="space-y-2">
                {data.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(index)}
                    className={`w-full text-left p-3 rounded-md transition-all duration-300 group ${
                      selectedProject === index
                        ? "bg-cyan-900/50 text-cyan-400 border border-cyan-400/30"
                        : "text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {/* Project Thumbnail */}
                      <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 border border-gray-600">
                        <img 
                          src={project.thumbnail_image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-sm font-semibold truncate">{project.title}</div>
                        <div className="text-xs opacity-75 truncate">{project.technologies[0]}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-3">
            {data[selectedProject] && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-mono text-green-400 text-sm">
                    ~/projects/{data[selectedProject].title.toLowerCase().replace(/\s+/g, '_')}/README.md
                  </span>
                </div>
                
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-cyan-400">
                        {getProjectIcon(data[selectedProject].technologies)}
                      </div>
                      <h3 className="text-3xl font-bold text-white">
                        {data[selectedProject].title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      {data[selectedProject].description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-3 lg:ml-8">
                    <span className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(data[selectedProject].status)}`}>
                      {data[selectedProject].status}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-300 text-gray-300 hover:text-white">
                        <Github className="w-5 h-5" />
                      </button>
                      <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-300 text-gray-300 hover:text-white">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Details Button */}
                    <button 
                      onClick={() => openProjectDetails(data[selectedProject].id)}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-md transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
                    >
                      <Eye className="w-5 h-5" />
                      <span className="font-mono">VIEW DETAILS</span>
                    </button>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 font-mono">
                    <span className="text-cyan-400">></span> Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data[selectedProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 font-mono">
                    <span className="text-cyan-400">></span> Key Features:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {data[selectedProject].features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
                  <h4 className="text-lg font-semibold text-white mb-3 font-mono">
                    <span className="text-cyan-400">#</span> Project Impact:
                  </h4>
                  <p className="text-cyan-400 font-semibold text-lg">{data[selectedProject].impact}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">5</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2 font-mono">3</div>
            <div className="text-gray-300">Currently Live</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2 font-mono">7+</div>
            <div className="text-gray-300">Technologies Used</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;