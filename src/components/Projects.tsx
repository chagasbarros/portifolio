import { projects } from "@/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-800 border-t border-slate-600 px-8 md:px-16 py-28"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-14">
        <div>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text-primary">
            Projetos{" "}
            <em className="not-italic text-copper-400">selecionados</em>
          </h2>
        </div>
        <a
          href="https://github.com/chagasbarros?tab=repositories"
          className="font-mono-custom text-xs tracking-wide uppercase text-copper-400 border-b border-copper-700 pb-0.5 no-underline hover:text-copper-200 transition-colors duration-200 self-start md:self-auto"
        >
          Ver todos →
        </a>
      </div>

      {/* List */}
      <div className="flex flex-col gap-px bg-slate-600">
        {projects.map((project) => (
          <a
            key={project.num}
            href={project.href}
            className="group bg-slate-800 hover:bg-slate-700 transition-colors duration-200 px-6 md:px-10 py-10 grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-12 no-underline text-inherit"
          >
            <span className="font-mono-custom text-xs text-text-muted min-w-[2rem]">
              {project.num}
            </span>

            <div>
              <div className="font-display text-[1.5rem] text-text-primary mb-1">
                {project.name}
              </div>
              <div className="text-[0.9rem] text-text-secondary">
                {project.desc}
              </div>
              <div className="flex gap-2 flex-wrap mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-custom text-2xs tracking-wide px-[0.6rem] py-[0.2rem] bg-slate-700 text-olive-200 border border-olive-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span className="hidden md:block text-xl text-text-muted group-hover:text-copper-400 group-hover:translate-x-1 transition-all duration-200">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
