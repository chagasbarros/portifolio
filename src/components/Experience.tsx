import { experiences, education } from "@/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 border-t border-slate-700 px-8 md:px-16 py-28"
    >
      <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text-primary mb-12">
        Onde eu <em className="not-italic text-copper-400">estudei</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
        {/* Timeline */}
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className={`flex gap-6 pb-10 relative ${
                i < experiences.length - 1 ? "timeline-connector" : ""
              }`}
            >
              {/* Dot */}
              <div
                className={`w-[0.9rem] h-[0.9rem] flex-shrink-0 mt-[0.35rem] border-2 relative z-10 ${
                  exp.active
                    ? "border-copper-500 bg-copper-700"
                    : "border-olive-500 bg-slate-900"
                }`}
              />

              <div>
                <p className="font-mono-custom text-[0.7rem] tracking-wide text-text-muted mb-1">
                  {exp.period}
                </p>
                <p className="text-[1rem] font-medium text-text-primary">
                  {exp.role}
                </p>
                <p className="text-[0.85rem] text-olive-400 mb-2">
                  {exp.company}
                </p>
                <p className="text-[0.85rem] text-text-secondary leading-[1.6]">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
