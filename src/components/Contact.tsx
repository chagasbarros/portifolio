import { socials } from "@/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-800 border-t border-slate-600 px-8 md:px-16 py-32 text-center"
    >
      <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text-primary mb-5">
        Tem um desafio
        <br />
        <em className="not-italic text-copper-400">pela frente?</em>
      </h2>

      <p className="text-[1rem] text-text-secondary max-w-[480px] mx-auto mb-12 leading-relaxed">
        Antes de qualquer linha de código, começo entendendo o problema. Se
        quiser uma segunda cabeça pensando junto, é só falar.
      </p>

      <a
        href="mailto:chagas_barros@outlook.com"
        className="font-display text-[clamp(1.5rem,3vw,2.25rem)] italic text-copper-400 no-underline border-b border-copper-700 pb-1 hover:text-copper-200 transition-colors duration-200 inline-block mb-12"
      >
        chagas_barros@outlook.com
      </a>

      <div className="flex justify-center gap-8 flex-wrap">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="font-mono-custom text-xs tracking-wide2 uppercase text-text-muted no-underline hover:text-olive-200 transition-colors duration-200"
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}
