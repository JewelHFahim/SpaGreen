import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about us/AboutUs";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contacts/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
