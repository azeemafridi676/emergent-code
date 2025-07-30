import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = ({ id }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    "azeem@developer:~/portfolio$ whoami",
    "> Azeem Afridi - Full Stack Developer",
    "> Specializing in MEAN Stack & AI Integration",
    "",
    "azeem@developer:~/portfolio$ cat experience.txt",
    "> 🚀 Reduced integration time by 40%",
    "> 🎯 Boosted team efficiency by 50% with AI workflows",
    "> 💡 Built scalable SaaS platforms handling 1K+ monthly orders",
    "",
    "azeem@developer:~/portfolio$ ./start_portfolio",
    "> Portfolio loaded successfully! ✨"
  ];

  const fullText = commands.join("\n");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Terminal Output */}
        <div className="order-2 lg:order-1">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 rounded-t-lg border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">azeem@developer: ~/portfolio</div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              <pre className="text-green-400 whitespace-pre-wrap">
                {displayText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
              </pre>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Azeem Afridi
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 font-mono">
                Full Stack Developer
              </p>
              <p className="text-lg text-gray-400 mt-2">
                MEAN Stack Specialist & AI Integration Expert
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Islamabad, Pakistan</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/azeem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
                <span className="font-mono">./github</span>
              </a>
              <a
                href="https://linkedin.com/in/afridi676"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-mono">./linkedin</span>
              </a>
              <a
                href="mailto:azeemafridi676@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span className="font-mono">./contact</span>
              </a>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToNext}
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-mono transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                ./explore_portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;