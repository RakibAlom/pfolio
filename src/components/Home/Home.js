import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='px-0 md:px-20 lg:px-48 py-20'>
          <div className='flex flex-col gap-4'>
            <p className='primary-color tracking-widest'>Hi, my name is</p>
            <h1 className='text-4xl lg:text-7xl md:text-6xl font-bold text-white'>Rakib Alom.</h1>
            <h2 className='text-3xl lg:text-6xl md:text-5xl font-bold'>I build things for the web.</h2>
            <p className='w-full md:w-2/3 lg:w-2/4 my-5'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
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
      </div>
    </>
  );
};

export default Home;