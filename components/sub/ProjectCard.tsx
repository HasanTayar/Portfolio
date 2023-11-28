import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href:string;
}

const ProjectCard = ({ src, title, description , href}: Props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
        <div className="relative p-4">
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
          <Link href={href}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Vist site
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
