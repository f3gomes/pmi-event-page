"use client";

import { Tabs } from "@material-tailwind/react";
import EventContentCard from "../event-contet-card";

const EVENT_CONTENT = [
  {
    title: "Inteligência Artificial - Perspectiva, Oportunidades e Futuro",
    des: "Lidera o desenvolvimento de negócios em Analytcs, Data Science, Machine Learning, e afins. Possui mais de 18 anos de experiẽncia em empresas multinacionais de tecnologia, apoiando várias áreas de negócio, novos produtos e serviços e desenvolvimento de pessoas. Formado em Administração de Empresas. Tem participado ainda em inúmeros cursos de pós-graduação em renomadas instituições tais como Duke University, Comlumbia University, London Business School e University of Michigan",
    name: "Luiz Henrique",
    position: "Sales Practice Lead de Data, Analytics & AI no Google",
    panel: "Tema",
    img: "/image/luiz-henrique.jpeg",
  },
  {
    title:
      "Criando o cérebro da Lu: Oportunidades e desafios da inteligência artificial para o varejo",
    des: "Graduado em Design (ESDI - UERJ), mestre e doutor em Design (PUC - Rio), professor e pesquisador de temáticas relacionadas a pessoas, produtos e serviços em um mundo em constante transformação. Atua com pesquisa e concepção de novos produtos e serviços para inovação no varejo, conciliando necessidades das pessoas, oportunidades de negócios e disponibilidade de tecnologia",
    name: "Robson Santos",
    position: "Gerente de Experiência do Usuário no Magalu",
    panel: "Tema",
    img: "/image/robson.jpeg",
  },
  {
    title: "AI in Healthcare: Revolutionizing Patient Care",
    des: "Tem formação acadêmica sólida, graduada em Sistemas de Informação, com pós graduação em Administração de Banco de Dados, Engenharia de Dados e especialização em mineração de Dados Complexos pela Unicamp. Atua com clientes de diversos segmentos e já participou de mais de 200 projetos no Brasil e no mundo. Atualmente possui múltiplas certificações em dados e computação em nuvem. Ama compartilhar conhecimento em comunidades e é palestrante em eventos técnicos de destaques em todo o Brasil e no mundo.",
    name: "Erika Nagamine",
    position:
      "Arquiteta de Soluções, Especialsta em Dados & AI na Amazon Web Services (AWS)",
    panel: "Tema",
    img: "/image/erika.jpeg",
  },
];

const EVENT_CONTENT_2 = [
  {
    title: "AI in Healthcare: Revolutionizing Patient Care",
    des: "Tem formação acadêmica sólida, graduada em Sistemas de Informação, com pós graduação em Administração de Banco de Dados, Engenharia de Dados e especialização em mineração de Dados Complexos pela Unicamp. Atua com clientes de diversos segmentos e já participou de mais de 200 projetos no Brasil e no mundo. Atualmente possui múltiplas certificações em dados e computação em nuvem. Ama compartilhar conhecimento em comunidades e é palestrante em eventos técnicos de destaques em todo o Brasil e no mundo.",
    name: "Erika Nagamine",
    position:
      "Arquiteta de Soluções, Especialsta em Dados & AI na Amazon Web Services (AWS)",
    panel: "Tema",
    img: "/image/erika.jpeg",
  },
  {
    title: "Inteligência Artificial - Perspectiva, Oportunidades e Futuro",
    des: "Lidera o desenvolvimento de negócios em Analytcs, Data Science, Machine Learning, e afins. Possui mais de 18 anos de experiẽncia em empresas multinacionais de tecnologia, apoiando várias áreas de negócio, novos produtos e serviços e desenvolvimento de pessoas. Formado em Administração de Empresas. Tem participado ainda em inúmeros cursos de pós-graduação em renomadas instituições tais como Duke University, Comlumbia University, London Business School e University of Michigan",
    name: "Luiz Henrique",
    position: "Sales Practice Lead de Data, Analytics & AI no Google",
    panel: "Tema",
    img: "/image/luiz-henrique.jpeg",
  },
  {
    title:
      "Criando o cérebro da Lu: Oportunidades e desafios da inteligência artificial para o varejo",
    des: "Graduado em Design (ESDI - UERJ), mestre e doutor em Design (PUC - Rio), professor e pesquisador de temáticas relacionadas a pessoas, produtos e serviços em um mundo em constante transformação. Atua com pesquisa e concepção de novos produtos e serviços para inovação no varejo, conciliando necessidades das pessoas, oportunidades de negócios e disponibilidade de tecnologia",
    name: "Robson Santos",
    position: "Gerente de Experiência do Usuário no Magalu",
    panel: "Tema",
    img: "/image/robson.jpeg",
  },
];

export function EventContent() {
  return (
    <section id="event-content" className="py-8 px-8 lg:py-10">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center"></div>
      </Tabs>

      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
