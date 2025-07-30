import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Calendar } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = ({ id, data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. Azeem will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: data.email,
      link: `mailto:${data.email}`,
      color: "cyan"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: data.phone,
      link: `tel:${data.phone}`,
      color: "green"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: data.location,
      link: "#",
      color: "purple"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      link: `https://${data.linkedin}`,
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30 hover:bg-cyan-400/20",
      green: "text-green-400 bg-green-400/10 border-green-400/30 hover:bg-green-400/20",
      purple: "text-purple-400 bg-purple-400/10 border-purple-400/30 hover:bg-purple-400/20",
      blue: "text-blue-400 bg-blue-400/10 border-blue-400/30 hover:bg-blue-400/20"
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id={id} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="font-mono text-cyan-400">azeem@developer:~$</span> ./contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to build something amazing together? Let's connect and discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-mono text-green-400 text-sm">~/contact/info.json</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 font-mono">Get In Touch</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${getColorClasses(method.color)}`}
                  >
                    <div>{method.icon}</div>
                    <div>
                      <h4 className="font-semibold font-mono">{method.title}</h4>
                      <p className="text-sm opacity-90">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">
                <span className="text-cyan-400">#</span> Quick Stats
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 font-mono">24/7</div>
                  <div className="text-gray-400 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 font-mono">100%</div>
                  <div className="text-gray-400 text-sm">Project Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 font-mono">5+</div>
                  <div className="text-gray-400 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 font-mono">1K+</div>
                  <div className="text-gray-400 text-sm">Orders Handled</div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">
                <span className="text-cyan-400">#</span> Languages
              </h3>
              
              <div className="flex space-x-4">
                {data.languages.map((language, index) => (
                  <div
                    key={index}
                    className="bg-gray-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono border border-cyan-400/30"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-mono text-blue-400 text-sm">~/contact/form.tsx</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 font-mono">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-mono text-sm mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-mono text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 font-mono text-sm mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 font-mono text-sm mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project ideas, requirements, or any questions you have..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-mono py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>./send_message</span>
                  </>
                )}
              </button>
            </form>

            {/* Alternative Contact Options */}
            <div className="mt-8 pt-6 border-t border-gray-600">
              <h4 className="text-white font-semibold mb-4 font-mono">
                Or reach out directly:
              </h4>
              
              <div className="flex flex-wrap gap-2">
                <a
                  href={`mailto:${data.email}`}
                  className="inline-flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-600 text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                
                <a
                  href={`https://${data.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-600 text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300 text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                
                <a
                  href={`tel:${data.phone}`}
                  className="inline-flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-600 text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;