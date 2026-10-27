# Rishi Raj Shukla — Full Stack Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-rishirajshukla.netlify.app-orange?style=flat-square&logo=netlify)](https://rishirajshukla.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-rishiraj9701-181717?style=flat-square&logo=github)](https://github.com/rishiraj9701)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-workrishirajshukla-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/workrishirajshukla)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)

A modern, responsive developer portfolio engineered with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**. Features curated engineering projects, technical capabilities, verified certifications, automated single-page ATS-compliant PDF resume generation, and a refined editorial dark aesthetic with warm amber/orange accents.

---

## 🔗 Verified Links

* **Live Portfolio**: [https://rishirajshukla.netlify.app/](https://rishirajshukla.netlify.app/)
* **GitHub Profile**: [https://github.com/rishiraj9701](https://github.com/rishiraj9701)
* **LinkedIn Profile**: [https://www.linkedin.com/in/workrishirajshukla](https://www.linkedin.com/in/workrishirajshukla)

---

## ✨ Features & Sections

* **Hero & Status Bar**: Introduction, role definition, location (Delhi, India), direct contact actions, and active availability status.
* **Featured Projects**: Balanced two-column grid displaying verified production projects with genuine widescreen interface previews, technical highlights, technology tag badges, and direct links to live deployments and GitHub repositories:
  * **Flowgrid**: Modern full-stack project management SaaS platform ([Live Demo](https://flowgrid-gamma.vercel.app/) | [Repository](https://github.com/rishiraj9701/Flowgrid))
  * **Billbox — Invoicing Platform**: Streamlined invoicing and business management application ([Live Demo](https://billbox-invoicing.vercel.app/) | [Repository](https://github.com/rishiraj9701/billbox-invoicing))
* **Capabilities & Core Strengths**: Architectural capabilities covering Frontend Development, Backend & REST APIs, Databases & Application Data, and Code Quality & Performance.
* **Technical Skills Base**: Organized categorical skill tags covering Frontend, Backend, Databases, Developer Tools, and Engineering Practices.
* **Experience & Timeline**: Practical full-stack project development and training history.
* **Education & Certifications**: B.Tech in CSE (AI/ML) degree overview, verified credentials from EduSkills, Adobe (via Coursera), Softpro India, and MongoDB Skills Badges.
* **Automated ATS-Compliant PDF Resume**: Interactive client-side and pre-rendered single-page downloadable PDF resume powered by jsPDF with clickable external hyperlinks.
* **Design & Usability**: Responsive design across mobile, tablet, and desktop viewports, dark/light theme switching with localStorage persistence, accessible keyboard navigation, and smooth reveal transitions.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19, TypeScript 5.8 |
| **Styling & Design System** | Tailwind CSS v4, Lucide React Icons |
| **Animation & Micro-interactions** | Motion (Framer Motion) |
| **Document Generation** | jsPDF, HTML2Canvas, DOMPurify |
| **Build & Tooling** | Vite 6.2, TSX, ESBuild |
| **Backend & Server** | Express.js (supporting static client serving & API integration) |

---

## 📂 Project Structure

```
My-Portfolio/
├── public/
│   ├── images/
│   │   └── projects/              # Authentic 16:9 project preview screenshots
│   │       ├── billbox-hero.png
│   │       └── flowgrid-hero.png
│   └── resume.pdf                 # Auto-generated ATS-compliant single-page PDF resume
├── scripts/
│   └── generate-pdf.ts            # Build-time script validating and compiling resume.pdf
├── src/
│   ├── components/
│   │   ├── common/                # Shared layout elements (Navbar, Footer, Background, Modals)
│   │   ├── layout/                # Root page wrapper and container constraints
│   │   ├── sections/              # Page sections (Hero, About, Projects, Skills, Experience, Education, Contact)
│   │   └── ui/                    # Reusable primitives (Card, Badge, Button, Separator)
│   ├── context/                   # Theme context provider (Dark / Light mode)
│   ├── data/
│   │   └── portfolioData.ts       # Central typed data model for projects, skills, education, and credentials
│   ├── lib/                       # Utility functions (cn class merging)
│   ├── utils/
│   │   └── resumeGenerator.ts     # jsPDF single-page layout engine with strict dimension checks
│   ├── App.tsx                    # Main application assembly and section layout
│   ├── index.css                  # Global styles, typography tokens, and custom utility classes
│   └── main.tsx                   # React DOM mount point
├── index.html                     # HTML shell, web fonts, and SEO meta tags
├── package.json                   # Project dependencies, scripts, and engine configs
├── server.ts                      # Express production server script
├── tsconfig.json                  # TypeScript compiler configuration
└── vite.config.ts                 # Vite build and plugin configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites

* **Node.js**: v18.0.0 or higher (Node 20+ recommended)
* **npm**: v9.0.0 or higher

### 1. Clone the repository

```bash
git clone https://github.com/rishiraj9701/My-Portfolio.git
cd My-Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

The application will start locally with hot module replacement (HMR).

---

## 🏗️ Build & Verification Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs development server using `tsx server.ts` |
| `npm run lint` | Runs TypeScript type checker (`tsc --noEmit`) |
| `npm run prebuild` | Generates and validates that `resume.pdf` fits strictly on 1 page |
| `npm run build` | Compiles Vite production bundle and bundles `server.ts` into `dist/server.cjs` |
| `npm run preview` | Previews the compiled production build locally |
| `npm start` | Launches production server from `dist/server.cjs` |

---

## 🌐 Deployment Instructions

### Deploy to Netlify (Recommended)
1. Link your GitHub repository to [Netlify](https://www.netlify.com/).
2. Configure build settings:
   * **Build Command**: `npm run build`
   * **Publish Directory**: `dist`
3. Deploy!

### Deploy to Vercel
1. Import your GitHub repository on [Vercel](https://vercel.com/).
2. Configure project settings:
   * **Framework Preset**: Vite
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
3. Deploy!

### Deploy to Node.js / Container Host
1. Set environment variables if needed (`.env`).
2. Run `npm install && npm run build`.
3. Start the production server with `npm start` (serves the static frontend and APIs on the configured `PORT`).

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
