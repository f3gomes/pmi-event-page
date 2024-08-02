"use client";

import React, { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const dateTarget = new Date("2024-08-02T12:00:00");

  const zero = (count: number) => {
    return String(count).length === 1 && 0;
  };

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const timeDiff = dateTarget.getTime() - now.getTime();

      const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesLeft = Math.floor(
        (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
      );

      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  if (new Date() > dateTarget) {
    return <div className="text-2xl md:text-5xl text-center">00 : 00 : 00</div>;
  }

  return (
    <div>
      <div className="flex gap-8 items-center">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-5xl text-center">
            <span>{zero(days)}</span>
            <span>{days}</span>
          </span>
          <span className="text-base">{days === 1 ? "DIA" : "DIAS"}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-2xl md:text-5xl text-center">
            <span>{zero(hours)}</span>
            <span>{hours}</span>
          </span>
          <span className="text-base">{hours === 1 ? "HORA" : "HORAS"}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-2xl md:text-5xl text-center">
            <span>{zero(minutes)}</span>
            <span>{minutes}</span>
          </span>
          <span className="text-base">
            {minutes === 1 ? "MINUTO" : "MINUTOS"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
