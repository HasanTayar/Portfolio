import React from 'react';
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from 'react-icons/rx';
import { SiMinutemailer } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='w-full bg-transparent text-gray-200 shadow-lg p-4'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-wrap justify-center gap-10'>
          <div className='min-w-[200px] text-center'>
            <div className='font-bold text-lg mb-4'>Community</div>
            <p className='flex items-center justify-center mb-4 cursor-pointer'>
              <RxGithubLogo size={20} />
              <span className='ml-2'>GitHub</span>
            </p>
          </div>
          <div className='min-w-[200px] text-center'>
            <div className='font-bold text-lg mb-4'>Social Media</div>
            <p className='flex items-center justify-center mb-4 cursor-pointer'>
              <RxInstagramLogo size={20} />
              <span className='ml-2'>Instagram</span>
            </p>
            <p className='flex items-center justify-center mb-4 cursor-pointer'>
              <RxLinkedinLogo size={20} />
              <span className='ml-2'>LinkedIn</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
