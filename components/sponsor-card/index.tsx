import Image from "next/image";
import Medal from "../medal-icon/medal";

interface SponsorCardProps {
  img: string;
  fill: string;
}

const SponsorCard = ({ img, fill }: SponsorCardProps) => {
  return (
    <div className="flex justify-center items-center shadow-lg p-4 rounded-lg relative">
      <Image priority width={200} height={300} src={img} alt="logo" />

      <Medal fill={fill} />
    </div>
  );
};

export default SponsorCard;
