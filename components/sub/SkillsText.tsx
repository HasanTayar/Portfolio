'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/outline'

const SkillsText = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        className="py-2 px-3 border border-[#7042f88b] opacity-90 flex items-center justify-center gap-2"
      >
        <SparklesIcon className="text-[#b49bff] h-5 w-5" />
        <h1 className="Welcome-text text-sm md:text-base">
          Think better with Next.js 14
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)} 
        className=' text-xl md:text-2xl text-white font-medium mt-2 text-center'
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-lg text-gray-200 my-4 text-center'
      >
        Never miss a task deadline or idea
      </motion.div>
    </div>
  )
}

export default SkillsText;
