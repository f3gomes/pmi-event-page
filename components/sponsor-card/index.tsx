import Image from "next/image";
import Medal from "../medal-icon/medal";

interface SponsorCardProps {
  img: string;
  fill: string;
}

const SponsorCard = ({ img, fill }: SponsorCardProps) => {
  return (
    <div className="flex justify-center items-center shadow-lg p-4 rounded-lg relative">
      <Image
        width={0}
        height={0}
        src={img}
        sizes="100vw"
        alt="logo"
        className="w-auto h-32"
      />

      <Medal fill={fill} />
    </div>
  );
};

export default SponsorCard;
