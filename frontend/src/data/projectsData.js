// Enhanced project data with videos, images, and detailed descriptions
export const projectsData = [
  {
    id: "saas-ecommerce-platform",
    title: "SaaS E-commerce Platform",
    description: "Comprehensive e-commerce solution built with MEAN stack, handling 1K+ monthly orders with integrated payment processing and cloud storage.",
    long_description: {
      summary: "A comprehensive SaaS e-commerce platform built from the ground up using the MEAN stack. The platform serves as a multi-tenant solution supporting multiple businesses with their online sales operations. The system handles high-volume transactions, processes payments seamlessly, and manages complex inventory operations across distributed servers.",
      modules: "The platform consists of several key modules: User Management System with role-based access control, Product Catalog Management with dynamic pricing, Order Processing Engine with real-time tracking, Payment Gateway Integration with Stripe API, Inventory Management with automated restocking alerts, Analytics Dashboard with sales reporting, Customer Support System with ticket management, and Admin Panel with comprehensive business controls.",
      tech_stack: "Frontend: Angular 15+ with TypeScript, Angular Material for UI components, RxJS for reactive programming. Backend: Node.js with Express.js framework, MongoDB with Mongoose ODM, JWT for authentication. Infrastructure: AWS S3 for image storage and CDN, Stripe API for payment processing, Nginx for load balancing, PM2 for process management. The architecture follows microservices patterns with 4 dedicated servers handling different aspects of the application."
    },
    technologies: ["MongoDB", "Express.js", "Angular", "Node.js", "Stripe", "AWS S3"],
    features: [
      "Multi-server architecture managing 4 servers",
      "Stripe payment integration",
      "AWS S3 image optimization",
      "RESTful API design",
      "Admin dashboard"
    ],
    status: "Production",
    impact: "1K+ monthly orders, 30% faster page loads",
    thumbnail_image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjb2Rpbmd8ZW58MHx8fHwxNzU0MTE2OTU5fDA&ixlib=rb-4.1.0&q=85",
    videos: [
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        title: "Platform Demo",
        type: "video"
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        title: "Admin Panel Tour",
        type: "video"
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjb2Rpbmd8ZW58MHx8fHwxNzU0MTE2OTU5fDA&ixlib=rb-4.1.0&q=85",
        title: "Dashboard Interface",
        type: "image"
      },
      {
        url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxjb2Rpbmd8ZW58MHx8fHwxNzU0MTE2OTU5fDA&ixlib=rb-4.1.0&q=85",
        title: "Code Architecture",
        type: "image"
      },
      {
        url: "https://images.unsplash.com/photo-1607706189992-eae578626c86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxjb2Rpbmd8ZW58MHx8fHwxNzU0MTE2OTU5fDA&ixlib=rb-4.1.0&q=85",
        title: "Database Design",
        type: "image"
      },
      {
        url: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
        title: "API Implementation",
        type: "image"
      }
    ],
    github_url: "",
    live_url: ""
  },
  {
    id: "school-management-system",
    title: "School Management System",
    description: "Full-stack school management solution with comprehensive CRUD operations, user roles, and dynamic content management.",
    long_description: {
      summary: "A comprehensive school management system designed to digitize and streamline educational institution operations. The system provides a unified platform for managing students, teachers, staff, and administrative tasks. Built using Laravel framework with a focus on scalability, security, and user experience.",
      modules: "Student Information System for enrollment and academic records, Teacher Management with course assignments and scheduling, Staff Administration with role-based permissions, Grade Management with automated calculation and reporting, Attendance Tracking with real-time monitoring, Parent Portal for student progress visibility, Library Management System, Fee Management with payment tracking, Examination System with result processing, and Communication Hub for announcements and messaging.",
      tech_stack: "Backend: Laravel 8+ with PHP 8.1, Eloquent ORM for database operations, Laravel Sanctum for API authentication, Laravel Queue for background jobs. Database: MySQL 8.0 with optimized indexing and relationships. Frontend: Blade templates with Bootstrap 5, JavaScript ES6+ for dynamic interactions, Chart.js for analytics visualization. Additional: Laravel Mix for asset compilation, Mailtrap for email testing, Laravel Debugbar for development optimization."
    },
    technologies: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    features: [
      "Student enrollment management",
      "Teacher and staff administration",
      "Grade and attendance tracking",
      "Dynamic reporting system",
      "Role-based access control"
    ],
    status: "Completed",
    impact: "Faculty recognition as top project",
    thumbnail_image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NTQxMTY5NjN8MA&ixlib=rb-4.1.0&q=85",
    videos: [
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        title: "System Overview",
        type: "video"
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        title: "Student Management Demo",
        type: "video"
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NTQxMTY5NjN8MA&ixlib=rb-4.1.0&q=85",
        title: "Dashboard Overview",
        type: "image"
      },
      {
        url: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NTQxMTY5NjN8MA&ixlib=rb-4.1.0&q=85",
        title: "Student Records",
        type: "image"
      },
      {
        url: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
        title: "Laravel Code Structure",
        type: "image"
      },
      {
        url: "https://images.pexels.com/photos/249798/pexels-photo-249798.png",
        title: "Database Schema",
        type: "image"
      }
    ],
    github_url: "",
    live_url: ""
  },
  {
    id: "desktop-ad-management",
    title: "Desktop Ad Management App",
    description: "Electron.js application for automated ad playbook management with Angular frontend and admin panel.",
    long_description: {
      summary: "A desktop application built with Electron.js for automated advertisement management and playback. The application provides a comprehensive solution for ad agencies to manage, schedule, and monitor advertisement campaigns across multiple display systems. Features cross-platform compatibility and robust process management.",
      modules: "Ad Campaign Manager for creating and scheduling campaigns, Media Library with support for various formats, Playback Engine with automated scheduling, Admin Control Panel for user management, Analytics Dashboard with performance metrics, Content Management System for dynamic updates, Device Monitor for hardware status, and Backup & Sync Module for data protection.",
      tech_stack: "Desktop Framework: Electron.js with Node.js runtime integration, Angular 14+ for frontend UI development, TypeScript for type-safe development. Backend Services: Express.js for API endpoints, SQLite for local data storage, Socket.io for real-time communication. Media Handling: FFmpeg for video processing, Sharp for image optimization. System Integration: Native OS APIs for hardware control, Auto-updater for application maintenance."
    },
    technologies: ["Electron.js", "Angular", "Node.js"],
    features: [
      "Automated ad playback",
      "Cross-process communication",
      "Admin panel interface",
      "Landing page integration",
      "Process stability management"
    ],
    status: "Deployed",
    impact: "Eliminated manual ad management effort",
    thumbnail_image: "https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg",
    videos: [
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        title: "Desktop App Demo",
        type: "video"
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        title: "Admin Features",
        type: "video"
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NTQxMTY5NjN8MA&ixlib=rb-4.1.0&q=85",
        title: "Desktop Interface",
        type: "image"
      },
      {
        url: "https://images.unsplash.com/photo-1607706189992-eae578626c86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxjb2Rpbmd8ZW58MHx8fHwxNzU0MTE2OTU5fDA&ixlib=rb-4.1.0&q=85",
        title: "Code Architecture",
        type: "image"
      },
      {
        url: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
        title: "Electron Integration",
        type: "image"
      },
      {
        url: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
        title: "Angular Components",
        type: "image"
      }
    ],
    github_url: "",
    live_url: ""
  },
  {
    id: "property-listing-platform",
    title: "Property Listing Platform",
    description: "Full-stack property management solution with comprehensive listing features and CRM integration.",
    long_description: {
      summary: "A comprehensive property listing and management platform designed for real estate agencies and property managers. The system integrates with CRM systems to provide seamless property data management, client tracking, and lead generation. Built with a focus on user experience and real-time data synchronization.",
      modules: "Property Catalog with advanced search and filtering, CRM Integration for client management, Lead Generation System with automated follow-ups, Property Valuation Tools with market analysis, Document Management for contracts and agreements, Appointment Scheduling with calendar integration, Client Portal for property viewing and inquiries, Analytics Dashboard for market insights, and Mobile-Responsive Interface for on-the-go access.",
      tech_stack: "Backend: PHP 8+ with custom MVC framework, MySQL 8.0 for data persistence, RESTful API architecture. Frontend: Vanilla JavaScript ES6+, HTML5 semantic markup, CSS3 with Flexbox and Grid layouts, Responsive design principles. Third-party Integrations: CRM API connectors, Google Maps API for location services, Payment gateway integration for deposits, Email service integration for notifications."
    },
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Property data input and display",
      "CRM API integration",
      "User interface optimization",
      "Search and filter functionality"
    ],
    status: "Completed",
    impact: "25% improvement in user satisfaction",
    thumbnail_image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxjb2Rpbmd8ZW58MHx8fHwxNzU0MTE2OTU5fDA&ixlib=rb-4.1.0&q=85",
    videos: [
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        title: "Platform Walkthrough",
        type: "video"
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        title: "CRM Integration Demo",
        type: "video"
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjb2Rpbmd8ZW58MHx8fHwxNzU0MTE2OTU5fDA&ixlib=rb-4.1.0&q=85",
        title: "Property Listings",
        type: "image"
      },
      {
        url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NTQxMTY5NjN8MA&ixlib=rb-4.1.0&q=85",
        title: "Search Interface",
        type: "image"
      },
      {
        url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NTQxMTY5NjN8MA&ixlib=rb-4.1.0&q=85",
        title: "Admin Dashboard",
        type: "image"
      },
      {
        url: "https://images.pexels.com/photos/249798/pexels-photo-249798.png",
        title: "Database Integration",
        type: "image"
      }
    ],
    github_url: "",
    live_url: ""
  },
  {
    id: "video-loop-marketing-site",
    title: "Video Loop Marketing Site",
    description: "High-performance marketing website achieving #1 Google ranking with 500+ daily visits.",
    long_description: {
      summary: "A high-performance marketing website designed to showcase video content in an engaging loop format. The site achieved top search engine rankings through strategic SEO optimization and performance tuning. Built with a focus on fast loading times, mobile responsiveness, and user engagement metrics.",
      modules: "Video Management System with seamless looping functionality, SEO Optimization Engine with meta tag management, Performance Monitoring with real-time analytics, Content Management System for dynamic updates, Lead Capture Forms with email integration, Social Media Integration for content sharing, Analytics Dashboard for visitor tracking, and Mobile Optimization for cross-device compatibility.",
      tech_stack: "Frontend: HTML5 with semantic markup and accessibility features, CSS3 with advanced animations and responsive design, Vanilla JavaScript with performance optimizations. Performance: Lazy loading implementation, CDN integration for global content delivery, Image and video compression optimization. SEO: Structured data markup, Open Graph meta tags, Twitter Cards integration, Sitemap and robots.txt optimization, Google Analytics and Search Console integration."
    },
    technologies: ["HTML", "CSS", "JavaScript", "SEO"],
    features: [
      "Video loop implementation",
      "SEO optimization",
      "Performance optimization",
      "Responsive design"
    ],
    status: "Live",
    impact: "#1 Google ranking, 500+ daily visits",
    thumbnail_image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NTQxMTY5NjN8MA&ixlib=rb-4.1.0&q=85",
    videos: [
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        title: "Site Performance",
        type: "video"
      },
      {
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        title: "SEO Results",
        type: "video"
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3NTQxMTY5NjN8MA&ixlib=rb-4.1.0&q=85",
        title: "Website Interface",
        type: "image"
      },
      {
        url: "https://images.unsplash.com/photo-1607706189992-eae578626c86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxjb2Rpbmd8ZW58MHx8fHwxNzU0MTE2OTU5fDA&ixlib=rb-4.1.0&q=85",
        title: "Code Optimization",
        type: "image"
      },
      {
        url: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
        title: "Performance Metrics",
        type: "image"
      },
      {
        url: "https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg",
        title: "SEO Analysis",
        type: "image"
      }
    ],
    github_url: "",
    live_url: ""
  }
];