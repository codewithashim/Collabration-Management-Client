import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <h1> Login </h1>,
  },
  {
    path: "/signup",
    element: <h1>Signup</h1>,
  },
  {
    path: "*",
    element: <h1>Notfound</h1>,
  },
]);

export default routes;
