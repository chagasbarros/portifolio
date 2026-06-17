export const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
];

export const stats = [
  { num: "1+", label: "Anos de experiência" },
  { num: "7", label: "Projetos entregues" },
  { num: "2", label: "Clientes ativos" },
];

export const values = [
  "Código que o próximo dev vai agradecer, não amaldiçoar",
  "Performance como requisito, não como opcional",
  "Documentação que explica o porquê, não só o como",
  "Dívida técnica tratada como dívida real — com juros",
];

export const stackItems = [
  { category: "Front-end", name: "HTML, CSS, JavaScript", level: 95 },
  { category: "Front-end", name: "React, TypeScript, Tailwind CSS", level: 80 },
  { category: "Back-end", name: "Node.js / Express", level: 92 },
  { category: "Back-end", name: "Java, Maven, Junit, Spring Boot", level: 50 },
  { category: "Banco de Dados", name: "PostgreSQL, Prisma", level: 70 },
  { category: "Infra", name: "Docker, Linux", level: 70 },
  { category: "Cloud", name: "AWS", level: 82 },
  {
    category: "Inteligência Artificial",
    name: "RAG, Rate Limiting, Guardrails",
    level: 40,
  },
];

export const projects = [
  {
    num: "01",
    name: "Aplicativo de E-commerce",
    desc: "Uma loja online com funcionalidades de cadastro de clientes, carrinho de compras e gerenciamento de pedidos.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React"],
    href: "https://github.com/chagasbarros/dripstore",
  },
  {
    num: "02",
    name: "Gerador automatizado de Landing Pages com IA",
    desc: "O projeto utiliza uma arquitetura de baseada em múltiplos agentes de IA especializados para analisar objetivos de negócio, definir estratégias, criar identidade visual, gerar copywriting e montar páginas completas",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API"],
    href: "https://github.com/chagasbarros/lp",
  },
  {
    num: "03",
    name: "PetShop Amigaozao - Projeto de Conclusão de Curso",
    desc: "Landing page para um pet shop, feito com HTML Semântico, CSS e Bootstrap, com responsidade para telas pequenas e grandes. ",
    tags: ["HTML5", "CSS3", "Bootstrap"],
    href: "https://github.com/chagasbarros/PetShop-Amigaozao",
  },
];

export const experiences = [
  {
    period: "2026 — presente",
    role: "Estudante Universitário",
    company: "Centro Universitário Fametro ",
    desc: "Curso de Análise e Desenvolvimento de Sistemas",
    active: true,
  },
  {
    period: "2026",
    role: "Fullstack Developer",
    company: "Geração Tech 3.0",
    desc: "Curso de Inteligência Artificial e Softsills para desenvolvimento fullstack. Projeto final: Gerador de landing pages com IA.",
    active: false,
  },
  {
    period: "2025",
    role: "Fullstack Developer",
    company: "Geração Tech 2.0",
    desc: "Curso de Desenvolvimento Fullstack. Projeto Final: E-commerce completo com React, Node.js, PostgreSQL e deploy na AWS.",
    active: false,
  },
];

export const education = [
  {
    period: "2014 — 2018",
    title: "B.Sc. Ciência da Computação",
    institution: "UFC — Fortaleza, CE",
    accent: "olive" as const,
  },
  {
    period: "2023",
    title: "AWS Solutions Architect Associate",
    institution: "Amazon Web Services",
    accent: "copper" as const,
  },
  {
    period: "2022",
    title: "Certified Kubernetes Administrator",
    institution: "Cloud Native Computing Foundation",
    accent: "copper" as const,
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/chagasbarros" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chagasbarros" },
  {
    label: "Currículo PDF",
    href: "https://docs.google.com/document/d/1Xr38R7h4vezibXQ_aEfvsJkeKHj80j9o1OXoSPQyj8g/edit?usp=sharing",
  },
];
