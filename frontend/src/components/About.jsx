import React from "react";
import { Code, Zap, Target, Award } from "lucide-react";

const About = ({ id, data }) => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "40% Faster Integration",
      description: "Through modular code design"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "50% Team Efficiency Boost",
      description: "Using AI-driven workflows"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "1K+ Monthly Orders",
      description: "Handled on SaaS platform"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "30% Performance Gain",
      description: "Through AWS S3 optimization"
    }
  ];

  return (
    <section id={id} className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">azeem@developer:~$</span> ./about
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-mono text-green-400 text-sm">~/about/summary.md</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">{data.summary}</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-mono text-blue-400 text-sm">~/about/philosophy.txt</span>
              </div>
              <blockquote className="text-gray-300 italic text-lg border-l-4 border-cyan-400 pl-4">
                "I believe in building scalable solutions that don't just work today, but evolve with tomorrow's challenges. Every line of code should serve a purpose, and every feature should solve a real problem."
              </blockquote>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-cyan-400 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {highlight.icon}
                </div>
                <h3 className="font-bold text-white mb-2 font-mono text-sm">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">
              <span className="text-cyan-400">#</span> Current Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {["MongoDB", "Express.js", "Angular", "Node.js", "AWS", "Stripe"].map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-700/50 px-4 py-2 rounded-full border border-gray-600 text-gray-300 font-mono text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;