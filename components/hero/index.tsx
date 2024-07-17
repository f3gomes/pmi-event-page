"use client";

import Link from "next/link";

function Hero() {
  return (
    <div
      id="hero"
      className="min-h-screen w-full bg-[url('/img/page/bg-image.png')] bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 h-full w-full" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <h3 className="block antialiased tracking-normal font-sans xs:text-lg sm:text-3xl leading-snug text-white mb-2">
            De 02 a 03 de agosto em Fortaleza
          </h3>

          <h1 className="block antialiased tracking-normal font-sans xs:text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white lg:max-w-3xl">
            IMPACTO INOVAÇÃO IA
          </h1>

          <p className="block antialiased font-sans xs:text-3xl sm:text-3xl  font-normal leading-relaxed text-white mt-1 mb-12 w-full md:max-w-full">
            14º Congresso Regional de Gestão, Projetos e Liderança - PMICE
          </p>

          <div className="flex items-center gap-4">
            <Link className="w-full h-full" href="#footer">
              <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
                Ingressar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
