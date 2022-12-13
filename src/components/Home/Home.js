import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import PortfolioItem from '../Portfolio/PortfolioItem/PortfolioItem';
const Home = () => {
  const { data: portfolios = [], isLoading } = useQuery({
    queryKey: ['portfolios'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/portfolios`)
      const data = await res.json()
      return data
    }
  })
  return (
    <>
      <div className='container'>
        {/* Home Banner */}
        <div className=' px-0 md:px-16 lg:px-20 xl:px-40 pt-40 pb-20 banner'>
          <div className='flex flex-col gap-4'>
            <p className='primary-color tracking-widest'>Hi, my name is</p>
            <h1 className='text-4xl lg:text-7xl md:text-6xl font-bold text-white'>Rakib Alom.</h1>
            <h2 className='text-3xl lg:text-6xl md:text-5xl font-bold'>I build things for the web.</h2>
            <p className='w-full md:w-2/3 lg:w-2/4 my-5'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
            <div>
              <a
                className="w-36 text-center inline-block overflow-hidden border font-normal transition-all rounded border-[#64ffda] text-[#64ffda] px-4 py-2 hover:bg-[#64ffda1a] focus:outline-none focus:ring"
                href='mailto:rakibalom94@gmail.com'
                target='_blank'
              >
                👋 Say Hello!
              </a>
            </div>
          </div>
        </div>

        {/* Home Portfolio */}
        <div className="home-portfolio px-0 md:px-16 lg:px-20 xl:px-40 py-20">
          <h2 className='section-title flex items-center text-3xl text-white lg:text-5xl md:text-4xl font-bold pb-10'>Items I've built</h2>
          {
            portfolios.slice(0, 3).map((portfolio, index) => <PortfolioItem portfolio={portfolio} key={index}></PortfolioItem>)
          }
        </div>
      </div>
    </>
  );
};

export default Home;