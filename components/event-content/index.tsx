"use client";

import { Tabs } from "@material-tailwind/react";
import EventContentCard from "../event-contet-card";

const EVENT_CONTENT = [
  {
    title: "Inteligência Artificial",
    topic: "Inteligência Artificial - Perspectiva, Oportunidades e Futuro",
    des: "Lidera o desenvolvimento de negócios em Analytcs, Data Science, Machine Learning, e afins. Possui mais de 18 anos de experiẽncia em empresas multinacionais de tecnologia, apoiando várias áreas de negócio, novos produtos e serviços e desenvolvimento de pessoas. Formado em Administração de Empresas. Tem participado ainda em inúmeros cursos de pós-graduação em renomadas instituições tais como Duke University, Comlumbia University, London Business School e University of Michigan",
    name: "Luiz Henrique",
    position: "Sales Practice Lead de Data, Analytics & AI no Google",
    img: "/img/speakers/luiz-henrique.jpeg",
  },
  {
    title: "Criando o cérebro da Lu",
    topic:
      "Criando o cérebro da Lu: Oportunidades e desafios da inteligência artificial para o varejo",
    des: "Graduado em Design (ESDI - UERJ), mestre e doutor em Design (PUC - Rio), professor e pesquisador de temáticas relacionadas a pessoas, produtos e serviços em um mundo em constante transformação. Atua com pesquisa e concepção de novos produtos e serviços para inovação no varejo, conciliando necessidades das pessoas, oportunidades de negócios e disponibilidade de tecnologia",
    name: "Robson Santos",
    position: "Gerente de Experiência do Usuário no Magalu",
    img: "/img/speakers/robson.jpeg",
  },
  {
    title: "Projetos com dados e IA",
    topic: "Projetos com dados e IA Generativa, por onde começar?",
    des: "Tem formação acadêmica sólida, graduada em Sistemas de Informação, com pós graduação em Administração de Banco de Dados, Engenharia de Dados e especialização em mineração de Dados Complexos pela Unicamp. Atua com clientes de diversos segmentos e já participou de mais de 200 projetos no Brasil e no mundo. Atualmente possui múltiplas certificações em dados e computação em nuvem. Ama compartilhar conhecimento em comunidades e é palestrante em eventos técnicos de destaques em todo o Brasil e no mundo.",
    name: "Erika Nagamine",
    position: "Arquiteta de Soluções, Especialsta em Dados & AI na AWS",
    img: "/img/speakers/erika.jpeg",
  },
  {
    title: "Projetos com dados e IA",
    topic: "Projetos com dados e IA Generativa, por onde começar?",
    des: "Tem formação acadêmica sólida, graduada em Sistemas de Informação, com pós graduação em Administração de Banco de Dados, Engenharia de Dados e especialização em mineração de Dados Complexos pela Unicamp. Atua com clientes de diversos segmentos e já participou de mais de 200 projetos no Brasil e no mundo. Atualmente possui múltiplas certificações em dados e computação em nuvem. Ama compartilhar conhecimento em comunidades e é palestrante em eventos técnicos de destaques em todo o Brasil e no mundo.",
    name: "Leo Lacerda",
    position: "Unifor",
    img: "/img/speakers/leo.jpeg",
  },
  {
    title: "Projetos com dados e IA",
    topic: "Projetos com dados e IA Generativa, por onde começar?",
    des: "Tem formação acadêmica sólida, graduada em Sistemas de Informação, com pós graduação em Administração de Banco de Dados, Engenharia de Dados e especialização em mineração de Dados Complexos pela Unicamp. Atua com clientes de diversos segmentos e já participou de mais de 200 projetos no Brasil e no mundo. Atualmente possui múltiplas certificações em dados e computação em nuvem. Ama compartilhar conhecimento em comunidades e é palestrante em eventos técnicos de destaques em todo o Brasil e no mundo.",
    name: "Denise Barroso",
    position: "PliQ",
    img: "/img/speakers/denise.jpeg",
  },
  {
    title: "Projetos com dados e IA",
    topic: "Projetos com dados e IA Generativa, por onde começar?",
    des: "Tem formação acadêmica sólida, graduada em Sistemas de Informação, com pós graduação em Administração de Banco de Dados, Engenharia de Dados e especialização em mineração de Dados Complexos pela Unicamp. Atua com clientes de diversos segmentos e já participou de mais de 200 projetos no Brasil e no mundo. Atualmente possui múltiplas certificações em dados e computação em nuvem. Ama compartilhar conhecimento em comunidades e é palestrante em eventos técnicos de destaques em todo o Brasil e no mundo.",
    name: "João Justo",
    position: "Makro",
    img: "/img/speakers/joao.jpeg",
  },
  {
    title: "Projetos com dados e IA",
    topic: "Projetos com dados e IA Generativa, por onde começar?",
    des: "Tem formação acadêmica sólida, graduada em Sistemas de Informação, com pós graduação em Administração de Banco de Dados, Engenharia de Dados e especialização em mineração de Dados Complexos pela Unicamp. Atua com clientes de diversos segmentos e já participou de mais de 200 projetos no Brasil e no mundo. Atualmente possui múltiplas certificações em dados e computação em nuvem. Ama compartilhar conhecimento em comunidades e é palestrante em eventos técnicos de destaques em todo o Brasil e no mundo.",
    name: "Filipe Sousa",
    position: "IRIS",
    img: "/img/speakers/filipe.jpeg",
  },
];

export function EventContent() {
  return (
    <section id="event-content" className="py-8 md:px-8 lg:py-10">
      <div className="mx-auto flex justify-center flex-wrap gap-6">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
