import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="flex items-center justify-between max-w-6xl mx-auto h-full">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-3 text-sm md:text-base text-gray-300 hidden md:block">
            Hasan Diab
          </span>
        </a>
        <div className="hidden md:flex items-center justify-between w-full max-w-xs ml-4">
          <a href="#about-me" className="cursor-pointer text-gray-300 hover:text-white">
            About me
          </a>
          <a href="#skills" className="cursor-pointer text-gray-300 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer text-gray-300 hover:text-white">
            Projects
          </a>
        </div>
        <div className="flex gap-4">
          {Socials.map((social) => (
            <Link href={social.href} key={social.name} >
            <Image src={social.src} alt={social.name} key={social.name} width={24} height={24} className="cursor-pointer"/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
