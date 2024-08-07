import Image from "next/image";
import Timer from "../timer";

const TimerContent = () => {
  return (
    <section
      id="timer"
      className="flex items-center justify-center gap-8 flex-col py-12 px-3 scroll-mt-20 bg-event-300/60"
    >
      <div>
        <Image
          width={0}
          height={0}
          alt="logo"
          sizes="100vw"
          src="/logo/logo-large.png"
          className="w-[30rem] h-auto"
        />
      </div>

      <div className="text-2xl md:text-3xl text-center font-bold">
        02 E 03 DE AGOSTO | 2024
      </div>

      <div className="font-bold text-white">
        <Timer />
      </div>
    </section>
  );
};

export default TimerContent;
