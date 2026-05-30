export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const DEVELOPER_INFO = {
  name: "Rishi Raj Shukla",
  role: "Frontend Developer | React.js Developer | Next.js Enthusiast",
  location: "Kanpur, Uttar Pradesh, India",
  email: "work.rishirajshukla@gmail.com",
  linkedin: "https://www.linkedin.com/in/workrishirajshukla",
  github: "https://github.com/rishiraj9701",
  phone: "+91 6394658367",
  tagline: "Building modern, scalable, and user-focused web applications with React, Next.js, and Tailwind CSS.",
  summary: "Frontend Developer skilled in React.js, Next.js, JavaScript, Tailwind CSS, HTML5, and CSS3 with experience building responsive and scalable web applications.",
  resumeUrl: "/resume.pdf", // Expected location: public/resume.pdf
  experienceSummary: [
    "Reusable UI Components",
    "REST API Integration",
    "Analytics Dashboards",
    "Landing Pages",
    "SaaS Interfaces",
    "Performance Optimization",
    "Accessibility Standards",
    "Modern UI/UX"
  ],
  stats: [
    { label: "Projects Completed", value: "3+" },
    { label: "Technologies Used", value: "15+" },
    { label: "Hours Coding", value: "1,200+" },
    { label: "Learning Experience", value: "2+ Yrs" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "State Management",
    skills: ["Redux", "Context API"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "NPM", "Vite"]
  },
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "Java", "SQL"]
  },
  {
    title: "Core Concepts",
    skills: ["REST APIs", "Responsive Design", "Component Architecture", "Performance Optimization", "Debugging", "UI/UX Design"]
  }
];

export const EXPERIENCE_TIMELINE: Experience[] = [
  {
    id: "exp-1",
    role: "Frontend Developer",
    company: "Self Learning & Personal Projects",
    period: "2025 – Present",
    description: [
      "Developed interactive and fully responsive React.js and Next.js applications.",
      "Built clean, reusable UI components using Tailwind CSS and Framer Motion.",
      "Created SaaS dashboards, landing pages, and interactive data visualization charts.",
      "Applied performance optimization strategies, responsive layouts, and accessibility standards (WCAG)."
    ]
  },
  {
    id: "exp-2",
    role: "Java Full Stack Development Trainee",
    company: "EduSkills",
    period: "2024",
    description: [
      "Gained comprehensive hands-on training with Java, HTML5, CSS3, JavaScript, and database concepts.",
      "Learned core principles of full stack development, design architectures, and backend endpoints.",
      "Built practical projects, enhancing troubleshooting and debugging skills across both frontend and backend."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "AI Analytics Dashboard",
    description: "A premium SaaS-style administrative dashboard with authentic state, rich analytics graphs, responsive layouts, and modern security widgets.",
    techStack: ["React.js", "Tailwind CSS", "Recharts", "Framer Motion", "Lucide Icons"],
    features: ["Interactive Charts & Analytics", "Mock Authentication Flow", "Custom Sparklines & Metric Cards", "User Activity Feed", "Responsive Dark Mode Grid Layout"],
    githubUrl: "https://github.com/rishiraj9701",
    demoUrl: "#projects",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "project-2",
    title: "Tailwind Landing Page",
    description: "A gorgeous, high-converting product landing page designed with strict grid alignments, fluid grid aesthetics, and engaging transition animations.",
    techStack: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Framer Motion"],
    features: ["Framer Motion scroll transitions", "Glassmorphic product showcase cards", "Dynamic Pricing Toggles", "Staggered feature card reveal", "High Performance Mobile-first optimization"],
    githubUrl: "https://github.com/rishiraj9701",
    demoUrl: "#projects",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "project-3",
    title: "Personal Portfolio v2",
    description: "This world-class brand showcase featuring responsive fluid transitions, orange branding, custom glass cards, and immersive interactive mechanics.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
    features: ["Responsive Dark/Light mode toggle", "Fluid scroll tracking progress bar", "Frictionless form submission support", "Micro-interactions and hover glows", "Staggered layout reveals"],
    githubUrl: "https://github.com/rishiraj9701",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
  }
];

export const SERVICES: Service[] = [
  {
    id: "service-1",
    title: "Frontend Development",
    icon: "Layout",
    description: "Crating robust, high-performance web interfaces with atomic components and meticulous details.",
    features: ["Responsive layouts first", "Modern JS & TS architectures", "Semantic and fast HTML markup"]
  },
  {
    id: "service-2",
    title: "React.js Applications",
    icon: "Atom",
    description: "State-driven custom interfaces implementing clean React hooks, efficient renders, and solid state design.",
    features: ["Context & Redux integration", "Optimized re-render prevention", "Hooks-first modular files"]
  },
  {
    id: "service-3",
    title: "Next.js Dynamic Systems",
    icon: "Zap",
    description: "Modern production architectures built with optimized server rendering, pre-fetching, and fast loads.",
    features: ["Performance-first page loads", "Fluid SEO configuration support", "Clean layout routing features"]
  },
  {
    id: "service-4",
    title: "Dashboard & UI Design",
    icon: "BarChart3",
    description: "Visualizing analytics, metrics, and data feeds elegantly on modular glass frames.",
    features: ["Dynamic graphs with Recharts", "Sortable item lists & filters", "Custom micro-animations"]
  },
  {
    id: "service-5",
    title: "Landing Page Excellence",
    icon: "Sparkles",
    description: "High-level visual structures meant to convey immediate core product value and spark user action.",
    features: ["Bold typography hierarchy", "Framer Motion scroll triggers", "Call to Action design flows"]
  },
  {
    id: "service-6",
    title: "Performance Optimization",
    icon: "Gauge",
    description: "Auditing page delivery, loading constraints, and modern media assets for maximum lighthouse outcomes.",
    features: ["Code-splitting & lazy loads", "Asset weight compression advice", "Zero-flicker transitions"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Aman Verma",
    company: "WebCraft Solutions",
    position: "Senior Tech Lead",
    review: "Rishi's understanding of user interfaces and dedication to Frontend craft is exemplary. He has an intuitive sense of spacing, modern styling layouts, and motion patterns, making any product draft look like a premium SaaS layout.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    company: "DevSprint",
    position: "Product Manager",
    review: "We collaborated with Rishi on an analytics visualizer and a core product page. His CSS detail, React structuring, and responsive grid layouts were incredibly accurate and executed ahead of schedule.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "test-3",
    name: "Rohit Sharma",
    company: "Nexa Digital",
    position: "Founder & CTO",
    review: "Rishi Raj Shukla represents the best of the upcoming generation of Frontend engineers. He combines high-contrast modern design patterns with highly performant React code structure. The resulting UX is pristine.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];
