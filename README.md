# Portfólio — Chagas Barros

Next.js 14 + TypeScript + Tailwind CSS

## Setup

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura

```
src/
├── app/
│   ├── globals.css       # Fontes, base styles, utilitários custom
│   ├── layout.tsx        # Root layout com metadata
│   └── page.tsx          # Página principal
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx          # Background com grid + glows
│   ├── About.tsx
│   ├── Stack.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/
    └── index.ts          # Todo o conteúdo do site em um lugar só
```

## Personalizar

Todo o conteúdo (nome, projetos, experiências, stack, contato) está em `src/data/index.ts`.  
As cores estão definidas em `tailwind.config.ts` sob `colors.olive`, `colors.copper` e `colors.slate`.

## Background do Hero

O efeito de fundo em `Hero.tsx` usa três camadas:
1. **Grid** — classe `hero-bg-grid` em `globals.css` com dois `linear-gradient` em 60px
2. **Glow olive** — `radial-gradient` verde-oliva no canto superior direito (inline style)  
3. **Glow copper** — `radial-gradient` cobre no canto inferior esquerdo (inline style)
