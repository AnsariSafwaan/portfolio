export const portfolioData = {
  personal: {
    name: "Safwaan Ansari",
    role: "Full Stack Developer",
    greeting: "Hello, I'm",
    tagline: "Turning ideas into real solutions",
    shortBio: "Results-driven Full Stack Developer with hands-on experience building and scaling production-ready web applications with Next.js, React, Python, FastAPI, and modern databases.",
    aboutHeadline: "Turning Ideas into Real Web Solutions",
    aboutDescription: "Results-driven Full Stack Developer with hands-on experience building and scaling production-ready web applications. Proficient in engineering secure backend services with Python, FastAPI, and MS SQL Server, alongside developing responsive, dynamic user interfaces using Next.js (TypeScript) and React.js. Proven ability to architect RESTful APIs, implement complex database schemas, and enforce enterprise-grade security protocols (JWT, RBAC).",
    location: "Mumbai, India",
    email: "ansarisafwaan0987@gmail.com",
    phone: "+91 983 36 133 15",
    availability: "Open for new opportunities",
    github: "https://github.com/AnsariSafwaan",
    linkedin: "https://linkedin.com/in/ansarisafwaan",
    twitter: "https://x.com",
    resumePdfUrl: "./Safwaan_Ansari_Resume.pdf",
    codeSnippet: `const developer = {
  name: "Safwaan Ansari",
  role: "Full Stack Developer",
  skills: ["Next.js", "React.js", "Python", "FastAPI", "MS SQL"]
};`
  },

  valueHighlights: [
    {
      id: "clean-code",
      title: "Clean Architecture",
      description: "Scalable frontend & secure backend APIs",
      icon: "Code2"
    },
    {
      id: "modern-stack",
      title: "Modern Tech Stack",
      description: "Next.js, React, FastAPI, MS SQL, MongoDB",
      icon: "Layers"
    },
    {
      id: "security-first",
      title: "Enterprise Security",
      description: "JWT Auth, RBAC, lockout & rotation policies",
      icon: "Lightbulb"
    },
    {
      id: "continuous-learning",
      title: "Full-Stack Versatility",
      description: "From UI/UX Figma conversion to database design",
      icon: "BookOpen"
    }
  ],

  stats: [
    {
      value: "4+",
      number: 4,
      suffix: "+",
      label: "Major Projects Completed",
      icon: "CheckCircle2"
    },
    {
      value: "1+",
      number: 1,
      suffix: "+",
      label: "Years of Professional Exp.",
      icon: "TrendingUp"
    },
    {
      value: "12+",
      number: 12,
      suffix: "+",
      label: "Core Technologies",
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
      name: "Next.js",
      category: "Frontend",
      color: "#000000",
      icon: "nextjs",
      level: 90,
      description: "TypeScript, SSR, SSG, App Router, Responsive Web Design"
    },
    {
      name: "React.js",
      category: "Frontend",
      color: "#61DAFB",
      icon: "react",
      level: 92,
      description: "Hooks, Functional Components, State Management, API Integration"
    },
    {
      name: "FastAPI",
      category: "Backend",
      color: "#009688",
      icon: "nodejs",
      level: 88,
      description: "High-performance Python APIs, SQLAlchemy ORM, Swagger, Dependency Injection"
    },
    {
      name: "Python",
      category: "Language",
      color: "#3776AB",
      icon: "nodejs",
      level: 85,
      description: "FastAPI, Automation scripts, SpeechRecognition, SMTP integration"
    },
    {
      name: "JavaScript",
      category: "Language",
      color: "#F7DF1E",
      icon: "javascript",
      level: 92,
      description: "ES6+, Async/Await, Modular Architecture, DOM Manipulation"
    },
    {
      name: "TypeScript",
      category: "Language",
      color: "#3178C6",
      icon: "typescript",
      level: 85,
      description: "Strong Typing, Interfaces, Generics, Next.js Type safety"
    },
    {
      name: "MS SQL Server",
      category: "Database",
      color: "#CC292B",
      icon: "mysql",
      level: 85,
      description: "Complex schemas, SQLAlchemy ORM, Stored Procedures, Queries"
    },
    {
      name: "MySQL",
      category: "Database",
      color: "#4479A1",
      icon: "mysql",
      level: 85,
      description: "Relational Modeling, Indexing, Transactions, Normalization"
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      color: "#06B6D4",
      icon: "tailwind",
      level: 95,
      description: "Mobile-first responsive design, Utility-first styling, Animations"
    },
    {
      name: "Git & GitHub",
      category: "Version Control",
      color: "#F05032",
      icon: "git",
      level: 88,
      description: "Branching strategies, CI/CD Actions, Version management"
    },
    {
      name: "Postman",
      category: "API Testing",
      color: "#FF6C37",
      icon: "postman",
      level: 90,
      description: "RESTful API testing, Environments, Automated request flows"
    },
    {
      name: "Docker",
      category: "Deployment",
      color: "#2496ED",
      icon: "docker",
      level: 80,
      description: "Containerization, Environment consistency, Deployment"
    }
  ],

  projects: [
    {
      id: "job-portal",
      title: "Job Portal (naukri.kaninfos.com)",
      category: "Full Stack",
      description: "A production-ready full-stack Job Portal with Next.js (TypeScript) frontend and FastAPI + MS SQL Server backend.",
      tags: ["Next.js", "TypeScript", "FastAPI", "MS SQL", "SQLAlchemy", "JWT", "SMTP"],
      imageBg: "from-blue-600/20 to-indigo-600/20",
      themeColor: "#2563eb",
      badge: "Enterprise Full Stack",
      github: "https://github.com/AnsariSafwaan",
      live: "https://naukri.kaninfos.com",
      features: [
        "Co-developed Next.js (TypeScript) frontend and FastAPI + MS SQL backend",
        "Secure backend APIs with SQLAlchemy ORM, JWT authentication, and RBAC",
        "Automated OTP email verification via SMTP protocol",
        "Enterprise security features: 5-attempt account lockout and password rotation policies"
      ],
      previewType: "kanban"
    },
    {
      id: "voice-automation-agent",
      title: "Voice-Activated Automation Agent",
      category: "Backend",
      description: "An intelligent local virtual assistant built with Python to automate desktop workflows, voice navigation, and email sending.",
      tags: ["Python", "pyttsx3", "SpeechRecognition", "SMTP", "System APIs"],
      imageBg: "from-sky-500/20 to-blue-600/20",
      themeColor: "#0284c7",
      badge: "Automation & AI",
      github: "https://github.com/AnsariSafwaan",
      live: "https://github.com/AnsariSafwaan",
      features: [
        "Developed local voice assistant using Python, pyttsx3, and SpeechRecognition",
        "Voice-controlled browser navigation, dynamic web searches, and media playback",
        "Integrated SMTP protocol to authenticate and send voice-dictated emails programmatically",
        "Custom system API integrations for desktop workflow automations"
      ],
      previewType: "weather"
    },
    {
      id: "alpine-river-hill",
      title: "Interactive Web UI (Alpine River Hill)",
      category: "Frontend",
      description: "High-fidelity frontend replica of a responsive web application utilizing React.js, JavaScript (ES6+), and Bootstrap.",
      tags: ["React.js", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
      imageBg: "from-amber-500/20 to-rose-500/20",
      themeColor: "#f59e0b",
      badge: "Responsive Frontend",
      github: "https://github.com/AnsariSafwaan",
      live: "https://github.com/AnsariSafwaan",
      features: [
        "Modular, component-based architecture with reusable functional components",
        "Converted UI/UX designs into pixel-perfect responsive layouts",
        "Managed UI state and implemented adaptive, mobile-first styling",
        "Cross-browser compatibility and smooth navigation modals"
      ],
      previewType: "shop"
    },
    {
      id: "portfolio-website",
      title: "Full Stack Developer Portfolio",
      category: "Frontend",
      description: "A modern, high-performance personal portfolio website built with React, Vite, and Tailwind CSS.",
      tags: ["React.js", "Tailwind CSS", "Vite", "GitHub Actions"],
      imageBg: "from-purple-500/20 to-blue-500/20",
      themeColor: "#7c3aed",
      badge: "Portfolio & UI",
      github: "https://github.com/AnsariSafwaan/portfolio",
      live: "https://ansarisafwaan.github.io/portfolio/",
      features: [
        "Pixel-perfect responsive Bento-grid layout with smooth scrolling",
        "Interactive project preview walkthrough modals",
        "Downloadable and printable CV integration directly from public assets",
        "Automated CI/CD deployment pipeline via GitHub Actions"
      ],
      previewType: "portfolio"
    }
  ],

  experiences: [
    {
      id: "exp-1",
      period: "July 2025 – Present",
      role: "Full Stack Developer",
      company: "KAN Infocom · Mumbai, India",
      badge: "Current",
      isCurrent: true,
      points: [
        "Co-developed a full-stack Job Portal (naukri.kaninfos.com) using Next.js (TypeScript) for frontend and FastAPI with MS SQL Server for backend.",
        "Built secure backend APIs with SQLAlchemy ORM, JWT authentication, RBAC, and automated OTP email verification via SMTP.",
        "Implemented enterprise security features including 5-attempt account lockout and password rotation policies."
      ],
      technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "MS SQL Server", "SQLAlchemy", "JWT", "SMTP"]
    },
    {
      id: "exp-2",
      period: "Sep 2024 – Dec 2024",
      role: "Web Development Intern",
      company: "Brainwave Matrix Solution · Mumbai, India",
      badge: "Internship",
      isCurrent: false,
      points: [
        "Converted UI/UX Figma templates into responsive, interactive frontend web pages and reusable components using React.js, HTML5, and CSS3.",
        "Implemented client-side state handling and form validations while ensuring mobile-friendly cross-browser compatibility."
      ],
      technologies: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Web Design"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Watumull College of Electronics Engineering, Mumbai",
      completed: "Completed: May 2024"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Maratha Mandir's Babasaheb Gawde Institute of Technology, Mumbai",
      completed: "Completed: Jan 2021"
    }
  ]
};
