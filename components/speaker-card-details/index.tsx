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
      <div className="w-full flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex justify-center py-28 md:h-screen items-center flex-col md:flex-row gap-4 px-1">
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

      <div className="flex relative flex-col rounded-xl gap-3 md:gap-6 max-w-[45.625rem] md:h-[28rem] p-8 bg-blue-gray-50">
        <div className="flex justify-between">
          <h3 className="uppercase text-sm">{speaker?.title}</h3>

          <Link href={"https://www.linkedin.com/in/"} target="_blank">
            <Button variant="gradient">
              <LinkedinIcon size={22} />
            </Button>
          </Link>
        </div>

        <h1 className="font-bold text-3xl md:text-5xl">{speaker?.name}</h1>

        <h1 className="font-medium text-blue-gray-700">{speaker?.position}</h1>

        <div className="text-justify mb-16 md:mb-0">{speaker?.des}</div>

        <div className="font-medium absolute bottom-5 mr-8">
          {speaker?.topic}
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetails;
