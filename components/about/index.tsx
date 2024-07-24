const AboutEvent = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row justify-center gap-20 px-8 lg:px-16 xl:px-20 py-14 scroll-mt-20"
    >
      <div className="flex flex-col gap-6 antialiased text-inherit text-xl font-normal lg:max-w-4xl">
        <h1 className="block antialiased text-3xl font-semibold text-center">
          Sobre o PMI
        </h1>

        <div className="text-gray-700 text-base md:text-justify flex flex-col gap-4">
          <p>
            O Project Management Institute - PMI® é uma organização
            internacional sem fins lucrativos que tem o objetivo de disseminar
            as melhores práticas de gerenciamento de projetos em todo o mundo.
            Sua atuação é voltada para indivíduos praticantes, estudiosos ou
            entusiastas de Gerenciamento de Projeto nas mais diversas áreas,
            como aeroespacial, automobilística, administração, construção,
            engenharia, serviços financeiros, tecnologia da informação,
            farmacêutica e telecomunicações.
          </p>

          <p>
            A associação foi fundada em 1969, com atual sede na Filadélfia,
            Pensilvânia- EUA, e está presente em mais de 200 países, somando
            mais de meio milhão de associados ativos distribuídos globalmente
            entre os mais de 300 capítulos regionais. Nesse bojo, a partir de
            2003 o estado do Ceará passou a ser representado pelo capítulo PMI
            Ceará, um dos 15 capítulos em atividade no Brasil.
          </p>

          <p>
            Em sua atuação, o PMI Ceará busca promover a troca de experiências e
            conhecimentos entre seus membros e a comunidade de Gerenciamento de
            Projeto, congregando indivíduos e organizações de forma a apoiar o
            desenvolvimento da profissão. A divulgação de boas práticas do
            Gerenciamento de Projeto, para além de capacitações como
            certificação e treinamentos, pode alavancar carreiras e otimizar a
            prática nas organizações!
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 antialiased text-inherit text-xl font-normal lg:max-w-4xl">
        <h1 className="block antialiased text-3xl text-inherit font-semibold text-center">
          Sobre o Congresso:
        </h1>

        <div className="text-gray-700 text-base md:text-justify flex flex-col gap-4">
          <p>
            Preparados para embarcar em uma jornada de aprendizado e inovação? O
            14º Congresso Regional de Gestão, Projetos e Liderança (CRGPL) do
            PMI Ceará está prestes a começar, e nós estamos ansiosos para
            recebê-los! Este evento é um marco essencial na busca pela
            excelência em gestão de projetos e liderança. Aqui, você terá a
            oportunidade de se conectar com profissionais de ponta, compartilhar
            experiências, discutir desafios e explorar as tendências mais
            recentes que estão moldando nosso setor.
          </p>

          <p>
            Com o tema &quot;Impacto, Inovação e IA&&quot;, nosso objetivo é
            levar você às fronteiras da inovação tecnológica. Vamos mergulhar na
            aplicação prática dessas inovações em projetos que transformam
            nossas organizações e sociedade. Especialmente, a Inteligência
            Artificial, que está revolucionando a gestão de projetos e a
            liderança de equipes, será um dos focos principais. Queremos
            equipá-lo com o conhecimento e as ferramentas necessárias para
            enfrentar essa nova era com confiança.
          </p>

          <p>
            Aproveite ao máximo o que o 14º CRGPL tem a oferecer! Participe
            ativamente das sessões, troque ideias, e absorva todo o conhecimento
            disponível. Estamos certos de que as lições aprendidas aqui terão um
            impacto profundo em sua carreira e contribuirão significativamente
            para a comunidade de gestão de projetos. Vamos juntos transformar o
            futuro da gestão!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
