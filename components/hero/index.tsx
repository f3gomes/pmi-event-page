"use client";

import Link from "next/link";
import { purchaseLink } from "../navbar";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-screen w-full bg-[url('/img/page/bg-image-x.png')] md:bg-[url('/img/page/bg-image.png')] bg-cover bg-left"
    >
      <div className="grid h-screen px-4">
        <div className="z-10 my-auto mx-auto text-center flex flex-col justify-center gap-10 md:gap-12 h-full lg:mt-6">
          <h1 className="block antialiased tracking-normal text-3xl sm:text-4xl xl:text-6xl leading-tight text-white drop-shadow-2xl">
            Impacto - Inovação - IA
          </h1>

          <p className="block antialiased font-bold text-4xl sm:text-5xl xl:text-6xl text-white uppercase lg:max-w-7xl drop-shadow-2xl">
            14º Congresso Regional de Gestão, Projetos e Liderança - PMICE
          </p>

          <h3 className="block antialiased tracking-normal text-2xl sm:text-4xl md:text-5xl leading-snug text-white mb-2 drop-shadow-2xl">
            <span className="text-[#2cf1f7]">02 e 03 de Agosto </span>
            <span className="font-bold">&bull; </span>
            Fortaleza
          </h3>

          <div className="flex items-center gap-4">
            <Link className="w-full h-full" target="_blank" href={purchaseLink}>
              <button className="md:w-48 md:h-16 py-2.5 px-5 me-2 mb-2 text-base sm:text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                Ingressar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
