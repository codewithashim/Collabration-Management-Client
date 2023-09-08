import { createBrowserRouter } from "react-router-dom";
import AuthLayouts from "../Layout/AuthLayout";
import Home from "../Pages/Dashboard/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivetRouter from "./PrivetRouter";
import AddTask from "../Pages/Dashboard/Task/AddTask/AddTask";
import AddTeam from "../Pages/Dashboard/Team/AddTeam/AddTeam";
import Users from "../Pages/Dashboard/Users/Users";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayouts />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
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
      {
        path: "/dashboard/team",
        element: (
          <PrivetRouter>
            <AddTeam />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <PrivetRouter>
            <Users />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/user/:id",
        element: (
          <PrivetRouter>
            <h1>user</h1>
          </PrivetRouter>
        )
      }
        
    ],
  },
  {
    path: "*",
    element: <h1>Notfound</h1>,
  },
]);

export default routes;
