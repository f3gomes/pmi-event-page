import Image from "next/image";
import { cn } from "@/utils/cn";

interface SponsorCardProps {
  img: string;
  medal: string;
  text: string;
  bg: string;
}

const SponsorCard = ({ img, medal, text, bg }: SponsorCardProps) => {
  return (
    <div className="flex justify-center items-center shadow-lg p-4 rounded-lg relative w-96 select-none">
      <Image
        width={0}
        height={0}
        src={img}
        sizes="100vw"
        alt="logo"
        className="w-auto h-32"
      />

      <p
        className={cn(
          bg,
          "font-semibold text-sm absolute top-1 right-0 uppercase px-2 p-1 rounded-bl-2xl rounded-tr-lg w-24 text-center text-white"
        )}
      >
        {medal}
      </p>
    </div>
  );
};

export default SponsorCard;
