import React from 'react';
import { FaCodepen, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import './SocialLinksRight.css'
const SocialLinksRight = () => {
  return (
    <div className='left w-10 fixed bottom-0 right-4 z-40 text-[#a8b2d1]'>
      <ul class="flex flex-col m-0 p-0 right-social-links gap-5 items-center">
        <li>
          <a href="mailto:rakibalom94@gmail.com" aria-label="Mail" target="_blank" rel="noopener noreferrer" className='hover:text-[#64ffda] tracking-widest' style={{ writingMode: "vertical-rl" }}>
            rakibalom94@gmail.com
          </a>
        </li>
      </ul>
    </div >
  );
};

export default SocialLinksRight;