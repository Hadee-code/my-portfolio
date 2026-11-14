const profileData = {
  greeting: "Hi I am",
  name: "Muhammad Hadee Butt",
  shortName: "Hadee",
  role: "Full Stack & AI Engineer",
  tagline: "Junior Full Stack Developer building resilient, high-performance web applications and advancing into AI engineering & automation workflows.",
  about: "I am a dedicated Junior Full Stack Developer with professional experience building and maintaining end-to-end web applications using React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and Python. Actively expanding into AI engineering, building LLM integrations, Python API pipelines, and automation workflows. Experienced in developing secure RESTful microservices, implementing robust JWT authentication, crafting responsive interfaces, and working with Git in collaborative Agile environments.",
  profileImage: "/assets/imag2.jpeg",
  aboutImage: "/assets/about.jpeg",
  cvFile: "/assets/Muhammad_Hadee_Butt_CV.pdf",
  email: "muhammadhadeebutt@gmail.com",
  phone: "03278020047",
  location: "Lahore, Pakistan",
  availability: "Available for Full-time Roles & Contracts",

  socials: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/muhammad-hadee-butt",
      label: "LinkedIn",
    },
    {
      name: "github",
      url: "https://github.com/muhammadhadeebutt",
      label: "GitHub",
    },
    {
      name: "email",
      url: "mailto:muhammadhadeebutt@gmail.com",
      label: "Email",
    },
    {
      name: "phone",
      url: "tel:03278020047",
      label: "Call",
    },
  ],

  stats: [
    { value: "1+", label: "Years Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "100%", label: "Code Quality Focus" },
  ],

  skills: {
    frontend: [
      { name: "React.js", level: "92%", detail: "React 19, Custom Hooks, Context API" },
      { name: "Next.js", level: "88%", detail: "App Router, SSR, Server Components" },
      { name: "JavaScript (ES6+)", level: "94%", detail: "Async/Await, Closures, DOM" },
      { name: "Tailwind CSS", level: "95%", detail: "Design Tokens, Fluid Grid Layouts" },
      { name: "HTML5 & CSS3", level: "95%", detail: "Semantic HTML, Accessibility" },
      { name: "Bootstrap", level: "85%", detail: "Responsive Grids & Rapid Prototyping" },
    ],
    backend: [
      { name: "Node.js", level: "90%", detail: "Event-driven runtime, Non-blocking I/O" },
      { name: "Express.js", level: "90%", detail: "Middleware, Controllers, Error Routing" },
      { name: "RESTful APIs", level: "92%", detail: "JSON Schema, API Versioning" },
      { name: "Python", level: "82%", detail: "FastAPI, Automation, Scripting" },
      { name: "JWT Auth & RBAC", level: "90%", detail: "Access/Refresh tokens, Route Guards" },
    ],
    database: [
      { name: "MongoDB", level: "90%", detail: "Atlas Clusters, Aggregation Pipelines" },
      { name: "PostgreSQL", level: "85%", detail: "Relational Schemas, Constraints, Indexes" },
      { name: "Prisma ORM", level: "88%", detail: "Type-safe Client, Migrations" },
      { name: "Mongoose", level: "90%", detail: "Validation, Middleware Hooks, Virtuals" },
      { name: "Data Modeling", level: "88%", detail: "Normalization vs Document Sharding" },
    ],
    tools: [
      { name: "Git & GitHub", level: "92%", detail: "Git Flow, Branching, PR Reviews" },
      { name: "Postman", level: "92%", detail: "API Collections, Automated Testing" },
      { name: "VS Code", level: "95%", detail: "Debugging, Workspaces, Keybindings" },
      { name: "Vite 8", level: "90%", detail: "HMR, Module Bundling, Production Builds" },
      { name: "Linux / Bash", level: "80%", detail: "Shell scripting, Package Management" },
    ],
    deployment: [
      { name: "Docker Basics", level: "75%", detail: "Containers, Dockerfile Configuration" },
      { name: "Vercel", level: "92%", detail: "Edge Functions, Continuous Deployment" },
      { name: "Render & Netlify", level: "88%", detail: "Node Services, Static Asset Hosting" },
      { name: "CI / CD Pipelines", level: "78%", detail: "Automated Build Checks & Linting" },
    ],
    ai_ml: [
      { name: "Python for AI", level: "84%", detail: "Data manipulation, NumPy, Requests" },
      { name: "LLM API Integration", level: "86%", detail: "OpenAI, Anthropic & Groq APIs" },
      { name: "Prompt Engineering", level: "90%", detail: "Few-shot, Chain-of-Thought, System Roles" },
      { name: "Vector Embeddings", level: "80%", detail: "Semantic Search, Cosine Similarity" },
      { name: "LangChain Basics", level: "75%", detail: "Chains, Prompt Templates, Memory" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Lean E-Commerce System",
      category: "Full Stack",
      subtitle: "MERN Stack E-Commerce Platform",
      description:
        "A full-featured production e-commerce platform engineered with React, Node.js, Express, and MongoDB. Includes inventory management, encrypted JWT authentication, cart persistence, and dynamic catalog filtering.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      features: [
        "Dynamic catalog with real-time category filtering and fuzzy search",
        "Encrypted user authentication with JWT access and refresh cycles",
        "Stateful shopping cart with persistent local and database sync",
        "Structured RESTful API endpoints with full Postman documentation",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/muhammadhadeebutt",
      featured: true,
    },
    {
      id: 2,
      title: "Amanah — Social Community",
      category: "Full Stack",
      subtitle: "Community Platform with Next.js & PostgreSQL",
      description:
        "A modern social community web application engineered for team collaboration, interactive media feeds, posts, real-time reactions, follower networks, and responsive layouts.",
      technologies: ["Next.js", "React.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      features: [
        "Interactive feed with posts, comments, and instantaneous like toggling",
        "User profile pages with social follow/unfollow relational graphs",
        "Prisma ORM integration with normalized PostgreSQL database",
        "Zero-layout-shift responsive components optimized for mobile and desktop",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/muhammadhadeebutt",
      featured: true,
    },
    {
      id: 3,
      title: "Full-Stack Portfolio Showcase",
      category: "Frontend",
      subtitle: "High-Performance Developer Portfolio",
      description:
        "Editorial-style developer portfolio built with React 19, Vite 8, and Tailwind CSS v4. Features fluid animations, directional 3D parallax scrolling, and interactive simulators.",
      technologies: ["React 19", "Tailwind CSS v4", "Vite 8", "JavaScript ES6+"],
      features: [
        "100% Lighthouse mobile and desktop audit score across accessibility and SEO",
        "Modular data-driven architecture and clean separation of concerns",
        "Subtle architectural textures and refined monochrome editorial styling",
        "Instant CV download and automated contact dispatch",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/muhammadhadeebutt",
      featured: false,
    },
    {
      id: 4,
      title: "RESTful Authentication Microservice",
      category: "Backend",
      subtitle: "Secure Node.js & Express Security Service",
      description:
        "Production-ready authentication and authorization microservice with JWT token rotation, role-based route middleware, password hashing with bcrypt, and standardized JSON schemas.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Postman"],
      features: [
        "Complete JWT access and refresh token lifecycle management",
        "Role-based access control (RBAC) middleware for granular permissions",
        "Centralized error handling and unified status code mapping",
        "Full test suite documented and automated in Postman",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/muhammadhadeebutt",
      featured: false,
    },
  ],

  aiLabProjects: [
    {
      id: "ai-doc",
      title: "SmartDoc AI — Document Intelligence & Semantic Search",
      category: "LLM & Vector Search",
      badge: "Python & OpenAI",
      description:
        "An intelligent document processing pipeline utilizing Python, FastAPI, and vector embeddings. Ingests technical documentation, generates semantic vector representations, and enables contextual Q&A over complex manuals.",
      technologies: ["Python", "FastAPI", "OpenAI Embeddings", "Cosine Similarity", "React 19"],
      metrics: {
        latency: "~120ms search",
        accuracy: "98.4% contextual relevance",
        tech: "Vector Pipeline",
      },
      status: "Active Experiment",
      githubUrl: "https://github.com/muhammadhadeebutt",
    },
    {
      id: "ai-autoflow",
      title: "AutoFlow — Multi-Agent Engineering Workflow Automation",
      category: "Automation & Agents",
      badge: "Python & LangChain",
      description:
        "A modular Python automation pipeline that monitors code repositories, performs automated pull-request summary generation, detects API schema mismatches, and notifies engineering channels.",
      technologies: ["Python", "LangChain", "GitHub API", "Webhooks", "JSON Schema"],
      metrics: {
        latency: "<2s execution",
        throughput: "100+ tasks/day",
        tech: "Event-Driven",
      },
      status: "Production Pipeline",
      githubUrl: "https://github.com/muhammadhadeebutt",
    },
    {
      id: "ai-telemetry",
      title: "NeuralPulse — API Telemetry & Anomaly Predictor",
      category: "Machine Learning",
      badge: "FastAPI & Scikit",
      description:
        "A lightweight machine-learning anomaly detection model trained on historical API latency records. Identifies anomalous database query spikes and auto-triggers rate-limiting guards.",
      technologies: ["Python", "Scikit-Learn", "FastAPI", "Docker", "Pandas"],
      metrics: {
        accuracy: "96.2% anomaly detection",
        overhead: "<4ms inference",
        tech: "Predictive Guard",
      },
      status: "Active Research",
      githubUrl: "https://github.com/muhammadhadeebutt",
    },
  ],

  experience: [
    {
      role: "Junior Full Stack Developer",
      company: "Techset Solutions",
      location: "Lahore, Pakistan",
      period: "04/2026 – Present",
      type: "Full-Time",
      description:
        "Developing and maintaining responsive full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), along with Next.js and Python automation pipelines.",
      highlights: [
        "Architected responsive full-stack features using React 19, Next.js, and Node.js with zero layout shift.",
        "Built modular UI components with Tailwind CSS ensuring pixel-perfect responsiveness and high accessibility.",
        "Engineered scalable RESTful APIs with Express.js, implementing JWT authentication and role-based permissions.",
        "Modelled complex data structures across MongoDB and PostgreSQL (Prisma ORM) with query optimization.",
        "Collaborated in Agile sprints using Git/GitHub, structured PR reviews, and automated CI/CD linting.",
      ],
      aiProgression: [
        "Engineered Python scripts for automated API regression testing and data schema validation.",
        "Integrated LLM API endpoints into internal tooling for contextual documentation search.",
        "Refactoring legacy monolith endpoints into microservices ready for machine-learning inference pipelines.",
      ],
    },
  ],

  careerMilestones: [
    {
      phase: "Phase 1: Full-Stack Foundations",
      period: "2024 – 2025",
      title: "Core MERN & Next.js Mastery",
      detail:
        "Mastered component lifecycle, React hooks, state management, Express REST architectures, and MongoDB document schemas. Delivered multiple end-to-end full-stack applications.",
      badge: "Core Engineering",
    },
    {
      phase: "Phase 2: Production Scale & Relational DBs",
      period: "2025 – 2026",
      title: "Enterprise Systems & Techset Solutions",
      detail:
        "Contributed to production applications at Techset Solutions. Transitioned to PostgreSQL with Prisma ORM, advanced security (JWT/RBAC), and high-performance server rendering.",
      badge: "Professional Impact",
    },
    {
      phase: "Phase 3: AI Convergence & Intelligent Systems",
      period: "2026 – Present",
      title: "Advancing into AI Engineering",
      detail:
        "Expanding full-stack engineering into Python backends, FastAPI microservices, vector embeddings, prompt engineering, and automated LLM-driven development workflows.",
      badge: "AI Frontier",
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Information Technology (BSIT)",
      institution: "University of Education",
      location: "Lahore, Pakistan",
      period: "09/2024 – Present",
      status: "In Progress (Final Years)",
      description:
        "Rigorous academic curriculum covering computer science and IT fundamentals: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, and Software Engineering Methodologies.",
      coreCourses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (DBMS)",
        "Software Engineering & Architecture",
        "Computer Communication & Networks",
        "Operating Systems & Linux Fundamentals",
      ],
    },
  ],

  certifications: [
    {
      title: "Full-Stack Web Development Certification",
      issuer: "MERN Stack Engineering Specialization",
      date: "2025",
      credentialId: "FS-MERN-2025-HB",
      detail: "End-to-end web architecture, React 19 component trees, Node.js REST APIs, and MongoDB Atlas data pipelines.",
    },
    {
      title: "Python & Backend Systems Engineering",
      issuer: "Backend Architecture & Automation",
      date: "2026",
      credentialId: "PY-BE-2026-HB",
      detail: "Python data structures, FastAPI microservices, asynchronous I/O, and automated test-driven development.",
    },
    {
      title: "Relational Database Design & PostgreSQL Mastery",
      issuer: "Enterprise Database Administration",
      date: "2025",
      credentialId: "RDBMS-PG-2025-HB",
      detail: "Schema normalization, indexing strategies, ACID transactions, and Prisma ORM integration.",
    },
    {
      title: "Modern React & Next.js Architecture",
      issuer: "Frontend Performance & Scalability",
      date: "2026",
      credentialId: "REACT-NEXT-2026-HB",
      detail: "Next.js App Router, Server Components, SSR caching strategies, and Tailwind CSS design systems.",
    },
  ],
};

export default profileData;
