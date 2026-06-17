import { values } from "@/data";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-800 border-t border-slate-600 px-8 md:px-16 py-28"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-start">
        {/* Portrait */}
        <div className="md:sticky md:top-32">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "4/5" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-600 flex items-end justify-center pb-8">
              <span className="font-display text-[4rem] text-olive-600 opacity-50 italic">
                Foto Profissional
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 gradient-accent" />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text-primary mb-4">
            Mentalidade de{" "}
            <em className="not-italic text-copper-400">Crescimento,</em>
            <br />
            execução de alto nível
          </h2>
          <p className="text-[1.05rem] text-text-secondary mb-5 leading-[1.8]">
            Graduando em Análise e Desenvolvimento de Sistemas, participei de
            hackathons e conquistei o segundo lugar no Desafio IEL em 2026.
            Construo aprendendo: desenvolvi um e-commerce fullstack, um gerador
            de landing pages com IA e meu próprio portfólio com deploy, domínio
            e acessibilidade. Minhas principais tecnologias são React,
            TypeScript, Node.js, Docker, PostgreSQL e Java. Meu diferencial não
            é só técnico. É a mentalidade de quem mudou de vida pelo esforço — e
            que leva cada projeto com o mesmo comprometimento que levou essa
            transição. Busco minha primeira oportunidade como Desenvolvedor
            Fullstack Júnior, para trabalhar ao lado de profissionais
            experientes e continuar evoluindo.
          </p>

          <div className="w-12 h-0.5 bg-copper-600 my-8" />
        </div>
      </div>
    </section>
  );
}
