import React from 'react'
import SkillsDataProvider from '../sub/SkillsDataProvider'
import SkillsText from '../sub/SkillsText'
import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'

const Skills = () => {
  return (
    <section id='skills' className='flex flex-col items-center justify-center gap-3 pb-20 h-full relative overflow-hidden py-10 md:py-20'>
      <SkillsText/>
      {[Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill].map((skills, skillIndex) => (
        <div key={skillIndex} className='flex flex-wrap justify-center gap-5 mt-4'>
          {skills.map((image, index) => (
            <SkillsDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      ))}
      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
          <video className='w-full h-auto' preload='none' playsInline loop muted autoPlay src='/cards-video.webm'></video>
        </div>
      </div>
    </section>
  )
}

export default Skills;
