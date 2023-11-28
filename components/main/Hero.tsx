import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className='relative flex flex-col min-h-screen w-full overflow-hidden' id='about-me'>
      <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-0 left-0 z-[-1] w-full h-full object-cover'
      >
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
