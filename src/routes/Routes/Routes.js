import { createBrowserRouter } from "react-router-dom";
import About from "../../components/About/About";
import Home from "../../components/Home/Home";
import Main from "../../components/Layouts/Main/Main";

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
        path: '*',
        element: <About></About>
      }
    ]
  }
])

export default router;