import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
}

const ProjectCard = ({ src, title, description, href }: Props) => {
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
          {/* Remove the <a> tag */}
          <Link href={href}>
            <span className="cursor-pointer z-50 mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
              Learn More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
