const profileData = {
  greeting: "Hi I am",
  name: "Muhammad Hadee Butt",
  shortName: "Hadee",
  role: "Full Stack Developer",
  tagline: "Junior MERN Stack Developer building scalable, modern & high-performance web applications.",
  about: "I am a dedicated Junior MERN Stack Developer with professional experience building and maintaining full-stack web applications using React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Experienced in developing RESTful APIs, implementing robust authentication & authorization with JWT, building responsive and reusable React interfaces, debugging complex application issues, and working with Git/GitHub in collaborative engineering environments.",
  profileImage: "/assets/imag2.jpeg",
  aboutImage: "/assets/about.jpeg",
  cvFile: "/assets/Muhammad_Hadee_Butt_CV.pdf",
  email: "muhammadhadeebutt@gmail.com",
  phone: "03278020047",
  location: "Lahore, Pakistan",
  availability: "Available for Full-time & Freelance Projects",

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
    { value: "1+ Years", label: "Hands-on Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "100%", label: "Code Quality Focus" },
  ],

  services: [
    {
      id: "fullstack",
      title: "Full-Stack Development",
      description:
        "Building end-to-end, resilient web applications using modern MERN stack architecture (MongoDB, Express.js, React.js, Node.js) and Next.js for maximum performance and scalability.",
      features: [
        "End-to-end scalable architecture",
        "MERN & Next.js production systems",
        "Reusable component hierarchies",
        "State management & optimized data flow",
      ],
      icon: "code",
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      description:
        "Designing responsive, accessible, and pixel-perfect user interfaces using React.js, Next.js, and Tailwind CSS with smooth transitions and interactive micro-experiences.",
      features: [
        "Modern React 19 & Next.js patterns",
        "Tailwind CSS responsive design",
        "Cross-browser and mobile-first layouts",
        "Fast load times & SEO best practices",
      ],
      icon: "layout",
    },
    {
      id: "backend",
      title: "RESTful API & Backend",
      description:
        "Architecting robust server-side logic, controllers, and RESTful APIs using Node.js and Express.js with clean routing, schema validation, and structured error handling.",
      features: [
        "RESTful API design & integration",
        "Node.js & Express.js microservices",
        "Comprehensive input validation",
        "Postman testing & API documentation",
      ],
      icon: "server",
    },
    {
      id: "database",
      title: "Database Design & Modeling",
      description:
        "Creating normalized relational schemas with PostgreSQL and Prisma ORM, alongside flexible NoSQL document schemas with MongoDB and Mongoose.",
      features: [
        "MongoDB & Mongoose schema design",
        "PostgreSQL & Prisma ORM migrations",
        "Query optimization & indexing",
        "Data integrity & relationship mapping",
      ],
      icon: "database",
    },
    {
      id: "auth",
      title: "Authentication & Security",
      description:
        "Implementing enterprise-grade security protocols with JSON Web Tokens (JWT), role-based access control (RBAC), bcrypt hashing, and protected route handlers.",
      features: [
        "JWT token authentication & authorization",
        "Role-based access control (RBAC)",
        "Secure token storage & session handling",
        "Route guards & middleware protection",
      ],
      icon: "shield",
    },
    {
      id: "optimization",
      title: "Debugging & Optimization",
      description:
        "Diagnosing and fixing API, database, and frontend bottlenecks. Refactoring legacy code into clean, maintainable, and high-performance modules.",
      features: [
        "Frontend & backend troubleshooting",
        "API response time tuning",
        "Code refactoring & clean architecture",
        "Collaborative Git version control",
      ],
      icon: "zap",
    },
  ],

  skills: {
    frontend: [
      { name: "React.js", level: "90%" },
      { name: "Next.js", level: "85%" },
      { name: "JavaScript (ES6+)", level: "92%" },
      { name: "Tailwind CSS", level: "95%" },
      { name: "HTML5 & CSS3", level: "95%" },
      { name: "Bootstrap", level: "85%" },
    ],
    backend: [
      { name: "Node.js", level: "88%" },
      { name: "Express.js", level: "90%" },
      { name: "REST APIs", level: "92%" },
      { name: "Python", level: "75%" },
      { name: "JWT Auth", level: "90%" },
    ],
    database: [
      { name: "MongoDB", level: "88%" },
      { name: "PostgreSQL", level: "82%" },
      { name: "Prisma ORM", level: "85%" },
      { name: "Mongoose", level: "90%" },
      { name: "Data Modeling", level: "85%" },
    ],
    tools: [
      { name: "Git & GitHub", level: "90%" },
      { name: "Postman", level: "92%" },
      { name: "VS Code", level: "95%" },
      { name: "Docker", level: "72%" },
      { name: "OOP & DSA", level: "85%" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Lean E-Commerce System",
      category: "Full Stack",
      subtitle: "MERN Stack E-Commerce Platform",
      description:
        "A full-featured e-commerce web application engineered with the MERN stack. Includes robust product management, user authentication, cart persistence, order processing, and automated inventory workflows.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      features: [
        "Product catalog with search and dynamic filtering",
        "Secure user authentication with JWT & encrypted passwords",
        "Stateful shopping cart and checkout processing",
        "RESTful APIs for orders, users, and product catalog",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/muhammadhadeebutt",
      featured: true,
    },
    {
      id: 2,
      title: "Amanah — Social Media & Community",
      category: "Full Stack",
      subtitle: "Community Platform with Next.js & PostgreSQL",
      description:
        "A modern social community platform inspired by Facebook and Workplace, engineered for team collaboration, interactive social feeds, posts, real-time reactions, follower relationships, and notifications.",
      technologies: ["Next.js", "React.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      features: [
        "Interactive feed with posts, comments, and real-time likes",
        "User profile pages with social follow/unfollow graph",
        "Prisma ORM integration with relational PostgreSQL database",
        "Responsive, mobile-optimized component architecture",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/muhammadhadeebutt",
      featured: true,
    },
    {
      id: 3,
      title: "Full-Stack Portfolio Showcase",
      category: "Frontend",
      subtitle: "Interactive Modern Portfolio",
      description:
        "Custom high-speed developer portfolio built with React and Tailwind CSS. Features dynamic project filtering, smooth section navigation, responsive drawer navigation, and contact integration.",
      technologies: ["React.js", "Tailwind CSS", "Vite", "JavaScript ES6+"],
      features: [
        "Responsive across mobile, tablet, and desktop screens",
        "Modular data-driven architecture",
        "Custom SVG iconography matching modern sapphire & slate palette",
        "Instant CV download and contact dispatch",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/muhammadhadeebutt",
      featured: false,
    },
    {
      id: 4,
      title: "RESTful Authentication & API Service",
      category: "Backend",
      subtitle: "Secure Node.js & Express Microservice",
      description:
        "Production-ready authentication and authorization microservice with JWT token rotation, role-based route middleware, password hashing, and clean error response schemas.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Postman"],
      features: [
        "JWT access and refresh token lifecycle",
        "Role-based access control (RBAC) middleware",
        "Centralized error handling and status code mapping",
        "Full test suite documented in Postman",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/muhammadhadeebutt",
      featured: false,
    },
  ],

  experience: [
    {
      role: "Junior Full Stack Developer",
      company: "Techset solutions",
      location: "Lahore, Pakistan",
      period: "04/2026 – Present",
      type: "Full-Time",
      description:
        "Developing and maintaining responsive full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), along with Next.js and Python.",
      highlights: [
        "Developed and maintained responsive full-stack web applications using MERN stack and Next.js.",
        "Built reusable and responsive UI components using React.js, Next.js, Tailwind CSS, and JavaScript (ES6+).",
        "Developed and integrated RESTful APIs using Node.js and Express.js for application features and data workflows.",
        "Implemented authentication and authorization using JWT and integrated secure user access workflows.",
        "Worked with MongoDB and PostgreSQL, including database schema design, data modeling, and API integration.",
        "Debugged application issues, investigated API and frontend problems, and implemented fixes.",
        "Used Git and GitHub for version control in a collaborative agile engineering environment.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Information Technology (BSIT)",
      institution: "University of Education",
      location: "Lahore, Pakistan",
      period: "09/2024 – Present",
      description:
        "Studying core computer science and information technology fundamentals, including Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Software Engineering.",
    },
  ],
};

export default profileData;