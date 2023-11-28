"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-20 md:mt-40 w-full z-20"
    >
      <div className="flex flex-col gap-5 justify-center text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="py-2 px-3 border border-[#7042f88b] opacity-90 flex items-center justify-center gap-2"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="text-base Welcome-text md:text-lg">
            Software Engineer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-4xl md:text-6xl font-bold text-white mt-6"
        >
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "} the best{" "}
          </span>
          project experience
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-4 md:my-5"
        >
          I&apos;m a Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg md:max-w-[200px]"
        >
          Learn more
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="mt-10 md:mt-0 w-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={300}
          width={300}
          className="md:h-[650px] md:w-[650px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
