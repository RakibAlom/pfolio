import React from 'react';
import comingSoon from '../../assets/images/coming-soon.webp';

const Blog = () => {
  return (
    <div className="container">
      <div className="px-0 md:px-16 lg:px-20 xl:px-40 pt-32">
        <img className='rounded-lg' src={comingSoon} alt="Coming Soon" />
      </div>
    </div>
  );
};

export default Blog;