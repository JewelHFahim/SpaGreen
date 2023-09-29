import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about us/AboutUs";

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
    ],
  },
]);

export default router;
