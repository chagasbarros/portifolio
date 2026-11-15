import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "Chagas Barros — Fullstack Developer",
    description:
      "Portfolio of Chagas Barros, a fullstack developer in Fortaleza, Brazil, focused on automation and artificial intelligence for business.",
  },
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
    ],
    contact: "Contact",
    switchLabel: "Language",
  },
  hero: {
    tagline: "Fullstack Developer · Automation and AI for business",
    intro:
      "My work starts with the problem, not the technology. I learn what the people who will use it actually need, compare the possible solutions — with or without software — and, when it makes sense, build the application end to end.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    stats: [
      { num: "2nd", label: "Place in the IEL Challenge 2026" },
      { num: "1+", label: "Year in IT support" },
      { num: "15", label: "Years serving customers" },
    ],
  },
  about: {
    photoAlt: "Photo of Chagas Barros",
    titleStart: "From customer service to",
    titleEm: "automation",
    paragraphs: [
      "For 15 years I worked delivering food and medicine, dealing directly with customers and tight deadlines. In 2021 I moved into IT through support, first as an intern at UNIP and then at Grupo Cordeiro Guindastes, and that is where I realized I wanted to build systems, not just support them.",
      "I am now studying Systems Analysis and Development at Unifametro, I completed the Fullstack and AI programs at Geração Tech, and I won 2nd place in the IEL Challenge 2026. I learn by building: my main project is Jornada Tech, a career-planning platform used by 72 students, which I developed as a university outreach project. I also built a landing page generator powered by AI agents, an accessible banking app for older adults and a fullstack e-commerce store.",
      "Today I use automation and artificial intelligence to solve real business problems: repetitive tasks that eat up hours of a team's time, customer requests that could be answered automatically, scattered data that nobody can put to use. Before writing any code, I make sure I understand how the business works, because the best solution is not always the most complex one.",
    ],
  },
  stack: {
    titleStart: "My",
    titleEm: "Stack",
    intro:
      "Technologies I use in my projects and at university. I am still learning: I know the fundamentals of each one and go deeper as projects require.",
    items: [
      { category: "Front-end", name: "HTML, CSS, JavaScript, TypeScript" },
      { category: "Front-end", name: "React, Next.js, Tailwind CSS" },
      { category: "Back-end", name: "Node.js, Express, REST APIs, Server Actions, Zod" },
      { category: "Back-end", name: "Java (object-oriented programming)" },
      { category: "Databases", name: "SQL (MySQL, PostgreSQL), Prisma" },
      { category: "Cloud", name: "Supabase, Vercel, AWS (EC2, S3)" },
      { category: "Testing & Infra", name: "Vitest, Playwright, Docker, Linux, Git" },
      { category: "Artificial Intelligence", name: "LLM APIs and AI agents" },
    ],
  },
  projects: {
    titleStart: "Selected",
    titleEm: "projects",
    seeAll: "See all →",
    liveSite: "View live site ↗",
    items: [
      {
        num: "01",
        name: "Jornada Tech — career planning for students",
        desc: "Unifametro outreach platform used by 72 students: a guided journey with self-assessment, a Career Canvas and an action plan that calculates fit with the chosen field and the 5 most urgent skills to develop. Passwordless login with an email code, built from student feedback.",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Vitest", "Playwright"],
        href: "https://github.com/chagasbarros/jornadatech",
        live: "https://www.jornadatech.app.br",
      },
      {
        num: "02",
        name: "AI-powered automated landing page generator",
        desc: "An architecture of specialized AI agents that analyze the business goal, define the strategy, create the visual identity, write the copy and assemble the page.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API"],
        href: "https://github.com/chagasbarros/lp",
      },
      {
        num: "03",
        name: "Banco Amigo — digital inclusion for older adults",
        desc: "Banking app prototype designed for older adults: large buttons, plain language, payments guided in 3 steps and scam alerts.",
        tags: ["React", "TypeScript", "Styled Components", "Accessibility"],
        href: "https://github.com/chagasbarros/bancoAmigo",
      },
      {
        num: "04",
        name: "TypeScript Mentor — AI agent",
        desc: "An agent specialized in fullstack TypeScript, with streaming responses and a language model running locally.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Ollama"],
        href: "https://github.com/chagasbarros/ia-agent",
      },
      {
        num: "05",
        name: "DripStore — fullstack e-commerce",
        desc: "Online store with product management, authentication, cart and orders, connecting front-end and back-end through a REST API. Final project of Geração Tech 2.0.",
        tags: ["React", "Node.js", "Express", "MySQL"],
        href: "https://github.com/chagasbarros/dripstore",
      },
    ],
  },
  experience: {
    titleStart: "Education and",
    titleEm: "experience",
    items: [
      {
        period: "2026 — present",
        role: "Degree in Systems Analysis and Development",
        company: "Centro Universitário Fametro (Unifametro)",
        desc: "2nd semester, expected graduation in 2028.",
        active: true,
      },
      {
        period: "2026",
        role: "AI and Soft Skills Program",
        company: "Geração Tech 3.0",
        desc: "Artificial intelligence applied to software development. Final project: AI-powered landing page generator. 2nd place in the IEL Challenge (Recruit Day, May 2026).",
        active: false,
      },
      {
        period: "2025",
        role: "Fullstack Developer Program",
        company: "Geração Tech 2.0",
        desc: "Fullstack development. Final project: e-commerce store with React, Node.js, Express and MySQL.",
        active: false,
      },
      {
        period: "Dec 2022 — Jun 2023",
        role: "IT Support Assistant",
        company: "Grupo Cordeiro Guindastes",
        desc: "Handled support tickets, IT inventory and employee onboarding to company systems. Mapped the network of about 100 computers and fixed its slowdowns by combining firewall rules with guidance on responsible usage.",
        active: false,
      },
      {
        period: "Apr 2022 — Dec 2022",
        role: "IT Intern",
        company: "Grupo Cordeiro Guindastes",
        desc: "Support tickets, workstation setup and network cabling.",
        active: false,
      },
      {
        period: "Nov 2021 — Feb 2022",
        role: "IT Intern",
        company: "UNIP — Universidade Paulista",
        desc: "Support tickets and computer lab assistance, helping students use the university's systems.",
        active: false,
      },
    ],
  },
  contact: {
    titleLine1: "Facing a",
    titleEm: "challenge?",
    text: "Before any line of code, I start by understanding the problem. If you want a second mind thinking it through with you, just reach out.",
    socials: [
      { label: "GitHub", href: "https://github.com/chagasbarros" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/chagasbarros" },
      {
        label: "Resume PDF",
        href: "https://drive.google.com/file/d/1kmz3yqTRkDukZTpmcB9KciP2ruNqjc5x/view?usp=sharing",
      },
    ],
  },
  footer: { location: "Fortaleza, Brazil", backToTop: "↑ back to top" },
};

export default en;
