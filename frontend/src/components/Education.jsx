import React from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = ({ id, data }) => {
  return (
    <section id={id} className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">azeem@developer:~$</span> ./education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Bachelor's Degree */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-8 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-mono text-blue-400 text-sm">~/education/bachelor.json</span>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-cyan-400 mt-1">
                <GraduationCap className="w-8 h-8" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{data.degree}</h3>
                <h4 className="text-xl text-cyan-400 mb-4 font-mono">{data.institution}</h4>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{data.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{data.location}</span>
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                  <h5 className="text-white font-semibold mb-2 font-mono">Key Focus Areas:</h5>
                  <ul className="text-gray-300 space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Full Stack Web Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Data Structures & Algorithms</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Software Engineering Principles</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Database Management Systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Intermediate */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-8 hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-mono text-green-400 text-sm">~/education/intermediate.json</span>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-green-400 mt-1">
                <GraduationCap className="w-8 h-8" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{data.intermediate.degree}</h3>
                <h4 className="text-xl text-green-400 mb-4 font-mono">{data.intermediate.institution}</h4>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{data.intermediate.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{data.intermediate.location}</span>
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                  <h5 className="text-white font-semibold mb-2 font-mono">Foundation Subjects:</h5>
                  <ul className="text-gray-300 space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Computer Science Fundamentals</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Programming Logic</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Mathematics & Statistics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Physics & Electronics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center font-mono">
            <span className="text-cyan-400">#</span> Certifications & Training
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Google Certification */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-mono text-purple-400 text-sm">~/certifications/google.cert</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-purple-400 mt-1">
                  <Award className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">Google HTML & CSS in Depth</h4>
                  <p className="text-purple-400 font-mono text-sm mb-2">Coursera</p>
                  <p className="text-gray-400 text-sm">Dec 2023</p>
                </div>
              </div>
            </div>

            {/* Self-Learning */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="font-mono text-yellow-400 text-sm">~/learning/self_taught.log</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-yellow-400 mt-1">
                  <Award className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">Self-Taught Technologies</h4>
                  <p className="text-yellow-400 font-mono text-sm mb-2">Continuous Learning</p>
                  <p className="text-gray-400 text-sm">Laravel, Angular, AI Integration</p>
                </div>
              </div>
            </div>

            {/* Industry Recognition */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="font-mono text-pink-400 text-sm">~/achievements/recognition.txt</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-pink-400 mt-1">
                  <Award className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2">Top Faculty Project</h4>
                  <p className="text-pink-400 font-mono text-sm mb-2">QAU Recognition</p>
                  <p className="text-gray-400 text-sm">School Management System</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center font-mono">
            <span className="text-cyan-400">#</span> Learning Philosophy
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-cyan-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                <span className="text-2xl font-bold text-cyan-400 font-mono">C</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Continuous</h4>
              <p className="text-gray-400 text-sm">Always learning new technologies and staying updated with industry trends</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                <span className="text-2xl font-bold text-blue-400 font-mono">P</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Practical</h4>
              <p className="text-gray-400 text-sm">Learning through hands-on projects and real-world applications</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                <span className="text-2xl font-bold text-green-400 font-mono">S</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Sharing</h4>
              <p className="text-gray-400 text-sm">Mentoring team members and sharing knowledge to grow together</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;