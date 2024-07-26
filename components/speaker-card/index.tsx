import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations";

interface SpeakerCardProps {
  id: number;
  img: string;
  name: string;
  position: string;
  title: string;
}

const SpeakerCard = ({ id, title, name, position, img }: SpeakerCardProps) => {
  return (
    <motion.div
      key={id}
      {...fadeUp}
      className="h-[24rem] w-[18rem] rounded-xl bg-[#47bfe0]"
      transition={{ duration: 1.0, delay: id * 0.1, delayChildren: 0.1 }}
    >
      <Link
        href={`/speaker/${id}`}
        className="h-[24rem] w-[18rem] rounded-xl bg-[#47bfe0]"
      >
        <Card
          color="transparent"
          shadow={false}
          className="relative mb-10 h-[24rem] w-[18rem] cursor-pointer border-[1px] border-transparent hover:border-event-200 hover:border-[1px] transition duration-300"
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="max-h-[30rem] w-full mt-0 ml-0 rounded-b-none"
          >
            <Image
              width={768}
              height={768}
              src={img}
              alt="profile"
              className="h-full w-full object-cover hover:scale-105 transition duration-300"
            />
          </CardHeader>

          <CardBody className="flex flex-col h-32 -mt-4 -ml-3">
            <div className="flex items-center gap-4">
              <div>
                <Typography variant="h6" color="blue-gray">
                  {name}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal !text-gray-900 text-justify"
                >
                  {position}
                </Typography>
              </div>
            </div>

            <Typography
              variant="h6"
              className="absolute bottom-1 font-bold text-event-200"
            >
              {title}
            </Typography>
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
};

export default SpeakerCard;
