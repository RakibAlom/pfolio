import React from 'react';
import { FaCodepen, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='container'>

        <div className='px-0 md:px-16 lg:px-20 xl:px-40'>
          <hr />
          <div className='flex flex-col gap-4 py-20 items-center text-center'>
            <h2 className='text-3xl text-white lg:text-5xl md:text-4xl font-bold'>Get In Touch</h2>
            <p className='w-full md:w-2/3 lg:w-2/4 my-5'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <div>
              <a
                className="group relative w-36 text-center inline-block overflow-hidden border font-normal transition-all rounded border-[#64ffda] text-[#64ffda] px-4 py-2 hover:bg-[#64ffda1a] focus:outline-none focus:ring"
                href="mailto:rakibalom94@gmail.com" target='_blank'
              >
                Contact
              </a>
            </div>
            <div className="social-links pt-10">
              <ul className="flex m-0 p-0 gap-5 items-center">
                <li>
                  <a href="https://github.com/rakibalom" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className='hover:text-[#64ffda]'>
                    <FaGithub className='text-2xl'></FaGithub>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin/in/rakibalom" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className='hover:text-[#64ffda]'>
                    <FaLinkedinIn className='text-2xl'></FaLinkedinIn>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/rakib.alom" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className='hover:text-[#64ffda]'>
                    <FaInstagram className='text-2xl'></FaInstagram>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/rakibalom94" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className='hover:text-[#64ffda]'>
                    <FaTwitter className='text-2xl'></FaTwitter>
                  </a>
                </li>
                <li>
                  <a href="https://codepen.io/rakibalom" aria-label="Codepen" target="_blank" rel="noopener noreferrer" className='hover:text-[#64ffda]'>
                    <FaCodepen className='text-2xl'></FaCodepen>
                  </a>
                </li>
              </ul>
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