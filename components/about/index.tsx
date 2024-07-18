"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "../about-card";

const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    description:
      "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
    subTitle: "Presentation",
  },
  {
    title: "Practical Knowledge!",
    description:
      "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Workshops",
  },
];

const AboutEvent = () => {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col items-center px-4 py-10"
    >
      <Typography variant="h4" className="text-center mb-8" color="orange">
        Sobre do evento
      </Typography>
      <Typography variant="h4" className="text-center" color="blue-gray">
        14º Congresso Regional de Gestão, Projetos e Liderança <br />{" "}
        Sexta-feira, 02/08/2024 • 12:00 <br /> Sábado, 03/08/2024 • 18:00
      </Typography>
      <Typography
        variant="lead"
        className="lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        Bem-vindo ao Congresso Regional de Gestão, Projetos e Liderança (CRGPL),
        o ponto de encontro para líderes e gestores de projetos no Estado do
        Ceará. Este evento é uma plataforma para você redefinir sua visão sobre
        estratégia e inovação no mundo dos projetos. O tema deste ano é
      </Typography>

      <Typography variant="h4" className="text-center" color="blue-gray">
        IMPACTO INOVAÇÃO IA
      </Typography>

      <Typography
        variant="lead"
        className="lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        O Project Management Institute (PMI) é uma associação profissional líder
        mundial para uma comunidade global crescente de milhões de profissionais
        de projeto e agentes de mudança em todo o mundo. Com o propósito de
        promover carreiras e fortalecer o sucesso organizacional, capacita os
        agentes de mudança com novas habilidades e formas de trabalhar para
        maximizar seu impacto. Prepare-se para dois dias de imersão total com
        conteúdos exclusivos, onde exploraremos o impacto da inovação e o papel
        crescente da inteligência artificial no gerenciamento de projetos.
      </Typography>

      {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div>
      </div> */}
    </section>
  );
};

export default AboutEvent;
