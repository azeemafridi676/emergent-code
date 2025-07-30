import React, { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, Sparkles } from "lucide-react";

const AIChat = ({ onClose, data }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Hi! I'm Azeem's AI assistant. I can tell you about his experience, projects, skills, or answer any questions about his background. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const simulateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Project-related responses
    if (lowerMessage.includes("project") || lowerMessage.includes("saas") || lowerMessage.includes("school")) {
      const projectNames = data.projects.map(p => p.title).join(", ");
      return `Azeem has worked on ${data.projects.length} major projects including: ${projectNames}. His most notable project is the SaaS E-commerce Platform that handles 1K+ monthly orders. Would you like details about any specific project?`;
    }
    
    // Skills-related responses
    if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("mean")) {
      return `Azeem specializes in the MEAN stack (MongoDB, Express.js, Angular, Node.js) and has expertise in ${data.skills.programmingLanguages.join(", ")}. He's also experienced with AI integration, having reduced development time by 81% using Cursor AI. What specific technology would you like to know about?`;
    }
    
    // Experience-related responses
    if (lowerMessage.includes("experience") || lowerMessage.includes("work") || lowerMessage.includes("sterling")) {
      return `Azeem is currently a Full Stack Developer at Sterlings Tech since Dec 2023. He's achieved remarkable results: 40% reduction in integration time, 50% boost in team efficiency, and built systems handling 1K+ monthly orders. He also completed his final year project at Quaid-i-Azam University. Want to know more about his specific achievements?`;
    }
    
    // Education-related responses
    if (lowerMessage.includes("education") || lowerMessage.includes("university") || lowerMessage.includes("degree")) {
      return `Azeem holds a Bachelor of Science in Computer Science from Quaid-i-Azam University, Islamabad (2020-2024). He also has Google HTML & CSS certification from Coursera. His final year project was recognized as the top project by faculty. Interested in his academic achievements?`;
    }
    
    // Contact-related responses
    if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("hire")) {
      return `You can reach Azeem at ${data.contact.email} or call him at ${data.contact.phone}. He's based in ${data.contact.location} and is available for new opportunities. You can also connect with him on LinkedIn: ${data.contact.linkedin}`;
    }
    
    // AI-related responses
    if (lowerMessage.includes("ai") || lowerMessage.includes("artificial intelligence") || lowerMessage.includes("openai")) {
      return `Azeem has hands-on AI integration experience! He introduced Cursor AI at Sterlings Tech, reducing pagination development time by 81% (from 16 to 3 hours). He's also worked with OpenAI API integration in Next.js applications and mentored 4-6 developers on AI-driven workflows. His AI work contributed to a 50% boost in team efficiency.`;
    }
    
    // Default response
    return `That's an interesting question! I can provide information about Azeem's experience at Sterlings Tech, his ${data.projects.length} major projects, his MEAN stack expertise, education at Quaid-i-Azam University, or his AI integration work. What specific area interests you most?`;
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai",
        content: simulateAIResponse(inputText),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
      <div className="bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-700 shadow-2xl w-full max-w-md h-96 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800/50 rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Bot className="w-6 h-6 text-cyan-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
            </div>
            <div>
              <h3 className="font-semibold text-white font-mono">AI Assistant</h3>
              <p className="text-xs text-gray-400">Ask me about Azeem</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-2 ${
                message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.type === "ai" 
                  ? "bg-cyan-400/20 text-cyan-400" 
                  : "bg-blue-400/20 text-blue-400"
              }`}>
                {message.type === "ai" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>
              
              <div className={`max-w-xs ${message.type === "user" ? "text-right" : ""}`}>
                <div className={`inline-block p-3 rounded-lg text-sm ${
                  message.type === "ai"
                    ? "bg-gray-800 text-gray-200 border border-gray-700"
                    : "bg-cyan-600 text-white"
                }`}>
                  {message.content}
                </div>
                <div className="text-xs text-gray-500 mt-1 font-mono">
                  {formatTime(message.timestamp)}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 max-w-xs">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-700 bg-gray-800/50 rounded-b-lg">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about projects, skills, experience..."
              className="flex-1 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-2 rounded-md transition-colors duration-200"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          
          {/* Quick Questions */}
          <div className="flex flex-wrap gap-1 mt-2">
            {["Projects", "Skills", "Experience", "Contact"].map((question) => (
              <button
                key={question}
                onClick={() => setInputText(`Tell me about ${question.toLowerCase()}`)}
                className="text-xs bg-gray-700/50 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded border border-gray-600 transition-colors duration-200"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;