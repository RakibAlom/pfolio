import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import Home from "../../components/Home/Home";
import Main from "../../components/Layouts/Main/Main";
import NotFound from "../../components/pages/Errors/NotFound/NotFound";
import Portfolio from "../../components/Portfolio/Portfolio";

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
        element: <Home></Home>,
        loader: ({ params }) => fetch(`http://localhost:5000/portfolio/${params.slug}`),
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
])

export default router;