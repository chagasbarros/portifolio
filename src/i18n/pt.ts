import type { Dictionary } from "./types";

const pt: Dictionary = {
  meta: {
    title: "Chagas Barros — Desenvolvedor Fullstack",
    description:
      "Portfólio de Chagas Barros, desenvolvedor fullstack em Fortaleza focado em automação e inteligência artificial para negócios.",
  },
  nav: {
    links: [
      { label: "Sobre", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Projetos", href: "#projects" },
      { label: "Experiência", href: "#experience" },
    ],
    contact: "Contato",
    switchLabel: "Idioma",
  },
  hero: {
    tagline: "Desenvolvedor Fullstack · Automação e IA para negócios",
    intro:
      "Meu trabalho começa no problema, não na tecnologia. Entendo a necessidade de quem vai usar, comparo as soluções possíveis — com ou sem software — e, quando faz sentido, construo a aplicação de ponta a ponta.",
    ctaProjects: "Ver projetos",
    ctaContact: "Falar comigo",
    stats: [
      { num: "2º", label: "Lugar no Desafio IEL 2026" },
      { num: "1+", label: "Ano em suporte de TI" },
      { num: "15", label: "Anos atendendo clientes" },
    ],
  },
  about: {
    photoAlt: "Foto de Chagas Barros",
    titleStart: "Do atendimento à",
    titleEm: "automação",
    paragraphs: [
      "Por 15 anos trabalhei com entregas de comidas e remédios, em contato direto com clientes e prazos apertados. Em 2021 entrei na TI pelo suporte, primeiro como estagiário na UNIP e depois no Grupo Cordeiro Guindastes, e ali percebi que queria construir os sistemas, não só dar suporte a eles.",
      "Hoje curso Análise e Desenvolvimento de Sistemas na Unifametro, fiz as formações Fullstack e IA do Geração Tech e conquistei o 2º lugar no Desafio IEL 2026. Aprendo construindo: meu principal projeto é o Jornada Tech, uma plataforma de plano de carreira para estudantes usada por 72 alunos, que desenvolvi como projeto de extensão do curso. Também criei um gerador de landing pages com agentes de IA, um app bancário acessível para idosos e um e-commerce fullstack.",
      "Hoje uso automação e inteligência artificial para resolver problemas reais de negócios: tarefas repetitivas que tomam horas da equipe, atendimentos que poderiam responder sozinhos, dados espalhados que ninguém consegue usar. Antes de escrever código, procuro entender como a empresa funciona, porque a melhor solução nem sempre é a mais complexa.",
    ],
  },
  stack: {
    titleStart: "Minha",
    titleEm: "Stack",
    intro:
      "Tecnologias que uso nos meus projetos e na faculdade. Estou em formação: conheço os fundamentos de cada uma e aprofundo conforme os projetos pedem.",
    items: [
      { category: "Front-end", name: "HTML, CSS, JavaScript, TypeScript" },
      { category: "Front-end", name: "React, Next.js, Tailwind CSS" },
      { category: "Back-end", name: "Node.js, Express, APIs REST, Server Actions, Zod" },
      { category: "Back-end", name: "Java (orientação a objetos)" },
      { category: "Banco de Dados", name: "SQL (MySQL, PostgreSQL), Prisma" },
      { category: "Cloud", name: "Supabase, Vercel, AWS (EC2, S3)" },
      { category: "Testes e Infra", name: "Vitest, Playwright, Docker, Linux, Git" },
      { category: "Inteligência Artificial", name: "APIs de LLM e agentes de IA" },
    ],
  },
  projects: {
    titleStart: "Projetos",
    titleEm: "selecionados",
    seeAll: "Ver todos →",
    liveSite: "Ver site no ar ↗",
    items: [
      {
        num: "01",
        name: "Jornada Tech — plano de carreira para estudantes",
        desc: "Plataforma de extensão da Unifametro usada por 72 alunos: jornada guiada com autoavaliação, Canvas de Carreira e plano de ação, que calcula a compatibilidade com a área escolhida e as 5 competências mais urgentes. Login só com código no e-mail, criado a partir do feedback dos alunos.",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Vitest", "Playwright"],
        href: "https://github.com/chagasbarros/jornadatech",
        live: "https://www.jornadatech.app.br",
      },
      {
        num: "02",
        name: "Gerador automatizado de Landing Pages com IA",
        desc: "Arquitetura com múltiplos agentes de IA especializados que analisam o objetivo de negócio, definem a estratégia, criam a identidade visual, escrevem o texto e montam a página.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API"],
        href: "https://github.com/chagasbarros/lp",
      },
      {
        num: "03",
        name: "Banco Amigo — inclusão digital para idosos",
        desc: "Protótipo de app bancário pensado para pessoas idosas: botões grandes, linguagem simples, pagamento guiado em 3 passos e alertas contra golpes.",
        tags: ["React", "TypeScript", "Styled Components", "Acessibilidade"],
        href: "https://github.com/chagasbarros/bancoAmigo",
      },
      {
        num: "04",
        name: "Mentor TypeScript — agente de IA",
        desc: "Agente especializado em TypeScript fullstack, com respostas em streaming e modelo de linguagem rodando localmente.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Ollama"],
        href: "https://github.com/chagasbarros/ia-agent",
      },
      {
        num: "05",
        name: "DripStore — e-commerce fullstack",
        desc: "Loja online com cadastro de produtos, autenticação, carrinho e pedidos, integrando front-end e back-end por API REST. Projeto final do Geração Tech 2.0.",
        tags: ["React", "Node.js", "Express", "MySQL"],
        href: "https://github.com/chagasbarros/dripstore",
      },
    ],
  },
  experience: {
    titleStart: "Formação e",
    titleEm: "experiência",
    items: [
      {
        period: "2026 — presente",
        role: "Graduação em Análise e Desenvolvimento de Sistemas",
        company: "Centro Universitário Fametro (Unifametro)",
        desc: "2º semestre, conclusão prevista para 2028.",
        active: true,
      },
      {
        period: "2026",
        role: "Formação em IA e Soft Skills",
        company: "Geração Tech 3.0",
        desc: "Inteligência artificial aplicada ao desenvolvimento. Projeto final: gerador de landing pages com IA. 2º lugar no Desafio IEL (Recruit Day, maio/2026).",
        active: false,
      },
      {
        period: "2025",
        role: "Formação Desenvolvedor Fullstack",
        company: "Geração Tech 2.0",
        desc: "Desenvolvimento fullstack. Projeto final: e-commerce com React, Node.js, Express e MySQL.",
        active: false,
      },
      {
        period: "dez/2022 — jun/2023",
        role: "Auxiliar de Suporte de TIC",
        company: "Grupo Cordeiro Guindastes",
        desc: "Atendimento de chamados, inventário de TI e onboarding de funcionários nos sistemas da empresa. Mapeei a rede de cerca de 100 computadores e resolvi a lentidão combinando regras no firewall e comunicados de uso consciente.",
        active: false,
      },
      {
        period: "abr/2022 — dez/2022",
        role: "Estagiário de TIC",
        company: "Grupo Cordeiro Guindastes",
        desc: "Atendimento de chamados, instalação de máquinas e cabeamento.",
        active: false,
      },
      {
        period: "nov/2021 — fev/2022",
        role: "Estagiário de TI",
        company: "UNIP — Universidade Paulista",
        desc: "Rotina de chamados e monitoria no laboratório, orientando alunos no uso dos sistemas da faculdade.",
        active: false,
      },
    ],
  },
  contact: {
    titleLine1: "Tem um desafio",
    titleEm: "pela frente?",
    text: "Antes de qualquer linha de código, começo entendendo o problema. Se quiser uma segunda cabeça pensando junto, é só falar.",
    socials: [
      { label: "GitHub", href: "https://github.com/chagasbarros" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/chagasbarros" },
      {
        label: "Currículo PDF",
        href: "https://drive.google.com/file/d/1zsgGxjOFryTwDnLVi67bZYdgDLa24Z3x/view?usp=sharing",
      },
    ],
  },
  footer: { location: "Fortaleza, CE", backToTop: "↑ voltar ao topo" },
};

export default pt;
