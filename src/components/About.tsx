import type { Dictionary } from "@/i18n";

export default function About({ t }: { t: Dictionary["about"] }) {
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
              <img
                src="/foto.jpeg"
                alt={t.photoAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 gradient-accent" />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text-primary mb-4">
            {t.titleStart}{" "}
            <em className="not-italic text-copper-400">{t.titleEm}</em>
          </h2>
          {t.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[1.05rem] text-text-secondary mb-5 leading-[1.8]"
            >
              {paragraph}
            </p>
          ))}

          <div className="w-12 h-0.5 bg-copper-600 my-8" />
        </div>
      </div>
    </section>
  );
}
