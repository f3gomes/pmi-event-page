"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/img/hero-bg.jpeg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <h3 className="block antialiased tracking-normal font-sans text-3xl leading-snug text-white mb-2">
            De 02 a 03 de agosto em Fortaleza
          </h3>
          <h1 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-white lg:max-w-3xl">
            IMPACTO INOVAÇÃO IA
          </h1>
          <p className="block antialiased font-sans text-3xl font-normal leading-relaxed text-white mt-1 mb-12 w-full md:max-w-full">
            14º Congresso Regional de Gestão, Projetos e Liderança - PMICE
          </p>
          <div className="flex items-center gap-4">
            <Link className="w-full h-full" href="#footer">
              <Button className="w-40 h-12 text-base" variant={"outline"}>
                Ingressar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
