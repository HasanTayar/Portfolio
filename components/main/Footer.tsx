import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <div className='w-full bg-transparent text-gray-200 shadow-lg p-4'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-wrap justify-center gap-10'>
          <div className='min-w-[200px] text-center'>
            <div className='font-bold text-lg mb-4'>Community</div>

            <Link
              href='https://github.com/HasanTayar'
              passHref={true}
              className='min-w-[200px] text-center' legacyBehavior>

              <a className='flex items-center justify-center mb-4 cursor-pointer' target='_blank'>
                <FaGithub size={20} className="mr-2"/>
                GitHub
              </a>

            </Link>

          </div>

          <div className='min-w-[200px] text-center'>
            <div className='font-bold text-lg mb-4'>Social Media</div>

            <Link href='https://www.instagram.com/hasantayar161/' legacyBehavior >
              <a className='flex items-center justify-center mb-4 cursor-pointer' target='_blank'>
                <FaInstagram size={20} className="mr-2"/>
                Instagram
              </a>
            </Link>

            <Link href='https://linkedin.com/in/hasantayar/' legacyBehavior>
              <a className='flex items-center justify-center mb-4 cursor-pointer' target='_blank'>
                <FaLinkedin size={20} className="mr-2"/>
                LinkedIn
              </a>
            </Link>
          </div>
        </div>

        <div className='mb-5 text-sm text-center'>
          &copy; {getYear()} Hasan Diab. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
