import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Profile from "../pages/user/Profile";
import ProfileEdit from "../pages/user/ProfileEdit";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Users from "../pages/user/Users";
import ProfileUpdate from "../pages/user/ProfileUpdate";

const router = createBrowserRouter([

  {
    path: '/login',
    element: <Login />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit",
        element: <ProfileEdit />,
      },
      {
        path: "profile/update/:id",
        element: <ProfileUpdate />
      }
    ],
  },
]);

export default router