import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './PortfolioItem.css';

const PortfolioItem = ({ portfolio }) => {
  return (
    <>
      <div className='portfolio-item mb-20'>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6 portfolio-img">
            <img className='portfolio-thumbnail w-full rounded lg:h-80' src={portfolio.image} alt={portfolio.title} />
          </div>
          <div className="col-span-12 lg:col-span-6 justify-center flex flex-col portfolio-content">
            <p className="portfolio-type text-xs text-[#64ffda] tracking-wider">{portfolio.portfolioType}</p>
            <h3 className="portfolio-title text-3xl font-bold text-white pt-2">
              <Link to={`/portfolio/${portfolio.slug}`}>{portfolio.title}</Link>
            </h3>
            <div className="portfolio-description bg-[#112240] p-6 my-6 rounded hover:shadow-lg lg:-ml-20">
              <p>
                {portfolio.shortDetails}
              </p>
            </div>
            <ul className="portfolio-tech-list flex flex-wrap gap-4 text-sm">
              {
                portfolio.technologies.map((item, i) => <li className='cursor-pointer' key={i}>{item}</li>)
              }
            </ul>
            <div className='portfolio-buttons mt-5 flex gap-5'>
              <Link
                className="overflow-hidden text-sm border font-normal transition-all rounded border-[#64ffda] text-[#64ffda] px-4 py-2 hover:bg-[#64ffda1a] focus:outline-none focus:ring flex gap-2 items-center"
                to={`/portfolio/${portfolio.slug}`}
              >
                See Details
              </Link>
              <a
                className="overflow-hidden text-sm border font-normal transition-all rounded border-[#64ffda] text-[#64ffda] px-4 py-2 hover:bg-[#64ffda1a] focus:outline-none focus:ring flex gap-2 items-center"
                href={portfolio.links.live}
                target="_blank"
              >
                GitHub <FaGithub className='text-sm' />
              </a>
              <a
                className="overflow-hidden text-sm border font-normal transition-all rounded border-[#64ffda] text-[#64ffda] px-4 py-2 hover:bg-[#64ffda1a] focus:outline-none focus:ring flex gap-2 items-center"
                href={portfolio.links.github}
                target="_blank"
              >
                Preview
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className=" h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;