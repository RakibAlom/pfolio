import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='container'>
        <div className='px-0 md:px-20 lg:px-48 py-20'>
          <div className='flex flex-col gap-4 items-center text-center'>
            <h2 className='text-3xl text-white lg:text-5xl md:text-4xl font-bold'>Get In Touch</h2>
            <p className='w-full md:w-2/3 lg:w-2/4 my-5'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <div>
              <Link
                class="group relative w-36 text-center inline-block overflow-hidden border font-normal transition-all rounded border-[#64ffda] text-[#64ffda] px-4 py-2 hover:bg-[#64ffda1a] focus:outline-none focus:ring"
                href="/download"
              >
                👋 Say Hello!
              </Link>
            </div>
          </div>
        </div>
        <div className='text-center py-5'>
          <p className='text-sm'>&copy; Copyright by Full-Stack Developer <a href="https://github.com/rakibalom" className='hover:text-[#64ffda]'>Rakib Alom</a></p>
        </div>
      </div>
    </>
  );
};

export default Footer;