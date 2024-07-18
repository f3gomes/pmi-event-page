"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EVENT_CONTENT } from "@/data/event-data";
import { Button } from "@material-tailwind/react";
import Spinner from "../spinner";
import { LinkedinIcon } from "lucide-react";

interface SpeakerDetailsProps {
  speakerId: string;
}

const SpeakerDetails = ({ speakerId }: SpeakerDetailsProps) => {
  const [speaker, setSpeaker] = useState<(typeof EVENT_CONTENT)[0]>();

  useEffect(() => {
    const fetchSpeaker = async () => {
      const item = EVENT_CONTENT.find((item) => String(item.id) === speakerId);
      setSpeaker(item);
    };

    fetchSpeaker();
    // eslint-disable-next-line
  }, []);

  if (!speaker) {
    return (
      <div className="w-full mt-20 flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex gap-4 mt-20">
      <div className="w-96 flex flex-col items-center gap-4">
        <Image
          width={768}
          height={768}
          src={speaker?.img}
          alt={speaker?.name}
          className="rounded-xl"
        />

        <Link href={"/#speakers"} className="w-full">
          <Button className="w-full h-12 bg-orange-700 transition duration-200 hover:bg-orange-800">
            Todos os speakers
          </Button>
        </Link>
      </div>

      <div className="flex flex-col rounded-xl gap-6 w-[45.625rem] h-[28rem] p-8 bg-blue-gray-50">
        <div className="flex justify-between">
          <h3 className="uppercase text-sm">{speaker?.title}</h3>

          <Link href={"https://www.linkedin.com/in/"} target="_blank">
            <Button variant="gradient">
              <LinkedinIcon size={22} />
            </Button>
          </Link>
        </div>

        <h1 className="font-bold text-5xl">{speaker?.name}</h1>

        <h1 className="font-medium text-blue-gray-700">{speaker?.position}</h1>

        <div className="text-justify">{speaker?.des}</div>

        <div className="font-medium">{speaker?.topic}</div>
      </div>
    </div>
  );
};

export default SpeakerDetails;