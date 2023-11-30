"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { RxDownload } from "react-icons/rx";
import Image from "next/legacy/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 py-20 lg:py-40 w-full z-20"
    >
      <div className="flex flex-col gap-5 justify-center items-center lg:items-start text-center lg:text-left">
        <motion.div
          variants={slideInFromTop}
          className="inline-flex items-center justify-center gap-2 py-2 px-3 border border-[#7042f88b] opacity-90 rounded-md"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-lg lg:text-xl font-semibold">
            Software Engineer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-3xl lg:text-5xl font-bold text-white my-4"
        >
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            the best{" "}
          </span>
          project experience
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md lg:text-lg text-gray-300 my-6"
        >
          I&apos;m a Software Engineer with experience in Website, Mobile, and
          Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="inline-flex items-center justify-center py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white cursor-pointer rounded-lg text-sm lg:text-md font-medium transition-colors duration-300 ease-in-out"
        >
          <RxDownload size={20} />
          {"    "}Download CV
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="mt-12 lg:mt-0 flex justify-center items-center w-full"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          layout="intrinsic"
          width={650}
          height={650}
          className="w-auto h-auto max-w-xs lg:max-w-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
