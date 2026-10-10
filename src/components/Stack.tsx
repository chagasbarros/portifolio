import { stackItems } from "@/data";

export default function Stack() {
  return (
    <section
      id="stack"
      className="bg-slate-900 border-t border-slate-700 px-8 md:px-16 py-28"
    >
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-16 items-end mb-16">
        <div>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text-primary">
            Minha <br />
            <em className="not-italic text-copper-400">Stack</em>
          </h2>
        </div>
        <p className="text-[0.95rem] text-text-secondary leading-[1.8]">
          Tecnologias que uso nos meus projetos e na faculdade. Estou em
          formação: conheço os fundamentos de cada uma e aprofundo conforme os
          projetos pedem.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-700 border border-slate-700">
        {stackItems.map((item) => (
          <div
            key={item.name}
            className="bg-slate-900 hover:bg-slate-800 transition-colors duration-200 p-7 flex flex-col gap-2 cursor-default"
          >
            <span className="font-mono-custom text-2xs tracking-wider2 uppercase text-olive-400 mb-3">
              {item.category}
            </span>
            <span className="text-[1rem] font-medium text-text-primary">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
