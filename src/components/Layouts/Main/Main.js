import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SocialLinksLeft from '../SocialLinks/SocialLinksLeft/SocialLinksLeft';
import SocialLinksRight from '../SocialLinks/SocialLinksRight/SocialLinksRight';

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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