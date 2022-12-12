import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SocialLinksLeft from '../SocialLinks/SocialLinksLeft/SocialLinksLeft';
import SocialLinksRight from '../SocialLinks/SocialLinksRight/SocialLinksRight';

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <SocialLinksLeft />
      <SocialLinksRight />
    </div>
  );
};

export default Main;