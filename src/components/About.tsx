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
              <img
                src="/foto.jpeg"
                alt="Foto de Chagas Barros"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 gradient-accent" />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] text-text-primary mb-4">
            Do atendimento ao{" "}
            <em className="not-italic text-copper-400">código</em>
          </h2>
          <p className="text-[1.05rem] text-text-secondary mb-5 leading-[1.8]">
            Por 15 anos trabalhei com entregas de comidas e remédios, em contato
            direto com clientes e prazos apertados. Em 2021 entrei na TI pelo
            suporte, primeiro como estagiário na UNIP e depois no Grupo Cordeiro
            Guindastes, e ali percebi que queria construir os sistemas, não só
            dar suporte a eles.
          </p>
          <p className="text-[1.05rem] text-text-secondary mb-5 leading-[1.8]">
            Hoje curso Análise e Desenvolvimento de Sistemas na Unifametro, fiz
            as formações Fullstack e IA do Geração Tech e conquistei o 2º lugar
            no Desafio IEL 2026. Aprendo construindo: um gerador de landing
            pages com agentes de IA, um app bancário acessível para idosos e um
            e-commerce fullstack.
          </p>
          <p className="text-[1.05rem] text-text-secondary mb-5 leading-[1.8]">
            Busco um estágio em desenvolvimento, presencial em Fortaleza ou
            remoto, onde eu possa aprender com um time experiente e contribuir
            no que sei fazer bem: entender o problema antes de escrever código.
          </p>

          <div className="w-12 h-0.5 bg-copper-600 my-8" />
        </div>
      </div>
    </section>
  );
}
