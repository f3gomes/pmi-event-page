import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

interface EventContentCardProps {
  img: string;
  name: string;
  position: string;
  title: string;
}
export function EventContentCard({
  title,
  name,
  position,
  img,
}: EventContentCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="mb-10 h-[36rem] w-[27rem] bg-event-300/20 cursor-pointer border-[1px] border-transparent hover:border-event-200 hover:border-[1px] transition duration-300"
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="h-[30rem] w-full mt-0 ml-0 rounded-b-none"
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover hover:scale-105 transition duration-300"
        />
      </CardHeader>

      <CardBody className="flex flex-col -mt-5">
        <div className="flex items-center gap-4">
          <div>
            <Typography variant="h6" color="blue-gray" className="">
              {name}
            </Typography>
            <Typography variant="small" className="font-normal !text-gray-600">
              {position}
            </Typography>
          </div>
        </div>

        <Typography
          variant="h6"
          color="blue-gray"
          className="font-medium absolute bottom-2"
        >
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default EventContentCard;
