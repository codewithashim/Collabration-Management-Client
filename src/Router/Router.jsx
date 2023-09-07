import { createBrowserRouter } from "react-router-dom";
import AuthLayouts from "../Layout/AuthLayout";
import Home from "../Pages/Dashboard/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivetRouter from "./PrivetRouter";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayouts />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivetRouter>
            <Home />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/add-task",
        element: (
          <PrivetRouter>
            <AddTask />
          </PrivetRouter>
        ),
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <h1>Notfound</h1>,
  },
]);

export default routes;
