"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/legacy/image";
interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}
const SkillsDataProvider = ({ src, width, height, index }:Props) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const imageVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animatedDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariant}
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * animatedDelay }}
      className="w-auto h-auto"
    >
      <Image src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
};

export default SkillsDataProvider;
