const AboutEvent = () => {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col gap-8 items-center px-4 py-12 scroll-mt-20"
    >
      <h1 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-inherit text-center">
        Sobre o evento
      </h1>

      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 text-center">
        14º Congresso Regional de Gestão, Projetos e Liderança <br />{" "}
        Sexta-feira, 02/08/2024 • 12:00 <br /> Sábado, 03/08/2024 • 18:00
      </h4>

      <h4 className="block antialiased font-sans text-xl leading-relaxed text-inherit lg:max-w-4xl w-full text-center font-normal !text-gray-500">
        Bem-vindo ao Congresso Regional de Gestão, Projetos e Liderança (CRGPL),
        o ponto de encontro para líderes e gestores de projetos no Estado do
        Ceará. Este evento é uma plataforma para você redefinir sua visão sobre
        estratégia e inovação no mundo dos projetos. O tema deste ano é
      </h4>

      <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 text-center">
        IMPACTO INOVAÇÃO IA
      </h4>

      <p className="block antialiased font-sans text-xl leading-relaxed text-inherit lg:max-w-4xl w-full text-center font-normal !text-gray-500">
        O Project Management Institute (PMI) é uma associação profissional líder
        mundial para uma comunidade global crescente de milhões de profissionais
        de projeto e agentes de mudança em todo o mundo. Com o propósito de
        promover carreiras e fortalecer o sucesso organizacional, capacita os
        agentes de mudança com novas habilidades e formas de trabalhar para
        maximizar seu impacto. Prepare-se para dois dias de imersão total com
        conteúdos exclusivos, onde exploraremos o impacto da inovação e o papel
        crescente da inteligência artificial no gerenciamento de projetos.
      </p>
    </section>
  );
};

export default AboutEvent;
