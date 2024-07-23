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
    <div className="flex justify-center items-center shadow-lg p-4 rounded-lg relative w-96">
      <Image
        width={0}
        height={0}
        src={img}
        sizes="100vw"
        alt="logo"
        className="w-auto h-32"
      />

      <p
        className={cn(bg, "font-semibold absolute top-1 right-0 uppercase p-2 rounded-bl-2xl rounded-tr-lg w-28 text-center text-white")}
      >
        {medal}
      </p>
    </div>
  );
};

export default SponsorCard;
