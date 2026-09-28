export const portfolioData = {
  personal: {
    name: "Safwaan Ansari",
    role: "Full Stack Developer",
    greeting: "Hello, I'm",
    tagline: "Turning ideas into real solutions",
    shortBio: "I build modern, scalable and user-friendly web applications using the latest technologies. Passionate about solving real-world problems through clean code and innovative solutions.",
    aboutHeadline: "Turning Ideas into Real Web Solutions",
    aboutDescription: "I'm a passionate Full Stack Developer with a strong interest in building modern web applications. I enjoy working with both frontend and backend technologies, and I'm always exploring new tools and frameworks to improve my skills and create better user experiences.",
    location: "India",
    email: "safwaan@example.com",
    phone: "+91 98765 43210",
    availability: "Open for new opportunities",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    codeSnippet: `const developer = {
  name: "Safwaan Ansari",
  role: "Full Stack Developer",
  skills: ["React", "Node.js", "Next.js", "MongoDB"],
  status: "Ready to build amazing apps"
};`
  },

  valueHighlights: [
    {
      id: "clean-code",
      title: "Clean Code",
      description: "Write maintainable, scalable codebase",
      icon: "Code2"
    },
    {
      id: "modern-stack",
      title: "Modern Stack",
      description: "React, Node.js, MongoDB and more",
      icon: "Layers"
    },
    {
      id: "problem-solver",
      title: "Problem Solver",
      description: "Find efficient solutions to complex problems",
      icon: "Lightbulb"
    },
    {
      id: "continuous-learning",
      title: "Continuous Learning",
      description: "Always exploring new technologies",
      icon: "BookOpen"
    }
  ],

  stats: [
    {
      value: "4+",
      number: 4,
      suffix: "+",
      label: "Projects Completed",
      icon: "CheckCircle2"
    },
    {
      value: "1+",
      number: 1,
      suffix: "+",
      label: "Years of Learning & Experience",
      icon: "TrendingUp"
    },
    {
      value: "12+",
      number: 12,
      suffix: "+",
      label: "Technologies Used",
      icon: "Boxes"
    },
    {
      value: "100%",
      number: 100,
      suffix: "%",
      label: "Passion & Dedication",
      icon: "Heart"
    }
  ],

  skills: [
    {
      name: "React",
      category: "Frontend",
      color: "#61DAFB",
      icon: "react",
      level: 90,
      description: "Hooks, Context API, Redux Toolkit, React Router, Performance Optimization"
    },
    {
      name: "Next.js",
      category: "Frontend",
      color: "#000000",
      icon: "nextjs",
      level: 85,
      description: "App Router, SSR, SSG, Server Actions, API Routes, NextAuth"
    },
    {
      name: "JavaScript",
      category: "Language",
      color: "#F7DF1E",
      icon: "javascript",
      level: 92,
      description: "ES6+, Async/Await, Closures, DOM Manipulation, Event Loop"
    },
    {
      name: "TypeScript",
      category: "Language",
      color: "#3178C6",
      icon: "typescript",
      level: 80,
      description: "Strict Typing, Generics, Interfaces, Type Narrowing, Utility Types"
    },
    {
      name: "Node.js",
      category: "Backend",
      color: "#339933",
      icon: "nodejs",
      level: 85,
      description: "Event-driven architecture, RESTful API design, File System, Streams"
    },
    {
      name: "Express.js",
      category: "Backend",
      color: "#000000",
      icon: "express",
      level: 88,
      description: "Middleware routing, JWT authentication, Error handling, Rate limiting"
    },
    {
      name: "MongoDB",
      category: "Database",
      color: "#47A248",
      icon: "mongodb",
      level: 82,
      description: "Mongoose schemas, Aggregation pipeline, Indexing, CRUD modeling"
    },
    {
      name: "MySQL",
      category: "Database",
      color: "#4479A1",
      icon: "mysql",
      level: 78,
      description: "Relational queries, Joins, Transactions, Normalization, Prisma/Sequelize"
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      color: "#06B6D4",
      icon: "tailwind",
      level: 95,
      description: "Responsive layouts, Flexbox/Grid, Dark mode, Custom components"
    },
    {
      name: "Git & GitHub",
      category: "Version Control",
      color: "#F05032",
      icon: "git",
      level: 88,
      description: "Branching strategies, Pull requests, Merge conflict resolution, CI/CD"
    },
    {
      name: "Postman",
      category: "API Testing",
      color: "#FF6C37",
      icon: "postman",
      level: 85,
      description: "Endpoint testing, Collections, Environment variables, Mock servers"
    },
    {
      name: "Docker",
      category: "Deployment",
      color: "#2496ED",
      icon: "docker",
      level: 75,
      description: "Containerization, Dockerfile configuration, Docker Compose, Volumes"
    }
  ],

  projects: [
    {
      id: "task-management-app",
      title: "Task Management App",
      category: "Full Stack",
      description: "A full-stack task management application with user authentication, task CRUD operations and real-time updates.",
      tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      imageBg: "from-blue-500/20 to-indigo-500/20",
      themeColor: "#2563eb",
      badge: "Full Stack App",
      github: "https://github.com/example/task-manager",
      live: "https://task-manager-demo.example.com",
      features: [
        "Secure user authentication with JWT & bcrypt",
        "Interactive drag-and-drop Kanban board",
        "Real-time task synchronization across devices",
        "Priority tags, due dates, and activity logs"
      ],
      previewType: "kanban"
    },
    {
      id: "e-commerce-website",
      title: "E-Commerce Website",
      category: "Full Stack",
      description: "A modern e-commerce platform with product listings, cart, and secure payment integration.",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "Node.js", "MongoDB"],
      imageBg: "from-amber-500/20 to-rose-500/20",
      themeColor: "#f59e0b",
      badge: "E-Commerce",
      github: "https://github.com/example/ecommerce-store",
      live: "https://ecommerce-store-demo.example.com",
      features: [
        "Product catalog with smart filtering & search",
        "Seamless Stripe checkout flow with webhooks",
        "Shopping cart state persistence with Zustand",
        "Admin dashboard for product & order management"
      ],
      previewType: "shop"
    },
    {
      id: "weather-forecast-app",
      title: "Weather Forecast App",
      category: "Frontend",
      description: "A responsive weather application with real-time data, location search and beautiful UI.",
      tags: ["React", "OpenWeather API", "JavaScript", "Tailwind CSS"],
      imageBg: "from-sky-500/20 to-cyan-500/20",
      themeColor: "#0284c7",
      badge: "API Integration",
      github: "https://github.com/example/weather-forecast",
      live: "https://weather-app-demo.example.com",
      features: [
        "7-day weather forecasts and hourly temperature breakdown",
        "Geolocation-based weather detection",
        "Interactive dynamic weather animations (rain, sun, snow)",
        "Search autocomplete with historical saved locations"
      ],
      previewType: "weather"
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      category: "Frontend",
      description: "A personal portfolio website to showcase my skills, projects and experience.",
      tags: ["Next.js", "Tailwind CSS", "Vercel", "Framer Motion"],
      imageBg: "from-purple-500/20 to-blue-500/20",
      themeColor: "#7c3aed",
      badge: "Portfolio & UI",
      github: "https://github.com/example/safwaan-portfolio",
      live: "https://safwaan-portfolio.example.com",
      features: [
        "Clean, pixel-perfect Bento-grid inspired layout",
        "Smooth interactive animations with Framer Motion",
        "Mobile-first responsive architecture",
        "Interactive project previews and contact workflow"
      ],
      previewType: "portfolio"
    }
  ],

  experiences: [
    {
      id: "exp-1",
      period: "2023 - Present",
      role: "Full Stack Developer",
      company: "Tech Solutions Pvt. Ltd.",
      badge: "Current",
      isCurrent: true,
      points: [
        "Developed and maintained web applications using React, Node.js and MongoDB.",
        "Collaborated with cross-functional teams to deliver high-quality features.",
        "Improved application performance and reduced load time by 40%."
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
    },
    {
      id: "exp-2",
      period: "2022 - 2023",
      role: "Frontend Developer",
      company: "WebCraft Studio",
      badge: "Previous",
      isCurrent: false,
      points: [
        "Built responsive and interactive UI components using React and Tailwind CSS.",
        "Integrated REST APIs and worked with backend team for seamless data flow.",
        "Enhanced accessibility and cross-browser compatibility across all client projects."
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "Git"]
    },
    {
      id: "exp-3",
      period: "2021 - 2022",
      role: "Junior Developer",
      company: "InnovateTech",
      badge: "Foundation",
      isCurrent: false,
      points: [
        "Assisted in building and maintaining web applications.",
        "Fixed bugs, refactored legacy code, and improved existing features.",
        "Participated in agile sprints, daily standups, and code reviews."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL"]
    }
  ]
};
