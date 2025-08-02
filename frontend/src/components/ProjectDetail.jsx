import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Github, ExternalLink, Monitor, Database, Globe, Code, Zap } from "lucide-react";
import { projectsData } from "../data/projectsData";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const videoRef = useRef(null);

  // Find the project by ID
  const project = projectsData.find(p => p.id === projectId);

  // If project not found, show 404
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-cyan-400 font-mono mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-8">Project not found</p>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 font-mono">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Auto-start video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  }, [selectedVideoIndex]);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const getProjectIcon = (technologies) => {
    if (technologies.some(tech => tech.includes('MongoDB') || tech.includes('MySQL'))) return <Database className="w-8 h-8" />;
    if (technologies.some(tech => tech.includes('Angular') || tech.includes('React'))) return <Globe className="w-8 h-8" />;
    if (technologies.some(tech => tech.includes('Node.js') || tech.includes('Express'))) return <Zap className="w-8 h-8" />;
    return <Code className="w-8 h-8" />;
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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-mono">Back to Portfolio</span>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="font-mono text-cyan-400 text-sm">
                  ~/projects/{project.title.toLowerCase().replace(/\s+/g, '_')}/detail
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Title */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-cyan-400">
              {getProjectIcon(project.technologies)}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white font-mono">
              {project.title}
            </h1>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="font-mono text-red-400 text-sm">~/media/videos</span>
            </div>

            {/* Video Player */}
            <div className="relative mb-6">
              <video
                ref={videoRef}
                className="w-full h-96 bg-gray-900 rounded-lg"
                muted={isVideoMuted}
                loop
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              >
                <source src={project.videos[selectedVideoIndex].url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-gray-900/80 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={toggleVideoPlayback}
                    className="p-2 bg-cyan-600 hover:bg-cyan-500 rounded-md transition-colors duration-300"
                  >
                    {isVideoPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                  </button>
                  <button
                    onClick={toggleVideoMute}
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-300 text-gray-300"
                  >
                    {isVideoMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>
                <div className="text-sm text-gray-300 font-mono">
                  {project.videos[selectedVideoIndex].title}
                </div>
              </div>
            </div>

            {/* Video Selector */}
            {project.videos.length > 1 && (
              <div className="flex space-x-2">
                {project.videos.map((video, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVideoIndex(index)}
                    className={`px-4 py-2 rounded-md text-sm font-mono transition-all duration-300 ${
                      selectedVideoIndex === index
                        ? "bg-cyan-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {video.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Images Section */}
        <div className="mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="font-mono text-yellow-400 text-sm">~/media/images</span>
            </div>

            {/* Main Image Display */}
            <div className="mb-6">
              <img
                src={project.images[selectedImageIndex].url}
                alt={project.images[selectedImageIndex].title}
                className="w-full h-96 object-cover rounded-lg border border-gray-600"
              />
              <p className="text-center text-gray-300 mt-3 font-mono">
                {project.images[selectedImageIndex].title}
              </p>
            </div>

            {/* Image Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    selectedImageIndex === index
                      ? "border-cyan-400 ring-2 ring-cyan-400/30"
                      : "border-gray-600 hover:border-gray-500"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-24 object-cover"
                  />
                  {selectedImageIndex === index && (
                    <div className="absolute inset-0 bg-cyan-400/20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-mono text-green-400 text-sm">~/docs/summary.md</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-mono">
                <span className="text-cyan-400">#</span> Project Summary
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.long_description.summary}
              </p>
            </div>
          </div>

          {/* Modules */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-mono text-purple-400 text-sm">~/docs/modules.md</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-mono">
                <span className="text-cyan-400">#</span> System Modules
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.long_description.modules}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-mono text-blue-400 text-sm">~/docs/tech_stack.md</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-mono">
                <span className="text-cyan-400">#</span> Technology Stack
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.long_description.tech_stack}
              </p>
            </div>
          </div>
        </div>

        {/* Technologies & Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Technologies */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="font-mono text-orange-400 text-sm">~/config/technologies.json</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">
              <span className="text-cyan-400">&gt;</span> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700/50 text-cyan-400 px-4 py-2 rounded-full text-sm font-mono border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <span className="font-mono text-pink-400 text-sm">~/config/features.json</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">
              <span className="text-cyan-400">&gt;</span> Key Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Impact & Actions */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-8 mb-16">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <span className="font-mono text-emerald-400 text-sm">~/metrics/impact.log</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 mb-6 lg:mb-0">
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                <span className="text-cyan-400">#</span> Project Impact
              </h3>
              <p className="text-cyan-400 font-semibold text-xl">{project.impact}</p>
            </div>
            
            <div className="flex space-x-4">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-300 text-white font-mono"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              )}
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-md transition-all duration-300 text-white font-mono shadow-lg hover:shadow-cyan-500/25"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;