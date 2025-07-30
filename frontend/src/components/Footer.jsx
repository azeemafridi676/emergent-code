import React from "react";
import { Github, Linkedin, Mail, Heart, Terminal, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/azeem",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/afridi676",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:azeemafridi676@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  const techStack = ["MongoDB", "Express.js", "Angular", "Node.js", "AWS", "AI Integration"];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="font-mono text-xl font-bold text-white">
                azeem@developer:~$
              </span>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              Full Stack Developer specializing in MEAN stack with AI integration expertise. 
              Building scalable solutions that drive business growth and enhance user experiences.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm font-mono">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-mono text-lg">
              <span className="text-cyan-400">#</span> Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-mono text-sm hover:translate-x-1 transform transition-transform"
                  >
                    ./{link.name.toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-mono text-lg">
              <span className="text-cyan-400">#</span> Tech Stack
            </h3>
            <div className="space-y-2">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="text-gray-400 font-mono text-sm hover:text-cyan-400 transition-colors duration-300 cursor-default"
                >
                  <span className="text-cyan-400">></span> {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span className="font-mono">
              © {currentYear} Azeem Afridi. Built with
            </span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="font-mono">
              and lots of coffee ☕
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Terminal Command */}
        <div className="mt-8 bg-gray-900/50 rounded-lg p-4 border border-gray-800">
          <div className="flex items-center space-x-2 text-green-400 font-mono text-sm">
            <span className="text-gray-500">azeem@developer:~/portfolio$</span>
            <span className="animate-pulse">echo "Thanks for visiting! Ready to build something amazing together?"</span>
          </div>
          <div className="text-cyan-400 font-mono text-sm mt-1">
            Thanks for visiting! Ready to build something amazing together?
          </div>
        </div>

        {/* Version Info */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800/30 px-3 py-1 rounded-full border border-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 font-mono text-xs">
              portfolio.v2.0.1 | last updated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;