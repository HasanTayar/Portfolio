'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
interface Props{
    src:string,
    width:number,
    height:number
    index:number
}
const SkillsDataProvider = ({src , width , height ,index}:Props) => {
    const [ref , inView] = useInView({triggerOnce:true}) 
    const imageVarient = {
        hidden:{opacity:0},
        visbile:{opacity:1}
    }
    const animatedDelay = 0.3

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    variants={imageVarient}
    animate={inView ? 'visbile' : 'hidden'}
    custom={index}
    transition={{delay: index * animatedDelay}}
    >
      <Image src={src} width={width} height={height} alt='skill image'/>
    </motion.div>
  )
}

export default SkillsDataProvider
