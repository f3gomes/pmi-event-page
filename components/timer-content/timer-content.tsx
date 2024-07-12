import Image from "next/image";
import Link from "next/link";
import Timer from "../timer/timer";

const CURRENT_YEAR = new Date().getFullYear();

export function TimerContent() {
  return (
    <div
      id="timer"
      className="flex items-center justify-center gap-4 flex-col h-96 -mb-10 bg-event-300/60"
    >
      <div>
        <Image
          width={342}
          height={147}
          src={"/logo/logo-large.png"}
          alt="logo"
          className="-mt-6"
        />
      </div>

      <div className="text-2xl md:text-3xl text-center font-bold text-amber-900">
        02 E 03 DE JULHO | 2024
      </div>

      <div className="font-bold text-white">
        <Timer />
      </div>
    </div>
  );
}

export default TimerContent;
