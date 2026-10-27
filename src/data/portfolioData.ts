export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'work' | 'education';
  description: string[];
}

export interface Certification {
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export const DEVELOPER_INFO = {
  name: "Rishi Raj Shukla",
  role: "Full Stack Developer",
  headline: "Full stack developer building clean, responsive, and performance-minded web applications.",
  location: "Delhi, India",
  email: "work.rishirajshukla@gmail.com",
  phone: "+91 6394658367",
  github: "https://github.com/rishiraj9701",
  linkedin: "https://www.linkedin.com/in/workrishirajshukla",
  twitter: "https://x.com/work_Rishi_Raj",
  tagline: "Building modern, scalable, and user-focused web applications with React, Next.js, and Node.js.",
  bio: "I'm a Full Stack Developer based in Delhi, India, currently pursuing my B.Tech in Computer Science & Engineering (AI/ML) at Axis Institute of Technology and Management. I focus on building reliable, well-architected web applications using React, Next.js, TypeScript, and modern backend technologies. My work emphasizes clean code, accessible UI components, and smooth user interactions without unnecessary fluff.",
  status: "Available for Full Stack Developer Roles & Internships",
  resumeUrl: "/resume.pdf",
};

export const PROJECTS: Project[] = [
  {
    id: "flowgrid",
    title: "Flowgrid",
    category: "Project Management SaaS",
    year: "2026",
    featured: true,
    description: "A modern project management platform for organizing projects, coordinating tasks, and collaborating with teams in a focused workspace.",
    image: "/images/projects/flowgrid-hero.png",
    imageAlt: "Live interface hero of Flowgrid featuring project management platform branding, workflow tagline, and interactive actions",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Vite"],
    features: [
      "Project organization: Multi-tenant workspace hierarchies and progress tracking",
      "Task management: Interactive status boards, assignees, and priorities",
      "Team collaboration: Workspace roles, member invites, and comments",
      "Responsive UI: Modern dark-themed dashboard built with Tailwind CSS"
    ],
    githubUrl: "https://github.com/rishiraj9701/Flowgrid",
    demoUrl: "https://flowgrid-gamma.vercel.app/"
  },
  {
    id: "billbox",
    title: "Billbox — Invoicing Platform",
    category: "Invoicing & Business Management",
    year: "2026",
    description: "A modern invoicing application with an intuitive interface designed to simplify invoice creation and billing workflows.",
    image: "/images/projects/billbox-hero.png",
    imageAlt: "Live interface hero of Billbox featuring online invoicing headline, real-time tax authority reporting banner, and action buttons",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "GSAP"],
    features: [
      "Invoice management: Real-time invoice editor and automated tax authority reporting",
      "Responsive UI: Responsive layouts with smooth Lenis momentum scrolling",
      "Reusable components: Modular architecture with SVG sprite system and Bento grid",
      "Billing workflows: Dynamic rate toggles and automated bank reconciliation feeds"
    ],
    githubUrl: "https://github.com/rishiraj9701/billbox-invoicing",
    demoUrl: "https://billbox-invoicing.vercel.app/"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "shadcn/ui",
      "React Router",
      "React Hook Form",
      "Zod"
    ]
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "JWT",
      "OAuth",
      "Server-side Validation",
      "API Error Handling"
    ]
  },
  {
    category: "Databases & Data Management",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "Prisma ORM",
      "Database Design",
      "CRUD Operations",
      "Data Modeling"
    ]
  },
  {
    category: "Developer Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "NPM",
      "Vercel",
      "Netlify",
      "Chrome DevTools",
      "Postman"
    ]
  },
  {
    category: "Engineering Practices",
    skills: [
      "Component Architecture",
      "Responsive Design",
      "Web Accessibility (WCAG)",
      "Performance Optimization",
      "Form Validation",
      "Error Handling",
      "Cross-Browser Testing",
      "Clean Code",
      "Reusable Components"
    ]
  }
];

export const EXPERIENCE_ITEMS: Experience[] = [
  {
    id: "exp-fullstack",
    role: "Full Stack Developer",
    organization: "Independent & Personal Projects",
    period: "2025 – Present",
    type: "work",
    description: [
      "Built and deployed full stack web applications, connecting responsive React interfaces with application logic and APIs.",
      "Developed reusable frontend components using React, TypeScript, Next.js, and Tailwind CSS.",
      "Integrated REST APIs and AI services to support dynamic application workflows.",
      "Worked on data handling, application state, form validation, and maintainable code architecture."
    ]
  },
  {
    id: "exp-eduskills",
    role: "Java Full Stack Development Trainee",
    organization: "EduSkills",
    period: "2024",
    type: "work",
    description: [
      "Studied Java, frontend fundamentals, server-side development concepts, and relational databases.",
      "Practiced application development, database operations, and full stack programming fundamentals through hands-on training."
    ]
  }
];

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  status: string;
  description: string;
  location?: string;
  coursework?: string[];
}

export const EDUCATION_INFO: EducationItem = {
  degree: "B.Tech in Computer Science Engineering (AI/ML)",
  institution: "Axis Institute of Technology and Management",
  duration: "2023–2027",
  status: "Currently pursuing",
  description: "Studying computer science, algorithms, databases, software engineering, and AI/ML fundamentals.",
  location: "Kanpur, Uttar Pradesh, India",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Software Engineering",
    "Artificial Intelligence & Machine Learning"
  ]
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Java Full Stack Development",
    issuer: "EduSkills",
    year: "2024"
  },
  {
    title: "Generative AI Content Creation",
    issuer: "Adobe (via Coursera)",
    year: "2024"
  },
  {
    title: "Full Stack Web Development Workshop",
    issuer: "Softpro India",
    year: "2024"
  },
  {
    title: "MongoDB Skills Badges",
    year: "2026",
    description: "MongoDB Basics, AI Strategy, AI Agents, Vector Search, Retrieval-Augmented Generation (RAG)"
  }
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible interfaces with React, Next.js, and TypeScript.",
    icon: "Layout",
    highlights: [
      "Reusable React components",
      "Responsive UI and Tailwind CSS",
      "Type-safe frontend development"
    ]
  },
  {
    title: "Backend & API Development",
    description: "Connecting user interfaces to backend services through structured APIs and reliable server-side logic.",
    icon: "Server",
    highlights: [
      "Node.js and Express.js",
      "REST API integration",
      "Validation and error handling"
    ]
  },
  {
    title: "Databases & Application Data",
    description: "Designing practical data flows that connect application features with reliable database operations.",
    icon: "Database",
    highlights: [
      "SQL and database fundamentals",
      "CRUD operations and data modeling",
      "Data validation and consistency"
    ]
  },
  {
    title: "Code Quality & Performance",
    description: "Writing maintainable code and building accessible, efficient applications across devices.",
    icon: "Gauge",
    highlights: [
      "Clean code and component architecture",
      "Accessibility and responsive design",
      "Performance optimization and testing"
    ]
  }
];
