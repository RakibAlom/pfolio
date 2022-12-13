import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const PortfolioDetails = () => {
  const portfolio = useLoaderData();
  return (
    <>
      <div className="container">
        <div className="portfolio-details px-0 md:px-16 lg:px-20 xl:px-40 pt-10 pb-20">
          <h2 className='section-title flex items-center text-3xl text-white lg:text-5xl md:text-4xl font-bold pt-20'>{portfolio.title}</h2>
          <div className="portfolio-details-content">
            <p className="portfolio-type text-xs text-[#64ffda] tracking-wider my-5">{portfolio.portfolioType}</p>
            <img className='w-full rounded' src={portfolio.image} alt={portfolio.title} />
            <div className='portfolio-technologies'>
              <h3 className='section-title flex items-center text-xl text-white font-bold my-5'>Technologies</h3>
              <ul className="portfolio-tech-list flex flex-wrap gap-4 text-sm text-[#64ffda]">
                {
                  portfolio.technologies.map((item, i) => <li className='cursor-pointer' key={i}>{item}</li>)
                }
              </ul>
            </div>
            <div className="portfolio-details my-5">
              {portfolio.fullDetails}
            </div>
            <div className='portfolio-features'>
              <h3 className="text-2xl font-bold text-white pt-2">Features</h3>
              <ul className="portfolio-features-list mt-4">
                {
                  portfolio.technologies.map((item, i) => <li className='flex gap-2 items-center' key={i}><FaCheckCircle className='text-[#64ffda]' /> {item}</li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetails;