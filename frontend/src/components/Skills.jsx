import React, { useState } from "react";
import { Code, Database, Cloud, Tool, Zap, Brain } from "lucide-react";

const Skills = ({ id, data }) => {
  const [activeCategory, setActiveCategory] = useState("programmingLanguages");

  const skillCategories = [
    {
      key: "programmingLanguages",
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      items: data.programmingLanguages,
      color: "cyan"
    },
    {
      key: "frameworks",
      title: "Frameworks",
      icon: <Zap className="w-5 h-5" />,
      items: data.frameworks,
      color: "blue"
    },
    {
      key: "databases",
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      items: data.databases,
      color: "green"
    },
    {
      key: "tools",
      title: "Tools",
      icon: <Tool className="w-5 h-5" />,
      items: data.tools,
      color: "purple"
    },
    {
      key: "cloud",
      title: "Cloud & APIs",
      icon: <Cloud className="w-5 h-5" />,
      items: data.cloud,
      color: "yellow"
    },
    {
      key: "specialties",
      title: "Specialties",
      icon: <Brain className="w-5 h-5" />,
      items: data.specialties,
      color: "pink"
    }
  ];

  const getColorClasses = (color, isActive = false) => {
    const colors = {
      cyan: isActive ? "text-cyan-400 bg-cyan-400/10 border-cyan-400/30" : "text-cyan-400 bg-cyan-400/5 border-cyan-400/20",
      blue: isActive ? "text-blue-400 bg-blue-400/10 border-blue-400/30" : "text-blue-400 bg-blue-400/5 border-blue-400/20",
      green: isActive ? "text-green-400 bg-green-400/10 border-green-400/30" : "text-green-400 bg-green-400/5 border-green-400/20",
      purple: isActive ? "text-purple-400 bg-purple-400/10 border-purple-400/30" : "text-purple-400 bg-purple-400/5 border-purple-400/20",
      yellow: isActive ? "text-yellow-400 bg-yellow-400/10 border-yellow-400/30" : "text-yellow-400 bg-yellow-400/5 border-yellow-400/20",
      pink: isActive ? "text-pink-400 bg-pink-400/10 border-pink-400/30" : "text-pink-400 bg-pink-400/5 border-pink-400/20"
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id={id} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">azeem@developer:~$</span> ./skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 sticky top-24">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="font-mono text-orange-400 text-sm">~/skills/categories</span>
              </div>
              
              <div className="space-y-2">
                {skillCategories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    className={`w-full text-left p-3 rounded-md transition-all duration-300 flex items-center space-x-2 ${
                      activeCategory === category.key
                        ? `${getColorClasses(category.color, true)} border`
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    <div className={activeCategory === category.key ? "" : "text-gray-500"}>
                      {category.icon}
                    </div>
                    <span className="font-mono text-sm">{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-8">
              {skillCategories.find(cat => cat.key === activeCategory) && (
                <>
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-mono text-green-400 text-sm">
                      ~/skills/{activeCategory}.json
                    </span>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className={`${skillCategories.find(cat => cat.key === activeCategory).color === 'cyan' ? 'text-cyan-400' : 
                        skillCategories.find(cat => cat.key === activeCategory).color === 'blue' ? 'text-blue-400' :
                        skillCategories.find(cat => cat.key === activeCategory).color === 'green' ? 'text-green-400' :
                        skillCategories.find(cat => cat.key === activeCategory).color === 'purple' ? 'text-purple-400' :
                        skillCategories.find(cat => cat.key === activeCategory).color === 'yellow' ? 'text-yellow-400' :
                        'text-pink-400'}`}>
                        {skillCategories.find(cat => cat.key === activeCategory).icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white font-mono">
                        {skillCategories.find(cat => cat.key === activeCategory).title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {skillCategories.find(cat => cat.key === activeCategory).items.map((skill, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                            getColorClasses(skillCategories.find(cat => cat.key === activeCategory).color)
                          }`}
                        >
                          <div className="font-mono text-sm font-semibold">{skill}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Techniques Section */}
        <div className="mt-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">
              <span className="text-cyan-400">#</span> Core Techniques & Methodologies
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.techniques.map((technique, index) => (
                <div
                  key={index}
                  className="bg-gray-700/30 rounded-lg p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group text-center"
                >
                  <div className="text-cyan-400 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    <Code className="w-8 h-8 mx-auto" />
                  </div>
                  <h4 className="font-bold text-white mb-2 font-mono text-sm">
                    {technique}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Proficiency Visualization */}
        <div className="mt-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center font-mono">
              <span className="text-cyan-400">#</span> Technology Proficiency
            </h3>
            
            <div className="space-y-6">
              {[
                { name: "MEAN Stack", level: 95, color: "bg-cyan-400" },
                { name: "Backend Development", level: 90, color: "bg-blue-400" },
                { name: "API Integration", level: 88, color: "bg-green-400" },
                { name: "AI Integration", level: 85, color: "bg-purple-400" },
                { name: "Cloud Services", level: 80, color: "bg-yellow-400" },
                { name: "Desktop Applications", level: 75, color: "bg-pink-400" }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-mono text-sm">{skill.name}</span>
                    <span className="text-gray-400 font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;