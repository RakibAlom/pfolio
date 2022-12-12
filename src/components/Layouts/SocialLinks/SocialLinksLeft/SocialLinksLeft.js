import React from 'react';
import { FaCodepen, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import './SocialLinksLeft.css'
const SocialLinksLeft = () => {
  return (
    <div className='left w-10 fixed bottom-0 left-4 z-40 text-[#a8b2d1]'>
      <ul class="flex flex-col m-0 p-0 left-social-links gap-5 items-center">
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
  );
};

export default SocialLinksLeft;