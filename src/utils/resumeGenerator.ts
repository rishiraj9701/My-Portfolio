import { jsPDF } from 'jspdf';

export function generateResumePDF(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Color Palette Constants - High contrast, ATS-safe colors
  const PrimaryColor = '#0f172a'; // Slate 900
  const AccentColor = '#c2410c';  // Warm Dark Amber/Orange (contrast-safe)
  const LinkColor = '#1d4ed8';    // Blue for clickable links
  const Charcoal = '#1e293b';     // Slate 800 for body text
  const Gray = '#475569';         // Slate 600 for metadata/dates
  const LightGray = '#cbd5e1';    // Slate 300 for rules

  // Page Dimensions & Margins (A4: 210 x 297 mm)
  const leftMargin = 15;
  const contentWidth = 180; // 210 - 15 - 15
  let currentY = 13;

  // Helper: Add clickable link with visual styling
  const addClickableText = (
    text: string,
    x: number,
    y: number,
    url: string,
    color = LinkColor,
    isBold = false
  ): number => {
    doc.setFont('Helvetica', isBold ? 'bold' : 'normal');
    doc.setTextColor(color);
    doc.text(text, x, y);
    const textWidth = doc.getTextWidth(text);
    // doc.link bounds in mm: x, y (top-left of link area), width, height
    doc.link(x, y - 2.8, textWidth, 3.5, { url });
    return textWidth;
  };

  // 1. HEADER SECTION (ATS Standard Single Column)
  doc.setTextColor(PrimaryColor);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('Rishi Raj Shukla', leftMargin, currentY);
  currentY += 5.2;

  // Headline
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(AccentColor);
  doc.text('Full Stack Developer | React.js, Next.js & TypeScript', leftMargin, currentY);
  currentY += 4.5;

  // Contact Row 1: Location, Phone, Email
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(Gray);

  let cursorX = leftMargin;
  doc.text('Delhi, India  •  +91 6394658367  •  ', cursorX, currentY);
  cursorX += doc.getTextWidth('Delhi, India  •  +91 6394658367  •  ');
  const emailWidth = addClickableText('work.rishirajshukla@gmail.com', cursorX, currentY, 'mailto:work.rishirajshukla@gmail.com');
  cursorX += emailWidth;

  currentY += 4;

  // Contact Row 2: Interactive Links (LinkedIn, GitHub, Portfolio)
  cursorX = leftMargin;
  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(Gray);
  doc.text('LinkedIn: ', cursorX, currentY);
  cursorX += doc.getTextWidth('LinkedIn: ');
  cursorX += addClickableText('linkedin.com/in/workrishirajshukla', cursorX, currentY, 'https://www.linkedin.com/in/workrishirajshukla');

  doc.setTextColor(Gray);
  doc.text('  •  GitHub: ', cursorX, currentY);
  cursorX += doc.getTextWidth('  •  GitHub: ');
  cursorX += addClickableText('github.com/rishiraj9701', cursorX, currentY, 'https://github.com/rishiraj9701');

  doc.setTextColor(Gray);
  doc.text('  •  Portfolio: ', cursorX, currentY);
  cursorX += doc.getTextWidth('  •  Portfolio: ');
  cursorX += addClickableText('rishiraj-portfolio.vercel.app', cursorX, currentY, 'https://interview-website-tau.vercel.app/');

  currentY += 4;

  // Top Divider
  doc.setDrawColor(LightGray);
  doc.setLineWidth(0.4);
  doc.line(leftMargin, currentY, leftMargin + contentWidth, currentY);
  currentY += 4.5;

  // Helper for Section Headings
  const addSectionHeading = (title: string) => {
    doc.setTextColor(PrimaryColor);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(title.toUpperCase(), leftMargin, currentY);

    currentY += 1.4;
    doc.setDrawColor(PrimaryColor);
    doc.setLineWidth(0.35);
    doc.line(leftMargin, currentY, leftMargin + contentWidth, currentY);
    currentY += 3.8;
  };

  // 2. PROFESSIONAL SUMMARY
  addSectionHeading('Professional Summary');
  doc.setTextColor(Charcoal);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.3);

  const summaryText =
    'Computer Science Engineering (AI/ML) undergraduate with a solid foundation in full-stack web development and Java Full Stack training. ' +
    'Experienced in engineering responsive user interfaces with React and Next.js, implementing client and application logic, integrating RESTful APIs and AI services, ' +
    'and managing application state and structured data. Dedicated to building clean, maintainable, and performance-minded web applications with modern engineering practices.';

  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, leftMargin, currentY);
  currentY += (summaryLines.length * 3.6) + 3;

  // 3. TECHNICAL SKILLS
  addSectionHeading('Technical Skills');

  const skillGroups = [
    { label: 'Frontend', val: 'React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap' },
    { label: 'Backend & APIs', val: 'RESTful APIs, Application Logic, API Integration, JSON Data Handling, Server-Side Concepts' },
    { label: 'Databases', val: 'SQL, Relational Database Fundamentals, Data Modeling Basics' },
    { label: 'Languages & AI', val: 'Java (Basic), Python (Basic), Gemini API Integration' },
    { label: 'Tools & Platforms', val: 'Git, GitHub, Vite, VS Code, Chrome DevTools, NPM, Vercel, Netlify' },
    { label: 'Engineering Practices', val: 'Component Architecture, Responsive Design, State Management, Debugging, Performance Optimization' }
  ];

  skillGroups.forEach(group => {
    doc.setTextColor(PrimaryColor);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8.3);
    const prefix = `${group.label}: `;
    doc.text(prefix, leftMargin, currentY);
    const prefixWidth = doc.getTextWidth(prefix);

    doc.setTextColor(Charcoal);
    doc.setFont('Helvetica', 'normal');
    const valLines = doc.splitTextToSize(group.val, contentWidth - prefixWidth);
    doc.text(valLines, leftMargin + prefixWidth, currentY);
    currentY += (valLines.length * 3.6);
  });
  currentY += 3;

  // 4. EXPERIENCE
  addSectionHeading('Experience');

  const experiences = [
    {
      role: 'Full Stack Developer',
      organization: 'Independent & Personal Projects',
      period: '2025 – Present',
      bullets: [
        'Built and deployed full-stack web applications, connecting responsive React and TypeScript frontends with dynamic application logic and external services.',
        'Developed reusable, modular frontend components using React, Next.js, and Tailwind CSS with a focus on component architecture and responsive design.',
        'Integrated REST APIs and AI capabilities (Google Gemini API) to support interactive user workflows, contextual evaluation, and dynamic data delivery.',
        'Implemented client-side application logic, state management, form validation, and data handling for reliable user experience and maintainable code.'
      ]
    },
    {
      role: 'Java Full Stack Development Trainee',
      organization: 'EduSkills',
      period: '2024',
      bullets: [
        'Completed structured training covering Java, frontend fundamentals (HTML5, CSS3, JavaScript), and core server-side development concepts.',
        'Practiced relational database fundamentals, SQL queries, data modeling, and full-stack programming concepts through hands-on technical exercises.'
      ]
    }
  ];

  experiences.forEach(exp => {
    // Header Line: Role & Period
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(PrimaryColor);
    doc.text(exp.role, leftMargin, currentY);

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.3);
    doc.setTextColor(Gray);
    const periodWidth = doc.getTextWidth(exp.period);
    doc.text(exp.period, leftMargin + contentWidth - periodWidth, currentY);
    currentY += 3.6;

    // Organization Line
    doc.setFont('Helvetica', 'italic');
    doc.setFontSize(8.3);
    doc.setTextColor(AccentColor);
    doc.text(exp.organization, leftMargin, currentY);
    currentY += 3.6;

    // Bullet points
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(Charcoal);
    doc.setFontSize(8.3);
    exp.bullets.forEach(bullet => {
      doc.text('•', leftMargin + 1.5, currentY);
      const bulletLines = doc.splitTextToSize(bullet, contentWidth - 5);
      doc.text(bulletLines, leftMargin + 4.5, currentY);
      currentY += (bulletLines.length * 3.5);
    });
    currentY += 2.2;
  });

  // 5. FEATURED PROJECTS
  addSectionHeading('Featured Projects');

  const projects = [
    {
      title: 'Flowgrid — Project Management SaaS',
      tech: 'React, Tailwind CSS, Node.js, Express.js, PostgreSQL, Prisma ORM',
      demoUrl: 'https://flowgrid-gamma.vercel.app/',
      repoUrl: 'https://github.com/rishiraj9701/Flowgrid',
      period: '2026',
      bullets: [
        'Architected a full-stack project management platform with multi-tenant workspaces, task boards, and interactive progress tracking.',
        'Built REST APIs in Express.js with PostgreSQL & Prisma ORM, implementing JWT authentication and role-based access control.',
        'Engineered dual-mode architecture supporting offline demo persistence via localStorage and connected PostgreSQL synchronization.'
      ]
    },
    {
      title: 'Nexus AI Analytics Dashboard',
      tech: 'React.js, TypeScript, Tailwind CSS, Recharts, Lucide Icons',
      demoUrl: 'https://nexusanalyticssaas.netlify.app/',
      repoUrl: 'https://github.com/rishiraj9701',
      period: '2026',
      bullets: [
        'Built a modern SaaS analytics dashboard delivering interactive data visualizations, key performance metrics, and activity tracking.',
        'Implemented dynamic data charts and real-time visualization widgets with Recharts, managing structured datasets and dashboard state.',
        'Architected modular, accessible UI components with responsive grid layouts, custom navigation, and dark/light theme support.'
      ]
    }
  ];

  projects.forEach(proj => {
    // Title & Tech Line
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(PrimaryColor);
    doc.text(proj.title, leftMargin, currentY);
    const titleWidth = doc.getTextWidth(proj.title);

    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8.3);
    doc.setTextColor(Gray);
    doc.text(`  |  ${proj.tech}`, leftMargin + titleWidth, currentY);

    const periodWidth = doc.getTextWidth(proj.period);
    doc.text(proj.period, leftMargin + contentWidth - periodWidth, currentY);
    currentY += 3.5;

    // Links Line (Interactive clickable URLs)
    let linkX = leftMargin;
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(Gray);
    doc.text('Live Demo: ', linkX, currentY);
    linkX += doc.getTextWidth('Live Demo: ');
    linkX += addClickableText(proj.demoUrl.replace('https://', ''), linkX, currentY, proj.demoUrl, LinkColor);

    doc.setTextColor(Gray);
    doc.text('   |   Source Code: ', linkX, currentY);
    linkX += doc.getTextWidth('   |   Source Code: ');
    linkX += addClickableText('github.com/rishiraj9701', linkX, currentY, proj.repoUrl, LinkColor);

    currentY += 3.5;

    // Bullets
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(Charcoal);
    doc.setFontSize(8.3);
    proj.bullets.forEach(bullet => {
      doc.text('•', leftMargin + 1.5, currentY);
      const bulletLines = doc.splitTextToSize(bullet, contentWidth - 5);
      doc.text(bulletLines, leftMargin + 4.5, currentY);
      currentY += (bulletLines.length * 3.5);
    });
    currentY += 2;
  });

  // 6. EDUCATION & CERTIFICATIONS
  addSectionHeading('Education & Certifications');

  // Education Subheading
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(PrimaryColor);
  doc.text('Axis Institute of Technology and Management', leftMargin, currentY);

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.3);
  doc.setTextColor(Gray);
  const edPeriod = '2023 – 2027';
  const edWidth = doc.getTextWidth(edPeriod);
  doc.text(edPeriod, leftMargin + contentWidth - edWidth, currentY);
  currentY += 3.5;

  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(Charcoal);
  doc.setFontSize(8.3);
  doc.text('•  B.Tech in Computer Science Engineering (AI/ML)  —  Kanpur, Uttar Pradesh, India', leftMargin + 1.5, currentY);
  currentY += 4.5;

  // Certifications Subheading
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(PrimaryColor);
  doc.text('Certifications & Training', leftMargin, currentY);
  currentY += 3.5;

  const certifications = [
    'Java Full Stack Development  —  EduSkills (2024)',
    'Generative AI Content Creation  —  Adobe (via Coursera, 2024)',
    'Full Stack Web Development Workshop  —  Softpro India (2024)',
    'MongoDB Skills Badges  —  MongoDB (Basics, AI Strategy & Vector Search, 2026)'
  ];

  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(Charcoal);
  doc.setFontSize(8.3);
  certifications.forEach(cert => {
    doc.text('•', leftMargin + 1.5, currentY);
    doc.text(cert, leftMargin + 4.5, currentY);
    currentY += 3.4;
  });

  return doc;
}

export function downloadResumePDF() {
  const doc = generateResumePDF();
  doc.save('Rishi_Raj_Shukla_Resume.pdf');
}
