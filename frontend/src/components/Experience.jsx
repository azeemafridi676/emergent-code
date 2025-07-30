import React, { useState } from "react";
import { Calendar, MapPin, Users, ChevronRight, ExternalLink } from "lucide-react";

const Experience = ({ id, data }) => {
  const [selectedJob, setSelectedJob] = useState(0);

  return (
    <section id={id} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">azeem@developer:~$</span> ./experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company Selector */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="font-mono text-yellow-400 text-sm">~/experience/companies</span>
              </div>
              
              <div className="space-y-2">
                {data.map((job, index) => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJob(index)}
                    className={`w-full text-left p-3 rounded-md transition-all duration-300 font-mono text-sm ${
                      selectedJob === index
                        ? "bg-cyan-900/50 text-cyan-400 border border-cyan-400/30"
                        : "text-gray-400 hover:text-cyan-400 hover:bg-gray-700/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{job.company}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                        selectedJob === index ? "rotate-90" : ""
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="lg:col-span-2">
            {data[selectedJob] && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-mono text-green-400 text-sm">~/experience/{data[selectedJob].company.toLowerCase().replace(/\s+/g, '_')}.json</span>
                </div>

                {/* Job Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {data[selectedJob].title}
                  </h3>
                  <h4 className="text-xl text-cyan-400 mb-4 font-mono">
                    @ {data[selectedJob].company}
                  </h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{data[selectedJob].duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{data[selectedJob].location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{data[selectedJob].type}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-4 font-mono">
                    <span className="text-cyan-400">></span> Key Achievements:
                  </h5>
                  <ul className="space-y-3">
                    {data[selectedJob].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-lg font-semibold text-white mb-4 font-mono">
                    <span className="text-cyan-400">></span> Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {data[selectedJob].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="mt-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">
              <span className="text-cyan-400">#</span> Career Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-blue-400 h-full"></div>
              
              <div className="space-y-12">
                {data.map((job, index) => (
                  <div key={job.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors duration-300">
                        <h4 className="font-bold text-white text-lg">{job.title}</h4>
                        <p className="text-cyan-400 font-mono">{job.company}</p>
                        <p className="text-gray-400 text-sm">{job.duration}</p>
                      </div>
                    </div>
                    
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 relative z-10"></div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;