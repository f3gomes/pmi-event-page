"use client";

import React, { useState, useEffect } from "react";

function Timer() {
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);

  const dataHoraObjetivo = new Date("2024-08-02T12:00:00");

  useEffect(() => {
    const atualizarContagemRegressiva = () => {
      const agora = new Date();
      const diferencaTempo = dataHoraObjetivo.getTime() - agora.getTime();

      const diasRestantes = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
      const horasRestantes = Math.floor(
        (diferencaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutosRestantes = Math.floor(
        (diferencaTempo % (1000 * 60 * 60)) / (1000 * 60)
      );

      setDias(diasRestantes);
      setHoras(horasRestantes);
      setMinutos(minutosRestantes);
    };

    atualizarContagemRegressiva();
    const intervalo = setInterval(atualizarContagemRegressiva, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      {/* <h1>Contagem regressiva para 02/08/2024 - 12:00</h1> */}
      <div className="flex gap-8">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-5xl text-center">{dias}</span>
          <span className="text-base">DIAS</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl md:text-5xl text-center">{horas}</span>
          <span className="text-base">HORAS</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl md:text-5xl text-center">{minutos}</span>
          <span className="text-base">MINUTOS</span>
        </div>
      </div>
    </div>
  );
}

export default Timer;
