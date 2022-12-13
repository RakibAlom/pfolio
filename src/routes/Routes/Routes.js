import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import Contact from "../../components/Contact/Contact";
import Home from "../../components/Home/Home";
import Main from "../../components/Layouts/Main/Main";
import NotFound from "../../components/pages/Errors/NotFound/NotFound";
import Portfolio from "../../components/Portfolio/Portfolio";
import PortfolioDetails from "../../components/Portfolio/PortfolioDetails/PortfolioDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>
      },
      {
        path: '/portfolio/:slug',
        element: <PortfolioDetails></PortfolioDetails>,
        loader: ({ params }) => fetch(`https://rakibalom-server.vercel.app/portfolio/${params.slug}`),
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
])

export default router;