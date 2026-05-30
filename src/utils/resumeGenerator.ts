import { jsPDF } from 'jspdf';

export function generateResumePDF(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Color Palette Constants
  const PrimaryColor = '#0b0f17';
  const SecondaryColor = '#f97316';
  const Charcoal = '#27272a';
  const Gray = '#52525b';
  const LightGray = '#e4e4e7';

  // State Trackers
  let currentY = 18;
  const leftMargin = 20;
  const contentWidth = 170; // 210 - 20 - 20

  // 1. HEADER SECTION
  doc.setTextColor(PrimaryColor);
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(24);
  doc.text('Rishi Raj Shukla', leftMargin, currentY);
  currentY += 6;

  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(SecondaryColor);
  doc.text('Frontend Developer   |   React.js Developer   |   Next.js Enthusiast', leftMargin, currentY);
  currentY += 6;

  // Contact Info Sub-Header Row
  doc.setFontSize(8.5);
  doc.setTextColor(Gray);
  const contactString = '+91 6394658367   |   work.rishirajshukla@gmail.com   |   Kanpur, Uttar Pradesh';
  doc.text(contactString, leftMargin, currentY);
  currentY += 4;

  const linksString = 'linkedin.com/in/workrishirajshukla   |   github.com/rishiraj9701';
  doc.text(linksString, leftMargin, currentY);
  currentY += 4;

  // Divider Line
  doc.setDrawColor(LightGray);
  doc.setLineWidth(0.3);
  doc.line(leftMargin, currentY, leftMargin + contentWidth, currentY);
  currentY += 6;

  // Generic Function to Render Section Heading
  const addSectionHeading = (title: string) => {
    doc.setTextColor(PrimaryColor);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(title.toUpperCase(), leftMargin, currentY);
    
    // Draw fine under-line
    currentY += 1.5;
    doc.setDrawColor(LightGray);
    doc.setLineWidth(0.2);
    doc.line(leftMargin, currentY, leftMargin + contentWidth, currentY);
    currentY += 4.5;
  };

  // 2. SUMMARY
  addSectionHeading('Summary');
  doc.setTextColor(Charcoal);
  doc.setFont('Helvetica', 'normal');
  doc.setFontSize(8.5);

  const summaryLines = doc.splitTextToSize(
    'Frontend Developer skilled in React.js, Next.js, JavaScript, Tailwind CSS, HTML5, and CSS3 with experience building responsive and scalable web applications. Proficient in developing reusable UI components, integrating REST APIs, optimizing performance, and implementing modern UI/UX practices. Experienced in creating analytics dashboards, landing pages, and responsive interfaces with a focus on accessibility, maintainability, and cross-browser compatibility.',
    contentWidth
  );
  doc.text(summaryLines, leftMargin, currentY);
  currentY += (summaryLines.length * 4) + 4;

  // 3. SKILLS
  addSectionHeading('Skills');
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(8.5);

  const skillItems = [
    { label: 'Frontend', val: 'React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap' },
    { label: 'State Management', val: 'Redux (Basics), Context API' },
    { label: 'Developer Tools', val: 'Git, GitHub, VS Code, Chrome DevTools, NPM, Vite' },
    { label: 'Programming Languages', val: 'JavaScript, Python (Basic), Java, SQL' },
    { label: 'Web Development', val: 'Responsive Design, REST API Integration, Component-Based Architecture, Cross-Browser Compatibility, Performance Optimization, Debugging' },
    { label: 'Soft Skills', val: 'Problem Solving, Analytical Thinking, Team Collaboration, Technical Communication, Time Management' }
  ];

  skillItems.forEach(item => {
    doc.setTextColor(PrimaryColor);
    doc.setFont('Helvetica', 'bold');
    doc.text(`*  ${item.label}: `, leftMargin, currentY);
    const labelWidth = doc.getTextWidth(`*  ${item.label}: `);

    doc.setTextColor(Charcoal);
    doc.setFont('Helvetica', 'normal');
    const rightValLines = doc.splitTextToSize(item.val, contentWidth - labelWidth - 2);
    doc.text(rightValLines, leftMargin + labelWidth, currentY);
    currentY += (rightValLines.length * 4);
  });
  currentY += 4;

  // 4. EXPERIENCE
  addSectionHeading('Experience');

  const experiences = [
    {
      role: 'Java Full Stack Development Trainee',
      company: 'EduSkills',
      period: '2024',
      bullets: [
        'Completed training in Full Stack Web Development covering frontend, backend, and database technologies.',
        'Developed hands-on experience with Java, HTML5, CSS3, JavaScript, and modern web development concepts.',
        'Built web applications following responsive design principles and industry-standard practices.',
        'Strengthened problem-solving, debugging, and software development skills through practical projects.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Self-Learning & Personal Projects',
      period: '2025 - Present',
      bullets: [
        'Developed responsive web applications using React.js, Next.js, JavaScript, and Tailwind CSS.',
        'Built reusable UI components and modern frontend interfaces using component-based architecture.',
        'Implemented responsive layouts, dashboards, and landing pages optimized for multiple devices.',
        'Applied Git workflows, performance optimization, accessibility standards, and UI/UX best practices.'
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
    doc.setTextColor(Gray);
    const periodWidth = doc.getTextWidth(exp.period);
    doc.text(exp.period, leftMargin + contentWidth - periodWidth, currentY);
    currentY += 4;

    // Subheader Line: Company
    doc.setFont('Helvetica', 'oblique');
    doc.setFontSize(8.5);
    doc.setTextColor(SecondaryColor);
    doc.text(exp.company, leftMargin, currentY);
    currentY += 4;

    // Bullet points
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(Charcoal);
    exp.bullets.forEach(bullet => {
      doc.text('-', leftMargin + 2, currentY);
      const bulletLines = doc.splitTextToSize(bullet, contentWidth - 8);
      doc.text(bulletLines, leftMargin + 5, currentY);
      currentY += (bulletLines.length * 4) + 0.5;
    });
    currentY += 3;
  });

  // 5. PROJECTS
  addSectionHeading('Projects');

  const projectsList = [
    {
      title: 'AI Analytics Dashboard',
      tech: 'React.js, Tailwind CSS',
      period: '2026',
      bullets: [
        'Developed a SaaS-style analytics dashboard using React.js and Tailwind CSS.',
        'Built responsive layouts and reusable UI components for desktop, tablet, and mobile devices.',
        'Implemented interactive charts and data visualization features to improve analytics insights.',
        'Integrated authentication pages, dark mode functionality, and performance optimizations.'
      ]
    },
    {
      title: 'Tailwind Landing Page',
      tech: 'HTML5, Tailwind CSS, JavaScript',
      period: '2026',
      bullets: [
        'Developed a modern ToDesktop-inspired landing page with a fully responsive design.',
        'Built navigation menus, hero sections, feature showcases, and pricing components.',
        'Implemented smooth animations and interactive UI elements using JavaScript and Tailwind CSS.',
        'Improved accessibility, responsiveness, and overall user experience through clean code practices.'
      ]
    }
  ];

  projectsList.forEach(proj => {
    // Header line
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(PrimaryColor);
    doc.text(`${proj.title}  --  ${proj.tech}`, leftMargin, currentY);

    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(Gray);
    const pWidth = doc.getTextWidth(proj.period);
    doc.text(proj.period, leftMargin + contentWidth - pWidth, currentY);
    currentY += 4;

    // Bullets
    doc.setFont('Helvetica', 'normal');
    doc.setTextColor(Charcoal);
    proj.bullets.forEach(bullet => {
      doc.text('-', leftMargin + 2, currentY);
      const bulletLines = doc.splitTextToSize(bullet, contentWidth - 8);
      doc.text(bulletLines, leftMargin + 5, currentY);
      currentY += (bulletLines.length * 4) + 0.5;
    });
    currentY += 3;
  });

  // 6. CERTIFICATIONS & EDUCATION
  addSectionHeading('Certifications & Education');

  // Education layout
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(PrimaryColor);
  doc.text('Axis Institute of Technology and Management', leftMargin, currentY);

  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(Gray);
  const edPeriod = '2023 - 2027';
  const edWidth = doc.getTextWidth(edPeriod);
  doc.text(edPeriod, leftMargin + contentWidth - edWidth, currentY);
  currentY += 4.5;

  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(Charcoal);
  doc.setFontSize(8.5);
  doc.text('-  B.Tech in Computer Science Engineering (AI/ML)', leftMargin + 2, currentY);
  currentY += 6;

  // Certifications layout
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(PrimaryColor);
  doc.text('Key Certifications', leftMargin, currentY);
  currentY += 4.5;

  doc.setFont('Helvetica', 'normal');
  doc.setTextColor(Charcoal);
  doc.setFontSize(8.5);
  doc.text('-  Java Full Stack Development  --  EduSkills', leftMargin + 2, currentY);
  currentY += 4;
  doc.text('-  Generative AI Content Creation  --  Adobe (via Coursera)', leftMargin + 2, currentY);
  currentY += 4;
  doc.text('-  Full Stack Web Development Workshop  --  Softpro India', leftMargin + 2, currentY);

  return doc;
}

export function downloadResumePDF() {
  const doc = generateResumePDF();
  doc.save('Rishi_Raj_Shukla_Resume.pdf');
}
