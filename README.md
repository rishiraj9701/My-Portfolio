# Rishi Raj Shukla — Full Stack Developer Portfolio

[Live Portfolio](https://rishirajshukla.vercel.app/) · [GitHub](https://github.com/rishiraj9701) · [LinkedIn](https://www.linkedin.com/in/workrishirajshukla)

A modern, responsive developer portfolio engineered with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**. Features curated engineering projects, technical capabilities, verified certifications, automated single-page ATS-compliant PDF resume generation, and a refined editorial dark aesthetic with warm amber/orange accents.

---

## 🔗 Verified Links

- **Live Portfolio**: https://rishirajshukla.vercel.app/
- **GitHub Profile**: https://github.com/rishiraj9701
- **LinkedIn Profile**: https://www.linkedin.com/in/workrishirajshukla

---

## ✨ Features & Sections

- **Hero & Status Bar**: Introduction, role definition, location (Delhi, India), direct contact actions, and availability status.
- **Featured Projects**: Production projects with interface previews, technical highlights, technology badges, live demos, and GitHub repositories.
  - **Flowgrid**: Full-stack project management SaaS platform ([Live Demo](https://flowgrid-gamma.vercel.app/) | [Repository](https://github.com/rishiraj9701/Flowgrid))
  - **Billbox — Invoicing Platform**: Invoicing and business management application ([Live Demo](https://billbox-invoicing.vercel.app/) | [Repository](https://github.com/rishiraj9701/billbox-invoicing))
- **Capabilities**: Frontend development, backend and REST APIs, databases, code quality, and performance.
- **Technical Skills**: Categorized frontend, backend, database, developer tooling, and engineering skills.
- **Experience & Timeline**: Practical full-stack project development and training history.
- **Education & Certifications**: B.Tech in CSE (AI/ML) and credentials from EduSkills, Adobe via Coursera, Softpro India, and MongoDB.
- **ATS-Compliant PDF Resume**: Single-page downloadable resume with clickable external hyperlinks, generated using jsPDF.
- **Design & Usability**: Responsive layouts, dark/light theme switching, persistent preferences, keyboard accessibility, and smooth transitions.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | React 19, TypeScript 5.8 |
| Styling | Tailwind CSS v4, Lucide React |
| Animation | Motion (Framer Motion) |
| Document Generation | jsPDF, HTML2Canvas, DOMPurify |
| Build & Tooling | Vite 6.2, TSX, ESBuild |
| Backend | Express.js |

---

## 📂 Project Structure

```text
My-Portfolio/
├── public/
│   ├── images/projects/
│   │   ├── billbox-hero.png
│   │   └── flowgrid-hero.png
│   └── resume.pdf
├── scripts/
│   └── generate-pdf.ts
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── context/
│   ├── data/
│   │   └── portfolioData.ts
│   ├── lib/
│   ├── utils/
│   │   └── resumeGenerator.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── server.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js 18 or higher (Node.js 20+ recommended)
- npm 9 or higher

### 1. Clone the repository

```bash
git clone https://github.com/rishiraj9701/My-Portfolio.git
cd My-Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The application starts locally with hot module replacement (HMR).

---

## 🏗️ Build & Verification Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run lint` | Runs the configured TypeScript checks |
| `npm run prebuild` | Generates and validates the single-page resume PDF |
| `npm run build` | Builds the production application and server |
| `npm run preview` | Previews the production frontend locally |
| `npm start` | Starts the production server |

---

## 🌐 Deployment

### Deploy to Vercel

1. Import the repository into [Vercel](https://vercel.com/).
2. Select the Vite framework preset.
3. Configure the build command as `npm run build`.
4. Set the output directory to `dist`.
5. Deploy the project.

**Live Portfolio:** https://rishirajshukla.vercel.app/

### Deploy to Netlify

1. Connect the repository to [Netlify](https://www.netlify.com/).
2. Configure the build command as `npm run build`.
3. Set the publish directory to `dist`.
4. Deploy the project.

### Deploy to a Node.js Host

1. Configure any required environment variables.
2. Run `npm install && npm run build`.
3. Start the production server with `npm start`.

---

## 📄 License

This project is open-source and available under the [MIT License](https://github.com/rishiraj9701/My-Portfolio/blob/main/LICENSE).
