import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PortfolioItem from './PortfolioItem/PortfolioItem';

const Portfolio = () => {
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
      <div className="home-portfolio px-0 md:px-16 lg:px-20 xl:px-40 pb-20">
        <h2 className='section-title flex items-center text-3xl text-white lg:text-5xl md:text-4xl font-bold pb-10 pt-40'>My Portfolio Items</h2>
        {
          portfolios.slice(0, 3).map((portfolio, index) => <PortfolioItem portfolio={portfolio} key={index}></PortfolioItem>)
        }
      </div>
    </>
  );
};

export default Portfolio;