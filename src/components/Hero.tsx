import { stats } from "@/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-16 pt-24 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none hero-bg-grid" />

      {/* Glow top-right (olive) */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          right: "-10%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(ellipse, rgba(90,107,58,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Glow bottom-left (copper) */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(196,124,58,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 hero-tag-line font-mono-custom text-xs text-olive-400 tracking-wider2 uppercase mb-6">
          Fullstack Developer
        </div>

        <h1 className="font-display text-[clamp(3rem,5vw,5rem)] leading-[1.05] text-text-primary mb-1">
          Chagas
          <em className="not-italic text-copper-400"> Barros</em>
        </h1>

        <p className="text-[1.1rem] text-text-secondary max-w-[480px] mt-6 mb-10 leading-relaxed">
          Meu trabalho começa no problema, não na tecnologia. Analiso, estruturo
          e construo aplicações fullstack que resolvem o que precisa ser
          resolvido — com escala, qualidade e atenção à experiência do usuário
          desde a primeira linha.
        </p>

        <div className="flex gap-4 items-center">
          <a
            href="#projects"
            className="bg-olive-600 text-olive-100 px-8 py-[0.85rem] text-sm font-medium tracking-wide uppercase no-underline hover:bg-olive-500 transition-colors duration-200"
          >
            Ver projetos
          </a>
          <a
            href="#contact"
            className="btn-ghost-arrow flex items-center gap-2 text-sm text-text-secondary no-underline hover:text-copper-400 transition-colors duration-200"
          >
            Falar comigo
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 flex flex-col gap-8 pl-0 md:pl-16 border-t md:border-t-0 md:border-l border-slate-600 mt-12 md:mt-0 pt-8 md:pt-0">
        {stats.map((stat, i) => (
          <div key={stat.label}>
            <div className="flex flex-col gap-1">
              <span className="font-display text-[3rem] text-copper-400 leading-none">
                {stat.num}
              </span>
              <span className="text-[0.8rem] tracking-wide uppercase text-text-muted">
                {stat.label}
              </span>
            </div>
            {i < stats.length - 1 && (
              <div className="w-8 h-px bg-olive-600 mt-3" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
