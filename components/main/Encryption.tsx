"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/legacy/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center min-h-screen justify-center w-full">
      <div className="absolute w-auto h-auto top-0 z-10 text-center">
        <motion.div
          variants={slideInFromTop}
          className="text-3xl md:text-4xl font-medium text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "} &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-20 w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/LockTop.png"
            alt="Lock Top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>
        <div className="px-4 py-1 z-20 border my-4 border-[#7042f88b] opacity-90">
          <h1 className="text-sm text-gray-300">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-20 bottom-4 px-4 text-center">
        <div className="cursive text-lg font-medium text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full md:w-[80%] flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
